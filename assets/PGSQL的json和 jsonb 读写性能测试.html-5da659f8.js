const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 各种网关性能测试 Btrace入门 Nacos-Spring Gateway-Spring boot无感发布 是时候使用MapStruct替代BeanUtils了 Censys搜索引擎学习 kafka 线上FullGC频繁的排查 MySQL锁、事务、隔离级别 linux_no_space_left_on_device 简易版配置中心&amp;初探原理 Arthas使用记录 AQS源码解读","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 各种网关性能测试 Btrace入门 Nacos-Spring Gateway-Spring boot无感发布 是时候使用MapStruct替代BeanUtils了 Censys搜索引擎学习 kafka 线上FullGC频繁的排查 MySQL锁、事务、隔离级别 linux_no_space_left_on_device 简易版配置中心&amp;初探原理 Arthas使用记录 AQS源码解读"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-30T00:39:56.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-30T00:39:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-30T00:39:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1735519196000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":372},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.27,"words":382},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html\\" target=\\"blank\\">各种网关性能测试</a></li>\\n<li><a href=\\"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html\\" target=\\"blank\\">Btrace入门</a></li>\\n<li><a href=\\"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html\\" target=\\"blank\\">Nacos-Spring Gateway-Spring boot无感发布</a></li>\\n<li><a href=\\"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html\\" target=\\"blank\\">是时候使用MapStruct替代BeanUtils了</a></li>\\n<li><a href=\\"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html\\" target=\\"blank\\">Censys搜索引擎学习</a></li>\\n<li><a href=\\"/software/middleware/mq/kafka.html\\" target=\\"blank\\">kafka</a></li>\\n<li><a href=\\"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html\\" target=\\"blank\\">线上FullGC频繁的排查</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html\\" target=\\"blank\\">MySQL锁、事务、隔离级别</a></li>\\n<li><a href=\\"/software/unclassified/linux_no_space_left_on_device.html\\" target=\\"blank\\">linux_no_space_left_on_device</a></li>\\n<li><a href=\\"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&amp;%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html\\" target=\\"blank\\">简易版配置中心&amp;初探原理</a></li>\\n<li><a href=\\"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">Arthas使用记录</a></li>\\n<li><a href=\\"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">AQS源码解读</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
