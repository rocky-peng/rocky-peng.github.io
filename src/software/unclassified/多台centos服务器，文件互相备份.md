---
title: 多台centos服务器，文件互相备份
date: 2022-02-14
---

## 背景与目标
现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。
如果服务器A上产生了新的备份文件，能自动同步到服务器B

达到上面的目的，总体就是两个软件：
1. rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）
2. inotify-tools （需要在A上安装）

## 第一步
在服务器A上执行
```shell
ssh-keygen
ssh-copy-id 服务器B的IP地址
```
中途会要求输入服务器b的登陆密码
这一步是为了在服务器A上能免密码登陆服务器B

## 第二步
在服务器A上执行
```shell
yum install -y epel-release
yum --enablerepo=epel install inotify-tools
```






<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我就像是玻璃瓶里面的苍蝇，前途满眼光明，就是找不到出口。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=109ad366-9e75-40a0-8248-d1b7a3abdf79)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：经常废寝，从不忘食。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=eeb24315-fd74-420b-9b32-49c50e9443bb)
