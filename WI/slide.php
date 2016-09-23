

<html>
<head>
<script type="text/javascript">
<!--
//preload images
var image1=new Image()
image1.src="slide1.jpg"
var image2=new Image()
image2.src="slide2.jpg"
var image3=new Image()
image3.src="slide3.jpg"
//-->
</script>
</head>
<body>


<a href="javascript:slidelink()"><div align="center" style="background-image:url('backg.jpg'); box-shadow: 10px 10px 5px #888888;">
<img src="Flight-1.jpg" name="slide" border="0" width="100%" height="565" /></div>
<br/><br/><br/>
</div></a>

<script type="text/javascript">
<!--
var step=1
var whichimage=1
function slideit(){
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
whichimage=step
if (step<3)
step++
else
step=1
setTimeout("slideit()",3600)
}
slideit()
function slidelink(){
if (whichimage==1)
window.location="link1.htm"
else if (whichimage==2)
window.location="link2.htm"
else if (whichimage==3)
window.location="link3.htm"
}
//-->
</script>
</body>
<script src="../lib.js" type="text/javascript"></script>
</html>

