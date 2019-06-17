//hover延迟并解决冒泡BUG事件
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);};})(jQuery);

//禁止mouseover冒泡事件开始  #邵盼 2011-08-08
function checkHover(e,target){if(getEvent(e).type=="mouseover"){return!contains(target,getEvent(e).relatedTarget||getEvent(e).fromElement)&&!((getEvent(e).relatedTarget||getEvent(e).fromElement)===target);}else{return!contains(target,getEvent(e).relatedTarget||getEvent(e).toElement)&&!((getEvent(e).relatedTarget||getEvent(e).toElement)===target);};};function getEvent(e){return e||window.event;};function contains(parentNode,childNode){if(parentNode.contains){return parentNode!=childNode&&parentNode.contains(childNode);}else{return!!(parentNode.compareDocumentPosition(childNode)&16);};};
//禁止冒泡事件结束

function lazyload(option) {
    var settings = {
        defObj: null,
        defHeight: -200
    };
    settings = $.extend(settings, option || {});
    var defHeight = settings.defHeight,
    defObj = (typeof settings.defObj == "object") ? settings.defObj.find("img") : $(settings.defObj).find("img");
    var pageTop = function() {
        return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - settings.defHeight
    };
    var imgLoad = function() {
        defObj.each(function() {
            if ($(this).offset().top <= pageTop()) {
                var original = $(this).attr("original");
                if (original) {
                    $(this).attr("src", original).removeAttr("original").hide().fadeIn();
                }
            }
        })
    };
    imgLoad();
    $(window).bind("scroll",function() {
        imgLoad()
    })
}
function back2top(){
$(document.body).append("<div id='back2top' style='position:fixed;bottom:35px;right:36px;cursor: pointer;'><table width='65'  border='0' cellpadding='0' cellspacing='0' class='kefu'><tr><td><a href='http://club.inoherb.com/'><img src='images/Clubicon.gif'  ></a></td></tr><tr><td><a href='http://eshop.inoherb.com/Product/ShopCart.aspx'><img src='images/shopcart.gif'  ></a></td>	</tr><tr><td><a href='http://crm2.qq.com/page/portalpage/wpa.php?uin=4008890208&cref=file%3A%2F%2F%2FD%3A%2Ftxt%2F%25E5%25AE%25A2%25E6%259C%258D%2Fkf.html&ref=undefined&pt=kf&f=1&ty=1&ap=&as=&aty=1&a=1001&dm=undefined&sv=4&sp='><img src='images/seller.gif' ></a></td></tr><tr><td><a href='http://crm2.qq.com/page/portalpage/wpa.php?uin=4008890208&cref=file%3A%2F%2F%2FD%3A%2Ftxt%2F%25E5%25AE%25A2%25E6%259C%258D%2Fkf.html&ref=undefined&pt=kf&f=1&ty=1&ap=&as=&aty=1&a=1004&dm=undefined&sv=4&sp='><img src='images/service.gif'></a></td></tr><tr><td><img src='images/weixin.jpg'></td></tr><tr><td><img src='images/top.gif' class='gtop'></td></tr></table></div>");	
$(".gtop").click(function() {
		$('body,html').animate({
			scrollTop : 0
		}, 200);
		return false;
	});
}

 function AddFavorite(sURL, sTitle) {   
    try {   
        window.external.addFavorite(sURL, sTitle);   
    } catch (e) {   
        try {   
            window.sidebar.addPanel(sTitle, sURL, "");   
        } catch (e) {   
            alert("加入收藏失败，请使用Ctrl+D进行添加");   
        }   
    }   
}




//导航栏
$('#header .header_bottom li.current').prev('li').addClass('fix');
$('#header .header_bottom li').hover(
	function(){
		$('#header .header_bottom li').removeClass('hover');
		$(this).prev('li').addClass('hover');
	},
	function(){
		$(this).prev('li').removeClass('hover');
	}
);
//页头搜索框
$('#Search_text').focus(function(){
	$(this).addClass('focus');
	if ($.trim($(this).val()) == '输入关键字') $(this).val('');
});
$('#Search_text').blur(function(){
	if ($.trim($(this).val()) == '')
	{
		$(this).removeClass('focus');
		$(this).val('输入关键字');
	}
});
$('#search_fm').submit(function(){
	if ($.trim($('#search_fm input.text').val()) == '输入关键字') return false;
});
//页头搜索框 end

// 页头品牌大全hover效果
if ($('#popupitem').length > 0){
	$('#popupitem').hoverIntent(
		function(){
			$('#popupitem a.allbrand').addClass('brandactive');
			$('#popupitem .popupitem_con').hide();
			$('#popupitem .popupitem_con').eq(0).show();
			$('#popupitem .point_brand, #popupitem .propitem, #popupitem .fix').show();
		},
		function(){
			$('#popupitem ul.category a').removeClass('current');
			$('#popupitem ul.category a').eq(0).addClass('current');
			$('#popupitem .allbrand').removeClass('brandactive');
			$('#popupitem .point_brand, #popupitem .propitem, #popupitem .fix').hide();
		}
	);	
	$('#popupitem ul.category a').click(function(){
		var index = $('#popupitem ul.category a').index(this);
		$('#popupitem ul.category a').removeClass('current');
		$(this).addClass('current');
		$('#popupitem .popupitem_con').hide();
		$('#popupitem .popupitem_con').eq(index).show();
		return false;
	});
}

// 页头品牌大全(复制2)hover效果
if ($('#popupitem_2').length > 0){
	$('#popupitem_2').hoverIntent(
		function(){
			$('#popupitem_2 a.allbrand').addClass('brandactive');
			
			$('#popupitem_2 .point_brand_2, #popupitem_2 .propitem_2, #popupitem_2 .fix').show();
		},
		function(){
			
			$('#popupitem_2 .allbrand').removeClass('brandactive');
			$('#popupitem_2 .point_brand_2, #popupitem_2 .propitem_2, #popupitem_2 .fix').hide();
		}
	);	
	
}


$(function(){

//延迟加载页面上的图片
lazyload({defObj:"#wrapper"});

//回到页面顶部
//back2top();	
	
$.ajaxSetup ({
cache: false //close AJAX cache
});




//注册边，5元优惠券
$('#reg_song').hoverIntent(
	function(){
		$(this).text('注册即送5元优惠券').animate({width:"120"},300);	
	},function(){
		var $reg_song=$(this);
		$reg_song.animate({width:"15"},300);
		setTimeout(function(){$reg_song.text('送')},300);
	}
);	

//更新购物车数量


//页头我的nala上浮效果

		
})