const e=JSON.parse('{"key":"v-f906bf14","path":"/other/Paxos%E7%AE%97%E6%B3%95.html","title":"Paxos算法","lang":"zh-CN","frontmatter":{"description":"Paxos算法 系统推荐 Spring框架源码关键点 弱引用示例 MySQL高可用 JVM参数设置 CloudFlare 客户端证书的使用 KVM方式集群部署ES 乱七八糟的笔记 线上FullGC频繁的排查 PGSQL的json和 jsonb 读写性能测试 JetBrains-License-Server SQL优化 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Paxos%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Paxos算法"}],["meta",{"property":"og:description","content":"Paxos算法 系统推荐 Spring框架源码关键点 弱引用示例 MySQL高可用 JVM参数设置 CloudFlare 客户端证书的使用 KVM方式集群部署ES 乱七八糟的笔记 线上FullGC频繁的排查 PGSQL的json和 jsonb 读写性能测试 JetBrains-License-Server SQL优化 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-08T07:02:59.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-08T07:02:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Paxos算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-08T07:02:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1677056836000,"updatedTime":1741417379000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":506}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"other/Paxos算法.md","localizedDate":"2023年2月22日","excerpt":"<h1> Paxos算法</h1>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html\\" target=\\"blank\\">Spring框架源码关键点</a></li>\\n<li><a href=\\"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">弱引用示例</a></li>\\n<li><a href=\\"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MySQL高可用</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html\\" target=\\"blank\\">JVM参数设置</a></li>\\n<li><a href=\\"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html\\" target=\\"blank\\">CloudFlare 客户端证书的使用</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">乱七八糟的笔记</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">PGSQL的json和 jsonb 读写性能测试</a></li>\\n<li><a href=\\"/other/JetBrains-License-Server.html\\" target=\\"blank\\">JetBrains-License-Server</a></li>\\n<li><a href=\\"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html\\" target=\\"blank\\">SQL优化</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
