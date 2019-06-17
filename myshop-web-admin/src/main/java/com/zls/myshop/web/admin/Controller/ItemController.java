package com.zls.myshop.web.admin.Controller;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbItem;
import com.zls.myshop.domain.TbUser;
import com.zls.myshop.web.admin.Service.TbItemServicer;

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

@Controller
@RequestMapping(value = "item")
public class ItemController {
    @Autowired
    private TbItemServicer tbItemServicer;
    @ModelAttribute
    public TbItem getTbItem(Long id)
    {
        TbItem tbItem=null;

        if(id!=null)
        {
            tbItem= tbItemServicer.getById(id);
        }
        else {
            tbItem=new TbItem();
        }
        return tbItem;
    }
    @RequestMapping(value = "list" ,method = RequestMethod.GET)
    public  String list(Model model)
    {
        List<TbItem> items = tbItemServicer.findAll();
        model.addAttribute("tbitems",items);
        return  "item-list";
    }
    @RequestMapping(value = "form" ,method = RequestMethod.GET)
    public  String from()
    {
        return "item-form";
    }

    @RequestMapping(value = "save" ,method = RequestMethod.POST)
    public String save(TbItem tbItem ,  Model model ,RedirectAttributes redirectAttributes)
    {
        BaseResult baseResult = tbItemServicer.save(tbItem);
        //保存成功
        if (baseResult.getStatus()==BaseResult.STATUS_SUCCESS)
        {
            redirectAttributes.addFlashAttribute("baseResult",baseResult);
            return "redirect:/item/list";
        }
        //保存失败
        else {

            model.addAttribute("baseResult",baseResult);
            return "item-form";
        }

    }
    //分页
    @ResponseBody
    @RequestMapping(value = "page", method = RequestMethod.GET)
    public PageInfo<TbItem> page(HttpServletRequest request, TbItem tbItem){
        Map<String,Object> result=new HashMap<>();

        String strStar=request.getParameter("start");
        String strDraw=request.getParameter("draw");
        String strLength=request.getParameter("length");
        System.out.println("strStar="+strStar+",strDraw="+strDraw+",strLength="+strLength);
        int start=strStar==null?0:Integer.parseInt(strStar);
        int draw=strDraw==null?0:Integer.parseInt(strDraw);
        int length=strLength==null?10:Integer.parseInt(strLength);

        PageInfo<TbItem> pageInfo = tbItemServicer.page(draw, start, length,tbItem);

        return pageInfo;
    }
    //批量删除
    @ResponseBody
    @RequestMapping(value = "delete",method = RequestMethod.POST)
    public  BaseResult delete(String ids)
    {
        BaseResult baseResult=null;
        if(StringUtils.isNoneBlank(ids)){
            String [] array_ids=ids.split("'");
            tbItemServicer.deleteMulti(array_ids);
            baseResult=BaseResult.success("删除商品成功");
        }
        else{
            baseResult=BaseResult.fail("删除商品失败");
        }
        return baseResult;
    }
    @RequestMapping(value = "detail",method = RequestMethod.GET)
    public  String detail(TbItem TbItem)
    {
        return "item-detail";
    }


}
