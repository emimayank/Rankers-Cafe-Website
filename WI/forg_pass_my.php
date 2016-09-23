<?php include_once "forg_pass_det.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Forgot Password</title>
<link href="main.css" rel="stylesheet" type="text/css" />
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<script src="js/jquery-1.4.2.js" type="text/javascript"></script>
</head>
<body>
<?php include_once "header_template.php"; ?>
<table style="background-color: white; border:#069 1px solid; border-top:none;" width="1000" border="0" align="center" cellpadding="12" cellspacing="0">
    <td width="80%" valign="top">  
<table class="mainBodyTable" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="738" valign="top"><br />
      <table width="600" align="center" cellpadding="4" cellspacing="4">
        <form action="forgot_pass_my.php" method="post" enctype="multipart/form-data" name="newpass" id="newpass">
          <tr>
            <td valign="top" style="line-height:1.5em;"><p align="left"><strong>Forgot or lost your Password? <br />
              <br />
              </strong><br />
              <br />
            </p></td>
            <td valign="top" style="line-height:1.5em;">A new login password  will be made for you.<br />
              <br />
              <br />
              <?php print "$outputForUser"; ?></td>
          </tr>
          <tr>
            <td><div align="right" class="style3">Enter your Email Address Here:</div></td>
            <td><input name="email" type="text" id="email" size="38" maxlength="56" /></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><input type="submit" name="Submit" value="Get Password" /></td>
          </tr>
        </form>
      </table>
    <br /></td>
    <td width="160" valign="top"><?php include_once "right_AD_template.php"; ?></td>
  </tr>
</table>
</td>
</table>
<?php include_once "footer_template.php"; ?>
</body>
</html>
