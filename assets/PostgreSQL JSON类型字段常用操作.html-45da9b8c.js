const n=JSON.parse(`{"key":"v-390b4708","path":"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html","title":"PostgreSQL JSON类型字段常用操作","lang":"zh-CN","frontmatter":{"title":"PostgreSQL JSON类型字段常用操作","date":"2023-01-11T00:00:00.000Z","category":["RDB","PostgreSQL"],"tag":["PostgreSQL","JSONB"],"description":"初始数据 insert into name_age values('{\\"id\\":1,\\"name\\":\\"小明\\", \\"age\\":18}'); insert into name_age values('{\\"id\\":2,\\"name\\":\\"小明1\\", \\"age\\":17}'); insert into name_age values('{\\"id\\":3,\\"name\\":\\"小明3\\", \\"age\\":16}'); insert into name_age values('{\\"id\\":4,\\"name\\":\\"小明4\\", \\"age\\":20}'); insert into name_age values('{\\"id\\":5,\\"name\\":\\"小明5\\", \\"age\\":30}'); insert into name_age values('{\\"id\\":6,\\"name\\":\\"小明6\\", \\"age\\":10}'); insert into name_age values('{\\"id\\":7,\\"name\\":\\"小明7\\", \\"age\\":15}'); insert into name_age values('{\\"id\\":8,\\"name\\":\\"小明8\\", \\"age\\":35}'); insert into name_age values('{\\"id\\":9,\\"name\\":\\"小明9\\", \\"age\\":35}');","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"码海拾光"}],["meta",{"property":"og:title","content":"PostgreSQL JSON类型字段常用操作"}],["meta",{"property":"og:description","content":"初始数据 insert into name_age values('{\\"id\\":1,\\"name\\":\\"小明\\", \\"age\\":18}'); insert into name_age values('{\\"id\\":2,\\"name\\":\\"小明1\\", \\"age\\":17}'); insert into name_age values('{\\"id\\":3,\\"name\\":\\"小明3\\", \\"age\\":16}'); insert into name_age values('{\\"id\\":4,\\"name\\":\\"小明4\\", \\"age\\":20}'); insert into name_age values('{\\"id\\":5,\\"name\\":\\"小明5\\", \\"age\\":30}'); insert into name_age values('{\\"id\\":6,\\"name\\":\\"小明6\\", \\"age\\":10}'); insert into name_age values('{\\"id\\":7,\\"name\\":\\"小明7\\", \\"age\\":15}'); insert into name_age values('{\\"id\\":8,\\"name\\":\\"小明8\\", \\"age\\":35}'); insert into name_age values('{\\"id\\":9,\\"name\\":\\"小明9\\", \\"age\\":35}');"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:tag","content":"PostgreSQL"}],["meta",{"property":"article:tag","content":"JSONB"}],["meta",{"property":"article:published_time","content":"2023-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PostgreSQL JSON类型字段常用操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"初始数据","slug":"初始数据","link":"#初始数据","children":[]},{"level":2,"title":"Where","slug":"where","link":"#where","children":[{"level":3,"title":"精确匹配","slug":"精确匹配","link":"#精确匹配","children":[]},{"level":3,"title":"模糊匹配","slug":"模糊匹配","link":"#模糊匹配","children":[]}]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":2,"title":"修改","slug":"修改","link":"#修改","children":[{"level":3,"title":"增加json字段","slug":"增加json字段","link":"#增加json字段","children":[]},{"level":3,"title":"删除json字段","slug":"删除json字段","link":"#删除json字段","children":[]},{"level":3,"title":"修改json字段值","slug":"修改json字段值","link":"#修改json字段值","children":[]}]},{"level":2,"title":"分页","slug":"分页","link":"#分页","children":[]},{"level":2,"title":"其他内容","slug":"其他内容","link":"#其他内容","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673513786000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":491},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":57},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":2.58,"words":775},"filePathRelative":"other/PostgreSQL JSON类型字段常用操作.md","localizedDate":"2023年1月11日","excerpt":"<h2> 初始数据</h2>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":1,\\"name\\":\\"小明\\", \\"age\\":18}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":2,\\"name\\":\\"小明1\\", \\"age\\":17}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":3,\\"name\\":\\"小明3\\", \\"age\\":16}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":4,\\"name\\":\\"小明4\\", \\"age\\":20}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":5,\\"name\\":\\"小明5\\", \\"age\\":30}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":6,\\"name\\":\\"小明6\\", \\"age\\":10}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":7,\\"name\\":\\"小明7\\", \\"age\\":15}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":8,\\"name\\":\\"小明8\\", \\"age\\":35}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">insert</span> <span class=\\"token keyword\\">into</span> name_age <span class=\\"token keyword\\">values</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{\\"id\\":9,\\"name\\":\\"小明9\\", \\"age\\":35}'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}`);export{n as data};
