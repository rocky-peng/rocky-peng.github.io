---
title: KVM方式集群部署ES
date: 2020-04-05
---

## 步骤
本文档模拟的是把kvm镜像拷贝到新机子上进行部署的过程。

由于多台机子和单台机子上进行部署的过程很类似，所以这里只描述部署一台机子的过程。

1. 一台主机（需要提前安装好kvm）
   
2. kvm的镜像 （可从192.168.1.99:/kvmimg目录下载）

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084557911.png)

---

1. 把下载的两个文件 es-172.26.43.130.img  es-172.26.43.130.xml 上传到主机的某个目录下。 比如（/opt/kvmimg）
   
2. 查看主机的cpu model :  virsh capabilities 
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084574573.png)

3. 编辑上传的xml文件，找到cpu相关的xml配置，并修改model为刚才查到的model。
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084589638.png)

上图中的name  uuid  memory 可自行根据实际情况修改。

4. 继续修改xml，找到 “es-172.26.43.130.img” 字样的位置，并修改路径为正确的路径。
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084636546.png)

5. 执行：virsh define 上传的xml文件路径
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084653784.png)
. 
6. 执行： virsh start xml文件中的name （可能会有意外情况，请参考下方的 **意外情况**）
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084701285.png)

7. 执行：virsh console xml文件中的name  进入虚拟机   （root / Admin@9000）

8. 修改网络文件获取ip  （/etc/sysconfig/network-scripts/ifcfg-eth0）

9. 修改es的配置文件为正确的配置 （es的存放目录在 /programs/elasticsearch-7.4.1 ）
	- **注意**：数据存放和日志存放目录需要 elastic 用户能方法 。 elastic 用户已经默认创建好了
	 
10. 启动es (bin/elasticsearch -d)
 ```shell
 su elastic
 cd /programs/elasticsearch-7.4.1
 bin/elasticsearch -d
 ```
 
 11. 还需要启动nfs
## 意外情况
上面在执行virsh start xxx 的时候可能会出现下面的几个错。

1. the cpu is incompatible with host cpu: 主机不提供所需功能：md-clear  ssbd 
	   - 修改xml直接删除xml文件中的cpu的相关配置信息即可 （应该刚才已经执行了 virsh define 命令，所以这里的修改使用 **virsh edit 虚拟机名字** 来修改）

2. the cput is incompatible with host cpu: 主机不提供所需功能：spec-ctrl .
	  - 这个问题应该就是xml文件中cpu的model不对，请重新检查 上面的2、3两个步骤

## 虚拟机磁盘扩容
默认情况下上诉步骤跑起来的虚拟机只有10g的磁盘空间。所以需要扩容。
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084721547.png)

扩容的两种方式：
- 直接扩容原来的img文件（是一个虚拟硬盘）

- 创建新的img文件然后挂载上去（相当于挂载一个新磁盘）
 
 
 ### 直接扩容原有img文件


1. 退出虚拟机进入宿主机，然后执行
 ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084741406.png)

2. 进入虚拟机: virsh console xxxxx 可以看到硬盘容量增加了100G
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084754196.png)

3. 但增加的容量现在不可用，需要执行：
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084776234.png)

4. 再看看：
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084797758.png)

5. 执行reboot，再次进入虚拟机
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084814280.png)

6. 格式化新分区
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084829503.png)

7. 挂载到某个目录  (这里挂载到 /opt 目录)
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084842375.png)

8. 修改 /etc/fstab 文件，让虚拟机重启后自动挂载 /dev/vda4分区到 /opt目录下
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084855092.png)

9. 重启 reboot ,进入虚拟机，查看挂载情况
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084918061.png)

###  创建新的img文件然后挂载上去
这种方式相当于挂载了一个新的硬盘上去

1. 在宿主机创建虚拟硬盘文件
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084943059.png)
.
2. 编辑虚拟机的xml文件  virsh edit xxxxx，找到disk相关配置，加入下面的配置：
	```xml
	<disk type='file' device='disk'>
		<driver name='qemu' type='qcow2'/>
		<source file='/pqs/kvm/pqstest/test.img'/>
		<target dev='hdf' bus='virtio'/>
	</disk>
	```
	![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084961721.png)
	
3. 重启虚拟机，进入虚拟机（好像可以不重启，可自行测试）
   ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629084995461.png)
   
4. 查看硬盘情况，出现新的硬盘
   ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629085010430.png)
   
5. 对新硬盘分区（这里只分1个区，可自行决定分几个）
  ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629085029363.png)
  
6. 查看硬盘情况，看到新分区
  ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629085054270.png)
  
 7. 格式化并挂载新分区到目录下，这个步骤和上面的步骤一样了，不再赘述

<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：说啥啥不听，干啥啥不行，吃啥啥不剩。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=11597e19-7570-4383-be4f-9988971d4415)
