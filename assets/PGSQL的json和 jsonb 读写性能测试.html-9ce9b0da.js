const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 来个JVM冷知识 Cornell Notes System MAC CMS 异地多活 Arthas使用记录 MyBatis xml特殊字符处理 ShadowsockServer配置 vuepress-theme-hope使用心得 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 PostgreSQL JSON类型字段常用操作 Linux Hbase 总览","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 来个JVM冷知识 Cornell Notes System MAC CMS 异地多活 Arthas使用记录 MyBatis xml特殊字符处理 ShadowsockServer配置 vuepress-theme-hope使用心得 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 PostgreSQL JSON类型字段常用操作 Linux Hbase 总览"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-13T07:02:30.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-13T07:02:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-13T07:02:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1744527750000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":586},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">来个JVM冷知识</a></li>\\n<li><a href=\\"/other/Cornell%20Notes%20System.html\\" target=\\"blank\\">Cornell Notes System</a></li>\\n<li><a href=\\"/software/maccms/MAC%20CMS.html\\" target=\\"blank\\">MAC CMS</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html\\" target=\\"blank\\">异地多活</a></li>\\n<li><a href=\\"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">Arthas使用记录</a></li>\\n<li><a href=\\"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html\\" target=\\"blank\\">MyBatis xml特殊字符处理</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html\\" target=\\"blank\\">ShadowsockServer配置</a></li>\\n<li><a href=\\"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html\\" target=\\"blank\\">vuepress-theme-hope使用心得</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n<li><a href=\\"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html\\" target=\\"blank\\">PostgreSQL JSON类型字段常用操作</a></li>\\n<li><a href=\\"/software/linux/Linux.html\\" target=\\"blank\\">Linux</a></li>\\n<li><a href=\\"/other/Hbase%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Hbase 总览</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
