const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 记一次内存泄漏 MySQL杂项 HTTP1 0 vs HTTP1 1 vs WebSocket MongoDB高可用 Cornell Notes System IO相关 搭建基于docker的elk平台来分析java日志 分库分表 Lombok的Accessors导致EasyExcel读取失败 vuepress-theme-hope使用心得 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 K8S常用命令","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 记一次内存泄漏 MySQL杂项 HTTP1 0 vs HTTP1 1 vs WebSocket MongoDB高可用 Cornell Notes System IO相关 搭建基于docker的elk平台来分析java日志 分库分表 Lombok的Accessors导致EasyExcel读取失败 vuepress-theme-hope使用心得 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 K8S常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T07:03:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T07:03:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T07:03:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1727247832000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":180},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.47,"words":442},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">MySQL杂项</a></li>\\n<li><a href=\\"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html\\" target=\\"blank\\">HTTP1 0 vs HTTP1 1 vs WebSocket</a></li>\\n<li><a href=\\"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MongoDB高可用</a></li>\\n<li><a href=\\"/other/Cornell%20Notes%20System.html\\" target=\\"blank\\">Cornell Notes System</a></li>\\n<li><a href=\\"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html\\" target=\\"blank\\">IO相关</a></li>\\n<li><a href=\\"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">搭建基于docker的elk平台来分析java日志</a></li>\\n<li><a href=\\"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html\\" target=\\"blank\\">分库分表</a></li>\\n<li><a href=\\"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html\\" target=\\"blank\\">Lombok的Accessors导致EasyExcel读取失败</a></li>\\n<li><a href=\\"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html\\" target=\\"blank\\">vuepress-theme-hope使用心得</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n<li><a href=\\"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html\\" target=\\"blank\\">K8S常用命令</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
