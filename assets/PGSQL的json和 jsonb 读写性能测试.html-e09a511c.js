const t=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis Git笔记 提取Docker镜像中的文件 如何安装Google BBR ShadowsockServer 高可用通用方案 PasteImageIntoMarkdown插件开发 行转列不再复杂：SQL高手都在用的技巧揭秘 Arthas使用记录 SQL优化 Nginx的双向认证配置 MySQL数据迁移到PGSQL","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 MyBatis Git笔记 提取Docker镜像中的文件 如何安装Google BBR ShadowsockServer 高可用通用方案 PasteImageIntoMarkdown插件开发 行转列不再复杂：SQL高手都在用的技巧揭秘 Arthas使用记录 SQL优化 Nginx的双向认证配置 MySQL数据迁移到PGSQL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T00:37:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T00:37:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-24T00:37:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1735000621000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":360},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/unclassified/MyBatis.html\\" target=\\"blank\\">MyBatis</a></li>\\n<li><a href=\\"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html\\" target=\\"blank\\">Git笔记</a></li>\\n<li><a href=\\"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html\\" target=\\"blank\\">提取Docker镜像中的文件</a></li>\\n<li><a href=\\"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html\\" target=\\"blank\\">如何安装Google BBR</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer.html\\" target=\\"blank\\">ShadowsockServer</a></li>\\n<li><a href=\\"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">高可用通用方案</a></li>\\n<li><a href=\\"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html\\" target=\\"blank\\">PasteImageIntoMarkdown插件开发</a></li>\\n<li><a href=\\"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html\\" target=\\"blank\\">行转列不再复杂：SQL高手都在用的技巧揭秘</a></li>\\n<li><a href=\\"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">Arthas使用记录</a></li>\\n<li><a href=\\"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html\\" target=\\"blank\\">SQL优化</a></li>\\n<li><a href=\\"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html\\" target=\\"blank\\">Nginx的双向认证配置</a></li>\\n<li><a href=\\"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html\\" target=\\"blank\\">MySQL数据迁移到PGSQL</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
