const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 记一次内存泄漏 Redis笔记 JVM垃圾收集器 NGINX 提取Docker镜像中的文件 KVM方式集群部署ES 推荐几个适用小工具 简易版配置中心&amp;初探原理 Spring Boot升级到2 6 x踩的坑 Markdown软件比对 Nginx的双向认证配置 RocketMQ","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 记一次内存泄漏 Redis笔记 JVM垃圾收集器 NGINX 提取Docker镜像中的文件 KVM方式集群部署ES 推荐几个适用小工具 简易版配置中心&amp;初探原理 Spring Boot升级到2 6 x踩的坑 Markdown软件比对 Nginx的双向认证配置 RocketMQ"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T08:16:34.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T08:16:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T08:16:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1725783394000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":99},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Redis笔记</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html\\" target=\\"blank\\">JVM垃圾收集器</a></li>\\n<li><a href=\\"/software/unclassified/NGINX.html\\" target=\\"blank\\">NGINX</a></li>\\n<li><a href=\\"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html\\" target=\\"blank\\">提取Docker镜像中的文件</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">推荐几个适用小工具</a></li>\\n<li><a href=\\"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&amp;%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html\\" target=\\"blank\\">简易版配置中心&amp;初探原理</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html\\" target=\\"blank\\">Markdown软件比对</a></li>\\n<li><a href=\\"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html\\" target=\\"blank\\">Nginx的双向认证配置</a></li>\\n<li><a href=\\"/software/middleware/mq/RocketMQ.html\\" target=\\"blank\\">RocketMQ</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
