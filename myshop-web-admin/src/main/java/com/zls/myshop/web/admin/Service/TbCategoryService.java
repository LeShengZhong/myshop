package com.zls.myshop.web.admin.Service;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.domain.TbCategory;

import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-07 15:57
 **/

public interface TbCategoryService {

    TbCategory getById(Long id);

    List<TbCategory> selectAll();

    BaseResult save(TbCategory tbCategory);

    List<TbCategory>  selectByPid(Long id);

    void insert(TbCategory tbCategory);

    void update(TbCategory tbCategory);

    void delete(Long  id);

}
