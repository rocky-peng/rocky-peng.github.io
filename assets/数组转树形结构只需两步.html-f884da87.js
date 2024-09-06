const n=JSON.parse('{"key":"v-14359914","path":"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html","title":"数组转树形结构只需两步","lang":"zh-CN","frontmatter":{"title":"数组转树形结构只需两步","date":"2024-01-16T00:00:00.000Z","tag":["树形结构"],"description":"已很经典的菜单为例，假设结构如下： id parent_id name xxx1 xxx2 …. 按照一比一构造一个类（只增加一个children字段）： @Data public class XXXX{ \\tprivate Long id; \\tprivate Long parentId; \\tprivate String name; \\tprivate String xxx1; \\tprivate String xxx2; \\tprivate List&lt;XXXX&gt; children; }","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"数组转树形结构只需两步"}],["meta",{"property":"og:description","content":"已很经典的菜单为例，假设结构如下： id parent_id name xxx1 xxx2 …. 按照一比一构造一个类（只增加一个children字段）： @Data public class XXXX{ \\tprivate Long id; \\tprivate Long parentId; \\tprivate String name; \\tprivate String xxx1; \\tprivate String xxx2; \\tprivate List&lt;XXXX&gt; children; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T03:17:06.000Z"}],["meta",{"property":"article:tag","content":"树形结构"}],["meta",{"property":"article:published_time","content":"2024-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T03:17:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组转树形结构只需两步\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-06T03:17:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1705382266000,"updatedTime":1725592626000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":54}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"other/数组转树形结构只需两步.md","localizedDate":"2024年1月16日","excerpt":"<p>已很经典的菜单为例，假设结构如下：</p>\\n<ul>\\n<li>id</li>\\n<li>parent_id</li>\\n<li>name</li>\\n<li>xxx1</li>\\n<li>xxx2</li>\\n<li>….</li>\\n</ul>\\n<p>按照一比一构造一个类（只增加一个children字段）：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Data</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">XXXX</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Long</span> id<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Long</span> parentId<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> xxx1<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> xxx2<span class=\\"token punctuation\\">;</span>\\n\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>XXXX<span class=\\"token punctuation\\">&gt;</span></span> children<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
