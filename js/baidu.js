$(function(){
	var clientH=$(window).height();
	var num=0;
	var flag=true;
	var les=$("section").length;
	//阻止浏览器的默认行为
	$("#fullpage").mousedown(function(e){
		e.preventDefault();
	})
	$("#fullpage").mousemove(function(e){
		e.preventDefault();
	})
	//轮播点操作
	$(".btn li").eq(0).css("background","#316389");
	//屏幕向上拖拽
	touch.on("body","swipeup","#fullpage",function(){		
		if(!flag){
			return;
		}
		num++;
		if(num==les){
			num=les-1;		
			return;
		}	
		document.title=num;
		$(".btn li").css("background","none").eq(num).css("background","#316389");
		flag=false;
		$("#fullpage").css({
			marginTop:-num*clientH,
			transition:"margin-top 1s ease"
		});				
	})
	//屏幕向下拖拽
	touch.on("body","swipedown","#fullpage",function(){		
		if(!flag){
			return;
		}
		num--;
		if(num==-1){
			num=0;
			return;
		}
		document.title=num;
		$(".btn li").css("background","none").eq(num).css("background","#316389");
		flag=false;

		$("#fullpage").css({
			marginTop:-num*clientH,
			transition:"margin-top 1s ease"
		});			
	})
	 //监听过渡完成后要做得事情
	$("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
		flag=true;   
		//2--4屏 的滑动效果
		$(".aa").each(function(index,obj){
			if(index==num){
				$(obj).find(".aa h3").css({
					marginLeft:-50,	
					opacity:0
				})
				$(obj).find(".aa .yun").css({
					marginRight:-50,	
					opacity:0
				})
			}else{
				$(obj).find(".aa h3").css({
					marginLeft:0,	
					opacity:1
				})
				$(obj).find(".aa .yun").css({
					marginRight:0,	
					opacity:1
				})
			}
		})
	})
	$("#fullpage")[0].addEventListener("mozTransitionEnd",function(){
		flag=true;
	})

	//小屏菜单操作
	// 一个物体，一个事件操作两种状态  用开关flag
	var flag1=true;
	$(".menuOption").click(function(){
		if(flag1){
			//按钮
			$(this).find(".menu-line-top").css({
				transform:"translate(0,5px) rotate(45deg)"
			})
			$(this).find(".menu-line-bottom").css({
				transform:"translate(0,-5px) rotate(-45deg)"
			})

			//菜单变化
				$(".menu").css("display","block");

			$(".menu a").each(function(index,obj){
				$(obj).css({
					opacity:0,
					animation:"menu 0.3s linear forwards "+0.2*index+"s"
				})
			})

			flag1=false;
		}else if(!flag1){
			//按钮
			$(this).find(".menu-line-top").css({
				transform:"translate(0,0px) rotate(0deg)"
			})
			$(this).find(".menu-line-bottom").css({
				transform:"translate(0,0px) rotate(0deg)"
			})
			//菜单变化	
			$(".menu a").each(function(index,obj){
				$(obj).css({
					opacity:1,
					animation:"menu1 0.3s linear forwards "+(1.2-0.2*index)+"s"
				})
			})
			
			//阻止向下拖拽时 拖动到按钮
			setTimeout(function(){
				$(".menu").css("display","none");
			},1200)

			flag1=true;
		}
	})

	//监测窗口大小是否发生变化
	$(window).resize(function(){
		clientH=$(window).height();
		var clientW=$(window).width();
		$("#fullpage").css("marginTop","-num*clientH");
		if(clientW>1000){
			$(".menu a").css({
				animation:"none",
				opacity:0
			})
			$(".menuOption .menu-line-top").css({
				transform:"translate(0,0) rotate(0deg)"
			})
			$(".menuOption .menu-line-bottom").css({
				transform:"translate(0,0) rotate(0deg)"
			})
			flag1=true;
		}
	})


})