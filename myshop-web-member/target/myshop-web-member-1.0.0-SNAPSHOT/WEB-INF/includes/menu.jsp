<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 2019/5/10
  Time: 9:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--导航栏-->
<div id="menu">
    <div class="menubar">
        <div class="wraper">
            <div class="navigation">
                <ul>
                    <li><a href="#" class="item" target="_blank"><span>首页</span></a></li>
                    <li><a href="#" class="item" target="_blank"><span>跑鞋</span></a></li>
                    <li><a href="#" class="item" target="_blank"><span>男子</span></a></li>
                    <li><a href="#" class="item" target="_blank"><span>女子</span></a></li>
                    <li><a href="#" class="item" target="_blank"><span>儿童</span></a></li>
                    <li><a href="#" class="item" target="_blank"><span>配件</span></a></li>

                </ul>
            </div>
            <!--全部商品分类-->
            <div class="menu" onmouseover="$('#divcatemenu').show()" onmouseout="$('#divcatemenu').hide()">
                <h3> <a href="javascript:;">全部商品分类</a> </h3>
                <div class="menulist" id="divcatemenu" style="display:none">
                    <ul class="menunavi cls">
                        <li class="item item1 first" onmouseover="showcate(88)">
                            <dl><dt>
                                <a target="_blank" href="http://shop.xtep.com.cn/goodstype/88" class="cateitem"><span>男鞋</span></a>
                                <tt class="prvCates">
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/95">跑步鞋</a>
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/153">综训鞋</a>
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/97">休闲鞋</a>
                                </tt>
                        </li>
                        <li class="item item1 first" onmouseover="showcate(88)">
                            <dl><dt>
                                <a target="_blank" href="http://shop.xtep.com.cn/goodstype/88" class="cateitem"><span>男鞋</span></a>
                                <tt class="prvCates">
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/95">跑步鞋</a>
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/153">综训鞋</a>
                                    <a target="_blank" href="http://shop.xtep.com.cn/goodstype/97">休闲鞋</a>
                                </tt>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<span class="clr"></span> </div>
<!--全部商品分类-->
</div>
<script>
    $(function () {
        $(window).scroll(function() {
            var window_top = $(window).scrollTop();
            var div_top = $('.barAnchor').offset().top;
            if (window_top > div_top) {
                $('#menu').css({
                    position: 'fixed',
                    top: '0'
                });
                $('.barAnchor').height($('#menu').height());
            }
            else {
                $('#menu').css('position', 'relative');
                $('.barAnchor').height(0);
            }
        })
    });
</script>
</div>
</div>
<!--导航栏-->