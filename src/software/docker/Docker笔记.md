---
title: Docker笔记
date: 2018-09-8=15
---

镜像与容器   ===  类与对象


## 安装
```

yum install -y docker

----

启动
systemctl start docker.service
或者
service docker start

----

设置自启动
systemctl enable docker.service

----


```


## 创建自己的镜像
Dockerfile:
```
FROM    sebp/elk
MAINTAINER rocky "rocky.peng@qq.com"
RUN apt-get update
RUN apt-get install htop
RUN apt-get update && apt-get install git --assume-yes
RUN apt-get install zsh --assume-yes
RUN sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

在dockerfile所在的目录执行：
```
docker build -t pqs/elk . 

-t : 指定镜像id和tag
. 表示dockerfile所在的目录
```

## 导入导出镜像
```
导出
docker save imageid -o 导出的文件名.tar

导入
docker load -i xxx.tar
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：如果不出意外，你将终生平凡。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=a24f85e5-4beb-4277-b215-8d8132273f05)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：成功的路上从不拥挤，因为坚持的人不多。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=5d9b8d5a-61b6-4dba-af8d-b19f54ab6567)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：谈恋爱就像开车，爆胎后新司机只会打电话哭，老司机换上备胎就继续上路。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=d0649e70-7396-4633-81c9-07fc97aea486)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你只知道人家化妆比你好看，却不知道她们卸了妆，还是比你好看！
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=699d3e40-590b-4f8b-8118-eced8f3d61a3)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你俩看起来真般配，月老的垃圾分类，做的还挺到位。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=ea8f4ffe-3bd8-4935-86bf-d57136617ac1)
