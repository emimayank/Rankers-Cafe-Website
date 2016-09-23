<html>
<head>

<script src="jquery-1.4.2.js" type="text/javascript"></script>
<script>
$(document).ready(function(){
  $("#getm").hide();
  $(".btn1").click(function(){
  	$("#ridoff").hide();
  	$("#getm").show();
  });
  
});
</script>
<link href="main.css" rel="stylesheet" type="text/css" />
<style type="text/css">
tr.border_bottom td {
  border-bottom:1pt solid black;
}

.boxed {
  width: 80%;
  border: 0px ;
  height: 300px;

}

.boxin{
width: 260px;
height: 150px;
border-radius: 8px;
background: none repeat scroll 0% 0%;
-moz-box-sizing: content-box;
color: #000;
opacity: 0.9;

}
 td.padded {
 padding:20px;
 }
 
 hr.styled-hr {
    background-color: rgba(0, 0, 0, 0.13);
    border: 0pt none;
    color: rgba(0, 0, 0, 0.13);
    height: 1px;
    margin: 0px auto;
    text-align: center;
}

 
</style>
</head>
<body>
<div align="center">
<br/>
<font color="#0000FF"><b>Contact Us</b></font>
<table style="background-color: white;  width="1000" align="center" cellpadding="0" cellspacing="0">
	
    <td width="1000" valign="top" >   

        <table style="background-color: white; border-top:none;" border="0" align="center" cellspacing="0"> 
        	<td width="50%" valign="top">
            <div style="padding-right:20px">
			<br/><br/><br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14005.943513497588!2d77.326729!3d28.645167!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1400277705979" width="500" height="400" frameborder="0" style="border:0"></iframe>
            <br/>
            <br/><br/>
            </div>
            </td>
            
            <br/>
            
            <td width="50%" valign="top">
            <div id="ridoff">
            <table width="100%"; height:100px; align="center" cellpadding="6" style="background-color:#FFF;">
            <tr>
      <td width="80%"><font size="+1">Contact Us</font></td>
    </tr>
          <tr><td><strong>Name</strong></td></tr>
    <tr>
      <td><input name="fname" type="text" id="fname" style="width:60%;" class="formFields"/></td>
    </tr>
    <tr><td><strong>Email</strong></td></tr>
    <tr>
      <td><input name="fname" type="text" id="fname" style="width:60%;" class="formFields"/></td>
    </tr>
    <tr><td><strong>Message</strong></td></tr>
    <tr>
      <td><textarea name="post_body" id="_body" cols="64" rows="12" style="width:98%;" class="formFields"></textarea>
<button class="btn1">Submit</button></td>
    </tr>

            </table>
            </div>
            <div id="getm"><br/><br/><br/>Thank you. Your information has been submitted.</div>
            </td>

            
        </table>
	         <div style="padding-left:20px;padding-right:20px;">
    <div style="height: 20px; overflow: hidden; width: 100%;"></div>
    <hr class="styled-hr" style="width:100%;padding:1px;"></hr>
    <div style="height: 20px; overflow: hidden; width: 100%;"></div>

</div>      
     </td>

</table>

</body>
</html>