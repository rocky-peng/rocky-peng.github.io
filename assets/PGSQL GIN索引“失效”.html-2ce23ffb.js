const e=JSON.parse('{"key":"v-02418a82","path":"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html","title":"PGSQL GIN索引“失效”","lang":"zh-CN","frontmatter":{"title":"PGSQL GIN索引“失效”","date":"2024-08-26T00:00:00.000Z","tag":["GIN索引","PGSQL","gin_clean_pending_list"],"category":["PGSQL"],"description":"问题背景 现在有一张标签表，主要有两个字段，member_id和tags。如下： create table user_tags ( id serial8 primary key, member_id int8 not null , tags jsonb ); create index concurrently on user_tags using gin (tags);","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL GIN索引“失效”"}],["meta",{"property":"og:description","content":"问题背景 现在有一张标签表，主要有两个字段，member_id和tags。如下： create table user_tags ( id serial8 primary key, member_id int8 not null , tags jsonb ); create index concurrently on user_tags using gin (tags);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:tag","content":"GIN索引"}],["meta",{"property":"article:tag","content":"PGSQL"}],["meta",{"property":"article:tag","content":"gin_clean_pending_list"}],["meta",{"property":"article:published_time","content":"2024-08-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL GIN索引“失效”\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-26T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题背景","slug":"问题背景","link":"#问题背景","children":[]},{"level":2,"title":"实验","slug":"实验","link":"#实验","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1724671162000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":484}]},"readingTime":{"minutes":6.47,"words":1940},"filePathRelative":"other/PGSQL GIN索引“失效”.md","localizedDate":"2024年8月26日","excerpt":"<h2> 问题背景</h2>\\n<p>现在有一张标签表，主要有两个字段，member_id和tags。如下：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> user_tags\\n<span class=\\"token punctuation\\">(</span>\\n    id   serial8 <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\n    member_id int8 <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span> <span class=\\"token punctuation\\">,</span>\\n    tags jsonb\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">index</span> concurrently <span class=\\"token keyword\\">on</span> user_tags <span class=\\"token keyword\\">using</span> gin <span class=\\"token punctuation\\">(</span>tags<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
