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
- **随机毒鸡汤**：嘴巴那么能喷，莫非抹了开塞露。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=05568357-15ed-46bd-8880-fa7555b0152e)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：长得帅的不说话叫高冷，长得丑的不说话叫自闭。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=1c26716e-48ab-4d3b-a51a-a41526d87c6a)
