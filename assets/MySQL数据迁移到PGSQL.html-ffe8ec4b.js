const e=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 来个JVM冷知识 PostgreSQL定时备份 JDK命令行工具 ShadowsockServer Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 线上FullGC频繁的排查 MAC CMS 数据同步方案 PasteImageIntoMarkdown插件开发 vuepress-theme-hope使用心得 Docker隐射的端口外网不能访问 PostgreSQL高可用","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 来个JVM冷知识 PostgreSQL定时备份 JDK命令行工具 ShadowsockServer Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 线上FullGC频繁的排查 MAC CMS 数据同步方案 PasteImageIntoMarkdown插件开发 vuepress-theme-hope使用心得 Docker隐射的端口外网不能访问 PostgreSQL高可用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-04T13:23:17.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-04T13:23:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-04T13:23:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1725456197000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":25}]},"readingTime":{"minutes":1.24,"words":372},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">来个JVM冷知识</a></li>\\n<li><a href=\\"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">PostgreSQL定时备份</a></li>\\n<li><a href=\\"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">JDK命令行工具</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer.html\\" target=\\"blank\\">ShadowsockServer</a></li>\\n<li><a href=\\"/software/java-basic/Thread%20&amp;%20ExecutorService%20&amp;%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/software/maccms/MAC%20CMS.html\\" target=\\"blank\\">MAC CMS</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">数据同步方案</a></li>\\n<li><a href=\\"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html\\" target=\\"blank\\">PasteImageIntoMarkdown插件开发</a></li>\\n<li><a href=\\"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html\\" target=\\"blank\\">vuepress-theme-hope使用心得</a></li>\\n<li><a href=\\"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html\\" target=\\"blank\\">Docker隐射的端口外网不能访问</a></li>\\n<li><a href=\\"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">PostgreSQL高可用</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
