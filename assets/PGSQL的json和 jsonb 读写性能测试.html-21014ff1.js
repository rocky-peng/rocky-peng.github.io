const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MySQL高可用 PostgreSQL定时备份 KVM方式集群部署ES ShadowsockServer Spring RetryTemplate Centos离线安装Docker vuepress-theme-hope使用心得 Lombok的Accessors导致EasyExcel读取失败 Java面试基础 RocketMQ Git历史记录修改用户名和邮箱 Hbase 总览","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MySQL高可用 PostgreSQL定时备份 KVM方式集群部署ES ShadowsockServer Spring RetryTemplate Centos离线安装Docker vuepress-theme-hope使用心得 Lombok的Accessors导致EasyExcel读取失败 Java面试基础 RocketMQ Git历史记录修改用户名和邮箱 Hbase 总览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-03T00:41:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-03T00:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-03T00:41:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1730594476000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":258},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MySQL高可用</a></li>\\n<li><a href=\\"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">PostgreSQL定时备份</a></li>\\n<li><a href=\\"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html\\" target=\\"blank\\">KVM方式集群部署ES</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer.html\\" target=\\"blank\\">ShadowsockServer</a></li>\\n<li><a href=\\"/other/Spring%20RetryTemplate.html\\" target=\\"blank\\">Spring RetryTemplate</a></li>\\n<li><a href=\\"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html\\" target=\\"blank\\">Centos离线安装Docker</a></li>\\n<li><a href=\\"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html\\" target=\\"blank\\">vuepress-theme-hope使用心得</a></li>\\n<li><a href=\\"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html\\" target=\\"blank\\">Lombok的Accessors导致EasyExcel读取失败</a></li>\\n<li><a href=\\"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html\\" target=\\"blank\\">Java面试基础</a></li>\\n<li><a href=\\"/software/middleware/mq/RocketMQ.html\\" target=\\"blank\\">RocketMQ</a></li>\\n<li><a href=\\"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">Git历史记录修改用户名和邮箱</a></li>\\n<li><a href=\\"/other/Hbase%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Hbase 总览</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
