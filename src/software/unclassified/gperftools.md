---
title: gperftools工具
date: 2022-05-07
---

## gperftools作用
1. heapprofile: https://gperftools.github.io/gperftools/heapprofile.html
2. heap_checker: https://gperftools.github.io/gperftools/heap_checker.html
3. cpuprofile: https://gperftools.github.io/gperftools/cpuprofile.html

本文主要讲heapprofile的使用

## gperftools安装
### 安装libunwind
yum install libunwind-devel.x86_64

我是直接使用上面的命令安装的，网上有些用得源码编译安装
我用源码安装好，设置 export LD_PRELOAD=/usr/local/lib/libtcmalloc.so 环境变量后，执行ls都报错，所以没采用源码安装，具体原因没深究

### 安装gperftools
```shell
# 下载源码，获取最新版下载地址： https://github.com/gperftools/gperftools/releases 
wget https://github.com/gperftools/gperftools/releases/download/gperftools-2.10/gperftools-2.10.tar.gz

# 解压 
tar -zxvf gperftools-2.10.tar.gz

# 进入解压后的目录，大概这些文件： 
➜  gperftools-2.10 ll
总用量 3.2M
-rw-r--r--  1 root root  44K 5月  31 12:22 aclocal.m4
-rw-r--r--  1 root root   35 2月  15 2021 AUTHORS
drwxr-xr-x  2 root root 4.0K 5月  31 12:39 benchmark
-rw-r--r--  1 root root 442K 5月  31 12:39 ChangeLog
-rw-r--r--  1 root root  34K 2月  15 2021 ChangeLog.old
drwxr-xr-x  2 root root 4.0K 5月  31 11:31 cmake
-rw-r--r--  1 root root  62K 5月  31 12:16 CMakeLists.txt
-rwxr-xr-x  1 root root 7.3K 5月  31 12:22 compile
-rwxr-xr-x  1 root root  49K 5月  31 12:22 config.guess
-rwxr-xr-x  1 root root  35K 5月  31 12:22 config.sub
-rwxr-xr-x  1 root root 719K 5月  31 12:22 configure
-rw-r--r--  1 root root  29K 5月  31 12:16 configure.ac
-rw-r--r--  1 root root 1.5K 8月  11 2014 COPYING
-rwxr-xr-x  1 root root  24K 5月  31 12:22 depcomp
drwxr-xr-x  2 root root 4.0K 5月  31 12:39 docs
-rw-r--r--  1 root root  26K 2月  15 2021 gperftools.sln
-rw-r--r--  1 root root  24K 2月  15 2021 INSTALL
-rwxr-xr-x  1 root root  15K 5月  31 12:22 install-sh
-rwxr-xr-x  1 root root 347K 5月  31 12:22 libtool
-rwxr-xr-x  1 root root 326K 5月  31 12:22 ltmain.sh
drwxr-xr-x  2 root root 4.0K 5月  31 12:39 m4
-rw-r--r--  1 root root  69K 1月  15 2022 Makefile.am
-rw-r--r--  1 root root 684K 5月  31 12:22 Makefile.in
-rwxr-xr-x  1 root root 6.8K 5月  31 12:22 missing
-rw-r--r--  1 root root  44K 5月  31 12:16 NEWS
drwxr-xr-x  4 root root 4.0K 5月  31 12:39 packages
-rwxr-xr-x  1 root root 175K 2月  15 2021 pprof-symbolize
-rw-r--r--  1 root root  11K 12月 13 2021 README
-rw-r--r--  1 root root 5.6K 2月  15 2021 README_windows.txt
drwxr-xr-x  8 root root 4.0K 5月  31 12:39 src
-rwxr-xr-x  1 root root 4.8K 5月  31 12:22 test-driver
-rw-r--r--  1 root root 1.7K 11月 28 2017 TODO
drwxr-xr-x 23 root root 4.0K 5月  31 12:39 vsprojects

## 编译安装
./configure

make && make install
```

## 设置环境变量
```shell
# 不建议写到配置文件中，那样的话对所有新起的进程都会起作用
export LD_PRELOAD=/usr/local/lib/libtcmalloc.so

# 如果不设置，不会进行heapdump，取消设置: unset HEAPPROFILE
export HEAPPROFILE=/pqs/heap/hprof

```
还有一些可选变量，如图：   
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/282500169706700.png)

从上图可以看出每当进程使用的内存增加了100m，就会触发heapdump
## 运行程序
这里我这里大概实验了下对直接内存的分析，带代码中增加了下下面两个http方法：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/282776880127000.png)

正常运行程序或脚本即可
我这里运行的是：
nohup java -XX:NativeMemoryTracking=detail -jar xxxx.jar > log.txt 2>&1 &

之前是怎么运行的，现在仍怎么运行，上面命令行中 -XX:NativeMemoryTracking=detail 和本次实验无关，可有可无

在日志中会有大概如下的输出：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/283092547279500.png)

执行新增的bf http方法 /bf?direct=true&capacity=120000000&str=bbb 后：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/283271424421900.png)

因为我参数中每次分配的内存在100多M,触发了gperftools的heapdump条件，所以每执行一次就会输出一个heapdump日志

## 分析heapdump文件
此时生成了多个heapdump文件：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/283496096964900.png)

### text分析
```shell
这里分析的是05.heap，那么得到的结果就是从05.heap这个文件产生时候进程分配的内存情况，如果想分析04.heap到05.heap期间进程内存分配的变化情况，在后面有介绍
pprof $JAVA_HOME/bin/java --text ./test_27837.0005.heap > ./memTrack.txt
```
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/283798165077900.png)

每列的含义：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/285287799823300.png)
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/285333837204800.png)

比较长，可自行实验

### pdf分析（个人建议的方式）
```shell
 pprof $JAVA_HOME/bin/java --pdf ./test_27837.0005.heap > ./memTrack.pdf 
```
pdf截图：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/284159436692400.jpg)
大的内存分配会用粗线表示

怎么看这个图：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/285581324066800.png)

可以看到有个Unsafe_allocateMemory的分配占用很多，于是可以看代码里哪些地方调用了

### 两个heapdump文件比对
```shell
 pprof --base=./test_27837.0004.heap $JAVA_HOME/bin/java --pdf ./test_27837.0005.heap > ./memTrack.pdf 
 
 意思就是分析 test_27837.0004.heap 到 test_27837.0005.heap 这段时间，进程内存的变化情况情况
```

### 分析mmap和munmap
export HEAP_PROFILE_MMAP_LOG=true

得到下面的结果（程序的日志）：
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-29/287224625475700.png)

可以看到120m的堆外内存是通过sbrk分配的，sbrk/brk是通过修改data segment的_edata指针来完成分配和回收的。
扩展阅读： https://www.cnblogs.com/dream397/p/14629276.html
mmap分配的是：堆和栈直接的内存，从上面的扩展阅读可以知道 mmap分配的地址应该比sbrk、brk分配的地址高（上图也验证了这个结果）
![](https://cdn.justdopay.com/pasteimageintomarkdown/2022-08-30/362324696740200.png)

sbrk底层是采用的是brk实现，sbrk不是一种系统调用，brk是系统调用（通过man syscalls 查看）

## 文末
我对这个攻击研究还不是很深，所以目前只能比较浅显的使用








<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：长胖以后，与朋友约着一起骑马减肥，一个月后马瘦了十斤。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=2cec9e50-4d42-420a-a256-cb6e2a43e1f6)
