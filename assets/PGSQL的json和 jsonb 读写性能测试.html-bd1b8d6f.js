const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 RSA 加密解密多语言实现方案 synchronized原理深度剖析 MySQL高可用 Cornell Notes System 数据同步方案 Spring Boot升级到2 6 x踩的坑 Centos离线安装Docker ShadowsockServer配置 前后端常用技术 Nginx的双向认证配置 RocketMQ Docker隐射的端口外网不能访问","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 RSA 加密解密多语言实现方案 synchronized原理深度剖析 MySQL高可用 Cornell Notes System 数据同步方案 Spring Boot升级到2 6 x踩的坑 Centos离线安装Docker ShadowsockServer配置 前后端常用技术 Nginx的双向认证配置 RocketMQ Docker隐射的端口外网不能访问"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-09T07:03:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T07:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-09T07:03:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1731135834000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":271},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">RSA 加密解密多语言实现方案</a></li>\\n<li><a href=\\"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html\\" target=\\"blank\\">synchronized原理深度剖析</a></li>\\n<li><a href=\\"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MySQL高可用</a></li>\\n<li><a href=\\"/other/Cornell%20Notes%20System.html\\" target=\\"blank\\">Cornell Notes System</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">数据同步方案</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html\\" target=\\"blank\\">Centos离线安装Docker</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html\\" target=\\"blank\\">ShadowsockServer配置</a></li>\\n<li><a href=\\"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html\\" target=\\"blank\\">前后端常用技术</a></li>\\n<li><a href=\\"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html\\" target=\\"blank\\">Nginx的双向认证配置</a></li>\\n<li><a href=\\"/software/middleware/mq/RocketMQ.html\\" target=\\"blank\\">RocketMQ</a></li>\\n<li><a href=\\"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html\\" target=\\"blank\\">Docker隐射的端口外网不能访问</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
