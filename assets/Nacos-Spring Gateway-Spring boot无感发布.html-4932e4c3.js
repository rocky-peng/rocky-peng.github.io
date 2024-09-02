const e=JSON.parse('{"key":"v-504d48c4","path":"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html","title":"Nacos-Spring Gateway-Spring boot无感发布","lang":"zh-CN","frontmatter":{"title":"Nacos-Spring Gateway-Spring boot无感发布","date":"2023-07-26T00:00:00.000Z","category":["无感发布"],"tag":["nacos","无感发布","spring cloud gateway","spring boot"],"head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Nacos-Spring Gateway-Spring boot无感发布"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-26T11:03:15.000Z"}],["meta",{"property":"article:tag","content":"nacos"}],["meta",{"property":"article:tag","content":"无感发布"}],["meta",{"property":"article:tag","content":"spring cloud gateway"}],["meta",{"property":"article:tag","content":"spring boot"}],["meta",{"property":"article:published_time","content":"2023-07-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-26T11:03:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nacos-Spring Gateway-Spring boot无感发布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-26T11:03:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题一","slug":"问题一","link":"#问题一","children":[]},{"level":2,"title":"问题二","slug":"问题二","link":"#问题二","children":[]},{"level":2,"title":"问题三","slug":"问题三","link":"#问题三","children":[]},{"level":2,"title":"问题四：","slug":"问题四","link":"#问题四","children":[]}],"git":{"createdTime":1690369395000,"updatedTime":1690369395000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":3.67,"words":1100},"filePathRelative":"other/Nacos-Spring Gateway-Spring boot无感发布.md","localizedDate":"2023年7月26日","excerpt":"<h2> 问题一</h2>\\n<p>在重启某个节点过程中，该节点已有的请求<strong>要求能正常响应</strong></p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">server</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token comment\\"># 开启优雅停机。关闭时如果有请求正在处理，会等待指定时间，以尽量把现有请求处理完。</span>\\n  <span class=\\"token comment\\"># 接收到关闭请求后，不会再接受新的请求</span>\\n  <span class=\\"token key atrule\\">shutdown</span><span class=\\"token punctuation\\">:</span> graceful\\n<span class=\\"token key atrule\\">spring</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">lifecycle</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">timeout-per-shutdown-phase</span><span class=\\"token punctuation\\">:</span> 120s\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{}}');export{e as data};
