<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<script src="js/jquery-3.1.0.min.js"></script>
<script src="js/fabric/dist/fabric.min.js"></script>
<script src="js/myobj.js"></script>
<script src="js/image.js"></script>
<script src="js/make.js"></script>
<link rel="stylesheet" type="text/css" href="css/make.css">
<body>
<div class="top"></div>
<div class="btn">
	<div class="btn_l"><!--左側卡面-->
		<canvas width="335" height="435" id="c"></canvas>
		<a href="javascript:;" id="get_value">取值</a>
		<p>
			<a href="javascript:;" id="download_pic" download>download</a>
		</p>
	</div>
	<div class="btn_r"><!--右側導航欄-->
		<ul class="slider">
			<li><a href="javascript:;">資料輸入</a></li>
			<li><a href="javascript:;">技能詳情</a></li>
			<li><a href="javascript:;">圖片上傳</a></li>
		</ul>
		<div class="box">
			<p>名稱：
				<input type="text" id="m_name">
			</p>
			<p>花費：
				<input type="number"  id="cost" value="10">
			</p>
			<p>生命：
				<input type="number"  id="life" value="10">
			</p>
			<p>
				<div id="action_l">行為：
				</div>
				<div id="action_r">(最多能勾選兩項)
					<p>
						<label><input type="checkbox" class="action">近戰
						<img src="img/sword.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>
					<p>
						<label><input type="checkbox" class="action">法術
						<img src="img/magic.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>
					<p>
						<label><input type="checkbox" class="action">遠程
						<img src="img/arrow.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>
					<p>
						<label><input type="checkbox" class="action">隨機
						<img src="img/dice.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>
					<p>
						<label><input type="checkbox" class="action">治療
						<img src="img/one_heal.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>
					<p>
						<label><input type="checkbox" class="action">群療
						<img src="img/all_heal.png" alt="">
						<input type='number' class='action_text' min="1" max="99" value="1">
						</label>
					</p>

				</div>
			</p>
			<p id="qualify_div">品質：
				<select name="" id="qualify">
					<option value="彩">彩</option>
					<option value="金">金</option>
					<option value="銀">銀</option>
					<option value="鐵">鐵</option>
				</select>
			</p>
			<p>陣營：
				<select name="" id="race">
					<option value="綠">綠</option>
					<option value="藍">藍</option>
					<option value="紅">紅</option>
					<option value="紫">紫</option>
					<option value="黃">黃</option>
				</select>
			</p>
			<p>能力：
				<select name="" id="">
					<option value="" selected="selected"  disabled="disabled">請選擇</option>
					<option value="">A</option>
					<option value="">B</option>
					<option value="">C</option>
				</select>
			</p>
			<p>背景：
				<select name="" id="">
					<option value="" selected="selected"  disabled="disabled">請選擇</option>
					<option value="">A</option>
					<option value="">B</option>
					<option value="">C</option>
				</select>
			</p>
		</div>
		<div class="box">ggggg</div>
		<div class="box">
		上傳圖片(限制上傳檔案類型:XXX)<input type="file">
		</div>
	</div>
</div>
</body>
</html>