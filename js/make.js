$(function(){
		canvas = new fabric.Canvas('c');//全域變數 在其他地方也能調用
		canvas.new_canvas();//初始化畫布
		$("#download_pic").click(function(e){//下載圖片
			e.target.href = to_url();
		})
		$("#get_value").click(function(){	//依照指派的值傳回物件的特性
			alert(canvas.getObjects().indexOf(canvas.get_item("action_text0"))+","+
				canvas.getObjects().indexOf(canvas.get_item("action_text1")));
		})
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
			delete_img("action_text"+index);
			create_text($(this).val(),"action",index);
		})
	})
		