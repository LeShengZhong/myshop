package com.zls.myshop.web.admin.Service.Impl;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.commons.utils.RegexpUtils;
import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.admin.Dao.TbUserDao;
import com.zls.myshop.web.admin.Service.TbUserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-03-27 10:48
 **/
@Service
public class TbUserServiceImpl implements TbUserService {

    @Autowired
    private TbUserDao tbUserDao;
    //查询所有用户
    @Override
    public List<TbUser> selectAll() {
        return tbUserDao.selectAll();
    }
   //登陆
    @Override
    public TbUser login(String email, String password) {
        TbUser tbUser = tbUserDao.getByEmail(email);

        //md5加密
        String md5Password= DigestUtils.md5DigestAsHex(password.getBytes());

        //检验用户是否存在
        if (tbUser!=null)
        {
            System.out.println(tbUser.getPassword().equals(md5Password));
            //匹配密码
            if(tbUser.getPassword().equals(md5Password))
            {
                return  tbUser;
            }
        }
        return null;
    }
   //添加用户和更新用户
    @Override
    public BaseResult save(TbUser tbUser) {
        BaseResult baseResult=checkTbUser(tbUser);
        //编辑用户信息
        if(baseResult.getStatus()==BaseResult.STATUS_SUCCESS)
        {
            tbUser.setUpdated(new Date());
            if(tbUser.getId()!=null)
            {
                tbUserDao.update(tbUser);
            }
            //新增用户
            else {
                tbUser.setPassword(DigestUtils.md5DigestAsHex(tbUser.getPassword().getBytes()));
                tbUser.setCreated(new Date());
                tbUserDao.insert(tbUser);
            }
            baseResult.setMessage("保存用户成功");
        }
        return  baseResult;
    }
     //根据用户id查询用户
    @Override
    public TbUser getById(Long id) {
        return tbUserDao.getById(id);
    }
    //搜索
    @Override
    public List<TbUser> search(TbUser tbUser) {
        return tbUserDao.search(tbUser);
    }
    //批量删除
    @Override
    public void deleteMulti(String[] ids) {
      tbUserDao.deleteMulti(ids);
    }

    //分页查询
    @Override
    public PageInfo<TbUser> page(int draw, int start, int length, TbUser tbUser) {
        int count=tbUserDao.count(tbUser);

        Map<String ,Object> params=new HashMap<>();
        params.put("start",start);
        params.put("length",length);
        params.put("tbUser",tbUser);

        PageInfo<TbUser> pageInfo=new PageInfo<>();
        pageInfo.setDraw(draw);
        pageInfo.setRecordsFiltered(count);
        pageInfo.setRecordsTotal(count);
        pageInfo.setData(tbUserDao.page(params));
        return pageInfo;
    }
   // 查询总数
    @Override
    public int count(TbUser tbUser) {
        return tbUserDao.count(tbUser);
    }

    //用户信息有效验证
    private  BaseResult checkTbUser(TbUser tbUser){

        BaseResult baseResult=BaseResult.success();
        //非空验证
        if(StringUtils.isBlank(tbUser.getEmail()))
        {
            baseResult=BaseResult.fail("邮箱不能为空，请重新输入");
        }
        else  if (!RegexpUtils.checkEmail(tbUser.getEmail()))
        {
            baseResult=BaseResult.fail("邮箱格式不正确，请重新输入");
        }
        else if(StringUtils.isBlank(tbUser.getPassword()))
        {
            baseResult=BaseResult.fail("密码不能为空，请重新输入");
        }
        else if(StringUtils.isBlank(tbUser.getUsername())) {
            baseResult = BaseResult.fail("姓名不能为空，请重新输入");
        }
        else if(StringUtils.isBlank(tbUser.getPhone()))
        {
            baseResult=BaseResult.fail("手机不能为空，请重新输入");
        }
        else  if (!RegexpUtils.checkPhone(tbUser.getPhone()))
        {
            baseResult=BaseResult.fail("手机格式不正确，请重新输入");
        }

        return  baseResult;
    }
}
