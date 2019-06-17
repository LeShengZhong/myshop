package com.zls.myshop.web.admin.Service;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbContent;

/**
 * @author @乐声
 * @Create 2019-05-09 11:00
 **/
public interface TbContentService {

    TbContent getById(Long id);
    //分页功能
    PageInfo<TbContent> page(int draw, int start, int length, TbContent tbContent);
    //查询总数
    int count(TbContent tbContent);

    BaseResult save(TbContent tbContent);

}
