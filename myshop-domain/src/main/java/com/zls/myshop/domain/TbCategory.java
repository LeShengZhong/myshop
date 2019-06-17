package com.zls.myshop.domain;

import com.zls.myshop.commons.persistence.BaseEntity;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-03-28 11:26
 **/

public class TbCategory extends BaseEntity {
    private  Long parentId;
    private String name;
    private  int status;
    private int  sortOrder;
    private Boolean isParent;

    public TbCategory getParent() {
        return parent;
    }

    public void setParent(TbCategory parent) {
        this.parent = parent;
    }

    private TbCategory parent;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(int sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Boolean getIsParent() {
        return isParent;
    }

    public void setIsParent(Boolean isParent) {
        this.isParent = isParent;
    }
}
