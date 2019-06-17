package com.zls.myshop.web.ui.Service;

import com.zls.myshop.domain.TbContent;

import java.util.List;

/**
 * @program: myshop
 * @description:
 * @author: zls
 * @create: 2019-05-13 17:03
 **/

public interface IndexService {

    List<TbContent> selectByTbContent(TbContent tbContent);
}
