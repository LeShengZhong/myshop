package com.zls.myshop.web.admin.Controller;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.admin.Service.TbUserService;
import org.apache.commons.lang3.StringUtils;
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
import java.util.List;
import java.util.Map;

import static com.zls.myshop.commons.Constant.ConstantUtils.SESSION_USER;

/**
 * @program: myshop
 * @description: 用户管理
 * @author: zls
 * @create: 2019-03-27 11:40
 **/
@Controller
@RequestMapping(value = "user")
public class TbUserController {

    @Autowired
    private TbUserService tbUserService;
    @ModelAttribute
    public TbUser getTbUser(Long id)
    {
        TbUser tbUser=null;

        if(id!=null)
        {
            tbUser=tbUserService.getById(id);
        }
        else {
            tbUser=new TbUser();
        }
        return tbUser;
    }
    //跳转到用户列表
    @RequestMapping(value = "list",method = RequestMethod.GET)
    public String list(Model model) {
        model.addAttribute(SESSION_USER,tbUserService.selectAll());
        return "user-list";
    }
    //跳转用户表单
    @RequestMapping(value = "form",method = RequestMethod.GET)
    public String from() {

        return "user-form";
    }

    //保存用户信息
    @RequestMapping(value = "save" ,method = RequestMethod.POST)
    public  String save(TbUser tbUser, Model model , RedirectAttributes redirectAttributes){
        BaseResult baseResult = tbUserService.save(tbUser);
        //保存成功
        if (baseResult.getStatus()==BaseResult.STATUS_SUCCESS)
        {
            redirectAttributes.addFlashAttribute("baseResult",baseResult);
            return "redirect:/user/list";
        }
        //保存失败
        else {

            model.addAttribute("baseResult",baseResult);
            return "user-form";
        }

    }
    @RequestMapping(value = "search",method = RequestMethod.POST)
    public  String search(TbUser tbUser, Model model)
    {
        List<TbUser> tbUsers = tbUserService.search(tbUser);
        model.addAttribute(SESSION_USER,tbUsers);
        return  "user-list";
    }
    //批量删除
    @ResponseBody
    @RequestMapping(value = "delete",method = RequestMethod.POST)
    public  BaseResult delete(String ids)
    {
        BaseResult baseResult=null;
        if(StringUtils.isNoneBlank(ids)){
            String [] array_ids=ids.split("'");
            tbUserService.deleteMulti(array_ids);
            baseResult=BaseResult.success("删除用户成功");
        }
        else{
            baseResult=BaseResult.fail("删除用户失败");
        }
        return baseResult;
    }
    //分页查询
    @ResponseBody
    @RequestMapping(value = "page", method = RequestMethod.GET)
    public PageInfo<TbUser> page(HttpServletRequest request, TbUser tbUser){
        Map<String,Object> result=new HashMap<>();

        String strStar=request.getParameter("start");
        String strDraw=request.getParameter("draw");
        String strLength=request.getParameter("length");

        int start=strStar==null?0:Integer.parseInt(strStar);
        int draw=strDraw==null?0:Integer.parseInt(strDraw);
        int length=strLength==null?10:Integer.parseInt(strLength);

        PageInfo<TbUser> pageInfo = tbUserService.page(draw, start, length,tbUser);

        return pageInfo;
    }
    @RequestMapping(value = "detail",method = RequestMethod.GET)
    public  String detail(TbUser tbUser)
    {
        return "user-detail";
    }






}
