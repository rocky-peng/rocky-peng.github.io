import{_ as v,$ as c,a0 as t,a1 as e,a2 as i,a3 as n,a4 as d,a5 as a,w as r}from"./framework-349591b1.js";const u={},m=a('<p>SQL优化从我自己的经验来说的，我自己总结了几个方面吧，主要从以下几个方面来着手：</p><ol><li>explain</li><li>profiling</li><li>sql使用技巧</li></ol><h2 id="explain" tabindex="-1"><a class="header-anchor" href="#explain" aria-hidden="true">#</a> explain</h2><p>一般比较关注type,key,rows,extra几列</p><ol><li><p>type: 描述了表之间是如何进行连接的</p></li><li><p>key: 真正使用的索引</p></li><li><p>rows: 预估扫描的行数，不是预估返回的行数</p></li><li><p>extra: 额外的信息</p></li><li><p>explain输出行的id值越大，越先执行。id如果相同，从上往下顺序执行。</p></li></ol>',5),b={href:"https://blog.csdn.net/horses/article/details/106905110",target:"_blank",rel:"noopener noreferrer"},o=a(`<h3 id="extra列实战" tabindex="-1"><a class="header-anchor" href="#extra列实战" aria-hidden="true">#</a> extra列实战</h3><ol><li>using index: 使用了覆盖索引</li><li>using where: 表示mysql服务器将在存储引擎检索行后再进行过滤</li><li>using filesort: order的列没有索引或者没有用到order列的索引 order by 没有用到索引的情况有： <ul><li>order by的列就没有建立相关索引</li><li>order by的列存在相关索引，但和where条件中使用的索引不同</li></ul></li><li>using index condition: 使用的是辅助索引，但进行了回表操作（也就是说还走了一次主键索引）</li><li>null: 使用的是主键索引，但筛选的数据不全在索引中</li></ol><h3 id="type列实战" tabindex="-1"><a class="header-anchor" href="#type列实战" aria-hidden="true">#</a> type列实战</h3><ol><li><p>ALL 全表扫描</p></li><li><p>index 索引全扫描</p></li><li><p>range 索引范围扫描，常用语&lt;,&lt;=,&gt;=,between等操作</p></li><li><p>ref 使用了非唯一索引或唯一索引的左侧部分，返回可能多余一条的数据</p></li><li><p>eq_ref 类似ref，使用到了聚集索引或唯一非空索引的全部组成部分，使用了 = 或者 join 来关联其他表的某列</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM ref_table,other_table WHERE ref_table.key_column=other_table.column;

SELECT * FROM ref_table,other_table WHERE ref_table.key_column_part1=other_table.column AND ref_table.key_column_part2=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>const/system 只有使用到了聚集索引或唯一索引的全部组成部分才会是const，因此结果集最多只会有一行数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM tbl_name WHERE primary_key=1;

SELECT * FROM tbl_name WHERE unique_key=1;

SELECT * FROM tbl_name WHERE primary_key_part1=1 AND primary_key_part2=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>null MySQL不访问任何表或索引，直接返回结果</p></li></ol><h2 id="profiling" tabindex="-1"><a class="header-anchor" href="#profiling" aria-hidden="true">#</a> profiling</h2><p>这种方式和使用performance_schema数据库是等效的。</p>`,6),p={href:"https://dev.mysql.com/doc/refman/5.7/en/performance-schema-query-profiling.html",target:"_blank",rel:"noopener noreferrer"},g=e("h4",{id:"怎么玩",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#怎么玩","aria-hidden":"true"},"#"),i(" 怎么玩")],-1),f=e("p",null,"执行set profiling = 1 开启该功能",-1),h=e("p",null,"可用通过 show variables like 'profiling'查看是否已经开启。",-1),_={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html",target:"_blank",rel:"noopener noreferrer"},E=a(`<li><p>执行sql语句</p></li><li><p>执行set profiling = 0 关闭该功能</p></li><li><p>执行show profiles找到刚才执行的sql语句的query_id. <img src="https://cdn.justdopay.top/xiaoshujiang/1629079678303.png" alt="enter description here" loading="lazy"></p><p>一般只会展示15条记录，可通过参数 profiling_history_size 修改</p></li><li><p>执行show profile all for query query_id 来查看耗时清单 <img src="https://cdn.justdopay.top/xiaoshujiang/1629079685213.png" alt="enter description here" loading="lazy"></p><p>具体显示哪些列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALL：显示所有的开销信息
BLOCK IO：显示块IO相关开销
CONTEXT SWITCHES：上下文切换相关开销
CPU：显示CPU相关开销
IPC：显示发送和接受相关开销
MEMORY：显示内存相关开销
PAGE FAULTS：显示页面错误相关开销
SOURCE：显示和Source_function, Source_file,Source_line相关的相关开销
SWAPS：显示交换次数相关开销
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4),L=a(`<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>如果在其生命周期阶段出现如下的情况的就要重视了：</p><ol><li><p>converting HEAP to MyISAM 表示正在将基于内存的临时表转储到基于磁盘的临时表上</p><p>MySQL会使用Memory存储引擎的表来作为临时表来存放查询产生的中间结果，如果中间结果集大于了memory存储引擎表的容量（tmp_table_size参数控制），或者中间结果包括了memory存储引擎表不支持的数据类型，mysql又将此中间结果转换为MyISAM存储引擎表而存放在磁盘上。而MyISAM表是不缓存数据文件的，因此产生这样的临时表对于查询的性能会有所降低，所以在查询时尽量避免产生临时表。</p></li><li><p>Creating tmp table 创建了临时表，先拷贝到临时表，用完后再删除</p></li><li><p>Copying to tmp table on disk 把内存中的临时表复制到磁盘中，这个很耗性能</p></li><li><p>Locked 这个就是指在等待锁的意思</p></li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>查看全局创建的内存临时表数量
SHOW GLOBAL STATUS LIKE &#39;Created_tmp_tables&#39;;

查看全局创建的磁盘临时表数量
SHOW GLOBAL STATUS LIKE &#39;Created_tmp_disk_tables&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql使用技巧" tabindex="-1"><a class="header-anchor" href="#sql使用技巧" aria-hidden="true">#</a> SQL使用技巧</h2><ol><li>是否有索引</li><li>覆盖索引 <ul><li>可以避免回表操作</li></ul></li><li>避免隐式的类型转换</li><li>连表的两个字段必须保持相同的数据类型和字符集 <ul><li>有可能不能使用索引，造成全表扫描</li></ul></li><li>not exist与not in(优先选择not exist) <ul><li>not in使用不当还有可能返回错误结果。 如果not in子查询包含了null，将返回空数据。 如果not in子查询返回空数据，将匹配所有行数据</li><li>not in (1,null) : 返回空数据</li><li>not in (select 1 where 1=0) : 返回所有数据</li></ul></li><li>索引字段进行表达式或函数计算 <ul><li>会造成全表扫描</li></ul></li><li>不满足左匹配原则，比如模糊查询 <ul><li>会造成全表扫描</li></ul></li><li>!=（不等于） <ul><li>会造成全表扫描</li></ul></li><li>索引字段尽量建立在区分度高的列上 <ul><li>比如在is_del这样的字段上加索引意义就不是很大</li></ul></li><li>长字段单独一张表</li></ol><ul><li>从b+数的结构上解释，一页的空间是16kb，存放的数据占用空间越小那么一页存放的数据越多，整棵树就更加矮胖，IO次数就越少，效率越高</li></ul>`,7),y={start:"11"},A={href:"https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ",target:"_blank",rel:"noopener noreferrer"},w=a("<li>小表驱动大表</li><li>时间排序转换为id排序</li><li>分页技巧（断点分页）</li><li>表设计时，满足要求的情况下尽量选择占用空间小的数据类型</li><li>合理适用子查询，比如in与exist，有时比连表效率更高</li><li>sql语句尽量简单（这个我的使用习惯），一些操作可以让应用层完成</li><li>聚合操作避免使用ICP（也就是聚合操作的extra列不要出现using index condition）</li><li>or</li><li>null</li><li>避免使用not in,而用not exists 替代</li>",10),I=e("h2",{id:"icp-index-condition-pushdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#icp-index-condition-pushdown","aria-hidden":"true"},"#"),i(" ICP(Index Condition PushDown)")],-1),R={href:"https://www.jb51.net/article/222444.htm",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"mysql执行计划",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql执行计划","aria-hidden":"true"},"#"),i(" MySQL执行计划")],-1),x={href:"https://blog.csdn.net/horses/article/details/106905110",target:"_blank",rel:"noopener noreferrer"},T=a('<h2 id="小表驱动大表" tabindex="-1"><a class="header-anchor" href="#小表驱动大表" aria-hidden="true">#</a> 小表驱动大表</h2><h3 id="何为小表驱动大表" tabindex="-1"><a class="header-anchor" href="#何为小表驱动大表" aria-hidden="true">#</a> 何为小表驱动大表</h3><p>用小的数据集驱动大的数据集</p><h3 id="如何区分驱动表与被驱动表" tabindex="-1"><a class="header-anchor" href="#如何区分驱动表与被驱动表" aria-hidden="true">#</a> 如何区分驱动表与被驱动表</h3><p>很简单：explain 出来的结果中，第一行显示的表即为驱动表</p><h3 id="join的时候谁是驱动表" tabindex="-1"><a class="header-anchor" href="#join的时候谁是驱动表" aria-hidden="true">#</a> join的时候谁是驱动表</h3><ol><li>A left join B，则左表是驱动表，即A是驱动表</li><li>A right join B，则右表是驱动表，即B是驱动表</li><li>A inner join B，MySQL会选择比较小的表为驱动表</li></ol><h3 id="exsit与in" tabindex="-1"><a class="header-anchor" href="#exsit与in" aria-hidden="true">#</a> Exsit与In</h3><p>现在有两张表：</p><p>dept表：部门表，大概20条记录</p><p>emp表：员工表，大概1W条记录</p><p>需求：找出部门名称包含&quot;技术&quot;两个字的所有员工信息</p>',12),q={href:"http://B.name",target:"_blank",rel:"noopener noreferrer"},S={href:"http://B.name",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"先说结论：",-1),U=e("ol",null,[e("li",null,"当A表的数据集大于B表时，IN比exists更优"),e("li",null,"当A表的数据集小于B表时，exists比IN更优")],-1),k=e("p",null,"根据上面的结论，可知方案一比方案二时间更短，不信可自行实验",-1),M={href:"https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ",target:"_blank",rel:"noopener noreferrer"},D={href:"https://blog.csdn.net/qq_38011415/article/details/103304189",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"哪些情况会出现全表扫描",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#哪些情况会出现全表扫描","aria-hidden":"true"},"#"),i(" 哪些情况会出现全表扫描")],-1),P=e("li",null,"数据量太小了，走索引可能成本还要高一些",-1),O=e("li",null,"筛选列没有索引",-1),j=e("li",null,"筛选列有索引，但是匹配的数据量接近于整张表数据",-1),Y=e("li",null,"筛选列有索引，但是使用方式不对，比如对列进行计算、不满足最左匹配原则",-1),F={href:"https://blog.csdn.net/horses/article/details/107243447",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"in-和-exist语句",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#in-和-exist语句","aria-hidden":"true"},"#"),i(" IN 和 EXIST语句")],-1),H={href:"https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ",target:"_blank",rel:"noopener noreferrer"},W=a(`<h2 id="use-index-与-force-index的区别" tabindex="-1"><a class="header-anchor" href="#use-index-与-force-index的区别" aria-hidden="true">#</a> use index 与 force index的区别？</h2><p>use index是告诉优化器可以使用这个索引，但最终优化器可以不用这个索引。</p><p>force index是强制让优化器使用这个索引</p><h2 id="show-index-from-库名-表名" tabindex="-1"><a class="header-anchor" href="#show-index-from-库名-表名" aria-hidden="true">#</a> show index from 库名.表名</h2><p>这条命令输出了一个关键值：cardinality，表示该索引中唯一值的数目。这个值和表总行数应该尽量接近1，否则可以考虑是否可以删除这个索引。但这个值不是实时更新的，只是一个大概值。如果要手动更新这个值，可以使用 analyze table table_name来完成。</p><p>mysql是通过采样的方法来进行统计这个值的</p><p>优化器会根据这个值来判断是否使用这个索引，但这个值可能有时候不准确，因此可能影响sql执行性能，所以可以考虑在系统非高峰时间对核心表执行analyze table操作。</p><h2 id="实际例子" tabindex="-1"><a class="header-anchor" href="#实际例子" aria-hidden="true">#</a> 实际例子</h2><ul><li>MySQL的大部分索引（PRIMARY KEY,UNIQUE,INDEX）都采用的是B-Tree数据结构</li><li>对于一些特定的数据类型，会采用R-Tree数据结构</li><li>内存表（MEMORY table）支持 哈希表 数据结构</li><li>组合索引，复合索引，联合索引，是一个东西 <ul><li>对多个列建立一个索引，如下的组合索引。</li><li>要根据业务场景来决定列的顺序。</li><li>是否能用到联合索引，要看where条件是否符合 <em><strong>最左前缀</strong></em> 原则。</li><li>组合索引的第一个字段必须出现在查询组句中，这个索引才会被用到。（和上一条一个意思）</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table test(
    a int,
    b int,
    c int,
    KEY a(a,b,c)
);

优: select * from test where a=10 and b&gt;50
差: select * from test where a50

优: select * from test order by a
差: select * from test order by b
差: select * from test order by c

优: select * from test where a=10 order by a
优: select * from test where a=10 order by b
差: select * from test where a=10 order by c

优: select * from test where a&gt;10 order by a
差: select * from test where a&gt;10 order by b
差: select * from test where a&gt;10 order by c

优: select * from test where a=10 and b=10 order by a
优: select * from test where a=10 and b=10 order by b
优: select * from test where a=10 and b=10 order by c

优: select * from test where a=10 and b=10 order by a
优: select * from test where a=10 and b&gt;10 order by b
差: select * from test where a=10 and b&gt;10 order by c



create table pqs_temp (
  a BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  b VARCHAR(50) DEFAULT &#39;&#39; not NULL ,
  c VARCHAR(50) DEFAULT &#39;&#39; not NULL ,
  d VARCHAR(50) DEFAULT &#39;&#39; not NULL ,
  e VARCHAR(50) DEFAULT &#39;&#39; NOT NULL
 );

alter TABLE pqs_temp add index b_c_d (b(20),c,d);  //索引包含的索引列的 部分信息

-- d 在索引中（没有用到覆盖索引）
EXPLAIN select d from pqs_temp where b = &#39;1&#39;;
mysql&gt; EXPLAIN select d from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+


alter TABLE pqs_temp drop INDEX b_c_d;
ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);   //索引包含的索引列的 全部信息
-- d 在索引中（用到覆盖索引）什么叫 覆盖索引，下面有讲到。
EXPLAIN select d from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                    |
+----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |   35 | Using where; Using index |
+----+-------------+----------+------+---------------+-------+---------+-------+------+--------------------------+  



alter TABLE pqs_temp drop INDEX b_c_d;
ALTER TABLE pqs_temp add INDEX b_c_d (b(20),c,d);
-- e 不在索引中
EXPLAIN select e from pqs_temp where b = &#39;1&#39;;
mysql&gt; EXPLAIN select e from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+



alter TABLE pqs_temp drop INDEX b_c_d;
ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);
-- e 不在索引中
EXPLAIN select e from pqs_temp where b = &#39;1&#39;;
mysql&gt; EXPLAIN select e from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                 |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |    1 | Using index condition |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+ 



alter TABLE pqs_temp drop INDEX b_c_d;
ALTER TABLE pqs_temp add INDEX b_c_d (b(20),c,d);
-- * 中有不在索引中的列
EXPLAIN select * from pqs_temp where b = &#39;1&#39;;
mysql&gt; EXPLAIN select * from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+



alter TABLE pqs_temp drop INDEX b_c_d;
ALTER TABLE pqs_temp add INDEX b_c_d (b,c,d);
-- * 中有不在索引中的列
EXPLAIN select * from pqs_temp where b = &#39;1&#39;;
mysql&gt; EXPLAIN select * from pqs_temp where b = &#39;1&#39;;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                 |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 202     | const |    1 | Using index condition |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------+ 


-- order by 的列 不在索引中
EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY e;
mysql&gt; EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY e;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where; Using filesort |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+


-- order by 的列 在索引中,但order by 的时候不能用到索引,因为不满足 最左优先 原则
EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY d;
mysql&gt; EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY d;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra                       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where; Using filesort |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-----------------------------+


-- order by 的列 在索引中,同时order by 也能用到索引.因为满足 最左优先 原则
EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY c;
mysql&gt; EXPLAIN select * from pqs_temp where b = &#39;1&#39; ORDER BY c;
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
| id | select_type | table    | type | possible_keys | key   | key_len | ref   | rows | Extra       |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
|  1 | SIMPLE      | pqs_temp | ref  | b_c_d         | b_c_d | 82      | const |   35 | Using where |
+----+-------------+----------+------+---------------+-------+---------+-------+------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>覆盖索引 <ul><li>如果一个select语句，select的字段都在这个sql使用的索引中，那么这种查询就走了覆盖索引。</li><li>可以说覆盖索引不是一种索引，而是索引的一种使用方法。</li><li>覆盖索引是针对具体的sql语句而言。同样的索引结构，不同的sql语句不一定就都走了 覆盖索引。</li><li>在EXPLAIN的Extra列出现Using Index提示时，就说明该select查询使用了覆盖索引。</li><li>要使用覆盖索引，至少满足下列条件 <ol><li>所用到的索引必须能覆盖相关索引列的全部数据</li><li>select的字段必须是索引中的字段</li></ol></li></ul></li><li>索引注意事项 <ul><li>应尽量避免对索引列进行频繁更新，因为每次更新索引列，对应的索引也需要更新，这样就降低的更新性能</li><li>每张表建立的所以也不能太多，因为每次插入删除数据的时候，都相应的增加，删除索引，所以一定程度上就会降低性能。</li></ul></li></ul><ol start="18"><li><p>添加索引</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE pqs_temp MODIFY COLUMN a BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看表索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show index from table_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>limit子句影响到了MySQL对索引的选择（这个真奇葩）</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>explain
SELECT *, usermessage.createTime AS mes
FROM usermessage
WHERE (
  (
    usermessage.uid = 101838
  )
  AND (
    usermessage.messageType = &#39;notice&#39; OR
    usermessage.messageType = &#39;im&#39;
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
    usermessage.messageType = &#39;notice&#39; OR
    usermessage.messageType = &#39;im&#39;
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
    usermessage.messageType = &#39;notice&#39; OR
    usermessage.messageType = &#39;im&#39;
  )
) ORDER BY msgId DESC;

+----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+
| id | select_type | table       | type  | possible_keys   | key         | key_len | ref  | rows | Extra                                              |
+----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+
|  1 | SIMPLE      | usermessage | range | uid,messageType | messageType | 50      | NULL |  402 | Using index condition; Using where; Using filesort |
+----+-------------+-------------+-------+-----------------+-------------+---------+------+------+----------------------------------------------------+  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>union操作会去重</p></li></ol><ul><li>MySQL在UNION去重时，只是比对两条数据的值是否相同，并不去判断值的数据类型是否一致，只要两条数据的每一列数值相等，就认为是重复的数据，UNION出来的结果只会一条.</li></ul><ol start="22"><li>指定sql结果集顺序：order by field(字段名,字段的值[逗号隔开])</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="23"><li>Join</li></ol><ul><li>join:两个集合的交集， 等价于 inner join</li><li>cross join:两个集合的笛卡尔积，返回的记录数为两个表的记录数乘积</li><li>A left join B:返回的记录数为A的记录数</li><li>B right join A == A left join B</li></ul><ol start="24"><li>SQL优化实战</li></ol><ul><li>case 1 : 分页获取粉丝列表<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 索引结构:following root@localhost:fotoplacedb216:39:21&gt;show index from following;
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null |
Index_type | Comment | Index_comment |
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| following | 0 | PRIMARY | 1 | followingId | A | 59980091 | NULL | NULL | | BTREE | | | | following | 1 | uid1 | 1 |
uid1 | A | 3748755 | NULL | NULL | | BTREE | | | | following | 1 | uid2 | 1 | uid2 | A | 19993363 | NULL | NULL | |
BTREE | | |
+-----------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+

  # 索引结构:user
  root@localhost:fotoplacedb216:40:21&gt;show index from user;
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
  root@localhost:fotoplacedb216:21:46&gt;SELECT
  -&gt;   following.followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar,
  -&gt;   user.lat,
  -&gt;   user.lng
  -&gt; FROM following
  -&gt;   INNER JOIN user ON following.uid2 = user.uid
  -&gt; WHERE following.uid1 = 101838
  -&gt; ORDER BY following.followingId DESC
  -&gt; LIMIT 2000000, 15;
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
  root@localhost:fotoplacedb216:24:58&gt;SELECT
  -&gt;   following.followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar,
  -&gt;   user.lat,
  -&gt;   user.lng
  -&gt; FROM following
  -&gt;   INNER JOIN user ON following.uid2 = user.uid
  -&gt; WHERE following.uid1 = 101838 AND following.followingId &lt; 63041172
  -&gt; ORDER BY following.followingId DESC
  -&gt; LIMIT 15;
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
  root@localhost:fotoplacedb216:30:58&gt;SELECT
  -&gt;   followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar,
  -&gt;   user.lat,
  -&gt;   user.lng
  -&gt; FROM user,
  -&gt;   (
  -&gt;     SELECT
  -&gt;       uid2,
  -&gt;       followingId
  -&gt;     FROM following
  -&gt;     USE INDEX (\`PRIMARY\`)
  -&gt;     WHERE uid1 = 101838 AND followingId &lt; 63041172
  -&gt;     ORDER BY followingId DESC
  -&gt;     LIMIT 15
  -&gt;   ) AS a
  -&gt; WHERE a.uid2 = user.uid ORDER BY followingId desc;
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
  |  1 | PRIMARY     | &lt;derived2&gt; | ALL    | NULL          | NULL    | NULL    | NULL   |       15 | Using filesort |
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
  root@localhost:fotoplacedb217:43:19&gt;SELECT
  -&gt;   followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar
  -&gt; FROM user,
  -&gt;   (
  -&gt;     SELECT
  -&gt;       uid2,
  -&gt;       followingId
  -&gt;     FROM following
  -&gt;       use index (\`PRIMARY\`)
  -&gt;     WHERE uid1 = 101838 AND followingId &lt; 63041172
  -&gt;     ORDER BY followingId DESC
  -&gt;     LIMIT 20
  -&gt;   ) AS a
  -&gt; WHERE a.uid2 = user.uid
  -&gt; ORDER BY followingId DESC
  -&gt; LIMIT 15;
  
  数据省了
  
  15 rows in set (0.00 sec)         
  
  这个秒回，任意改变followingId的值，也是秒回（其实也不是，当followingId为20000000的时候，需要2.65s，而30000000，20000000的时候都小于2.65s，可以近似的说20000000是个峰值，followingId离20000000越近，时间越长，越远，时间越短。这里先不讨论这个问题，就当做是秒回）
  
  换为另外一个用户，并获取第一页数据
  root@localhost:fotoplacedb217:58:45&gt;SELECT
  -&gt;   followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar
  -&gt; FROM user,
  -&gt;   (
  -&gt;     SELECT
  -&gt;       uid2,
  -&gt;       followingId
  -&gt;     FROM following
  -&gt;     use index (\`PRIMARY\`)
  -&gt;     WHERE uid1 = 23640407 AND followingId &lt; 999999999999
  -&gt;     ORDER BY followingId DESC
  -&gt;     LIMIT 20
  -&gt;   ) AS a
  -&gt; WHERE a.uid2 = user.uid
  -&gt; ORDER BY followingId DESC
  -&gt; LIMIT 15;
  
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
  root@localhost:fotoplacedb218:18:13&gt;SELECT
  -&gt;   followingId,
  -&gt;   user.uid,
  -&gt;   user.userName,
  -&gt;   user.signature,
  -&gt;   user.avatar
  -&gt; FROM user,
  -&gt;   (
  -&gt;     SELECT
  -&gt;       uid2,
  -&gt;       followingId
  -&gt;     FROM following
  -&gt;     WHERE uid1 = 101838 AND followingId &lt; 60000000
  -&gt;     ORDER BY followingId DESC
  -&gt;     LIMIT 20
  -&gt;   ) AS a
  -&gt; WHERE a.uid2 = user.uid
  -&gt; ORDER BY followingId DESC
  -&gt; LIMIT 15;
  
  数据省了
  
  15 rows in set (3.90 sec)    
  
  可以近似认为 followingId 为 6000w 时，速度最慢。followingId离6000w越近，越慢，越远，越快。
  其实这就引出两个问题：
      1. 为什么存在这样一个峰值？
      2. 为什么使用索引和不使用索引，两个峰值不一样?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis			3.0.5
mysql			5.6.26-log	          
	主：16个cpu(每个cpu一个核)      32G内存
	从：16个cpu(每个cpu一个核)      32G内存
	备份：4个cpu(每个cpu一个核)     4G 内存               
zookeeper   	3.4.6
dubbo-admin  	2.5.3
es				1.6.0-2.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,20),Q=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),G=e("hr",null,null,-1),V=e("hr",null,null,-1),K=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),i("：你永远不会知道，你的哪个好友，会成为下一个微商。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/32096975/pexels-photo-32096975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Free stock photo of asian wedding, beautiful people, classic wedding",loading:"lazy"})])],-1);function z(J,$){const l=r("ExternalLinkIcon"),s=r("RouterLink");return c(),t("div",null,[m,e("p",null,[i("扩展阅读： "),e("a",b,[i("https://blog.csdn.net/horses/article/details/106905110"),n(l)])]),o,e("p",null,[i("使用performance_schema数据库的具体步骤参考："),e("a",p,[i("https://dev.mysql.com/doc/refman/5.7/en/performance-schema-query-profiling.html"),n(l)])]),g,e("ol",null,[e("li",null,[f,h,e("p",null,[i("这个变量的作用范围既可以是整个系统，也可以是当前会话，具体参考："),e("a",_,[i("https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html"),n(l)])])]),E]),L,e("ol",y,[e("li",null,[i("in与exist（各有适用场景："),e("a",A,[i("in和exist的选择"),n(l)])]),w]),I,e("p",null,[e("a",R,[i("https://www.jb51.net/article/222444.htm"),n(l)])]),N,e("p",null,[e("a",x,[i("https://blog.csdn.net/horses/article/details/106905110"),n(l)])]),T,e("p",null,[i("方案一： select * from emp A where A.depNo in (select B.deptNo from dept B where "),e("a",q,[i("B.name"),n(l)]),i(" like '%技术%');")]),e("p",null,[i("方案二： select * from emp A where exists ( select 1 from dept B where B.deptNo = A.deptNo and "),e("a",S,[i("B.name"),n(l)]),i(" like '%技术%' )")]),B,U,k,e("blockquote",null,[e("p",null,[e("a",M,[i("https://mp.weixin.qq.com/s/KpTG1WUlcP6cyk8Y9SMcyQ"),n(l)]),e("a",D,[i("https://blog.csdn.net/qq_38011415/article/details/103304189"),n(l)])])]),C,e("ul",null,[P,O,j,Y,e("li",null,[e("a",F,[i("有索引，但字符集不同"),n(l)])])]),X,e("p",null,[e("a",H,[i("in和exist的选择"),n(l)])]),W,e("ul",null,[e("li",null,[n(s,{to:"/software/unclassified/MyBatis.html"},{default:d(()=>[i("MyBatis")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:d(()=>[i("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[n(s,{to:"/other/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%88%B6%E4%BD%9CCookie%E3%80%81Local%E3%80%81Session%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E6%8F%92%E4%BB%B6.html"},{default:d(()=>[i("手把手教你制作Cookie、Local、Session数据导出插件")]),_:1})]),e("li",null,[n(s,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:d(()=>[i("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[n(s,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:d(()=>[i("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:d(()=>[i("测试两台服务器间的网速")]),_:1})]),e("li",null,[n(s,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:d(()=>[i("ShadowsockServer")]),_:1})]),e("li",null,[n(s,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:d(()=>[i("Redis高可用")]),_:1})]),e("li",null,[n(s,{to:"/software/maccms/MAC%20CMS.html"},{default:d(()=>[i("MAC CMS")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:d(()=>[i("Javassist整理")]),_:1})]),e("li",null,[n(s,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:d(()=>[i("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[n(s,{to:"/software/raft/sofajraft.html"},{default:d(()=>[i("sofajraft")]),_:1})])]),Q,G,V,K])}const ee=v(u,[["render",z],["__file","SQL优化.html.vue"]]);export{ee as default};
