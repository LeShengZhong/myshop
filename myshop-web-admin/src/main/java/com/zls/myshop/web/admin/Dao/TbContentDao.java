package com.zls.myshop.web.admin.Dao;

import com.zls.myshop.domain.TbContent;

import java.util.List;
import java.util.Map;

/**
 * @author @乐声
 * @Create 2019-05-09 10:50
 **/
public interface TbContentDao {
    //添加内容
    void insert(TbContent tbContent);
    //根据id删除
    void deleteByid(Long id);
    //批量删除
    void deleteMulti(String[] ids);
    //更新内容
    void update(TbContent tbContent);
    //查找所有内容
    List<TbContent> findAll();
    //查找
    List<TbContent> select(TbContent tbContent);
    //分页查询
    List<TbContent> page(Map<String,Object> params);
    //查询总条数
    int count(TbContent tbContent);
}
