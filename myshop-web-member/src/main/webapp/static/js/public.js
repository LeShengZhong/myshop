var isMoveLoadding=false;
function ShowLoadding(){
	var div = document.getElementById('divLoadding');
	if(div){}
	else{
		var body = document.getElementsByTagName('body').item(0);
        div = document.createElement('div');
        div.id = "divLoadding";
		div.innerHTML="正在执行，请稍候……";
		body.appendChild(div);
	}
	isMoveLoadding=true;
	moveLoadding();
}
function moveLoadding(){
	var div = document.getElementById('divLoadding');
	if (isMoveLoadding){
        div.style.right = '0px';
        div.style.top = document.documentElement.scrollTop+'px';
		div.style.display = '';
        setTimeout('moveLoadding()', 300);
	}
}
function HideLoadding(){
	isMoveLoadding=false;
	var div = document.getElementById('divLoadding');
	div.style.display = 'none';
}
function ClearErrorMsg(){
	$("div.msg").each(function(){$(this).html('');$(this).hide();});
}
//给Checkbox提供全选功能
function SelectGroupBox(self, prefix){
	if(!prefix){prefix='';}
	if(self.name=='SelectAll'+prefix){
		var all = self.checked;
		$("input[name='SelectID"+prefix+"']").each(function(){$(this).attr('checked',all);});
	}else{
		var all = true;
		$("input[name='SelectID"+prefix+"']").each(function(){if(!$(this).attr('checked'))all=false;});
		$("input[name='SelectAll"+prefix+"']").attr('checked', all);
	}
}
//检查Checkbox至少要选中一条
function IsCheckedOne(frm,prefix){
	if(!prefix){prefix='';}
	var one = false;
	$("input[name='SelectID"+prefix+"']").each(function(){if($(this).attr('checked'))one=true;});
	return one;
}
function AjaxPost(url, frm, cnfirm, needchecked){
	ClearErrorMsg();
	var doit=true;
	if(needchecked==true){
		if(!IsCheckedOne()){
			alert('请至少选择一条记录');
			doit = false;
			return;
		}
	}
	if(cnfirm==true){
		if(!confirm('你确定要执行该操作？')){
			doit=false;
		}
	}
	if(doit){
		Ajax(url, frm, 'POST', ShowResult, true);
	}
}
function ShowResult(result){
	var msg = eval('(' + result + ')');
    if (msg.method != undefined) {
        switch (msg.method) {
            case "eval":
                eval(msg.data);
                break;
            case "alert":
                alert(msg.data);
                break;
            case "goto":
                window.location.href = msg.data;
                break;
            case "send_goto":
                var data = eval('(' + msg.data + ')');
                alert(data.message);
                window.location.href = data.url;
                break;
            case "reload":
                alert(msg.data);
                location.reload();
                break;
            case "error":
                var data = eval('(' + msg.data + ')');
                var bo = true;
                for (var o in data) {
                    $('#e_'+o).html(data[o]).show();
                }
                break;
        }
    }
}
function AjaxGet(url, func){
	Ajax(url, '', 'GET', func, true);
}
function AjaxLoad(url, div, func) {
	Ajax(url, div, 'LOAD', function(data){$('#'+div).html(data);if(func){func(data);}}, false);
}
function Ajax(url, param, type, func, showloadding){
	if(showloadding){ShowLoadding();}
    if (url.indexOf('?') == -1) {
        url += "?";
    }
    else
        url += "&";
	url += "timeStamp=" + new Date().getTime()

	if(type=='GET'||type=='LOAD'){
		$.ajax({ url: url,
			type: 'GET',
			cache: false,
			timeout: 200000,
			error: function() { if(param!=''){$('#param').html('数据加载失败');}else{alert('数据加载失败，可能是网络连接问题或者服务器错误。'); }},
			success: func,
			complete:function(){if(showloadding){HideLoadding();}}
		});
	}else if(type=='POST'){
		$('.submit').each(function(){$(this).attr('title',$(this).html());$(this).html('请稍候');$(this).attr('disabled','disabled');});
		$.ajax({ url: url,
			type: 'POST',
			data: $('#'+param).serialize(),
			cache: false,
			timeout: 200000,
			error: function() { alert('数据加载失败，可能是网络连接问题或者服务器错误。'); },
			success: func,
			complete:function(){if(showloadding){HideLoadding();}$('.submit').each(function(){$(this).html($(this).attr('title'));$(this).attr('disabled',false);});}
		});
	}
}

//弹出dialog
var dialogTitle;
function openWin(title, param,width,height) {
    if (document.getElementById('dialog')) {
        $("#dialog").dialog("destroy").remove();
    }
    AjaxGet(param, function(t){
		var body = document.getElementsByTagName('body').item(0);
		var div = document.createElement('div');
		div.id = "dialog";
		div.innerHTML = t;
		body.appendChild(div);
		$("#dialog").dialog({ title: title, width: width == undefined ? 'auto' : width, height: height == undefined ? 'auto' : height, resizable: false,bgiframe: false, modal: true });
	});
}

//===============================ctrl+enter
function isKeyTrigger(e, keyCode) {
    var argv = isKeyTrigger.arguments;
    var argc = isKeyTrigger.arguments.length;
    var bCtrl = false;
    if (argc > 2) {
        bCtrl = argv[2];
    }
    var bAlt = false;
    if (argc > 3) {
        bAlt = argv[3];
    }

    var nav4 = window.Event ? true : false;

    if (typeof e == 'undefined') {
        e = event;
    }

    if (bCtrl &&
        !((typeof e.ctrlKey != 'undefined') ?
            e.ctrlKey : e.modifiers & Event.CONTROL_MASK > 0)) {
        return false;
    }
    if (bAlt &&
        !((typeof e.altKey != 'undefined') ?
            e.altKey : e.modifiers & Event.ALT_MASK > 0)) {
        return false;
    }
    var whichCode = 0;
    if (nav4) whichCode = e.which;
    else if (e.type == "keypress" || e.type == "keydown")
        whichCode = e.keyCode;
    else whichCode = e.button;

    return (whichCode == keyCode);
}

function ctrlEnter(e) {
    var returnvalue = false;
    var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
    if (ie) {
        if (event.ctrlKey && window.event.keyCode == 13) {
            returnvalue = true;
        }
    } else {
        if (isKeyTrigger(e, 13, true)) {
            returnvalue = true;
        }
    }
    return returnvalue;
}
var flag = false;
function DrawImage(ImgD, w, h) {
    var w = w;
    var h = h;
    var image = new Image();
    image.src = ImgD.src;
    if (image.width > 0 && image.height > 0) {
        flag = true;
        if (image.width / image.height >= w / h) {
            if (image.width > w) {
                ImgD.width = w;
                ImgD.height = (image.height * w) / image.width;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }

        }
        else {
            if (image.height > h) {
                ImgD.height = h;
                ImgD.width = (image.width * h) / image.height;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }

        }
    }
}
	
		//打开窗口
function showDialog(psUrl,piWidth,piHeight,psFrame){
    var iScreenWidth=screen.availWidth;
    var iScreenHeight=screen.availHeight;
    var iLeft=0;
    var iTop=0;
    iLeft=(iScreenWidth-piWidth)/2;
    iTop=(iScreenHeight-piHeight)/2;
    var sFeatures="resizable=yes,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,width="+piWidth;
    sFeatures+=",height="+piHeight+",left="+iLeft+",top="+iTop;
    window.open(psUrl,psFrame,sFeatures);
}


//判断是否手机浏览器
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
function isMobile() { //return false;
    if (browser.versions.mobile || browser.versions.android)
        return true;
    return false;
}
if(isMobile()){
    //产品页
    if(location.href.indexOf('')>=0){
        var params_pid = '';
        try {
            params_pid = location.href.toLowerCase().match(/goods\/\d+/)[0];
            params_pid = params_pid.match(/\d+/)[0];
        } catch (e) { }
        if(parseInt(params_pid)>=0)
            location.href = "https://m.xtep.com.cn/product/detail.aspx?id=" + params_pid;
	else
            location.href="https://m.xtep.com.cn";
    }else
        location.href="https://m.xtep.com.cn";
}

function showcate(cid){
	hidecate();
	$('.divcate_'+cid).show();
}
function hidecate(){
	$('.divcates').hide();
}