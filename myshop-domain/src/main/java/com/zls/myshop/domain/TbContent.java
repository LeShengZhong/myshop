package com.zls.myshop.domain;

import com.zls.myshop.commons.persistence.BaseEntity;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-03-28 11:23
 **/


public class TbContent extends BaseEntity {

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitleDesc() {
        return titleDesc;
    }

    public void setTitleDesc(String titleDesc) {
        this.titleDesc = titleDesc;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    private String  categoryName;
    private String title;
    private String titleDesc;
    private String url;
    private String pic;


}
