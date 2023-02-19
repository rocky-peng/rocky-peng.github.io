---
title: InnoDB存储引擎
date: 2019-02-05
---

# MySQL技术内幕_InnoDB存储引擎

## 体系结构（连分优质）

![MySQL体系结构](https://cdn.justdopay.com/xiaoshujiang/1629079551936.png)


### 连接器
### 分析器
### 优化器
### 执行器

### SQL语句执行过程

## 杂项

1. 存储引擎是基于表的，而不是数据库的
也就是说同一个数据库中不同的表可以使用不同的存储引擎，但一张表只能使用一种存储引擎

3. InnoDB使用MVCC机制来获取高并发性，支持事务，实现了4个隔离级别，主要面向OLTP应用

4. InnoDB采用了聚集（clustered）的方式，每张InnoDB存储引擎的表都是按照主键的顺序进行存放的。如果没有显式指定主键，InnoDB会自动为每行数据生成一个6字节的rowid，并以此作为主键。

5. MyISAM，主要面向OLAP应用，不支持事务，其缓冲池只缓冲索引文件，数据文件的缓存交给操作系统完成

6. MyISAM表的物理文件分为两种：myd(存放数据文件)，myi(存放索引文件)

7. Memory存储引擎：将表中数据存放在内存中，默认使用哈希索引。

8. **MySQL会使用Memory存储引擎的表来作为临时表来存放查询产生的中间结果，如果中间结果集大于了memory存储引擎表的容量，或者中间结果包括了memory存储引擎表不支持的数据类型，mysql又将此中间结果转换为MyISAM存储引擎表而存放在磁盘上。而MyISAM表是不缓存数据文件的，因此产生这样的临时表对于查询的性能会有所降低。**

9. **所以在查询时尽量避免产生临时表**

10. 哪些存储引擎支持全文索引？

    MyISAM，InnoDB都支持

12. 将innodb缓冲池中的数据刷新到磁盘的机制：checkpoint机制



13. 数据库服务器建议都采用64位操作系统
    
14. 缓冲池中存放着各种类型的页,页的大小默认是16kb

页的大小可通过innodb_page_size控制。


![缓冲池中存放的数据](https://cdn.justdopay.com/xiaoshujiang/1629079560081.png)

15. 缓冲池中的页通过LRU算法进行管理


## MySQL参数
MySQL参数总体可以分为两类：
1. 静态参数：启动后不能再修改

2. 动态参数：启动后可以再修改
	- 有些参数只作用于当前会话
	- 有些参数只作用于进程整个生命周期
	- 有些参数既可以作用于当前会话，也可以作用于整个生命周期

具体哪些参数是静态，哪些参数是动态的，可以参考：[InnoDB官方参数列表](https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html)

参考参数值：
```shell
show variables like 'xxxx';
select [@@global. | @@session. | @@]system_var_name
```

动态设置参数值：
```shell
修改全局变量的值不会修改配置文件中之前的值，也就是说关掉数据库就会丢失动态设置的值

set
| [global | session] system_var_name = expr
| [@@global. | @@session. | @@]system_var_name = expr
```

## MySQL日志文件

1. 错误日志(error log) 
	截图中的 mysql-error.log
	
2. binlog日志(binlog)
	截图中的 mysql-bin 文件
3. 慢查询日志(slow query log)
	截图中 mysql-slow.log
4. 重做日志(redo log) 
	截图中的 ib_logfile 文件

![物理文件截图](https://cdn.justdopay.com/xiaoshujiang/1629079568743.png)
截图中的 ibdata 文件是 所有InnoDB表的共享表空间文件

### 错误日志(error log)

### 二进制日志(binlog)
执行对数据进行更改的操作，包括实际上没有引起数据发生变化的操作(PS: 通过实验发现5.6.26-log版本中，没有引起数据变化的操作不会记录到binlog文中)

1. 查看当前正在写入的二进制日志文件
```shell
show master status;
+------------------+-----------+--------------+------------------+-------------------+
| File             | Position  | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+-----------+--------------+------------------+-------------------+
| mysql-bin.000500 | 143313596 |              |                  |                   |
+------------------+-----------+--------------+------------------+-------------------+   
```

2. 查看指定二进制文件的内容
```shell
show binlog events in 'mysql-bin.000498' from pos limit ?\G;
```
![此截图基于MySQL 5.7.34-log 版本](https://cdn.justdopay.com/xiaoshujiang/1629254574714.png)

### 慢查询日志(slow)
slow_query_log：控制是否开起
long_query_time：控制慢查询的时间阈值
log_queries_not_using_indexes： 是否把未使用索引的查询记录到慢查询中


## 杂项
### count方法

count(*) == count(0)：统计的数量包括了空字段
count(字段) ：统计的该字段非空数量

### 其他
1. 辅助索引远小于聚集索引（这个小应该是指占用空间）

2. 事务是否提交和锁是否释放没有必然联系（**这个结论在21年8月18日看的时候感觉有点不理解呢，2022年9月8号看还是不理解**）

## MySQL存储结构
### 逻辑存储结构（表段区页）
从InnoDB存储引擎的逻辑结构来看，所有数据都被存放在表空间中（tablespace）,表空间又由段（segment）,区（extent），页（page）组成。

![InnoDB逻辑存储结构](https://cdn.justdopay.com/xiaoshujiang/1629079576338.png)


#### 区
InnoDB每次从磁盘申请4~5个区，每个区大小为固定为1m,默认情况下每个页大小为16kb（innodb_page_size参数控制），因此一个区中共有64个连续的页。

#### 页
页的大小可以通过 innodb_page_size 修改，页是InnoDB进行IO操作的最小单位

页的类型：
![页的类型](https://cdn.justdopay.com/xiaoshujiang/1629079581474.png)

B-Tree Node : 有可能存放的是索引（可能是聚集索引，也可能是辅助索引），有可能存放的是行数据。如果Page-Level如果为0，则表明存放的是行数据，否则存放的是索引

#### 行
InnoDB是面向行的，数据按行进行存放。

每个页最多存放 (16*1024byte/2byte)-200=7992行数据 （在2022年9月8号看不理解怎么算的）。

行记录格式：
Antelope文件格式： Compact和Redundant两种格式
Barracuda文件格式： Compressed和Dynamic两种格式

在 msyql 5.7.9 及以后版本，默认行格式由innodb_default_row_format变量决定，它的默认值是DYNAMIC，可以在 create table 的时候指定ROW_FORMAT=DYNAMIC。
也可以通过 show table status 语句来查看表所使用的行记录格式。
![Compact行记录格式](https://cdn.justdopay.com/xiaoshujiang/1629079587904.png)










<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要总对人掏心掏肺，有的人不吃内脏。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=0f744da8-7df0-46be-b778-9a727163b565)
