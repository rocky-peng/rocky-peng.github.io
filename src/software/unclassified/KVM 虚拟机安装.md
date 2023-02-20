--- 
title: KVM 虚拟机安装
date: 2020-03-05
---

笔记内容：CentOS7上安装并配置KVM，以及通过KVM安装CentOS系统
笔记日期：2018-03-07
28.5 Centos7上安装KVM
28.6 配置网卡
28.7 创建虚拟机安装CentOS7
28.8 虚拟机管理
Centos7上安装KVM
首先我们需要一台配置较高的CentOS7虚拟机，当然用物理机也可以，我这里用的是虚拟机，配置如下：

硬盘需要新增一个，其中的新硬盘用于在KVM里安装操作系统时需要用到，内存的大小最好有4个G，最低2个G，因为我这里物理机的内存有16G所以就给分了8G。具体的需要根据你物理机的配置进行分配，CPU的核心最少要给2个。
然后最好做一个快照，中途出现什么问题方便重置：

进入到系统后，关闭iptables或者firewalld，关闭selinux。并且检查cpu参数是否支持虚拟化：
```shell
[root@localhost ~]# systemctl stop firewalld
[root@localhost ~]# systemctl stop iptables
[root@localhost ~]# systemctl disable firewalld
[root@localhost ~]# systemctl disable iptables
[root@localhost ~]# getenforce 
Disabled
[root@localhost ~]# grep -Ei 'vmx|svm' /proc/cpuinfo
```
如果有过滤出vmx或svm关键字就代表支持虚拟化，vmx是Intel的CPU，svm是AMD的CPU。
然后格式化新磁盘，挂载到/kvm_data，当然这个路径可以自定义，我这里使用的是/kvm_data。
```shell
[root@localhost ~]# fdisk -l |grep Disk
Disk /dev/sdb: 53.7 GB, 53687091200 bytes, 104857600 sectors
Disk /dev/sda: 21.5 GB, 21474836480 bytes, 41943040 sectors
Disk label type: dos
Disk identifier: 0x000f0eb3
Disk /dev/mapper/centos-root: 19.8 GB, 19826475008 bytes, 38723584 sectors
Disk /dev/mapper/centos-swap: 1073 MB, 1073741824 bytes, 2097152 sectors
[root@localhost ~]# mkfs.ext4 /dev/sdb  # 会有询问，输入y即可
[root@localhost ~]# blkid /dev/sdb  # 检查是否已格式化
/dev/sdb: UUID="5a7cf162-f8f3-4d02-ad72-17bde010efc8" TYPE="ext4" 
[root@localhost ~]# mkdir /kvm_data  # 创建挂载目录
[root@localhost ~]# mount /dev/sdb /kvm_data  # 将新磁盘挂载到/kvm_data目录下
[root@localhost ~]# vim /etc/fstab  # 配置开机时挂载
/dev/sdb        /kvm_data       ext4    defaults        0 0
```

最后就是安装kvm：
```shell
[root@localhost ~]# yum install -y  virt-*  libvirt  bridge-utils qemu-img
```
配置网卡
安装完KVM之后，需要配置一下网卡，增加一个桥接网卡：
```shell
[root@localhost ~]# cd /etc/sysconfig/network-scripts/
[root@localhost /etc/sysconfig/network-scripts]# cp ifcfg-eno16777728 ifcfg-br0  # 拷贝当前的网卡文件
[root@localhost /etc/sysconfig/network-scripts]# vim ifcfg-eno16777728  # 修改文件内容如下
TYPE=Ethernet
BOOTPROTO=dhcp
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=eno16777728
DEVICE=eno16777728
ONBOOT=yes
BRIDGE=br0
[root@localhost /etc/sysconfig/network-scripts]# vim ifcfg-br0  # 修改文件内容如下
TYPE=Bridge
BOOTPROTO=dhcp
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=br0
DEVICE=br0
ONBOOT=yes
[root@localhost /etc/sysconfig/network-scripts]# systemctl restart network  # 重启服务
```
重启完服务后，执行ifconfig命令可以看到此时eno16777728网卡的IP到br0网卡上了，这样我们的网卡就配置完成了：

```shell
[root@localhost /etc/sysconfig/network-scripts]# ifconfig
br0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.77.130  netmask 255.255.255.0  broadcast 192.168.77.255
        inet6 fe80::20c:29ff:fef1:912c  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:f1:91:2c  txqueuelen 0  (Ethernet)
        RX packets 51  bytes 8341 (8.1 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 27  bytes 2710 (2.6 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eno16777728: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        ether 00:0c:29:f1:91:2c  txqueuelen 1000  (Ethernet)
        RX packets 147615  bytes 168580073 (160.7 MiB)
        RX errors 0  dropped 8  overruns 0  frame 0
        TX packets 45008  bytes 3866579 (3.6 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 0  (Local Loopback)
        RX packets 2459  bytes 1125227 (1.0 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2459  bytes 1125227 (1.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost /etc/sysconfig/network-scripts]# 

```
接下来我们就可以启动KVM的服务了：

```shell
[root@localhost ~]# lsmod |grep kvm  # 检查KVM模块是否加载
kvm_intel             162153  0 
kvm                   525259  1 kvm_intel
[root@localhost ~]# systemctl start libvirtd  # 启动libvirtd服务
[root@localhost ~]# ps aux |grep libvirtd  # 检查服务进程
root       5744  2.2  0.1 614840 14120 ?        Ssl  23:02   0:00 /usr/sbin/libvirtd
root       5872  0.0  0.0 112664   964 pts/1    R+   23:02   0:00 grep --color=auto libvirtd
[root@localhost ~]# brctl show  # 可以看到两个网卡
bridge name bridge id       STP enabled interfaces
br0     8000.000c29f1912c   no      eno16777728  # 我们配置的桥接网卡
virbr0      8000.525400240b50   yes     virbr0-nic  # NAT模式的网卡
[root@localhost ~]# 

```
创建虚拟机安装CentOS7
将服务成功启动后，我们就可以使用KVM安装虚拟机了，首先需要准备一个操作系统的镜像文件，我这里用的是CentOS7的镜像文件：
```shell
[root@localhost ~]# cd /tmp/
[root@localhost /tmp]# ls |grep CentOS
CentOS-7-x86_64-DVD-1511.iso
[root@localhost /tmp]# 
```
使用命令行安装这个CentOS7镜像文件：

```shell
[root@localhost ~]# virt-install --name=study01 --memory=512,maxmemory=1024 --vcpus=1,maxvcpus=2 --os-type=linux --os-variant=rhel7 --location=/tmp/CentOS-7-x86_64-DVD-1511.iso --disk path=/kvm_data/study01.img,size=10 --bridge=br0 --graphics=none --console=pty,target_type=serial  --extra-args="console=tty0 console=ttyS0"
```
命令说明：
--name 指定虚拟机的名称
--memory 指定分配给虚拟机的内存资源大小
maxmemory 指定可调节的最大内存资源大小，因为KVM支持热调整虚拟机的资源
--vcpus 指定分配给虚拟机的CPU核心数量
maxvcpus 指定可调节的最大CPU核心数量
--os-type 指定虚拟机安装的操作系统类型
--os-variant 指定系统的发行版本
--location 指定ISO镜像文件所在的路径，支持使用网络资源路径，也就是说可以使用URL
--disk path 指定虚拟硬盘所存放的路径及名称，size 则是指定该硬盘的可用大小，单位是G
--bridge 指定使用哪一个桥接网卡，也就是说使用桥接的网络模式
--graphics 指定是否开启图形
--console 定义终端的属性，target_type 则是定义终端的类型
--extra-args 定义终端额外的参数
开始安装后，正常的情况下会进入到这样一个界面：

这是让你配置语言、时区、安装源、网络、密码等信息，就和我们在VMware里安装CentOS虚拟机是一样的，只不过这个是命令行形式，而VMware里是图形界面罢了。
首先设置语言，按数字1，回车进入以下界面：

例如我要选Chinese就按数字68并回车即可，回车之后会让你选择是中文简体还是繁体，也是按下相应的数字并回车即可：

配置完成之后又会再次回到配置界面，这次我们来设置时区：





设置系统安装盘：









设置root用户的密码：

最后开始安装系统：

安装完成之后就会停止在以下这个界面，按一下回车即可，这时就会重启安装完的系统：

虚拟机管理
重启成功之后就会入到登录界面，可以看到我这里是成功登录的：

这时我们是处于一个虚拟终端的，因为安装了虚拟机，如果要退出来的话，应该说是切出来，按 Ctrl + ] 即可。
切出虚拟机后，可以看到/kvm_data/目录下多了一个虚拟机的磁盘目录：
```shell

[root@localhost ~]# ls /kvm_data/
lost+found  study01.img
[root@localhost ~]# 
查看KVM进程：
[root@localhost ~]# ps axu |grep kvm
root        880  0.0  0.0      0     0 ?        S<   Mar07   0:00 [kvm-irqfd-clean]
qemu       6528  6.9  9.1 1568008 734216 ?      Sl   00:15   0:40 /usr/libexec/qemu-kvm -name study01 -S -machine pc-i440fx-rhel7.0.0,accel=kvm,usb=off,dump-guest-core=off -cpu Haswell,-hle,-rtm -m 1024 -realtime mlock=off -smp 1,maxcpus=2,sockets=2,cores=1,threads=1 -uuid eeedcd47-1546-4e5f-ab2a-f62deb0838cf -display none -no-user-config -nodefaults -chardev socket,id=charmonitor,path=/var/lib/libvirt/qemu/domain-2-study01/monitor.sock,server,nowait -mon chardev=charmonitor,id=monitor,mode=control -rtc base=utc,driftfix=slew -global kvm-pit.lost_tick_policy=delay -no-hpet -no-shutdown -global PIIX4_PM.disable_s3=1 -global PIIX4_PM.disable_s4=1 -boot strict=on -device ich9-usb-ehci1,id=usb,bus=pci.0,addr=0x4.0x7 -device ich9-usb-uhci1,masterbus=usb.0,firstport=0,bus=pci.0,multifunction=on,addr=0x4 -device ich9-usb-uhci2,masterbus=usb.0,firstport=2,bus=pci.0,addr=0x4.0x1 -device ich9-usb-uhci3,masterbus=usb.0,firstport=4,bus=pci.0,addr=0x4.0x2 -device virtio-serial-pci,id=virtio-serial0,bus=pci.0,addr=0x5 -drive file=/kvm_data/study01.img,format=qcow2,if=none,id=drive-virtio-disk0 -device virtio-blk-pci,scsi=off,bus=pci.0,addr=0x6,drive=drive-virtio-disk0,id=virtio-disk0,bootindex=1 -drive if=none,id=drive-ide0-0-0,readonly=on -device ide-cd,bus=ide.0,unit=0,drive=drive-ide0-0-0,id=ide0-0-0 -netdev tap,fd=25,id=hostnet0,vhost=on,vhostfd=27 -device virtio-net-pci,netdev=hostnet0,id=net0,mac=52:54:00:65:d3:3f,bus=pci.0,addr=0x3 -chardev pty,id=charserial0 -device isa-serial,chardev=charserial0,id=serial0 -chardev socket,id=charchannel0,path=/var/lib/libvirt/qemu/channel/target/domain-2-study01/org.qemu.guest_agent.0,server,nowait -device virtserialport,bus=virtio-serial0.0,nr=1,chardev=charchannel0,id=channel0,name=org.qemu.guest_agent.0 -device usb-tablet,id=input0,bus=usb.0,port=1 -device virtio-balloon-pci,id=balloon0,bus=pci.0,addr=0x7 -msg timestamp=on
root       6534  0.0  0.0      0     0 ?        S    00:15   0:00 [kvm-pit/6528]
root       6687  0.0  0.0 112668   960 pts/1    S+   00:25   0:00 grep --color=auto kvm
[root@localhost ~]# 
使用以下命令可以列出当前有多少个虚拟机，以及其状态：
[root@localhost ~]# virsh list
 Id    Name                           State
----------------------------------------------------
 2     study01                        running

[root@localhost ~]# 
以上这个命令无法列出关机状态的虚拟机，需要列出关机状态的虚拟机需要加多一个--all参数：
[root@localhost ~]# virsh list --all
 Id    Name                           State
----------------------------------------------------
 2     study01                        running

[root@localhost ~]# 
查看虚拟机配置文件：
[root@localhost ~]# ls /etc/libvirt/qemu/
networks  study01.xml
[root@localhost ~]# ls /etc/libvirt/qemu/networks/
autostart  default.xml
[root@localhost ~]# ls /etc/libvirt/qemu/networks/autostart/
default.xml
[root@localhost ~]# 
以下介绍一下管理虚拟机的一些常用命令：
[root@localhost ~]# virsh console study01  # 进入指定的虚拟机，进入的时候还需要按一下回车
[root@localhost ~]# virsh start study01  # 启动虚拟机
[root@localhost ~]# virsh shutdown study01  # 关闭虚拟机
[root@localhost ~]# virsh destroy study01  # 强制停止虚拟机
[root@localhost ~]# virsh undefine study01  # 彻底销毁虚拟机，会删除虚拟机配置文件，但不会删除虚拟磁盘
[root@localhost ~]# virsh autostart study01  # 设置宿主机开机时该虚拟机也开机
[root@localhost ~]# virsh autostart --disable study01  # 解除开机启动
[root@localhost ~]# virsh suspend study01 # 挂起虚拟机
[root@localhost ~]# virsh resume study01 # 恢复挂起的虚拟机
进入到刚刚安装的虚拟机里配置一下IP：
[root@localhost ~]# virsh console study01
Connected to domain study01
Escape character is ^]

[root@localhost ~]# ip addr  # 此时还没有能联网的IP
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 52:54:00:65:d3:3f brd ff:ff:ff:ff:ff:ff
[root@localhost ~]# dhclient eth0  # 获取IP地址
[root@localhost ~]# ip addr  # 此时可以看到已经有IP地址了
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 52:54:00:65:d3:3f brd ff:ff:ff:ff:ff:ff
    inet 192.168.77.140/24 brd 192.168.77.255 scope global dynamic eth0
       valid_lft 1793sec preferred_lft 1793sec
    inet6 fe80::5054:ff:fe65:d33f/64 scope link 
       valid_lft forever preferred_lft forever
[root@localhost ~]# yum install -y net-tools  # 获取到IP能联网后安装网络管理工具
[root@localhost ~]# ifconfig  # 安装完之后就可以使用ifconfig命令了
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.77.140  netmask 255.255.255.0  broadcast 192.168.77.255
        inet6 fe80::5054:ff:fe65:d33f  prefixlen 64  scopeid 0x20<link>
        ether 52:54:00:65:d3:3f  txqueuelen 1000  (Ethernet)
        RX packets 4404  bytes 13614102 (12.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2480  bytes 139445 (136.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 0  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]# 
[root@localhost ~]# cd /etc/sysconfig/network-scripts/
[root@localhost network-scripts]# vi ifcfg-eth0 # 修改ONBOOT的值为yes
ONBOOT=yes
[root@localhost network-scripts]# systemctl restart network

# 重启网卡服务  
```

以上我们就完成了虚拟机的安装以及配置虚拟机的IP，这时就可以像往常一样使用这台虚拟机了。

克隆命令：virt-clone -o  basic（原始虚拟机名） -n application（新虚拟机名） -f  /kvm_data/application.img（新虚拟机地址）

https://blog.51cto.com/zero01/2083896
https://blog.csdn.net/wanglei_storage/article/details/51106096
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：爱从不会消失，只会转移。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=86f695e4-24c9-4f49-bab7-5794b04d6f3b)
