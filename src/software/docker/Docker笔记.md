---
title: Docker笔记
date: 2018-09-08
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
- **随机毒鸡汤**：脸大的人一般脾气都超好，因为脸大，翻脸真的很辛苦。
<br/><br/>
![](https://api.btstu.cn/sjbz/?m_lx=suiji&uuid=71955925-b1f9-402f-9dad-5aad52a99f21)
