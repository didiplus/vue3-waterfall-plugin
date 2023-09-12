'''
Author: didiplus 
Date: 2023-08-16 17:21:45
LastEditors: didiplus 
LastEditTime: 2023-09-11 22:26:01
FilePath: \pic\api\toutiao.py
Description: 
Copyright (c) 2023 by didiplus, All Rights Reserved. 
'''
import requests
from fake_useragent import UserAgent
from schemas import TuotiaoParams
from loguru import logger
def search_pic(params:TuotiaoParams):
    try:

        url = "https://dficimage.toutiao.com/api/proxy/get"
        params = {
            "from": params.page,
            "size": params.size,
            # "totalCount": 18389574,
            "term": params.term,
            "search_id": 7274062948258316581,
            "user_id": 68783357974,
            "media_id": 1609422238702596,
            "search_from": "search",
            "position": "article_icstock",
            "platform": "toutiaohao",
            "path": "/micro/search"
        }
        res = requests.get(
            url,
            params=params,
            headers={"User-Agent":UserAgent().random},
            timeout=10
            )
        if res.json().get("code") == 1:
            logger.info("获取头条的图片的数据:{}".format(res.json()))
            return res.json().get("data").get("data").get("hits")
    except Exception as e:
        logger.error('抓取头条的图片错误：{}'.format(e))
