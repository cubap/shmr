const SCREEN = {}
function loadHash() {
    let params = getParams(window.location.href)
	let hash = window.location.hash.substr(1)
	canvasView.setAttribute("deep-canvas-id",hash)
	canvasView.innerText = hash
	fetch(hash)
	.then(response=>response.json()).catch(error=>showMessage(error))
	.then(function(obj){
		switch(obj["@type"]) {
			case "sc:Canvas" : 
			SCREEN.canvas = obj
			break
			case "sc:Manifest" : 
			SCREEN.manifest = obj
			let presi = (obj["@context"] && obj["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
			SCREEN.canvas = (presi===3) ? fromIdInArray(SCREEN.manifest.start.id,SCREEN.manifest.items)||SCREEN.manifest.items[0] : fromIdInArray(SCREEN.manifest.startCanvas,SCREEN.manifest.sequences[0].canvases)||SCREEN.manifest.sequences[0].canvases[0]
		}
		renderCanvas(SCREEN.canvas)
		renderManifest(SCREEN.manifest)

	}).catch(error=>showMessage(error))
}

function fromIdInArray(id,array) {
	let item
	for(i of array){
		if(i["@id"]===id || i.id===id){
			return i
		}
	}
	return null
}

function renderCanvas(canvas) {
	let elemWidth = canvasView.offsetWidth
	let elemHeight = elemWidth * (canvas.height/canvas.width)
	let tmpl = `<h2>${canvas.label || "[ unlabeled ]"}</h2>`
	let presi = (canvas["@context"] && canvas["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
	try {
		switch(presi) {
			case 3: tmpl += `<img src="${canvas.items[0].items[0].id}" alt="canvas image" >`
			break
			default : tmpl += `<img src="${canvas.images[0].resource["@id"]}" alt="canvas image" >`
		}
	} catch(err) {
		tmpl += `<img src="" alt="no image detected" width="${elemWidth}" height="${elemHeight}">`
	}
	tmpl += `<div>showing a canvas</div>`
	canvasDescription.innerHTML = canvas.metadata ? `<dl>${canvas.metadata.reduce((a,b)=>a+=`<dt>${b.label}</dt><dd>${b.value}</dd>`,``)}</dl>` : `no metadata`
	canvasView.innerHTML = tmpl
}

function renderManifest(manifest={}) {
	let tmpl
	let presi = (manifest["@context"] && manifest["@context"].indexOf("/3/context.json")>-1) ? 3 : 2
	try {
		switch(presi){
			case 3: tmpl = manifest.items.reduce((a,b)=>a+=`<a href="#${b.id}">${b.label}</a>`,``)
			break
			default: tmpl = manifest.sequences[0].canvases.reduce((a,b)=>a+=`<a href="#${b["@id"]}">${b.label}</a>`,``)
		}
	} catch(err) {
		tmpl = `No pages here`
	}
	manifestNav.setAttribute("src",manifest["@id"]||manifest.id)
	manifestNav.innerHTML = tmpl
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

window.onload = window.onhashchange = loadHash
