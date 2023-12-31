'''
Author: didiplus 
Date: 2023-08-12 13:53:48
LastEditors: didiplus 
LastEditTime: 2023-09-12 16:12:03
FilePath: \pic\vue3-waterfall-plugin\server\app\main.py
Description: 
Copyright (c) 2023 by didiplus, All Rights Reserved. 
'''

from  fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import toutiao
from schemas import TuotiaoParams
import uvicorn

app = FastAPI()

# 添加跨域中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有来源访问
    allow_methods=["*"],  # 允许所有HTTP方法
    allow_headers=["*"],  # 允许所有HTTP头
)


@app.post("/image_toutaio")
def iamge_toutiao(params:TuotiaoParams):
    return {"code":1,"data":toutiao.search_pic(params)}




if __name__ == "__main__":
    uvicorn.run(app)


