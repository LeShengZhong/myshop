<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>登录页面 ：登录特步官方商城</title>
    <style>
        .icon-163, .icon-alipay, .icon-baidu, .icon-qq, .icon-renren, .icon-sina, .icon-wechat, .icon-weibo {
            background: rgba(0, 0, 0, 0) url("/static/images/un_login_third.png") no-repeat scroll 0 0;
            display: inline-block;
            vertical-align: middle;
        }
        .icon-163, .icon-alipay, .icon-baidu, .icon-qq, .icon-renren, .icon-sina, .icon-wechat {
            height: 0;
            overflow: hidden;
            padding-top: 30px;
            width: 30px;
        }
        .icon-alipay {
            background-position: 0 0;
        }
        .icon-alipay:hover {
            background-position: 0 -35px;
        }
        .icon-qq {
            background-position: -35px 0;
        }
        .icon-qq:hover {
            background-position: -35px -35px;
        }
        .icon-baidu {
            background-position: -70px 0;
        }
        .icon-baidu:hover {
            background-position: -70px -35px;
        }
        .icon-sina {
            background-position: -105px 0;
        }
        .icon-sina:hover {
            background-position: -105px -35px;
        }
        .icon-wechat {
            background-position: -140px 0;
        }
        .icon-wechat:hover {
            background-position: -140px -35px;
        }
        .icon-163 {
            background-position: -175px 0;
        }
        .icon-163:hover {
            background-position: -175px -35px;
        }
        .icon-renren {
            background-position: -210px 0;
        }
        .icon-renren:hover {
            background-position: -210px -35px;
        }
    </style>
<jsp:include page="../includes/source.jsp"/>
    <link href="/static/css/login.css" rel="stylesheet" type="text/css" />

    <title>

    </title></head>
<body>
<div class="indexbg">

    <link rel="stylesheet" href="css/kjt.css">
    <div id="layout_wrap" class="indexbg">

        <div class="table5">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr valign="top">
                    <!--header-->
                    <jsp:include page="../includes/header.jsp"/>
                    <!--导航栏-->
                    <jsp:include page="../includes/menu.jsp"/>

                </tr>
            </table>
        </div>


    </div>
    <script>
        $(function() {
            $('#headshopcountspan').html(0);
        })
    </script>

    <div id="loginbg">


        <div class="ov login-main">
            <div class="login-box">
                <h2 class="Myorder2"><a href="javascript:;" onclick="$('#registerform').show();">免费注册>></a>用户登录</h2>

                <form id="userloginform">
                    <div class="login-box-inner" id="memberlogin">
                        <div class="form-nor">
                            <ul>
                                <li>
                                    <div class="loginMsg" style="color: #FF0000;">
                                    </div>
                                </li>
                                <li>
                                    <input name="txtName" id="txtName" type="text" class="textbox-username" palceholder="用户名/邮箱"/>
                                    <input id="hdReturnUrl" type="hidden" name="hdReturnUrl" value="" />
                                </li>
                                <li>
                                    <input name="pass" id="pass" type="password" class="textbox-password" />
                                </li>
                                <li>
                                    <a href="/GetPassword.aspx" class="forgetp">忘记密码？</a>
                                </li>
                                <li >
                                    <button class="btn-login" id="userlogin" onclick="AjaxPost('/Ajax/User.ashx?action=login', 'userloginform'); return false;">登 录</button>
                                </li>
                                <li style="margin-left:10px;">
                                    其他登录方式：<a href="https://m.xtep.com.cn/passport/goauth.aspx?state=shop&type=qq" class="icon-qq" href="javascript:;">QQ</a>&nbsp;&nbsp;&nbsp;
                                    <a href="https://m.xtep.com.cn/passport/goauth.aspx?state=shop&type=weibo" class="icon-sina" href="javascript:;">新浪微博</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>

            </div>
            <!--注册-->
            <form id="registerform">
                <div class="reg-box">
                    <h2 class="Myorder2">快速注册</h2>
                    <div class="reg-box-inner">
                        <div class="form-nor">
                            <ul>
                                <li>
                                    <div class="registMsg" style="color: #FF0000;">
                                    </div>
                                    <input id="hdUserId" name="hdUserId" type="hidden" value="0" />
                                </li>
                                <li>
                                    <label class="lb-nor">
                                        <span>*</span>  用 户 名：</label>
                                    <input name="username" id="username" type="text" class="textbox-f" />
                                    <input id="hdUsername" type="hidden" />
                                </li>
                                <li>
                                    <label class="lb-nor">
                                        <span>*</span>    密 码：</label>
                                    <input name="password" id="password" type="password" class="textbox-f" />
                                </li>
                                <li>
                                    <label class="lb-nor">
                                        <span>*</span>    确认密码：</label>
                                    <input name="password2" id="password2" type="password" class="textbox-f" />
                                    <input id="hdPassword" type="hidden" />
                                </li>
                                <li style="display:none;">
                                    <label class="lb-nor">
                                        <span>*</span>    电子邮箱：</label>
                                    <input name="txtemail" id="txtemail" type="text" class="textbox-f" />
                                    <input id="hdEmail" type="hidden" />
                                </li>
                                <li>
                                    <label class="lb-nor">
                                        <span>*</span>    手机号：</label>
                                    <input name="txtmobile" id="txtmobile" type="text" class="textbox-f" />
                                    <input id="hdMobile" type="hidden" />
                                </li>
                                <li>
                                    <label class="lb-nor">
                                        <span>*</span>   验 证 码：</label>
                                    <img id="validateCode" src="/verification" style="float: right; padding-right: 23px; cursor: pointer;" title="看不清？换一张" />
                                  </li>
                                <li>
                                    <label class="lb-nor">
                                    </label>
                                    <label>
                                        <input id="agreement" name="agreement" type="checkbox" value="on" onclick="if(this.checked){$('#agreement').val('on');}else{$('#agreement').val('off');}" />
                                        我已看过并接受<a href="http://vshop.ixtep.com/reg/974.html">《特步用户协议》</a></label>
                                </li>
                                <li ><label class="lb-nor">
                                </label>
                                    <button class="btn-login" id="btnRegister" onclick="AjaxPost('/Ajax/User.ashx?action=register', 'registerform');return false;" style="width:220px">
                                        立 即 注 册</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="back2login">已有账号？<br>
                    <button class="btn-login"  onclick="$('#registerform').hide();return false;" >立 即 登 录</button><br>
                </div>
                <a class="bigclose"  onclick="$('#registerform').hide()" href="javascript:;">X</a>
            </form>
        </div>
        <!--中间内容 结束-->
    </div>
    <span class="space"></span>
</div>
<span class="space"></span>


<jsp:include page="../includes/footer.jsp"/>

<script>
    function AddShopCart(id) {
        AjaxPost("http://shop.xtep.com.cn/ajax/AddShopCart.ashx?id=" + id, "aspnetForm");
        var buycount =  $("#scbuycount_" + id).val();

        if (buycount == undefined) buycount = 1;
        var currentcount = parseInt(buycount);

        AjaxLoad('http://shop.xtep.com.cn/ajax/UpdateShopCartNum.ashx?action=add&id=' + id + '&num=' + currentcount, 'GetProm');
        if ($('#isjifengou_' + id)) {
            if ($('#isjifengou_' + id).attr('checked'))
                AjaxLoad('http://shop.xtep.com.cn/ajax/AddShopCart2.ashx?id=' + id + '&num=' + currentcount, 'aspnetForm2');
        }
        $('#gwc_best').load('http://shop.xtep.com.cn/ajax/ShopCart.aspx');
        if ($('#headshopcountspan')) {
            try {
                var scvalue = getcookie('Inoherb-ShopCart');
                if(scvalue!='')
                    $('#headshopcountspan').html(scvalue.split(',').length);
            }catch(err){}
        }
    }
    $(function () {
        if ($('#headshopcountspan')) {
            try {
                var scvalue = getcookie('Inoherb-ShopCart');
                if (scvalue != '')
                    $('#headshopcountspan').html(scvalue.split(',').length);
            } catch (err) { }
        }
    });
    function getcookie(name) {
        var cookie_start = document.cookie.indexOf(name);
        var cookie_end = document.cookie.indexOf(";", cookie_start);
        return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    }
</script>
<script src="js/WdatePicker.js"></script>
<!--
<script>
    $(function () {
        // 刷新验证码
        $("#validateCode").bind("click", function () {
            $(this).hide().attr('src', '/verification?' + Math.random()).fadeIn();
        });
    });
</script>
-->
<script type="text/javascript">
    $(function () {
        $(".btnZfbLogin").click(function () {
            AjaxPost('/Ajax/User.ashx?action=zfbLogin', 'userloginform');
        });
        $(".qq").click(function () {
            location.href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=&redirect_uri=http://login.xtep.com.cn/qqlogin.aspx&scope=get_user_info";
        });

    });
    var UpdateValidateCode = function () {
        var img = document.getElementById("ValidateCodeImg");
        img.src = "other/ValidateCode.aspx&tmp=" + new Date().getTime();
    }

    //设置当按下回车键时有效
    var keyDown = function (e) {
        if (e.keyCode == 13) {
            AjaxPost('/Ajax/User.ashx?action=login', 'userloginform');
        }
    }

    function LiControl(n) {
        if (n == 1) {
            $("#member").removeClass().addClass("on");
            $("#zfb").removeClass().addClass("off");
            $("#memberlogin").attr("style", "display:");
            $("#zfbLogin").attr("style", "display:none");
        }
        else {
            $("#member").removeClass().addClass("off");
            $("#zfb").removeClass().addClass("on");
            $("#memberlogin").attr("style", "display:none");
            $("#zfbLogin").attr("style", "display:");
        }
    }
</script>

</body>
</html>
