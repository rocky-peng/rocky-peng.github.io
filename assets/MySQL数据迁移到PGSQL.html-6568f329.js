const e=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Btrace入门 数组转树形结构只需两步 随记 KVM方式集群部署ES Spring RetryTemplate Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 乱七八糟的笔记 异地多活 前端axios下载csv文件乱码 Java面试基础 Mermaid示例 PostgreSQL JSON类型字段常用操作","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 Btrace入门 数组转树形结构只需两步 随记 KVM方式集群部署ES Spring RetryTemplate Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 乱七八糟的笔记 异地多活 前端axios下载csv文件乱码 Java面试基础 Mermaid示例 PostgreSQL JSON类型字段常用操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-16T00:37:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-16T00:37:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-16T00:37:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1726447065000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":161},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html\\" target=\\"blank\\">Btrace入门</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html\\" target=\\"blank\\">数组转树形结构只需两步</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E8%AE%B0.html\\" target=\\"blank\\">随记</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/other/Spring%20RetryTemplate.html\\" target=\\"blank\\">Spring RetryTemplate</a></li>\\n<li><a href=\\"/software/java-basic/Thread%20&amp;%20ExecutorService%20&amp;%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览</a></li>\\n<li><a href=\\"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">乱七八糟的笔记</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html\\" target=\\"blank\\">异地多活</a></li>\\n<li><a href=\\"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html\\" target=\\"blank\\">前端axios下载csv文件乱码</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/other/Mermaid%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">Mermaid示例</a></li>\\n<li><a href=\\"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html\\" target=\\"blank\\">PostgreSQL JSON类型字段常用操作</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
