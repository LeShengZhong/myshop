package com.zls.myshop.web.ui.Controller;

import com.zls.myshop.domain.TbContent;
import com.zls.myshop.web.ui.Service.IndexService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 14:09
 **/
@Controller
public class IndexController {
    @Autowired
    private IndexService indexService;
    @RequestMapping(value = {"","index"},method = RequestMethod.GET)
    public  String index(Model model){
        TbContent tbContent=new TbContent();
        //查询首页轮播图
        tbContent.setCategoryName("首页轮播图");
       List<TbContent> ppt = indexService.selectByTbContent(tbContent);
      model.addAttribute("ppt",ppt);
        //查询中部广告
        tbContent.setCategoryName("首页中部广告");
       List<TbContent> advertising = indexService.selectByTbContent(tbContent);
        model.addAttribute("adv",advertising);
        return "index";
    }

}
