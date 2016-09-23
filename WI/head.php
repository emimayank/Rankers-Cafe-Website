<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php 
if (isset($_SESSION['id']) && isset($_SESSION['username']) && isset($_SESSION['useremail']) && isset($_SESSION['userpass'])) {
	$logOptions = '<a href="http://' . $dyn_www . '/wi/logout.php">Sign Out</a>';
	$username = $_SESSION['username'];
	$hello = '<font color="grey" size="4">'.'Hi, '.$username. '</font>';
	}?>
<!-- the navigation links -->
 <style type="text/css">
 /*--------- Header Buttons Style -------------- */


 #navigation li {
        list-style: none;
        display: block;
        float: left;
        margin: 1em;

		
}
img{border:0}


.rectangle {

   height: 45px;
   position: relative;
   margin-top: 8em ;
   margin-bottom:1.5em;
}

#navigation li a {
	display: block;
	color: black;
	font-size:16px;
	/* [disabled]font-size: 1.6em; */

}


#navigation li a:hover {
        margin-top: 2px;
		color:#00F;
		text-decoration: underline;
}
@media only screen and (max-width : 1930px) {
	 	  span1 { 
 position: absolute; top:-10px; left:35.5%; 

 }
 
 span2 {
	  position: absolute; top:-10px; left: 43.4%; 
 }
 
 span3 {
	 position: absolute; top:-10px; left: 54.8%; 
 }
 
  span4 {
	  position: absolute; top:-56px;left:73.5%;
	  
 }
 
 span5 {
	  position: absolute; top:-56px;left:85.4%;
 }
 
 span6 {
	 position: absolute; top:-10px;left:64.7%;
 }
 
  span7 {
	  position: absolute; top:-10px;left:76%;
 }
 
  span8 {
	 position: absolute; top:-10px;left:86.2%;
 }
 
 span9 {
	  position: absolute; top:-55px; left:9.5%;
	  z-index:102;
 }
 }
@media only screen and (max-width : 1366px) { /*If device width is higher than 640px use this css and if less than 640px use above */
 span1 { 
 position: absolute; top:-10px; left:40.5%; 

 }
 
 span2 {
	  position: absolute; top:-10px; left: 47%; 
 }
 
 span3 {
	 position: absolute; top:-10px; left: 57.8%; 
 }
 
  span4 {
	  position: absolute; top:-56px;left:70.8%;
	  
 }
 
 span5 {
	  position: absolute; top:-56px;left:83.5%;
 }
 
 span6 {
	 position: absolute; top:-10px;left:65%;
 }
 
  span7 {
	  position: absolute; top:-10px;left:74.4%;
 }
 
  span8 {
	 position: absolute; top:-10px;left:84.5%;
 }
 
 span9 {
	  position: absolute; top:-55px; left:9.4%;
	  z-index:102;
 }
}
 @media only screen and (max-width : 1030px){
	  span1 { 
 position: absolute; top:-10px; left:35.5%; 

 }
 
 span2 {
	  position: absolute; top:-10px; left: 41.4%; 
 }
 
 span3 {
	 position: absolute; top:-10px; left: 53.4%; 
 }
 
  span4 {
	  position: absolute; top:-56px;left:64.5%;
	  
 }
 
 span5 {
	  position: absolute; top:-56px;left:81%;
 }
 
 span6 {
	 position: absolute; top:-10px;left:60.5%;
 }
 
  span7 {
	  position: absolute; top:-10px;left:71%;
 }
 
  span8 {
	 position: absolute; top:-10px;left:82%;
 }
 
 span9 {
	  position: absolute; top:-55px; left:3%;
	  z-index:102;
 }

 }
 
 </style>
 <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="rectangle">
   <ul id="navigation">
   
		<span9><a href="#"><img src="logo.png" alt="" style="width:300px;height:83px;"></a></span9>
 
      <li><a href="index.php" ><span1>Home</span1></a></li>
      <li><a href="#" ><span2>Question Bank</span2></a></li>      
      <li><a href="#" ><span3>Quizzes</span3></a></li>
      <li><a href="cat.php" ><span6>Courseware</span6></a></li>
      <li><a href="videos.php" ><span7>Demo Videos</span7></a></li>
      <li><a href="team.php" ><span8>Our Team</span8></a></li>
      <li><span4><?php echo $hello; ?></span4></li>
      <li><span5><?php echo $logOptions; ?></span5></li>



   </ul>
   </div>

   <li><div style="width: 100%; height: 0px; width: 100%px;border-top: 2px solid blue;margin: 0px 0;opacity:2;filter: alpha(opacity=2);" ></div></li>
   <script type="text/javascript" src="lib.js"></script>
	<script type="text/javascript" src="uline.js"></script>
</body>

   </html>