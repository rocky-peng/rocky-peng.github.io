const t=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Notion笔记定时备份 记一次内存泄漏 数组转树形结构只需两步 MongoDB高可用 Markdown Mermaid画图实例 JVM异常处理 分布式事务Seata Mermaid示例 分布式问题 WebSocket SpringBoot Demo raft协议 Linux dev shm目录","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Notion笔记定时备份 记一次内存泄漏 数组转树形结构只需两步 MongoDB高可用 Markdown Mermaid画图实例 JVM异常处理 分布式事务Seata Mermaid示例 分布式问题 WebSocket SpringBoot Demo raft协议 Linux dev shm目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T07:04:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T07:04:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T07:04:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1726902274000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":172},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">Notion笔记定时备份</a></li>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html\\" target=\\"blank\\">数组转树形结构只需两步</a></li>\\n<li><a href=\\"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MongoDB高可用</a></li>\\n<li><a href=\\"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html\\" target=\\"blank\\">Markdown Mermaid画图实例</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">JVM异常处理</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html\\" target=\\"blank\\">分布式事务Seata</a></li>\\n<li><a href=\\"/other/Mermaid%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">Mermaid示例</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">分布式问题</a></li>\\n<li><a href=\\"/other/WebSocket%20SpringBoot%20Demo.html\\" target=\\"blank\\">WebSocket SpringBoot Demo</a></li>\\n<li><a href=\\"/software/raft/raft%E5%8D%8F%E8%AE%AE.html\\" target=\\"blank\\">raft协议</a></li>\\n<li><a href=\\"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html\\" target=\\"blank\\">Linux dev shm目录</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
