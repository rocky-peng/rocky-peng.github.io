const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MySQL杂项 JVM参数设置 随记 MAC CMS 搭建基于docker的elk平台来分析java日志 推荐几个适用小工具 制作KVM ES镜像文件 JVM杂项 MySQL三大日志 前端axios下载csv文件乱码 ReentrantLock源码解读 Hbase 总览","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MySQL杂项 JVM参数设置 随记 MAC CMS 搭建基于docker的elk平台来分析java日志 推荐几个适用小工具 制作KVM ES镜像文件 JVM杂项 MySQL三大日志 前端axios下载csv文件乱码 ReentrantLock源码解读 Hbase 总览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-15T19:12:23.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-15T19:12:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-15T19:12:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1744744343000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":594},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.24,"words":371},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">MySQL杂项</a></li>\\n<li><a href=\\"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html\\" target=\\"blank\\">JVM参数设置</a></li>\\n<li><a href=\\"/other/%E9%9A%8F%E8%AE%B0.html\\" target=\\"blank\\">随记</a></li>\\n<li><a href=\\"/software/maccms/MAC%20CMS.html\\" target=\\"blank\\">MAC CMS</a></li>\\n<li><a href=\\"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">搭建基于docker的elk平台来分析java日志</a></li>\\n<li><a href=\\"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html\\" target=\\"blank\\">推荐几个适用小工具</a></li>\\n<li><a href=\\"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html\\" target=\\"blank\\">制作KVM ES镜像文件</a></li>\\n<li><a href=\\"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">JVM杂项</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">MySQL三大日志</a></li>\\n<li><a href=\\"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html\\" target=\\"blank\\">前端axios下载csv文件乱码</a></li>\\n<li><a href=\\"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html\\" target=\\"blank\\">ReentrantLock源码解读</a></li>\\n<li><a href=\\"/other/Hbase%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Hbase 总览</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
