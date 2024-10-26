import{_ as l,$ as d,a0 as r,a1 as n,a3 as s,a4 as a,a5 as v,a2 as e,w as c}from"./framework-16d560c6.js";const t={},u=v(`<h2 id="常用语句" tabindex="-1"><a class="header-anchor" href="#常用语句" aria-hidden="true">#</a> 常用语句</h2><h3 id="select语句" tabindex="-1"><a class="header-anchor" href="#select语句" aria-hidden="true">#</a> SELECT语句</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>当前登录用户
select user();

当前时间
select now();

数据库版本
select version();

当前数据库
select database();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引擎相关" tabindex="-1"><a class="header-anchor" href="#引擎相关" aria-hidden="true">#</a> 引擎相关</h3><h4 id="显示引擎相关信息" tabindex="-1"><a class="header-anchor" href="#显示引擎相关信息" aria-hidden="true">#</a> 显示引擎相关信息</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show engines;
mysql&gt; show engines;
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                        | Transactions | XA   | Savepoints |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| InnoDB             | DEFAULT | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         |
| BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                          | NO           | NO   | NO         |
| CSV                | YES     | CSV storage engine                                             | NO           | NO   | NO         |
| ARCHIVE            | YES     | Archive storage engine                                         | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                             | NO           | NO   | NO         |
| FEDERATED          | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
9 rows in set (0.03 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MEMORY存储引擎：他是基于hash的，存储在内存中，对临时表非常有用</p><h4 id="查看引擎的日志或者状态信息" tabindex="-1"><a class="header-anchor" href="#查看引擎的日志或者状态信息" aria-hidden="true">#</a> 查看引擎的日志或者状态信息</h4><p>show engine 引擎名 logs/status</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>
mysql&gt; show engine innodb status\\G;
*************************** 1. row ***************************
  Type: InnoDB
  Name: 
Status: 
=====================================
2020-02-01 17:14:35 0x7f8c890a8700 INNODB MONITOR OUTPUT
=====================================
Per second averages calculated from the last 18 seconds
-----------------
BACKGROUND THREAD
-----------------
srv_master_thread loops: 3107911 srv_active, 0 srv_shutdown, 12588197 srv_idle
srv_master_thread log flush and writes: 15695253
----------
SEMAPHORES
----------
OS WAIT ARRAY INFO: reservation count 4100614
OS WAIT ARRAY INFO: signal count 4208879
RW-shared spins 0, rounds 6689634, OS waits 3170686
RW-excl spins 0, rounds 8368239, OS waits 175555
RW-sx spins 67685, rounds 1470742, OS waits 16696
Spin rounds per wait: 6689634.00 RW-shared, 8368239.00 RW-excl, 21.73 RW-sx
------------------------
LATEST DETECTED DEADLOCK
------------------------
2019-09-30 10:57:23 0x7f8c5dbb0700
*** (1) TRANSACTION:
TRANSACTION 296247402, ACTIVE 47 sec starting index read
mysql tables in use 1, locked 1
LOCK WAIT 8 lock struct(s), heap size 1136, 6 row lock(s), undo log entries 2
MySQL thread id 375641, OS thread handle 140240848148224, query id 1446007790 10.0.10.12 laijiandu_prod updating
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表相关" tabindex="-1"><a class="header-anchor" href="#表相关" aria-hidden="true">#</a> 表相关</h3><h4 id="查看表列表" tabindex="-1"><a class="header-anchor" href="#查看表列表" aria-hidden="true">#</a> 查看表列表</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show tables [from 库名] [like &#39;pattern&#39;]
mysql&gt; show tables from laijiandu;
+--------------------------------------------+
| Tables_in_laijiandu                        |
+--------------------------------------------+
| ljd_Invent_count_and_dau                   |
| ljd_active_and_register_number             |
| ljd_activity                               |
| ljd_activity_addr_info                     |
| ljd_activity_daka                          |
| ljd_activity_reward                        |
| ljd_activity_sign_up_user                  |
| ljd_admin_user_info                        |
| ljd_alipay_user_info                       |
....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看表统计信息" tabindex="-1"><a class="header-anchor" href="#查看表统计信息" aria-hidden="true">#</a> 查看表统计信息</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show table status [from 库名] [like &#39;pattern&#39;]

也可以通过information_schema.tables这张表中查看这些信息

mysql&gt; show table status from laijiandu_prod like &#39;ljd_user&#39;;
+----------+--------+---------+------------+-------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+--------------------+----------+----------------+---------+
| Name     | Engine | Version | Row_format | Rows  | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment | Create_time         | Update_time         | Check_time | Collation          | Checksum | Create_options | Comment |
+----------+--------+---------+------------+-------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+--------------------+----------+----------------+---------+
| ljd_user | InnoDB |      10 | Dynamic    | 64010 |            697 |    44646400 |               0 |     11599872 |   7340032 |       30134955 | 2019-08-21 19:16:58 | 2019-12-09 21:24:45 | NULL       | utf8mb4_general_ci |     NULL |                |         |
+----------+--------+---------+------------+-------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+---------------------+------------+--------------------+----------+----------------+---------+
1 row in set (0.02 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看表索引信息" tabindex="-1"><a class="header-anchor" href="#查看表索引信息" aria-hidden="true">#</a> 查看表索引信息</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show index from [库名.]表名
mysql&gt; show index from laijiandu_prod.ljd_user;
+----------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table    | Non_unique | Key_name        | Seq_in_index | Column_name     | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+----------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| ljd_user |          0 | PRIMARY         |            1 | uid             | A         |       64010 |     NULL | NULL   |      | BTREE      |         |               |
| ljd_user |          0 | invitation_code |            1 | invitation_code | A         |       64010 |     NULL | NULL   |      | BTREE      |         |               |
| ljd_user |          0 | phone           |            1 | phone           | A         |       50850 |     NULL | NULL   | YES  | BTREE      |         |               |
| ljd_user |          1 | last_login_time |            1 | last_login_time | A         |       53310 |     NULL | NULL   |      | BTREE      |         |               |
| ljd_user |          1 | inviter_uid     |            1 | inviter_uid     | A         |        2428 |     NULL | NULL   | YES  | BTREE      |         |               |
+----------+------------+-----------------+--------------+-----------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
5 rows in set (0.03 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这条命令输出了一个关键值：cardinality，表示该索引中唯一值的数目。这个值和表总行数应该尽量接近1，否则可以考虑是否可以删除这个索引。但这个值不是实时更新的，只是一个大概值。如果要手动更新这个值，可以使用 analyze table table_name来完成。</p><p>mysql是通过采样的方法来进行统计这个值的</p><p>优化器会根据这个值来判断是否使用这个索引，但这个值可能有时候不准确，因此可能影响sql执行性能，所以可以考虑在系统非高峰时间对核心表执行analyze table操作。</p><h4 id="重新统计表的索引信息" tabindex="-1"><a class="header-anchor" href="#重新统计表的索引信息" aria-hidden="true">#</a> 重新统计表的索引信息</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>analyze table [库名.]表名
mysql&gt; analyze table laijiandu_prod.ljd_user;
+-------------------------+---------+----------+----------+
| Table                   | Op      | Msg_type | Msg_text |
+-------------------------+---------+----------+----------+
| laijiandu_prod.ljd_user | analyze | status   | OK       |
+-------------------------+---------+----------+----------+
1 row in set (0.52 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看表结构" tabindex="-1"><a class="header-anchor" href="#查看表结构" aria-hidden="true">#</a> 查看表结构</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>
show create table 表名

下面4条语句输出相同，最后一个可以进行列名筛选
desc 表名
describe 表名
explain 表名
show columns from 表名 [like &#39;pattern&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表重命名、表名交换" tabindex="-1"><a class="header-anchor" href="#表重命名、表名交换" aria-hidden="true">#</a> 表重命名、表名交换</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>rename 原表名 to 新表名
rename 原表名 to 库名.新表名  可将表移动到另一个数据库
rename 还可以交换两个表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复制表结构" tabindex="-1"><a class="header-anchor" href="#复制表结构" aria-hidden="true">#</a> 复制表结构</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table 新表名 like 要复制的表名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="truncate" tabindex="-1"><a class="header-anchor" href="#truncate" aria-hidden="true">#</a> truncate</h4><p>清空数据,删除重建表</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>TRUNCATE [TABLE] tbl_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>truncate 是删除表再创建，delete 是逐条删除</li><li>truncate 重置auto_increment的值。而delete不会</li><li>truncate 不知道删除了几条，而delete知道。</li><li>当被用于带分区的表时，truncate 会保留分区</li><li>truncate table_name是不可回滚的，因为会隐式提交sql</li></ol><h4 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE 表名 操作名
	-- 操作名
		ADD[ COLUMN] 字段定义       -- 增加字段
			AFTER 字段名          -- 表示增加在该字段名后面
			FIRST               -- 表示增加在第一个
		ADD PRIMARY KEY(字段名)   -- 创建主键
		ADD UNIQUE [索引名] (字段名)-- 创建唯一索引
		ADD INDEX [索引名] (字段名) -- 创建普通索引
		DROP[ COLUMN] 字段名      -- 删除字段
		MODIFY[ COLUMN] 字段名 字段属性     -- 支持对字段属性进行修改，不能修改字段名(所有原有属性也需写上)
		CHANGE[ COLUMN] 原字段名 新字段名 字段属性      -- 支持对字段名修改
		DROP PRIMARY KEY    -- 删除主键(删除主键前需删除其AUTO_INCREMENT属性)
		DROP INDEX 索引名 -- 删除索引
		DROP FOREIGN KEY 外键    -- 删除外键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="锁表" tabindex="-1"><a class="header-anchor" href="#锁表" aria-hidden="true">#</a> 锁表</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 锁表 */
表锁定只用于防止其它客户端进行不正当地读取和写入
MyISAM 支持表锁，InnoDB 支持行锁
-- 锁定
    LOCK TABLES tbl_name [AS alias]
-- 解锁
    UNLOCK TABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629170719816.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 删除表
    DROP TABLE[ IF EXISTS] 表名 ...
-- 清空表数据
    TRUNCATE [TABLE] 表名
-- 复制表结构
    CREATE TABLE 表名 LIKE 要复制的表名
-- 复制表结构和数据
    CREATE TABLE 表名 [AS] SELECT * FROM 要复制的表名
-- 检查表是否有错误
    CHECK TABLE tbl_name [, tbl_name] ... [option] ...
-- 优化表(整理表文件碎片)
    OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...
-- 修复表
    REPAIR [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ... [QUICK] [EXTENDED] [USE_FRM]
-- 分析表
    ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql的数据类型" tabindex="-1"><a class="header-anchor" href="#mysql的数据类型" aria-hidden="true">#</a> MySQL的数据类型</h2><h3 id="整形" tabindex="-1"><a class="header-anchor" href="#整形" aria-hidden="true">#</a> 整形</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>类型         字节     范围（有符号位）
tinyint     <span class="token number">1</span>字节    <span class="token parameter variable">-128</span> ~ <span class="token number">127</span>      无符号位：0 ~ <span class="token number">255</span>
smallint    <span class="token number">2</span>字节    <span class="token parameter variable">-32768</span> ~ <span class="token number">32767</span>
mediumint   <span class="token number">3</span>字节    <span class="token parameter variable">-8388608</span> ~ <span class="token number">8388607</span>
int         <span class="token number">4</span>字节    <span class="token parameter variable">-2147483647</span> ~ <span class="token number">2147483647</span>（大概21.5亿）  
bigint      <span class="token number">8</span>字节 

无符号数范围翻倍，用 unsigned 修改为无符号数

int<span class="token punctuation">(</span>M<span class="token punctuation">)</span>  M表示总位数
- 默认存在符号位，unsigned 属性修改
- 显示宽度，如果某个数不够定义字段时设置的位数，则前面以0补填，zerofill 属性修改
	例：int<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>   插入一个数<span class="token string">&#39;123&#39;</span>，补填后为<span class="token string">&#39;00123&#39;</span>
- 在满足要求的情况下，越小越好。
- <span class="token number">1</span>表示bool值真，0表示bool值假。MySQL没有布尔类型，通过整型0和1表示。常用tinyint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>表示布尔型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定点数" tabindex="-1"><a class="header-anchor" href="#定点数" aria-hidden="true">#</a> 定点数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>decimal -- 可变长度
decimal<span class="token punctuation">(</span>M, D<span class="token punctuation">)</span>   M也表示总位数，D表示小数位数。
保存一个精确的数值，不会发生数据的改变，不同于浮点数的四舍五入。
将浮点数转换为字符串来保存，每9位数字保存为4个字节。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符型" tabindex="-1"><a class="header-anchor" href="#字符型" aria-hidden="true">#</a> 字符型</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>char    定长字符串，速度快，但浪费空间
varchar 变长字符串，速度慢，但节省空间
M表示能存储的最大长度，此长度是字符数，非字节数。
不同的编码，所占用的空间不同。
char,最多255个字符，与采用的编码无关，每个字符固定占用3个字节
varchar,最大65535字节<span class="token punctuation">(</span>64kb<span class="token punctuation">)</span>，任何编码方式都不能超过这个空间。
一条有效记录最大不能超过65535个字节<span class="token punctuation">(</span>64kb<span class="token punctuation">)</span>。
varchar 是变长的，需要利用存储空间保存 varchar 的长度，如果数据小于255个字节，则采用一个字节来保存长度，反之需要两个字节来保存。
varchar 的最大有效长度由最大行大小和使用的字符集确定。
最大有效长度是65532字节，因为在varchar存字符串时，第一个字节是空的，不存在任何数据，然后还需两个字节来存放字符串的长度，所以有效长度是64432-1-2<span class="token operator">=</span><span class="token number">65532</span>字节。
例：若一个表定义为 CREATE TABLE tb<span class="token punctuation">(</span>c1 int, c2 char<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>, c3 varchar<span class="token punctuation">(</span>N<span class="token punctuation">))</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span> 问N的最大值是多少？ 答：<span class="token punctuation">(</span><span class="token number">65535</span>-1-2-4-30*3<span class="token punctuation">)</span>/3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期时间类型" tabindex="-1"><a class="header-anchor" href="#日期时间类型" aria-hidden="true">#</a> 日期时间类型</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>datetime    <span class="token number">8</span>字节    日期及时间     <span class="token number">1000</span>-01-01 00:00:00 到 <span class="token number">9999</span>-12-31 <span class="token number">23</span>:59:59
timestamp   <span class="token number">4</span>字节    时间戳        <span class="token number">19700101000000</span> 到 <span class="token number">2038</span>-01-19 03:14:07
<span class="token function">date</span>        <span class="token number">3</span>字节    日期         <span class="token number">1000</span>-01-01 到 <span class="token number">9999</span>-12-31
<span class="token function">time</span>        <span class="token number">3</span>字节    时间         -838:59:59 到 <span class="token number">838</span>:59:59
year        <span class="token number">1</span>字节    年份         <span class="token number">1901</span> - <span class="token number">2155</span>

datetime    YYYY-MM-DD hh:mm:ss

timestamp	YY-MM-DD hh:mm:ss
			YYYYMMDDhhmmss
			YYMMDDhhmmss
			
<span class="token function">date</span>        YYYY-MM-DD
			YY-MM-DD
			YYYYMMDD
			YYMMDD
			
<span class="token function">time</span>        hh:mm:ss
            hhmmss
            hhmmss
			
year        YYYY
            YY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql语句" tabindex="-1"><a class="header-anchor" href="#sql语句" aria-hidden="true">#</a> SQL语句</h2><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>向优化器建议如何选择索引
use index、ignore index、force index

SELECT * FROM table1 USE INDEX (key1,key2) WHERE key1=1 AND key2=2 AND key3=3;
SELECT * FROM table1 IGNORE INDEX (key3) WHERE key1=1 AND key2=2 AND key3=3;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 子查询 */ ------------------
    - 子查询需用括号包裹。
-- from型
    from后要求是一个表，必须给子查询结果取个别名。
    - 简化每个查询内的条件。
    - from型需将结果生成一个临时表格，可用以原表的锁定的释放。
    - 子查询返回一个表，表型子查询。
    select * from (select * from tb where id&gt;0) as subfrom where id&gt;1;
-- where型
    - 子查询返回一个值，标量子查询。
    - 不需要给子查询取别名。
    - where子查询内的表，不能直接用以更新。
    select * from tb where money = (select max(money) from tb);
    -- 列子查询
        如果子查询结果返回的是一列。
        使用 in 或 not in 完成查询
        exists 和 not exists 条件
            如果子查询返回数据，则返回1或0。常用于判断条件。
            select column1 from t1 where exists (select * from t2);
    -- 行子查询
        查询条件是一个行。
        select * from t1 where (id, gender) in (select id, gender from t2);
        行构造符：(col1, col2, ...) 或 ROW(col1, col2, ...)
        行构造符通常用于与对能返回两个或两个以上列的子查询进行比较。
    -- 特殊运算符
    != all()    相当于 not in
    = some()    相当于 in。any 是 some 的别名
    != some()   不等同于 not in，不等于其中某一个。
    all, some 可以配合其他运算符一起使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接查询-join" tabindex="-1"><a class="header-anchor" href="#连接查询-join" aria-hidden="true">#</a> 连接查询(join)</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>/* 连接查询(join) */ ------------------
    将多个表的字段进行连接，可以指定连接条件。
-- 内连接(inner join)
    - 默认就是内连接，可省略inner。
    - 只有数据存在时才能发送连接。即连接结果不能出现空行。
    on 表示连接条件。其条件表达式与where类似。也可以省略条件（表示条件永远为真）
    也可用where表示连接条件。
    还有 using, 但需字段名相同。 using(字段名)
    -- 交叉连接 cross join
        即，没有条件的内连接。
        select * from tb1 cross join tb2;
-- 外连接(outer join)
    - 如果数据不存在，也会出现在连接结果中。
    -- 左外连接 left join
        如果数据不存在，左表记录会出现，而右表为null填充
    -- 右外连接 right join
        如果数据不存在，右表记录会出现，而左表为null填充
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具" aria-hidden="true">#</a> 常用工具</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>数据备份和恢复
mysqldump

慢查询日志分析工具
1. mysqldumpslow
2. pt-query-digest   percona公司的，官网 percona.com

percona工具文档
https://www.percona.com/doc/percona-toolkit/3.0/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h2><h3 id="数值相关" tabindex="-1"><a class="header-anchor" href="#数值相关" aria-hidden="true">#</a> 数值相关</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>abs(x)          -- 绝对值 abs(-10.9) = 10
format(x, d)    -- 格式化千分位数值 format(1234567.456, 2) = 1,234,567.46
ceil(x)         -- 向上取整 ceil(10.1) = 11
floor(x)        -- 向下取整 floor (10.1) = 10
round(x)        -- 四舍五入去整
mod(m, n)       -- m%n m mod n 求余 10%3=1
pi()            -- 获得圆周率
pow(m, n)       -- m^n
sqrt(x)         -- 算术平方根
rand()          -- 随机数
truncate(x, d)  -- 截取d位小数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期时间相关" tabindex="-1"><a class="header-anchor" href="#日期时间相关" aria-hidden="true">#</a> 日期时间相关</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>now(), current_timestamp();     -- 当前日期时间
current_date();                 -- 当前日期
current_time();                 -- 当前时间
date(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- 获取日期部分
time(&#39;yyyy-mm-dd hh:ii:ss&#39;);    -- 获取时间部分
date_format(&#39;yyyy-mm-dd hh:ii:ss&#39;, &#39;%d %y %a %d %m %b %j&#39;); -- 格式化时间
unix_timestamp();               -- 获得unix时间戳
from_unixtime();                -- 从时间戳获得时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串相关" tabindex="-1"><a class="header-anchor" href="#字符串相关" aria-hidden="true">#</a> 字符串相关</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>replace(str ,search_str ,replace_str)   -- 在str中用replace_str替换search_str
substring(str, position [,length])      -- 从str的position开始,取length个字符
left(string, length)    	-- 从string2中的左边起取length个字符
length(string)          	-- string存储空间，单位字节
char_length(string)     	-- string的字符个数

concat(string [,...])   	-- 连接字串
lcase(string)           	-- 转换成小写

instr(string ,substring)    -- 返回substring首次在string中出现的位置
locate(substring, string [,start_position]) -- 同instr,但可指定开始位置

lpad(string, length, pad)   -- 重复用pad加在string开头,直到字串长度为length
rpad(string, length, pad)   -- 在str后用pad补充,直到长度为length

ltrim(string)           	-- 去除前端空格s
rtrim(string)           	-- 去除后端空格   

repeat(string, count)   	-- 重复count次
strcmp(string1 ,string2)    -- 逐字符比较两字串大小 0：相等，1：string1大，-1：string2大

charset(str)            	-- 返回字串字符集
load_file(file_name)    	-- 从文件读取内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>count()
sum();
max();
min();
avg();
group_concat()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户和权限管理" tabindex="-1"><a class="header-anchor" href="#用户和权限管理" aria-hidden="true">#</a> 用户和权限管理</h2><h3 id="重置root密码" tabindex="-1"><a class="header-anchor" href="#重置root密码" aria-hidden="true">#</a> 重置root密码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 先停止MySQL服务
2. 跳过权限表启动MySQL：safe_mysqld --skip-grant-tables &amp;
3. 连接MySQL：mysql -u root 
4. 更改密码：
		use mysql

		alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;新密码&#39;;
		# alter user &#39;root&#39;@&#39;%&#39; identified by &#39;新密码&#39;;
5. 刷新权限：flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建新用户" tabindex="-1"><a class="header-anchor" href="#创建新用户" aria-hidden="true">#</a> 创建新用户</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create user 用户名 identified by &#39;密码&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop user 用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分配权限" tabindex="-1"><a class="header-anchor" href="#分配权限" aria-hidden="true">#</a> 分配权限</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>grant 权限列表 on 表名 to 用户名

- all privileges 表示所有权限
- *.* 表示所有库的所有表
- 库名.表名 表示某库下面的某表

GRANT ALL PRIVILEGES ON \`pms\`.* TO &#39;pms&#39;@&#39;%&#39; IDENTIFIED BY &#39;pms0817&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,77),m=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),b=n("hr",null,null,-1),o=n("hr",null,null,-1),h=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),e("：我爱睡懒觉，如果要给这份爱一个期限，我希望是一万年。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=cdb94839-230f-4221-9906-eccb9f0d80cb",alt:"",loading:"lazy"})])],-1);function p(g,E){const i=c("RouterLink");return d(),r("div",null,[u,n("ul",null,[n("li",null,[s(i,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[e("记一次内存泄漏")]),_:1})]),n("li",null,[s(i,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[e("弱引用示例")]),_:1})]),n("li",null,[s(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[e("随记")]),_:1})]),n("li",null,[s(i,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[e("Hadoop 一")]),_:1})]),n("li",null,[s(i,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[e("Paxos算法")]),_:1})]),n("li",null,[s(i,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[e("简易版配置中心&初探原理")]),_:1})]),n("li",null,[s(i,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[e("异地多活")]),_:1})]),n("li",null,[s(i,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),n("li",null,[s(i,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[e("SpringCloud总体认识")]),_:1})]),n("li",null,[s(i,{to:"/software/raft/sofajraft.html"},{default:a(()=>[e("sofajraft")]),_:1})]),n("li",null,[s(i,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[e("WebSocket SpringBoot Demo")]),_:1})]),n("li",null,[s(i,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[e("Linux dev shm目录")]),_:1})])]),m,b,o,h])}const _=l(t,[["render",p],["__file","MySQL常用命令.html.vue"]]);export{_ as default};
