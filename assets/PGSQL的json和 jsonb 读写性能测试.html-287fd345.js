const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Spring框架源码关键点 K8S 无感发布 测试两台服务器间的网速 分库分表 Arthas使用记录 简易版配置中心&amp;初探原理 CountDownLatch源码解读 ESRally性能测试步骤 K8S常用命令 杂记 表单重复提交解决方案 随机图片在线接口","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Spring框架源码关键点 K8S 无感发布 测试两台服务器间的网速 分库分表 Arthas使用记录 简易版配置中心&amp;初探原理 CountDownLatch源码解读 ESRally性能测试步骤 K8S常用命令 杂记 表单重复提交解决方案 随机图片在线接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-09T00:36:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-09T00:36:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-09T00:36:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1728434179000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":207},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.36,"words":408},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html\\" target=\\"blank\\">Spring框架源码关键点</a></li>\\n<li><a href=\\"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html\\" target=\\"blank\\">K8S 无感发布</a></li>\\n<li><a href=\\"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html\\" target=\\"blank\\">测试两台服务器间的网速</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html\\" target=\\"blank\\">分库分表</a></li>\\n<li><a href=\\"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">Arthas使用记录</a></li>\\n<li><a href=\\"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&amp;%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html\\" target=\\"blank\\">简易版配置中心&amp;初探原理</a></li>\\n<li><a href=\\"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">CountDownLatch源码解读</a></li>\\n<li><a href=\\"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html\\" target=\\"blank\\">ESRally性能测试步骤</a></li>\\n<li><a href=\\"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">K8S常用命令</a></li>\\n<li><a href=\\"/software/unclassified/%E6%9D%82%E8%AE%B0.html\\" target=\\"blank\\">杂记</a></li>\\n<li><a href=\\"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">表单重复提交解决方案</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html\\" target=\\"blank\\">随机图片在线接口</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
