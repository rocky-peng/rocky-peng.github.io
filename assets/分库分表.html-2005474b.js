const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 Docker进行资源隔离 KVM方式集群部署ES Docker笔记 搭建基于docker的elk平台来分析java日志 Centos离线安装Docker Java语言完成notion笔记备份 MyBatis xml特殊字符处理 SQL优化 ES杂项 MySQL数据迁移到PGSQL PostgreSQL JSON类型字段常用操作 Linux","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 Docker进行资源隔离 KVM方式集群部署ES Docker笔记 搭建基于docker的elk平台来分析java日志 Centos离线安装Docker Java语言完成notion笔记备份 MyBatis xml特殊字符处理 SQL优化 ES杂项 MySQL数据迁移到PGSQL PostgreSQL JSON类型字段常用操作 Linux"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T00:37:58.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-25T00:37:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-25T00:37:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1729816678000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":230},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html\\" target=\\"blank\\">Docker进行资源隔离</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/software/docker/Docker%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Docker笔记</a></li>\\n<li><a href=\\"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">搭建基于docker的elk平台来分析java日志</a></li>\\n<li><a href=\\"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html\\" target=\\"blank\\">Centos离线安装Docker</a></li>\\n<li><a href=\\"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">Java语言完成notion笔记备份</a></li>\\n<li><a href=\\"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">MyBatis xml特殊字符处理</a></li>\\n<li><a href=\\"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html\\" target=\\"blank\\">SQL优化</a></li>\\n<li><a href=\\"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">ES杂项</a></li>\\n<li><a href=\\"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html\\" target=\\"blank\\">MySQL数据迁移到PGSQL</a></li>\\n<li><a href=\\"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html\\" target=\\"blank\\">PostgreSQL JSON类型字段常用操作</a></li>\\n<li><a href=\\"/software/linux/Linux.html\\" target=\\"blank\\">Linux</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
