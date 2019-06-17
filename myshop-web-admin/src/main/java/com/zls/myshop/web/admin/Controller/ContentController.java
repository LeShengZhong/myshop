package com.zls.myshop.web.admin.Controller;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbContent;
import com.zls.myshop.web.admin.Service.TbContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-09 10:59
 **/
@Controller
@RequestMapping(value = "content")
public class ContentController {
    @Autowired
    public TbContentService tbContentService;
    @ModelAttribute
    public TbContent getTbContent(Long id){
        TbContent tbContent=null;
        // id 不为空，则从数据库获取
        if (id != null) {
            tbContent = tbContentService.getById(id);
        } else {
            tbContent = new TbContent();
        }
        return tbContent;
    }
    @RequestMapping(value = "list",method = RequestMethod.GET)
    public String list(){
        return "content-list";
    }


    @RequestMapping(value = "form",method = RequestMethod.GET)
    public String form(){
        return "content-form";
    }
    //分页
    @ResponseBody
    @RequestMapping(value = "page", method = RequestMethod.GET)
    public PageInfo<TbContent> page(HttpServletRequest request, TbContent tbContent){
        Map<String,Object> result=new HashMap<>();

        String strStar=request.getParameter("start");
        String strDraw=request.getParameter("draw");
        String strLength=request.getParameter("length");

        int start=strStar==null?0:Integer.parseInt(strStar);
        int draw=strDraw==null?0:Integer.parseInt(strDraw);
        int length=strLength==null?10:Integer.parseInt(strLength);

        PageInfo<TbContent> pageInfo = tbContentService.page(draw, start, length,tbContent);

        return pageInfo;
    }
    //保存信息
    @RequestMapping(value = "save", method = RequestMethod.POST)
    public String save(TbContent tbContent, Model model) {
        BaseResult baseResult = tbContentService.save(tbContent);

        if (baseResult.getStatus() == 200) {
            model.addAttribute("baseResult", baseResult);
            return "content-list";
        } else {
            model.addAttribute("baseResult", baseResult);
           return  "content-form";
        }
    }


}
