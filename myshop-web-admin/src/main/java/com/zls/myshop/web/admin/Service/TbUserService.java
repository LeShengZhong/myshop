package com.zls.myshop.web.admin.Service;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbUser;

import java.util.List;
import java.util.Map;

/**
 * @author @乐声
 * @Create 2019-03-27 10:46
 **/
public interface TbUserService {

    //查询所用用户
    List<TbUser> selectAll();
    //登陆
    TbUser login(String email ,String password);
    //添加用户和更新用户
    BaseResult save(TbUser tbUser);
    //根据用户id查询用户
    TbUser getById(Long id);
    //高级搜索
    List<TbUser> search(TbUser tbUser);
    //批量删除
    void  deleteMulti(String[] ids);
    //分页功能
    PageInfo<TbUser> page(int draw, int start, int length, TbUser tbUser);
    //查询总数
    int count(TbUser tbUser);
}
