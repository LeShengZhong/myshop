// JavaScript Document
function setFontSize(px){

    var t=document.getElementsByTagName("div");
	 for (var i = 0; i < t.length; i++) { 
		if(t[i].className=="content_art"){
			t[i].style.fontSize=px+"px";
		}
 	 }
}
$(function(){
	var tmpInterval;
	var delay = 150;
	$('#search').find("dl").each(function(){
		$(this).find("dt:first").toggleClass("active").next().toggle().end().end().find("dt").mouseover(function(){
			tmpref = this;
			clearTimeout(tmpInterval);
			tmpInterval = setTimeout("loadTab(tmpref)", delay);
		}).mouseout(function(){
			clearTimeout(tmpInterval);
		});
	});
});

function loadTab(e){
	$(e).parent().find(".active").toggleClass("active").next().toggle();
	$(e).blur().toggleClass("active").next().toggle();
}
function AlbumDrawImage(ImgD,size){ 
var image=new Image(); 
image.src=ImgD.src; 
	if (image.width > image.height){
		ImgD.width=size; 
		ImgD.height=(image.height*size)/image.width; 
	}else{
		ImgD.height=size; 
		ImgD.width=(image.width*size)/image.height;
	}
}
function copyToClipBoard()
{
 var clipBoardContent=window.document.title;
 clipBoardContent+='\r\n' + window.document.location.href;
 window.clipboardData.setData("Text",clipBoardContent);
 alert("复制成功，请粘贴到你的QQ/MSN上推荐给你的好友！\r\n\r\n内容如下：\r\n" + clipBoardContent);
}

