// JavaScript Document
$(document).ready(function() {

  $("#n1").hide();
  $("#p1").hide();
  $("#an1,#an2").hide();


  $("#nat").click(function() {

    $("#n1").slideToggle();
	$("#p1").hide();

  });
  
   $("#per").click(function() {

    $("#p1").slideToggle();
	$("#n1").hide();

  });
  
  $("#ah1").click(function() {

    $("#an1").slideToggle();

  });
  $("#ah2").click(function() {

    $("#an2").slideToggle();

  });

  
});

