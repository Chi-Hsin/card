function create_img(path,type,index,text_exist,value)//更新,產生圖片放在畫布上
//最後一個參數代表是否有文字會被放在上面
{
	if(type == "qualify")
	{
		fabric.Image.fromURL(path,function(img){
		img.set({
					left:myobj.qualify.left,
					top:myobj.qualify.top,
					name:myobj.qualify.name,
					selectable:false,
				})
		canvas.add(img);
		})

	}
	else if(type == "race")//更改框架圖
	{
		
		fabric.Image.fromURL(path,function(img){
			var index = canvas.getObjects().indexOf(canvas.get_item("race"));
		canvas.remove(canvas.get_item("race"));
				img.set({name:"race",selectable:false});
				canvas.insertAt(img,index);
			});
		
	}
	else//放上行動圖
	{
		fabric.Image.fromURL(path,function(img){
		myobj.action.height = img.height;
		img.set({
					top:myobj.action.top-(myobj.action.check.length-1)*myobj.action.height,
					name:type+index,
					selectable:false
				})
		canvas.add(img);
		if(text_exist == "true"){create_text(value,type,index);}
		//圖片加載完才放上文字  否則文字會跑到後面
		//註:index越大(也就是越後面才加的),會優先放在最上層
		})
	}
}
function delete_img(type)
{
	canvas.remove(canvas.get_item(type));
}
// function obj_index(element)//取得勾選或取消勾選是紀錄check的第幾個
// {
// 	var index = function(element)
// 	{
// 		return myobj.skill.check.indexOf(element);
// 	}


// }
function remove_drop(element)//判斷移除的行為模式在左圖中是第一個還是第二個
{
	// for(var i=index;i<index+3;i++)
	// {
	// 	canvas.get_item("action"+i+1).set({top:80})
	// }
	// var number_add = (myobj.action.top-canvas.get_item("action"+index).top)/myobj.action.height+1;
	// if(number_add == 1)
	// {
	// 	var that = canvas.get_item("action"+index);
	// 	that.set({top:that.top+80});
	// }
	//如果移除的是第一個而且這個儲存名稱的物件有兩個就將上面的物件往下移
	//註:畢竟要有兩個行為圖堆疊才有上下的概念,對吧?
	if(myobj.action.check.indexOf(element) == 0 && myobj.action.check.length > 1)
	{
		var that = canvas.get_item("action"+myobj.action.check[1]);//that指的是上面這個要往下移的物件
		var that_text = canvas.get_item("action_text"+myobj.action.check[1]);
		that.set({top:that.top+myobj.action.height});
		//字也要跟著下來
		that_text.set({top:that_text.top+myobj.action.height});
	}
}
function create_text(value,type,index)
{
	var set_option = //臨時性作變數用的物件
	{
		"fontFamily":null,
		"fill":null,
		"stroke":null,
		"strokeWidth":null,
		"fontSize":null,
		"left":null,
		"top":null,
		"name":null
	};
	if(type == "cost")
	{
		set_option.fontFamily = myobj.cost.fontFamily;
		set_option.fill = myobj.cost.fill;
		set_option.stroke = myobj.cost.stroke;	
		set_option.strokeWidth = myobj.cost.strokeWidth;
		set_option.fontSize = myobj.cost.fontSize;
		set_option.left = myobj.cost.left;
		set_option.top = myobj.cost.top;
		set_option.name = myobj.cost.name;
	}
	else if(type == "life")
	{
		set_option.fontFamily = myobj.life.fontFamily;
		set_option.fill = myobj.life.fill;
		set_option.stroke = myobj.life.stroke;	
		set_option.strokeWidth = myobj.life.strokeWidth;
		set_option.fontSize = myobj.life.fontSize;
		set_option.left = myobj.life.left;
		set_option.top = myobj.life.top;
		set_option.name = myobj.life.name;
	}
	else if(type == "m_name")
	{
		set_option.fontFamily = myobj.m_name.fontFamily;
		set_option.fill = myobj.m_name.fill;
		set_option.stroke = myobj.m_name.stroke;	
		set_option.strokeWidth = myobj.m_name.strokeWidth;
		set_option.fontSize = myobj.m_name.fontSize;
		set_option.left = myobj.m_name.left;
		set_option.top = myobj.m_name.top;
		set_option.name = myobj.m_name.name;
	}
	else if(type == "action")//行為模式的效果值
	{
		var index_new = myobj.action.check.indexOf(index);//加入的這個index是在myobj第幾個加入的
		set_option.fontFamily = myobj.action.fontFamily;
		set_option.fill = myobj.action.fill;
		set_option.stroke = myobj.action.stroke;	
		set_option.strokeWidth = myobj.action.strokeWidth;
		set_option.fontSize = myobj.action.fontSize;
		set_option.left = myobj.action.left+12;//12作微幅調整
		set_option.top = myobj.action.top-(index_new)*myobj.action.height+21;//23作微幅調整
		set_option.name = "action_text"+index;
	}
	var text = new fabric.Text(value,{
					fontFamily: set_option.fontFamily,
					fill:set_option.fill,
					stroke:set_option.stroke,
					strokeWidth:set_option.strokeWidth,
					fontSize:set_option.fontSize,
					left:set_option.left,
					top:set_option.top,
					name:set_option.name,
					selectable:false});
	if(value < 10)//如果是個位數字,作微幅位置的變動
	{
		text.set(
		{
			fontSize:set_option.fontSize+5,
			left:set_option.left+12,
			top:set_option.top-5
		})
	}
	if(type == "m_name")//置中名稱
	{
		canvas.centerObject(text);
    	text.set({top:15}).setCoords();
	}
	canvas.add(text);
}