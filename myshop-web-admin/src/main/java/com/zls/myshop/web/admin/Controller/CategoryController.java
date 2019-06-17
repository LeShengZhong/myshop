package com.zls.myshop.web.admin.Controller;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.domain.TbCategory;
import com.zls.myshop.domain.TbItem;
import com.zls.myshop.web.admin.Service.TbCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

/**
 * @program: myshop
 * @description:商品分类控制器
 * @author: zls
 * @create: 2019-05-07 14:40
 **/
@Controller
@RequestMapping(value="category")
public class CategoryController {
    @Autowired
    TbCategoryService tbCategoryService;
   @ModelAttribute
   public TbCategory getTbCategory(Long id)
   {
       TbCategory tbCategory=null;
        // id 不为空，则从数据库获取
       if (id != null) {
           tbCategory = tbCategoryService.getById(id);
       } else {
           tbCategory = new TbCategory();
       }
       return tbCategory;
   }

    @RequestMapping(value = "form",method = RequestMethod.GET)
    public String form(TbCategory tbCategory){

       return "category-form";
    }

    @RequestMapping(value = "list",method = RequestMethod.GET)
    public  String list(Model model){
        List<TbCategory> targetList = new ArrayList<>();
        List<TbCategory> sourceList = tbCategoryService.selectAll();

        // 排序
        sortList(sourceList, targetList, 0L);

        model.addAttribute("tbCategories", targetList);
        return "category-list";
    }
    //保存信息
    @RequestMapping(value = "save", method = RequestMethod.POST)
    public String save(TbCategory tbCategory, Model model, RedirectAttributes redirectAttributes) {
        BaseResult baseResult = tbCategoryService.save(tbCategory);

        if (baseResult.getStatus() == 200) {
            redirectAttributes.addFlashAttribute("baseResult", baseResult);
            return "redirect:/category/list";
        } else {
            model.addAttribute("baseResult", baseResult);
            return form(tbCategory);
        }
    }

    @ResponseBody
    @RequestMapping(value = "tree/data", method = RequestMethod.POST)
    public List<TbCategory> treeData(Long id) {
        if (id == null) {
            id = 0L;
        }
        return tbCategoryService.selectByPid(id);
    }

    //排序
    private void sortList(List<TbCategory> sourceList, List<TbCategory> targetList, Long parentId) {
        for (TbCategory sourceEntity : sourceList) {
            if (sourceEntity.getParent().getId().equals(parentId)) {
                targetList.add(sourceEntity);

                // 判断有没有子节点，如果有则继续追加
                if (sourceEntity.getIsParent()) {
                    for (TbCategory currentEntity : sourceList) {
                        if (currentEntity.getParent().getId().equals(sourceEntity.getId())) {
                            sortList(sourceList, targetList, sourceEntity.getId());
                            break;
                        }
                    }
                }
            }
        }
    }
}
