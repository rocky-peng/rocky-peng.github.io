const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 KVM 虚拟机安装 微博关注关系如何实现 NGINX Spring框架源码关键点 是时候使用MapStruct替代BeanUtils了 linux_no_space_left_on_device 批量修改git历史记录中的用户名和邮箱 Docker笔记 Javassist整理 MySQL索引 GitHub Workflow突然报错 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 KVM 虚拟机安装 微博关注关系如何实现 NGINX Spring框架源码关键点 是时候使用MapStruct替代BeanUtils了 linux_no_space_left_on_device 批量修改git历史记录中的用户名和邮箱 Docker笔记 Javassist整理 MySQL索引 GitHub Workflow突然报错 免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-26T00:36:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-26T00:36:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-26T00:36:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1735173411000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":364},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html\\" target=\\"blank\\">KVM 虚拟机安装</a></li>\\n<li><a href=\\"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html\\" target=\\"blank\\">微博关注关系如何实现</a></li>\\n<li><a href=\\"/software/unclassified/NGINX.html\\" target=\\"blank\\">NGINX</a></li>\\n<li><a href=\\"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html\\" target=\\"blank\\">Spring框架源码关键点</a></li>\\n<li><a href=\\"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html\\" target=\\"blank\\">是时候使用MapStruct替代BeanUtils了</a></li>\\n<li><a href=\\"/software/unclassified/linux_no_space_left_on_device.html\\" target=\\"blank\\">linux_no_space_left_on_device</a></li>\\n<li><a href=\\"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">批量修改git历史记录中的用户名和邮箱</a></li>\\n<li><a href=\\"/software/docker/Docker%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Docker笔记</a></li>\\n<li><a href=\\"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html\\" target=\\"blank\\">Javassist整理</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html\\" target=\\"blank\\">MySQL索引</a></li>\\n<li><a href=\\"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html\\" target=\\"blank\\">GitHub Workflow突然报错</a></li>\\n<li><a href=\\"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html\\" target=\\"blank\\">免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
