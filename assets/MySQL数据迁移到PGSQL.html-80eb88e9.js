const t=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 微博关注关系如何实现 随记 PostgreSQL定时备份 K8S 无感发布 Redis高可用 简易版配置中心&amp;初探原理 MySQL索引 多台centos服务器，文件互相备份 CountDownLatch源码解读 PostgreSQL JSON类型字段常用操作 分布式问题 PostgreSQL高可用","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 微博关注关系如何实现 随记 PostgreSQL定时备份 K8S 无感发布 Redis高可用 简易版配置中心&amp;初探原理 MySQL索引 多台centos服务器，文件互相备份 CountDownLatch源码解读 PostgreSQL JSON类型字段常用操作 分布式问题 PostgreSQL高可用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T00:37:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T00:37:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T00:37:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1729211824000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":225},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.39,"words":417},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html\\" target=\\"blank\\">微博关注关系如何实现</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E8%AE%B0.html\\" target=\\"blank\\">随记</a></li>\\n<li><a href=\\"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">PostgreSQL定时备份</a></li>\\n<li><a href=\\"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html\\" target=\\"blank\\">K8S 无感发布</a></li>\\n<li><a href=\\"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">Redis高可用</a></li>\\n<li><a href=\\"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&amp;%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html\\" target=\\"blank\\">简易版配置中心&amp;初探原理</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html\\" target=\\"blank\\">MySQL索引</a></li>\\n<li><a href=\\"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">多台centos服务器，文件互相备份</a></li>\\n<li><a href=\\"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">CountDownLatch源码解读</a></li>\\n<li><a href=\\"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html\\" target=\\"blank\\">PostgreSQL JSON类型字段常用操作</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">分布式问题</a></li>\\n<li><a href=\\"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">PostgreSQL高可用</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
