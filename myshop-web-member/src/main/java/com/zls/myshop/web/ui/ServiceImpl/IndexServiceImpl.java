package com.zls.myshop.web.ui.ServiceImpl;

import com.zls.myshop.domain.TbContent;
import com.zls.myshop.web.ui.Dao.IndexDao;
import com.zls.myshop.web.ui.Service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-13 17:03
 **/
@Service
public class IndexServiceImpl implements IndexService
{
    @Autowired
   private IndexDao indexDao;

    @Override
    public List<TbContent> selectByTbContent(TbContent tbContent) {
        return indexDao.selectByTbContent(tbContent);
    }
}
