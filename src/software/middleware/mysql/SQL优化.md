---
title: SQL优化
date: 2018-09-05
---

SQL优化从我自己的经验来说的，我自己总结了几个方面吧，主要从以下几个方面来着手：

1. explain
2. profiling
3. sql使用技巧

## explain

一般比较关注type,key,rows,extra几列

type: 描述了表之间是如何进行连接的

key: 真正使用的索引

rows: 预估扫描的行数，不是预估返回的行数

extra: 额外的信息

explain输出行的id值越大，越先执行。id如果相同，从上往下顺序执行。

扩展阅读： https://blog.csdn.net/horses/article/details/106905110
### extra列实战

1. using index: 使用了覆盖索引
2. using where: 表示mysql服务器将在存储引擎检索行后再进行过滤
3. using filesort: order的列没有索引或者没有用到order列的索引 order by 没有用到索引的情况有：
    - order by的列就没有建立相关索引
    - order by的列存在相关索引，但和where条件中使用的索引不同
4. using index condition: 使用的是辅助索引，但进行了回表操作（也就是说还走了一次主键索引）
5. null: 使用的是主键索引，但筛选的数据不全在索引中

### type列实战

1. ALL 全表扫描

2. index 索引全扫描
3. range 索引范围扫描，常用语<,<=,>=,between等操作
4. ref 使用了非唯一索引或唯一索引的左侧部分，返回可能多余一条的数据
5. eq_ref 类似ref，使用到了聚集索引或唯一非空索引的全部组成部分，使用了 = 或者 join 来关联其他表的某列
    ```mysql
    SELECT * FROM ref_table,other_table WHERE ref_table.key_column=other_table.column;
    
    SELECT * FROM ref_table,other_table WHERE ref_table.key_column_part1=other_table.column AND ref_table.key_column_part2=1;
    ```
6. const/system 只有使用到了聚集索引或唯一索引的全部组成部分才会是const，因此结果集最多只会有一行数据
    ```mysql
    SELECT * FROM tbl_name WHERE primary_key=1;
    
    SELECT * FROM tbl_name WHERE unique_key=1;

    SELECT * FROM tbl_name WHERE primary_key_part1=1 AND primary_key_part2=2;
    ```
7. null MySQL不访问任何表或索引，直接返回结果

## profiling

这种方式和使用performance_schema数据库是等效的。

使用performance_schema数据库的具体步骤参考：https://dev.mysql.com/doc/refman/5.7/en/performance-schema-query-profiling.html

#### 怎么玩

1. 执行set profiling = 1 开启该功能

   可用通过 show variables like 'profiling'查看是否已经开启。

   这个变量的作用范围既可以是整个系统，也可以是当前会话，具体参考：https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html

2. 执行sql语句

3. 执行set profiling = 0 关闭该功能

4. 执行show profiles找到刚才执行的sql语句的query_id.
   ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079678303.png)

   一般只会展示15条记录，可通过参数 profiling_history_size 修改

4. 执行show profile all for query query_id 来查看耗时清单
   ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629079685213.png)

   具体显示哪些列：
   ```
   ALL：显示所有的开销信息
   BLOCK IO：显示块IO相关开销
   CONTEXT SWITCHES：上下文切换相关开销
   CPU：显示CPU相关开销
   IPC：显示发送和接受相关开销
   MEMORY：显示内存相关开销
   PAGE FAULTS：显示页面错误相关开销
   SOURCE：显示和Source_function, Source_file,Source_line相关的相关开销
   SWAPS：显示交换次数相关开销
   ```

#### 注意

如果在其生命周期阶段出现如下的情况的就要重视了：

1. converting HEAP to MyISAM 表示正在将基于内存的临时表转储到基于磁盘的临时表上

   MySQL会使用Memory存储引擎的表来作为临时表来存放查询产生的中间结果，如果中间结果集大于了memory存储引擎表的容量（tmp_table_size参数控制），或者中间结果包括了memory存储引擎表不支持的数据类型，mysql又将此中间结果转换为MyISAM存储引擎表而存放在磁盘上。而MyISAM表是不缓存数据文件的，因此产生这样的临时表对于查询的性能会有所降低，所以在查询时尽量避免产生临时表。

2. Creating tmp table 创建了临时表，先拷贝到临时表，用完后再删除

3. Copying to tmp table on disk 把内存中的临时表复制到磁盘中，这个很耗性能

4. Locked 这个就是指在等待锁的意思

```mysql
查看全局创建的内存临时表数量
SHOW GLOBAL STATUS LIKE 'Created_tmp_tables';

查看全局创建的磁盘临时表数量
SHOW GLOBAL STATUS LIKE 'Created_tmp_disk_tables';
```

## SQL使用技巧

1. 是否有索引
2. 覆盖索引
   > 可以避免回表操作
3. 隐式的类型转换
4. 连表的两个字段必须保持相同的数据类型和字符集
   > 有可能不能使用索引，造成全表扫描
5. not exist与not in(优先选择not exist)
   > not in使用不当还有可能返回错误结果
6. 索引字段进行表达式或函数计算
   > 会造成全表扫描
7. 左匹配原则
   > 会造成全表扫描
8. !=（不等于）
   > 会造成全表扫描
9. 索引字段尽量建立在区分度高的列上
   > 比如在is_del这样的字段上加索引意义就不是很大
10. 长字段单独一张表
    > 从b+数的结构上解释，一页的空间是16kb，存放的数据占用空间越小那么一页存放的数据越多，整棵树就更加矮胖，IO次数就越少，效率越高
11. in与exist（各有适用场景：[in和exist的选择](https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ)
12. 小表驱动大表
13. 时间排序转换为id排序
14. 分页技巧（断点分页）
15. 表设计时，满足要求的情况下尽量选择占用空间小的数据类型
16. 合理适用子查询，比如in与exist，有时比连表效率更高
17. sql语句尽量简单（这个我的使用习惯），一些操作可以让应用层完成
18. 聚合操作避免使用ICP（也就是聚合操作的extra列不要出现using index condition）
19. or
20. null
21. 避免使用not in,而用not exists 替代

## ICP(Index Condition PushDown)
https://www.jb51.net/article/222444.htm

## MySQL执行计划

https://blog.csdn.net/horses/article/details/106905110

## 小表驱动大表

### 何为小表驱动大表

用小的数据集驱动大的数据集

### 如何区分驱动表与被驱动表

很简单：explain 出来的结果中，第一行显示的表即为驱动表

### join的时候谁是驱动表

A left join B，则左表是驱动表，即A是驱动表 A right join B，则右表是驱动表，即B是驱动表 A inner join B，MySQL会选择比较小的表为驱动表

### Exsit与In

现在有两张表： 

dept表：部门表，大概20条记录 

emp表：员工表，大概1W条记录 

需求：找出部门名称包含"技术"两个字的所有员工信息

方案一： select * from emp A where A.depNo in (select B.deptNo from dept B where B.name like '%技术%');

方案二： select * from emp A where exists ( select 1 from dept B where B.deptNo = A.deptNo and B.name like '%技术%' )

先说结论： 当A表的数据集大于B表事，IN比exists更优 当A表的数据集小于B表时，exists比IN更优

根据上面的结论，可知方案一比方案二时间更短，不信可自行实验

> https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ
> https://blog.csdn.net/qq_38011415/article/details/103304189

## 哪些情况会出现全表扫描

- 数据量太小了，走索引可能成本还要高一些
- 筛选列没有索引
- 筛选列有索引，但是匹配的数据量接近于整张表数据
- 筛选列有索引，但是使用方式不对，比如对列进行计算、不满足最左匹配原则
- [有索引，但字符集不同](https://blog.csdn.net/horses/article/details/107243447)

### IN 和 EXIST语句

[in和exist的选择](https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ)

## use index 与 force index的区别？

use index是告诉优化器可以使用这个索引，但最终优化器可以不用这个索引。

force index是强制让优化器使用这个索引

## show index from 库名.表名

这条命令输出了一个关键值：cardinality，表示该索引中唯一值的数目。这个值和表总行数应该尽量接近1，否则可以考虑是否可以删除这个索引。但这个值不是实时更新的，只是一个大概值。如果要手动更新这个值，可以使用 analyze table
table_name来完成。

mysql是通过采样的方法来进行统计这个值的

优化器会根据这个值来判断是否使用这个索引，但这个值可能有时候不准确，因此可能影响sql执行性能，所以可以考虑在系统非高峰时间对核心表执行analyze table操作。

## 实际例子

- MySQL的大部分索引（PRIMARY KEY,UNIQUE,INDEX）都采用的是B-Tree数据结构
- 对于一些特定的数据类型，会采用R-Tree数据结构
- 内存表（MEMORY table）支持 哈希表 数据结构
- 组合索引，复合索引，联合索引，是一个东西
    - 对多个列建立一个索引，如下的组合索引。
    - 要根据业务场景来决定列的顺序。
    - 是否能用到联合索引，要看where条件是否符合 ***最左前缀*** 原则。
    - 组合索引的第一个字段必须出现在查询组句中，这个索引才会被用到。（和上一条一个意思）
    ```mysql
    create table test(
        a int,
        b int,
        c int,
        KEY a(a,b,c)
    );
    
    优: select * from test where a=10 and b>50
    差: select * from test where a50
    
    优: select * from test order by a
    差: select * from test order by b
    差: select * from test order by c
    
    优: select * from test where a=10 order by a
    优: select * from test where a=10 order by b
    差: select * from test where a=10 order by c
    
    优: select * from test where a>10 order by a
    差: select * from test where a>10 order by b
    差: select * from test where a>10 order by c
    
    优: select * from test where a=10 and b=10 order by a
    优: select * from test where a=10 and b=10 order by b
    优: select * from test where a=10 and b=10 order by c
    
    优: select * from test where a=10 and b=10 order by a
    优: select * from test where a=10 and b>10 order by b
    差: select * from test where a=10 and b>10 order by c
    
    
    
    create table pqs_temp (
      a BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
      b VARCHAR(50) DEFAULT '' not NULL ,
      c VARCHAR(50) DEFAULT '' not NULL ,
      d VARCHAR(50) DEFAULT '' not NULL ,
      e VARCHAR(50) DEFAULT '' NOT NULL
     );
    
    alter TABLE pqs_temp add index b_c_d (b(20),c,d);  //索引包含的索引列的 部分信息
    
    -- d 在索引中（没有用到覆盖索引）
    EXPLAIN select d from pqs_temp where b = '1';
    mysql> EXPLAIN select d from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    
    
    alter TABLE pqs_temp drop INDEX b_c_d;
    ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);   //索引包含的索引列的 全部信息
    -- d 在索引中（用到覆盖索引）什么叫 覆盖索引，下面有讲到。
    EXPLAIN select d from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                    |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |   35 | Using where; Using index |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+  
    
    
    
    alter TABLE pqs_temp drop INDEX b_c_d;
    ALTER TABLE pqs_temp add INDEX b_c_d (b(20),c,d);
    -- e 不在索引中
    EXPLAIN select e from pqs_temp where b = '1';
    mysql> EXPLAIN select e from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    
    
    
    alter TABLE pqs_temp drop INDEX b_c_d;
    ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);
    -- e 不在索引中
    EXPLAIN select e from pqs_temp where b = '1';
    mysql> EXPLAIN select e from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                 |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |    1 | Using index condition |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+ 
    
    
    
    alter TABLE pqs_temp drop INDEX b_c_d;
    ALTER TABLE pqs_temp add INDEX b_c_d (b(20),c,d);
    -- * 中有不在索引中的列
    EXPLAIN select * from pqs_temp where b = '1';
    mysql> EXPLAIN select * from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    
    
    
    alter TABLE pqs_temp drop INDEX b_c_d;
    ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);
    -- * 中有不在索引中的列
    EXPLAIN select * from pqs_temp where b = '1';
    mysql> EXPLAIN select * from pqs_temp where b = '1';
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                 |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |    1 | Using index condition |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+ 
    
    
    -- order by 的列 不在索引中
    EXPLAIN select * from pqs_temp where b = '1' ORDER BY e;
    mysql> EXPLAIN select * from pqs_temp where b = '1' ORDER BY e;
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where; Using filesort |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+


    -- order by 的列 在索引中,但order by 的时候不能用到索引,因为不满足 最左优先 原则
    EXPLAIN select * from pqs_temp where b = '1' ORDER BY d;
    mysql> EXPLAIN select * from pqs_temp where b = '1' ORDER BY d;
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where; Using filesort |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+


    -- order by 的列 在索引中,同时order by 也能用到索引.因为满足 最左优先 原则
    EXPLAIN select * from pqs_temp where b = '1' ORDER BY c;
    mysql> EXPLAIN select * from pqs_temp where b = '1' ORDER BY c;
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    | id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    |  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
    +----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
    ```
- 覆盖索引
    - 如果一个select语句，select的字段都在这个sql使用的索引中，那么这种查询就走了覆盖索引。
    - 可以说覆盖索引不是一种索引，而是索引的一种使用方法。
    - 覆盖索引是针对具体的sql语句而言。同样的索引结构，不同的sql语句不一定就都走了 覆盖索引。
    - 在EXPLAIN的Extra列出现Using Index提示时，就说明该select查询使用了覆盖索引。
    - 要使用覆盖索引，至少满足下列条件
        1. 所用到的索引必须能覆盖相关索引列的全部数据
        2. select的字段必须是索引中的字段
- 索引注意事项
    - 应尽量避免对索引列进行频繁更新，因为每次更新索引列，对应的索引也需要更新，这样就降低的更新性能
    - 每张表建立的所以也不能太多，因为每次插入删除数据的时候，都相应的增加，删除索引，所以一定程度上就会降低性能。

18. 添加索引
    ```mysql
    ALTER TABLE pqs_temp MODIFY COLUMN a BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT;
    ALTER TABLE pqs_temp ADD PRIMARY KEY (a);
    
    //唯一索引
    ALTER TABLE pqs_temp ADD UNIQUE (b);
    
    //联合唯一索引
    alter TABLE pqs_temp add UNIQUE f_g (f,g);
    
    //单列索引
    ALTER TABLE pqs_temp ADD INDEX (c);
    
    //组合索引
    alter TABLE pqs_temp add INDEX b_c_d (b,c,d);
    alter TABLE pqs_temp add INDEX b_c_d (b(20),c,d);//只将b列的前20个字符加入到索引的计算中
    
    //全文索引
    ALTER TABLE pqs_temp ADD FULLTEXT (d);
    
    //貌似不能创建 hash 结构的索引
    ALTER TABLE  pqs_temp add INDEX i USING HASH (i);  //可以执行成功，但通过show index from pqs_temp 查看索引，仍然显示index_type为btree.
    +----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    | Table    | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
    +----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    | pqs_temp |          0 | PRIMARY  |            1 | a           | A         |           2 |     NULL | NULL   |      | BTREE      |         |               |
    | pqs_temp |          1 | i        |            1 | i           | A         |           1 |     NULL | NULL   |      | BTREE      |         |               |
    +----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    
    ```
19. 查看表索引
    ```
    show index from table_name;
    ```
20. limit子句影响到了MySQL对索引的选择（这个真奇葩）
    ```mysql
    explain
    SELECT *, usermessage.createTime AS mes
    FROM usermessage
    WHERE (
      (
        usermessage.uid = 101838
      )
      AND (
        usermessage.messageType = 'notice' OR
        usermessage.messageType = 'im'
      )
    ) ORDER BY msgId limit 50 ;

    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+
    | id | select_type | table       | type  | possible_keys   | key  | key_len | ref  | rows     | Extra                              |
    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+
    |  1 | SIMPLE      | usermessage | range | uid,messageType | uid  | 8       | NULL | 12106562 | Using index condition; Using where |
    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+ 
 
    
    
    
    explain
    SELECT
      *,
      usermessage.createTime AS mes
    FROM usermessage
    WHERE (
      (
        usermessage.uid = 101838
      )
      AND (
        usermessage.messageType = 'notice' OR
        usermessage.messageType = 'im'
      )
    ) ORDER BY msgId DESC limit 50;

    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+
    | id | select_type | table       | type  | possible_keys   | key  | key_len | ref  | rows     | Extra                              |
    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+
    |  1 | SIMPLE      | usermessage | range | uid,messageType | uid  | 8       | NULL | 11726940 | Using index condition; Using where |
    +----+-------------+-------------+-------+-----------------+------+---------+------+----------+------------------------------------+       
    
    
    
    
    
    explain
    SELECT
      *,
      usermessage.createTime AS mes
    FROM usermessage
    WHERE (
      (
        usermessage.uid = 101838
      )
      AND (
        usermessage.messageType = 'notice' OR
        usermessage.messageType = 'im'
      )
    ) ORDER BY msgId DESC;

    +----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+
    | id | select_type | table       | type  | possible_keys   | key         | key_len | ref  | rows | Extra                                              |
    +----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+
    |  1 | SIMPLE      | usermessage | range | uid,messageType | messageType | 50      | NULL |  402 | Using index condition; Using where; Using filesort |
    +----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+  
    ```

21. union操作会去重

- MySQL在UNION去重时，只是比对两条数据的值是否相同，并不去判断值的数据类型是否一致，只要两条数据的每一列数值相等，就认为是重复的数据，UNION出来的结果只会一条.

22. 指定sql结果集顺序：order by field(字段名,字段的值[逗号隔开])

```mysql
SELECT
  post.postId,
  post.createTime,
  post.commentNumber,
  post.likeNumber,
  post.postText,
  post.cityName,
  post.locationAddress,
  postimg.bigUrl,
  postimg.smallUrl,
  postimg.width,
  postimg.height
FROM post
  LEFT JOIN postimg ON postimg.imgId = post.postImgId
WHERE post.postId in (1,2) ORDER BY field(post.postId, 1,2)
LIMIT 10;
```

23. Join

- join:两个集合的交集， 等价于 inner join
- cross join:两个集合的笛卡尔积，返回的记录数为两个表的记录数乘积
- A left join B:返回的记录数为A的记录数
- B right join A == A left join B


24. SQL优化实战

- case 1 : 分页获取粉丝列表
  ```
  # 索引结构:following root@localhost:fotoplacedb216:39:21>show index from following;
  +-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
  | Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null |
  Index_type | Comment | Index_comment |
  +-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
  | following | 0 | PRIMARY | 1 | followingId | A | 59980091 | NULL | NULL | | BTREE | | | | following | 1 | uid1 | 1 |
  uid1 | A | 3748755 | NULL | NULL | | BTREE | | | | following | 1 | uid2 | 1 | uid2 | A | 19993363 | NULL | NULL | |
  BTREE | | |
  +-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

    # 索引结构:user
    root@localhost:fotoplacedb216:40:21>show index from user;
    +-------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    | Table | Non_unique | Key_name        | Seq_in_index | Column_name     | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
    +-------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    | user  |          0 | PRIMARY         |            1 | uid             | A         |    24321834 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          0 | email           |            1 | email           | A         |    24321834 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | isRecommended   |            1 | isRecommended   | A         |        1044 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | isDefaultFollow |            1 | isDefaultFollow | A         |           2 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | telephoneStr    |            1 | telephoneStr    | A         |     8107278 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | likeNumber      |            1 | likeNumber      | A         |       10611 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | latlngidx       |            1 | lat             | A         |    24321834 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | latlngidx       |            2 | lng             | A         |    24321834 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | idx_ctime       |            1 | createTime      | A         |    24321834 |     NULL | NULL   | YES  | BTREE      |         |               |
    | user  |          1 | pass_idx        |            1 | password        | A         |    12160917 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | ostype_idx      |            1 | OSType          | A         |      149213 |     NULL | NULL   |      | BTREE      |         |               |
    | user  |          1 | ltime           |            1 | lastUpdateTime  | A         |    24321834 |     NULL | NULL   | YES  | BTREE      |         |               |
    +-------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
    12 rows in set (0.00 sec)                                                                           
    
    
    # 原始Sql:7.03s
    root@localhost:fotoplacedb216:21:46>SELECT
    ->   following.followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar,
    ->   user.lat,
    ->   user.lng
    -> FROM following
    ->   INNER JOIN user ON following.uid2 = user.uid
    -> WHERE following.uid1 = 101838
    -> ORDER BY following.followingId DESC
    -> LIMIT 2000000, 15;
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    | followingId | uid      | userName              | signature | avatar                                                      | lat        | lng        |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    |    63041171 | 23301217 | 浅沫记忆              |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041168 | 23301216 | 港岛妹妹              |           | http://dn.fotoplace.cc/9031e9b5433e4aa7a0640c39579684f7.jpg | 0.00000000 | 0.00000000 |
    |    63041166 | 23301212 | 陈透明                |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041161 | 23301215 | 趺苏                  |           | http://dn.fotoplace.cc/1a6b8ac82b6c41a49f8325b9cf6735c4.jpg | 0.00000000 | 0.00000000 |
    |    63041158 | 23301214 | Gareth_Bale11         |           | /53a081e3fe6549248a096dd6b81f77ee.jpg                       | 0.00000000 | 0.00000000 |
    |    63041156 | 23301213 | 老宋                  |           | http://dn.fotoplace.cc/bd0419c95b4a4cf284c4301755d44722.jpg | 0.00000000 | 0.00000000 |
    |    63041151 | 23301211 | 唯爱敏                |           | http://dn.fotoplace.cc/f6d8e31029b945338cff2fa059609612.jpg | 0.00000000 | 0.00000000 |
    |    63041146 | 23301209 | LVenus                |           | http://dn.fotoplace.cc/a9d2eec4719d4af19d3c9f702a9f2149.jpg | 0.00000000 | 0.00000000 |
    |    63041138 | 23301207 | 呐个谁伱不配          |           | http://dn.fotoplace.cc/0dce2ae1cfb048e5b4420d9795e21e57.jpg | 0.00000000 | 0.00000000 |
    |    63041134 | 23301206 | 懒先森                |           | http://dn.fotoplace.cc/8873bda0cbbb4a7b9772b4e962ad7c4d.jpg | 0.00000000 | 0.00000000 |
    |    63041130 | 23301205 | 刘艺                  |           | http://dn.fotoplace.cc/7db76a45455f4d92b03659b643b3759c.jpg | 0.00000000 | 0.00000000 |
    |    63041128 | 23301203 | 搅拌雨水的尘埃        |           | http://dn.fotoplace.cc/a6fd183dee2843b88704e8459d28820c.jpg | 0.00000000 | 0.00000000 |
    |    63041124 | 23301202 | NotFoundError         |           | /6aa98a013dcd47f2a49449b78c54722a.jpg                       | 0.00000000 | 0.00000000 |
    |    63041122 | 23301201 | Ruin彡                |           | http://dn.fotoplace.cc/13d94a3080644af5bb1bfde03cd0f3ad.jpg | 0.00000000 | 0.00000000 |
    |    63041120 | 23301200 | 马兰花                |           | http://dn.fotoplace.cc/07b6ee1ee1c9468193a01cb30480739c.jpg | 0.00000000 | 0.00000000 |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    15 rows in set (7.03 sec)                       
    
    # 优化第一次:2.55s
    root@localhost:fotoplacedb216:24:58>SELECT
    ->   following.followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar,
    ->   user.lat,
    ->   user.lng
    -> FROM following
    ->   INNER JOIN user ON following.uid2 = user.uid
    -> WHERE following.uid1 = 101838 AND following.followingId < 63041172
    -> ORDER BY following.followingId DESC
    -> LIMIT 15;
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    | followingId | uid      | userName              | signature | avatar                                                      | lat        | lng        |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    |    63041171 | 23301217 | 浅沫记忆              |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041168 | 23301216 | 港岛妹妹              |           | http://dn.fotoplace.cc/9031e9b5433e4aa7a0640c39579684f7.jpg | 0.00000000 | 0.00000000 |
    |    63041166 | 23301212 | 陈透明                |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041161 | 23301215 | 趺苏                  |           | http://dn.fotoplace.cc/1a6b8ac82b6c41a49f8325b9cf6735c4.jpg | 0.00000000 | 0.00000000 |
    |    63041158 | 23301214 | Gareth_Bale11         |           | /53a081e3fe6549248a096dd6b81f77ee.jpg                       | 0.00000000 | 0.00000000 |
    |    63041156 | 23301213 | 老宋                  |           | http://dn.fotoplace.cc/bd0419c95b4a4cf284c4301755d44722.jpg | 0.00000000 | 0.00000000 |
    |    63041151 | 23301211 | 唯爱敏                |           | http://dn.fotoplace.cc/f6d8e31029b945338cff2fa059609612.jpg | 0.00000000 | 0.00000000 |
    |    63041146 | 23301209 | LVenus                |           | http://dn.fotoplace.cc/a9d2eec4719d4af19d3c9f702a9f2149.jpg | 0.00000000 | 0.00000000 |
    |    63041138 | 23301207 | 呐个谁伱不配          |           | http://dn.fotoplace.cc/0dce2ae1cfb048e5b4420d9795e21e57.jpg | 0.00000000 | 0.00000000 |
    |    63041134 | 23301206 | 懒先森                |           | http://dn.fotoplace.cc/8873bda0cbbb4a7b9772b4e962ad7c4d.jpg | 0.00000000 | 0.00000000 |
    |    63041130 | 23301205 | 刘艺                  |           | http://dn.fotoplace.cc/7db76a45455f4d92b03659b643b3759c.jpg | 0.00000000 | 0.00000000 |
    |    63041128 | 23301203 | 搅拌雨水的尘埃        |           | http://dn.fotoplace.cc/a6fd183dee2843b88704e8459d28820c.jpg | 0.00000000 | 0.00000000 |
    |    63041124 | 23301202 | NotFoundError         |           | /6aa98a013dcd47f2a49449b78c54722a.jpg                       | 0.00000000 | 0.00000000 |
    |    63041122 | 23301201 | Ruin彡                |           | http://dn.fotoplace.cc/13d94a3080644af5bb1bfde03cd0f3ad.jpg | 0.00000000 | 0.00000000 |
    |    63041120 | 23301200 | 马兰花                |           | http://dn.fotoplace.cc/07b6ee1ee1c9468193a01cb30480739c.jpg | 0.00000000 | 0.00000000 |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    15 rows in set (2.55 sec)  
    
    # 优化第二次:0.01s
    root@localhost:fotoplacedb216:30:58>SELECT
    ->   followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar,
    ->   user.lat,
    ->   user.lng
    -> FROM user,
    ->   (
    ->     SELECT
    ->       uid2,
    ->       followingId
    ->     FROM following
    ->     USE INDEX (`PRIMARY`)
    ->     WHERE uid1 = 101838 AND followingId < 63041172
    ->     ORDER BY followingId DESC
    ->     LIMIT 15
    ->   ) AS a
    -> WHERE a.uid2 = user.uid ORDER BY followingId desc;
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    | followingId | uid      | userName              | signature | avatar                                                      | lat        | lng        |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    |    63041171 | 23301217 | 浅沫记忆              |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041168 | 23301216 | 港岛妹妹              |           | http://dn.fotoplace.cc/9031e9b5433e4aa7a0640c39579684f7.jpg | 0.00000000 | 0.00000000 |
    |    63041166 | 23301212 | 陈透明                |           | /static/img/common/avatar.png                               | 0.00000000 | 0.00000000 |
    |    63041161 | 23301215 | 趺苏                  |           | http://dn.fotoplace.cc/1a6b8ac82b6c41a49f8325b9cf6735c4.jpg | 0.00000000 | 0.00000000 |
    |    63041158 | 23301214 | Gareth_Bale11         |           | /53a081e3fe6549248a096dd6b81f77ee.jpg                       | 0.00000000 | 0.00000000 |
    |    63041156 | 23301213 | 老宋                  |           | http://dn.fotoplace.cc/bd0419c95b4a4cf284c4301755d44722.jpg | 0.00000000 | 0.00000000 |
    |    63041151 | 23301211 | 唯爱敏                |           | http://dn.fotoplace.cc/f6d8e31029b945338cff2fa059609612.jpg | 0.00000000 | 0.00000000 |
    |    63041146 | 23301209 | LVenus                |           | http://dn.fotoplace.cc/a9d2eec4719d4af19d3c9f702a9f2149.jpg | 0.00000000 | 0.00000000 |
    |    63041138 | 23301207 | 呐个谁伱不配          |           | http://dn.fotoplace.cc/0dce2ae1cfb048e5b4420d9795e21e57.jpg | 0.00000000 | 0.00000000 |
    |    63041134 | 23301206 | 懒先森                |           | http://dn.fotoplace.cc/8873bda0cbbb4a7b9772b4e962ad7c4d.jpg | 0.00000000 | 0.00000000 |
    |    63041130 | 23301205 | 刘艺                  |           | http://dn.fotoplace.cc/7db76a45455f4d92b03659b643b3759c.jpg | 0.00000000 | 0.00000000 |
    |    63041128 | 23301203 | 搅拌雨水的尘埃        |           | http://dn.fotoplace.cc/a6fd183dee2843b88704e8459d28820c.jpg | 0.00000000 | 0.00000000 |
    |    63041124 | 23301202 | NotFoundError         |           | /6aa98a013dcd47f2a49449b78c54722a.jpg                       | 0.00000000 | 0.00000000 |
    |    63041122 | 23301201 | Ruin彡                |           | http://dn.fotoplace.cc/13d94a3080644af5bb1bfde03cd0f3ad.jpg | 0.00000000 | 0.00000000 |
    +-------------+----------+-----------------------+-----------+-------------------------------------------------------------+------------+------------+
    14 rows in set (0.01 sec) 
    这里少返回一条数据，是因为删除user表数据时没有删除following表的关联数据，导致following中存在无效数据。
    如果不删除following表中的关联数据，极端情况下上条sql可能返回 empty set。
    
    # expalin 对比
    三个sql语句的explain结果一次如下：
    +----+-------------+-----------+--------+---------------+---------+---------+-----------------------------+----------+-------------+
    | id | select_type | table     | type   | possible_keys | key     | key_len | ref                         | rows     | Extra       |
    +----+-------------+-----------+--------+---------------+---------+---------+-----------------------------+----------+-------------+
    |  1 | SIMPLE      | following | ref    | uid1,uid2     | uid1    | 8       | const                       | 15359220 | Using where |
    |  1 | SIMPLE      | user      | eq_ref | PRIMARY       | PRIMARY | 8       | fotoplacedb2.following.uid2 |        1 | NULL        |
    +----+-------------+-----------+--------+---------------+---------+---------+-----------------------------+----------+-------------+ 
    
    +----+-------------+-----------+--------+-------------------+---------+---------+-----------------------------+---------+-------------+
    | id | select_type | table     | type   | possible_keys     | key     | key_len | ref                         | rows    | Extra       |
    +----+-------------+-----------+--------+-------------------+---------+---------+-----------------------------+---------+-------------+
    |  1 | SIMPLE      | following | ref    | PRIMARY,uid1,uid2 | uid1    | 8       | const                       | 6850308 | Using where |
    |  1 | SIMPLE      | user      | eq_ref | PRIMARY           | PRIMARY | 8       | fotoplacedb2.following.uid2 |       1 | NULL        |
    +----+-------------+-----------+--------+-------------------+---------+---------+-----------------------------+---------+-------------+ 
    
    +----+-------------+------------+--------+---------------+---------+---------+--------+----------+----------------+
    | id | select_type | table      | type   | possible_keys | key     | key_len | ref    | rows     | Extra          |
    +----+-------------+------------+--------+---------------+---------+---------+--------+----------+----------------+
    |  1 | PRIMARY     | <derived2> | ALL    | NULL          | NULL    | NULL    | NULL   |       15 | Using filesort |
    |  1 | PRIMARY     | user       | eq_ref | PRIMARY       | PRIMARY | 8       | a.uid2 |        1 | NULL           |
    |  2 | DERIVED     | following  | range  | PRIMARY       | PRIMARY | 8       | NULL   | 29990072 | Using where    |
    +----+-------------+------------+--------+---------------+---------+---------+--------+----------+----------------+  
    
    # SQL分析
        第一条sql:
            1. 用offset来分页，大数据量下不可取
            2. 获取某一页A数据后，如果产生了新的数据（新的粉丝），在获取A的下一页数据时，会返回重复数据。
        
        优化方案：采用断点方式分页。（这里的断点就是followingId字段）

    # 断点分页注意事项：
        1. 断点字段在表中必须唯一，否则可能漏掉数据或返回重复数据（比如时间类型的字段）
        2. 断点字段必须有建立索引（为了快速定位目标数据），排序字段如果不方便可以不用建立索引，但前提是返回结果集的数量小的情况下才可以不用建立索引。
        3. 根据实际场景优化索引结构，比如上面的最后一条SQL，由于where中用到了uid1和followingId两个字段，可以对这两个字段建立联合索引(uid1,followingId)，在优化的话可以考虑到select字段，让select的字段也在索引中。
        
    # 奇怪的事来了，接着往下看
    root@localhost:fotoplacedb217:43:19>SELECT
    ->   followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar
    -> FROM user,
    ->   (
    ->     SELECT
    ->       uid2,
    ->       followingId
    ->     FROM following
    ->       use index (`PRIMARY`)
    ->     WHERE uid1 = 101838 AND followingId < 63041172
    ->     ORDER BY followingId DESC
    ->     LIMIT 20
    ->   ) AS a
    -> WHERE a.uid2 = user.uid
    -> ORDER BY followingId DESC
    -> LIMIT 15;
    
    数据省了
    
    15 rows in set (0.00 sec)         
    
    这个秒回，任意改变followingId的值，也是秒回（其实也不是，当followingId为20000000的时候，需要2.65s，而30000000，20000000的时候都小于2.65s，可以近似的说20000000是个峰值，followingId离20000000越近，时间越长，越远，时间越短。这里先不讨论这个问题，就当做是秒回）
    
    换为另外一个用户，并获取第一页数据
    root@localhost:fotoplacedb217:58:45>SELECT
    ->   followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar
    -> FROM user,
    ->   (
    ->     SELECT
    ->       uid2,
    ->       followingId
    ->     FROM following
    ->     use index (`PRIMARY`)
    ->     WHERE uid1 = 23640407 AND followingId < 999999999999
    ->     ORDER BY followingId DESC
    ->     LIMIT 20
    ->   ) AS a
    -> WHERE a.uid2 = user.uid
    -> ORDER BY followingId DESC
    -> LIMIT 15;
    
    数据省了
    
    15 rows in set (0.58 sec)
    
    这里竟然用了0.58s。换做101838用户获取任意页数据都是秒回。
    101838 用户是大V用户，粉丝大约有600w。 
    23640407 用户是普通用户（就是本宝宝），粉丝就40个。
    如果不强制使用主键索引，那么普通用户的数据就是秒回。
    
    总结如下：
    如果强制使用主键索引，大V用户拉取任意页数据可以认为是秒回。普通用户拉取数据却会变慢.
    如果不强制使用索引，大V用户越往后拉数据，速度会变慢（也不是百分百递增，下面说这个问题）。普通用户就是秒回。
    
    本宝宝搞不懂了。😢
    
    由于系统大部分用户还是像我一样的普通用户，然后即便是大V用户，也很少拉后面的数据。所以本宝宝决定不强制使用主键索引了。
    
    
    现在试验不强制使用索引的情况：
    普通用户不用试验，有雨数据量小，都是秒回（真正的秒回）
    试验大V用户发现：
    root@localhost:fotoplacedb218:18:13>SELECT
    ->   followingId,
    ->   user.uid,
    ->   user.userName,
    ->   user.signature,
    ->   user.avatar
    -> FROM user,
    ->   (
    ->     SELECT
    ->       uid2,
    ->       followingId
    ->     FROM following
    ->     WHERE uid1 = 101838 AND followingId < 60000000
    ->     ORDER BY followingId DESC
    ->     LIMIT 20
    ->   ) AS a
    -> WHERE a.uid2 = user.uid
    -> ORDER BY followingId DESC
    -> LIMIT 15;
    
    数据省了
    
    15 rows in set (3.90 sec)    
    
    可以近似认为 followingId 为 6000w 时，速度最慢。followingId离6000w越近，越慢，越远，越快。
    其实这就引出两个问题：
        1. 为什么存在这样一个峰值？
        2. 为什么使用索引和不使用索引，两个峰值不一样?
    ```

```
redis			3.0.5
mysql			5.6.26-log	          
	主：16个cpu(每个cpu一个核)      32G内存
	从：16个cpu(每个cpu一个核)      32G内存
	备份：4个cpu(每个cpu一个核)     4G 内存               
zookeeper   	3.4.6
dubbo-admin  	2.5.3
es				1.6.0-2.1.0
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：有些事情还是要坚持的，比如睡觉，特别是闹钟响起的那一刻。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=5f3cfcb4-0e61-45aa-970f-d827a451c006)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：西医治标 中医治本，中西合医 治成标本。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=09e28d6b-f243-493f-a028-f8ee92a20cfb)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：最新娱乐圈的瓜，可以用六个字形容，她代了他没戴。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=27a93b6f-37a6-47c4-ab58-d999c73ba892)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：作为失败的典型，你实在是太成功了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=b350dff3-42a6-4f74-bb34-a87e09683317)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：上了那么多年班从没请过假，我怕公司发现，有没有我都一样。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=8e722ed1-bc46-416e-a44b-ffbbb116c2fd)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：任何时候都要保持微笑，这会让你看起来，像个不好惹的神经病。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=4a6c641c-93b2-4430-901e-8c018c0c622c)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：只要你想要而只要我有，不管什么，老子都不会给你。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=1c7ee728-3da3-4c83-be1b-5f3489eba878)
