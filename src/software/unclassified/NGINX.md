---
title: NGINX
date: 2018-04-07
---

# NGINX

## 感性体验下负载均衡配置
1. 本地启动两个jetty
	
要达到的效果：通过nginx开启80端口，在浏览通过localhost来访问jetttyA 和 jettyB 提供的服务。

```shell
jettyA   localhsot:6000    首页输出:6000
jettyB   localhsot:7000    首页输出:7000

```

2. 进入nginx配置文件目录
```shell
cd /etc/nginx
```
	
![](https://cdn.justdopay.com/xiaoshujiang/1629079994607.png "WeChatad950e5ad0c63b5869efc740570cfa47")
	
3. 修改 nginx.conf
```shell
在http节点下新增如下配置：

upstream lyzc {
	  ip_hash;
	  server localhost:6000;
	  server localhost:7000;
 }
 
 这个配置即为负载均衡的配置，但现在还没有使用。
 
 lyzc ：对集群的命名，可以为域名，名称自己确定
 ip_hash :  负载均衡算法，可以不写（不写的情况默认为轮询算法）
 server : 配置提供服务的机器节点信息，可以任意多个
 
 
 然后在server节点下，修改或添加location的配置如下：
 
 location / {
		  proxy_pass http://lyzc;
  }
 
```

## 安装nginx
```shell
yum install nginx

配置文件在  /etc/nginx目录

cd /etc/nginx

cp nginx.conf  nginx.conf.bak

修改 nginx.conf 文件：参考其他配置

```

![](https://cdn.justdopay.com/xiaoshujiang/1629080026033.jpg)
![](https://cdn.justdopay.com/xiaoshujiang/1629080008840.jpg)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：大家都夸我贤惠，闲的什么都不会。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=482b2b8f-9eaa-403c-9fdd-71c07246d3d7)
