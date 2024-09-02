const e=JSON.parse('{"key":"v-0d2a2caa","path":"/software/unclassified/Oh%20My%20ZSH.html","title":"Oh My ZSH","lang":"zh-CN","frontmatter":{"title":"Oh My ZSH","date":"2018-05-03T00:00:00.000Z","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/Oh%20My%20ZSH.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/Oh%20My%20ZSH.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Oh My ZSH"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2018-05-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oh My ZSH\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-05-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"更改","slug":"更改","link":"#更改","children":[]}],"git":{"createdTime":1672234484000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"software/unclassified/Oh My ZSH.md","localizedDate":"2018年5月3日","excerpt":"<h2> 安装</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> <span class=\\"token function\\">git</span>\\n\\nyum <span class=\\"token function\\">install</span> <span class=\\"token function\\">zsh</span>\\n\\n<span class=\\"token function\\">sh</span> <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class=\\"token variable\\">)</span></span>\\"</span>\\n\\ncentos7修改主机名\\n<span class=\\"token function\\">vim</span> /etc/hostname        重启\\n\\n----\\n\\ncentos6修改主机名\\n<span class=\\"token function\\">vim</span> /etc/sysconfig/network  \\n添加一行：\\n<span class=\\"token assign-left variable\\"><span class=\\"token environment constant\\">HOSTNAME</span></span><span class=\\"token operator\\">=</span>您的主机名\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{}}');export{e as data};
