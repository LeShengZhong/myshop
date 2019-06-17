package com.zls.myshop.web.ui.Dao;

import com.zls.myshop.domain.TbContent;

import java.util.List;

/**
 * @author @乐声
 * @Create 2019-05-13 17:01
 **/
public interface IndexDao {
    List<TbContent> selectByTbContent(TbContent tbContent);
}
