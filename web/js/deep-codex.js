// import {Deer} from './deer.js'

const SCREEN = {}
SCREEN.annotations = {}
const URLS = {}
URLS.BASE_ID = "http://devstore.rerum.io/v1"
URLS.CREATE = "http://tinydev.rerum.io/app/create"
URLS.UPDATE = "http://tinydev.rerum.io/app/update"
URLS.QUERY= "http://tinydev.rerum.io/app/query"

function loadHash() {
    let params = getParams(window.location.href)
	let hash = window.location.hash.substr(1)
	main.setAttribute("deep-id",hash)
	canvasView.innerText = hash
}

function render(obj) {
	switch(obj["@type"]) {
		case "sc:Canvas" : 
		SCREEN.canvas = obj
		localStorage.setItem(obj["@id"],JSON.stringify(obj))
		canvasView.setAttribute("deep-id",obj["@id"])
		renderCanvas(SCREEN.canvas)
		break
		case "sc:Manifest" : 
		SCREEN.manifest = obj
		manifestNav.setAttribute("deep-id",obj["@id"])
		renderManifest(SCREEN.manifest)
		let presi = (obj["@context"] && obj["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
		SCREEN.canvas = (presi===3) 
			? fromIdInArray(SCREEN.manifest.start.id,SCREEN.manifest.items)||SCREEN.manifest.items[0]
			: fromIdInArray(SCREEN.manifest.startCanvas,SCREEN.manifest.sequences[0].canvases)||SCREEN.manifest.sequences[0].canvases[0]
		let canvasList = (presi===3) ? SCREEN.manifest.items : SCREEN.manifest.sequences[0].canvases
		canvasList.map(item=>{
			let id = item["@id"]
			try {
				if(!localStorage.getItem(id)){
					localStorage.setItem(id,JSON.stringify(item))
				}
				let stored = JSON.parse(localStorage.getItem(id))
				if(!(stored.items || stored.images)) {
					throw "Please expand this item"
				}
			} catch(err) {
				fetch(id).then(response=>response.json()).catch(error=>showMessage(error))
				.then(obj=>localStorage.setItem(obj["@id"],JSON.stringify(obj)))
			}
		})
		localStorage.setItem(obj["@id"],JSON.stringify(obj))
		renderCanvas(SCREEN.canvas)
	}
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
			if(!obj || !(obj.items || obj.images)) {
				obj = await fetch(id)
				.then(response=>response.json()).catch(error=>showMessage(error))
			}
			render(obj)
		}
	}
}

function fromIdInArray(id,array) {
	let item
	for(let i of array){
		if(i["@id"]===id || i.id===id){
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
async function findByTargetId(id) {
	let everything = Object.keys(localStorage).map(JSON.parse(localStorage.getItem(k)))
	let obj = {
		target: id
	}
	let matches = await fetch(URLS.QUERY, {
		method: "POST",
		body: JSON.stringify(obj),
		headers: {
			"Content-Type": "application/json"
		}
	}).then(response => response.json())
	let local_matches = everything.filter(o => o.target === id)
	matches = local_matches.concat(matches)
	return matches
}

function aggregateAnnotations(obj) {
	// otherContent, annotations, queried (all commenting or describing)
	let annos = []
	if(obj.otherContent) { annos = annos.concat(obj.otherContent.reduce(a,b=>(a.resources||([a["@id"] && a]||[{"@id":a}])).concat(b.resources||([b["@id"] && b]||[{"@id":b}])))) }
	if(obj.annotations) { annos = annos.concat(obj.annotations.reduce(a,b=>(a.items||([a.id] && [a] || [{id:a}])).concat(b.items||([b.id && b]||[{id:b}])))) }
	SCREEN.promises = SCREEN.promises || []
	SCREEN.promises = SCREEN.promises.concat(findByTargetId(obj["@id"]||obj.id).catch(err=>[]))
	for(let entry of annos) {
		switch(typeof entry){
			case "object": 
			if(!Array.isArray(entry)) {
				switch(entry["@type"] || entry.type) {
					case "sc:AnnotationList" : 
					case "AnnotationList" :
					if(entry.resources) {
						SCREEN.promises = SCREEN.promises.concat(entry.resources)
					} else {
						SCREEN.promises = SCREEN.promises.concat(fetch((entry["@id"])).then(response => response.json()).catch(err=>{}))
					}
					break
					case "AnnotationPage" :
					if(entry.items) {
						SCREEN.promises = SCREEN.promises.concat(entry.items)
					} else {
						SCREEN.promises = SCREEN.promises.concat(fetch((entry.id)).then(response => response.json()).catch(err=>{}))
					}
					break
					case "Annotation" :
					case "oa:Annotation" :
					// Annotation found!
					localStorage.setItem(entry.id||entry["@id"],JSON.stringify(entry))
					SCREEN.annotations[entry.id||entry["@id"]] = entry
					### TODO BADAH!
					break
					default : // just discard and move on
				}
			} else {
				SCREEN.promises = SCREEN.promises.concat(entry)
			}
			break
			case "string":
			let resource = fetch(entry).then(response => response.json())
			SCREEN.promises = SCREEN.promises.concat(resource)
		}
	}
}

function renderCanvas(canvas) {
	let elemWidth = canvasView.offsetWidth
	let elemHeight = elemWidth * (canvas.height/canvas.width)
	let tmpl = ``
	let tmplData = `<h2>${canvas.label || "[ unlabeled ]"}</h2>`
	let presi = (canvas["@context"] && canvas["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
	try {
		switch(presi) {
			case 3: tmpl = `<img src="${canvas.items[0].items[0].id}" alt="canvas image" >`
			break
			default : tmpl = `<img src="${canvas.images[0].resource["@id"]}" alt="canvas image" >`
		}
	} catch(err) {
		tmpl = `<img src="" alt="no image detected" width="${elemWidth}" height="${elemHeight}">`
	}
	canvasDescription.innerHTML = canvas.metadata ? `${tmplData}<dl>${canvas.metadata.reduce((a,b)=>a+=`<dt>${b.label}</dt><dd>${b.value}</dd>`,``)}</dl>` : `${tmplData}<p>no metadata</p>`
	
	// Dummy schema
	let fields = [
		{
			label: "test",
			default_value: "filled",
			options: {
				helptext: "",
				type: "number", // memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
				required: false,
				min: null,		// range, date
				max: null,		// range, date
				step: null,		// range
				pattern: null	// tel
			},
			type: "rr:test"		// web ontology from schema (JSON-LD @type)
		}, {
			label: "multiple",
			default_value: "grommit",
			options: {
				type: "memo"
			}
		}
	]
	
	canvasDescription.innerHTML += descriptionFormTemplate(fields)
	canvasView.innerHTML = tmpl
}

function renderManifest(manifest={}) {
	let tmpl
	let presi = (manifest["@context"] && manifest["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
	try {
		switch(presi){
			case 3: tmpl = manifest.items.reduce((a,b)=>a+=`<a href="#${b.id}" class="button">${b.label}</a>`,``)
			break
			default: tmpl = manifest.sequences[0].canvases.reduce((a,b)=>a+=`<a href="#${b["@id"]}" class="button">${b.label}</a>`,``)
		}
		tmpl = `<a href="#${manifest["@id"]}" class="button">IIIF Manifest</a> ${tmpl}`
	} catch(err) {
		tmpl = `No pages here`
	}
	manifestNav.setAttribute("src",manifest["@id"]||manifest.id)
	manifestNav.innerHTML = tmpl
}

function descriptionFormTemplate(fields) {
	return `<form> ${fields.reduce((a,b)=>a+=formField(b),``)} </form>`
}

function formField(field) {
	let tmpl = `<label>${field.label}</label>`
	if(!field.options) { field.options = {} }
	switch(field.options.type) {
		// memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
		case "memo" : tmpl += `<textarea at-type="${field.type}"${field.options.required ? ` required="true"` : ``}>${field.default_value}</textarea>`
		break
		case "number" : 
		case "email" :
		case "url" :
		case "tel" :
		case "range" :
		case "date" :
		case "month" :
		case "week" :
		case "time" :
		case "datetime" :
		case "color" : tmpl += `<input type="${field.options.type}" at-type="${field.type}"${field.options.required ? ` required="true"` : null} value="${field.default_value}">`
		break
		default : tmpl += `<input type="text" at-type="${field.type}"${field.options.required ? ` required="true"` : ``} value="${field.default_value}">`
	}
	return tmpl
}

function showMessage(message, clear) {
	let msg = document.createElement('p')
	msg.innerHTML = `${message}`
	if(clear) {messages.innerHTML=''}
	messages.appendChild(msg)
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
window.onload = window.onhashchange = loadHash
