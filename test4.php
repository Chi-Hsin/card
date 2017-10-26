<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.js "></script>
<script src="js/fabric/dist/fabric.min.js"></script>
<!-- <script src="js/myobj.js"></script> -->
<script>
$(function(){
	canvas = new fabric.Canvas('c');
	canvas2 = new fabric.Canvas('d');
	canvas.setBackgroundImage("img/r_green.png", canvas.renderAll.bind(canvas));
	canvas2.setBackgroundImage("img/r_red.png", canvas.renderAll.bind(canvas2));
 //    var rect = new fabric.Rect({width:150,height:60,fill:"blue"});
 //    rect.set({left:(canvas.width-rect.width)/2,top:(canvas.height-rect.height)/2});
 //    var circle = new fabric.Circle({
 //  radius: 10, fill: 'green'
	// });
 //    canvas.add(rect);
 //    rect.add(circle);
 	console.log(canvas.toSVG());
})


</script>
<body>
<canvas id="c" width="335" height="435">
	<canvas id="d" width="135" height="135"></canvas>
	
</canvas>
</body>
</html>