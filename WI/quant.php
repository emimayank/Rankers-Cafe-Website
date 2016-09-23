<?php
/* Web Intersect Social Network Template System and CMS v1.34
 * Copyright (c) 2011 Adam Khoury
 * Licensed under the GNU General Public License version 3.0 (GPLv3)
 * http://www.webintersect.com/license.php
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Date: February 9, 2010
 *------------------------------------------------------------------------------------------------*/
// Start_session, check if user is logged in or not, and connect to the database all in one included file

// Include the class files for auto making links out of full URLs and for Time Ago date formatting
include_once("wi_class_files/autoMakeLinks.php");
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
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />


</head>
<body>
<?php include_once "header_template.php"; ?>
<table width="1000" style="background-color:#F2F2F2;" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>

    <td width="100" valign="top" >
		<div class="textsize16 greenColor" style="border:#999 1px solid; width:744px; border-top:none; border-bottom:none;">

		<div id="sb1" style="display:none; width:704px; border:#999 1px solid; padding:12px; background-image:url(style/area2BG.jpg); line-height:			         1.5em; "><br />
        </div>
<table style="background-color:#EFEFEF; border:#999 thin solid; padding:10px; line-height:1.5em;" width="745" border="0" cellspacing="0" cellpadding="8">
  <tr>
      <td width="30%" valign="top">
		<div style="font-size:15px; margin-bottom:5px;" align="center"><strong>Quantitative Ability</strong><strong></strong></div>
        <div style="background-image:url(images/white.png); height:1200px; border-bottom:#999 1px solid;">
        
        <div id="nat"style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid; border-right:#999 1px solid; cursor:pointer" align="center" >Number Systems</div>
           <ul>
           <li><p id="n1"style="cursor:pointer; border-bottom:#999 1px solid">Introduction</p></li>
           <li><p id="n2"style="cursor:pointer; border-bottom:#999 1px solid">Exponents</p></li>
           <li><p id="n3"style="cursor:pointer; border-bottom:#999 1px solid">Factors Multiples and Prime Numbers</p></li>
           <li><p id="n4"style="cursor:pointer; border-bottom:#999 1px solid">HCF and LCM</p></li>
           <li><p id="n5"style="cursor:pointer; border-bottom:#999 1px solid">Squares and Cubes</p></li>
           <li><p id="n6"style="cursor:pointer; border-bottom:#999 1px solid">Divisibility</p></li>
           <li><p id="n7"style="cursor:pointer; border-bottom:#999 1px solid">Factors and Prime Numbers Revisited</p></li>
		   <li><p id="n8"style="cursor:pointer; border-bottom:#999 1px solid">Remainders</p></li>
           <li><p id="n9"style="cursor:pointer; border-bottom:#999 1px solid">Unit and Last Two Digits</p></li>
           <li><p id="n10"style="cursor:pointer; border-bottom:#999 1px solid">Absolute Value</p></li>
           <li><p id="n11"style="cursor:pointer; border-bottom:#999 1px solid">Chapter Test</p></li>
           </ul>
           <div style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid;
        border-right:#999 1px solid; cursor:pointer" align="center" >Progressions</div>
			<div style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid;
        border-right:#999 1px solid; cursor:pointer" align="center" >Averages</div>
        <div style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid;
        border-right:#999 1px solid; cursor:pointer" align="center" >Allegations</div>
        <div style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid;
        border-right:#999 1px solid; cursor:pointer" align="center" >Ratio Proportions</div>
        <div id="per"style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid; border-right:#999 1px solid; cursor:pointer" align="center" >Percentages</div>
           <ul>
           <li><p id="p1"style="cursor:pointer; border-bottom:#999 1px solid">Introduction</p></li>
           <li><p id="p2"style="cursor:pointer; border-bottom:#999 1px solid">Basic Concepts</p></li>
           <li><p id="p3"style="cursor:pointer; border-bottom:#999 1px solid">Percentage Change</p></li>
           <li><p id="p4"style="cursor:pointer; border-bottom:#999 1px solid">Concept of Multiplication Factor</p></li>
           <li><p id="p5"style="cursor:pointer; border-bottom:#999 1px solid">Successive Percentage Change</p></li>
           <li><p id="p6"style="cursor:pointer; border-bottom:#999 1px solid">Change of Base</p></li>
           <li><p id="p7"style="cursor:pointer; border-bottom:#999 1px solid">Percentage Change in the Value of a Fraction</p></li>
		   <li><p id="p8"style="cursor:pointer; border-bottom:#999 1px solid">Bonus Video</p></li>
           <li><p id="p9"style="cursor:pointer; border-bottom:#999 1px solid">End Chapter Questions</p></li>
           <li><p id="p10"style="cursor:pointer; border-bottom:#999 1px solid">Chapter Test</p></li>
           </ul>
        </td>
      <td width="70%" valign="top" style="font-size:10px;">
      <br />
      <br />

      </div>
     </td>
    
</table>
 <script type="text/javascript" src="lib.js"></script>
 <script type="text/javascript" src="quant.js"></script>
</body>
</html>