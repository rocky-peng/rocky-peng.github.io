const t=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 常见问题 MySQL常用命令 各种网关性能测试 Spring框架源码关键点 乱七八糟的笔记 如何安装Google BBR 批量修改git历史记录中的用户名和邮箱 index方法压力测试记录 JVM异常处理 行转列不再复杂：SQL高手都在用的技巧揭秘 PGSQL的json和 jsonb 读写性能测试 Docker跨主机通信方案","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 常见问题 MySQL常用命令 各种网关性能测试 Spring框架源码关键点 乱七八糟的笔记 如何安装Google BBR 批量修改git历史记录中的用户名和邮箱 index方法压力测试记录 JVM异常处理 行转列不再复杂：SQL高手都在用的技巧揭秘 PGSQL的json和 jsonb 读写性能测试 Docker跨主机通信方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T00:37:36.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-16T00:37:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T00:37:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1729039056000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":221},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">常见问题</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">MySQL常用命令</a></li>\\n<li><a href=\\"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">各种网关性能测试</a></li>\\n<li><a href=\\"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html\\" target=\\"blank\\">Spring框架源码关键点</a></li>\\n<li><a href=\\"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">乱七八糟的笔记</a></li>\\n<li><a href=\\"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html\\" target=\\"blank\\">如何安装Google BBR</a></li>\\n<li><a href=\\"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">批量修改git历史记录中的用户名和邮箱</a></li>\\n<li><a href=\\"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">index方法压力测试记录</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">JVM异常处理</a></li>\\n<li><a href=\\"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html\\" target=\\"blank\\">行转列不再复杂：SQL高手都在用的技巧揭秘</a></li>\\n<li><a href=\\"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">PGSQL的json和 jsonb 读写性能测试</a></li>\\n<li><a href=\\"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">Docker跨主机通信方案</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
