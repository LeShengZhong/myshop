<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div class="row">
    <div class="col-xs-6">
        <dl>
            <dt>商品名称：</dt>
            <dd>${tbItem.title}</dd>
            <br />

            <dt>商品价格：</dt>
            <dd>${tbItem.price}</dd>
            <br />

            <dt>商品库存：</dt>
            <dd>${tbItem.num}</dd>
            <br />
        </dl>
    </div>

    <div class="col-xs-6">
        <dl>
            <dt>创建时间：</dt>
            <dd><fmt:formatDate value="${tbItem.created}" pattern="yyyy-MM-dd HH:mm:ss"/></dd>
            <br />

            <dt>更新时间：</dt>
            <dd><fmt:formatDate value="${tbItem.updated}" pattern="yyyy-MM-dd HH:mm:ss"/></dd>
        </dl>
    </div>
</div>