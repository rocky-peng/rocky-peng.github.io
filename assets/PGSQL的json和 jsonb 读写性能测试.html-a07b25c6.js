const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 CloudFlare 客户端证书的使用 IO相关 istio基础知识 Docker笔记 Spring Boot升级到2 6 x踩的坑 行转列不再复杂：SQL高手都在用的技巧揭秘 多台centos服务器，文件互相备份 JVM杂项 Java面试基础 Docker隐射的端口外网不能访问 Hbase 总览 杂记","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 CloudFlare 客户端证书的使用 IO相关 istio基础知识 Docker笔记 Spring Boot升级到2 6 x踩的坑 行转列不再复杂：SQL高手都在用的技巧揭秘 多台centos服务器，文件互相备份 JVM杂项 Java面试基础 Docker隐射的端口外网不能访问 Hbase 总览 杂记"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-15T00:36:02.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-15T00:36:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-15T00:36:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1739579762000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":463},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html\\" target=\\"blank\\">CloudFlare 客户端证书的使用</a></li>\\n<li><a href=\\"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html\\" target=\\"blank\\">IO相关</a></li>\\n<li><a href=\\"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">istio基础知识</a></li>\\n<li><a href=\\"/software/docker/Docker%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Docker笔记</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html\\" target=\\"blank\\">行转列不再复杂：SQL高手都在用的技巧揭秘</a></li>\\n<li><a href=\\"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">多台centos服务器，文件互相备份</a></li>\\n<li><a href=\\"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">JVM杂项</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html\\" target=\\"blank\\">Docker隐射的端口外网不能访问</a></li>\\n<li><a href=\\"/other/Hbase%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Hbase 总览</a></li>\\n<li><a href=\\"/software/unclassified/%E6%9D%82%E8%AE%B0.html\\" target=\\"blank\\">杂记</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
