const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 各种网关性能测试 MySQL锁、事务、隔离级别 Redis高可用 线上FullGC频繁的排查 Centos离线安装Docker JetBrains-License-Server vuepress-theme-hope使用心得 Lombok的Accessors导致EasyExcel读取失败 sofajraft SpringBoot服务在服务启动完成前被提前注册到nacos Docker跨主机通信方案 raft协议","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 各种网关性能测试 MySQL锁、事务、隔离级别 Redis高可用 线上FullGC频繁的排查 Centos离线安装Docker JetBrains-License-Server vuepress-theme-hope使用心得 Lombok的Accessors导致EasyExcel读取失败 sofajraft SpringBoot服务在服务启动完成前被提前注册到nacos Docker跨主机通信方案 raft协议"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-29T07:03:17.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-29T07:03:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-29T07:03:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1735455797000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":361},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">各种网关性能测试</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html\\" target=\\"blank\\">MySQL锁、事务、隔离级别</a></li>\\n<li><a href=\\"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">Redis高可用</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html\\" target=\\"blank\\">Centos离线安装Docker</a></li>\\n<li><a href=\\"/other/JetBrains-License-Server.html\\" target=\\"blank\\">JetBrains-License-Server</a></li>\\n<li><a href=\\"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html\\" target=\\"blank\\">vuepress-theme-hope使用心得</a></li>\\n<li><a href=\\"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html\\" target=\\"blank\\">Lombok的Accessors导致EasyExcel读取失败</a></li>\\n<li><a href=\\"/software/raft/sofajraft.html\\" target=\\"blank\\">sofajraft</a></li>\\n<li><a href=\\"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html\\" target=\\"blank\\">SpringBoot服务在服务启动完成前被提前注册到nacos</a></li>\\n<li><a href=\\"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">Docker跨主机通信方案</a></li>\\n<li><a href=\\"/software/raft/raft%E5%8D%8F%E8%AE%AE.html\\" target=\\"blank\\">raft协议</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
