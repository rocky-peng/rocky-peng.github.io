---
title: Linux
date: 2017-09-12
---

# linux安装字体
```
1. yum install -y fontconfig mkfontscale
2. 拷贝字体文件（.ttc文件） 到 /usr/share/fonts/ 下的一个新文件夹(A) 中
3. chmod -R 755 /usr/share/fonts/A
4. cd /usr/share/fonts/A
5. mkfontscale
6. mkfontdir
7. fc-cache -fv
8. 检查是否安装成功：fc-list
```

# Linux测速
```
wget https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py  

chmod +x speedtest-cli

```

## 常用命令
```
查看某个目录及子目录占用的空间
du -h
ly-zuche-c1@root:/var/log# du -h
36K	    ./anaconda
536K	./nginx
64K	    ./redis
4.0K	./chrony
55M	    ./mysql
4.0K	./ppp
4.0K	./ntpstats
5.5M	./httpd
8.1M	./journal/f9d400c5e1e8c3a8209e990d887d4ac1
8.1M	./journal
26M	    ./audit
181M	./leyong
12K	    ./tuned
72M	    ./filebeat
619M	.

查看某个目录及子目录占用的空间并排序输出
du -sh * | sort -nr 
ly-zuche-c1@root:/var# du -sh * | sort -nr 
619M	log
370M	cache
158M	www
112K	spool
27G	    lib
16K	    db  
12K	    tmp
12K	    kerberos

查看某个目录占用的空间
du -sh
ly-zuche-c1@root:/var# du -sh
28G	.

查看磁盘使用情况
df -lh 
ly-zuche-c1@root:/var# df -lh
文件系统        容量  已用  可用 已用% 挂载点
/dev/vda1        50G   34G   14G   72% /
devtmpfs        1.9G     0  1.9G    0% /dev
tmpfs           1.9G   24K  1.9G    1% /dev/shm
tmpfs           1.9G  460K  1.9G    1% /run
tmpfs           1.9G     0  1.9G    0% /sys/fs/cgroup
tmpfs           380M     0  380M    0% /run/user/0



```

## 大分割和小文件合并
```
大文件分割为小文件
mac/linux：
split -b 3000m 大文件
3000m 是指小文件的大小

小文件合并为大文件
mac/linux:
cat 小文件1 小文件2 > 大文件

windows:
type 小文件1 小文件2 > 大文件
```

## 计算md5
```
mac：
md5 文件名

linux:
md5sum 文件名
```

## 时间同步
```
ntpdate 时间服务器ip

```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：马上就要当学长了，可是学的不行，长得也不行。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=3c34a5fa-2910-428d-b81f-0de4dfcc93fe)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：当你停下来休息时，不要忘记别人还在奔跑，所以请拌倒他。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=de906993-409c-423f-adec-9f15cd9da76d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：现在的停车场设计得像迷宫，每次都要找好久，才能发现自己没有车。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=89bad79d-0119-4fa3-8032-eaa9698fc1c9)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：一天不玩手机，人是不会死的，命还在但是魂丢啦！
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=56b4368a-7c2c-4b24-86eb-76d8828a0e0a)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：家，是唯一一个可以让你，丑的很舒服的地方。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=10d7d7e5-6b22-4981-ace2-1bd1a239a943)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：人生就像打电话，不是你先挂就是我先挂。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=bc7fee2f-56b1-4945-a936-8e214b2a8434)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：如果我有什么，让你不喜欢的地方，麻烦你自己克服一下。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=6225655a-27ca-4a34-b169-648e64fe0d12)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：我现在无心学习，一心只想为祖国庆生。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=6044d4d0-b0d6-45c0-86a1-ba0f2c58f593)
