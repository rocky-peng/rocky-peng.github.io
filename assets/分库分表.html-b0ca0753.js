const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 Git笔记 KVM 虚拟机安装 KVM方式集群部署ES kafka Hadoop 一 IO相关 线上FullGC频繁的排查 gperftools 不重启 JVM，如何替换掉已经加载的类？ Markdown软件比对 BBR加速 K8S常用命令","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 Git笔记 KVM 虚拟机安装 KVM方式集群部署ES kafka Hadoop 一 IO相关 线上FullGC频繁的排查 gperftools 不重启 JVM，如何替换掉已经加载的类？ Markdown软件比对 BBR加速 K8S常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-18T00:40:28.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-18T00:40:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-18T00:40:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1731890428000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":277},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.44,"words":433},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Git笔记</a></li>\\n<li><a href=\\"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html\\" target=\\"blank\\">KVM 虚拟机安装</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/software/middleware/mq/kafka.html\\" target=\\"blank\\">kafka</a></li>\\n<li><a href=\\"/other/Hadoop%20%E4%B8%80.html\\" target=\\"blank\\">Hadoop 一</a></li>\\n<li><a href=\\"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html\\" target=\\"blank\\">IO相关</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/software/unclassified/gperftools.html\\" target=\\"blank\\">gperftools</a></li>\\n<li><a href=\\"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html\\" target=\\"blank\\">不重启 JVM，如何替换掉已经加载的类？</a></li>\\n<li><a href=\\"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html\\" target=\\"blank\\">Markdown软件比对</a></li>\\n<li><a href=\\"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html\\" target=\\"blank\\">BBR加速</a></li>\\n<li><a href=\\"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">K8S常用命令</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
