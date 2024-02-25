const t=JSON.parse('{"key":"v-049af386","path":"/other/WebSocket%20SpringBoot%20Demo.html","title":"WebSocket SpringBoot Demo","lang":"zh-CN","frontmatter":{"title":"WebSocket SpringBoot Demo","date":"2023-02-15T00:00:00.000Z","description":"pom.xml &lt;dependencies&gt; &lt;!-- web--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt; &lt;/dependency&gt; &lt;/dependencies&gt;","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/WebSocket%20SpringBoot%20Demo.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/WebSocket%20SpringBoot%20Demo.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"WebSocket SpringBoot Demo"}],["meta",{"property":"og:description","content":"pom.xml &lt;dependencies&gt; &lt;!-- web--&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt; &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt; &lt;/dependency&gt; &lt;/dependencies&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2023-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebSocket SpringBoot Demo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"pom.xml","slug":"pom-xml","link":"#pom-xml","children":[]},{"level":2,"title":"配置类","slug":"配置类","link":"#配置类","children":[]},{"level":2,"title":"处理器","slug":"处理器","link":"#处理器","children":[]},{"level":2,"title":"拦截器","slug":"拦截器","link":"#拦截器","children":[]},{"level":2,"title":"前端测试","slug":"前端测试","link":"#前端测试","children":[]}],"git":{"createdTime":1676466357000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":42},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":9}]},"readingTime":{"minutes":1.26,"words":378},"filePathRelative":"other/WebSocket SpringBoot Demo.md","localizedDate":"2023年2月15日","excerpt":"<h2> pom.xml</h2>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token comment\\">&lt;!--  web--&gt;</span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-web<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-websocket<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{t as data};