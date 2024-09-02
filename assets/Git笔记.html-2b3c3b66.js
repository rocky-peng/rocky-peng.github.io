const e=JSON.parse('{"key":"v-5af0c429","path":"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html","title":"Git笔记","lang":"zh-CN","frontmatter":{"title":"Git笔记","date":"2015-07-05T00:00:00.000Z","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Git笔记"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2015-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1672234484000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"software/unclassified/Git笔记.md","localizedDate":"2015年7月5日","excerpt":"<h1> Git</h1>\\n<ol>\\n<li>\\n<p>在github上fork别人的项目后，如何进行同步？</p>\\n<ol>\\n<li>\\n<p>检查是否配置目标远程仓库地址</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>git remote -v\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p>\\n</li>\\n<li>\\n<p>添加远程仓库地址</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>upstream 可以自定义，比如也可以写base</p>\\n</li>\\n<li>\\n<p>拉取原项目远程仓库的提交</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>git fetch upstream\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>执行merge动作,将远程提交合并到本地仓库</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>git merge upstream/master\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p>\\n</li>\\n<li>\\n<p>根据自己情况决定是否提交到自己的远程仓库</p>\\n</li>\\n</ol>\\n<blockquote>\\n<p><a href=\\"https://segmentfault.com/q/1010000002590371\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://segmentfault.com/q/1010000002590371</a></p>\\n</blockquote>\\n</li>\\n</ol>","copyright":{}}');export{e as data};
