const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MAT工具 synchronized原理深度剖析 KVM 虚拟机安装 CloudFlare 客户端证书的使用 弱引用示例 随记 HTTP1 0 vs HTTP1 1 vs WebSocket IO相关 高可用通用方案 JVM异常处理 JVM杂项 表单重复提交解决方案","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MAT工具 synchronized原理深度剖析 KVM 虚拟机安装 CloudFlare 客户端证书的使用 弱引用示例 随记 HTTP1 0 vs HTTP1 1 vs WebSocket IO相关 高可用通用方案 JVM异常处理 JVM杂项 表单重复提交解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-13T00:39:32.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-13T00:39:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-13T00:39:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1736728772000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":388},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">MAT工具</a></li>\\n<li><a href=\\"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html\\" target=\\"blank\\">synchronized原理深度剖析</a></li>\\n<li><a href=\\"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html\\" target=\\"blank\\">KVM 虚拟机安装</a></li>\\n<li><a href=\\"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html\\" target=\\"blank\\">CloudFlare 客户端证书的使用</a></li>\\n<li><a href=\\"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">弱引用示例</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E8%AE%B0.html\\" target=\\"blank\\">随记</a></li>\\n<li><a href=\\"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html\\" target=\\"blank\\">HTTP1 0 vs HTTP1 1 vs WebSocket</a></li>\\n<li><a href=\\"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html\\" target=\\"blank\\">IO相关</a></li>\\n<li><a href=\\"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">高可用通用方案</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">JVM异常处理</a></li>\\n<li><a href=\\"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">JVM杂项</a></li>\\n<li><a href=\\"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">表单重复提交解决方案</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
