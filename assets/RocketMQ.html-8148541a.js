const t=JSON.parse('{"key":"v-8d1eeff8","path":"/software/middleware/mq/RocketMQ.html","title":"RocketMQ","lang":"zh-CN","frontmatter":{"title":"RocketMQ","date":"2021-09-01T00:00:00.000Z","description":"系统推荐 synchronized原理深度剖析 随记 是时候使用MapStruct替代BeanUtils了 线上FullGC频繁的排查 Javassist整理 Spring Boot升级到2 6 x踩的坑 JVM异常处理 PGSQL的json和 jsonb 读写性能测试 Java面试基础 Mermaid示例 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 K8S常用命令","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mq/RocketMQ.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mq/RocketMQ.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"RocketMQ"}],["meta",{"property":"og:description","content":"系统推荐 synchronized原理深度剖析 随记 是时候使用MapStruct替代BeanUtils了 线上FullGC频繁的排查 Javassist整理 Spring Boot升级到2 6 x踩的坑 JVM异常处理 PGSQL的json和 jsonb 读写性能测试 Java面试基础 Mermaid示例 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 K8S常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T15:18:09.000Z"}],["meta",{"property":"article:published_time","content":"2021-09-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T15:18:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-18T15:18:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1742311089000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":524},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"software/middleware/mq/RocketMQ.md","localizedDate":"2021年9月1日","excerpt":"<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html\\" target=\\"blank\\">synchronized原理深度剖析</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E8%AE%B0.html\\" target=\\"blank\\">随记</a></li>\\n<li><a href=\\"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html\\" target=\\"blank\\">是时候使用MapStruct替代BeanUtils了</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html\\" target=\\"blank\\">Javassist整理</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">JVM异常处理</a></li>\\n<li><a href=\\"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">PGSQL的json和 jsonb 读写性能测试</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/other/Mermaid%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">Mermaid示例</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n<li><a href=\\"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">K8S常用命令</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
