<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<style>
	img{width: 500px;height: 500px;}
</style>
  <link rel="stylesheet" type="text/css" href="css/imgareaselect-default.css" />
  <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="js/jquery.imgareaselect.pack.js"></script>
<script type="text/javascript">
function preview(img, selection) {
    var scaleX = 100 / (selection.width || 1);
    var scaleY = 100 / (selection.height || 1);
    $('#img_preview  img').css({
        width: Math.round(scaleX * 500) + 'px',
        height: Math.round(scaleY * 500) + 'px',
        marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
        marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
    });
}

$(document).ready(function () {
	$("#img_preview").css({width:100 + 'px',height:100 + 'px'});
    $('#photo').imgAreaSelect({ aspectRatio: '1:1', onSelectChange: preview });
});
</script>
<body>
<div id="img_preview" style="overflow: hidden;">
	<img src="img/c1.png" alt="">
</div>
<img src="img/c1.png" alt="" id="photo">
<a href="test2.php" download>下載</a>
</body>
</html>