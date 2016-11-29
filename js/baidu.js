$(function(){
	var clientH=$(window).height();
	var num=0;
	var flag=true;
	var les=$("section").length;
	$(".btn li").eq(0).css("background","#316389");
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
		$(".btn li").eq(num).css("background","#316389");
		flag=false;
		$("#fullpage").css({
			marginTop:-num*clientH,
			transition:"margin-top 1s ease"
		});		
		
	})
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
		flag=false;
		$("#fullpage").css({
			marginTop:-num*clientH,
			transition:"margin-top 1s ease"
		});		
	})
	$("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
		flag=true;
	})
	$("#fullpage")[0].addEventListener("mozTransitionEnd",function(){
		flag=true;
	})


})