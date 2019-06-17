<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sys" tagdir="/WEB-INF/tags/sys" %>

<!DOCTYPE html>
<html>
<head>
    <title>我的商城 | 商品管理</title>
    <jsp:include page="../includes/header.jsp" />
    <link rel="stylesheet" href="/static/assets/plugins/jquery-ztree/css/zTreeStyle/zTreeStyle.min.css" />
    <link rel="stylesheet" href="/static/assets/plugins/dropzone/dropzone.css" />
    <link rel="stylesheet" href="/static/assets/plugins/dropzone/min/basic.min.css" />
    <link rel="stylesheet" href="/static/assets/plugins/wangEditor/wangEditor.min.css" />

</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
    <jsp:include page="../includes/nav.jsp" />
    <jsp:include page="../includes/menu.jsp" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                商品管理
                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li class="active">控制面板</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <c:if test="${baseResult != null}">
                        <div class="alert alert-${baseResult.status == 200 ? "success" : "danger"} alert-dismissible">
                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                ${baseResult.message}
                        </div>
                    </c:if>

                    <div class="box box-info">
                        <div class="box-header with-border">
                            <h3 class="box-title">${tbItem.id == null ? "添加" : "编辑"}商品</h3>
                        </div>
                        <!-- /.box-header -->
                        <!-- form start -->
                        <form:form id="inputForm" cssClass="form-horizontal"  action="/item/save" method="post" modelAttribute="tbItem">
                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-2 control-label">所属类目</label>

                                <div class="col-sm-10">
                                    <form:hidden id="categoryId" path="tbCategory.id" />
                                    <input id="categoryName" class="form-control required" placeholder="请选择" readonly="true" data-toggle="modal" data-target="#modal-default" value="${tbItem.tbCategory.name}" />
                                </div>
                            </div>
                        <div class="box-body">
                            <form:hidden path="id"/>
                            <div class="form-group">
                                <label for="title" class="col-sm-2 control-label">商品名称</label>
                                <div class="col-sm-10">
                                    <form:input path="title" cssClass="form-control required" placeholder="请输入商品名称"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="price" class="col-sm-2 control-label">商品价格</label>
                                <div class="col-sm-10">
                                    <form:input path="price" cssClass="form-control required"  placeholder="请输入商品价格"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="num" class="col-sm-2 control-label required">商品库存</label>
                                <div class="col-sm-10">
                                    <form:input path="num" cssClass="form-control required" placeholder="请输入商品库存量"/>

                                </div>
                            </div>
                            <div class="form-group">
                                <label for="image" class="col-sm-2 control-label required ">商品图片</label>
                                <div class="col-sm-10">
                                <form:input path="image" class="form-control " placeholder="商品图片" />

                                <div id="dropz" class="dropzone"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label  class="col-sm-2 control-label mobile ">商品详细</label>
                                <div class="col-sm-10">
                                    <form:hidden path="detail" />
                                    <div id="editor">${tbItem.detail}</div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="button" class="btn btn-default" onclick="history.go(-1)">返回</button>
                                <button id="btnSubmit"  type="submit" class="btn btn-info pull-right">提交</button>
                            </div>
                            </form:form>
                            <!-- /.box-footer -->

                        </div>
                    </div>
                </div>
        </section>
    </div>

    <jsp:include page="../includes/copyright.jsp" />
</div>
<script src="/static/assets/plugins/jquery-ztree/js/jquery.ztree.core-3.5.min.js"></script>
<script src="/static/assets/plugins/dropzone/min/dropzone.min.js"></script>
<script src="/static/assets/plugins/wangEditor/wangEditor.min.js"></script>

<jsp:include page="../includes/footer.jsp" />

<!-- 自定义模态框 -->
<sys:modal title="请选择" message="<ul id='myTree' class='ztree'></ul>" />

<script>

    $(function () {
        App.initZTree("/category/tree/data", ["id"], function (nodes) {

            var node = nodes[0];
            $("#categoryId").val(node.id);
            $("#categoryName").val(node.name);
            $("#modal-default").modal("hide");
        });
    });

    initWangEditor();
    /**
     * 初始化富文本编辑器
     */
    function initWangEditor () {
        var E = window.wangEditor;
        var editor = new E('#editor');
        // 配置服务器端地址
        editor.customConfig.uploadImgServer = '/upload';
        editor.customConfig.uploadFileName = 'editorFiles';
        editor.create();

        $("#btnSubmit").bind("click", function() {
            var contentHtml = editor.txt.html();
            $("#detail").val(contentHtml);
        });
    }

    App.initDropzone({
        id: "#dropz",
        url: "/upload",
        init: function () {
            this.on("success", function (file, data) {
                $("#image").val(data.fileName);
            });
        }
    });

</script>

</body>
</html></html>