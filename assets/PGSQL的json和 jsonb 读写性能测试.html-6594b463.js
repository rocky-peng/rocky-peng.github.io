const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis Cordova+Umi项目搭建步骤 记一次内存泄漏 MySQL杂项 弱引用示例 HTTP1 0 vs HTTP1 1 vs WebSocket Paxos算法 Spring Boot升级到2 6 x踩的坑 Flutter开发需要涉及的知识点大纲 vuepress-theme-hope 添加谷歌广告 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 BBR加速","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis Cordova+Umi项目搭建步骤 记一次内存泄漏 MySQL杂项 弱引用示例 HTTP1 0 vs HTTP1 1 vs WebSocket Paxos算法 Spring Boot升级到2 6 x踩的坑 Flutter开发需要涉及的知识点大纲 vuepress-theme-hope 添加谷歌广告 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序 BBR加速"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T00:36:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T00:36:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T00:36:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1735346217000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":368},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/MyBatis.html\\" target=\\"blank\\">MyBatis</a></li>\\n<li><a href=\\"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html\\" target=\\"blank\\">Cordova+Umi项目搭建步骤</a></li>\\n<li><a href=\\"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html\\" target=\\"blank\\">记一次内存泄漏</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">MySQL杂项</a></li>\\n<li><a href=\\"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">弱引用示例</a></li>\\n<li><a href=\\"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html\\" target=\\"blank\\">HTTP1 0 vs HTTP1 1 vs WebSocket</a></li>\\n<li><a href=\\"/other/Paxos%E7%AE%97%E6%B3%95.html\\" target=\\"blank\\">Paxos算法</a></li>\\n<li><a href=\\"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html\\" target=\\"blank\\">Spring Boot升级到2 6 x踩的坑</a></li>\\n<li><a href=\\"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html\\" target=\\"blank\\">Flutter开发需要涉及的知识点大纲</a></li>\\n<li><a href=\\"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html\\" target=\\"blank\\">vuepress-theme-hope 添加谷歌广告</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n<li><a href=\\"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html\\" target=\\"blank\\">BBR加速</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
