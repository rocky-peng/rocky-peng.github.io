const t=JSON.parse('{"key":"v-f906bf14","path":"/other/Paxos%E7%AE%97%E6%B3%95.html","title":"Paxos算法","lang":"zh-CN","frontmatter":{"description":"Paxos算法 系统推荐 Notion笔记定时备份 Spring Cloud（一）：服务治理技术概览【Finchley 版】 ES6.2.3(3节点)数据迁移到ES7.4.1(5节点) PostgreSQL定时备份 数据同步方案 批量修改git历史记录中的用户名和邮箱 推荐几个适用小工具 简易版配置中心&amp;初探原理 Java面试基础 前后端常用技术 Git历史记录修改用户名和邮箱 随机图片在线接口","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Paxos算法"}],["meta",{"property":"og:description","content":"Paxos算法 系统推荐 Notion笔记定时备份 Spring Cloud（一）：服务治理技术概览【Finchley 版】 ES6.2.3(3节点)数据迁移到ES7.4.1(5节点) PostgreSQL定时备份 数据同步方案 批量修改git历史记录中的用户名和邮箱 推荐几个适用小工具 简易版配置中心&amp;初探原理 Java面试基础 前后端常用技术 Git历史记录修改用户名和邮箱 随机图片在线接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-14T00:34:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-14T00:34:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Paxos算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-14T00:34:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1677056836000,"updatedTime":1726274094000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":149}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"other/Paxos算法.md","localizedDate":"2023年2月22日","excerpt":"<h1> Paxos算法</h1>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">Notion笔记定时备份</a></li>\\n<li><a href=\\"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html\\" target=\\"blank\\">Spring Cloud（一）：服务治理技术概览【Finchley 版】</a></li>\\n<li><a href=\\"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html\\" target=\\"blank\\">ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)</a></li>\\n<li><a href=\\"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">PostgreSQL定时备份</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">数据同步方案</a></li>\\n<li><a href=\\"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">批量修改git历史记录中的用户名和邮箱</a></li>\\n<li><a href=\\"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">推荐几个适用小工具</a></li>\\n<li><a href=\\"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&amp;%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html\\" target=\\"blank\\">简易版配置中心&amp;初探原理</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html\\" target=\\"blank\\">前后端常用技术</a></li>\\n<li><a href=\\"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">Git历史记录修改用户名和邮箱</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html\\" target=\\"blank\\">随机图片在线接口</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
