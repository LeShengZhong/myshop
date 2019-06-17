package com.zls.myshop.web.admin.Controller;

import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.admin.Service.TbUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

import static com.zls.myshop.commons.Constant.ConstantUtils.SESSION_USER;

/**
 * @program: myshop
 * @description: 用户登录控制器
 * @author: zls
 * @create: 2019-03-27 11:22
 **/
@Controller
public class LoginController {

    @Autowired
    private TbUserService tbUserService;

   /**
   *页面跳转
   */
    @RequestMapping(value = {"","login"},method = RequestMethod.GET)
    public String login(){
        return "login";
    }
    /**
     * 登录逻辑控制
     */
    @RequestMapping(value = "login",method = RequestMethod.POST)
    public String login(String email, String  password, HttpServletRequest httpServletRequest)
    {
        TbUser tbuser = tbUserService.login(email, password);
        //登陆成功
        if (tbuser!=null){
            //将会话信息放入session
            httpServletRequest.getSession().setAttribute(SESSION_USER,tbuser);
            return "redirect:/main";
        }
        //登陆失败
        else{
            return login();
        }
    }
    /*
    * 注销登陆
    * */
    @RequestMapping(value = "logout",method = RequestMethod.GET)
    public String logout(HttpServletRequest httpServletRequest) {
       httpServletRequest.getSession().invalidate();
        return login();
    }
}
