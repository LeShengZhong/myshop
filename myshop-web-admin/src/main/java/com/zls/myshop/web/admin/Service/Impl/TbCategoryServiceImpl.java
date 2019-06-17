package com.zls.myshop.web.admin.Service.Impl;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.validator.BeanValidator;
import com.zls.myshop.domain.TbCategory;
import com.zls.myshop.web.admin.Dao.TbCategoryDao;
import com.zls.myshop.web.admin.Service.TbCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 15:59
 **/
@Service
public class TbCategoryServiceImpl implements TbCategoryService {
    @Autowired
    private TbCategoryDao tbCategoryDao;
    @Override
    public TbCategory getById(Long id) {
        return tbCategoryDao.getById(id);
    }

    @Override
    public List<TbCategory> selectAll() {
        return tbCategoryDao.selectAll();
    }

    @Override
    public BaseResult save(TbCategory tbCategory) {
        String validator = BeanValidator.validator(tbCategory);
        if (validator != null) {
            return BaseResult.fail(validator);
        } else {
            TbCategory parent = tbCategory.getParent();
            // 如果没有选择父级节点则默认设置为根目录
            if (parent == null || parent.getId() == null) {
                // 0 代表根目录
                parent.setId(0L);
            }

            tbCategory.setUpdated(new Date());
            // 新增
            if (tbCategory.getId() == null) {
                tbCategory.setCreated(new Date());
                tbCategory.setIsParent(false);

                // 判断当前新增的节点有没有父级节点
                if (parent.getId() != 0L) {
                    TbCategory currentCategoryParent = getById(parent.getId());
                    if (currentCategoryParent != null) {
                        // 为父级节点设置 isParent 为 true
                        currentCategoryParent.setIsParent(true);
                        update(currentCategoryParent);
                    }
                }

                // 父级节点为 0 ，表示为根目录
                else {
                    // 根目录一定是父级目录
                    tbCategory.setIsParent(true);
                }

                tbCategoryDao.insert(tbCategory);
            }

            // 修改
            else {
                update(tbCategory);
            }
            return BaseResult.success("保存分类信息成功");
        }
    }

    @Override
    public List<TbCategory> selectByPid(Long id) {
        return tbCategoryDao.selectByPid(id);
    }

    @Override
    public void insert(TbCategory tbCategory) {
      tbCategoryDao.insert(tbCategory);
    }

    @Override
    public void update(TbCategory tbCategory) {
       tbCategoryDao.update(tbCategory);
    }

    @Override
    public void delete(Long  id) {
        List<String> targetArray = new ArrayList<>();
        findAllChild(targetArray, id);

        String[] categoryIds = targetArray.toArray(new String[targetArray.size()]);

        // 删除类目及其子类目
        tbCategoryDao.delete(categoryIds);


    }
    private void findAllChild(List<String> targetList, Long parentId) {
        targetList.add(String.valueOf(parentId));

        List<TbCategory> tbCategories = selectByPid(parentId);
        for (TbCategory tbCategory : tbCategories) {
            findAllChild(targetList, tbCategory.getId());
        }
    }
}
