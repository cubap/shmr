/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pageCanvases = [];
var testManifest = {
	  "@context" : "http://iiif.io/api/presentation/2/context.json",
	  "@id" : "",
	  "@type" : "sc:Manifest",
	  "label" : "Llang Binder",
	  "sequences" : [{
            "@id" : "http://www.example.org/iiif/LlangBrev/sequence/normal",
	    "@type" : "sc:Sequence",
	    "label" : "Llangantock Bucket",
	    "canvases" : [{
	    //This will be the anchor canvas in the anchor range
	        "@id" : "http://www.example.org/iiif/LlangBrev/canvas/1_anchor",
	        "@type" : "sc:Canvas",
	        "label" : "Llang_001",
	        "height" : 1000,
	        "width" : 667,
	        "images" : [{
		          "@type" : "oa:Annotation",
		          "motivation" : "sc:painting",
		          "resource" : {
		            "@id" : "http://www.example.org/iiif/LlangBrev/image_001",
		            "@type" : "dctypes:Image",
		            "format" : "image/jpeg",
		            "height" : 2365,
		            "width" : 1579
		          },
		          "on" : "http://www.example.org/iiif/LlangBrev/canvas/1_anchor"
        	}],
        	"otherContent":[],
      	 },
         {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/1",
          "@type" : "sc:Canvas",
          "label" : "Llang_01_fragment",
          "height" : 300,
          "width" : 200,
          "images" : [
          {
               "@type" : "oa:Annotation",
               "motivation" : "sc:painting",
               "resource" : {
                 "@id" : "http://www.yoyowall.com/wp-content/uploads/2013/03/Abstract-Colourful-Cool.jpg",
                 "@type" : "dctypes:Image",
                 "format" : "image/jpeg",
                 "height" : 2365,
                 "width" : 1579
               },
               "on" : "http://www.example.org/iiif/LlangBrev/canvas/1"
          }
          ],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/2",
          "@type" : "sc:Canvas",
          "label" : "Llang_002",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://funlava.com/wp-content/uploads/2013/03/cool-hd-wallpapers.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/2"
          }],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/3",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRYZAj0K5SiHcZonHG--GrygYLgnjhSXX35BfapUckYLB7fKYI",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/3"
          }],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/4",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://i.huffpost.com/gen/1719761/images/o-COOL-CAT-facebook.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/4"
          }],
          "otherContent":["http://www.example.org/iiif/LlangBrev/annoList/1"]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/5",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://cloud-4.steamusercontent.com/ugc/43108316458046990/EC4110525593F4CC213E69257ABE6F0BE1D18D9A/",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/5"
          }],
          "otherContent":[]
         
   },
    {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/6",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.hdwallpaperscool.com/wp-content/uploads/2014/06/amazing-backgrounds-cool-wallpapers-of-high-resolution.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/6"
          }],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/7",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://t3.gstatic.com/images?q=tbn:ANd9GcR-CUW-EqZ7WboySAFm_3oQH9xLbxZsSHu2EyPsQ8gCObts0-nJ",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/7"
          }],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/8",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://t1.gstatic.com/images?q=tbn:ANd9GcQM3TBh35_znmOW65GdTY1u6WZCa5smnvv_s1nIJl355iaqIBeVGg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/8"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/9",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.darveshtv.com/wp-content/uploads/2015/02/cool_car_3d_wallpapers_hot.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/9"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/10",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://ajournalofmusicalthings.com/wp-content/uploads/Cool.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/10"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/11",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://upload.wikimedia.org/wikipedia/commons/2/20/Cool,_Calif_sign.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/11"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/12",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://t1.gstatic.com/images?q=tbn:ANd9GcT_cVgwB1vOupPsjjiGbnPrkK24fpq9BThi3fkVNrgoX0oMNwzv0w",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/12"
          }],
          "otherContent":[],      
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/13",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://t0.gstatic.com/images?q=tbn:ANd9GcTLM1VY3Ehp3F1hd78mrszS3euO32XV-BjtgXaaKNcRJ8je3ECmZg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/13"
          }],
          "otherContent":[],       
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/14",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://browsewallpaper.com/wp-content/uploads/2014/11/cool%20designs%20wallpaper-cKAa.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/14"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/15",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.desktopaper.com/wp-content/uploads/great-cool-design-backgrounds.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/15"
          }],
          "otherContent":[],      
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/16",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Haliaeetus_leucocephalus_-Skagit_valley-8-2c.jpg/300px-Haliaeetus_leucocephalus_-Skagit_valley-8-2c.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/16"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/17",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.chicagonow.com/greenamajigger/files/2013/04/bee-eater_1627477i.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/17"
          }],
          "otherContent":[],       
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/18",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.arizonafoothillsmagazine.com/images/stories/aug13/Butterfly_Blue.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/18"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/19",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Butterflies_%28Costa_Rica%29.jpg/800px-Butterflies_%28Costa_Rica%29.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/19"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/20",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.slu.edu/Images/marketing_communications/logos/slu/slu_2c.bmp",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/20"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/21",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://vaccinenewsdaily.com/wp-content/uploads/2015/01/SLU_Vert_blue.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/21"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/22",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://rbrua3v80lj2rulsf7iqfnpmf.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/St_Louis_Blues3.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/22"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/23",
          "@type" : "sc:Canvas",
          "label" : "Llang_03",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://www.sports-logos-screensavers.com/user/St_Louis_Blues4.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/23"
          }],
          "otherContent":[],
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/24",
          "@type" : "sc:Canvas",
          "label" : "Llang_24",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://p1.pichost.me/i/39/1623860.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/24"
          }],
          "otherContent":[]
         
   },
   {
      //This will be the anchor canvas in the anchor range
          "@id" : "http://www.example.org/iiif/LlangBrev/canvas/25",
          "@type" : "sc:Canvas",
          "label" : "Llang_25",
          "height" : 300,
          "width" : 200,
          "images" : [{
              "@type" : "oa:Annotation",
              "motivation" : "sc:painting",
              "resource" : {
                "@id" : "http://webjazba.com/sw-store/images/wallpapers/webjazba.com-297742013.jpg",
                "@type" : "dctypes:Image",
                "format" : "image/jpeg",
                // "height" : 2365,
                // "width" : 1579
              },
              "on" : "http://www.example.org/iiif/LlangBrev/canvas/25"
          }],
          "otherContent":[]
         
        }]
 	   }], 
	  "structures" : [

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/parent_aggr",
  "@type":"sc:Range",
  "label":"Parent Aggr",
  "ranges" : [
      "http://www.example.org/iiif/LlangBrev/range/11",
      "http://www.example.org/iiif/LlangBrev/range/106"
  ],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},		
{
  "@id":"http://www.example.org/iiif/LlangBrev/range/1",
  "@type":"sc:Range",
  "label":"Folio 1",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/4", "http://www.example.org/iiif/LlangBrev/canvas/5"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{ //A connection of content can be made like this, but not fragments
  "@id":"http://www.example.org/iiif/LlangBrev/range/2",
  "@type":"sc:Range",
  "label":"Folio 2",
  "ranges" : [
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/1", "http://www.example.org/iiif/LlangBrev/canvas/2"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{//A connection of content can be made like this, but not fragments
  "@id":"http://www.example.org/iiif/LlangBrev/range/3",
  "@type":"sc:Range",
  "label":"Folio 3",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/2", "http://www.example.org/iiif/LlangBrev/canvas/3"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},


{
  "@id":"http://www.example.org/iiif/LlangBrev/range/4",
  "@type":"sc:Range",
  "label":"Folio 4",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/24", "http://www.example.org/iiif/LlangBrev/canvas/25"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/5",
  "@type":"sc:Range",
  "label":"Folio 5",
  "ranges" : [
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/6", "http://www.example.org/iiif/LlangBrev/canvas/7"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/6",
  "@type":"sc:Range",
  "label":"Folio 6",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/8", "http://www.example.org/iiif/LlangBrev/canvas/9"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/7",
  "@type":"sc:Range",
  "label":"Folio 7: What do you think?",
  "ranges" : [
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/10", "http://www.example.org/iiif/LlangBrev/canvas/11"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/102",
  "@type":"sc:Range",
  "label":"First Folio, Last Secion",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/12", "http://www.example.org/iiif/LlangBrev/canvas/13"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},
{
  "@id":"http://www.example.org/iiif/LlangBrev/range/103",
  "@type":"sc:Range",
  "label":"Last Folio, Last Secion",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/14","http://www.example.org/iiif/LlangBrev/canvas/15"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/104",
  "@type":"sc:Range",
  "label":"Unknown Folio X, Last Secion",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/16","http://www.example.org/iiif/LlangBrev/canvas/17"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/105",
  "@type":"sc:Range",
  "label":"Unknown Folio Y, Last Secion",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/18", "http://www.example.org/iiif/LlangBrev/canvas/19"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/106",
  "@type":"sc:Range",
  "label":"Last Section",
  "ranges" : [
     "http://www.example.org/iiif/LlangBrev/range/102",
     "http://www.example.org/iiif/LlangBrev/range/103",
     "http://www.example.org/iiif/LlangBrev/range/105",
     "http://www.example.org/iiif/LlangBrev/range/104",
   ],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
}, //EX: we know this is the last section.  Here are 4 pages we know are in it.  It is not inside the table of contents array.

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/8",
  "@type":"sc:Range",
  "label":"Section 1",
  "ranges" : ["http://www.example.org/iiif/LlangBrev/range/1", "http://www.example.org/iiif/LlangBrev/range/2"],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/9",
  "@type":"sc:Range",
  "label":"Section 2",
  "ranges" : ["http://www.example.org/iiif/LlangBrev/range/3", "http://www.example.org/iiif/LlangBrev/range/4"],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/10",
  "@type":"sc:Range",
  "label":"Section 3",
  "ranges" : ["http://www.example.org/iiif/LlangBrev/range/5", "http://www.example.org/iiif/LlangBrev/range/6", "http://www.example.org/iiif/LlangBrev/range/112", "http://www.example.org/iiif/LlangBrev/range/113"],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/11",
  "@type":"sc:Range",
  "label":"Table Of Contents",
  "ranges" : ["http://www.example.org/iiif/LlangBrev/range/8", "http://www.example.org/iiif/LlangBrev/range/9", "http://www.example.org/iiif/LlangBrev/range/10"],
  "canvases" :[],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/110",
  "@type":"sc:Range",
  "label":"SLU Folio, unknown section",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/20", "http://www.example.org/iiif/LlangBrev/canvas/21"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
},

{
  "@id":"http://www.example.org/iiif/LlangBrev/range/111",
  "@type":"sc:Range",
  "label":"Not sure if this is in this project.",
  "ranges" : [
      //add leaf ranges here in order for page order
  ],
  "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/22", "http://www.example.org/iiif/LlangBrev/canvas/23"],
  "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
}
// {
//   "@id":"http://www.example.org/iiif/LlangBrev/range/112",
//   "@type":"sc:Range",
//   "label":"Folio test 1",
//   "ranges" : [
//       //add leaf ranges here in order for page order
//   ],
//   "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/22", "http://www.example.org/iiif/LlangBrev/canvas/23"],
//   "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
// },
// {
//   "@id":"http://www.example.org/iiif/LlangBrev/range/113",
//   "@type":"sc:Range",
//   "label":"Folio test 2",
//   "ranges" : [
//       //add leaf ranges here in order for page order
//   ],
//   "canvases" :["http://www.example.org/iiif/LlangBrev/canvas/22", "http://www.example.org/iiif/LlangBrev/canvas/23"],
//   "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
// }

	  ]
}

var rangeCollection = testManifest.structures;
var pageCanvases = testManifest.sequences[0].canvases;
var annotationLists = [
    {
      "@id" : "http://www.example.org/iiif/LlangBrev/annoList/1",
      "@type" : "sc:AnnotationLists",
      "label" : "Fragments",
      "resources" : [ {
        "@id" : "http://www.example.org/iiif/LlangBrev/anno/1",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "resource" : {
          "@id" : "http://www.yoyowall.com/wp-content/uploads/2013/03/Abstract-Colourful-Cool.jpg",
          "@type" : "dctypes:Image",
          "format" : "image/jpeg",
          "height" : 50,
          "width" : 150
        },
        "on" : "http://www.example.org/iiif/LlangBrev/canvas/1#xywh=10,15,150,50"
      },
      {
          "@id" : "http://www.example.org/iiif/LlangBrev/anno/2",
        "@type" : "oa:Annotation",
        "motivation" : "sc:painting",
        "resource" : {
          "@type" : "cnt:ContentAsText",
          "cnt:chars" : "This is an image fragment."
        },
        "on" : "http://www.example.org/iiif/LlangBrev/canvas/1"
      }
    ]
  }
];
function getAllRanges(){
  //THERE WILL AT LEAST BE ONE RANGE
  var properties={"@type" : "sc:Range"};
  var url="http://localhost:8080/brokenBooks/getAnnotationByPropertiesServlet";
  var params = {"content" : JSON.stringify(properties)};
  console.log("GET RANGES LIVE");
  $.post(url, params, function(data){
     console.log("Got ranges");
     rangeCollection = JSON.parse(data);
     getAllCanvases();
  });
}

function getAllAnnotations(){
  //THERE MAY BE NO ANNOTATIONS
  var properties={"@type" : "sc:AnnotationList"};
  var url="http://localhost:8080/brokenBooks/getAnnotationByPropertiesServlet"
  var params = {"content" : JSON.stringify(properties)};
  $.post(url, params, function(data){
     annotationLists = JSON.parse(data);
     console.log("Got annotations");
     organizeRanges();
  });
}

function getAllCanvases(){
  //THERE WILL AT LEAST BE 2 CANVASES
  var properties={"@type" : "sc:Canvas"};
  var url="http://localhost:8080/brokenBooks/getAnnotationByPropertiesServlet"
  var params = {"content" : JSON.stringify(properties)};
  $.post(url, params, function(data){
     pageCanvases = JSON.parse(data);
     console.log("got canvases")
     getAllAnnotations();
  });
}

function toggleChildren(parentRange, admin){
  var children = parentRange.children(".child");
  var dropAttribute = "";
  var relation = parentRange.attr("rangeID");
  var unassigned = parentRange.hasClass('unassigned');
  var intendedDepth = -1;
  if(admin === "admin"){
      dropAttribute = "ondragover='dragOverHelp(event);' ondrop='dropHelp(event);'";
  }
  //var actualDepth = $(".rangeArrangementArea").length;
  intendedDepth = parseInt(parentRange.parent().attr("depth")) + 1;
  // if(unassigned){
  //   intendedDepth = parseInt(parentRange.parent().attr("depth")) + 1;
  // }
  // else{
  //   intendedDepth = parseInt(parentRange.parent().parent().attr("depth")) + 1;
  // }
  
  var newArea = $("<div  depth='"+intendedDepth+"' relation='"+relation+"' rangeID='"+relation+"' class='rangeArrangementArea'><div "+dropAttribute+" class='notBucket'></div></div>");
  var newAreaBucket = $('<div onclick=\'toggleChildren($(this), "admin");\' '+dropAttribute+' rangeID="'+relation+'"" class="arrangeSection parent unassigned">Unassigned</div>');
  newArea.append(newAreaBucket);
  var existingInCopy = [];
  $.each($("div[depth]"),function(){
      if(parseInt($(this).attr("depth")) > intendedDepth){
          $(this).remove();
      }
  });
  $.each(children, function(){
    var rangeID = $(this).attr("rangeID");
    var leaf = $(this).attr("leaf");
    if($.inArray(rangeID, existingInCopy) == -1){
       existingInCopy.push(rangeID);
       var child = $(this).clone();
       var childID = child.attr('id');
       childID = childID.replace("_tmp", "");
       child.attr('id', childID);
       if(leaf == "true"){ //put leaves in the bucket for now.  We need to design a 'ordered' vs 'unordered' tag to check for here since I cannot tell just from the range array whether or not it is ordered. 
         newArea.find('.unassigned').append(child);
       }
       else{
         newArea.find('.notBucket').append(child);
       }
       $('.rangeArrangementArea:first').find('.unassigned').removeClass("selectedSection");
    }
    
  });
  if($("div[depth='"+intendedDepth+"']").length == 0){ //If the area does not exist, then add it to the arrange tab. 
    $(".arrangeTrail").append(newArea);
    parentRange.addClass("selectedSection");
    //$('.rangeArrangementArea:first').find('.unassigned').removeClass("selectedSection");
    if(unassigned){
       parentRange.parent().children('.unassigned').removeClass("selectedUnassigned");
    }
    else{
       parentRange.parent().parent().children('.unassigned').removeClass("selectedUnassigned");
    }
   
  }
  else{ //if the are already exists
    console.log("area already exists.  Depth: "+intendedDepth);
    if($("div[depth='"+intendedDepth+"']").attr("relation") !== relation){ //if the area is a child from the same depth...
      var childrenToMove1 = $("div[depth='"+intendedDepth+"']").find('.notBucket').children('.child');
      var childrenToMove2 = $("div[depth='"+intendedDepth+"']").find('.unassigned').children('.child');
      var childrenToMove = childrenToMove1 + childrenToMove2;
      var sectionToMoveTo = $("div[depth='"+intendedDepth+"']").find('.selectedSection');
      $("div[depth='"+intendedDepth+"']").remove(); //remove the depth and call again to add the new area
      if(unassigned){
        parentRange.parent().find('.notBucket').children('div').removeClass("selectedSection");
      }
      else{
        parentRange.parent().parent().find('.notBucket').children('div').removeClass("selectedSection");
      }
      sectionToMoveTo.children('.child').remove();
      $.each(childrenToMove, function(){
        var id = $(this).attr('id')+"_tmp";
        $(this).attr("id", id);
        sectionToMoveTo.append($(this));
        $(this).hide();
      })
      toggleChildren(parentRange, admin);
      return false;
    }
    else{ //if the area clicked was the one already highlighted
      console.log("Area already highlighted.  Depth:" +intendedDepth);
      var childrenToMove1 = $("div[depth='"+intendedDepth+"']").find('.notBucket').children('.child');
      var childrenToMove2 = $("div[depth='"+intendedDepth+"']").find('.unassigned').children('.child');
      var childrenToMove = childrenToMove1 + childrenToMove2;
      parentRange.removeClass("selectedSection");
      parentRange.parent().children('.unassigned').addClass("selectedUnassigned");
      // if(unassigned){
      //   parentRange.parent().children('.unassigned').addClass("selectedUnassigned");
      // }
      // else{
      //   parentRange.parent().parent().children('.unassigned').addClass("selectedUnassigned");
      // }
      $("div[depth='"+intendedDepth+"']").remove(); //remove the depth and call again to add the new area
      parentRange.children('.child').remove();
      $.each(childrenToMove, function(){
        var id = $(this).attr('id')+"_tmp";
        $(this).attr("id", id);
        parentRange.append($(this));
        $(this).hide();
      })
      if($(".rangeArrangementArea").length == 1 && $(".selectedSection").length == 0){
          $('.rangeArrangementArea:first').find('.unassigned').addClass("selectedSection"); //needs to be selected section so that this area will never be deleted
      } 
    }
  }
  if(admin === "admin"){
    newArea.find('.notBucket').children('div').show(); //show sections and leaves
    if(newArea.find('.notBucket').children('div').length == 0){
      newArea.append('<div style="color: red;">No Subsections Available</div>');
    }
    else{
      //newArea.append('<div class="arrangeSection parent unassigned">Unassigned</div>');
      if(newArea.find('.selectedSection').length == 0){
        newArea.find('.unassigned').addClass("selectedUnassigned");
      }
    }
  }
  else{
    newArea.find('.notBucket').children('div').not('div[leaf="true"]').show(); //only show sections
    if(newArea.children('div').not('div[leaf="true"]').length == 0){
      newArea.append('<div style="color: red;">No Subsections Available</div>');
    }
    else{
      if(newArea.find('.selectedSection').length == 0){
        newArea.find('.unassigned').addClass("selectedUnassigned");
      }
    }
  }
  
}
function dragHelp(event){
    console.log("DRAGGING");
    console.log(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
}
function dropHelp(event){
  /* TODO:
   If the target is arrangeSection that is not expanded, it should go into that section.
  if the target is an arrangeSection that is expanded, it should not appear because it should be in that expanded section's bucket.
  if the target is rangeArrangementArea of an expanded arrangeSection, it should go into that section ordered at the end of the ordered pieces.  It can then be sorted from there.  
   */
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log(data);
    var relation = event.target.getAttribute('rangeid');
    var targetClass = event.target.className;
    var child = document.getElementById(data);
    child.setAttribute("relation", relation);
    if(targetClass.indexOf('rangeArrangementArea') > -1){
      child.style.display = "block";
    }
    else{
      child.id = child.id+"_tmp"; 
      child.style.display = "none";
    }
    console.log("Drop");
    console.log(child);
    console.log("into");
    console.log(event.target);
    event.target.appendChild(child);
    //We would then need to submit the new range order to the datbase via 2 updates: 1 for the range losing a range URI and another for the range gaining a range URI.
}
function dragOverHelp(event){
    event.preventDefault();
}

function gatherRangesForArrange(which){
    //rangeCollection = mergeSort(rangeCollection);
    //http://www.example.org/iiif/LlangBrev/range/parent_aggr
    var existingRanges = [];
    var uniqueID = 0;
    for(var i = rangeCollection.length - 1; i>=0; i--){
        uniqueID += 1;
        var outerRange = rangeCollection[i]; //We have to look at each range, so at some point each range is the outer range...
        var outerRangeLabel = rangeCollection[i].label+" <br>";
        var existingRangeToUpdate = ""; 
        var tag = "parent";
        var relation = "";
        var isLeaf = false;
        var admin = "";
        var isOrdered = ""; //NEED TO DESIGN THIS TAG IN THE OBJECT
        var currentRange = "";
        var dragAttribute = "";
        var dropAttribute = " ondragover='dragOverHelp(event);' ondrop='dropHelp(event);'";
        var canvases = rangeCollection[i].canvases.length;
        if(canvases !== 0 && canvases!==undefined){
          isLeaf = true;
        }
        else{
          isLeaf = false;
        }
        relation = rangeCollection[i]["@id"];
        if(which === 2){
            tag += " sortOrder";
            admin = "admin";
        }
        if(rangeCollection[i]["@id"].indexOf("parent_aggr") > -1){
          tag += " pAggr";
          outerRangeLabel = "";
        }
        currentRange = $("<div isOrdred='"+isOrdered+"' "+dropAttribute+" "+dragAttribute+" leaf='"+isLeaf+"' onclick=\"toggleChildren($(this), '"+admin+"');\" class='arrangeSection "+tag+"' rangeID='"+rangeCollection[i]["@id"]+"'>"+outerRangeLabel+"</div>");
        if($.inArray(rangeCollection[i]["@id"], existingRanges) == -1){
          existingRanges.push(rangeCollection[i]["@id"]);
          $(".rangeArrangementArea").find('.notBucket').append(currentRange);
        }
        else{
          dragAttribute = "id='drag_"+uniqueID+"_tmp' draggable='true' ondragstart='dragHelp(event);'";
          currentRange = $(".arrangeSection[rangeID='"+rangeCollection[i]["@id"]+"']");
        }
        //Create an html range object that can be added
        var innerRanges = rangeCollection[i].ranges;
       
        if(innerRanges.length > 0){ //If there are inner ranges
            var tag2 = "child";
            if(which === 2){
                tag2 += " sortOrder";
            }
            for(var j = 0; j<innerRanges.length;j++){ //go over each inner range
                uniqueID += 1;
                dragAttribute = "id='drag_"+uniqueID+"_tmp' draggable='true' ondragstart='dragHelp(event);'";
                var thisRange = innerRanges[j];
                $.each(rangeCollection, function(){ //check each range in the collection
                    if(this["@id"] === thisRange){ //find the object by ID among the collection.  When you find it, gets its information.
                        var thisLabel = this.label;
                        var thisCanvases = this.canvases.length;
                        var thisIsOrdered = "";
                        if(thisCanvases !== 0 && thisCanvases!==undefined){
                          isLeaf = true;
                          dropAttribute = "";
                        }
                        else{
                          isLeaf = false;
                          dropAttribute = " ondragover='dragOverHelp(event);' ondrop='dropHelp(event);'";
                        }
                        var embedRange = $("<div isOrdred='"+thisIsOrdered+"' "+dragAttribute+" "+dropAttribute+" onclick=\"toggleChildren($(this), '"+admin+"');\" class='arrangeSection "+tag2+"' leaf='"+isLeaf+"' relation='"+relation+"' rangeID='"+this['@id']+"'>"+thisLabel+"<br></div>"); //Create an html range object for the inner range.
                        if($.inArray(this["@id"], existingRanges) == -1){
                            currentRange.append(embedRange);
                            //$(".rangeArrangementArea").find('.notBucket').append(currentRange);
                            existingRanges.push(embedRange.attr("rangeID"));
                            existingRanges.push(currentRange.attr("rangeID"));
                        }
                        else{
                          var rangeToMove = $(".arrangeSection[rangeID='"+this["@id"]+"']");
                          currentRange.append(rangeToMove);
                          //$(".rangeArrangementArea").find('.notBucket').append(currentRange);
                        }
                    } 
                });
            }
        }
        else{ //There are no inner ranges. It could be a section with no children or a leaf.  
            var tag = "";
            isOrdered = "";
            if(which === 2){
                tag="sortOrder";
            }
            var a = false;
            var newLeaf = undefined;
            var existingRange = $('div[rangeID="'+outerRange['@id']+'"]');
            if(existingRange.length > 0){ //if the range exists in a section
                //It already exists, do not append.
            }
            else{ //The leaf is  parent to itself, which means its a random page in the bucket. 
              tag+= " child";
              dragAttribute = "id='drag_"+uniqueID+"' draggable='true' ondragstart='dragHelp(event);'";
              //newLeaf = $("<div isOrdred='"+isOrdered+"' "+dragAttribute+"  leaf='"+isLeaf+"' class='arrangeSection "+tag+"' relation='bucket' rangeID='"+outerRange['@id']+"'>"+outerRangeLabel+"<br></div>");
            }
            if(newLeaf){ //If its a random page from the bucket, it needs to listed as a parent range.  Append to top section for now, we can make a stray leaves section if we want.
                    //console.log("RANDOM LEAF");
                    //existingRanges.push(newLeaf.attr("rangeID"));
                    //$(".rangeArrangementArea:first").find('.unassigned').append(newLeaf);
              }
        }
    }
    //get leaves into the bucket
    var objectsForBucket = $('.rangeArrangementArea').find('.notBucket').children('div[leaf="true"]');
    $('.rangeArrangementArea').find('.notBucket').children('div[leaf="true"]').remove();
    $(".unassigned").append(objectsForBucket);
    var pAggrChildren = $('.pAggr').children('div');
    $('.rangeArrangementArea').find('.notBucket').append(pAggrChildren);
    $('.pAggr').remove();
}

/*
* @params: rangeCollection: an array containing all the ranges of a project.  It is sorted so the array contains ranges from smallest to largest. 
*For now, it is a global array.  It will most likely be handed in as a parameter to the function in the future. 
*Builds the tree structure of ranges from an ordered list of ranges (by size of their ranges[] field).
*/

//Think about sorted vs. unsorted ranges. 
function organizeRanges(){
    //rangeCollection = mergeSort(rangeCollection);
    var existingRanges = [];
    for(var i = rangeCollection.length - 1; i>=0; i--){
      //console.log("Building Range");
      //console.log(rangeCollection[i]);
        var outerRange = rangeCollection[i]; //We have to look at each range, so at some point each range is the outer range...
        var outerRangeLabel = rangeCollection[i].label;
        var currentRange = $("<div class='range' rangeID='"+rangeCollection[i]["@id"]+"'><div>"+outerRangeLabel+"</div></div>");        
        if($.inArray(rangeCollection[i]["@id"], existingRanges) == -1){
          existingRanges.push(rangeCollection[i]["@id"]);
          $("#focusedRange").append(currentRange);
          //The initial hard set super ranges.
        }
        else{
          currentRange = $('div[rangeID="'+rangeCollection[i]["@id"]+'"]'); // get it.
        }
        //Create an html range object that can be added
        
        //Collect the inner ranges for this range.  It will be an array(0) if there are none. 
        var innerRanges = rangeCollection[i].ranges;
        if(innerRanges.length > 0 &&  rangeCollection[i].canvases.length === 0){ //If there are inner ranges
         //console.log("Working inner ranges.")
            for(var j = 0; j<innerRanges.length;j++){ //go over each inner range
                var thisRange = innerRanges[j];
                $.each(rangeCollection, function(){ //check each range in the collection
                    if(this["@id"] === thisRange){ //find the object by ID among the collection.  When you find it, gets its information.
                        var thisLabel = this.label;
                        var embedRange = $("<div class='range' rangeID='"+this['@id']+"'><div>"+thisLabel+"</div></div>"); //Create an html range object for the inner range.
                        if($.inArray(this["@id"], existingRanges) == -1){
                          currentRange.append(embedRange);
                          existingRanges.push(this["@id"]);
                        }
                        else{
                          var rangeToMove = $(".range[rangeID='"+this["@id"]+"']");
                          currentRange.append(rangeToMove);
                        }
                    } //If you didn't find it among the collection, we can't do anything with it.  
                });
            }
        }
        /* This has becoming depricated for BB because we will not be connecting data like this.   */
        // else if(innerRanges.length ===1 &&  rangeCollection[i].canvases.length === 1){
        // //special case.  These ranges are meant to replace canvases of this leaf with fragments of this canvas.  
        // //We have made fragments atomic ranges so that pieces of the same canvas that exist in different ranges can be connected.  
        // //They will exist as their own entity on each individual leaf so that they can have their own annotation, 
        // //but they will be connected by location with the canvas no matter where it exists.  
        // //This code will be reached before the code in the else every time because of the ordered array by range field size.  
        // //Fortunately, there will only be up to two ranges in here.  Those ranges will be URI's of leaves. Therefore, we can directly grab that leaf from the array.  
        // //We can cheat a bit and start from the i we are at since we know it does not come before this one.
        //   var canvasToReplace = rangeCollection[i].canvases[0];
        //   var subStr = canvasToReplace.substring(0,canvasToReplace.indexOf("#xywh"));
        //   for(var x=0; x<i; x++){
        //     //we know there is only one
        //     var innerRangeSubstring = innerRanges[0];
        //     if(innerRanges[0].indexOf("#xywh") > -1) innerRangeSubstring = innerRanges[0].substring(0, innerRanges[0].indexOf("#xywh"));
        //     var leafRangeCanvases= rangeCollection[x].canvases;
        //     if (rangeCollection[x]["@id"] == innerRangeSubstring){
        //       //replace the canvas in the leaf range with the canvas from the inner range
        //         var l = -1;
        //         $.each(leafRangeCanvases, function(){
        //           l++;
        //           if(this == subStr){
        //             rangeCollection[x].canvases[l] = canvasToReplace;
        //           }
        //           else{ //this could be the wrong canvases OR this could be the right canvas as a fragment.  If it is the right canvas as a fragment, there can be multiple fragments of that canvas, so add it in.  Otherwise, we should do nothing.  
        //             if(this.indexOf("#xywh") > -1){
        //               //it could be a fragment
        //               var tmp = this;
        //               if(tmp.indexOf("#xywh") > -1){ //If this is not true, it isn't possible that we are on the correct canvas.
        //                 tmp = tmp.substring(0, tmp.indexOf("#xywh")); //It is at least a fragment, but for the right canvas?  Strip #xyhw=.... off the URI
        //                 tmp += ""; //cast it to a string.
        //                 var tmpCompare = leafRangeCanvases[l].substring(0,leafRangeCanvases[l].indexOf("#xywh")); //Strip #xywh off the canvas we are checking equivalency to
        //                 tmpCompare += ""; // cast to a string
        //                 if(tmpCompare == tmp && $.inArray(canvasToReplace, leafRangeCanvases) < 0){ //Then it was a new fragment for this canvas, so we can push the fragment to this leaf. 
        //                    rangeCollection[x].canvases.splice(l+1, 0, canvasToReplace);
        //                    //place canavs in at appropriate location among canvases in case there are multiple fragments.  This will build them out in the order users think they go.  
        //                 }
        //                 else{
        //                   //it was the wrong canvas.  Leave it alone.
        //                 }  
        //               }
        //             }
        //           }
        //         });
        //     }
        //     //What we have done is skipped further down into the array and altered a single canvas in a leaf. 
        // When we get to that canvas in this function, it will not have any ranges so it will skip to the code below and build out the leaf.
        //   }
        // }
        else{ //There are no inner ranges, so we must be on a leaf or a empty sections. 
            var currentCanvases = outerRange.canvases;
            var firstCanvas = currentCanvases[0];
            if(firstCanvas.indexOf("#xywh") >=0){
              firstCanvas = firstCanvas.substring(0, firstCanvas.indexOf("#xywh"));
            }
            var a = false;
            var rangeForCanvases = $("#focusedRange").find('div[rangeID="'+outerRange['@id']+'"]');
            if(rangeForCanvases.length > 0){ //if the range exists in a section
              a=true;
            }
            else{ //The leaf is a parent to itself, which means its a random page in the bucket. 
               // console.log("This is a new leaf");
              rangeForCanvases = $("<div class='range bucketPage' rangeID='"+outerRange['@id']+"'><div>"+outerRange.label+"</div></div>");
            }

            var canvasHolder1 = $("<div sideA='' class='canvas'> </div>");
            var canvasHolder2 = $("<div sideB='' class='canvas'> </div>");

            var canvasHolder3 = $("<div sideA='' class='canvas'> <img class='canvasImg' src='http://img1.wikia.nocookie.net/__cb20130607215218/mummipedia/images/b/bb/480px-Placeholder.png' /> </div>");
            var canvasHolder4 = $("<div sideB='' class='canvas'> <img class='canvasImg' src='http://img1.wikia.nocookie.net/__cb20130607215218/mummipedia/images/b/bb/480px-Placeholder.png' /> </div>");


            var side1 = true;
            var side2 = false;

            var holderToAppend = $("");
            if(currentCanvases.length > 0){
                $.each(currentCanvases, function(){ //for whatever canvases there are, if any, or many fragments
                  //console.log("Working on canvases");
                  var originalCanvas = String(this);
                  var currentCanvas = "";
                  var fragment = false;
                  var currentCanvasAnnotations = [];
                  var currentCanvasAnnotationsLists = [];
                  var canvasImg = "";
                  if(originalCanvas.indexOf("#xywh") >= 0){
                    currentCanvas = originalCanvas.substring(0, originalCanvas.indexOf("#xywh"));
                    fragment =true;
                  }
                  else{
                    currentCanvas = originalCanvas;
                    fragment = false;
                  }
                  /* Must gather this canvases annotations */
                  $.each(pageCanvases, function(){
                      if(this["@id"] == currentCanvas){
                          currentCanvasAnnotationsLists = this.otherContent;
                          
                          canvasImg = this.images[0].resource["@id"];
                          $.each(currentCanvasAnnotationsLists, function(){
                              var annoListID = String(this);
                              console.log("Anno list to get annos: "+annoListID);
                              $.each(annotationLists, function(){
                                  if(annoListID == this["@id"]){
                                    console.log("pushing resources");
                                    currentCanvasAnnotations.push(this.resources);
                                  }
                              });
                          });
                          if(currentCanvas == firstCanvas){ //we are still on sideA
                            side1 = true;
                            side2 = false;
                            if(!fragment){
                                canvasHolder3.find('img').attr('src', canvasImg);
                            }
                          }
                          else{ //we are on sideB
                            side1=false;
                            side2 = true;
                            if(!fragment){
                                canvasHolder4.find('img').attr('src', canvasImg);
                            }
                          }
                      }
                  });

                  var XYWHarray = [0,0,0,0];
                  var XYWHsubstring = originalCanvas.substring(originalCanvas.lastIndexOf('#' + 1)); 
                  if(XYWHsubstring.indexOf('=') > -1){ //string must contain this to be valid
                      var numberArray = XYWHsubstring.substring(originalCanvas.lastIndexOf('xywh=') + 5).split(',');
                      if(numberArray.length === 4){ // string must have all 4 to be valid
                          var x = numberArray[0];
                          var y = numberArray[1];
                          var w = numberArray[2];
                          var h = numberArray[3];
                          XYWHarray = [x,y,w,h];
                      }
                      else{
                        //There is certainly something more useful we can do here. I just kill it if we do not have all the values.  
                        XYWHarray = [0,0,0,0];
                      }
                  }
                  //This part creates chunks and places them in the canvas.
                  if(fragment){
                    var fragmentHTML = $("<div class='fragment canvasinner'><img class='canvasImg' src='"+canvasImg+"' /></div>");
                     $.each(pageCanvases, function(){
                         if(this["@id"] == currentCanvas){
                             fragmentHTML.find('img').attr('src', this.images[0].resource["@id"]);
                             if(XYWHarray[2] == 0 || XYWHarray[3] == 0){ //well surely the height and width are not 0 if it is an image chunk...this is what I do if it is.
                                fragmentHTML.attr("style", "height:"+this.height+"px; width:"+this.width+"px");//set chunk height and width to canvas height and width.
                                fragmentHTML.find("img").attr("style", "top:-"+XYWHarray[1]+"px; left:-"+XYWHarray[0]+"px; ");
                                if(side1){ //put it in side1.  
                                  canvasHolder3.find('img').remove();
                                  canvasHolder3.append(fragmentHTML);
                                }
                                else{ //maybe we should check if side2 is true, but I'll just assume it
                                  canvasHolder4.find('img').remove();
                                  canvasHolder4.append(fragmentHTML);
                                }
                             }
                             else{ //the height and width of the fragment piece were not 0.
                                fragmentHTML.attr("style", "height:"+XYWHarray[3]+"px; width:"+XYWHarray[2]+"px");
                                fragmentHTML.find("img").attr("style", "top:-"+XYWHarray[1]+"px; left:-"+XYWHarray[0]+"px;");
                                if(side1){//put it in side1.
                                  canvasHolder3.append(fragmentHTML);
                                }
                                else{//maybe we should check if side2 is true, but I'll just assume it
                                  canvasHolder4.append(fragmentHTML);
                                }
                             }
                         }
                     });
                  }

                    /*
                          $.each(currentCanvasAnnotationLists, function(data1){ //get each annotationList's annotations
                            console.log("SET Current Canvas ANNOTATIONS");
                             $.get(data1["@id"], function(data2){
                               console.log("ANNOLIST GET");
                                 data=JSON.parse(data2);
                                 currentCanvasAnnotations.push(data2.resources);
                             }, function(data2){ //make that annotations are gathered, then run the code to append annos to their location.
                                var canvas = data2.on;
                                var XYWHarray2 = [0,0,0,0];
                                if(canvas.indexOf("#xywh") >= 0){
                                  var XYWHsubstring = canvas.substring(canvas.lastIndexOf('#' + 1)); 
                                  if(XYWHsubstring.indexOf('=') > -1){ //string must contain data1 to be valid
                                      var numberArray = XYWHsubstring.substring(canvas.lastIndexOf('xywh=') + 5).split(',');
                                      if(numberArray.length === 4){ // string must have all 4 to be valid
                                          var x = numberArray[0];
                                          var y = numberArray[1];
                                          var w = numberArray[2];
                                          var h = numberArray[3];
                                          XYWHarray2 = [x,y,w,h];
                                      }
                                      else{
                                        //There is certainly something more useful we can do here. I just kill it if we do not have all the values.  
                                        XYWHarray2 = [0,0,0,0];
                                      }
                                  }
                                  annotation.attr("style", "left: "+XYWHarray2[0]+"px; top: "+XYWHarray2[1]+"px; width: "+XYWHarray2[2]+"px; height: "+XYWHarray2[3]+"px;"    );
                                }
                                if(data1.resource["@type"] == "dctypes:Image"){
                                  var img = $("<img class='canvasImgFragment' src='"+data1.resource["@id"]+"'/>");
                                  annotation.addClass("imgFragment").append(img);
                                }
                                if(data1.resource["@type"] == "cnt:ContentAsText"){
                                  var text = data1.resource["cnt:chars"];
                                  annotation.attr("annoText", text);
                                }
                                if(side1){
                                  //console.log("Append anno to holder 1");
                                  canvasHolder3.append(annotation);
                                }
                                else{
                                    //console.log("Append anno to holder 2");
                                  canvasHolder4.append(annotation);
                                }
                             }); //Must comment this out when doing local demo.
                            }); //live 
                        */
                            console.log("ANNOTATIONS");
                            console.log(currentCanvasAnnotations);
                            for(var x=0; x<currentCanvasAnnotations.length; x++){
                                var annotation = $("<div class='annotation'></div>");
                                $.each(currentCanvasAnnotations[x], function(){
                                  var canvas = this.on;
                                  console.log("annotation on "+canvas);
                                  var XYWHarray2 = [0,0,0,0];
                                  if(canvas.indexOf("#xywh") >= 0){
                                    var XYWHsubstring = canvas.substring(canvas.lastIndexOf('#' + 1)); 
                                    if(XYWHsubstring.indexOf('=') > -1){ //string must contain this to be valid
                                        var numberArray = XYWHsubstring.substring(canvas.lastIndexOf('xywh=') + 5).split(',');
                                        if(numberArray.length === 4){ // string must have all 4 to be valid
                                            var x = numberArray[0];
                                            var y = numberArray[1];
                                            var w = numberArray[2];
                                            var h = numberArray[3];
                                            XYWHarray2 = [x,y,w,h];
                                        }
                                        else{
                                          //There is certainly something more useful we can do here. I just kill it if we do not have all the values.  
                                          XYWHarray2 = [0,0,0,0];
                                        }
                                    }
                                    annotation.attr("style", "left: "+XYWHarray2[0]+"px; top: "+XYWHarray2[1]+"px; width: "+XYWHarray2[2]+"px; height: "+XYWHarray2[3]+"px;");
                                  }
                                  if(this.resource["@type"] == "dctypes:Image"){
                                    var img = $("<img class='canvasImgFragment' src='"+this.resource["@id"]+"'/>");
                                    annotation.addClass("imgFragment").append(img);
                                  }
                                  if(this.resource["@type"] == "cnt:ContentAsText"){
                                    var text = this.resource["cnt:chars"];
                                    annotation.attr("annoText", text);
                                  }
                                  if(side1){
                                    //console.log("Append anno to holder 1");
                                    canvasHolder3.append(annotation);
                                  }
                                  else{
                                      //console.log("Append anno to holder 2");
                                    canvasHolder4.append(annotation);
                                  }
                                }); //must comment this out when running live
                            }

                           //The canvas holders must be completely built before this part.  We may need to implement a timeout for now.  
                            if(a){ //if the range exists in a section
                               // console.log("Append canvases to range.");
                              rangeForCanvases.append(canvasHolder3, canvasHolder4); //put the canvas object in the range object (the leaf)
                            }
                            else{ //the range does not exist in a section, but rather as a parent range.  Add canvas to the new leaf
                                //console.log("Append canvases to new leaf");
                              rangeForCanvases.append(canvasHolder3, canvasHolder4);
                              $("#focusedRange").append(rangeForCanvases);
                              existingRanges.push(rangeForCanvases.attr("rangeID"));
                            }
                            // if(newLeaf){ //If its a random page from the bucket, it needs to listed as a parent range.  Append to DOM.
                            //   $("#focusedRange").append(newLeaf);
                            //  // console.log("append new leaf to DOM");
                            //   if($.inArray(newLeaf.attr("rangeID"), existingRanges) == -1){
                            //       existingRanges.push(newLeaf.attr("rangeID"));
                            //   }
                            // }
                       });
                }
                else{ // this is an empty section, do nothing.

                }
            }
        }
    }


/*
* Helper function for mergeSort().  It mergest the left and right arrays created when splitting the source array in the middle. 
*/
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il].ranges.length < right[ir].ranges.length){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
/*
* The classic merge sort function that sorts an array of numbers from smallest to largest.  In our case, the array is an array of range objects, but what I test is the length of their ranges[] field, since those with the highest count in the ranges[] field will be top parent objects and the ordered array is easier to build the tree structure from.  Even for an array of 1000 ranges, this runs pretty quick.  
*/
function mergeSort(items){
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    
    // Add the arguments to replace everything between 0 and last item in the array
    params.unshift(0, items.length);
    items.splice.apply(items, params);
    return items;
}

function populateAnnoForms(){
        var annos = [];
        if(zeta){
            annos = annoListCollection[2].resources;
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
        }
        else if(alpha){
            annos = annoListCollection[0].resources;
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
        }
        else{
            annos = annoListCollection[1].resources;
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
        }
        $.each($(".contextFormEntry"), function(){
            var label1 = $(this).find('.formLabel').html().replace(":", "").trim();
            var currentEntry1 = $(this).find(".content");
            $.each(annos, function(){
                var checkLabel1 = this.label.replace(":", "").trim();
                if (checkLabel1 == label1){
                    currentEntry1.val(this.resource["cnt:chars"]);
                }
                else if(checkLabel1 == "General Metadata"){
                    $("#notes").val(this.resource["cnt:chars"]);
                }
            });
        });
        $.each($(".contentFormEntry"), function(){
            var label2 = $(this).find('.formLabel').html().replace(":", "").trim();
            var currentEntry2 = $(this).find(".content");
            $.each(annos, function(){
                var checkLabel2 = this.label.replace(":", "").trim();
                if (checkLabel2 == label2){
                    currentEntry2.val(this.resource["cnt:chars"]);
                }
                else if(checkLabel2 == "General Metadata"){
                    $("#notes").val(this.resource["cnt:chars"]);
                }
            });
        });
        $.each($(".carrierFormEntry"), function(){
            var label3 = $(this).find('.formLabel').html().replace(":", "").trim();
            var currentEntry3 = $(this).find(".content");
            $.each(annos, function(){
                var checkLabel3 = this.label.replace(":", "").trim();
                if (checkLabel3 == label3){
                    currentEntry3.val(this.resource["cnt:chars"]);
                }
                else if(checkLabel3 == "General Metadata"){
                    $("#notes").val(this.resource["cnt:chars"]);
                }
            });
        });
        
        
    };
    /*
        Fires when user clicks to enter additional information.  This mainly changes the UI to highlight which part of the leaf the user is working on and show them the information field in the left column.  
    */
   
    function enterCatalogueInfo(canvasID, canvas){
        var previewImgSrc = $("."+canvas+"Img").attr("src");
        $(".imgPreview").attr("src",previewImgSrc);
        $(".content").val(""); //Reset all fields
            //$(".start").show("explode", "500ms");
            if(canvas == 'recto'){
                $("#folioSide1").addClass("selectedFolio");
                $("#folioSide2").removeClass("selectedFolio");
                $("#oneAndtwo").removeClass("selectedFolio");

                $("#folioSide1").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('selectedI');
                $("#folioSide2").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');
                $("#oneAndtwo").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');

                $("#catalogueInfoFor").val(canvasID); //alpha
                alpha = true;
                beta= false;
            }
            else if (canvas == 'verso'){
                $("#folioSide2").addClass("selectedFolio");;
                $("#folioSide1").removeClass("selectedFolio");
                $("#oneAndtwo").removeClass("selectedFolio");

                $("#folioSide1").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');
                $("#folioSide2").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('selectedI');
                $("#oneAndtwo").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');

                $("#catalogueInfoFor").val(canvasID); //beta
                beta = true;
                alpha = false;
            }
            else{
                $("#oneAndtwo").addClass("selectedFolio");
                $("#folioSide1").removeClass("selectedFolio");
                $("#folioSide2").removeClass("selectedFolio");

                $("#folioSide1").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');
                $("#folioSide2").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('unselectedI');
                $("#oneAndtwo").find('i').removeClass('unselectedI').removeClass('selectedI').addClass('selectedI');

                $("#catalogueInfoFor").val(currentLeafServerID); //zeta
                alpha = beta = zeta = true;
            }
            populateAnnoForms();
            // $("#start").attr("onclick", "submitStart('"+canvas+"');");
        
    }
    /*
    When the form information has been filled out, this function will save annotations to the appropriate canvas or leaf range. Entries that create new ranges will do so, and if that range is already created and needs to be updated, it will do that. It also keeps content, context and carrier information separate from each other so we can track them as such.  
*/

    function saveFolio(){
        var currentLeafObject = {};
        var otherInfo = {};
        var uriToSave = $("#catalogueInfoFor").val(); //alpha URI, beta URI, or leaf URI
        var canvasURI = uriToSave;
        var otherInfoList = {};
        $.each(testManifest.structures, function(){
            if ($(this)["@id"] === uriToSave){
                currentLeafObject = $(this); //Set the actual leaf object if the uriToSave is a leaf uri
                return false;
            }
        });
        //Go through each content piece, grab its value and if applicable make it an annotation or a range.
        $(".contentFormEntry").each(function(){
            var addedInfoList1 = {};
            if(zeta){ addedInfoList1 = $("#zetaInformation").find(".contentList"); }
            else if(alpha){ addedInfoList1 = $("#alphaInformation").find(".contentList"); }
            else if(beta){ addedInfoList1 = $("#betaInformation").find(".contentList"); }
            var entryID = $(this).find(".content").attr("id");
            var entryValue = $(this).find(".content").val();
            var range = $(this).find(".content").attr("range");
            range = (range !== "" && range !== undefined);
            var addedInfoLabel = $(this).find(".formLabel").html();
            var special = $(this).attr("special");
            var annotationObject = {
                "@id" : "",
                "@type" : "oa:Annotation",
                "motivation" : "sc:painting",
                "label" : "",
                "resource" : {
                  "@type" : "cnt:ContentAsText",
                  "cnt:chars" :""
                },
                "on" : canvasURI //this will be a rangeURI if uriToSave is set to the leaf uri instead of a canvasURI, which is what we want.  annotations can be saved to ranges. 
            };
            var rangeObject = { //this will only be saved 
                "@id" : "",
                "@type" : "sc:Range",
                "motivation" : "sc:painting",
                "label" : "",
                "canvases": [],
                "ranges" : [currentLeafServerID], //This is always the URI of the current leaf, and any new range created because of this leaf MUST contain this leaf URI since a range must include leafs or canvases to make it a range.  
                "resources" : [],
                "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
            };
            if (special === "annotations"){
                //console.log("Special Annos");
                var inter = $("#interlinearAnnos").val();
                var marginal = $("#marginalAnnos").val();
                if(inter!=="" && inter!==undefined){
                    var annoCopy1 = jQuery.extend({}, annotationObject);
                    annoCopy1["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                    annoCopy1.label = "Interlinear Annotations";
                    annoCopy1.resource["cnt:chars"] = inter;

                    createNewAnno(annoCopy1, "Interlinear Annotations", inter, addedInfoList1);
                    // addedInfoList1.append("<li><span class='formLabel'>Annotations - Interlinear: </span> "+inter+" <span annoServerID='"+annoServerID1+"' class='removeInfo'> X </span></li>");
                }
                if(marginal!=="" && marginal!==undefined){
                    var annoCopy2 = jQuery.extend({}, annotationObject);
                    annoCopy2["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                    annoCopy2.label = "Marginal Annotations";
                    annoCopy2.resource["cnt:chars"] = marginal;
                    createNewAnno(annoCopy2, "Marginal Annotations", marginal, addedInfoList1);
                    // addedInfoList1.append("<li local ><span class='formLabel'>Annotations - Marginal: </span>"+marginal+" <span annoServerID='"+annoServerID2+"' class='removeInfo'> X </span></li>");
                }
            }
            else if(entryValue !== "" && entryValue !== undefined ){
                var newAnnoURI = "http://www.example.org/iiif/LlangBrev/annos/" +annoID; 
                var newRangeURI = "http://www.example.org/iiif/LlangBrev/range/" +rangeID;
                //console.log("Anno Object @ID is being set to :" + newAnnoURI)
                annotationObject["@id"] = newAnnoURI;
                annotationObject.resource["cnt:chars"] = entryValue;
                rangeObject["@id"] = newRangeURI;
                rangeObject.label = entryValue;
                if(range){ //there are no longer any ranges to update.  This code will not run, so it has not been kept up with the rest of the code.  It may be needed in the future if users are allowed to create new ranges or update existing ones through the form.  
                    var updateOrNew = "";
                    var rangeToUpdate = "";
                    for(var i=1; i<testManifest.structures.length; i++){
                        if (testManifest.structures[i].label === entryValue){
                            updateOrNew = "update";
                            rangeToUpdate = testManifest.structures[i]["@id"];
                            updateRange(rangeToUpdate, currentLeafServerID);
                            break;
                        }
                        else{
                            updateOrNew = "new";
                        }
                    }
                    if(updateOrNew === "new"){
                        createNewRange(rangeObject, "", addedInfoLabel, entryValue, addedInfoList1);
                        // addedInfoList1.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+" <span rangeServerID='"+rangeServerID+"' class='removeInfo'> X </span></li>");
                    }
                }
                else{
                    annotationObject["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                    annotationObject.label = addedInfoLabel;
                    annotationObject.resource["cnt:chars"] = entryValue;
                    createNewAnno(annotationObject, addedInfoLabel, entryValue, addedInfoList1);
                    // addedInfoList1.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+"</li><span annoServerID='"+annoServerID+"' class='removeInfo'> X </span>");
                    //There can be multiple annotations of the same label.  We have to allow this to allow for conflicts to be discovered, or allow for the case where it is simply true that the annotation of the same label exists twice with different data in each instance.  For example, one person could make an anntoation saying the author is mozart and another saying the author is davinci, which could be true and therefore must be allowed.  
                }
                //console.log(annotationObject);
            }
        });

        $(".contextFormEntry").each(function(){
            var addedInfoList2 = {};
            //console.log(alpha, beta, zeta);
            if(zeta){ addedInfoList2 = $("#zetaInformation").find(".contextList"); }
            else if(alpha){ addedInfoList2 = $("#alphaInformation").find(".contextList"); }
            else if(beta){ addedInfoList2 = $("#betaInformation").find(".contextList"); }
            //console.log(addedInfoList2);
            var entryID = $(this).find(".content").attr("id");
            var entryValue = $(this).find(".content").val();
            var range = $(this).find(".content").attr("range");
            range = (range !== "" && range !== undefined);
            var addedInfoLabel = $(this).find(".formLabel").html();
            //console.log(entryID, entryValue, range, addedInfoLabel);
            var annotationObject = {
                "@id" : "",
                "@type" : "oa:Annotation",
                "motivation" : "sc:painting",
                "label" : "",
                "resource" : {
                  "@type" : "cnt:ContentAsText",
                  "cnt:chars" :""
            },
            "on" : canvasURI //this will be a rangeURI if uriToSave is set to the leaf uri instead of a canvasURI, which is what we want.  annotations can be saved to ranges. 
            };
            var rangeObject = { //this will only be saved 
                "@id" : "",
                "@type" : "sc:Range",
                "motivation" : "sc:painting",
                "label" : "",
                "canvases": [],
                "ranges" : [currentLeafServerID], //This is always the URI of the current leaf, and any new range created because of this leaf MUST contain this leaf URI since a range must include leafs or canvases to make it a range. 
                "resources" : [],
                "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
            };
            if(entryValue !== "" && entryValue !== undefined ){
                //console.log('HELLO')
                var newAnnoURI = "http://www.example.org/iiif/LlangBrev/annos/" +annoID; 
                var newRangeURI = "http://www.example.org/iiif/LlangBrev/range/" +rangeID;
                //console.log("Anno Object @ID is being set to :" + newAnnoURI)
                annotationObject["@id"] = newAnnoURI;
                annotationObject.resource["cnt:chars"] = entryValue;
                rangeObject["@id"] = newRangeURI;
                rangeObject.label = entryValue;
                if(range){ //there are no longer any ranges to update.  This code will not run, so it has not been kept up with the rest of the code.  It may be needed in the future if users are allowed to create new ranges or update existing ones through the form.  
                    //console.log("RANGE")
                    var updateOrNew = "";
                    var rangeToUpdate = "";
                    for(var i=1; i<testManifest.structures.length; i++){
                        if (testManifest.structures[i].label === entryValue){
                            updateOrNew = "update";
                            rangeToUpdate = testManifest.structures[i]["@id"];
                            updateRange(rangeToUpdate, currentLeafServerID);
                            break;
                        }
                        else{
                            updateOrNew = "new";
                        }
                    }
                    if(updateOrNew === "new"){
                        createNewRange(rangeObject, "", addedInfoLabel, entryValue, addedInfoList2);
                        // addedInfoList2.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+" <span rangeServerID='"+rangeServerID+"' class='removeInfo'> X </span></li>");
                    }
                }
                else{
                    //console.log("ANNO")
                    annotationObject["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                    annotationObject.label = addedInfoLabel;
                    annotationObject.resource["cnt:chars"] = entryValue;
                    createNewAnno(annotationObject, addedInfoLabel, entryValue, addedInfoList2);
                    //console.log("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+"</li>");
                    // addedInfoList2.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+" <span annoServerID='"+annoServerID+"' class='removeInfo'> X </span></li>");
                    //There can be multiple annotations of the same label.  We have to allow this to allow for conflicts to be discovered, or allow for the case where it is simply true that the annotation of the same label exists twice with different data in each instance.  For example, one person could make an anntoation saying the author is mozart and another saying the author is davinci, which could be true and therefore must be allowed.  
                }
                //console.log(annotationObject);
            }       
        });

        $(".carrierFormEntry").each(function(){
            var addedInfoList3 = {};
            
            if(zeta){ addedInfoList3 = $("#zetaInformation").find(".carrierList"); }
            else if(alpha){ addedInfoList3 = $("#alphaInformation").find(".carrierList"); }
            else if(beta){ addedInfoList3 = $("#betaInformation").find(".carrierList"); }
            var entryID = $(this).find(".content").attr("id");
            var entryValue = $(this).find(".content").val();
            var range = $(this).find(".content").attr("range");
            range = (range !== "" && range !== undefined);
            var addedInfoLabel = $(this).find(".formLabel").html();

            ////console.log("RANGE T/F: "+range);
            
            var special = $(this).attr("special");
            var annotationObject = {
                "@id" : "",
                "@type" : "oa:Annotation",
                "motivation" : "sc:painting",
                "label" : "",
                "resource" : {
                  "@type" : "cnt:ContentAsText",
                  "cnt:chars" :""
                },
                "on" : canvasURI //this will be a rangeURI if uriToSave is set to the leaf uri instead of a canvasURI, which is what we want.  annotations can be saved to ranges. 
            };
            var rangeObject = { //this will only be saved 
                "@id" : "",
                "@type" : "sc:Range",
                "motivation" : "sc:painting",
                "label" : "",
                "canvases": [],
                "ranges" : [currentLeafServerID], //This is always the URI of the current leaf, and any new range created because of this leaf MUST contain this leaf URI since a range must include leafs or canvases to make it a range. .  
                "resources" : [],
                "isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal"
            };
            if(special !== "" && special !== undefined){
                //console.log(special);
                if(special === "dimensions"){
                    //console.log("DIMENSIONS")
                    var leafHeight = $("#leafHeight").val();
                    var leafWidth = $("#leafWidth").val();
                    var textHeight = $("#tbHeight").val();
                    var textWidth = $("#tbWidth").val();
                    var lineHeight = $("#lHeight").val();
                    var lineWidth = $("#lWidth").val();
                    if(leafHeight!== "" || leafWidth!==""){
                        //console.log("LEAF IT")
                        var annotationObject1 = jQuery.extend({}, annotationObject); //cannot just do = annotationObject.  It will cause scope issues.
                        var annotationObject2 = jQuery.extend({}, annotationObject);
                        annotationObject1.label = "Leaf Height";
                        annotationObject1.resource["cnt:chars"] = leafHeight;
                        annotationObject2.label = "Leaf Width";
                        annotationObject2.resource["cnt:chars"] = leafWidth;
                        annotationObject1["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        //console.log(annoID);
                        createNewAnno(annotationObject1, "Leaf Height", leafHeight, addedInfoList3); //this will increment annoID by 1
                        //console.log(annoID);
                        annotationObject2["@id"]="http://www.example.org/iiif/LlangBrev/annos/" +(annoID); //should be saving the new annoID # 
                        createNewAnno(annotationObject2, "Leaf Width", leafWidth, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Leaf Height: </span> "+leafHeight+" <span annoServerID='"+annoServerID1+"' class='removeInfo'> X </span></li>");
                        // addedInfoList3.append("<li><span class='formLabel'>Leaf Width: </span> "+leafWidth+" <span annoServerID='"+annoServerID2+"' class='removeInfo'> X </span></li>");
                    }
                    if(textHeight !== "" || textWidth !==""){
                        //console.log("TEXT IT")
                        var annotationObject3 = jQuery.extend({}, annotationObject);
                        var annotationObject4 = jQuery.extend({}, annotationObject);
                        annotationObject3.label = "Text Height";
                        annotationObject3.resource["cnt:chars"] = textHeight;
                        annotationObject4.label = "Text Width";
                        annotationObject4.resource["cnt:chars"] = textWidth;
                        annotationObject3["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        //console.log(annoID);
                        createNewAnno(annotationObject3, "Text Height", textHeight, addedInfoList3); //this will increment annoID by 1
                        //console.log(annoID);
                        annotationObject4["@id"]="http://www.example.org/iiif/LlangBrev/annos/" +(annoID); //should be savind the new annoID # 
                        createNewAnno(annotationObject4, "Text Width", textWidth, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Text Height: </span> "+textHeight+" <span annoServerID='"+annoServerID3+"' class='removeInfo'> X </span></li>");
                        // addedInfoList3.append("<li><span class='formLabel'>Text Width: </span> "+textWidth+" <span annoServerID='"+annoServerID4+"' class='removeInfo'> X </span></li>");
                    }
                    if(lineHeight !== "" || lineWidth !== ""){
                        //console.log("LINE IT");
                        var annotationObject5 = jQuery.extend({}, annotationObject);
                        var annotationObject6 = jQuery.extend({}, annotationObject);
                        annotationObject5.label = "Line Height";
                        annotationObject5.resource["cnt:chars"] = lineHeight;
                        annotationObject6.label = "Line Width";
                        annotationObject6.resource["cnt:chars"] = lineWidth;
                        annotationObject5["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        //console.log(annoID);
                        createNewAnno(annotationObject5, "Line Height", lineHeight, addedInfoList3); //this will increment annoID by 1
                        //console.log(annoID);
                        annotationObject6["@id"]="http://www.example.org/iiif/LlangBrev/annos/" +(annoID); //should be savind the new annoID # 
                        createNewAnno(annotationObject6, "Line Width", lineWidth, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Line Height: </span> "+lineHeight+" <span annoServerID='"+annoServerID5+"' class='removeInfo'> X </span></li>");
                        // addedInfoList3.append("<li><span class='formLabel'>Line Width: </span> "+lineWidth+" <span annoServerID='"+annoServerID6+"' class='removeInfo'> X </span></li>");
                    }
                }
                else if(special === "layout"){
                    //console.log("LAYOUT");
                    var lines = $("#layoutLines").val();
                    var columns = $("#layoutColumns").val();
                    if(lines!=="" && lines!==undefined){
                        //console.log("LINES");
                        var annoCopy1 = jQuery.extend({}, annotationObject);;
                        annoCopy1["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        annoCopy1.label = "Lines";
                        annoCopy1.resource["cnt:chars"] = lines;
                        createNewAnno(annoCopy1, "Lines", lines, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Layout - Lines: </span> "+lines+" <span annoServerID='"+annoServerID1+"' class='removeInfo'> X </span></li>");
                    }
                    if(columns!=="" && columns!==undefined){
                        //console.log("COLUMNS");
                        var annoCopy2 = jQuery.extend({}, annotationObject);;
                        annoCopy2["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        annoCopy2.label = "Columns";
                        annoCopy2.resource["cnt:chars"] = columns;
                        createNewAnno(annoCopy2, "Columns", columns, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Layout - Columns: </span> "+columns+" <span annoServerID='"+annoServerID2+"' class='removeInfo'> X </span></li>");
                    }
                }
                else if(special === "decorations"){
                    //console.log("DECORATIONS")
                    var initials = $("#carrierInitials").val();
                    var border = $("#carrierBorder").val();
                    if(initials!=="" && initials!==undefined){
                        //console.log("INITIALS")
                        var annoCopy1 = jQuery.extend({}, annotationObject);
                        annoCopy1["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        annoCopy1.label = "Initials";
                        annoCopy1.resource["cnt:chars"] = initials;
                        createNewAnno(annoCopy1, "Initials", initials, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Decorations - Initials: </span> "+initials+" <span annoServerID='"+annoServerID1+"' class='removeInfo'> X </span></li>");
                    }
                    if(border!=="" && border!==undefined){
                        //console.log("BORDER")
                        var annoCopy2 = jQuery.extend({}, annotationObject);
                        annoCopy2["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                        annoCopy2.label = "Border";
                        annoCopy2.resource["cnt:chars"] = border;
                        createNewAnno(annoCopy2, "Border", border, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>Decorations - Border: </span> "+border+" <span annoServerID='"+annoServerID2+"' class='removeInfo'> X </span></li>");
                    }
                }
            }
            else if(entryValue !== "" && entryValue !== undefined ){
                var newAnnoURI = "http://www.example.org/iiif/LlangBrev/annos/" +annoID; 
                var newRangeURI = "http://www.example.org/iiif/LlangBrev/range/" +rangeID;
                annotationObject["@id"] = newAnnoURI;
                annotationObject.resource["cnt:chars"] = entryValue;
                rangeObject["@id"] = newRangeURI;
                if(range){//there are no longer any ranges to update.  This code will not run, so it has not been kept up with the rest of the code.  It may be needed in the future if users are allowed to create new ranges or update existing ones through the form.  
                    var updateOrNew = "";
                    var rangeToUpdate = "";
                    for(var i=1; i<testManifest.structures.length; i++){
                        if (testManifest.structures[i].label === entryValue){
                            updateOrNew = "update";
                            rangeToUpdate = testManifest.structures[i]["@id"];
                            updateRange(rangeToUpdate, currentLeafServerID);
                            break;
                        }
                        else{
                            updateOrNew = "new";
                        }
                    }
                    if(updateOrNew === "new"){
                        createNewRange(rangeObject, "", addedInfoLabel, entryValue, addedInfoList3);
                        // addedInfoList3.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+"<span rangeServerID='"+rangeServerID2+"' class='removeInfo'> X </span></li>");
                    }
                }
                else{
                    annotationObject["@id"] = "http://www.example.org/iiif/LlangBrev/annos/" +(annoID);
                    annotationObject.label = addedInfoLabel;
                    annotationObject.resource["cnt:chars"] = entryValue;
                    createNewAnno(annotationObject, addedInfoLabel, entryValue, addedInfoList3);
                    // addedInfoList3.append("<li><span class='formLabel'>"+addedInfoLabel+" </span> "+entryValue+"<span annoServerID='"+annoServerID+"' class='removeInfo'> X </span></li>");
                    //There can be multiple annotations of the same label.  We have to allow this to allow for conflicts to be discovered, or allow for the case where it is simply true that the annotation of the same label exists twice with different data in each instance.  For example, one person could make an anntoation saying the author is mozart and another saying the author is davinci, which could be true and therefore must be allowed.  
                }
            }   
        });

        //Grab the additional notes field and save it as an annotation

        var canvasNotes = $("#notes").val();
        if(canvasNotes !== ""){
            var newAnnoURI = "http://www.example.org/iiif/LlangBrev/annos/" +annoID; 
            var canvasURI = $("#catalogueInfoFor").val();
            
            var annoObject = {
                "@id" : newAnnoURI,
                "@type" : "oa:Annotation",
                "motivation" : "sc:painting",
                "label" : "General Metadata",
                "resource" : {
                  "@type" : "cnt:ContentAsText",
                  "cnt:chars" : canvasNotes
                },
                "on" : canvasURI
            };
            createNewAnno(annoObject, "General Metadata", canvasNotes, otherInfoList);
            // otherInfoList.append("<li><span class='formLabel'>General Notes: </span> "+canvasNotes+" <span annoServerID='"+annoServerID+"' class='removeInfo'> X </span></li>");
        }

        $(".start").hide("blind", "300ms", function(){
            $(".imgAdditionArea").show("explode", "500ms");
            $("#catalogueInfoFor").val(''); 
            $("#folioSide2").removeClass("selectedFolio");
            $("#folioSide1").removeClass("selectedFolio");
        });

        // if(section !== "bucket"){
        //     console.log("ADD TO SECTION");
        //   updateRange(section, currentLeafServerID);
        // }
       
    }

    function savePlacement(){
        var section = "";
        if($(".selectedSection:last").attr('relation') === 'bucket'){
          section = "bucket";
        }
        else{
          section = $(".selectedSection:last").attr("rangeID");
        }
        if(section !== "bucket"){
          updateRange(section, currentLeafServerID, 'arrange');
        }
    }

    function resetPlacement(){
      $(".selectedSection").removeClass("selectedSection");
      if($(".parentSection").length > 0){
        $.each($(".parentSection"), function(){
          var rangeID = $(this).attr("rangeID");
          $(".arrangeSection[rangeID='"+rangeID+"']").addClass("selectedSection");
        });
      }
      else{
        $('.rangeArrangementArea:first').find('.unassigned').addClass("selectedSection");
      }
      $.each($(".rangeArrangementArea"),function(){
        if($(this).find(".selectedSection").length == 0){
          $(this).remove();
        }
      });
    }
    
	function showFullImage(imgContainer){
		var imgToShow = $("#"+imgContainer).find('img').attr("src");
		$("#fullImgContainer").find('img').attr('src', imgToShow);
		$("#fullImgContainer").show();
		$("#fullImageShade").show();
	}
	function hideFullImage(){
		$("#fullImgContainer").hide();
		$("#fullImageShade").hide()
	}
	function addImage(anno, canvasURI){
		//DO not add image annotations into an annotation list. 
		//console.log("CANVASURI: "+canvasURI);
		//console.log(anno);
		//here, the anno is an image annotation.  The object can be directly saved into a canvases 'images[]' field outside of an annotation list.  I have the @id of the canvas and the annotation I want to put into its images[] field.
		//createNewAnno(anno); //live
		//anno["@id"] = annoServerID; //live
		$.each(testManifest.sequences[0].canvases, function(){
			if(this["@id"] === canvasURI){
				this.images.push(anno);
				imageID++;
				//updateCanvas
				return false;
			}
		})
	}

	/*
		Check if this particular annotation already exists.  If it does, we want to update the annotation.  Otherwise, we want to save a new one.
		@see createNewAnno()
	*/
	function annoExists(annoObject){
		var labelToCheckFor = annoObject.label;
		var tmpAnnos = [];
		var theReturn = false;
		var theURI = "";
		if(zeta){
            tmpAnnos = annoListCollection[2];
		}
		else if(alpha){
            tmpAnnos = annoListCollection[0];
		}
		else{
            tmpAnnos = annoListCollection[1];
		}
            $.each(tmpAnnos.resources, function(){
            if(this.label == labelToCheckFor){
	            theReturn = true;
	            return -1;
            }
		});
		return theReturn;
	}

	function updateAnnotation(annoURI, annoObj, arrange){
		var resourceObj = annoObj.resource;
		var updateAnnoURL = "http://localhost:8080/brokenBooks/updateRange";
		var paramObj = {"@id":annoURI, "resource": resourceObj};
		var params = {"content":JSON.stringify(paramObj)};
		$.post(updateAnnoURL, params, function(data){
		});
		if(zeta){
        $.each(annoListCollection[2].resources, function(){
            if(this["@id"] == annoURI){
                    this.resource = annoObj.resource;
            }
        });
		}
		else if (alpha){
      $.each(annoListCollection[0].resources, function(){
          if(this["@id"] == annoURI){
                  this.resource = annoObj.resource;
          }
      });
		}
		else{
        $.each(annoListCollection[1].resources, function(){
            if(this["@id"] == annoURI){
                    this.resource = annoObj.resource;
                    console.log("Local Anno Updated.");
            }
        });
		}
	}

	/*
		This function takes the annotation object and saves it in the manifest object in the appropriate location.  it makes the decision whether the annotation is being saved to a canvas or a range. 
	*/
	function createNewAnno(annoObject, newLabel, value, list){
		// A.K.A update annotationList
		annoID ++;
		var objectID = $("#catalogueInfoFor").val(); //which object are we saving to
		var annoServerID = -1;
		annoObject.on = objectID; //set the on property to be what object we are saving to 
		var newAnnoUrl = "http://localhost:8080/brokenBooks/saveNewRange";
		var params = {'content':JSON.stringify(annoObject)};
		var labelToCheckFor = annoObject.label;
		var tmpAnnos = [];
		var theReturn = undefined;
		var theURI = "";

		/* See if the annotation exists and if so, update the annotation isntead of saving a new one. */
		if(zeta){
			tmpAnnos = annoListCollection[2];
		}
		else if (alpha){
			tmpAnnos = annoListCollection[0];
		}
		else{
			tmpAnnos = annoListCollection[1];
		}
		$.each(tmpAnnos.resources, function(){
			if(this.label == labelToCheckFor){
				updateAnnotation(this["@id"], annoObject);
			}
		});
		if(annoExists(annoObject)){ /* Works with the code block above this.  Check if this annotation exists and if so, we do not want to run any of the code below.  */
			return false;
		}
		$.post(newAnnoUrl, params, function(data){
			data=JSON.parse(data);
			annoObject["@id"] = data["@id"];
			if(zeta){
				annoListCollection[2].resources.push(annoObject); //live
			}
			else if(alpha){
				annoListCollection[0].resources.push(annoObject); //live
			}
			else{
				annoListCollection[1].resources.push(annoObject); //live
			}
			$.each(annoListCollection, function(){
				if (this.on === objectID){ //this is our annotation list to add the annotation to 
					//this.resources.push(annoObject); //push the annotation to the appropriate list.
					// console.log("ANNO ADDED TO THIS LIST "+objectID);
					// console.log(annoObject);
					//Image annotation vs. line annotation?
					var updateAnnoListURL = "http://localhost:8080/brokenBooks/updateRange";
					var newResources = this.resources;
					var updateContent = newResources;
					// console.log("anno list");
					// console.log(this);
					// console.log(this["@id"]);
					var paramsObj = {"@id": this["@id"], "resources":JSON.stringify(updateContent)};
					var params = {"content":JSON.stringify(paramsObj)};
					
					$.post(updateAnnoListURL, params, function(data){
					});
				}
			}); 
				
		});  //live. 
		 
		if(zeta){
			$.each(testManifest.structures, function(){
				if (this["@id"] === objectID){ //this is our canvas object
					var otherContent1 = {"@id":annoListCollection[2]["@id"], "@type":"sc:AnnotationList"};
					var listIncluded = false;
					$.each(this.otherContent,function(){
						if(this["@id"] === annoListCollection[2]["@id"]){
							listIncluded = true;
							return false;
						}
					})
					if(!listIncluded)this.otherContent.push(otherContent1); //If the annotation list is not already included in the otherContent field, add it. 
				}
			});//local. adds the annotation list uri to the other content field.  
		}
		else{
			var annoListID = -1;
			$.each(testManifest.sequences[0].canvases, function(){
				if (this["@id"] === objectID){ //this is our canvas object
					if(alpha){
						annoListID = annoListCollection[0]["@id"];
					}
					else{
						annoListID = annoListCollection[1]["@id"];
					}
					var otherContent2 = {"@id":annoListID, "@type":"sc:AnnotationList"};
					var listIncluded = false;
					$.each(this.otherContent,function(){
						if(this["@id"] === annoListID){
							listIncluded = true;
							return false;
						}
					})
					if(!listIncluded)this.otherContent.push(otherContent2); //If the annotation list is not already included in the otherContent field, add it. 
				}
			});
		}//local
	}

	/*
		Add the range object to the structures array in the manifest object. 
	*/
	function createNewRange(newRangeObject, current, newLabel, value, list){
		rangeID ++;
		//create a new range, given that some new information organizes canvases into a new range.  We will need to make sure the range does not already exist. 
		//testManifest.structures.push(newRangeObject); //local
		var newAnnoUrl = "http://localhost:8080/brokenBooks/saveNewRange";
		var rangeServerID = -1;
		$.post(newAnnoUrl, {'content': JSON.stringify(newRangeObject)}, function(data){
			data=JSON.parse(data);
			newRangeObject["@id"] = data["@id"]; //live
			testManifest.structures.push(newRangeObject); //live
			if(current === 'currentLeaf'){
				currentLeafServerID = data["@id"];
				annoListCollection[2].on = data["@id"];
				currentLeaf = currentLeafServerID;
        $("#oneAndtwo").attr("onclick", "enterCatalogueInfo('leaf')");
			}
			else{
				//list.append("<li><span class='formLabel'>"+newLabel+" </span> "+value+"<span annoServerID='"+data["@id"]+"' class='removeInfo'> X </span></li>");
			}
			
        	var newRangeAnnoList = {
                //"@id":"http://www.example.org/iiif/LlangBrev/annoList/"+annoListID, 
                "@type":"sc:AnnotationList",
                "resources" : [],
                "on" : data["@id"]
        	}
        	var listURL = "http://localhost:8080/brokenBooks/saveNewRange";
        	var listParams = {"content" : JSON.stringify(newRangeAnnoList)};
        	$.post(listURL, listParams, function(data2){
        		data2 = JSON.parse(data2);
        		annoListCollection[2]["@id"] = data2["@id"];
        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
        		var paramObj = {"@id":currentLeafServerID, "otherContent":[data["@id"]]};
        		var params = {"content":JSON.stringify(paramObj)};
        		$.post(updateCanvasURL, params, function(data){
        		});
        	});
		});
		
	}
  function removeFromSection(leaf, rangeID){
    console.log("Remove from section and children");
    var trackRangeID = rangeID;
    var relation = trackRangeID;

    var trackRangeID1 = rangeID;
    var relation1 = trackRangeID;

    var actualRemove = trackRangeID1;
    while(relation1 !== ""){ //Find all related children selected sections and remove their class.
      var nextRelator1 = trackRangeID1;
      var relator1 = $('div[relation="'+nextRelator1+'"]');
      if (relator1.length>0){
        trackRangeID1 = relator1.find(".selectedSection").attr("rangeID");
        if(trackRangeID1 !== undefined){
          relation1 = trackRangeID1;
          actualRemove = trackRangeID1;
        }
      }
      else{
        relation1 = "";
      }
    }
    console.log("Got actual: "+actualRemove);
    console.log("crawl ranges for actual");
    $.each(testManifest.structures, function(){
      if(this["@id"] === actualRemove){
        console.log("found it");
          var index = this.ranges.indexOf(leaf);
          console.log("old ranges");
          console.log(this.ranges);
          this.ranges.splice(index, 1);
          console.log("new ranges");
          console.log(this.ranges);
          var newAnnoUrl = "http://localhost:8080/brokenBooks/updateRange";
          var paramObj = {"ranges" : this.ranges};
          var params = {"content" : JSON.stringify(paramObj)};
          $.post(newAnnoUrl, params, function(data){
              console.log("Remove section from crumb");
              while(relation !== ""){ //Find all related children selected sections and remove their class.
                var nextRelator = trackRangeID;
                var relator = $('div[relation="'+nextRelator+'"]');
                if (relator.length>0){
                  trackRangeID = relator.find(".selectedSection").attr("rangeID");
                  $('.parentSection[rangeID="'+trackRangeID+'"]').remove();
                  relation = trackRangeID;
                  relator.find(".selectedSection").removeClass("selectedSection");
                }
                else{
                  relation = "";
                }
              }
              $(".parentSection[rangeID='"+rangeID+"']").remove();
              $(".selectedSection[rangeID='"+rangeID+"']").removeClass("selectedSection");
              //ensure the one clicked is also unselected. 
              if($('.selectedSection').length > 0){ //It is directly in a new section, save the new placement, which will create the bredcumb.
                $(".parentSection").remove();
                savePlacement();
              }
              else{ //You have removed down to the bucket, so no UI changes are necessary, everything is removed and unselected. 
                $('.rangeArrangementArea:first').find('.unassigned').addClass("selectedUnassigned");
              }
          });
      }
    });
    
  }
	/*
		This range is already in the manifest structures section, so what we are actually trying to do is save this leaf to the already created range.  We must check whether the leaf URI is already in the "ranges" section of the range.  There should be no duplicate URIs. 
	*/
	function updateRange(rangeID, leaf){
		console.log("Updating range");
		var currentRange = {};
		$.each(testManifest.structures, function(){
			if(this["@id"] === rangeID){
        var sectionName = this.label;
				if($.inArray(leaf, this.ranges) === -1){
					this.ranges.push(leaf);
					var newAnnoUrl = "http://localhost:8080/brokenBooks/updateRange";
					var paramObj = {"ranges" : this.ranges};
					var params = {"content" : JSON.stringify(paramObj)};
					$.post(newAnnoUrl, params, function(data){
              console.log("Range updated");
              var addedToSection = "";
              $.each($(".selectedSection"), function(){
                console.log("add section to arrange crumb.");
                var thisRangeID = $(this).attr("rangeID");
                var thisName = $(this).find("div:first").html();
                addedToSection = $("<div rangeID='"+thisRangeID+"' class='parentSection'><div class='parentSectionName'>"+thisName+"</div> <div class='sectionRemove' onclick=\"removeFromSection('"+leaf+"','"+thisRangeID+"');\">X</div></div>");
                $("#arrangeCrumb").append(addedToSection);
              });
              
					});
				}
				else{
          console.log("Should not update, leaf already in range");
					return false;
				}
			}
		});
		//var url = "http://localhost:8080/brokenBooks/updateRangeServlet";
		//I have a new leaf URL to add to a range, so I want to pass the rangeID and leafURL.  
		//$.post(url, newRangeObject);
	}
	
	function resolveImageURI(rv){
		var uri = $("."+rv+"Canvas").find(".uploadness").find('textarea').val();
	    $.ajax({
	        url: uri,
	        success: function(imageData){
	            //console.log(imageData);
	        },
	        error: function(jqXHR,error, errorThrown) {  
	            alert("Image could not be resolved.  Issue: " +  jqXHR.status + " - " +jqXHR.response);
	        }
	    });
	}

	/*
		Dont save the fields and return to the image options.  
	*/

	function cancelFolio(){
		//Don't get data and return to image page
		$(".start").hide("blind", "300ms", function(){
			$(".imgAdditionArea").show("explode", "500ms");
			$("#catalogueInfoFor").val(''); 
			$("#folioSide2").removeClass("selectedFolio");
			$("#folioSide1").removeClass("selectedFolio");
			alpha = beta = zeta = false;
		});
	}

	/*
		Fired when user clicks "Begin preparing a leaf".  We must create the canvases and the leaf range first, then feed it information as necessary. 
	*/
	function submitIntro(test){
            $(".intro").hide("blind", "300ms", function(){$(".imgAdditionArea").show("explode", "500ms");});
            if(test === "testEdit"){
                return false;
            }
            
            var newCanvas1ServerID = -1;
            var newCanvas2ServerID = -1;
            //create a new leaf range and get ID.  The leaf range will create 2 canvases whose ID's I will also need.
            canvasID += 1;
            var newCanvas1 = {
                    "@id" : "http://www.example.org/iiif/LlangBrev/canvas/"+canvasID, //local
                "@type" : "sc:Canvas",
                "label" : "Llang_"+canvasID,
                "height" : 1000,
                "width" : 667,
                "images" : [],
                "otherContent": [annoListCollection[0]["@id"]]
            }
   //    	 var newCanvas1AnnoList = {
			// "@id":"http://www.example.org/iiif/LlangBrev/annoList/"+annoListID, 
			// "@type":"sc:AnnotationList",
			// "resources" : [],
			// "on" : newCanvas1["@id"]
   //      } //local
        //annoListCollection.push(newCanvas1AnnoList);
        annoListID++;
        //testManifest.sequences[0].canvases.push(newCanvas1);
         $("#folioSide1").attr("onclick","enterCatalogueInfo('http://www.example.org/iiif/LlangBrev/canvases/"+canvasID+"', 'recto');"); //local
      	 $("#folioSide1").attr("canvas","http://www.example.org/iiif/LlangBrev/canvases/"+canvasID); //local
      	 //annoListCollection[0].on = "http://www.example.org/iiif/LlangBrev/canvases/"+canvasID; //local
      	 testManifest.sequences[0].canvases.push(newCanvas1); //local
      	 var url = "http://localhost:8080/brokenBooks/saveNewCanvas";
      	 var params1 = {'content': JSON.stringify(newCanvas1)};
      	 $.post(url, params1, function(data){ //save first new canvas
      	 	data = JSON.parse(data);

      	 	newCanvas1["@id"] = data["@id"];
      	 	$("#folioSide1").attr("onclick","enterCatalogueInfo('"+data["@id"]+"', 'recto');"); 
      	 	$("#folioSide1").attr("canvas", data["@id"]); 
                $("#folioSide1").click();
      	 	testManifest.sequences[0].canvases.push(newCanvas1); //live
 	   	 	
        	//annoListCollection.push(newCanvas1AnnoList);
        	annoListCollection[0].on = data["@id"];
        	//save anno list for new canvas
        	var newCanvas1AnnoList = {
				//"@id":"http://www.example.org/iiif/LlangBrev/annoList/"+annoListID, 
				"@type":"sc:AnnotationList",
				"resources" : [],
				"on" : data["@id"]
       	 	} //local
        	var listURL1 = "http://localhost:8080/brokenBooks/saveNewRange";
        	var listParams1 = {"content" : JSON.stringify(newCanvas1AnnoList)};
        	$.post(listURL1, listParams1, function(data){ //save first canvas annotation list
        		data = JSON.parse(data);
        		annoListCollection[0]["@id"] = data["@id"];
        		//update otherContent of first canvas
        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
        		var paramObj = {"@id":newCanvas1["@id"], "otherContent":[data["@id"]]};
        		var params = {"content":JSON.stringify(paramObj)};
        		$.post(updateCanvasURL, params, function(data){
        		});
        	});
      	 	newCanvas1ServerID = data["@id"];
  	 		canvasID += 1;
      	 	var newCanvas2 = {
      	 		"@id" : "http://www.example.org/iiif/LlangBrev/canvas/"+canvasID,
		        "@type" : "sc:Canvas",
		        "label" : "Llang_"+canvasID,
		        "height" : 1000,
		        "width" : 667,
		        "images" : [],
		        "otherContent" : [annoListCollection[1]["@id"]]
	      	 }
   	  //    	 	var newCanvas2AnnoList = {
	  //               "@id":"http://www.example.org/iiif/LlangBrev/annoList/"+annoListID, 
	  //               "@type":"sc:AnnotationList",
	  //               "resources" : [],
	  //               "on" : newCanvas2["@id"]
	  //       }
			// annoListCollection.push(newCanvas2AnnoList);
			//local
			annoListID++;
                $("#folioSide2").attr("onclick","enterCatalogueInfo('http://www.example.org/iiif/LlangBrev/canvases/"+canvasID+"','verso');");
      	 	$("#folioSide2").attr("canvas","http://www.example.org/iiif/LlangBrev/canvases/"+canvasID);
      	 	//testManifest.sequences[0].canvases.push(newCanvas2); //local
	      	//annoListCollection[1].on = "http://www.example.org/iiif/LlangBrev/canvases/"+canvasID; //local
	      	var params2 = {'content': JSON.stringify(newCanvas2)};
	      	$.post(url, params2, function(data){
	      		data=JSON.parse(data);
	      		newCanvas2ServerID = data["@id"];
      	 		newCanvas2["@id"] = data["@id"];
      	 		$("#folioSide2").attr("onclick","enterCatalogueInfo('"+data["@id"]+"','verso');");
      	 		$("#folioSide2").attr("canvas", data["@id"]);
      	 		testManifest.sequences[0].canvases.push(newCanvas2); //live
 		   	 	var newCanvas2AnnoList = {
	                //"@id":"http://www.example.org/iiif/LlangBrev/annoList/"+annoListID, 
	                "@type":"sc:AnnotationList",
	                "resources" : [],
	                "on" : data["@id"]
	        	}
				var listURL2 = "http://localhost:8080/brokenBooks/saveNewRange";
	        	var listParams2 = {"content" : JSON.stringify(newCanvas2AnnoList)};
	        	annoListCollection[1].on = data["@id"];
	        	$.post(listURL2, listParams2, function(data){
	        		data = JSON.parse(data);
	        		annoListCollection[1]["@id"] = data["@id"];
	        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
	        		var paramObj = {"@id":newCanvas2["@id"], "otherContent":[data["@id"]]};
	        		var params = {"content":JSON.stringify(paramObj)};
	        		$.post(updateCanvasURL, params, function(data){
	        		});
	        	});
	  	 	 	rangeID += 1;
	  	 	 	annoListID += 1;
	            var leafRangeObject = {
	            	"@id" : "http://www.example.org/iiif/LlangBrev/range/"+rangeID,
			      	"@type":"sc:Range",
			      	"label":"Llangantock Breviary Page_"+rangeID ,
			      	"canvases" : [
			          //newCanvas1["@id"], //local
			          //newCanvas2["@id"] //local
			          newCanvas1ServerID, //live on dev server
			          newCanvas2ServerID //live on dev server
			      	],
			      	"resources" : [],
			      	"ranges" : [],
		      		"isPartOf": "http://www.example.org/iiif/LlangBrev/sequence/normal",
		      		"otherContent" : [annoListCollection[2]["@id"]]
        		}
				currentLeaf = "http://www.example.org/iiif/LlangBrev/range/"+rangeID; //local
                                
    				createNewRange(leafRangeObject, 'currentLeaf', "", "", "");
                                gatherRangesForArrange(1);
      	 	});
  	 	});
      	     	
	}

	function removeInfo(listItem){
		var serverID = listItem.attr("annoserverid");
		var url = "http://localhost:8080/brokenBooks/deleteAnnotationByAtIDServlet";
		var paramObj = {"@id" : serverID};
		var params = {"content" : JSON.stringify(paramObj)};
		$.post(url, params, function(data){
			listItem.remove();
		});
	}

	function admin(){
		admin=true; contributer=false;
		$("#whoCreates").html("the project admin.");
		$("#beAdmin").hide();
		$("#beContributer").show();
	}

	function contributer(){
		admin=false; contributer=true;
		$("#whoCreates").html("a contributer.");
		$("#beAdmin").show();
		$("#beContributer").hide();
	}
        
        function updateImageAnno(which){
            if(which === "alpha"){
                    var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
                    var paramObj = {"@id": $("#folioSide1").attr("canvas"), "images":[$('textarea[rv="recto"]').val()]};
                    var params = {"content":JSON.stringify(paramObj)};
                    $.post(updateCanvasURL, params, function(data){
                    });
            }
            else{
                    var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
                    var paramObj = {"@id": $("#folioSide2").attr("canvas"), "images":[$('textarea[rv="verso"]').val()]};
                    var params = {"content":JSON.stringify(paramObj)};
                    $.post(updateCanvasURL, params, function(data){
                    });
            }
        }