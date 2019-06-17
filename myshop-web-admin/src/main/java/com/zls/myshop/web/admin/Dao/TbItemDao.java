package com.zls.myshop.web.admin.Dao;

import com.zls.myshop.domain.TbItem;

import java.util.List;
import java.util.Map;

public interface TbItemDao {
    //查询所有商品
    public List<TbItem> findAll();
    //根据id查询商品
    public TbItem getById(Long id);
    //添加商品
    void insert(TbItem tbItem);
    //更新商品信息
    void update(TbItem tbItem);
    //分页查询
    List<TbItem> page(Map<String,Object> params);
    //批量删除
    void deleteMulti(String[] ids);
    //根据id删除商品
    void deleteByid(Long id);
    //查询总条数
    int count(TbItem tbItem);

}
