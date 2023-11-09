---
title: 如何安装Google BBR
date: 2023-11-09
tag: 
- BBR
---

BBR 是google发布一个网络拥塞算法，相比其他算法而言其性能更高，能更好的利用网络带宽。

## 前提条件

- CentOS 7.x
- sudo 权限

## 步骤一：升级内核

1. 查看当前内核
    
    ```json
    uname -r
    ```
    
2. 会有类似下面的输出
    
    ```json
    3.10.0-514.2.2.el7.x86_64
    ```
    
3. 可以看到内核版本是3.10.0
4. 安装 ELRepo 
    
    ```json
    sudo rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
    
    sudo rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm
    ```
    
5. 安装高版本内核
    
    ```json
    sudo yum --enablerepo=elrepo-kernel install kernel-ml -y
    ```
    
6. 安装完成后查看安装结果
    
    ```json
    rpm -qa | grep kernel
    ```
    
7. 如果安装成功，上面命令会输出 `kernel-ml-x.x.x-1.el7.elrepo.x86_64` ，类似下面样子
    
    ```json
    kernel-ml-4.9.0-1.el7.elrepo.x86_64
    
    kernel-3.10.0-514.el7.x86_64
    
    kernel-tools-libs-3.10.0-514.2.2.el7.x86_64
    
    kernel-tools-3.10.0-514.2.2.el7.x86_64
    
    kernel-3.10.0-514.2.2.el7.x86_64
    ```
    
8. 启用新的内核，启用前查看grub2启动项
    
    ```json
    sudo egrep ^menuentry /etc/grub2.cfg | cut -f 2 -d \'
    ```
    
9. 会有类似下面的输出
    
    ```json
    CentOS Linux 7 Rescue a0cbf86a6ef1416a8812657bb4f2b860 (4.9.0-1.el7.elrepo.x86_64)
    
    CentOS Linux (4.9.0-1.el7.elrepo.x86_64) 7 (Core)
    
    CentOS Linux (3.10.0-514.2.2.el7.x86_64) 7 (Core)
    
    CentOS Linux (3.10.0-514.el7.x86_64) 7 (Core)
    
    CentOS Linux (0-rescue-bf94f46c6bd04792a6a42c91bae645f7) 7 (Core)
    ```
    
10. 从上往下，从0开始往下数，我们要启用的内核位置是1，于是执行
    
    ```json
    sudo grub2-set-default 1
    ```
    
11. 重启系统
    
    ```json
    reboot
    ```
    
12. 重启后查看系统内核
    
    ```json
    uname -r
    ```
    
13. 会有类似下面的输出
    
    ```json
    4.9.0-1.el7.elrepo.x86_64
    ```
    

## 步骤二：启用BBR

1. 修改`sysctl` 配置已启用BBR
    
    ```json
    echo 'net.core.default_qdisc=fq' | sudo tee -a /etc/sysctl.conf
    
    echo 'net.ipv4.tcp_congestion_control=bbr' | sudo tee -a /etc/sysctl.conf
    
    sudo sysctl -p
    ```
    
2. 验证是否已经启用了BBR
    
    ```json
    sudo sysctl net.ipv4.tcp_available_congestion_control
    ```
    
3. 会输出类似下面的内容
    
    ```json
    net.ipv4.tcp_available_congestion_control = bbr cubic reno
    ```
    
4. 进一步验证
    
    ```json
    sudo sysctl -n net.ipv4.tcp_congestion_control
    ```
    
5. 应该输出
    
    ```json
    bbr
    ```
    
6. 最后检查内核模块是否已经加载
    
    ```json
    lsmod | grep bbr
    ```
    
7. 会输出类似下面的内容
    
    ```json
    tcp_bbr                16384  0
    ```
    

## 步骤三

没有了，享用BBR吧

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：看了年度账单，才知道自己居然，这么有钱。
<br/><br/>
![](https://api.btstu.cn/sjbz/?m_lx=suiji&uuid=1c1cfd06-5396-4860-b471-ff5bc4305c59)
