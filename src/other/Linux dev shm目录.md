---
title: Linux dev shm目录
date: 2023-11-13
tag:
- linux
category:
- linux
---

- dev: 代表device
- shm: 代表shared memory

![Untitled](https://cdn.justdopay.com/notion/md5-d41d8cd98f00b204e9800998ecf8427e.png)

1. 这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs. 
2. 其空间默认是总内存的一半
3. 读写这个目录下的文件其实就是在读写内存。
    1. 可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除
    
    ![Untitled](https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png)
    
4. 读写改目录文件性能是非常高的，实际就是读写内存
5. 如果这个目录下没有任何文件，则不会占用内存。
6. 如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的
7. 具有临时性，重启、卸载这个目录都会丢失数据
8. 扩展阅读：[https://www.jianshu.com/p/0dc2dae0fa46](https://www.jianshu.com/p/0dc2dae0fa46)

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：算完工资的涨幅后，再算算猪肉的，就会发现自己连猪都不如。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=dongman&uuid=6dc22bf6-3ace-48e4-8df5-9db7f460dd61)
