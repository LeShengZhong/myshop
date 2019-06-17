package com.zls.myshop.web.admin.Service.Impl;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbContent;
import com.zls.myshop.web.admin.Dao.TbContentDao;
import com.zls.myshop.web.admin.Service.TbContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-09 11:01
 **/
@Service
public class TbContentServiceImpl  implements TbContentService {
    @Autowired
    private TbContentDao tbContentDao;
    @Override
    public TbContent getById(Long id) {
        TbContent tbContent=new TbContent();
        tbContent.setId(id);
        List<TbContent> contents = tbContentDao.select(tbContent);
        return contents.get(0);
    }

    @Override
    public PageInfo<TbContent> page(int draw, int start, int length, TbContent tbContent) {
        int count=tbContentDao.count(tbContent);

        Map<String ,Object> params=new HashMap<>();
        params.put("start",start);
        params.put("length",length);
        params.put("tbItem",tbContent);

        PageInfo<TbContent> pageInfo=new PageInfo<>();
        pageInfo.setDraw(draw);
        pageInfo.setRecordsFiltered(count);
        pageInfo.setRecordsTotal(count);
        pageInfo.setData(tbContentDao.page(params));
        return pageInfo;
    }

    @Override
    public int count(TbContent tbContent) {
        return tbContentDao.count(tbContent);
    }

    @Override
    public BaseResult save(TbContent tbContent) {
        BaseResult baseResult=BaseResult.success();
        if (tbContent.getId()!=null){
            //修改
            tbContent.setUpdated(new Date());
            tbContentDao.update(tbContent);
        }else {
            //添加
            tbContent.setCreated(new Date());
            tbContent.setUpdated(new Date());
            tbContentDao.insert(tbContent);
        }
        return baseResult;
    }
}
