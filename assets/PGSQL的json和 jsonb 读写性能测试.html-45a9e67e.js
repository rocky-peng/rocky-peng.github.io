const e=JSON.parse('{"key":"v-33a5f14f","path":"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"PGSQL的json和 jsonb 读写性能测试","lang":"zh-CN","frontmatter":{"description":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 来个JVM冷知识 你真的会拼接字符串吗？ PGSQL GIN索引“失效” ShadowsockServer 常用队列 linux_no_space_left_on_device JVM杂项 前端axios下载csv文件乱码 Git历史记录修改用户名和邮箱 表单重复提交解决方案 杂记 PostgreSQL高可用","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"PGSQL的json和 jsonb 读写性能测试"}],["meta",{"property":"og:description","content":"PGSQL的json和 jsonb 读写性能测试 https://blog.csdn.net/qq961573863/article/details/127479293 系统推荐 来个JVM冷知识 你真的会拼接字符串吗？ PGSQL GIN索引“失效” ShadowsockServer 常用队列 linux_no_space_left_on_device JVM杂项 前端axios下载csv文件乱码 Git历史记录修改用户名和邮箱 表单重复提交解决方案 杂记 PostgreSQL高可用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-06T09:16:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-06T09:16:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PGSQL的json和 jsonb 读写性能测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-06T09:16:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1673492303000,"updatedTime":1725614160000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":67},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"other/PGSQL的json和 jsonb 读写性能测试.md","localizedDate":"2023年1月12日","excerpt":"<h1> PGSQL的json和 jsonb 读写性能测试</h1>\\n<blockquote>\\n<p><a href=\\"https://blog.csdn.net/qq961573863/article/details/127479293\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.csdn.net/qq961573863/article/details/127479293</a></p>\\n</blockquote>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">来个JVM冷知识</a></li>\\n<li><a href=\\"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html\\" target=\\"blank\\">你真的会拼接字符串吗？</a></li>\\n<li><a href=\\"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html\\" target=\\"blank\\">PGSQL GIN索引“失效”</a></li>\\n<li><a href=\\"/software/shodowsocks/ShadowsockServer.html\\" target=\\"blank\\">ShadowsockServer</a></li>\\n<li><a href=\\"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html\\" target=\\"blank\\">常用队列</a></li>\\n<li><a href=\\"/software/unclassified/linux_no_space_left_on_device.html\\" target=\\"blank\\">linux_no_space_left_on_device</a></li>\\n<li><a href=\\"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">JVM杂项</a></li>\\n<li><a href=\\"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html\\" target=\\"blank\\">前端axios下载csv文件乱码</a></li>\\n<li><a href=\\"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html\\" target=\\"blank\\">Git历史记录修改用户名和邮箱</a></li>\\n<li><a href=\\"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html\\" target=\\"blank\\">表单重复提交解决方案</a></li>\\n<li><a href=\\"/software/unclassified/%E6%9D%82%E8%AE%B0.html\\" target=\\"blank\\">杂记</a></li>\\n<li><a href=\\"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">PostgreSQL高可用</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
