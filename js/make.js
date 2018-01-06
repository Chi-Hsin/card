$(function(){
		canvas = new fabric.Canvas('c');//全域變數 在其他地方也能調用
		canvas.new_canvas();//初始化畫布
		skill_list();
		$("#background").change(function(){
			switch($(this).val())
			{

				case "黃":
					myobj.background.color = "#fff799";
				break;
				case "藍":
					myobj.background.color = "blue";
				break;
				case "紅":
					myobj.background.color = "red";
				break;
				case "綠":
					myobj.background.color = "green";
				break;
				case "灰":
					myobj.background.color = "grey";
				break;
			}
			canvas.remove(canvas.get_item("background"));
			var rect = new fabric.Rect({
								fill:myobj.background.color,
								left:25,
								top:42,
								height:353,
								width:283,
								selectable:false,
								name:"background"});
			canvas.add(rect);
			rect.sendToBack();
		})
		$(".skill_value").click(function(){
			 index = $(this).parent().prevAll("label").length +1;//第一個元素為零 方便計算  所以加一
			if($(this).prop("checked"))//如果這個選項是未被勾選的,我去勾選它
			{
				myobj.skill.check.push(index);
				var index_new = myobj.skill.check.indexOf(index);
				if(myobj.skill.check.length == 3)
				{//如果是第二個被勾選,其他未勾選的選項disable掉勾選的功能
					for(var i=0;i<$(".skill_value").length;i++)
					{
						if(!($(".skill_value:eq("+i+")").prop("checked")))
						{
							$(".skill_value:eq("+i+")").attr("disabled",true);
						}
					}
				}
				$(this).parent().children(".skill_text").css("visibility","visible");
				switch(index_new)//依據加入的順序改變圖的位置
				{
					case 0:
						myobj.skill.left = 140;
					break;
					case 1:
						myobj.skill.left = 65;
					break;
					case 2:
						myobj.skill.left = 215;
					break;
				}
				//產生圖
				fabric.Image.fromURL("img/skill.png",function(img){
					var imga = img.set({name:"img1",originY:"center",top:318,left:myobj.skill.left-10});

				fabric.Image.fromURL("img/s"+index+".png",function(img){
					var imgb = img.set({name:"img2",originY:"center",top:318,left:myobj.skill.left});
					if(index >20)//如果是大於20後面的技能就不需要加上數字
					{
						var group = new fabric.Group([imga,imgb],{name:"group"+index});
					}
					else
					{
						var text = new fabric.Text("1",{
									fontFamily: myobj.skill.fontFamily,
									fill:myobj.skill.fill,
									stroke:myobj.skill.stroke,
									strokeWidth:myobj.skill.strokeWidth,
									fontSize:myobj.skill.fontSize,
									left:myobj.skill.left+10,
									top:328,
									name:"skill_text"+index});
						var group = new fabric.Group([imga,imgb,text],{name:"group"+index,selectable:false});
					}
					canvas.add(group);
					})
				  })
			}
			else
			{
				 obj0 = canvas.get_item("group"+myobj.skill.check[0]);
				 obj1 = canvas.get_item("group"+myobj.skill.check[1]);
				 obj2 = canvas.get_item("group"+myobj.skill.check[2]);
				for(var i =myobj.skill.check.indexOf(index);i<3;i++)
				{
					if(action_allow(myobj.skill.check[i+1]))//如果取消第一個技能時後面有第二個第三個 
															//或是取消第二個技能時後面有第三個技能的話執行這個動作
					{
						if(i == 0)
						{
							obj1.set({left:obj1.left+90});
						}
						else if(i == 1)
						{
							obj2.set({left:obj2.left-180});
						}
					};

				}
				canvas.remove(canvas.get_item("group"+index));//移除畫布的圖
				myobj.skill.check = array_remove(myobj.skill.check,"element",index);//移除特定的元素並返回一個陣列傳給用來儲存名稱的物件
				for(var i=0;i<$(".skill_value").length;i++){//因為已經取消勾選 所以解除其他選項的勾選限制
						$(".skill_value:eq("+i+")").attr("disabled",false);}
				$(this).parent().children(".skill_text").css("visibility","hidden");
			}	
		})
		$(".skill_text").change(function()
		{
			if($(this).val() <1 | $(this).val() > 99){alert("請輸入1-99的數字");return;}
			var  index = $(this).parent().prevAll("label").length +1;//紀錄是按第幾個
			var text_obj = canvas.get_item("group"+index).item(2);
			text_obj.set({text:$(this).val(),left:-26})
			if($(this).val() <10){text_obj.set({left:-16})}//個位數字,右移一點距離
			canvas.renderAll();//重建模型
		})
		$("#download_pic").click(function(e){//下載圖片
			e.target.href = to_url();
		})
		$("#get_value").click(function(){	//依照指派的值傳回物件的特性
			alert(canvas.getObjects());
		})
		$("#skill_box").hover(function(){ //滑標移過去能顯示能力選單
			$("#skill_box div").css("display","block");
		},function(){$("#skill_box div").css("display","none");})
		$("ul.slider li:not(:first-child)").hover(
			function(){
			$(this).find("a").css("background","rgb(56,125,170)").css("color","#fff");}
			,function(){$(this).find("a").css("background","rgb(231,230,230)").css("color","rgb(163,179,196)");})
		
		$("ul.slider li:nth-child(1)").click(function(){
			$(this).find("a").css("background","rgb(56,125,170)").css("color","#fff");
			$("ul.slider li").not($(this)).find("a").css("background","rgb(231,230,230)").css("color","rgb(163,179,196)");
			$(".btn_r>.box:nth-child(2)").css("display","block");
			$(".btn_r>.box:not(:nth-child(2))").css("display","none");
		})

		$("ul.slider li:nth-child(2)").click(function(){
			$(this).find("a").css("background","rgb(56,125,170)").css("color","#fff");
			$("ul.slider li").not($(this)).find("a").css("background","rgb(231,230,230)").css("color","rgb(163,179,196)");
			$(".btn_r>.box:nth-child(3)").css("display","block");
			$(".btn_r>.box:not(:nth-child(3))").css("display","none");
		})
		$("ul.slider li:nth-child(3)").click(function(){
			$(this).find("a").css("background","rgb(56,125,170)").css("color","#fff");
			$("ul.slider li").not($(this)).find("a").css("background","rgb(231,230,230)").css("color","rgb(163,179,196)");
			$(".btn_r>.box:nth-child(4)").css("display","block");
			$(".btn_r>.box:not(:nth-child(4))").css("display","none");
		})
		$("#qualify").change(function(){
			var path = myobj.qualify.path;
			switch($(this).val())
			{

				case "彩":
					path += "q_rainbow.png";
				break;
				case "金":
					path += "q_gold.png";
				break;
				case "銀":
					path += "q_silver.png";
				break;
				case "鐵":
					path += "q_iron.png";
				break;
			}
			delete_img("qualify");//將舊的品質圖刪除
			create_img(path,"qualify");

		})
		$("#race").change(function(){
			var path = myobj.race.path;
			switch($(this).val())
			{
				case "藍":
					path += "r_blue.png";
					break;
				case "紅":
					path += "r_red.png";
					break;
				case "紫":
					path += "r_purple.png";
					break;
				case "黃":
					path += "r_yellow.png";
					break;
				case "綠":
					path += "r_green.png";
					break;
			}
			create_img(path,"race");
			canvas.insertAt(canvas.get_item("race"),2,true);

		})
		$("#cost").change(function(){
			delete_img("cost");
			create_text($(this).val(),"cost");
		})
		$("#life").change(function(){
			delete_img("life");
			create_text($(this).val(),"life");
		})
		$("#m_name").keyup(function(){
			delete_img("m_name");
			create_text($(this).val(),"m_name");

		})
		$(".action").click(function(e){
			var index = $(this).parent().parent().index();//紀錄是按第幾個
			if($(this).prop("checked"))//如果這個選項是未被勾選的,我去勾選它
			{
				myobj.action.check.push(index);
				if(myobj.action.check.length == 2)
				{//如果是第二個被勾選,其他未勾選的選項disable掉勾選的功能
					for(var i=0;i<$(".action").length;i++)
					{
						if(!($(".action:eq("+i+")").prop("checked")))
						{
							$(".action:eq("+i+")").attr("disabled",true);
						}
					}
				}
				$(this).parent().children(".action_text").css("display","inline");
				myobj.action.path = "img/";//回復預設路徑
				switch(index)//依照按的是第幾個決定路徑
				{
					case 0:
						myobj.action.path += "sword_base.png"; 
						break;
					case 1:
						myobj.action.path += "magic_base.png"; 
						break;	
					case 2:
						myobj.action.path += "arrow_base.png"; 
						break;	
					case 3:
						myobj.action.path += "dice_base.png"; 
						break;	
					case 4:
						myobj.action.path += "one_heal_base.png"; 
						break;	
					case 5:
						myobj.action.path += "all_heal_base.png"; 
						break;
				}
				create_img(myobj.action.path,"action",index,"true",$(".action_text:eq("+index+")").val());
				// create_text($(".action_text:eq("+index+")").val(),index,"action")

			}
			else//如果這個選項是已經被勾選的,我去取消勾選它
			{
				
				remove_drop(index);
				myobj.action.check = array_remove(myobj.action.check,"element",index);//移除特定的元素並返回一個陣列傳給用來儲存名稱的物件
				delete_img("action"+index);
				delete_img("action_text"+index);
				for(var i=0;i<$(".action").length;i++){//因為已經取消勾選 所以解除其他選項的勾選限制
						$(".action:eq("+i+")").attr("disabled",false);}
				$(this).parent().children(".action_text").css("display","none");
			}
		})
		$(".action_text").change(function(){
			var  index = $(this).parent().parent().index();//紀錄是按第幾個
			canvas.get_item("action_text"+index).set({text:$(this).val()})
			canvas.renderAll();//重建模型
		})
		$("#file_photo").change(function(e){

			var url = URL.createObjectURL(e.target.files[0]);
			fabric.Image.fromURL(url,function(img){
				var index = canvas.getObjects().indexOf(canvas.get_item("file_photo"));
				canvas.remove(canvas.get_item("file_photo"));
				img.set({left:150,top:150,name:"file_photo"});
				// canvas.add(img);
				canvas.insertAt(img,index);
			})

		})

	})
		