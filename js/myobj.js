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
				path:"img/sword_base.png",
				check:[],//儲存每個行為模式的名稱
				fontFamily:"Impact",
				fill:'rgb(255,255,255)',
				stroke:'black',
				strokeWidth:2,
				fontSize:55,
				name:"action"
			},
			"skill":{}
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
fabric.Canvas.prototype.get_item = function(name) //Canvas新增這個方法 指派name傳回特定物件
{	var obj = canvas.getObjects();
	for(var i=0;i<obj.length;i++)
	    {
	      if(obj[i].name == name)
	      {
	          return obj[i];
	          // alert(obj[i].name);
	      }
	    } 
}
fabric.Canvas.prototype.new_canvas = function()//初始化畫布
{
	canvas.clear();
	canvas.setBackgroundImage(myobj.race.path+"r_green.png", canvas.renderAll.bind(canvas));//預設為綠色框架
	create_img(myobj.qualify.path+"q_rainbow.png","qualify");//預設為彩鑽品質圖
	create_text("10","cost");
	create_text("10","life");
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
