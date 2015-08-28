/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var alphaCanvas = "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4";
var betaCanvas = "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d5";
var leaf = "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d6";

var testLists = [
    {"@type":"sc:AnnotationList","resources":[],"on":"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d6","addedTime":1431098777308,"originalAnnoID":"","version":1,"permission":0,"forkFromID":"","@id":"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d7","_id":"554cd599e4b0f1c678d2a4d7"}
    ,
    {
            "@type" : "sc:AnnotationList",
            "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
            "addedTime" : NumberLong("1431098777237"),
            "originalAnnoID" : "",
            "version" : 1,
            "permission" : 0,
            "forkFromID" : "",
            "@id" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d5",
            "resources" : "[{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4dc\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Place Of Origin: \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"fff\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4db\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Language:  \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"gggg\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4dd\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Shelfmark: \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"ss\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4da\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Institution or Repository: \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"aaa\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4de\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Date: \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"ddd\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4df\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"Text Author:  \",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"hhhh\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"},{\"@id\":\"http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4e0\",\"@type\":\"oa:Annotation\",\"motivation\":\"sc:painting\",\"label\":\"General Metadata\",\"resource\":{\"@type\":\"cnt:ContentAsText\",\"cnt:chars\":\"jjkjkjkjk\"},\"on\":\"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4\"}]"
    },
    {"@type":"sc:AnnotationList","resources":[],
        "on":"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d6","addedTime":1431098777308,
        "originalAnnoID":"","version":1,"permission":0,"forkFromID":"",
        "@id":"http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d7","_id":"554cd599e4b0f1c678d2a4d7"
    }
];

var testAnnos = [{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4da",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Institution or Repository: ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "aaa"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794297"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4dc",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Place Of Origin: ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "fff"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794303"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4dd",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Shelfmark: ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "ss"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794304"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4de",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Date: ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "ddd"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794306"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4db",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Language:  ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "gggg"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794301"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4df",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "Text Author:  ",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "hhhh"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794308"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
},
{
        "@id" : "http://165.134.241.141/annotationstore/annotation/554cd5aae4b0f1c678d2a4e0",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "label" : "General Metadata",
        "resource" : {
                "@type" : "cnt:ContentAsText",
                "cnt:chars" : "jjkjkjkjk"
        },
        "on" : "http://165.134.241.141/annotationstore/annotation/554cd599e4b0f1c678d2a4d4",
        "addedTime" : NumberLong("1431098794326"),
        "originalAnnoID" : "",
        "version" : 1,
        "permission" : 0,
        "forkFromID" : ""
}
];