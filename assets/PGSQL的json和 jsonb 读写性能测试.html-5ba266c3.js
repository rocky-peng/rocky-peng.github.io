const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis MAT工具 getPath vs getAbsolutePath vs getCanonicalPath JDK命令行工具 你真的会拼接字符串吗？ 数据同步方案 Docker笔记 Centos离线安装Docker Spring Boot升级到2 6 x踩的坑 Hbase 总览 https和http混用解决办法 Linux dev shm目录","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis MAT工具 getPath vs getAbsolutePath vs getCanonicalPath JDK命令行工具 你真的会拼接字符串吗？ 数据同步方案 Docker笔记 Centos离线安装Docker Spring Boot升级到2 6 x踩的坑 Hbase 总览 https和http混用解决办法 Linux dev shm目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-13T00:36:22.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-13T00:36:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-13T00:36:22.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1739406982000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":459},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/MyBatis.html\\" target=\\"blank\\">MyBatis</a></li>\\n<li><a href=\\"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">MAT工具</a></li>\\n<li><a href=\\"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html\\" target=\\"blank\\">getPath vs getAbsolutePath vs getCanonicalPath</a></li>\\n<li><a href=\\"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">JDK命令行工具</a></li>\\n<li><a href=\\"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html\\" target=\\"blank\\">你真的会拼接字符串吗？</a></li>\\n<li><a href=\\"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">数据同步方案</a></li>\\n<li><a href=\\"/software/docker/Docker%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Docker笔记</a></li>\\n<li><a href=\\"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html\\" target=\\"blank\\">Centos离线安装Docker</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/other/Hbase%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Hbase 总览</a></li>\\n<li><a href=\\"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html\\" target=\\"blank\\">https和http混用解决办法</a></li>\\n<li><a href=\\"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html\\" target=\\"blank\\">Linux dev shm目录</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
