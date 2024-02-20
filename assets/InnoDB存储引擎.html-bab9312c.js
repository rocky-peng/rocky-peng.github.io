import{_ as i,$ as o,a0 as l,a1 as a,a2 as n,a4 as r,a3 as e,w as t}from"./framework-6dd3436e.js";const p={},d=e('<h1 id="mysql技术内幕-innodb存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql技术内幕-innodb存储引擎" aria-hidden="true">#</a> MySQL技术内幕_InnoDB存储引擎</h1><h2 id="体系结构-连分优质" tabindex="-1"><a class="header-anchor" href="#体系结构-连分优质" aria-hidden="true">#</a> 体系结构（连分优质）</h2><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079551936.png" alt="MySQL体系结构" tabindex="0" loading="lazy"><figcaption>MySQL体系结构</figcaption></figure><h3 id="连接器" tabindex="-1"><a class="header-anchor" href="#连接器" aria-hidden="true">#</a> 连接器</h3><h3 id="分析器" tabindex="-1"><a class="header-anchor" href="#分析器" aria-hidden="true">#</a> 分析器</h3><h3 id="优化器" tabindex="-1"><a class="header-anchor" href="#优化器" aria-hidden="true">#</a> 优化器</h3><h3 id="执行器" tabindex="-1"><a class="header-anchor" href="#执行器" aria-hidden="true">#</a> 执行器</h3><h3 id="sql语句执行过程" tabindex="-1"><a class="header-anchor" href="#sql语句执行过程" aria-hidden="true">#</a> SQL语句执行过程</h3><h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><ol><li><p>存储引擎是基于表的，而不是数据库的 也就是说同一个数据库中不同的表可以使用不同的存储引擎，但一张表只能使用一种存储引擎</p></li><li><p>InnoDB使用MVCC机制来获取高并发性，支持事务，实现了4个隔离级别，主要面向OLTP应用</p></li><li><p>InnoDB采用了聚集（clustered）的方式，每张InnoDB存储引擎的表都是按照主键的顺序进行存放的。如果没有显式指定主键，InnoDB会自动为每行数据生成一个6字节的rowid，并以此作为主键。</p></li><li><p>MyISAM，主要面向OLAP应用，不支持事务，其缓冲池只缓冲索引文件，数据文件的缓存交给操作系统完成</p></li><li><p>MyISAM表的物理文件分为两种：myd(存放数据文件)，myi(存放索引文件)</p></li><li><p>Memory存储引擎：将表中数据存放在内存中，默认使用哈希索引。</p></li><li><p><strong>MySQL会使用Memory存储引擎的表来作为临时表来存放查询产生的中间结果，如果中间结果集大于了memory存储引擎表的容量，或者中间结果包括了memory存储引擎表不支持的数据类型，mysql又将此中间结果转换为MyISAM存储引擎表而存放在磁盘上。而MyISAM表是不缓存数据文件的，因此产生这样的临时表对于查询的性能会有所降低。</strong></p></li><li><p><strong>所以在查询时尽量避免产生临时表</strong></p></li><li><p>哪些存储引擎支持全文索引？</p><p>MyISAM，InnoDB都支持</p></li><li><p>将innodb缓冲池中的数据刷新到磁盘的机制：checkpoint机制</p></li><li><p>数据库服务器建议都采用64位操作系统</p></li><li><p>缓冲池中存放着各种类型的页,页的大小默认是16kb</p></li></ol><p>页的大小可通过innodb_page_size控制。</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079560081.png" alt="缓冲池中存放的数据" tabindex="0" loading="lazy"><figcaption>缓冲池中存放的数据</figcaption></figure><ol start="15"><li>缓冲池中的页通过LRU算法进行管理</li></ol><h2 id="mysql参数" tabindex="-1"><a class="header-anchor" href="#mysql参数" aria-hidden="true">#</a> MySQL参数</h2><p>MySQL参数总体可以分为两类：</p><ol><li><p>静态参数：启动后不能再修改</p></li><li><p>动态参数：启动后可以再修改</p><ul><li>有些参数只作用于当前会话</li><li>有些参数只作用于进程整个生命周期</li><li>有些参数既可以作用于当前会话，也可以作用于整个生命周期</li></ul></li></ol>',16),c={href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-parameters.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>参考参数值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show variables like <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token punctuation">[</span>@@global. <span class="token operator">|</span> @@session. <span class="token operator">|</span> @@<span class="token punctuation">]</span>system_var_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>动态设置参数值：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改全局变量的值不会修改配置文件中之前的值，也就是说关掉数据库就会丢失动态设置的值

<span class="token builtin class-name">set</span>
<span class="token operator">|</span> <span class="token punctuation">[</span>global <span class="token operator">|</span> session<span class="token punctuation">]</span> system_var_name <span class="token operator">=</span> <span class="token function">expr</span>
<span class="token operator">|</span> <span class="token punctuation">[</span>@@global. <span class="token operator">|</span> @@session. <span class="token operator">|</span> @@<span class="token punctuation">]</span>system_var_name <span class="token operator">=</span> <span class="token function">expr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql日志文件" tabindex="-1"><a class="header-anchor" href="#mysql日志文件" aria-hidden="true">#</a> MySQL日志文件</h2><ol><li><p>错误日志(error log) 截图中的 mysql-error.log</p></li><li><p>binlog日志(binlog) 截图中的 mysql-bin 文件</p></li><li><p>慢查询日志(slow query log) 截图中 mysql-slow.log</p></li><li><p>重做日志(redo log) 截图中的 ib_logfile 文件</p></li></ol><p><img src="https://cdn.justdopay.com/xiaoshujiang/1629079568743.png" alt="物理文件截图" loading="lazy"> 截图中的 ibdata 文件是 所有InnoDB表的共享表空间文件</p><h3 id="错误日志-error-log" tabindex="-1"><a class="header-anchor" href="#错误日志-error-log" aria-hidden="true">#</a> 错误日志(error log)</h3><h3 id="二进制日志-binlog" tabindex="-1"><a class="header-anchor" href="#二进制日志-binlog" aria-hidden="true">#</a> 二进制日志(binlog)</h3><p>执行对数据进行更改的操作，包括实际上没有引起数据发生变化的操作(PS: 通过实验发现5.6.26-log版本中，没有引起数据变化的操作不会记录到binlog文中)</p><ol><li>查看当前正在写入的二进制日志文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show master status<span class="token punctuation">;</span>
+------------------+-----------+--------------+------------------+-------------------+
<span class="token operator">|</span> File             <span class="token operator">|</span> Position  <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
+------------------+-----------+--------------+------------------+-------------------+
<span class="token operator">|</span> mysql-bin.000500 <span class="token operator">|</span> <span class="token number">143313596</span> <span class="token operator">|</span>              <span class="token operator">|</span>                  <span class="token operator">|</span>                   <span class="token operator">|</span>
+------------------+-----------+--------------+------------------+-------------------+   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查看指定二进制文件的内容</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show binlog events <span class="token keyword">in</span> <span class="token string">&#39;mysql-bin.000498&#39;</span> from pos limit ?<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629254574714.png" alt="此截图基于MySQL 5.7.34-log 版本" tabindex="0" loading="lazy"><figcaption>此截图基于MySQL 5.7.34-log 版本</figcaption></figure><h3 id="慢查询日志-slow" tabindex="-1"><a class="header-anchor" href="#慢查询日志-slow" aria-hidden="true">#</a> 慢查询日志(slow)</h3><p>slow_query_log：控制是否开起 long_query_time：控制慢查询的时间阈值 log_queries_not_using_indexes： 是否把未使用索引的查询记录到慢查询中</p><h2 id="杂项-1" tabindex="-1"><a class="header-anchor" href="#杂项-1" aria-hidden="true">#</a> 杂项</h2><h3 id="count方法" tabindex="-1"><a class="header-anchor" href="#count方法" aria-hidden="true">#</a> count方法</h3><p>count(*) == count(0)：统计的数量包括了空字段 count(字段) ：统计的该字段非空数量</p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><ol><li><p>辅助索引远小于聚集索引（这个小应该是指占用空间）</p></li><li><p>事务是否提交和锁是否释放没有必然联系（<strong>这个结论在21年8月18日看的时候感觉有点不理解呢，2022年9月8号看还是不理解</strong>）</p></li></ol><h2 id="mysql存储结构" tabindex="-1"><a class="header-anchor" href="#mysql存储结构" aria-hidden="true">#</a> MySQL存储结构</h2><h3 id="逻辑存储结构-表段区页" tabindex="-1"><a class="header-anchor" href="#逻辑存储结构-表段区页" aria-hidden="true">#</a> 逻辑存储结构（表段区页）</h3><p>从InnoDB存储引擎的逻辑结构来看，所有数据都被存放在表空间中（tablespace）,表空间又由段（segment）,区（extent），页（page）组成。</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629079576338.png" alt="InnoDB逻辑存储结构" tabindex="0" loading="lazy"><figcaption>InnoDB逻辑存储结构</figcaption></figure><h4 id="区" tabindex="-1"><a class="header-anchor" href="#区" aria-hidden="true">#</a> 区</h4><p>InnoDB每次从磁盘申请4~5个区，每个区大小为固定为1m,默认情况下每个页大小为16kb（innodb_page_size参数控制），因此一个区中共有64个连续的页。</p><h4 id="页" tabindex="-1"><a class="header-anchor" href="#页" aria-hidden="true">#</a> 页</h4><p>页的大小可以通过 innodb_page_size 修改，页是InnoDB进行IO操作的最小单位</p><p>页的类型： <img src="https://cdn.justdopay.com/xiaoshujiang/1629079581474.png" alt="页的类型" loading="lazy"></p><p>B-Tree Node : 有可能存放的是索引（可能是聚集索引，也可能是辅助索引），有可能存放的是行数据。如果Page-Level如果为0，则表明存放的是行数据，否则存放的是索引</p><h4 id="行" tabindex="-1"><a class="header-anchor" href="#行" aria-hidden="true">#</a> 行</h4><p>InnoDB是面向行的，数据按行进行存放。</p><p>每个页最多存放 (16*1024byte/2byte)-200=7992行数据 （在2022年9月8号看不理解怎么算的）。</p><p>行记录格式： Antelope文件格式： Compact和Redundant两种格式 Barracuda文件格式： Compressed和Dynamic两种格式</p><p>在 msyql 5.7.9 及以后版本，默认行格式由innodb_default_row_format变量决定，它的默认值是DYNAMIC，可以在 create table 的时候指定ROW_FORMAT=DYNAMIC。 也可以通过 show table status 语句来查看表所使用的行记录格式。 <img src="https://cdn.justdopay.com/xiaoshujiang/1629079587904.png" alt="Compact行记录格式" loading="lazy"></p><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：苟富贵勿相忘，若富贵，你是谁？ <br><br><img src="https://api.btstu.cn/sjbz/?m_lx=suiji&amp;uuid=36508169-57a9-4f72-9c40-e4880e2b737c" alt="" loading="lazy"></li></ul>`,41);function u(g,b){const s=t("ExternalLinkIcon");return o(),l("div",null,[d,a("p",null,[n("具体哪些参数是静态，哪些参数是动态的，可以参考："),a("a",c,[n("InnoDB官方参数列表"),r(s)])]),h])}const y=i(p,[["render",u],["__file","InnoDB存储引擎.html.vue"]]);export{y as default};
