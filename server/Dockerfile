# 引入python版本
FROM python:3.8
 
# 设置时间
#RUN ln -sf /usr/share/zoneinfo/Asia/Beijing  /etc/localtime
 
# 输出时间
#RUN echo 'Asia/Beijing' >/etc/timezone
 
# 设置工作目录
WORKDIR /code
 
# 复制该文件到工作目录中，./requirements.txt表示当前目录下的requirements.txt文件。这里      # 的/code/requirements.txt是docker内部自动生成的工作目录，不用自己创建的，请注意。
COPY ./requirements.txt /code/requirements.txt
 
# 禁用缓存并批量安装包(后面的链接是利用豆瓣源安装，速度会加快)
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt -i https://pypi.douban.com/simple/
 
# 复制代码到工作目录
COPY ./app /code/app
 
# 放开端口
EXPOSE 8001
 
# 命令行运行，启动uvicorn服务，指定ip和端口(--reload：让服务器在更新代码后重新启动。仅在开发时使用该选项。)
CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8001"]