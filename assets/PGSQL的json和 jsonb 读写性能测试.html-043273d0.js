const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis MySQL常用命令 MySQL高可用 Spring Cloud（一）：服务治理技术概览【Finchley 版】 Censys搜索引擎学习 制作KVM ES镜像文件 ES杂项 前端axios下载csv文件乱码 Markdown软件比对 GitHub Workflow突然报错 Linux raft协议","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis MySQL常用命令 MySQL高可用 Spring Cloud（一）：服务治理技术概览【Finchley 版】 Censys搜索引擎学习 制作KVM ES镜像文件 ES杂项 前端axios下载csv文件乱码 Markdown软件比对 GitHub Workflow突然报错 Linux raft协议"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-03T00:41:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-03T00:41:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-03T00:41:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1733186490000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":317},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/MyBatis.html\\" target=\\"blank\\">MyBatis</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">MySQL常用命令</a></li>\\n<li><a href=\\"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MySQL高可用</a></li>\\n<li><a href=\\"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html\\" target=\\"blank\\">Spring Cloud（一）：服务治理技术概览【Finchley 版】</a></li>\\n<li><a href=\\"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html\\" target=\\"blank\\">Censys搜索引擎学习</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html\\" target=\\"blank\\">制作KVM ES镜像文件</a></li>\\n<li><a href=\\"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">ES杂项</a></li>\\n<li><a href=\\"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html\\" target=\\"blank\\">前端axios下载csv文件乱码</a></li>\\n<li><a href=\\"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html\\" target=\\"blank\\">Markdown软件比对</a></li>\\n<li><a href=\\"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html\\" target=\\"blank\\">GitHub Workflow突然报错</a></li>\\n<li><a href=\\"/software/linux/Linux.html\\" target=\\"blank\\">Linux</a></li>\\n<li><a href=\\"/software/raft/raft%E5%8D%8F%E8%AE%AE.html\\" target=\\"blank\\">raft协议</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
