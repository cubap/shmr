/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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

function gatherRangesForArrange(){
     console.log("Organizing Ranges");
    rangeCollection = mergeSort(rangeCollection);
    var existingRanges = [];
    for(var i = rangeCollection.length - 1; i>=0; i--){
      //console.log("Building Range");
      //console.log(rangeCollection[i]);
        var outerRange = rangeCollection[i]; //We have to look at each range, so at some point each range is the outer range...
        var outerRangeLabel = rangeCollection[i].label;
        var existingRangeToUpdate = ""; 
        var tag = "parent";
        var relation = "";
        if($.inArray(rangeCollection[i]["@id"], existingRanges) == -1){
          existingRanges.push(rangeCollection[i]["@id"]);
        }
        else{
          existingRangeToUpdate = $('div[rangeID="'+rangeCollection[i]["@id"]+'"]');
          relation = rangeCollection[i]["@id"];
          tag = "child";
        }
        
        //Create an html range object that can be added
        var currentRange = $("<div class='arrangeSection "+tag+"' relation='"+relation+"' rangeID='"+rangeCollection[i]["@id"]+"'><div>"+outerRangeLabel+"</div></div>");
        //Collect the inner ranges for this range.  It will be an array(0) if there are none. 
        var innerRanges = rangeCollection[i].ranges;
        //obvious
        if(innerRanges.length > 0 &&  rangeCollection[i].canvases.length === 0){ //If there are inner ranges
         //console.log("Working inner ranges.")
            for(var j = 0; j<innerRanges.length;j++){ //go over each inner range
                var thisRange = innerRanges[j];
                $.each(rangeCollection, function(){ //check each range in the collection
                    if(this["@id"] === thisRange){ //find the object by ID among the collection.  When you find it, gets its information.
                        var thisLabel = this.label;
                        var embedRange = $("<div class='arrangeSection child' relation='"+relation+"' rangeID='"+this['@id']+"'><div>"+thisLabel+"</div></div>"); //Create an html range object for the inner range.
                        if($.inArray(this["@id"], existingRanges) == -1){
                          existingRanges.push(this["@id"]);
                        }
                        if(existingRangeToUpdate !== ""){ // If it is an existing range, then embed this range in the existing range.
                          existingRangeToUpdate.append(embedRange);
                        }
                        else{ //otherwise, it is a new range that this embedded range goes into.  Embed it, then add the parent/child structure to the DOM. 
                          currentRange.append(embedRange);
                          $("#placement").append(currentRange);
                        }
                    } //If you didn't find it among the collection, we can't do anything with it.  
                });
            }
        }
        else{ //There are no inner ranges, so we must be on a leaf.  It MAY or MAY NOT contain an image or annotation, so account for finding none. 
            var a = false;
            var newLeaf = undefined;
            var existingRange = $("#placement").find('div[rangeID="'+outerRange['@id']+'"]');
            if(existingRange.length > 0){ //if the range exists in a section
                //It already exists, do not append this leaf.
            }
            else{ //The leaf is  parent to itself, which means its a random page in the bucket. 
              newLeaf = $("<div class='arrangeSection' relation='bucket' rangeID='"+outerRange['@id']+"'><div>"+outerRange.label+"</div></div>");
            }
            if(newLeaf){ //If its a random page from the bucket, it needs to listed as a parent range.  Append to DOM.
                $("#placement").append(newLeaf);
               // console.log("append new leaf to DOM");
                if($.inArray(newLeaf.attr("rangeID"), existingRanges) == -1){
                    existingRanges.push(newLeaf.attr("rangeID"));
                }
              }
        }
    }
}

/*
* @params: rangeCollection: an array containing all the ranges of a project.  It is sorted so the array contains ranges from smallest to largest. 
*For now, it is a global array.  It will most likely be handed in as a parameter to the function in the future. 
*Builds the tree structure of ranges from an ordered list of ranges (by size of their ranges[] field).
*/

//Think about sorted vs. unsorted ranges. 
function organizeRanges(){
  console.log("Organizing Ranges");
    rangeCollection = mergeSort(rangeCollection);
    var existingRanges = [];
    for(var i = rangeCollection.length - 1; i>=0; i--){
      //console.log("Building Range");
      //console.log(rangeCollection[i]);
        var outerRange = rangeCollection[i]; //We have to look at each range, so at some point each range is the outer range...
        var outerRangeLabel = rangeCollection[i].label;
        var existingRangeToUpdate = ""; 

        if($.inArray(rangeCollection[i]["@id"], existingRanges) == -1){
          existingRanges.push(rangeCollection[i]["@id"]);
        }
        else{
          existingRangeToUpdate = $('div[rangeID="'+rangeCollection[i]["@id"]+'"]'); // get it.
        }
        
        //Create an html range object that can be added
        var currentRange = $("<div class='range' rangeID='"+rangeCollection[i]["@id"]+"'><div>"+outerRangeLabel+"</div></div>");
        //Collect the inner ranges for this range.  It will be an array(0) if there are none. 
        var innerRanges = rangeCollection[i].ranges;
        //obvious
        if(innerRanges.length > 0 &&  rangeCollection[i].canvases.length === 0){ //If there are inner ranges
         //console.log("Working inner ranges.")
            for(var j = 0; j<innerRanges.length;j++){ //go over each inner range
                var thisRange = innerRanges[j];
                $.each(rangeCollection, function(){ //check each range in the collection
                    if(this["@id"] === thisRange){ //find the object by ID among the collection.  When you find it, gets its information.
                        var thisLabel = this.label;
                        var embedRange = $("<div class='range' rangeID='"+this['@id']+"'><div>"+thisLabel+"</div></div>"); //Create an html range object for the inner range.
                        if($.inArray(this["@id"], existingRanges) == -1){
                          existingRanges.push(this["@id"]);
                        }
                        if(existingRangeToUpdate !== ""){ // If it is an existing range, then embed this range in the existing range.
                          existingRangeToUpdate.append(embedRange);
                        }
                        else{ //otherwise, it is a new range that this embedded range goes into.  Embed it, then add the parent/child structure to the DOM. 
                          currentRange.append(embedRange);
                          $("#focusedRange").append(currentRange);
                        }
                    } //If you didn't find it among the collection, we can't do anything with it.  
                });
            }
        }
        else if(innerRanges.length ===1 &&  rangeCollection[i].canvases.length === 1){//special case.  These ranges are meant to replace canvases of this leaf with fragments of this canvas.  We have made fragments atomic ranges so that pieces of the same canvas that exist in different ranges can be connected.  They will exist as their own entity on each individual leaf so that they can have their own annotation, but they will be connected by location with the canvas no matter where it exists.  This code will be reached before the code in the else every time because of the ordered array by range field size.  Fortunately, there will only be up to two ranges in here.  Those ranges will be URI's of leaves. Therefore, we can directly grab that leaf from the array.  We can cheat a bit and start from the i we are at since we know it does not come before this one.
          var canvasToReplace = rangeCollection[i].canvases[0];
          var subStr = canvasToReplace.substring(0,canvasToReplace.indexOf("#xywh"));
          for(var x=0; x<i; x++){
            //we know there is only one
            var innerRangeSubstring = innerRanges[0];
            if(innerRanges[0].indexOf("#xywh") > -1) innerRangeSubstring = innerRanges[0].substring(0, innerRanges[0].indexOf("#xywh"));
            var leafRangeCanvases= rangeCollection[x].canvases;
            if (rangeCollection[x]["@id"] == innerRangeSubstring){
              //replace the canvas in the leaf range with the canvas from the inner range
                var l = -1;
                $.each(leafRangeCanvases, function(){
                  l++;
                  if(this == subStr){
                    rangeCollection[x].canvases[l] = canvasToReplace;
                  }
                  else{ //this could be the wrong canvases OR this could be the right canvas as a fragment.  If it is the right canvas as a fragment, there can be multiple fragments of that canvas, so add it in.  Otherwise, we should do nothing.  
                    if(this.indexOf("#xywh") > -1){
                      //it could be a fragment
                      var tmp = this;
                      if(tmp.indexOf("#xywh") > -1){ //If this is not true, it isn't possible that we are on the correct canvas.
                        tmp = tmp.substring(0, tmp.indexOf("#xywh")); //It is at least a fragment, but for the right canvas?  Strip #xyhw=.... off the URI
                        tmp += ""; //cast it to a string.
                        var tmpCompare = leafRangeCanvases[l].substring(0,leafRangeCanvases[l].indexOf("#xywh")); //Strip #xywh off the canvas we are checking equivalency to
                        tmpCompare += ""; // cast to a string
                        if(tmpCompare == tmp && $.inArray(canvasToReplace, leafRangeCanvases) < 0){ //Then it was a new fragment for this canvas, so we can push the fragment to this leaf. 
                           rangeCollection[x].canvases.splice(l+1, 0, canvasToReplace);
                           //place canavs in at appropriate location among canvases in case there are multiple fragments.  This will build them out in the order users think they go.  
                        }
                        else{
                          //it was the wrong canvas.  Leave it alone.
                        }  
                      }
                    }
                  }
                });
            }
            //What we have done is skipped further down into the array and altered a single canvas in a leaf.  When we get to that canvas in this function, it will not have any ranges so it will skip to the code below and build out the leaf.
          }
        }
        else{ //There are no inner ranges, so we must be on a leaf.  It MAY or MAY NOT contain an image or annotation, so account for finding none. 
          //console.log("Working on a leaf");
            var currentCanvases = outerRange.canvases;
            var firstCanvas = currentCanvases[0];
            if(firstCanvas.indexOf("#xywh") >=0){
              firstCanvas = firstCanvas.substring(0, firstCanvas.indexOf("#xywh"));
            }
            //console.log("Current Canvases");
            //console.log(currentCanvases);
            var a = false;
            var newLeaf = undefined;
            var rangeForCanvases = $("#focusedRange").find('div[rangeID="'+outerRange['@id']+'"]');
            if(rangeForCanvases.length > 0){ //if the range exists in a section
                //console.log("I know the outer range");
                //console.log(rangeForCanvases);
              a=true;
            }
            else{ //The leaf is  parent to itself, which means its a random page in the bucket. 
               // console.log("This is a new leaf");
              newLeaf = $("<div class='range bucketPage' rangeID='"+outerRange['@id']+"'><div>"+outerRange.label+"</div></div>");
            }

            var canvasHolder1 = $("<div sideA='' class='canvas'> </div>");
            var canvasHolder2 = $("<div sideB='' class='canvas'> </div>");

            var canvasHolder3 = $("<div sideA='' class='canvas'> <img class='canvasImg' src='http://img1.wikia.nocookie.net/__cb20130607215218/mummipedia/images/b/bb/480px-Placeholder.png' /> </div>");
            var canvasHolder4 = $("<div sideB='' class='canvas'> <img class='canvasImg' src='http://img1.wikia.nocookie.net/__cb20130607215218/mummipedia/images/b/bb/480px-Placeholder.png' /> </div>");


            var side1 = true;
            var side2 = false;

            var holderToAppend = $("");
            
            $.each(currentCanvases, function(){ //for whatever canvases there are, if any, or many fragments
              //console.log("Working on canvases");
              var originalCanvas = String(this);
              var currentCanvas = "";
              var fragment = false;
              
              if(originalCanvas.indexOf("#xywh") >= 0){
                currentCanvas = originalCanvas.substring(0, originalCanvas.indexOf("#xywh"));
                fragment =true;
              }
              else{
                currentCanvas = originalCanvas;
              }
              if(currentCanvas == firstCanvas){ //we are still on sideA
                side1 = true;
                side2 = false
              }
              else{ //we are on sideB
                side1=false;
                side2 = true;
              }
              var XYWHarray = [0,0,0,0];
              var XYWHsubstring = originalCanvas.substring(originalCanvas.lastIndexOf('#' + 1)); 
              var canvasImg = "";
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
              //This part creates chunks and places them in the canvas.  We can show only cropped parts of the canvas
              // var canvasHTML = $("<div fragment='"+fragment+"' class='canvasinner'> <img class='canvasImg' src='' /></div>");
              //  $.each(pageCanvases, function(){
              //      if(this["@id"] == currentCanvas){ // === breaks it.  WHY!
              //          canvasHTML.find('img').attr('src', this.images[0].resource["@id"]);
              //          if(XYWHarray[2] == 0 || XYWHarray[3] == 0){ //well surely the height and width are not 0 if it is an image chunk...this is what I do if it is.
              //             canvasHTML.attr("style", "height:"+this.height+"px; width:"+this.width+"px");//set chunk height and width to canvas height and width.
              //             canvasHTML.find("img").attr("style", "top:-"+XYWHarray[1]+"px; left:-"+XYWHarray[0]+"px; ");
              //             if(side1){ //put it in side1.  
              //               canvasHolder1.append(canvasHTML);
              //               holderToAppend = canvasHolder1;
              //             }
              //             else{ //maybe we should check if side2 is true, but I'll just assume it
              //               canvasHolder2.append(canvasHTML);
              //               holderToAppend = canvasHolder2;
              //             }
              //          }
              //          else{ //the height and width of the fragment piece were not 0.
              //             canvasHTML.attr("style", "height:"+XYWHarray[3]+"px; width:"+XYWHarray[2]+"px");
              //             canvasHTML.find("img").attr("style", "top:-"+XYWHarray[1]+"px; left:-"+XYWHarray[0]+"px;");
              //             if(side1){//put it in side1.
              //               canvasHolder1.append(canvasHTML);
              //               holderToAppend = canvasHolder1;
              //             }
              //             else{//maybe we should check if side2 is true, but I'll just assume it
              //               canvasHolder2.append(canvasHTML);
              //               holderToAppend = canvasHolder2;
              //             }
              //          }
              //      }
              //  });

             // This part will create the canvas and highlight the fragmental pieces instead of cropping chunks.
              var fragmentHTML = $("<div class='fragment'></div>");
              $.each(pageCanvases, function(){
                   var left = parseInt(XYWHarray[0]);
                   var top = parseInt(XYWHarray[1]);
                   var width = parseInt(XYWHarray[2]) - 2; //acount for 2 2px borders
                   var height = parseInt(XYWHarray[3]) - 2; // account for 2 2px borders
                   var annotation = $("<div class='annotation'></div>");
                   if(this["@id"] == currentCanvas){ // The full canvas onto which to put fragments
                       //canvasHolder.attr("style", "height:"+this.height+"px; width:"+this.width+"px");
                      // console.log("Working on canvas images");
                       var currentCanvasAnnotations=[];
                       var currentCanvasAnnotationLists = [];
                       if(this["otherContent"]!== undefined && this["otherContent"].length >0){
                        console.log("Set annotation lists");
                        currentCanvasAnnotationLists = this.otherContent; //get the canvas annotations. 
                        currentCanvasAnnotations.push(annotationLists[0].resources); // local.  Comment out when running live
                       }
                       if(side1 && this.images.length>0){
                          canvasHolder3.find('img').attr("src", this.images[0].resource["@id"]);
                       }
                       else if (side2 && this.images.length>0){
                          canvasHolder4.find('img').attr("src", this.images[0].resource["@id"]);
                       }
                       if(fragment){ // if it is a fragment, we want the fragment box drawn in the canvas.
                          fragmentHTML.attr("style", "left:"+left+"px; top:"+top+"px; height:"+height+"px; width:"+width+"px");
                          if(side1){
                            canvasHolder3.append(fragmentHTML);
                          }
                          else{
                            canvasHolder4.append(fragmentHTML);
                          }
                       }
                       
//                      $.each(currentCanvasAnnotationLists, function(data1){ //get each annotationList's annotations
//                        console.log("SET Current Canvas ANNOTATIONS");
                        
                        // $.get(data1["@id"], function(data2){
                        //   console.log("ANNOLIST GET");
                        //     data=JSON.parse(data2);
                        //     currentCanvasAnnotations.push(data2.resources);
                        // }, function(data2){ //make that annotations are gathered, then run the code to append annos to their location.
                        //    var canvas = data2.on;
//                            var XYWHarray2 = [0,0,0,0];
//                            if(canvas.indexOf("#xywh") >= 0){
//                              var XYWHsubstring = canvas.substring(canvas.lastIndexOf('#' + 1)); 
//                              if(XYWHsubstring.indexOf('=') > -1){ //string must contain data1 to be valid
//                                  var numberArray = XYWHsubstring.substring(canvas.lastIndexOf('xywh=') + 5).split(',');
//                                  if(numberArray.length === 4){ // string must have all 4 to be valid
//                                      var x = numberArray[0];
//                                      var y = numberArray[1];
//                                      var w = numberArray[2];
//                                      var h = numberArray[3];
//                                      XYWHarray2 = [x,y,w,h];
//                                  }
//                                  else{
//                                    //There is certainly something more useful we can do here. I just kill it if we do not have all the values.  
//                                    XYWHarray2 = [0,0,0,0];
//                                  }
//                              }
//                              annotation.attr("style", "left: "+XYWHarray2[0]+"px; top: "+XYWHarray2[1]+"px; width: "+XYWHarray2[2]+"px; height: "+XYWHarray2[3]+"px;"    );
//                            }
//                            if(data1.resource["@type"] == "dctypes:Image"){
//                              var img = $("<img class='canvasImgFragment' src='"+data1.resource["@id"]+"'/>");
//                              annotation.addClass("imgFragment").append(img);
//                            }
//                            if(data1.resource["@type"] == "cnt:ContentAsText"){
//                              var text = data1.resource["cnt:chars"];
//                              annotation.attr("annoText", text);
//                            }
//                            if(side1){
//                              //console.log("Append anno to holder 1");
//                              canvasHolder3.append(annotation);
//                            }
//                            else{
//                                //console.log("Append anno to holder 2");
//                              canvasHolder4.append(annotation);
//                            }
                        // }); //Must comment this out when doing local demo.
 //                     }); //live 
 console.log(currentCanvasAnnotations);
                        for(var x=0; x<currentCanvasAnnotations.length; x++){
                            console.log(currentCanvasAnnotations[x]);
                            $.each(currentCanvasAnnotations[x], function(){
                             console.log(this);
                              var canvas = this.on;
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
                          newLeaf.append(canvasHolder3, canvasHolder4);
                        }
                        if(newLeaf){ //If its a random page from the bucket, it needs to listed as a parent range.  Append to DOM.
                          $("#focusedRange").append(newLeaf);
                         // console.log("append new leaf to DOM");
                          if($.inArray(newLeaf.attr("rangeID"), existingRanges) == -1){
                              existingRanges.push(newLeaf.attr("rangeID"));
                          }
                        }
                   }
              });
           });
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
            console.log("POPULATE ANNOS FOR LEAF");
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
            console.log(annos);
        }
        else if(alpha){
            annos = annoListCollection[0].resources;
            console.log("POPULATE ANNOS FOR Alpha");
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
            console.log(annos);
        }
        else{
            annos = annoListCollection[1].resources;
            console.log("POPULATE ANNOS FOR Beta");
            if(annos.length > 0){
                annos = JSON.parse(annos);
            }
            console.log(annos);
        }
        $.each($(".contextFormEntry"), function(){
            var label1 = $(this).find('.formLabel').html().replace(":", "").trim();
            var currentEntry1 = $(this).find(".content");
            $.each(annos, function(){
                var checkLabel1 = this.label.replace(":", "").trim();
                console.log(checkLabel1 + " == " +label1);
                if (checkLabel1 == label1){
                    console.log("THESE WERE EQUAL");
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
                console.log(checkLabel2 + " == " +label2);
                if (checkLabel2 == label2){
                    console.log("THESE WERE EQUAL");
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
                console.log(checkLabel3 + " == " +label3);
                if (checkLabel3 == label3){
                    console.log("THESE WERE EQUAL");
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
                console.log("RECTO, ALPHA IS TRUE");
                $("#folioSide1").addClass("selectedFolio");
                $("#folioSide2").removeClass("selectedFolio");
                $("#oneAndtwo").removeClass("selectedFolio");
                $("#catalogueInfoFor").val(canvasID); //alpha
                alpha = true;
                beta= false;
            }
            else if (canvas == 'verso'){
                console.log("VERSO, BETA IS TRUE");
                $("#folioSide2").addClass("selectedFolio");;
                $("#folioSide1").removeClass("selectedFolio");
                $("#oneAndtwo").removeClass("selectedFolio");
                $("#catalogueInfoFor").val(canvasID); //beta
                beta = true;
                alpha = false;
            }
            else{
                console.log("LEAF: ALPHA, BETA, ZETA IS TRUE");
                $("#oneAndtwo").addClass("selectedFolio");
                $("#folioSide1").removeClass("selectedFolio");
                $("#folioSide2").removeClass("selectedFolio");
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
        // if(zeta){
        //     $("#zetaInformation").find('ul').empty();
        //     otherInfoList = $("#zetaInformation").find(".addedNotes"); //for the notes field
        // }
        // else if(alpha){
        //     $("#alphaInformation").find('ul').empty();
        //     otherInfoList = $("#alphaInformation").find(".addedNotes"); //for the notes field
        // }
        // else if(beta){
        //     $("#betaInformation").find('ul').empty();
        //     otherInfoList = $("#betaInformation").find(".addedNotes"); //for the notes field
        // }
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

	function updateAnnotation(annoURI, annoObj){
		console.log("Update Anno, don't save new one.")
		var resourceObj = annoObj.resource;
		var updateAnnoURL = "http://localhost:8080/brokenBooks/updateRange";
		var paramObj = {"@id":annoURI, "resource": resourceObj};
		var params = {"content":JSON.stringify(paramObj)};
		$.post(updateAnnoURL, params, function(data){
			console.log("Anno updated on server");
		});
		if(zeta){
                    $.each(annoListCollection[2].resources, function(){
                        if(this["@id"] == annoURI){
                                this.resource = annoObj.resource;
                                console.log("Local Anno Updated.");
                        }
                    });
		}
		else if (alpha){
                    $.each(annoListCollection[0].resources, function(){
                        if(this["@id"] == annoURI){
                                this.resource = annoObj.resource;
                                console.log("Local Anno Updated.");
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
		console.log("Create new anno for "+objectID);
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
                        console.log("NEW ANNO.  ABZ: "+alpha, beta, zeta);
			if(zeta){
				annoListCollection[2].resources.push(annoObject); //live
				console.log("Leaf list is updated");
			}
			else if(alpha){
				annoListCollection[0].resources.push(annoObject); //live
				console.log("Alpha list is updated");
			}
			else{
				annoListCollection[1].resources.push(annoObject); //live
				console.log("Beta list is updated")
			}

			console.log("Starting update of list collection on server")
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
						console.log("List Updated On Server");
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
					console.log("Local Leaf otherContent updated.");
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
					console.log("local canvas otherContent updated");
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
        		console.log("New Anno List 2");
        		console.log(data2);
        		annoListCollection[2]["@id"] = data2["@id"];
        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
        		var paramObj = {"@id":currentLeafServerID, "otherContent":[data["@id"]]};
        		var params = {"content":JSON.stringify(paramObj)};
        		$.post(updateCanvasURL, params, function(data){
        			console.log("Leaf otherContent updated live");
        		});
        	});
		});
		
	}
	/*
		This range is already in the manifest structures section, so what we are actually trying to do is save this leaf to the already created range.  We must check whether the leaf URI is already in the "ranges" section of the range.  There should be no duplicate URIs. 
	*/
	function updateRange(rangeID, leaf){
		//console.log("Updating range "+rangeID+" with leaf "+leaf);
		var currentRange = {};
		$.each(testManifest.structures, function(){
			if(this["@id"] === rangeID){
				if(!$.inArray(leaf, $(this).ranges)){
					var ranges = this.ranges;
					this.ranges.push(leaf);
					var newAnnoUrl = "http://localhost:8080/brokenBooks/updateRange";
					var paramObj = {"ranges" : ranges};
					var params = {"content" : JSON.stringify(paramObj)};
					$.post(newAnnoUrl, params, function(data){

					});
				}
				else{
					console.log('LEAF already in range.');
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
        		console.log("New Anno List 1");
        		console.log(data);
        		annoListCollection[0]["@id"] = data["@id"];
        		//update otherContent of first canvas
        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
        		var paramObj = {"@id":newCanvas1["@id"], "otherContent":[data["@id"]]};
        		var params = {"content":JSON.stringify(paramObj)};
        		$.post(updateCanvasURL, params, function(data){
        			console.log("Canvas 1 otherContent updated live");
        		});
        	});
      	 	console.log("FIRST CANVAS SAVED ID "+ data["@id"]);
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
	      		console.log("Second CANVAS SAVED ID "+ data["@id"]);
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
	        		console.log("New Anno List 2");
	        		console.log(data);
	        		annoListCollection[1]["@id"] = data["@id"];
	        		var updateCanvasURL = "http://localhost:8080/brokenBooks/updateCanvas";
	        		var paramObj = {"@id":newCanvas2["@id"], "otherContent":[data["@id"]]};
	        		var params = {"content":JSON.stringify(paramObj)};
	        		$.post(updateCanvasURL, params, function(data){
	        			console.log("Canvas 2 otherContent updated live");
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
				console.log("SAVE LEAF");
                                
				createNewRange(leafRangeObject, 'currentLeaf', "", "", "");
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