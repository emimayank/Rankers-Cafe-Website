<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" href="head.jpg" type="image/x-icon" />
<link rel="shortcut icon" href="head.jpg" type="image/x-icon" />
<link href="main.css" rel="stylesheet" type="text/css" />
<script src="jquery-1.4.2.js" type="text/javascript"></script>
<title>Log In</title>
<style type="text/css">
<!--
body {
	margin-top: 0px;
}
-->
</style></head>
<body>
<?php include_once "log_det.php"; ?>
<?php include_once "head.php"; ?>
<table style="background-color: white; border:#069 1px solid; border-top:none;" width="1000" border="0" align="center" cellpadding="32" cellspacing="0">
    <td width="80%" valign="top"> 
    <table width="450"; height:100px; align="center" cellpadding="6" style="background-color:#FFF; border:#666 1px solid;">
  <form action="login.php" method="post" enctype="multipart/form-data" name="signinform" id="signinform">
    <tr>
      <td width="23%"><font size="+1">Log In</font></td>
      <td width="77%"><font color="#FF0000"><?php print "$errorMsg"; ?></font></td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td><input name="email" type="text" id="email" style="width:60%;" /></td>
    </tr>
    <tr>
      <td><strong>Password:</strong></td>
      <td><input name="pass" type="password" id="pass" maxlength="24" style="width:60%;"/></td>
    </tr>
  <tr>
      <td align="right">&nbsp;</td>
      <td><input name="remember" type="checkbox" id="remember" value="yes" checked="checked" />
        Remember Me</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><input name="myButton" type="submit" id="myButton" value="Sign In" /></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td colspan="2">Forgot your password? <a href="forgot_pass.php">Click Here</a>
  <br /></td>
    </tr>
    <tr>
      <td height="32" colspan="2">Need an Account? <a href="register.php">Click Here</a><br />        <br /></td>
    </tr>
  </form>
</table>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</td>

</table>

<?php include_once "footer_template.php"; ?>

</body>
</html>