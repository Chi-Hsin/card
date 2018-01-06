myobj =   //儲存在畫布上的各種物件
		{
			"cost"://花費
			{
				fontFamily:"Impact",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:2,
				fontSize:55,
				left:12,
				top:25,
				name:"cost"
			},
			"life"://生命
			{
				fontFamily:"Impact",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:2,
				fontSize:55,
				left:264,
				top:352,
				name:"life"
			},
			"m_name"://名稱
			{
				fontFamily:"DFXingKai Std",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:1,
				fontSize:30,
				left:75,
				top:17,
				name:"m_name"
			},
			"race"://陣營
			{
				path:"img/"
			},
			"qualify"://卡片品質
			{
				left:144,
				top:373,
				name:"qualify",
				path:"img/"
			},
			"action"://行為模式
			{
				height:null,
				top:340,
				left:5,
				path:"img/",
				check:[],//儲存每個行為模式的名稱
				fontFamily:"Impact",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:2,
				fontSize:55,
				name:"action"
			},
			"skill":
			{
				height:null,
				top:null,
				left:null,
				path:"img/",
				fontFamily:"Impact",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:2,
				fontSize:38,
				check:[],
				name:"skill"
			},
			"layer_z_index":
			{
				0:"background",//背景圖
				1:"file",//上傳圖
				2:"qualify",//品質
				3:"skill",//技能
				4:"race",//種族框架
				5:"action",//行為模式
				6:"number"//數字(生命和花費Cost)
			},
			"background":
			{
				color:""
			}
		}
function to_url()//自動下載圖片
	 {
	    var canvas = document.getElementById("c");
	    var dataURL = canvas.toDataURL("image/jpeg");
	    // window.location.href = dataURL;
	    return dataURL;
	 };
function array_remove(array,type,remove_item)//element,index指定移除元素或序列,最後傳回一個陣列
{
	if(type == "element")
      {
        var index = array.indexOf(remove_item);
        if (index > -1){
          array.splice(index, 1);
        }
      }
    else if(type == "index")
      {
          array.splice(remove_item, 1);
      }
    return array;
}
function skill_list()  //產生技能選單列表
{
	var span = document.createElement("span");
	for(var i=1;i<36;i++)
	{
		var label = document.createElement("label");
		var img = document.createElement("img");
		var input = document.createElement("input");
		input.setAttribute("type","checkbox");
		input.className = "skill_value";
		img.src = "img/s"+i+".png";
		label.appendChild(input);
		label.appendChild(img);
		span.appendChild(label);
		if(i == 20)//如果是有效果的技能,編號大於19的技能
		{
			var p = document.createElement("p");
			p.style.marginBottom ="50px";
			span.appendChild(p);

		}
		else if(i < 20)
		{
			var box = document.createElement("input")
			box.type = "number";
			box.max = "99";
			box.min = "1";
			box.value = "1";
			box.style.width ="40px";
			box.className = "skill_text";
			label.appendChild(box);
		}
	}
	document.getElementById("skill_box_list").appendChild(span);
}
// function range_layer()
// {
// 	for(var i=0;i<7;i++)
// 	{
// 		canvas.moveTo(canvas.get_item(myobj.layer_z_index[i]),i);
// 	}
// }
function action_allow(obj) //事件是否可正常被執行  若否則有偵錯機制 
{
	if(obj != null)
	{
		return true;
	}
	else
	{
		return;
	}

}
fabric.Canvas.prototype.get_item = function(name) //Canvas新增這個方法 指派name傳回特定物件
{ var obj = canvas.getObjects();
  var canvas_obj_list = [];
  var count = 0;
  for(var i=0;i<obj.length;i++)
      {
        if(obj[i].name == name)
        {
            canvas_obj_list.push(obj[i]);
            count += 1;
        }
      }
      if(count == 1){return canvas_obj_list[0]}//如果只有一個就直接傳回這個物件
      else{return  canvas_obj_list};     
}
fabric.Canvas.prototype.new_canvas = function()//初始化畫布
{
	canvas.clear();
	fabric.Image.fromURL(myobj.race.path+"r_green.png",function(img){
				var rect = new fabric.Rect({
								fill:"#fff",
								left:25,
								top:42,
								height:353,
								width:283,
								selectable:false,
								name:"background"});
				canvas.add(rect);//背景第一個放,且一定是放到最後
				rect.sendToBack();
				fabric.Image.fromURL("img/card_open.jpg",function(file_photo){
				file_photo.set({left:70,top:100,name:"file_photo"});
				canvas.add(file_photo);//上傳圖第二個放
				img.set({selectable:false,name:"race"});
				canvas.add(img);//框架第三個放
				create_text("10","cost");//花費第四個放
				create_text("10","life");//生命第五個放
				create_img(myobj.qualify.path+"q_rainbow.png","qualify");//預設為彩鑽品質圖
				//品質圖第六個放
				})
	});

	
	
}
fabric.Object.prototype.get_prop = function(type)//讓指定的物件回傳需要的數據
{
	if(type == "size")//回傳物件寬,高
		{
			var i_width = this.width;
			var i_scalex = this.scaleX;
			alert(i_width * i_scalex);//取得"目前"物件的寬
		}
		else if(type == "position")//回傳相對位置
		{
			alert("left:"+this.left+"\ntop:"+this.top);
		}
}
