const t=JSON.parse('{"key":"v-f906bf14","path":"/other/Paxos%E7%AE%97%E6%B3%95.html","title":"Paxos算法","lang":"zh-CN","frontmatter":{"description":"Paxos算法 系统推荐 记一次内存泄漏 Spring框架源码关键点 数组转树形结构只需两步 Censys搜索引擎学习 乱七八糟的笔记 IO相关 Spring Boot升级到2 6 x踩的坑 Java语言完成notion笔记备份 分布式事务Seata 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 PostgreSQL高可用 Linux dev shm目录","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Paxos算法"}],["meta",{"property":"og:description","content":"Paxos算法 系统推荐 记一次内存泄漏 Spring框架源码关键点 数组转树形结构只需两步 Censys搜索引擎学习 乱七八糟的笔记 IO相关 Spring Boot升级到2 6 x踩的坑 Java语言完成notion笔记备份 分布式事务Seata 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 PostgreSQL高可用 Linux dev shm目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T07:14:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T07:14:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Paxos算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-06T07:14:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1677056836000,"updatedTime":1725606898000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":58}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"other/Paxos算法.md","localizedDate":"2023年2月22日","excerpt":"<h1> Paxos算法</h1>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html\\" target=\\"blank\\">Spring框架源码关键点</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html\\" target=\\"blank\\">数组转树形结构只需两步</a></li>\\n<li><a href=\\"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html\\" target=\\"blank\\">Censys搜索引擎学习</a></li>\\n<li><a href=\\"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">乱七八糟的笔记</a></li>\\n<li><a href=\\"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html\\" target=\\"blank\\">IO相关</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">Java语言完成notion笔记备份</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html\\" target=\\"blank\\">分布式事务Seata</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n<li><a href=\\"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">PostgreSQL高可用</a></li>\\n<li><a href=\\"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html\\" target=\\"blank\\">Linux dev shm目录</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
