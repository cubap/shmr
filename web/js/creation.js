/*
 * author: cubap@slu.edu
 */

// src="https://gist.github.com/mathewbyrne/1280286.js"
String.prototype.slug = function () {
    return !this ? false : this.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};


var $baseUrl = window.location;
var dc = dc || {};

function showSlugged (text) {
    var slug = text.slug();
    if (slug) {
        $('#slugUrl')
            .text($baseUrl + slug);
        var hex = $baseUrl + slug.generateHexKey();
        $('#hexUrl')
            .text(hex);
        try {
            sessionStorage.setItem('slug', $baseUrl + slug);
            sessionStorage.setItem('admin', hex);
        } catch (e) {
            console.error("sessionStorage failed. This could mean anything. Hold tight to your loved ones.");
        }
        return $("#urlContainer")
            .show();
    }
    sessionStorage.clear();
    return $("#urlContainer")
        .hide();
}

function getUrls () {
    var u = {
        slug: sessionStorage.getItem('slug'),
        admin: sessionStorage.getItem('admin')
    };
    if (!u) {
        throw new Error('Nothing stored.');
    }
    return u;
}
;

String.prototype.generateHexKey = function (size) {
    var k = "";
    var str = this + Date.now();
    var strLen = str.length;
    var len = (size || 20) / 2;
    while (len--) {
        k += str.charCodeAt(Math.floor(strLen * Math.random()))
            .toString(16)
            .substr(0, 2);
    }
    return k;
};

function tryUrl (uri) {
    // try for image
    try {
        var im = new Image();
        im.onload = function () {
            preview(im);
        };
        im.onerror = function () {
            try {
                getResource(uri)
                    .done(function (obj) {
                        try {
                            obj = JSON.parse(obj);
                        } catch (e) {
                            // Just let it stay a string
                        }
                        preview(obj);
                    });
            } catch (e) {
                throw e;
            }
        };
        im.src = uri;
    } catch (e) {
        // not an image
    }

}

function getResource (uri) {
    if (typeof uri !== "string" || uri.indexOf("://") === -1) {
        throw Error(uri + " does not appear to be a valid URI");
    }
    return $.get(uri, function (obj) {
        return obj;
    });
}

function preview (obj) {
    switch (typeof obj) {
        case "object":
            if (obj.nodeType === 1 && obj.tagName.toLowerCase() === "img"){
            makeCanvasFromImage(obj);
            $("#imagePreview")
                .show();
            $('#imagePreview').empty().append($("<img>").attr('src',obj.src));
            } else if (obj['@type'].indexOf(':Manifest') > -1) {
                // assume sc:Manifest, which is not 100% accurate
                dc.manifest = obj;
            } else if (obj['@type'].indexOf(':Canvas') > -1) {
                // assume sc:Canvas, which is not 100% accurate
                makeManifestFromCanvas(obj);
            } else {
                // maybe a Range or something could be handled here?
                throw new Error("Sorry, we cannot handle " + obj['@type'] + " objects yet.");
            }
            break;
        case "string":
            throw new Error("Unable to parse string: " + obj);
        case "number":
            // who does this?
            throw new Error("Call someone who cares.");
            break;

        default:
            throw new Error("unrecognized result from getResource()");
    }
    redraw();
}

function makeCanvasFromImage (img){

}

function makeManifestFromCanvas (obj) {
    var moment = Date.now()
        .toString(32); // just a simple uuid
    var manifestObj = {
        "@type": "sc:Manifest",
        "label": "Deep Codex Project",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "metadata": [],
        "forProject": "dc_" + moment,
        "structures": [],
        "sequences": [
            {
                "@id": "normal_sequence_" + moment,
                "@type": "sc:Sequence",
                "label": "Manifest Sequence",
                "canvases": [
                    obj
                ]
            }
        ]
    };
    var paramsObj = {
        content: JSON.stringify(manifestObj)
    };
    var params = JSON.stringify(paramsObj);

    // short circuited...
    return dc.manifest = manifestObj;

    $.post("saveNewRange", params, function (manifestID) {
        // success
        saveRootRange(moment, manifestID, {
            canvases: [obj, {
                }]
        });
        manifestObj['@id'] = manifestID;
        dc.manifest = manifestObj;
        redraw();
    });
}

function saveRootRange (pid, manifestID, config) {
    var rootRange = {
        "@type": "sc:Range",
        "within": "root",
        "otherContent": [],
        "canvases": [],
        "label": "Table of Contents",
        "forProject": "dc_" + pid,
        "isReferencedBy": manifestID, //won't have this yet
        "ranges": []
    };
    $.extend(rootRange, config);
    var paramsObj = {
        content: JSON.stringify(rootRange)
    };
    var params = JSON.stringify(paramsObj);
    $.post("saveNewRange", params, function (rootRangeID) {
        // success
        rootRange["@id"] = rootRangeID;
        var paramObj1 = {
            "@id": manifestID, "structures": [rootRange]
        };
        var params1 = {
            "content": JSON.stringify(paramObj1)
        };
        $.post("updateRange", params1, function (data) {
            // success
            dc.manifest.structures[0] = rootRange;
        });
    });
}

function AnnotationList (config) {
    var a = this;
    var moment = Date.now()
        .toString(32); // just a simple uuid
    a.json = {
        "@id": "dc_" + moment,
        "@type": "sc:AnnotationList",
        "resources": [],
        "forProject": false, // expect from config
        "on": false        // expect from config
    };
    $.extend(a.json, config, true);
    a.createInRerum = function () {
        var listParams = {
            "content": JSON.stringify(a.json)
        };
        return $.post("saveNewRange", listParams, function (list) {
            // success
            //
            // update relations
            a.json['@id'] = list['@id'];
            return a;
        });
    };

    return a;
}

function Canvas (config) {
    var c = this;
    var moment = Date.now()
        .toString(32); // just a simple uuid
    var placeholder = {
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "resource": {
            "format": "image/jpg",
            "@type": "dctypes:Image",
            "@id": "images/imgNotFound.png",
            "service": {
                "@context": "http://iiif.io/api/image/2/context.json",
                "profile": "http://iiif.io/api/image/2/profiles/level2.json",
                "@id": "images/imgNotFound.png"
            },
            "width": 667,
            "height": 1000
        },
        "on": "dc_canvas_" + moment
    };
    c.json = {
        "@id": "dc_canvas_" + moment, // temp
        "@type": "sc:Canvas",
        "label": "leaf face",
        "height": 2400,
        "width": 2014,
        "images": [placeholder],
        "forProject": false, // expect config
        "otherContent": [],
        "within": false // expect config
    };
    $.extend(c.json, config, true);
    c.createInRerum = function () {
        var url = "saveNewCanvas";
        var params1 = {
            'content': JSON.stringify(c.json)
        };
        return $.post(url, params1, function (canvas) {
            // success

            // carry through config options
            var options = {
                forProject: c.json.forProject,
                on: canvas['@id']
            };

            // update relations
            c.json['@id'] = canvas['@id'];
            c.json.images[0].on = canvas['@id'];

            // attach annoList
            var aList = new AnnotationList(options);
            aList.createInRerum.done(function (listID) {
                // success
                c.json.otherContent.push(listID);
                return c;
            });
        });

    };
    return c;
}

function redraw() {
    sessionStorage.setItem('manifest',dc.manifest);
    if(!dc.URL){
        var json = JSON.stringify(dc.manifest);
        var blob = new Blob([json], {type: "application/json"});
        dc.URL = URL.createObjectURL(blob);
    }
    var imagePreview = $("#imagePreview");
    var mDiv = $("#manifestView").find('iframe');
mDiv.attr('src',"mirador-embed.html?url="+dc.URL);
$("#startProject,#manifestView").show();

};
// TODO: include a switch for LocalStorage, so the special URLs can be stored locally.


$(function(){

// dumb rotately to get rid of later
if(!window.rotately){
    rotately = Date.now()%3+1;
}
if(rotately===1){
    //replace "deep codex" with "Bryan's rejiggery"
    $("#logo").attr('src','images/logo2.png');
    $('body :not(script)').contents().filter(function() {
    return this.nodeType === 3;
  }).replaceWith(function() {
      return this.nodeValue.replace('Deep Codex',"Bryan's Rejiggery Thing");
  });
}
});
