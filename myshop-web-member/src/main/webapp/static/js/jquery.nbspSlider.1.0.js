(function($) {
	$.fn.nbspSlider = function(options){

		var defaults = {
			widths:         "800px",        // 幻灯片宽度
			heights:        "300px",		// 幻灯片高度
			autoplay:       0,              // 是否自动播放幻灯片(1为是0为否)
			delays:         4000,           // 自动播放--间隔(毫秒)
			prevId: 		'prevBtn',      // 上一张幻灯片按钮ID
			nextId: 		'nextBtn',		// 下一张幻灯片按钮ID
			effect:	        'horizontal',   // horizontal、vertical、fade、none == 特效：横向、竖向、淡出、无特效
			speeds: 		800,			// 幻灯片切换的速度(毫秒)
			altOpa:         0.5,            // ALT区块透明度
			altBgColor:     '#ccc',  		// ALT区块背景颜色
			altHeight:      '60px',  		// ALT区块高度
			altShow:         0,				// ALT区块是否显示(1为是0为否)
			altFontColor:    '#fff',        // ALT区块内的字体颜色
			starEndNoEff: 	  0,            // 开始与结束中间无动画效果(1为是0为否)
			//preNexBtnShow:    1,            // 是否显示上一张下一张按钮
			preBtnShow:    1,				//后退按钮的是否显示
			nexBtnShow:    1,				//前进按钮是否显示
			preBtnStyle:		null,		//后退按钮的样式
			nexBtnStyle:		null,		//前进按钮的样式

			numBtnSty:        "num",	    // num、square、circle、roundness、rectangle、thumbnail == 数字、正方形、圆圈、圆形、长方形、缩略图
			numBtnShow:       "1" ,         // 是否显示数字按钮
			numArray:		 null,				//显示年份的设置，设置为null就为默认的年份
			thumbnailWidth:		80,			//缩略图的宽
			thumbnailHeight:		30,			//缩略图的宽
			IsSingleImage:		0	,		//是否是一张长的图片
			imgWidth:			6650,		//长图片的宽度，只有在长图片模式下有效
			LeftToRight:		1,
				//背景图片（body）
			IsBGroll:				0,			//背景是否滚动
			BGUrl:				null,		//背景图片地址数组
				modId:			"1"			//模块id
		}; 
		var options = $.extend(defaults, options);
		options.widths = parseInt(options.widths)+"px";
		options.heights = parseInt(options.heights)+"px";
		return this.each(function() {  
			var screenWidth=parseInt($(window).width());//获取宽度
			var imgWidth=parseInt(options.imgWidth);
			var obj = $(this); 
			var len = $("#li_"+options.modId, obj).length; 
			var end_index = len-1;
			var start_index = 0;
			if(options.IsSingleImage=="1")
			{
				options.widths=screenWidth;
				
				//options.heights ="521px";
				len = Math.floor(imgWidth/screenWidth)+1; 
				end_index=len-1;
			}
			options.effect == "horizontal" ? $(obj).find("#ul_"+options.modId).css('width',(len*parseInt(options.widths))+'px'): $("#ul_"+options.modId,obj).css('width',options.widths);//设置ul宽度
			if(options.IsSingleImage=="1")
			{
				$(obj).css({width:screenWidth+'px',height:options.heights,position:"relative",overflow:'hidden'});
				$("#ul_"+options.modId,obj).css({position:"absolute",left:"0"});
				$("#img_"+options.modId,obj).css({width:"100%",height:options.heights,border:"none",position:"relative"});//"position":"relative"
				
			}
			else
			{
				$(obj).css({width:options.widths,height:options.heights,position:"relative",overflow:'hidden'});
				$("#ul_"+options.modId,obj).css({position:"absolute",left:"0",width:options.widths});//设置初始偏移量
				//options.LeftToRight==1?$("#ul_"+options.modId,obj).css({'margin-left':(0-((len-1)*parseInt(options.widths)))+'px'}):"";
				//$("#ul_"+options.modId,obj).css({position:"absolute",right:"0",'margin-right':0-((len-1)*parseInt(options.widths))+'px'});//0-((len-1)*parseInt(options.widths))+
				$("#img_"+options.modId,obj).css({width:options.widths,height:options.heights,border:"none",float:"left"});
			}
			$(obj).append('<span class="prevsliderBtn" id="'+options.prevId+'_'+options.modId+'"></span><span class="nextsliderBtn" id="'+options.nextId+'_'+options.modId+'"></span><div id="btnList_'+options.modId+'" class="btnList"><div id="altbox_'+options.modId+'">'+$(obj).find("#img_"+options.modId).eq(0).attr("alt")+'</div><div id="btnDiv_'+options.modId+'"  ></div></div>');// class="btnDivclass" 
			$("#altbox_"+options.modId,obj).css({'width':(parseInt(options.widths)-20)+'px','height':options.altHeight,'line-height':options.altHeight,'opacity':options.altOpa,'background':options.altBgColor,'padding':'0 10px 0 10px','position':'absolute','z-index':'-1','bottom':'0','color':options.altFontColor,'text-align':'left','left':'0','padding':'0px 50px 0px 50px'});
			var $btnlens = len;
			var YearArray= new Array("1985","1990","1997","2007","2009","2010","2011","2012"); 
			//YearArray=options.numArray==null?YearArray:options.numArray;//判断是否设置年份YearArray[$btnlens-1]   YearArray[1] YearArray[2]
			//判断年份数组是否为空
			 var BgUrl=new Array();
			if(options.numArray!=null)
			{
				YearArray=options.numArray;
			}
			else
			{
				for(var $i=0; $i<=$btnlens; $i++){
					YearArray[$i]=$i+1;
				}
			}
			//判断年份数组是否为空End
			if(options.BGUrl!=null)
			{
				BgUrl=options.BGUrl;
				$(".table222").attr("style", "background:"+BgUrl[0]+";");
			}
			else
			{
				BgUrl=null;
			}
		if(options.LeftToRight==1){
			for(var $i=$btnlens; $i>=1; $i--){
				//判断切换按钮是否为缩略图
				if(options.numBtnSty == "thumbnail")
				{
				
					$(obj).find("#btnDiv_"+options.modId).append("<li id='year' picindex='"+$i+"'>"+("<img id='thumbnailIMG' src='"+$(obj).find("#img_"+options.modId).eq($i-1).attr("src")+"'></i>")+"</li>");	
					//$("ul li,img",obj).attr("src")
				}
				else //if(options.numBtnSty == "num")
				{
					$(obj).find("#btnDiv_"+options.modId).append("<li id='year' picindex='"+$i+"'>"+(options.numBtnSty == "num" ?YearArray[$i-1]: "<i style='float:left;text-indent:-9999px;'></i>")+"</li>");//设置btnlist的序列
				}
				
			}
		}
		else{
			for(var $i=1; $i<=$btnlens; $btnlens--){
				//判断切换按钮是否为缩略图
				if(options.numBtnSty == "thumbnail")
				{
				
					$(obj).find("#btnDiv_"+options.modId).append("<li id='year' picindex='"+$btnlens+"'>"+("<img id='thumbnailIMG' src='"+$(obj).find("#img_"+options.modId).eq($btnlens-1).attr("src")+"'></i>")+"</li>");	
					//$("ul li,img",obj).attr("src")
				}
				else //if(options.numBtnSty == "num")
				{
					$(obj).find("#btnDiv_"+options.modId).append("<li id='year' picindex='"+(len-$btnlens+1)+"'>"+(options.numBtnSty == "num" ?YearArray[len-$btnlens]: "<i style='float:left;text-indent:-9999px;'></i>")+"</li>");//设置btnlist的序列
				}
				
			}
		}
			//设置缩略图的样式
			if(options.numBtnSty == "thumbnail")
			{
				$(obj).find("#thumbnailIMG").css({'width': (options.thumbnailWidth)+'px','height':(options.thumbnailHeight)+'px','border':'none'});
				$("#thumbnail").css({'width': (options.thumbnailWidth)+'px','height':(options.thumbnailHeight)+'px'});
				$("#thumbnail_act ").css({'width': (options.thumbnailWidth)+'px','height':(options.thumbnailHeight)+'px'});
				$("#thumbnail_hover").css({'width': (options.thumbnailWidth)+'px','height':(options.thumbnailHeight)+'px'});
				$("#btnList").css('height',(parseInt(options.thumbnailHeight)+2)+'px');//
			}
			//按钮样式为num，设置btnDivclass，控制图片数量太多的样式
			if(options.numBtnSty == "num")
			{
				(!$("#btnDiv_"+options.modId).hasClass("btnDivclass")) ? $("#btnDiv").attr("class","btnDivclass") : "";
				//$(obj).find("ul li img").eq($btnlens-1)
				
			}
			
			$("#btnList_"+options.modId,obj).css({'width':(parseInt(options.widths)-20)+'px'});
			
			options.numBtnSty == "num" ? $("#btnList_"+options.modId+" li",obj).addClass("btnSty") : $("#btnList_"+options.modId+" li",obj).addClass(options.numBtnSty);
			//单独控制前进后退样式
			if(options.preBtnStyle==null)
			{
				$('#'+options.prevId+'_'+options.modId,obj).css({'position':'relative','top':(parseInt(options.heights)-parseInt($("#btnList_"+options.modId).height()))+'px'});//+$(".sliderBtn",obj).height()
				$('#'+options.prevId+'_'+options.modId,obj).css({'left':'0', 'float':'left'});
			}
			else
			{
				$('#'+options.prevId+'_'+options.modId,obj).attr('style',options.preBtnStyle);
			}
			if(options.nexBtnStyle==null)
			{
				$("#"+options.nextId+'_'+options.modId,obj).css({'position':'relative','top':(parseInt(options.heights)-parseInt($("#btnList_"+options.modId).height()))+'px'});//+$(".sliderBtn",obj).height()
				$("#"+options.nextId+'_'+options.modId,obj).css({'background-position':'right top', 'right':'0', 'float':'right'});
			}
			else
			{
				
				
				$("#"+options.nextId+'_'+options.modId,obj).attr('style',options.nexBtnStyle);
			}
			$(".nextsliderBtn",obj).css("opacity",1).hover(function(){
				$(this).stop(true,false).animate({"opacity":"0.5"},300);

			},function(){
				$(this).stop(true,false).animate({"opacity":"1"},300);

			});
			$(".prevsliderBtn",obj).css("opacity",1).hover(function(){
				$(this).stop(true,false).animate({"opacity":"0.5"},300);

			},function(){
				$(this).stop(true,false).animate({"opacity":"1"},300);

			});
			//把前进后退是否显示统一控制改为单独控制
			//options.preNexBtnShow == 0 ? $(".sliderBtn",obj).hide() : "";
			options.preBtnShow == 0 ? $('#'+options.prevId+'_'+options.modId,obj).hide() : "";
			options.nexBtnShow == 0 ? $("#"+options.nextId+'_'+options.modId,obj).hide() : "";
 			options.altShow == 0 ? $(obj).find("#altbox_"+options.modId).hide() : "";
			options.numBtnShow == 0 ? $("#btnList_"+options.modId,obj).hide() : "";
			function trigger_eff(attr,fn_p,ActWhere){//attr是next或者pres
				var p;
				fn_p ? p = fn_p : p = animates(attr,ActWhere);//当fn_p=0，p=0，否则通过animates计算偏移量
				$("#ul_"+options.modId,obj).trigger("fn_"+options.modId+options.effect,[p]);//激活ul绑定的函数
			}
			$(".prevsliderBtn",obj).click(function(){
				
				var attr_result = $(this).attr("id").substring(0,4);
				trigger_eff(attr_result);
			});

			$(".nextsliderBtn",obj).click(function(){
				
				var attr_result = $(this).attr("id").substring(0,4);
				trigger_eff(attr_result);
			});

			var $btn = $(obj).find("#btnList_"+options.modId+" li");
			(function(btn){
				btn.hover(function(){
					(!$(this).hasClass(options.numBtnSty+"_act")) ? $(this).attr("class",options.numBtnSty+"_hover") : "";
				},function(){
					(!$(this).hasClass(options.numBtnSty+"_act")) ? $(this).attr("class",options.numBtnSty) : "";	
				});
			
			})($btn);
			function defBtnBgColor(){
				$btn.attr("class",options.numBtnSty);
			}
			defBtnBgColor();
			if(options.LeftToRight==1)
				$("#btnList_"+options.modId+" li:last-child",obj).attr("class",options.numBtnSty+"_act");
			else
				$("#btnList_"+options.modId+" li:first-child",obj).attr("class",options.numBtnSty+"_act");
			var spaces;
			$btn.click(function(){
				defBtnBgColor();
				
				start_index = (start_index > end_index) ? 0 :parseInt( $(this).attr("picindex"))-1;//当li的picindex为倒序时-1
				var spaces = (function(){
					return options.effect == "horizontal" ? start_index * parseInt(options.widths) : start_index * parseInt(options.heights);
				})();
				spaces = spaces == 0 ? spaces : "-"+spaces;//计算得到偏移量
				trigger_eff("next",parseInt(spaces)+"px",1);
				
				$(this).attr("class",options.numBtnSty+"_act");
			});
			function actFun(ranking){
				defBtnBgColor();
				//$("#btnList li",obj).eq(ranking).attr("class",options.numBtnSty+"_act");
				$("#btnList_"+options.modId+" li",obj).each(function(){
					if( $(this).attr("picindex")==ranking)
						$(this).attr("class",options.numBtnSty+"_act");
					});
			}
			var animates = function(attr,ActWhere){
				attr == "next" ? (start_index = (start_index >= end_index) ? 0 : start_index+1) : 0;
				attr == "prev" ? (start_index = (start_index <= 0) ? end_index : start_index-1) : 0;				
				ActWhere == 1 ? start_index = 0 : actFun(start_index+1);
				AltFun(start_index);
				backgroundFun(start_index);
				var w_space = (start_index * parseInt(options.widths)*-1); //偏移量计算
				var h_space = (start_index * parseInt(options.heights)*-1);
				return options.effect == "horizontal" ? w_space : h_space;
			}
			$("#ul_"+options.modId,obj).bind("fn_"+options.modId+options.effect,function(event,extent){
					if(options.IsSingleImage=="1")
				{
					var temp=0-parseInt(extent);
					options.effect == "horizontal" ? $(obj).find("#img_"+options.modId).animate({"right":temp+"px"},options.speeds):$(this).css();
				}
				else
				{
					//alert(extent);
					//var temp=((len-1)*parseInt(options.widths))+parseInt(extent);
					//alert(temp);
					//options.effect == "horizontal" ? options.noEffect == 1 ? $("#ul_"+options.modId,obj).eq(1).css("margin-right",'-'+temp) : ((start_index == 0 || start_index == end_index) && options.starEndNoEff == 1 ) ? $("#ul_"+options.modId).css("margin-right",'-'+temp) : $("#ul_"+options.modId).animate({marginRight:'-'+temp},options.speeds) : (options.effect == "none" || (options.starEndNoEff == 1 && (start_index == 0 || start_index == end_index))) ? $("#ul_"+options.modId).css("margin-top",extent) : options.effect == "fade" ? $("#ul_"+options.modId).hide(1).animate({marginTop:extent},30).fadeIn("slow") : $("#ul_"+options.modId).animate({marginTop:extent},options.speeds);
					
					//options.LeftToRight==1?(extent=0-(parseInt(extent)+(len-1)*parseInt(options.widths))):"";
					options.effect == "horizontal" ? options.noEffect == 1 ? $("#ul_"+options.modId,obj).eq(1).css("margin-left",extent) : ((start_index == 0 || start_index == end_index) && options.starEndNoEff == 1 ) ? $("#ul_"+options.modId).css("margin-left",extent) : $("#ul_"+options.modId).animate({marginLeft:extent},options.speeds) : (options.effect == "none" || (options.starEndNoEff == 1 && (start_index == 0 || start_index == end_index))) ? $("#ul_"+options.modId).css("margin-top",extent) : options.effect == "fade" ? $("#ul_"+options.modId).hide(1).animate({marginTop:extent},30).fadeIn("slow") : $("#ul_"+options.modId).animate({marginTop:extent},options.speeds);
					AltFun(start_index);
					backgroundFun(start_index);
				}
			});
			if(options.autoplay == 1){
        		var picTimer;
				$(obj).hover(function(){
					clearInterval(picTimer);
				},function(){
					picTimer = setInterval(function(){
						trigger_eff("next");
					},options.delays); 
				}).trigger("mouseleave");
			}
			function AltFun(index){
				var alt = $(obj).find("#img_"+options.modId).eq(index).attr("alt");
				$(obj).find("#altbox_"+options.modId).text(alt);	
			}
			//背景图片随着前景滚动
			function backgroundFun(index)
			{
				if(options.IsBGroll=="1")
				{
				
				if(BgUrl!=null)
				{
					$(".table222").attr("style", "background:"+BgUrl[index]+";");
					
				}
				}
			}
		});
	};
})(jQuery);