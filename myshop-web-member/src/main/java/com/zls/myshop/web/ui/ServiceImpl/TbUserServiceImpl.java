package com.zls.myshop.web.ui.ServiceImpl;

import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.ui.Dao.TbUserDao;
import com.zls.myshop.web.ui.Service.TbUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 15:46
 **/
@Service
public class TbUserServiceImpl implements TbUserService {
    @Autowired
    private TbUserDao tbUserDao;

    @Override
    public TbUser login(TbUser tbUser) {
        TbUser tb = tbUserDao.getTbUser(tbUser);
        if(tb!=null){
            //用户存在
            String password= DigestUtils.md5DigestAsHex(tbUser.getPassword().getBytes());
           if (password==tb.getPassword()){

               return tb;
           }
        }
        return null;
    }
}
