package com.zls.myshop.domain;

import com.zls.myshop.commons.persistence.BaseEntity;

import java.io.Serializable;


public class TbItem extends BaseEntity implements Serializable {

   private String title;
   private  int price;
   private  int num;
   private String detail;
   private String image;
   private int sale;

    public int getSale() {
        return sale;
    }

    public void setSale(int sale) {
        this.sale = sale;
    }

    private TbCategory tbCategory;


    public TbCategory getTbCategory() {
        return tbCategory;
    }

    public void setTbCategory(TbCategory tbCategory) {
        this.tbCategory = tbCategory;
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    }

