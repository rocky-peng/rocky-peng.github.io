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
- **随机毒鸡汤**：如果你觉得，围着你的都是苍蝇，那可能你自己是坨屎。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=fb8d0504-362f-4622-a8c6-706c90e29c7c)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：珍惜对你好的人，否则错过了就不知何时，才能遇到另一个瞎了眼的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=b45ed60b-682c-4014-8722-ce1229ff06b4)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：答案真可爱，你看它总是 略略略略略 的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=b84da82d-cde8-4917-82af-7ec1c172076a)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：被忽视是因为，自己还没有优秀到，不容忽视的地步。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=4301c112-2aea-489b-94b7-451fda3e6de6)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：钱其实不是被你花了，只是换一种方式陪伴你。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=014501c3-a833-4c95-a305-ec1f2df74076)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：一日不读书没人看得出，一周不读书，智商堪比猪。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=55b75897-e371-4391-9b5e-830c75c74fca)
