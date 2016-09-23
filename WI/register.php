<?php include_once "reg_det.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="Description" content="Register to yourdomain" />
<meta name="Keywords" content="register, yourdomain" />
<meta name="rating" content="General" />
<title>Register at <?php echo $dyn_www; ?></title>
<link href="main.css" rel="stylesheet" type="text/css" />
<link rel="icon" href="head.jpg" type="image/x-icon" />
<link rel="shortcut icon" href="head.jpg" type="image/x-icon" />
<script src="jquery-1.4.2.js" type="text/javascript"></script>
<script language="javascript" type="text/javascript"> 
$(document).ready(function() {
	$("#username").blur(function() {
		$("#nameresponse").removeClass().text('Checking Username...').fadeIn(1000);
		$.post("check_signup_name.php",{ username:$(this).val() } ,function(data) {
		  	$("#nameresponse").fadeTo(200,0.1,function() { 
			  $(this).html(data).fadeTo(900,1);	
			});
        });
	});
});
function toggleSlideBox(x) {
		if ($('#'+x).is(":hidden")) {
			$('#'+x).slideDown(300);
		} else {
			$('#'+x).slideUp(300);
		}
}
</script>
<style type="text/css">
<!--
.style26 {color: #FF0000}
.style28 {font-size: 14px}
.brightRed {
	color: #F00;
}
.textSize_9px {
	font-size: 9px;
}
-->
</style>
</head>
<body>
<?php include_once "head.php"; ?>
<table style="background-color: white; border:#069 1px solid; border-top:none;" width="1000" border="0" align="center" cellpadding="12" cellspacing="0">
    <td width="80%" valign="top">   
		
      <table class="mainBodyTable" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="738" valign="top" style="background-color: white;">

        <h2 align="center">Create Your Account </h2>

      <table width="600" align="center" cellpadding="8" cellspacing="0" style="border:#999 1px solid; background-color:#FBFBFB;">
        <form action="register.php" method="post" enctype="multipart/form-data">
          <tr>
            <td colspan="2"><font color="#FF0000"><?php print "$errorMsg"; ?></font></td>
          </tr>       
          <tr>
            <td width="114" bgcolor="#FFFFFF">User Name:<span class="brightRed"> *</span></td>
            <td width="452" bgcolor="#FFFFFF"><input name="username" type="text" class="formFields" id="username" value="<?php print "$username"; ?>" size="32" maxlength="10" />
              <span id="nameresponse"><span class="textSize_9px"><span class="greyColor">Alphanumeric Characters Only</span></span></span></td>
          </tr>
          <tr>
            <td bgcolor="#EFEFEF">Gender: <span class="brightRed">*</span></td>
            <td bgcolor="#EFEFEF"><select name="gender" class="formFields" id="gender"><label>

<option value="<?php print "$gender"; ?>"> <?php if ($gender!="" and $gender=="m") {print "Male";} elseif($gender!="") {print "Female";} ?>
</option>
<option value="m">Male</option>
<option value="f">Female</option>
</select> 
</label></td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF">Date of Birth: <span class="brightRed">*</span></td>
            <td bgcolor="#FFFFFF">
<select name="birth_month" class="formFields" id="birth_month">
<option value="<?php print "$b_m"; ?>"><?php print "$b_m"; ?></option>
<option value="01">January</option>
<option value="02">February</option>
<option value="03">March</option>
<option value="04">April</option>
<option value="05">May</option>
<option value="06">June</option>
<option value="07">July</option>
<option value="08">August</option>
<option value="09">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select> 
<select name="birth_day" class="formFields" id="birth_day">
<option value="<?php print "$b_d"; ?>"><?php print "$b_d"; ?></option>
<option value="01">1</option>
<option value="02">2</option>
<option value="03">3</option>
<option value="04">4</option>
<option value="05">5</option>
<option value="06">6</option>
<option value="07">7</option>
<option value="08">8</option>
<option value="09">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select> 
<select name="birth_year" class="formFields" id="birth_year">
<option value="<?php print "$b_y"; ?>"><?php print "$b_y"; ?></option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>

</select> 
<a href="#" onclick="return false" onmousedown="javascript:toggleSlideBox('why');">why?</a>
<div id="why" style="background-color:#E6F5FF; border:#999 1px solid; padding:12px; display:none; margin-top:8px;">
     Sometime down the road we may offer content that is only suitable for people over 18. We require this information to check your age. <br /><br />We can also use this information to alert your friends to when your birthday is.
      </div>
</td>
          </tr>                  
          <tr>
            <td bgcolor="#EFEFEF">Email Address: <span class="brightRed">*</span></td>
            <td bgcolor="#EFEFEF"><input name="email1" type="text" class="formFields" id="email1" value="<?php print "$email1"; ?>" size="32" maxlength="48" /></td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF">Confirm Email:<span class="brightRed"> *</span></td>
            <td bgcolor="#FFFFFF"><input name="email2" type="text" class="formFields" id="email2" value="<?php print "$email2"; ?>" size="32" maxlength="48" /></td>
          </tr>
          <tr>
            <td bgcolor="#EFEFEF">Create Password:<span class="brightRed"> *</span></td>
            <td bgcolor="#EFEFEF"><input name="pass1" type="password" class="formFields" id="pass1" size="32" maxlength="16" />
              <span class="textSize_9px"><span class="greyColor">Alphanumeric Characters Only</span></span></td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF">Confirm Password:<span class="brightRed"> *</span></td>
            <td bgcolor="#FFFFFF"><input name="pass2" type="password" class="formFields" id="pass2" size="32" maxlength="16" />
            <span class="textSize_9px"><span class="greyColor">Alphanumeric Characters Only</span></span></td>
          </tr>
          <tr>
            <td bgcolor="#EFEFEF">Human Check: <span class="brightRed">*</span></td>
            <td bgcolor="#EFEFEF"><input name="humancheck" type="text" class="formFields" id="humancheck" value="Please remove all of this text" size="32" maxlength="32" />
              </td>
          </tr>
          <tr>
            <td bgcolor="#FFFFFF">&nbsp;</td>
            <td bgcolor="#FFFFFF"><p><br />
              <input type="submit" name="Submit" value="Sign Up!" />
            </p></td>
          </tr>
        </form>
      </table>
      <br />
      <br /></td>

  </tr>
</table>

       </td>
       </table>
       <?php include_once "footer_template.php"; ?>

</body>
</html>