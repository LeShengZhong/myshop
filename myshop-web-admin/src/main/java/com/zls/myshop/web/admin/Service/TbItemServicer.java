package com.zls.myshop.web.admin.Service;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbItem;

import java.util.List;

public interface TbItemServicer {
    //查询所有商品
    public List<TbItem> findAll();
    //根据id查询商品
    public TbItem getById(Long id);
    //保存商品信息
    public BaseResult save(TbItem tbItem);
    //批量删除
    void  deleteMulti(String[] ids);
    //根据id删除商品
    void deleteByid(Long id);
    //分页功能
    PageInfo<TbItem> page(int draw, int start, int length, TbItem tbItem);
    //查询总数
    int count(TbItem tbItem);

}
