const e=JSON.parse('{"key":"v-28c21e91","path":"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html","title":"SQL优化","lang":"zh-CN","frontmatter":{"title":"SQL优化","date":"2018-09-05T00:00:00.000Z","description":"SQL优化从我自己的经验来说的，我自己总结了几个方面吧，主要从以下几个方面来着手： explain profiling sql使用技巧 explain 一般比较关注type,key,rows,extra几列 type: 描述了表之间是如何进行连接的 key: 真正使用的索引 rows: 预估扫描的行数，不是预估返回的行数 extra: 额外的信息 explain输出行的id值越大，越先执行。id如果相同，从上往下顺序执行。","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"SQL优化"}],["meta",{"property":"og:description","content":"SQL优化从我自己的经验来说的，我自己总结了几个方面吧，主要从以下几个方面来着手： explain profiling sql使用技巧 explain 一般比较关注type,key,rows,extra几列 type: 描述了表之间是如何进行连接的 key: 真正使用的索引 rows: 预估扫描的行数，不是预估返回的行数 extra: 额外的信息 explain输出行的id值越大，越先执行。id如果相同，从上往下顺序执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-20T08:10:39.000Z"}],["meta",{"property":"article:published_time","content":"2018-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-20T08:10:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-09-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-20T08:10:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"explain","slug":"explain","link":"#explain","children":[{"level":3,"title":"extra列实战","slug":"extra列实战","link":"#extra列实战","children":[]},{"level":3,"title":"type列实战","slug":"type列实战","link":"#type列实战","children":[]}]},{"level":2,"title":"profiling","slug":"profiling","link":"#profiling","children":[]},{"level":2,"title":"SQL使用技巧","slug":"sql使用技巧","link":"#sql使用技巧","children":[]},{"level":2,"title":"ICP(Index Condition PushDown)","slug":"icp-index-condition-pushdown","link":"#icp-index-condition-pushdown","children":[]},{"level":2,"title":"MySQL执行计划","slug":"mysql执行计划","link":"#mysql执行计划","children":[]},{"level":2,"title":"小表驱动大表","slug":"小表驱动大表","link":"#小表驱动大表","children":[{"level":3,"title":"何为小表驱动大表","slug":"何为小表驱动大表","link":"#何为小表驱动大表","children":[]},{"level":3,"title":"如何区分驱动表与被驱动表","slug":"如何区分驱动表与被驱动表","link":"#如何区分驱动表与被驱动表","children":[]},{"level":3,"title":"join的时候谁是驱动表","slug":"join的时候谁是驱动表","link":"#join的时候谁是驱动表","children":[]},{"level":3,"title":"Exsit与In","slug":"exsit与in","link":"#exsit与in","children":[]}]},{"level":2,"title":"哪些情况会出现全表扫描","slug":"哪些情况会出现全表扫描","link":"#哪些情况会出现全表扫描","children":[{"level":3,"title":"IN 和 EXIST语句","slug":"in-和-exist语句","link":"#in-和-exist语句","children":[]}]},{"level":2,"title":"use index 与 force index的区别？","slug":"use-index-与-force-index的区别","link":"#use-index-与-force-index的区别","children":[]},{"level":2,"title":"show index from 库名.表名","slug":"show-index-from-库名-表名","link":"#show-index-from-库名-表名","children":[]},{"level":2,"title":"实际例子","slug":"实际例子","link":"#实际例子","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1708416639000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":6}]},"readingTime":{"minutes":20.27,"words":6080},"filePathRelative":"software/middleware/mysql/SQL优化.md","localizedDate":"2018年9月5日","excerpt":"<p>SQL优化从我自己的经验来说的，我自己总结了几个方面吧，主要从以下几个方面来着手：</p>\\n<ol>\\n<li>explain</li>\\n<li>profiling</li>\\n<li>sql使用技巧</li>\\n</ol>\\n<h2> explain</h2>\\n<p>一般比较关注type,key,rows,extra几列</p>\\n<ol>\\n<li>\\n<p>type: 描述了表之间是如何进行连接的</p>\\n</li>\\n<li>\\n<p>key: 真正使用的索引</p>\\n</li>\\n<li>\\n<p>rows: 预估扫描的行数，不是预估返回的行数</p>\\n</li>\\n<li>\\n<p>extra: 额外的信息</p>\\n</li>\\n<li>\\n<p>explain输出行的id值越大，越先执行。id如果相同，从上往下顺序执行。</p>\\n</li>\\n</ol>","copyright":{},"autoDesc":true}');export{e as data};
