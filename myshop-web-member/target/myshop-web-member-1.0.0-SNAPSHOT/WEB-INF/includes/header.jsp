<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2019/5/10
  Time: 13:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="mt10">
    <div class="">
        <div class="itemHeaderInner">
            <span class="t"></span>
        </div>
    </div>
    <div class="">
        <div id="shortcut-2014">

            <div class="w">
                <ul class="fl">
                    <li><div class="dt">您好，欢迎光临特步官方商城！</div></li>
                    <li class="fore1">
                        <div class="dt"> <span id="logininfo">
                            <script  type="text/javascript">
                                document.write("<a href='/login'>注册</a>   <a href='/login'>登录</a> ");</script>
                        </span>
                        </div>
                    </li>
                </ul>
                <ul class="fr">
                    <li class="fore4">
                        <div class="dt">
                            <a href="#"><span class="ci-count" style="display: none;">0</span>我的特步
                                <img src="/static/images/down_icon.png" alt="" class="dow_icon" style="display: none;"></a>
                        </div>
                    </li>


                    <!-- <li class="spacer"></li> -->
                    <li class="fore5">
                        <div class="dt">
                            <!--购物车-->
                            <a href="#" target="_blank">
                                <img src="/static/images/cart_icon.png" alt="" class="tub_icon"/>购物车</a> </div>
                    </li>
                </ul>
                <span class="clr"></span> </div>
        </div>

        <script>
            $(function () {
                if ($('#headshopcountspan')) {
                    try {
                        var scvalue = getcookie('Inoherb-ShopCart');
                        if (scvalue != '')
                            $('#headshopcountspan').html(scvalue.split(',').length);
                    } catch (err) { }
                }
            });
        </script>
    </div></div>
<!--header-top-->
<!--header-content-->
<div class=""><div class=""><div class="itemHeaderInner"><span class="t"></span></div></div><div class=""><div style="width:100%;background:#fff;margin-top:-6px;"><div class="w">
    <div id="logo-2014"> <a href="/index" class="logo">特步官方商城</a> </div>
    <div id="search-2014">
        <ul id="shelper" class="hide" style="display: none;">
        </ul>
        <!--搜索-->
        <div class="form">
            <form action="http://shop.xtep.com.cn/Product/ProductList.aspx" target="_blank" method="get">
                <input type="text" onkeydown="javascript:if(event.keyCode==13) search('key');" autocomplete="off" id="key" accesskey="s" name="key" class="text">
                <button onclick="search('key');return false;" class="button cw-icon"><i></i>搜索</button>
            </form>
        </div>
        <!--搜索-->
    </div>

    <div id="hotwords-2014"><script src="other/shownavjs.aspx" type="text/javascript"></script></div>
    <span class="clr"></span> </div></div>
    <link href="/static/css/swiper-3.4.2.min.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="/static/js/swiper-3.4.2.min.js"></script>
    <script type="text/javascript">
        var mySwiper = new Swiper('.juanFive', {
            autoplay: 3000,
            autoplayStopOnLast : true,
            loop : true,
        });
    </script></div></div>
