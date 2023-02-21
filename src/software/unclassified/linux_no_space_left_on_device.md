---
title: 提示NO SPACE LEFT ON DEVICE但有磁盘空间
date: 2019-06-10
---


## 问题
发现线上mongo挂了，重启又起不来，看错误日志提示：no space left on device。 如下
![](https://cdn.justdopay.com/xiaoshujiang/1629081485386.png)

按照提示以为是磁盘空间满了，于是执行 df -h查看：

![](https://cdn.justdopay.com/xiaoshujiang/1629081491669.png)

这个明明显示还有磁盘空间的，这是为啥？

后来多次尝试重启mongo但依旧得到no space left on device同样的错误提示。

最后启用google搜索，搜索到有帮助的一个 [MongoDB no space left on device with docker](https://stackoverflow.com/questions/54413903/mongodb-no-space-left-on-device-with-docker)

本机执行df -i，果然出现了链接里一样的情况
![](https://cdn.justdopay.com/xiaoshujiang/1629081499054.png)

于是网上查inode的相关资料，大致结论如下：
1. Linux下一个文件夹或者一个文件就会占用一个inode资源
2. inode资源数量是在格式化磁盘的时候就指定的（可以不指定，但也会有一个值），要更改这个数量必须格式化磁盘
3. 如果某个磁盘的inode资源用尽，即便磁盘有空间，也不能进行任何文件或者文件夹的新增
4. 删除一个文件夹或者文件就能释放一个inode资源

上图显示我们/dev/vdb1这块磁盘有200G，但只有20w个inode
我们比对了下其他主机的inode资源数，发现容量少于200g的磁盘inode资源个数也远远大于20w。
所以几乎可以推断这块磁盘当初inode资源的个数是人为指定的，但不知道当初那个同事为啥这么设置[哭笑]

## 解决办法

1. 删除不用的文件和文件夹释放inode
2. 迁移数据到新磁盘然后格式化重新指定inode

当时临时采用了第一个方案，但没多久又出现同样的问题了。

后来重新买了一块磁盘，停掉相关服务，把数据拷贝到新的磁盘上，然后重新配置相关的服务配置文件（比如数据存放路径什么的），
但发现路径相关的配置比较多,比如fastdfs的配置。所有想到通过软连接的方式在不修改服务现有配置文件的情况下解决了数据迁移路径不一致的问题。






<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：有些温暖，就像马桶上的余温，让人不爽。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=1c4ce96a-cbce-4813-b184-6744c14e39ad)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：铁打的身子，磁铁打的床。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=dd477213-b7cd-4074-9c5a-6a0dffe47bdd)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我爸开法拉利，我妈开玛莎拉蒂，我开玩笑。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=6798e668-3518-49cb-9050-57619a9c6576)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要去追一匹马，用追马的时间种草，来年春天会有一批骏马到来。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=363312ec-649c-4f0c-962b-ea38de257ed0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你的脖子真可爱，顶着一个猪脑袋。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=c4146a32-5fee-4720-a988-08a0d262db2f)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：最烦别人问我工资多少，瞧不起我的方法有很多，为什么偏偏选这一种？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=76a6956a-1be0-4d41-a054-19d580bdc37e)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：这两天雨水多，下雨记得打伞，否则脑袋容易进水。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=c1718083-a268-4ba1-bd0c-f8ce01fdf0d0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：在天愿做比翼鸟，在地怨为打工人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=ea2426d1-43e1-444d-aa8d-99e790548639)
