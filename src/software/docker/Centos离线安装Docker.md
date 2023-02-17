---
title: Centos离线安装Docker
tags: 新建,模板,小书匠
date: 2019-11-11
---

## 下载离线安装包   
下载地址： https://download.docker.com/linux/static/stable/x86_64/

 这里选择了 docker-19.03.12.tgz


## 禁用SELinux
如果不禁用的话，本人遇到过如下问题：在开启防火墙的情况下，执行systemctl start docker 卡死。 关闭防火墙后，上面的命令就能正常启动
```shell
vi /etc/selinux/config   

编辑上面的文件把SELINUX设置为disabled，重启后生效，如果不重启可以通过命令临时生效:  setenforce 0
```

## 解压
```
tar -zxvf 离线安装包

mv docker/* /usr/bin
```

## 编辑开机启动脚本

```
vi /etc/systemd/system/docker.service

粘贴下面的内容：

[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
    
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
    
[Install]
WantedBy=multi-user.target

```



## 启动Docker
```
//赋予执行权限
chmod +x /etc/systemd/system/docker.service

//设置开启启动
systemctl enable docker

//启动docker
systemctl start docker
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：青春期的爱情是精神鸦片，不管你吸没吸，背后总站着无数个林则徐。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=201764ac-e1cd-40ca-bb03-8bb91abf2c24)
