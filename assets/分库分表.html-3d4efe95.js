const e=JSON.parse('{"key":"v-5dfad2d5","path":"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html","title":"分库分表","lang":"zh-CN","frontmatter":{"title":"分库分表","date":"2018-07-05T00:00:00.000Z","description":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MySQL杂项 MySQL高可用 你真的会拼接字符串吗？ Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 istio基础知识 index方法压力测试记录 PasteImageIntoMarkdown插件开发 gperftools MySQL三大日志 前后端常用技术 Mermaid示例 批量替换文件名中的指定字符串","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分库分表"}],["meta",{"property":"og:description","content":"分表：垂直拆分和水平拆分 分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z） 需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。 cat/ShardingSphere 系统推荐 MySQL杂项 MySQL高可用 你真的会拼接字符串吗？ Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览 istio基础知识 index方法压力测试记录 PasteImageIntoMarkdown插件开发 gperftools MySQL三大日志 前后端常用技术 Mermaid示例 批量替换文件名中的指定字符串"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-26T00:39:07.000Z"}],["meta",{"property":"article:published_time","content":"2018-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-26T00:39:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分库分表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-26T00:39:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1742949547000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":539},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.63,"words":488},"filePathRelative":"software/middleware/mysql/分库分表.md","localizedDate":"2018年7月5日","excerpt":"<p>分表：垂直拆分和水平拆分</p>\\n<p>分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）</p>\\n<p>需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。</p>\\n<p>cat/ShardingSphere</p>\\n<br>\\n<h2> 系统推荐</h2>\\n<ul>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html\\" target=\\"blank\\">MySQL杂项</a></li>\\n<li><a href=\\"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html\\" target=\\"blank\\">MySQL高可用</a></li>\\n<li><a href=\\"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html\\" target=\\"blank\\">你真的会拼接字符串吗？</a></li>\\n<li><a href=\\"/software/java-basic/Thread%20&amp;%20ExecutorService%20&amp;%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html\\" target=\\"blank\\">Thread &amp; ExecutorService &amp; ThreadPoolExecutor 总览</a></li>\\n<li><a href=\\"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html\\" target=\\"blank\\">istio基础知识</a></li>\\n<li><a href=\\"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html\\" target=\\"blank\\">index方法压力测试记录</a></li>\\n<li><a href=\\"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html\\" target=\\"blank\\">PasteImageIntoMarkdown插件开发</a></li>\\n<li><a href=\\"/software/unclassified/gperftools.html\\" target=\\"blank\\">gperftools</a></li>\\n<li><a href=\\"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html\\" target=\\"blank\\">MySQL三大日志</a></li>\\n<li><a href=\\"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html\\" target=\\"blank\\">前后端常用技术</a></li>\\n<li><a href=\\"/other/Mermaid%E7%A4%BA%E4%BE%8B.html\\" target=\\"blank\\">Mermaid示例</a></li>\\n<li><a href=\\"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html\\" target=\\"blank\\">批量替换文件名中的指定字符串</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
