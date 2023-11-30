---
title: Docker隐射的端口外网不能访问
date: 2023-11-22
tag:
- docker
- nacos
- firewalld
- 路由转发
- ip_forward
---

## 问题

比如现在有一台公网服务器，公网ip是111.111.111.111，内网ip是：10.1.1.1 。在这台服务器上面跑了两个服务：

1. mysql 
    
    非docker方式，暴露的端口是3306，绑定的ip是0.0.0.0
    
2. nacos 
    
    docker方式，映射到宿主机的端口有8848和9848。连接的mysql地址是：111.111.111.111:3306/nacos
    

现在发现的问题有：

1. nacos总起不来，总提示`No DataSource set` ，但在本地却能连接 111.111.111.111:3306/nacos，并能读写数据
2. 后面把nacos的mysql连接地址改10.1.1.1:3306/nacos后，nacos能启动成功了，但外网访问不了nacos的控制台

这台服务器之前两个服务都能正常在公网访问，突然有一天发现不行了

查看防火墙端口设置：

![Untitled](https://cdn.justdopay.com/notion2/md5-500b800b6d84bf28a0a3c1adc4b156aa.png)

8848端口也开了的，在服务器上执行`telnet 127.0.0.1 8848`也是通的，但执行`telnet 111.111.111.111 8848`就不通

网上各种乱搜，发现了始作俑者：**ip_forward**

## 解决过程

通过是否开启了路由转发 cat /proc/sys/net/ipv4/ip_forward

```json
输出0表示没有开启，1表示开启了。此时输出的是0
```

为0，表示禁用了路由转发，也就是说禁止了本机网卡之间的通信。

禁用后，在docker容器内部也就无法访问公网

也就是解释了为什么nacos的mysql地址设置为111.111.111.111:3306/nacos的时候启动不了

设置为1

```json
不能直接vim /proc/sys/net/ipv4/ip_forward 来修改.

正确姿势：
vim /etc/sysctl.conf

找到net.ipv4.ip_forward，将其值修改为1. 或者在文末追加这个配置

net.ipv4.ip_forward = 1
```

使其生效

```json
sysctl -p
```

到此可以验证下在docker容器内部能否访问外网，我这里是重启了docker

至此，上面的服务都能正常访问了

## 溯源

之前这两个服务一直都是好的，为啥“突然”就不行了。

回忆下来估计是中途按照了BBR，并重启了一次服务器，基本可以确定和这个有关系。

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：去年疫情学的料理，是时候复习一下了。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e613b572-0742-4028-b38e-04c5b76b5949)
