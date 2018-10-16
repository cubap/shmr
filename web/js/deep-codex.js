// import {Deer} from './deer.js'

const SCREEN = {}
SCREEN.annotations = {}
SCREEN.targets = {}
SCREEN.promises = []
const URLS = {}
URLS.BASE_ID = "http://devstore.rerum.io/v1"
URLS.CREATE = "http://tinydev.rerum.io/app/create"
URLS.UPDATE = "http://tinydev.rerum.io/app/update"
URLS.QUERY = "http://tinydev.rerum.io/app/query"

function loadHash() {
	let params = getParams(window.location.href)
	let hash = window.location.hash.substr(1)
	changeObject(hash)
	canvasView.innerText = hash
}

main.addEventListener('filed-annotation', function (event) {
	if (event.target_object === objectDescription.getAttribute("deep-id")) {
		renderObjectDescription(SCREEN.canvas)
	}
})

function render(obj = {}) {
	aggregateAnnotations(obj)
	switch (obj["@type"]) {
		case "sc:Canvas":
			SCREEN.canvas = obj
			localStorage.setItem(obj["@id"], JSON.stringify(obj))
			canvasView.setAttribute("deep-id", obj["@id"])
			objectDescription.setAttribute("deep-id", obj["@id"])
			renderCanvasImage(SCREEN.canvas)
			break
		case "sc:Manifest":
			SCREEN.manifest = obj
			manifestNav.setAttribute("deep-id", obj["@id"])
			renderManifest(SCREEN.manifest)
			let presi = (obj["@context"] && obj["@context"].indexOf("/3/context.json") > -1) ? 3 : 2
			SCREEN.canvas = (presi === 3) ?
				fromIdInArray(SCREEN.manifest.start.id, SCREEN.manifest.items) || SCREEN.manifest.items[0] :
				fromIdInArray(SCREEN.manifest.startCanvas, SCREEN.manifest.sequences[0].canvases) || SCREEN.manifest.sequences[0].canvases[0]
			let canvasList = (presi === 3) ? SCREEN.manifest.items : SCREEN.manifest.sequences[0].canvases
			SCREEN.promises.push(canvasList)
			aggregateAnnotations()
			canvasList.map(item => {
				let id = item["@id"]
				try {
					if (!localStorage.getItem(id)) {
						localStorage.setItem(id, JSON.stringify(item))
					}
					let stored = JSON.parse(localStorage.getItem(id))
					if (!(stored.items || stored.images)) {
						throw "Please expand this item"
					}
				} catch (err) {
					fetch(id).then(response => response.json()).catch(error => showMessage(error))
						.then(obj => localStorage.setItem(obj["@id"], JSON.stringify(obj)))
				}
			})
			localStorage.setItem(obj["@id"], JSON.stringify(obj))
			renderCanvasImage(SCREEN.canvas)
	}
	renderObjectDescription(obj)
}
/**
 * Observer callback for rendering newly loaded objects. Checks the
 * mutationsList for "deep-object" attribute changes.
 * @param {Array} mutationsList of MutationRecord objects
 */
async function newObjectRender(mutationsList) {
	for (var mutation of mutationsList) {
		if (mutation.attributeName === "deep-id") {
			let id = mutation.target.getAttribute("deep-id")
			let obj = localStorage.getItem("id")
			if (!obj || !(obj.items || obj.images)) {
				obj = await fetch(id)
					.then(response => response.json()).catch(error => showMessage(error))
			}
			render(obj)
		}
	}
}

function fromIdInArray(id, array) {
	let item
	for (let i of array) {
		if (i["@id"] === id || i.id === id) {
			return i
		}
	}
	return null
}

/**
 * Execute query for any annotations in RERUM which target the
 * id passed in. Promise resolves to an array of annotations.
 * @param {String} id URI for the targeted entity
 */
async function findByTargetId(id, noFetch) {
	let obj = {
		target: id
	}
	if (!noFetch) {
		fetch(URLS.QUERY, {
				method: "POST",
				body: JSON.stringify(obj),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(response => response.json())
			.then(matches => matches.map(fileAnnotation))
	}
	return SCREEN.targets[target]
}

async function aggregateAnnotations(obj = {}) {
	// otherContent, annotations, queried (all commenting or describing)
	if (obj.otherContent) {
		SCREEN.promises = SCREEN.promises.concat(obj.otherContent)
	}
	if (obj.annotations) {
		SCREEN.promises = SCREEN.promises.concat(obj.annotations)
	}
	let id = obj["@id"] || obj.id
	if (id) {
		SCREEN.promises = SCREEN.promises.concat(findByTargetId(id).catch(err => []))
	}
	if (SCREEN.promises.length === 0) return true
	let entry = SCREEN.promises.shift()
	switch (typeof entry) {
		case "string":
			let resource = fetch(entry).then(response => response.json())
			SCREEN.promises.push(resource)
			break
		case "object":
			if (Array.isArray(entry)) {
				if (entry.length === 0) {
					return // empty result, please do nothing and move on.
				}
				SCREEN.promises = SCREEN.promises.concat(entry)
				return aggregateAnnotations()
			} else {
				if (typeof entry.then === "function") {
					let result = await entry
					SCREEN.promises.push(result)
					return aggregateAnnotations()
				}
				switch (entry["@type"] || entry.type) {
					case "sc:Manifest":
					case "Manifest":
					case "sc:Canvas":
					case "Canvas":
					return aggregateAnnotations(entry)
					case "sc:AnnotationList":
					case "AnnotationList":
						if (entry.resources) {
							SCREEN.promises = SCREEN.promises.concat(entry.resources)
						} else {
							SCREEN.promises.push(fetch((entry["@id"])).then(response => response.json()).catch(err => {}))
						}
						return aggregateAnnotations()
					case "AnnotationPage":
						if (entry.items) {
							SCREEN.promises = SCREEN.promises.concat(entry.items)
						} else {
							SCREEN.promises.push(fetch((entry.id)).then(response => response.json()).catch(err => {}))
						}
						return aggregateAnnotations()
					case "Annotation":
					case "oa:Annotation":
						// Annotation found!
						fileAnnotation(entry)
						return aggregateAnnotations()
					default: // just discard and move on
					return aggregateAnnotations()
				}
			}
	}
}

function fileAnnotation(annotation) {
	let motivation = annotation.motivation || annotation["oa:Motivation"]
	let category
	if (motivation.indexOf("describing") > -1) {
		category = "description"
	}
	if (motivation.indexOf("commenting") > -1) {
		category = "commentary"
	}
	if (motivation.indexOf("classifying") > -1) {
		category = "classification"
	}
	if (motivation.indexOf("linking") > -1) {
		category = "links"
	}
	if (motivation.indexOf("tagging") > -1) {
		category = "tags"
	}
	if (category === undefined) {
		continue
	} // I don't know what this is; let's move on.
	let id = annotation.id || annotation["@id"]
	let target = annotation.on || annotation.target
	localStorage.setItem(id, JSON.stringify(annotation))
	SCREEN.annotations[id] = annotation
	if (SCREEN.targets[target] && SCREEN.targets[target][category]) {
		if (SCREEN.targets[target][category].indexOf(id) === -1) {
			SCREEN.targets[target][category].push(id)
		} else {
			// It is already there, calm down.
		}
	} else {
		SCREEN.targets[target] = [id]
	}
	let announcement = new CustomEvent("filed-annotation", {
		target_object: target,
		category: category,
		anno_id: id
	})
}

function renderObjectDescription(object, fieldsX) {
	// Dummy schema
	let fields = [{
		label: "test",
		default_value: "filled",
		options: {
			helptext: "",
			type: "number", // memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
			required: false,
			min: null, // range, date
			max: null, // range, date
			step: null, // range
			pattern: null // tel
		},
		type: "rr:test" // web ontology from schema (JSON-LD @type)
	}, {
		label: "multiple",
		default_value: "grommit",
		options: {
			type: "memo"
		},
		type: "cidoc-crm:Stuff"
	}, {
		label: "multiple",
		default_value: "grommit",
		options: {
			type: "date"
		}
	}, {
		label: "multiple",
		default_value: "grommit",
		options: {
			type: "text"
		}
	}]

	let tmplData = `<h2>${object.label || "[ unlabeled ]"}</h2>`
	let presi = (object["@context"] && object["@context"].indexOf("/3/context.json") > -1) ? 3 : 2
	tmplData += object.metadata ? `<dl>${object.metadata.reduce((a,b)=>a+=`<dt>${b.label}</dt><dd>${getValue(b)}</dd>`,``)}</dl>` : `<p>no metadata</p>`

	for (key in SCREEN.targets[objectDescription.getAttribute("deep-id")]) {
		// categories expected: description, commentary, classification, links, tags
		tmplData += `<h3>${key}</h3>
		<dl class="meta-${key}">`
		for (id of SCREEN.targets[objectDescription.getAttribute("deep-id")][key]) {
			let annotation = SCREEN.annotations[id]
			let label = annotation.label || annotation.type || annotation['@type'] || annotation.name || annotation.title
			let value = getValue(annotation)
			tmplData += `<dt>${label}</dt><dd>${value}</dd>`
		}
	}

	tmplData += descriptionFormTemplate(fields)
	objectDescription.innerHTML = tmplData
}

function renderCanvasImage(canvas) {
	let elemWidth = canvasView.offsetWidth
	let elemHeight = elemWidth * (canvas.height / canvas.width)
	let tmpl = ``
	let presi = (canvas["@context"] && canvas["@context"].indexOf("/3/context.json") > -1) ? 3 : 2
	try {
		switch (presi) {
			case 3:
				tmpl = `<img src="${canvas.items[0].items[0].id}" alt="canvas image" >`
				break
			default:
				tmpl = `<img src="${canvas.images[0].resource["@id"]}" alt="canvas image" >`
		}
	} catch (err) {
		tmpl = `<img src="" alt="no image detected" width="${elemWidth}" height="${elemHeight}">`
	}
	canvasView.innerHTML = tmpl
}

function changeObject(newId) {
	main.setAttribute("deep-id", newId)
}

function renderManifest(manifest = {}) {
	let tmpl
	let presi = (manifest["@context"] && manifest["@context"].indexOf("/3/context.json") > -1) ? 3 : 2
	try {
		switch (presi) {
			case 3:
				tmpl = manifest.items.reduce((a, b) => a += `<a onclick="changeObject('${b.id}')" class="button">${b.label}</a>`, ``)
				break
			default:
				tmpl = manifest.sequences[0].canvases.reduce((a, b) => a += `<a onclick="changeObject('${b["@id"]}')" class="button">${b.label}</a>`, ``)
		}
		tmpl = `<a href="#${manifest["@id"]}" class="button">IIIF Manifest</a> ${tmpl}`
	} catch (err) {
		tmpl = `No pages here`
	}
	manifestNav.setAttribute("src", manifest["@id"] || manifest.id)
	manifestNav.innerHTML = tmpl

}

function descriptionFormTemplate(fields) {
	return `<form> ${fields.reduce((a,b)=>a+=formField(b),``)} </form>`
}

function formField(field) {
	let tmpl = `<label>${field.label}</label>`
	if (!field.options) {
		field.options = {}
	}
	switch (field.options.type) {
		// memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
		case "memo":
			tmpl += `<textarea at-type="${field.type}"${field.options.required ? ` required="true"` : ``}>${field.default_value}</textarea>`
			break
		case "number":
		case "email":
		case "url":
		case "tel":
		case "range":
		case "date":
		case "month":
		case "week":
		case "time":
		case "datetime":
		case "color":
			tmpl += `<input type="${field.options.type}" at-type="${field.type}"${field.options.required ? ` required="true"` : null} value="${field.default_value}">`
			break
		default:
			tmpl += `<input type="text" at-type="${field.type}"${field.options.required ? ` required="true"` : ``} value="${field.default_value}">`
	}
	return tmpl
}

function showMessage(message, clear) {
	let msg = document.createElement('p')
	msg.innerHTML = `${message}`
	if (clear) {
		messages.innerHTML = ''
	}
	messages.appendChild(msg)
}

function getValue(property, asType) {
	// TODO: There must be a best way to do this...
	let prop;
	if (Array.isArray(property)) {
		prop = property.map(getValue)
	}
	if (typeof property === "object") {
		// TODO: JSON-LD insists on "@value", but this is simplified in a lot
		// of contexts. Reading that is ideal in the future.
		prop =
			property.hasOwnProperty("@value") && property["@value"] ||
			property.hasOwnProperty("value") && property["value"] ||
			property.hasOwnProperty("$value") && property["$value"] ||
			property.hasOwnProperty("val") && property["val"]
	} else {
		prop = property
	}
	// JSON-LD says no nested arrays, but we know people.
	if(Array.isArray(prop)) { prop = prop.map(getValue) } 
	try {
		switch (asType.toUpperCase()) {
			case "STRING":
				prop = prop.toString();
				break
			case "NUMBER":
				prop = parseFloat(prop);
				break
			case "INTEGER":
				prop = parseInt(prop);
				break
			case "BOOLEAN":
				prop = !Boolean(["false", "no", "0", "", "undefined", "null"].indexOf(String(prop).toLowerCase().trim()));
				break
			default:
		}
	} catch (err) {
		if (asType) {
			throw new Error("asType: '" + asType + "' is not possible.\n" + err.message)
		} else {
			// no casting requested
		}
	} finally {
		return (prop.length === 1) ? prop[0] : prop
	}
}

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

const newObjectLoader = new MutationObserver(newObjectRender)
newObjectLoader.observe(document.getElementById("main"), {
	attributes: true
})

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
	  navigator.serviceWorker.register('/js/worker.js').then(function(registration) {
		// Registration was successful
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	  }, function(err) {
		// registration failed :(
		console.log('ServiceWorker registration failed: ', err);
	  });
	});
  }

window.onload = window.onhashchange = loadHash