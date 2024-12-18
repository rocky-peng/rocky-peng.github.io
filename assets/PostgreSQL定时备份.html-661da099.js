const a=JSON.parse('{"key":"v-42c50665","path":"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html","title":"PostgreSQL定时备份","lang":"zh-CN","frontmatter":{"description":"PostgreSQL定时备份 编写一个shell脚本，暂时命名为：pg-localhost-backup.sh，内容如下： username=$1 database=$2 backdir=$3 currTime=`date \'+%Y%m%d-%H%M%S\'` /www/server/pgsql/bin/pg_dump/pg_dump -U $username $database | gzip &gt; $backdir/$username-$database-$currTime.zip","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PostgreSQL定时备份"}],["meta",{"property":"og:description","content":"PostgreSQL定时备份 编写一个shell脚本，暂时命名为：pg-localhost-backup.sh，内容如下： username=$1 database=$2 backdir=$3 currTime=`date \'+%Y%m%d-%H%M%S\'` /www/server/pgsql/bin/pg_dump/pg_dump -U $username $database | gzip &gt; $backdir/$username-$database-$currTime.zip"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T07:04:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T07:04:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PostgreSQL定时备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T07:04:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1676340737000,"updatedTime":1734505446000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":349},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":43}]},"readingTime":{"minutes":1.5,"words":449},"filePathRelative":"other/PostgreSQL定时备份.md","localizedDate":"2023年2月14日","excerpt":"<h1> PostgreSQL定时备份</h1>\\n<p>编写一个shell脚本，暂时命名为：<a href=\\"http://pg-localhost-backup.sh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">pg-localhost-backup.sh</a>，内容如下：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token assign-left variable\\">username</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$1</span>\\n<span class=\\"token assign-left variable\\">database</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$2</span>\\n<span class=\\"token assign-left variable\\">backdir</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$3</span>\\n\\n<span class=\\"token assign-left variable\\">currTime</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token function\\">date</span> <span class=\\"token string\\">\'+%Y%m%d-%H%M%S\'</span><span class=\\"token variable\\">`</span></span>\\n\\n/www/server/pgsql/bin/pg_dump/pg_dump <span class=\\"token parameter variable\\">-U</span> <span class=\\"token variable\\">$username</span> <span class=\\"token variable\\">$database</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">gzip</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token variable\\">$backdir</span>/<span class=\\"token variable\\">$username</span>-<span class=\\"token variable\\">$database</span>-<span class=\\"token variable\\">$currTime</span>.zip\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
