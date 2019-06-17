package com.zls.myshop.web.admin.Dao;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.domain.TbCategory;

import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 15:59
 **/

public interface TbCategoryDao {

    TbCategory getById(Long id);

    List<TbCategory> selectAll();

    BaseResult save(TbCategory tbCategory);

    List<TbCategory>  selectByPid(Long id);

    void insert(TbCategory tbCategory);

    void update(TbCategory tbCategory);

    void delete(String[] ids);

}
