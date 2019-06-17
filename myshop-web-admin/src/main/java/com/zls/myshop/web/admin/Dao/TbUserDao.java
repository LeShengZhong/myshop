package com.zls.myshop.web.admin.Dao;

import com.zls.myshop.domain.TbUser;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * @program: myshop
 * @description: 用户类接口
 * @author: zls
 * @create: 2019-03-27 10:35
 **/
@Repository
public interface TbUserDao {

    //查询所用用户
    List<TbUser> selectAll();
    //根据邮箱查询用户
    TbUser getByEmail(String email);
    //添加用户
    void insert(TbUser tbUser);
    //更新用户信息
    void update(TbUser tbUser);
   //根据用户id查询用户
    TbUser getById(Long id);
    //搜索
    List<TbUser> search(TbUser tbUser);
    //批量删除
    void deleteMulti(String[] ids);
    //分页查询
    List<TbUser> page(Map<String,Object> params);
    //查询总条数
    int count(TbUser tbUser);


}
