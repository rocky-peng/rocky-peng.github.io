const t=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 getPath vs getAbsolutePath vs getCanonicalPath MAT工具 NGINX JDK命令行工具 正则表达式匹配第几个符号问题 AQS源码解读 异地多活 不重启 JVM，如何替换掉已经加载的类？ 分布式问题 Linux dev shm目录 raft协议 表单重复提交解决方案","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 getPath vs getAbsolutePath vs getCanonicalPath MAT工具 NGINX JDK命令行工具 正则表达式匹配第几个符号问题 AQS源码解读 异地多活 不重启 JVM，如何替换掉已经加载的类？ 分布式问题 Linux dev shm目录 raft协议 表单重复提交解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-31T07:09:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-31T07:09:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-31T07:09:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1738307378000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":434},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.41,"words":422},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html\\" target=\\"blank\\">getPath vs getAbsolutePath vs getCanonicalPath</a></li>\\n<li><a href=\\"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">MAT工具</a></li>\\n<li><a href=\\"/software/unclassified/NGINX.html\\" target=\\"blank\\">NGINX</a></li>\\n<li><a href=\\"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">JDK命令行工具</a></li>\\n<li><a href=\\"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">正则表达式匹配第几个符号问题</a></li>\\n<li><a href=\\"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">AQS源码解读</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html\\" target=\\"blank\\">异地多活</a></li>\\n<li><a href=\\"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html\\" target=\\"blank\\">不重启 JVM，如何替换掉已经加载的类？</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">分布式问题</a></li>\\n<li><a href=\\"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html\\" target=\\"blank\\">Linux dev shm目录</a></li>\\n<li><a href=\\"/software/raft/raft%E5%8D%8F%E8%AE%AE.html\\" target=\\"blank\\">raft协议</a></li>\\n<li><a href=\\"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">表单重复提交解决方案</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
