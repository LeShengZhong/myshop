//纳米说滚动
function startmarquee(elementID,h,n,speed,delay){
	var t = null;
	var box = '#' + elementID;
	$(box).hover(function(){
		clearInterval(t);
		}, function(){
		t = setInterval(start,delay);
	});
	function start(){
		$(box).children('ul:first').animate({marginTop: h},speed,function(){
			$(this).css({marginTop:'-230px'}).find("li:last").prependTo(this);
		})
	}
}


$(function(){
//首焦
$('#homeslide').slides({
	preload: true,
	play: 3000,
	pause: 2000,
	effect: 'fade',
	crossfade: true,
	hoverPause: true
});
//首页50% OFF轮播
$('#sectionitems').slides({
	generatePagination: false,
	generateNextPrev: true
});
//鼠标上浮有黑底边框出现
$('#home .mainbox td').mouseover(function(){
	$('#home .mainbox td').removeClass('hover');
	$(this).addClass('hover');
});
//热销排行榜
$(".sidebar_list li").mouseover(
	function(){
		$(this).parents(".sidebar_list").find("a.current").removeClass("current");
		$(this).children('a:eq(0)').addClass("current");
		$(this).parents(".sidebar_list").find(".imgdv").hide();
		$(this).find('.imgdv').show();
	}
);
//热门品牌Tab
if ($('#hotbrandtabs').length > 0)
{
	$('#hotbrandtabs a').hoverIntent(function(){
	var $this = $(this);
	setTimeout(function(){
		var index = $this.index();
		$('#hotbrandtabs a').removeClass('fix');
		$('#hotbrandtabs a').removeClass('current');
		$this.addClass('current');
		$this.prev('a').addClass('fix');
		$('#hotbrand_con table').hide();
		$('#hotbrand_con table').eq(index).show();
	
	},100);
	
	},function(){
		return;
	});
}

//纳米说
startmarquee('maijia_say',0,1,500,5000);
$('#maijia_say').load("/comment/mjsForIndex").trigger('mouseout');

});

function Subscription(n)
{
	if (n == 1)
		openWin('邮箱订阅','http://eshop.inoherb.com/Dialog/EmailSubscription.aspx',400);
	else
		openWin('短信订阅','http://eshop.inoherb.com/Dialog/SmsSubscription.aspx',400,250);
}




function showdiv(divnum,divbefor){
	for(i=1;i<=divnum;i++){
		try{
			if(i==divbefor){
				document.getElementById('sub'+i).style.display="block";
				document.getElementById('d'+i).className ="left_d";
			}else{
				document.getElementById('sub'+i).style.display="none";
				document.getElementById('d'+i).className ="left_menu_1";
			}
		}catch(e){ }
	}
	
}

