const n=JSON.parse('{"key":"v-56543933","path":"/other/Hbase%20%E6%80%BB%E8%A7%88.html","title":"Hbase 总览","lang":"zh-CN","frontmatter":{"title":"Hbase 总览","date":"2023-11-02T00:00:00.000Z","categroy":["bigdata","hbase"],"tag":["hbase","bigdata","列族"],"description":"hbase主要用来存储大数据量数据，底层存储采用的是hdfs来存储，是一种列式存储nosql数据库。 逻辑存储结构 假设现在要存储这样的数据： { \\"row_key1\\": { \\"personal_info\\": { \\"name\\": \\"zhangsan\\", \\"city\\": \\"北京\\", \\"phone\\": \\"131********\\" }, \\"office_info\\": { \\"tel\\": \\"010-1111111\\", \\"address\\": \\"atguigu\\" } }, \\"row_key11\\": { \\"personal_info\\": { \\"city\\": \\"上海\\", \\"phone\\": \\"132********\\" }, \\"office_info\\": { \\"tel\\": \\"010-1111111\\" } }, \\"row_key2\\": { ...... } }","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Hbase%20%E6%80%BB%E8%A7%88.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Hbase%20%E6%80%BB%E8%A7%88.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Hbase 总览"}],["meta",{"property":"og:description","content":"hbase主要用来存储大数据量数据，底层存储采用的是hdfs来存储，是一种列式存储nosql数据库。 逻辑存储结构 假设现在要存储这样的数据： { \\"row_key1\\": { \\"personal_info\\": { \\"name\\": \\"zhangsan\\", \\"city\\": \\"北京\\", \\"phone\\": \\"131********\\" }, \\"office_info\\": { \\"tel\\": \\"010-1111111\\", \\"address\\": \\"atguigu\\" } }, \\"row_key11\\": { \\"personal_info\\": { \\"city\\": \\"上海\\", \\"phone\\": \\"132********\\" }, \\"office_info\\": { \\"tel\\": \\"010-1111111\\" } }, \\"row_key2\\": { ...... } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-15T07:03:12.000Z"}],["meta",{"property":"article:tag","content":"hbase"}],["meta",{"property":"article:tag","content":"bigdata"}],["meta",{"property":"article:tag","content":"列族"}],["meta",{"property":"article:published_time","content":"2023-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-15T07:03:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hbase 总览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-15T07:03:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"逻辑存储结构","slug":"逻辑存储结构","link":"#逻辑存储结构","children":[]},{"level":2,"title":"物理存储结构","slug":"物理存储结构","link":"#物理存储结构","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1698895069000,"updatedTime":1742022192000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":522},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"other/Hbase 总览.md","localizedDate":"2023年11月2日","excerpt":"<p>hbase主要用来存储大数据量数据，底层存储采用的是hdfs来存储，是一种列式存储nosql数据库。</p>\\n<h2> 逻辑存储结构</h2>\\n<p>假设现在要存储这样的数据：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"row_key1\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"personal_info\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"name\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"zhangsan\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"city\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"北京\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"phone\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"131********\\"</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"office_info\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"tel\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"010-1111111\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"address\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"atguigu\\"</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"row_key11\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"personal_info\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"city\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"上海\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token property\\">\\"phone\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"132********\\"</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"office_info\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">\\"tel\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"010-1111111\\"</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"row_key2\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    ......\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
