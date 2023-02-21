---
title: Docker跨主机通信方案
date: 2019-12-09
---

## 方案一：pipework

主要参照的是：https://www.jianshu.com/p/4d8605bea2bb 这篇博文。

- 可以达到容器与宿主机保持在同一个网段
- 但是无法指定docker容器IP，IP是递增的
- 操作过程中可能会中断网络
- 容器内部有时可以联网有时不可以（估计是ip无效）
- 跨主机的网络互通未测试了
- 重启宿主机后信息会丢失，又要重新执行下设置步骤

**注意：** 上诉问题也许是我个人操作不当才有的问题，但我还是不建议采用

## 方案二：weave
采用这个方案后，我测试了下方案一出现的问题，貌似都没有

我是在自己电脑（ 192.168.43.209 ）上测试的，用vmware安装了一个centos7.4的系统，网络采用桥接方式，然后进入系统安装了一些我自己常用的工具后关机，使用vmware的 create linked clone 功能创建了三个节点：
- test1   （192.168.43.155）
- test2   （192.168.43.2）
- test4   （192.168.43.126）

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082431307.png)

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082436552.png)

### 步骤一：在所有节点上安装weave
```
curl -L git.io/weave -o /usr/local/bin/weave
chmod a+x /usr/local/bin/weave
```

### 步骤二：在所有节点上设置防火墙
- 可以直接简单粗暴关闭防火墙
```
➜  ~ systemctl disable firewalld.service  //禁止防火墙开机启动
➜  ~ systemctl start firewalld			//开启防火墙
➜  ~ firewall-cmd --state               //查看防火墙是否启动
running
➜  ~ systemctl stop firewalld 			//关闭防火墙
➜  ~ firewall-cmd --state               
not running
```

- 第二种就是放行weave需要的端口
```
iptables -t filter -I INPUT -p tcp --dport 6783 -j ACCEPT
iptables -t filter -I INPUT -p udp --dport 6783 -j ACCEPT
iptables -t filter -I INPUT -p udp --dport 6784 -j ACCEPT
```
具体iptables的用法参考（如果不关心，只需要执行上面三行命令就行）：http://www.zsythink.net/archives/tag/iptables/page/2/ 

**注意：** 是所有节点都要执行
### 在所有节点上启动weave
在test1 上执行：
```
weave launch

这个命令会启动一个docker容器
```

在test2 上执行：
```
weave launch 192.168.43.155

这个命令会启动一个docker容器
```

在test4 上执行：
```
weave launch 192.168.43.155 192.168.43.2
这个命令会启动一个docker容器
```

在节点n上执行：
```
weave launch ip1 ip2 ip3 ipn
这个命令会启动一个docker容器
```

### 启动docker容器
**注意：** 启动容器前，**先执行:  eval $(weave env)** ，将docker命令代理给weave 执行,(如果先执行这个, docker命令启动的容器就会被自动加入weave网络,并自动分配IP)
```
test1: 
docker run -itd --name t1 centos

test2:
docker run -itd --name t2 centos

test4:
docker run -itd --name t4 centos
```

上诉的命令正常来说不会设置docker容器的hostname为name的值，但由于执行了eval $(weave env)命令，所以上诉的命令会自动设置docker容器的hostname为name参数的值

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082444664.png)

### 其他
我尝试过重启宿主机，重启docker。这个时候重启之前的t1 t2 t4后它们还是能互通，**若要新建docker容器，需要再执行下 eval $(weave env)**




### WEAVE 扩展资料

- github地址：https://github.com/weaveworks/weave
- 官网地址：https://www.weave.works/docs/net/latest/install/using-weave/
- 其他博客：https://www.jianshu.com/p/b91bf21ac946
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：愿你以后，有酒有肉有姑娘，姑娘丑的不像样。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=4bb346cf-b088-43b3-a1f2-6f3a88d0acb7)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：去年的猪肉我爱答不理，今年的猪肉我高攀不起。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=59cb9209-a460-414b-b9b1-06c187220641)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要太在意别人的看法，不然你会发现 ，他们的看法都是对的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=8db198c5-4f77-451c-b812-1fa0ea4ada46)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：一个成年人是不会挑食的，他们会说，我对这个过敏。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=978f707b-399d-4b98-8c52-d33b42435fe5)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你俩看起来真般配，月老的垃圾分类，做的还挺到位。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=f45587c8-8327-49f3-8597-9499b358d327)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：一只猪被孤立，于是它变成了朱古力。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=b4d63e79-9f1c-480f-abae-e16e34c1a75d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我并不是丑，我只是不太符合，当代人的审美。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=4bed94f3-1563-4d92-bf76-0c1be56bbbf7)
