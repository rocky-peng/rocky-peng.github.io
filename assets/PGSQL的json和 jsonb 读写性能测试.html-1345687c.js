const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Git笔记 Btrace入门 微博关注关系如何实现 PostgreSQL定时备份 JDK命令行工具 KVM方式集群部署ES index方法压力测试记录 Paxos算法 JetBrains-License-Server 前后端常用技术 Java面试基础 SpringBoot服务在服务启动完成前被提前注册到nacos","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Git笔记 Btrace入门 微博关注关系如何实现 PostgreSQL定时备份 JDK命令行工具 KVM方式集群部署ES index方法压力测试记录 Paxos算法 JetBrains-License-Server 前后端常用技术 Java面试基础 SpringBoot服务在服务启动完成前被提前注册到nacos"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-10T07:02:58.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-10T07:02:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-10T07:02:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1744268578000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":580},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Git笔记</a></li>\\n<li><a href=\\"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html\\" target=\\"blank\\">Btrace入门</a></li>\\n<li><a href=\\"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html\\" target=\\"blank\\">微博关注关系如何实现</a></li>\\n<li><a href=\\"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">PostgreSQL定时备份</a></li>\\n<li><a href=\\"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">JDK命令行工具</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">index方法压力测试记录</a></li>\\n<li><a href=\\"/other/Paxos%E7%AE%97%E6%B3%95.html\\" target=\\"blank\\">Paxos算法</a></li>\\n<li><a href=\\"/other/JetBrains-License-Server.html\\" target=\\"blank\\">JetBrains-License-Server</a></li>\\n<li><a href=\\"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html\\" target=\\"blank\\">前后端常用技术</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html\\" target=\\"blank\\">SpringBoot服务在服务启动完成前被提前注册到nacos</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
