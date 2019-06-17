package com.zls.myshop.web.ui.Controller;

import com.alibaba.druid.util.StringUtils;
import com.google.code.kaptcha.Constants;
import com.zls.myshop.commons.Constant.ConstantUtils;
import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.ui.Service.TbUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 14:16
 **/
@Controller
public class loginController {
    @Autowired
    private TbUserService tbUserService;
    //登录跳转页
    @RequestMapping(value = "login",method = RequestMethod.GET)
    public String login()
    {
        return "login";
    }
    //注册跳转页
    @RequestMapping(value = "register",method = RequestMethod.GET)
    public String register(){
        return "register";
    }
    //登录逻辑
    @RequestMapping(value = "login",method = RequestMethod.POST)
    public String login(TbUser tbUser, Model model, HttpServletRequest request) throws Exception {
        if (!checkVerification(tbUser, request)) {
            model.addAttribute("baseResult", BaseResult.fail("验证码输入错误，请重新输入"));
            return "login";
        }
        TbUser user = tbUserService.login(tbUser);
        // 登录失败
        if (user == null) {
            model.addAttribute("baseResult", BaseResult.fail("用户名或密码错误，请重新输入！"));
            return "login";
        }

        // 登录成功
        else {
            // 将会员信息放入 Session
            request.getSession().setAttribute(ConstantUtils.SESSION_USER, user);
            return "redirect:/index";
        }


    }


        //检查验证码
        private  static boolean checkVerification (TbUser tbUser, HttpServletRequest request){
            String verification = (String) request.getSession().getAttribute(Constants.KAPTCHA_SESSION_KEY);
            if (StringUtils.equals(verification, tbUser.getVerification())) {
                return true;
            }

            return false;
        }
    }


