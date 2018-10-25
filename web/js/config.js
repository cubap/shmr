const CONFIG =
{
    "fields": [{
        "label": "short description",
        "default_value": "",
        "options": {
            "helptext": "Enter a short description of the contents of this page.",
            "type": "text", // array_, memo, text, number, email, url, tel, range, date, month, week, time, datetime, color
            "required": false,
            "min": null, // range, date
            "max": null, // range, date
            "step": null, // range
            "pattern": null // tel
        },
        "type": "schema:description" // web ontology from schema (JSON-LD @type)
    }, {
        "label": "people",
        "default_value": "",
        "options": {
            "type": "array_text",
            "helptext": "Individuals within this image"
        },
        "type": "schema:Person"
    }, {
        "label": "places",
        "default_value": "",
        "options": {
            "type": "array_text",
            "helptext": "Locations pictured"
        },
        "type": "schema:Place"
    },{
        "label": "events",
        "default_value": "",
        "options": {
            "type": "array_text",
            "helptext": "Event occurring in this image"
        },
        "type": "schema:Event"
    }, {
        "label": "notes",
        "default_value": "",
        "options": {
            "type": "array_memo",
            "helptext": "Open notes field"
        }
    }]
}