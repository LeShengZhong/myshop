<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>


    <title>网上商城</title>

    <jsp:include page="../includes/source.jsp" />

    <script>
        $(function() {
            $("div.J_Product").each(function() { var el = this; var bullets = $(".position li", el); Swipe(el, { auto: 3000, callback: function(pos) { bullets.removeClass("on"); bullets[pos].className = "on"; } }); });
        });
        $(function() {
            $("div.J_Slide").each(function() { var el = this; var bullets = $(".position li", el); Swipe(el, { auto: 3000, callback: function(pos) { bullets.removeClass("on"); bullets[pos].className = "on"; } }); });
        });
    </script>
    <style type="text/css">
        .nhT table{
            margin: auto;
            width: 1920px!important;
            position: relative;
            left: 50%;
            margin-left: -960px!important;
        }
        .nhT table td{
            float: left;
        }
        .nhT table img{
            vertical-align: bottom;
        }
    </style>

    <base target="_blank">
</head>
<body>


<div id="layout_wrap" class="indexbg">

    <div class="table5">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr valign="top">
                <td id="TD_1594_1" class="groupWrappe left">
                 <!--header-->
                  <jsp:include page="../includes/header.jsp"/>
                  <!--导航栏-->
                    <jsp:include page="../includes/menu.jsp"/>
                 <!--轮播图-->
                  <div class="mod_B_k2">
                     <div class="">
                         <div class="itemHeaderInner">
                             <span class="t"></span>
                         </div>
                     </div>
                      <div class="">
                          <script type='text/javascript'>
                              $(document).ready(function(){
                                  $("#slider3633").nbspSlider({
                                      widths:"1920px",
                                      heights:"600px",
                                      autoplay:"1",
                                      delays:"4000",
                                      effect:"fade",
                                      speeds:800,
                                      altOpa:0.5,
                                      altBgColor:"#ccc",
                                      altHeight:"40px",
                                      altShow:"0",
                                      altFontColor:"#fff",
                                      numBtnSty:"num",
                                      numBtnShow:"1",
                                      thumbnailWidth:"80",
                                      thumbnailHeight:"30",
                                      IsSingleImage:"0", preBtnShow:"0",
                                      nexBtnShow:"0",
                                      LeftToRight:"1", IsBGroll:"0",
                                      preBtnStyle:null,nexBtnStyle:null,
                                      imgWidth:"0",
                                      modId:"3633",
                                      numArray: null,
                                      BGUrl: null
                                  });
                              });
                          </script>
                          <div id="slider3633">
                              <ul id="ul_3633">
                                  <c:forEach items="${ppt}" var="ppt">
                                      <li id='li_3633'>
                                          <a href="#"><img src="${ppt.pic}" alt="${ppt.title}" title="${ppt.title}"></a></li>
                                  </c:forEach>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>
                <!--轮播图-->
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="table101">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr valign="top">

            <td id="TD_1596_1" class="groupWrappe left">


    </table></div></div>
<!--中部广告-->
<div class="mod_B_paobuxie"><div class=""><div class="itemHeaderInner"><span class="t"></span></div></div><div class=""><table class="paobuXie"><tbody><tr class="firstRow"><td style="float:left;width:32%;"><a href="http://shop.xtep.com.cn/Product/ProductList.aspx?key=%E6%98%8E%E6%98%9F%E5%90%8C%E6%AC%BE" target="_blank"><img src="images/lADPDgQ9qXePYtfNAojNAYE_385_648.jpg" alt="/////////////"/></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td><td style="float:left;width:32%;margin-left:2%;"><a href="http://www.xtep.com.cn/?id=668" target="_blank"><img src="images/lADPDgQ9qiYKmDHNAojNAYE_385_648.jpg" alt="/////////////"/></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td><td style="float:right;width:32%;"><a href="http://www.xtep.com.cn/?id=639" target="_blank"><img src="images/5.jpg" alt="/////////////"/></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr></tbody></table></div></div>
<!--中部广告-->

</td>

</tr>
</table>
</div>
<div class="table112">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr valign="top">

            <td id="TD_1600_1" class="groupWrappe left">
                <div class=""><div class=""><div class="itemHeaderInner"><span class="t"><i>3F</i>为您推荐</span></div></div><div class=""><table class="tuijian" cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                    <tr style="overflow:hidden" class="firstRow">
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=160115" target="_blank"><img src="images/268-310-1.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=160115" target="_blank"><span style="font-size:17px;">复刻一代风火鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=156331" target="_blank"><img src="images/268-310-2.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=156331" target="_blank"><span style="font-size:17px;">风火鞋21代</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173964" target="_blank"><img src="images/268-310-3.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173964" target="_blank"><span style="font-size:17px;">弥繁老爹鞋</span> </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173545" target="_blank"><img src="images/268-310-4.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173545" target="_blank"><span style="font-size:17px;">女子休闲鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr style="overflow:hidden" class="firstRow">
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173617" target="_blank"><img src="images/268-310-5.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173617" target="_blank"><span style="font-size:17px;">动力巢5.0跑鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173831" target="_blank"><img src="images/268-310-6.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/173831" target="_blank"><span style="font-size:17px;">黑爷高帮运动鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179262" target="_blank"><img src="images/268-310-7.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179262" target="_blank"><span style="font-size:17px;">椰子老爹鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179169" target="_blank"><img src="images/268-310-8.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179169" target="_blank"><span style="font-size:17px;">女子老爹鞋</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr style="overflow:hidden">
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180203" target="_blank"><img src="images/268-310-9.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180203" target="_blank"><span style="font-size:17px;">防水科技男风衣</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180208" target="_blank"><img src="images/268-310-10.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180208" target="_blank"><span style="font-size:17px;">防水科技女风衣</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179063" target="_blank"><img src="images/268-310-11.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179063" target="_blank"><span style="font-size:17px;">男子卫衣</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179033" target="_blank"><img src="images/268-310-12.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179033" target="_blank"><span style="font-size:17px;">女子卫衣</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr style="overflow:hidden">
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179963" target="_blank"><img src="images/268-310-13.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179963" target="_blank"><span style="font-size:17px;">防水科技男长裤</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180214" target="_blank"><img src="images/268-310-14.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=180214" target="_blank"><span style="font-size:17px;">防水科技女长裤</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179022" target="_blank"><img src="images/268-310-15.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/product/ProductDetail.aspx?id=179022" target="_blank"><span style="font-size:17px;">男子针织裤</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                        <td style="width:25%;">
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179038" target="_blank"><img src="images/268-310-16.jpg" alt="////////"/> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                            <p>
                                <a href="http://shop.xtep.com.cn/goods/179038" target="_blank"><span style="font-size:17px;">女子针织裤</span> 					</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table></div></div>

            </td>

        </tr>
    </table>
</div>


<jsp:include page="../includes/footer.jsp"/>

<script type="text/javascript" src='other/LoadShopCountJs.aspx'></script>
</body>
</html>
