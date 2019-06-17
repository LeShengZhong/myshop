//清除现有的控件的错误消息
function ClearErrorMsg()
{
	$("div.msg").each(function(){$(this).html('');$(this).hide();});
}
//弹出窗口
function Popup(name,top,url)
{
window.open (url, name, 'height=100, width=300, top='+top+', left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
}
//动态创建Loading的层
function CreateLoadingDiv()
{
	$('body').ajaxStart(function(){showPopWin();}).ajaxStop(function(){hidePopWin();}).ajaxError(function(r,s){alert('获取信息时出现错误');});
}
//自动调用上面这个函数
var showLoadding=true;
$(function(){
	if(showLoadding){
		CreateLoadingDiv();
	}
}); 

//将一个层在当前页居中显示
function ShowDivInCenter(div,width,height)
{
	var dl = document.getElementById(div);
	dl.style.left=(document.documentElement.clientWidth/2-width/2)+"px";
	dl.style.top=(document.documentElement.clientHeight/2-height/2+document.documentElement.scrollTop)+"px";
	dl.style.display='block';
}

//显示操作完成的提示
function ShowUserAlert(info)
{
	$('#UserAlert').html(info);
	$('#UserAlert').show(1);
	setTimeout('HideUserAlert()',3000);
}
function HideUserAlert()
{
	$('#UserAlert').html('');
	$('#UserAlert').hide(1);
}

//发送通用的POST请求。
function SendAjaxPost(url, frm, checkselect)
{
	ClearErrorMsg();
	if(checkselect && !CheckGroupBox(frm))
	{
		alert("请至少选择一条记录。");
		return false;
	}
	//$.post(url, $('#'+frm).formSerialize(),  ShowResultOld);
	if(frm)
		$.post(url, $('#'+frm).formSerialize(),  ShowResultOld);
	else
		$.get(url,ShowResultOld);
}
//Ajax返回正确的时候通用的处理方法，将返回的字符串以|切分成数组，第一位为标志位
//标志位为0，表示执行成功，跳转到下一个Url
//标志位为1，表示执行错误，以隐藏层显示错误信息
//标志位为2，直接显示后续的错误消息
//标志位为3，把后续的消息作为一个JS函数来执行
//如果解析出错，直接显示所有得到的消息。
function ShowResultOld(t)
{
	var r = new Array();
	r = t.split("|");
	if(r[0]=="0")
	{
		window.location=r[1];
	}
	else	if(r[0]=="1")
	{
		for(i=1;i<r.length;i++)
		{
			$("#e_"+r[i]).html(r[i+1]);
			$("#e_"+r[i]).show();
			i = i+1;
		}
	}
	else if(r[0]=="2")
	{
		alert(r[1]);
	}
	else if(r[0]=="3")
	{
		eval(r[1]);
	}
	else
	{
		alert(t);
	}
}


//获取某个页面内容显示在中央层，用来完成在当前页编辑用户信息
function ShowPageInDiv(url)
{
	var time = new Date().getTime();
	if(url.indexOf("?")!=-1)
	{
		url += "&random="+time;
	}else{
		url += "?random="+time;
	}
	//$('#PageDiv').load(url, null, function(){$('#PageDiv').html('<a href="javascript:;" onclick="$(\'#PageDiv\').hide();" class="closePage">&nbsp;</a>'+$('#PageDiv').html());document.getElementById('PageDiv').style.top=(document.documentElement.scrollTop+100)+'px';$('#PageDiv').show();});

	$.get(url,function(data){
		$('#PageDiv').html('<a href="javascript:;" onclick="$(\'#PageDiv\').hide();" class="closePage">&nbsp;</a>'+data);
		document.getElementById('PageDiv').style.top=(document.documentElement.scrollTop+100)+'px';
		$('#PageDiv').show();
	});

}
//将页面显示在自定义的层里，用在页面中包含多个区块的情况下。
function ShowPageInPlace(url, div)
{
	var time = new Date().getTime();
	if(url.indexOf("?")!=-1)
	{
		url += "&random="+time;
	}else{
		url += "?random="+time;
	}
	 $('#'+div).show();
 	$('#'+div).load(url);
}

//给Checkbox提供全选功能
function SelectGroupBox(self)
{
	if(self.name=='SelectAll'){
		var all = self.checked;
		$("input[@name=SelectID]").each(function(){$(this).attr('checked',all);});
	}else{
		var all = true;
		$("input[@name=SelectID]").each(function(){if(!$(this).attr('checked'))all=false;});
		$("input[@name=SelectAll]").attr('checked', all);
	}
}
//检查Checkbox至少要选中一条
function CheckGroupBox(frm)
{
	var one = false;
	$("input[@name=SelectID]").each(function(){if($(this).attr('checked'))one=true;});
	return one;
}

function UpdateValidateCode()
{
	var img = document.getElementById('ValidateCodeImg');
	var time=new Date().getTime();
	img.src = '/Universal/ValidateCode.aspx?random='+time;
}

function ScoreToArticle(aid)
{
	var time = new Date().getTime();
	$.get('/Universal/Do_AddArticleScore.aspx?aid='+aid+'&random='+time, null, function(t){eval(t)});
}
function SoftScoreToArticle(aid)
{
	var time = new Date().getTime();
	$.get('/Do_AddArticleScore.aspx?aid='+aid+'&random='+time, null, function(t){eval(t)});
}
function AddArticleScore(aid)
{
	$('#Score'+aid).html($('#Score'+aid).html()-1+2);
}

function CopyText(txt)
{
   clipboardData.setData('text',(txt));
   alert('链接已经复制到剪切版');
}
function CopyThisUrl()
{
    var clipBoardContent = window.location.toString();
	window.clipboardData.setData("Text",clipBoardContent);
	alert('链接已经复制到剪切版', '确定', 'succ');
}


function OpenSearch(div, url)
{
	var time = new Date().getTime();
	if(url.indexOf("?")!=-1)
	{
		url += "&div="+div+"&random="+time;
	}else{
		url += "?div="+div+"&random="+time;
	}
	$('#'+div).load(url,null,function(t){$('#'+div).show();});
}
function AddIDToTxt(tag, tid)
{
	var spliter=',';
	var txt = $('#'+tid).val();
	if(txt.length==0){
		$('#'+tid).val(tag);
	}else{
		txt = spliter+txt+spliter;
		if(txt.indexOf(spliter+tag+spliter)==-1)
		{
			$('#'+tid).val($('#'+tid).val()+spliter+tag);
		}else{
			txt = txt.replace(spliter+tag, '');
			txt += tag;
			txt = txt.replace(spliter, '');
			$('#'+tid).val(txt);
		}
	}
}

function addBookmark(title,url) {
	if (window.sidebar) { 
		window.sidebar.addPanel(title, url,""); 
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else if( window.opera && window.print ) {
		return true;
	}
}


var userid=0;
var username="";
function ShowUserInfo()
{
	if(userid>0)
	{
		document.write(username+'<span class="txz">，欢迎回来！</span> <a href="<%=AMT.Sharing.Common.ConfigHelper.SitePassportUrl%>logoff.aspx?url='+escape(window.location.toString())+'" class="logout" target="_top"><span>退出</span></a><span class="helpcenter">&nbsp;<a href="<%=AMT.Sharing.Common.ConfigHelper.SiteWwwUrl%>help/help_login.aspx#q5" target="_top">帮助中心</a></span>');
	}
	else
	{
		document.write('<form name="FormLogin" action="<%=AMT.Sharing.Common.ConfigHelper.SitePassportUrl%>ShowOrgUserInfo.aspx" method="post" target="_top">');
		document.write('<span class="txz">畅享通行证</span><input type="text" name="username" class="textbox" size="16" />&nbsp;密码<input type="password" name="password" class="textbox" size="16"/>&nbsp;<input type="submit" value="登录" class="btn_org"/>&nbsp;');
		document.write('<input type="hidden" name="url" value="'+window.location.toString()+'" />&nbsp;<a href="<%=AMT.Sharing.Common.ConfigHelper.SitePassportUrl%>Register.aspx" target="_top"">注册</a><span class="helpcenter">&nbsp;<a href="<%=AMT.Sharing.Common.ConfigHelper.SiteWwwUrl%>help/help_login.aspx#q5" target="_top">帮助中心</a></span>');
		document.write('</form>');
	}
}

//改变文字大小
function setFontSize(px){
    var t=document.getElementsByTagName("td");
	 for (var i = 0; i < t.length; i++) { 
		if(t[i].className=="articlecontent"){
			t[i].style.fontSize=px+"px";
		}
 	 }
}

//切换Tab
function ChangeModuleTab(id, mid)
{
	$('.div_'+id).hide();
	$('#div_'+id+'_'+mid).show();
	$('.diva_'+id).removeClass('on');
	$('#diva_'+id+'_'+mid).addClass('on');
	$('.diva_'+id).parent().removeClass('on');
	$('#diva_'+id+'_'+mid).parent().addClass('on');
}