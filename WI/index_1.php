<?php
/* */
// Start_session, check if user is logged in or not, and connect to the database all in one included file

// Include the class files for auto making links out of full URLs and for Time Ago date formatting
include_once("wi_class_files/autoMakeLinks.php");
include_once("scripts/checkuserlog.php");
include_once ("wi_class_files/agoTimeFormat.php");
// Create the two objects before we can use them below in this script
$activeLinkObject = new autoActiveLink;
$myObject = new convertToAgo; 
?>

 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="Description" content="" />
<meta name="Keywords" content="" />
<title>My CAT Buster</title>
<link href="style/main.css" rel="stylesheet" type="text/css" />
<link rel="icon" href="head.jpg" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<style type="text/css">
tr.border_bottom td {
  border-bottom:1pt solid black;
}
</style>

</head>
<body>
<?php include_once "header_template.php"; ?>
<table style="background-color: white; border:#069 1px solid; border-top:none;" width="1000" border="0" align="center" cellpadding="12" cellspacing="0">
    <td width="80%" valign="top" style="border-right:1px solid;">   
		
       <table style="background-color: white; border-top:none;" align="center" cellspacing="0">
       <tr>
    	
		<div style="background-image:url(images/logo4.png); height:324px;float:left; width:56%; color: white;">
        </div>
        <br />

       <div style="float:left; width:44%; color: white; font-size:15px;">
      	 <li><p style="border-bottom:#999 1px solid"><font color=#8c6a3a>Richly Comprehensive Video Lessons on the Entire Syllabus</font></p></li>
         <li><p style="border-bottom:#999 1px solid"><font color=#a0af86>Inclusive and Comprehensive Notes for ready reference</font></p></li>
         <li><p style="border-bottom:#999 1px solid"><font color=#8c6a3a>An Exhaustive Question Bank</font></p></li>
         <li><p style="border-bottom:#999 1px solid"><font color=#a0af86>Combine the Magic of Speed with the Power of Accuracy</font></p></li>
         <li><p style="border-bottom:#999 1px solid"><font color=#8c6a3a>Effortless Transition from the basic to the baffling</font></p></li>
         <li><p style="border-bottom:#999 1px solid"><font color=#8c6a3a>Get Round the Clock Access and Prepare from anywhere, anytime</font></p>
		 <li><p style="border-bottom:#999 1px solid"><font color=#a0af86>Learn from the best, While Saving Time & Money</font></p></li></li>
                 <br />        <br />
      </div>


       </td> 
       </tr> 
       <tr style="border-top:1px solid;" >
       <?php include_once "slide.php"; ?>
       </tr>
        <tr>
       <iframe width="740" height="350" src="//www.youtube.com/embed/bhCv8Ipq4u4" frameborder="0" allowfullscreen></iframe>
       </tr>
         
       
       </table>

       
       
       <td width="20%" valign="top">
       <div style=" width:160px; height:1000px; background-color: #999; color: #CCC;padding:12px;"> <br />
      <br />
      <br />
      <h3>Ad Space or Whatever</h3>
    </div>
       </td>
       </table>
  
  
 
</table>

<?php include_once "footer_template.php"; ?>

</body>
</html>