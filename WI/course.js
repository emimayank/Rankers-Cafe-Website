// JavaScript Document
$(document).ready(function() {
$("#content").hide();
 	//$("#course").mouseenter(function() {
    	//$("#content").show();
  	//});

});
$("#top").mouseenter(function() {
	
    $("#content").show();
		
  });
  
   
  $("#content").mouseout(function() {
	
    
	$("#course").mouseout(function() {
		$("#content").hide();
	});
  });

//$("#course").mouseleave(function() {
  //  $("#content").hover(
   //function() {
     // $("#content").show();
   //},
   //function() {
     // $("#content").hide();
   //}
//);

//});