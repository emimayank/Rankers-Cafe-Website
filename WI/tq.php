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
include_once("scripts/checkuserlog.php");
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
		<div class="textsize16 greenColor" style="border:#999 1px solid; width:1000px; border-top:none; border-bottom:none;">
		<table style="background-color:#EFEFEF; border:#999 thin solid; padding:10px; line-height:1.5em;" width="1000" border="0" cellspacing="0" cellpadding="8">
      <td width="30%" valign="top">
		<div style="font-size:15px; margin-bottom:5px;" align="center"><strong>Quantitative Ability</strong><strong></strong></div>
        <div style="background-image:url(images/white.png); height:680px;">
        
        <div id="nat"style="font-size:15px; margin-bottom:10px; border-bottom:#999 1px solid; border-top:#999 1px solid; border-left:#999 1px solid; border-right:#999 1px solid; cursor:pointer" align="center" >Number Systems</div>
		   <ul id="n1">
           <li><p id="n11"style="cursor:pointer; border-bottom:#999 1px solid">Introduction</p></li>
           <li><p id="n12"style="cursor:pointer; border-bottom:#999 1px solid">Exponents</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Factors Multiples and Prime Numbers</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">HCF and LCM</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Squares and Cubes</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Divisibility</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Factors and Prime Numbers Revisited</p></li>
		   <li><p style="cursor:pointer; border-bottom:#999 1px solid">Remainders</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Unit and Last Two Digits</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Absolute Value</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Chapter Test</p></li>
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
           <ul id="p1">
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Introduction</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Basic Concepts</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Percentage Change</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Concept of Multiplication Factor</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Successive Percentage Change</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Change of Base</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Percentage Change in the Value of a Fraction</p></li>
		   <li><p style="cursor:pointer; border-bottom:#999 1px solid">Bonus Video</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">End Chapter Questions</p></li>
           <li><p style="cursor:pointer; border-bottom:#999 1px solid">Chapter Test</p></li>
           </ul>
      <td width="70%" valign="top" style="font-size:10px;">
      <div id="s1">
    	<font color="black" size="3"> The product of two successive numbers is 9506. Which is the smaller of the two numbers?</font>
    <br />
    <font color="black" size="3"><table border="0">
<tr>
<td>a. 96 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td>b. 97&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
<td>c. 98</td>
</tr>
<tr>
<td>d. 99</td>
<td>e. None of these</td>
</tr>
</table></font>
    <br />


    <b id="ah1" style="cursor:pointer">view answer</b> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>discuss in forum</b>
    <br />
        <p id="an1" ><font color="black" size="3">From our faster method of finding squares, we know that 962 = 9216, 972 = 9409 and 982 = 9604.
Hence, the answer is either 97, or none of these.
97 x 98 = 97 x (97 + 1) = 9409 + 97 = 9506.</font>
</div>
<br /><br />
      <div id="s1">
    	<font color="black" size="3"> Twice the square of a number is more than eleven times the number by 21. The number can have which of the following values?</font>
    <br />
    <font color="black" size="3">	a.	4 or -7/2	&nbsp; &nbsp; b. 7 or -3/2 &nbsp; &nbsp;	c. 3 or -7/2 &nbsp; &nbsp;	d. 9/2 or -4 &nbsp; &nbsp;	e. None of these</font>
    <br />


    <b id="ah2" style="cursor:pointer">view answer</b> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>discuss in forum</b>
    <br />
        <p id="an2" ><font color="black" size="3">Option (b)
Let the number be a.
Then, 2a2 – 11a = 21
? 2a2 – 11a – 21 = 0
? 2a2 – 14a + 3a – 21 = 0
? 2a(a – 7) + 3(a – 7) = 0
? (2a + 3)(a – 7) = 0
? a = 7, (-3)/2
</font>
</div>
      </td>
	<td width="189" valign="top"><div style=" width:160px; height:600px; background-color: #999; color: #CCC;padding:12px;"> <br />
      <br />
      <br />
      <h3>Ad Space or Whatever</h3>
    </div></td>
      
</table>
        </tr>
 </table>
<?php include_once "footer_template.php"; ?>
 <script type="text/javascript" src="lib.js"></script>
 <script type="text/javascript" src="quant.js"></script>
</body>
</html>