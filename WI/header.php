<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php 
if (isset($_SESSION['id']) && isset($_SESSION['username']) && isset($_SESSION['useremail']) && isset($_SESSION['userpass'])) {
	$logOptions = '<a href="http://' . $dyn_www . '/wi/logout.php">LOGOUT</a></x>';
	$username = $_SESSION['username'];
	$hello = '<font color="blue" size="4">'.$username.'</font>'. ',';
	}?>
	<style type="text/css">
 
 #navigation li {
        list-style: none;
        display: block;
        float: left;
        margin: 1em;

		
}

#navigation_container {

   margin: 0 auto;
}

.rectangle {
   background:#000;
   height: 60px;
   position: relative;
}
</style>
</head>
<body>
<div id="navigation_container">
<div class="rectangle">
</div>
</div>
</body>
</html>
   