const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Git笔记 MySQL常用命令 Sublime Text 格式化JSON Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 正则表达式匹配第几个符号问题 多台centos服务器，文件互相备份 JetBrains-License-Server SQL优化 ReentrantLock源码解读 RocketMQ PostgreSQL高可用 K8S常用命令","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 Git笔记 MySQL常用命令 Sublime Text 格式化JSON Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 正则表达式匹配第几个符号问题 多台centos服务器，文件互相备份 JetBrains-License-Server SQL优化 ReentrantLock源码解读 RocketMQ PostgreSQL高可用 K8S常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-15T12:27:12.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-15T12:27:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-15T12:27:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1744720032000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":592},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Git笔记</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">MySQL常用命令</a></li>\\n<li><a href=\\"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html\\" target=\\"blank\\">Sublime Text 格式化JSON</a></li>\\n<li><a href=\\"/software/java-basic/Thread%20&amp;%20ExecutorService%20&amp;%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览</a></li>\\n<li><a href=\\"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html\\" target=\\"blank\\">正则表达式匹配第几个符号问题</a></li>\\n<li><a href=\\"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html\\" target=\\"blank\\">多台centos服务器，文件互相备份</a></li>\\n<li><a href=\\"/other/JetBrains-License-Server.html\\" target=\\"blank\\">JetBrains-License-Server</a></li>\\n<li><a href=\\"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html\\" target=\\"blank\\">SQL优化</a></li>\\n<li><a href=\\"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">ReentrantLock源码解读</a></li>\\n<li><a href=\\"/software/middleware/mq/RocketMQ.html\\" target=\\"blank\\">RocketMQ</a></li>\\n<li><a href=\\"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">PostgreSQL高可用</a></li>\\n<li><a href=\\"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">K8S常用命令</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
