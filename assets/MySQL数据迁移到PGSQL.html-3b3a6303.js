const t=JSON.parse('{"key":"v-25097341","path":"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html","title":"MySQL数据迁移到PGSQL","lang":"zh-CN","frontmatter":{"description":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 记一次内存泄漏 Redis笔记 常见问题 来个JVM冷知识 CloudFlare 客户端证书的使用 正则表达式匹配第几个符号问题 InnoDB存储引擎 MySQL索引 CountDownLatch源码解读 Git历史记录修改用户名和邮箱 RocketMQ 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"MySQL数据迁移到PGSQL"}],["meta",{"property":"og:description","content":"MySQL数据迁移到PGSQL 采用的工具是navicat premium软件的数据传输功能，但有小坑： mysql的bit(1)数据类型转成了varchar(1) mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置 系统推荐 记一次内存泄漏 Redis笔记 常见问题 来个JVM冷知识 CloudFlare 客户端证书的使用 正则表达式匹配第几个符号问题 InnoDB存储引擎 MySQL索引 CountDownLatch源码解读 Git历史记录修改用户名和邮箱 RocketMQ 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-08T00:36:36.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-08T00:36:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据迁移到PGSQL\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-08T00:36:36.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1728347796000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":205},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.8,"words":541},"filePathRelative":"other/MySQL数据迁移到PGSQL.md","localizedDate":"2023年1月12日","excerpt":"<h1> MySQL数据迁移到PGSQL</h1>\\n<ol>\\n<li>采用的工具是navicat premium软件的数据传输功能，但有小坑：\\n<ol>\\n<li>mysql的bit(1)数据类型转成了varchar(1)</li>\\n<li>mysql的自增主键功能迁移后在pgsql中是没有的，需要额外设置</li>\\n</ol>\\n</li>\\n</ol>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Redis笔记</a></li>\\n<li><a href=\\"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">常见问题</a></li>\\n<li><a href=\\"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">来个JVM冷知识</a></li>\\n<li><a href=\\"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html\\" target=\\"blank\\">CloudFlare 客户端证书的使用</a></li>\\n<li><a href=\\"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">正则表达式匹配第几个符号问题</a></li>\\n<li><a href=\\"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html\\" target=\\"blank\\">InnoDB存储引擎</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html\\" target=\\"blank\\">MySQL索引</a></li>\\n<li><a href=\\"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">CountDownLatch源码解读</a></li>\\n<li><a href=\\"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">Git历史记录修改用户名和邮箱</a></li>\\n<li><a href=\\"/software/middleware/mq/RocketMQ.html\\" target=\\"blank\\">RocketMQ</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
