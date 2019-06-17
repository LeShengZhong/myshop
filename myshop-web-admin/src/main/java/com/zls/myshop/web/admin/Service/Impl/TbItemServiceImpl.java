package com.zls.myshop.web.admin.Service.Impl;

import com.zls.myshop.commons.dto.BaseResult;
import com.zls.myshop.commons.dto.PageInfo;
import com.zls.myshop.domain.TbItem;
import com.zls.myshop.web.admin.Dao.TbItemDao;
import com.zls.myshop.web.admin.Service.TbItemServicer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TbItemServiceImpl implements TbItemServicer {
    @Autowired
    private TbItemDao tbItemDao;
    @Override
    public List<TbItem> findAll() {
        return tbItemDao.findAll();
    }

    @Override
    public TbItem getById(Long id) {
        return tbItemDao.getById(id);
    }

    @Override
    public BaseResult save(TbItem tbItem) {
        BaseResult baseResult=BaseResult.success();
        System.out.println(tbItem.toString());
        //更新商品信息
        if (tbItem.getId()!=null){
            tbItem.setUpdated(new Date());
            tbItemDao.update(tbItem);
        }
        else {
            //添加商品
            tbItem.setCreated(new Date());
            tbItem.setUpdated(new Date());
            tbItemDao.insert(tbItem);
        }

        return baseResult;
    }

    //批量删除
    @Override
    public void deleteMulti(String[] ids) {
        tbItemDao.deleteMulti(ids);

    }

    @Override
    public void deleteByid(Long id) {
        tbItemDao.deleteByid(id);
    }

    //分页
    @Override
    public PageInfo<TbItem> page(int draw, int start, int length, TbItem tbItem) {
        int count=tbItemDao.count(tbItem);

        Map<String ,Object> params=new HashMap<>();
        params.put("start",start);
        params.put("length",length);
        params.put("tbItem",tbItem);

        PageInfo<TbItem> pageInfo=new PageInfo<>();
        pageInfo.setDraw(draw);
        pageInfo.setRecordsFiltered(count);
        pageInfo.setRecordsTotal(count);
        pageInfo.setData(tbItemDao.page(params));
        return pageInfo;

    }

    @Override
    public int count(TbItem tbItem) {
        return tbItemDao.count(tbItem) ;
    }
}
