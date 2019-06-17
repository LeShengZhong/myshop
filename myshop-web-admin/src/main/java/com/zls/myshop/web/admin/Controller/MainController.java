package com.zls.myshop.web.admin.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @program: myshop
 * @description: 后台主界面控制器
 * @author: zls
 * @create: 2019-03-27 13:49
 **/
@Controller
public class MainController {
    @RequestMapping(value = "main",method = RequestMethod.GET)
    public String main(){
        return "main";
    }
}
