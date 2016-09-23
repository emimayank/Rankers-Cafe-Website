<?php
/* */

// Start_session, check if user is logged in or not, and connect to the database all in one included file
ini_set('display_errors', 1);
// Include the class files for auto making links out of full URLs and for Time Ago date formatting
include_once("wi_class_files/autoMakeLinks.php");
include_once("scripts/checkuserlog.php");
include_once ("wi_class_files/agoTimeFormat.php");

// Create the two objects before we can use them below in this script
$activeLinkObject = new autoActiveLink;
$myObject = new convertToAgo; 
?>