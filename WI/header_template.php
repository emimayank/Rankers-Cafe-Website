    <?php 
if (isset($_SESSION['id']) && isset($_SESSION['username']) && isset($_SESSION['useremail']) && isset($_SESSION['userpass'])) {
	$logOptions = '<x class="headerBtns" style="margin-top:12px;"><a href="http://' . $dyn_www . '/wi/logout.php"><font color="white" size="4" face="axure handwriting">Logout</font></a></x>';
	$username = $_SESSION['username'];
	$hello = '<font color="blue" size="4">Hello </font>'   . '<font color="blue" size="4">'.$username.'</font>'. ',';
	}?>
    <div align="center" style="background-color:#E9DFB0; height:130px;">
    
<div style="border-bottom:#999 1px solid; border-top:#999 1px solid; WIDTH:1000PX;" align="center">
<table width="1000" align="center" cellpadding="0" cellspacing="0">
  <tr height="10" style="background:linear-gradient(to right, #E9DFB0, #24170F);
    height:105px;">
    <td width="185"><a href="http://<?php echo $dyn_www; ?>"><img src="images/logo5.png" alt="Web Intersect Social Network" width="205" height="105" border="0" /></a></td>
    <td width="232">
 
    <a href="http://<?php echo $dyn_www; ?>/about.php"><font color="WHITE" size="4">Courseware</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="http://<?php echo $dyn_www; ?>/source_files.php"><font color="WHITE" size="4">Demo Videos</a></font>

	</td>
    <td width="130">
    <?php echo $hello; ?></td>
    <td width="272">
	<?php echo $logOptions; ?></td>


    
  </tr>
</table>
</div>
</div>