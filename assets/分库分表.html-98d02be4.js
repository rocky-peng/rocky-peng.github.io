const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MySQL常用命令 来个JVM冷知识 JVM参数设置 istio基础知识 搭建基于docker的elk平台来分析java日志 gperftools Spring Boot升级到2 6 x踩的坑 推荐几个适用小工具 ES杂项 分布式问题 PostgreSQL JSON类型字段常用操作 表单重复提交解决方案","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MySQL常用命令 来个JVM冷知识 JVM参数设置 istio基础知识 搭建基于docker的elk平台来分析java日志 gperftools Spring Boot升级到2 6 x踩的坑 推荐几个适用小工具 ES杂项 分布式问题 PostgreSQL JSON类型字段常用操作 表单重复提交解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T17:18:17.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T17:18:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-06T17:18:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1725643097000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":64},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.69,"words":507},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">MySQL常用命令</a></li>\\n<li><a href=\\"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">来个JVM冷知识</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html\\" target=\\"blank\\">JVM参数设置</a></li>\\n<li><a href=\\"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">istio基础知识</a></li>\\n<li><a href=\\"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">搭建基于docker的elk平台来分析java日志</a></li>\\n<li><a href=\\"/software/unclassified/gperftools.html\\" target=\\"blank\\">gperftools</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">推荐几个适用小工具</a></li>\\n<li><a href=\\"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">ES杂项</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">分布式问题</a></li>\\n<li><a href=\\"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html\\" target=\\"blank\\">PostgreSQL JSON类型字段常用操作</a></li>\\n<li><a href=\\"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">表单重复提交解决方案</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
