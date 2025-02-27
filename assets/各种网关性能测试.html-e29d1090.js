const e=JSON.parse('{"key":"v-6c162c69","path":"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html","title":"各种网关性能测试","lang":"zh-CN","frontmatter":{"title":"各种网关性能测试","date":"2019-10-23T00:00:00.000Z","description":"注意：以下测试结果来源于Spring Cloud Gateway作者，具体参考：https://github.com/spencergibb/spring-cloud-gateway-bench Proxy Avg Latency Avg Req/Sec/Thread gateway 6.61ms 3.24k linkered 7.62ms 2.82k zuul 12.56ms 2.09k none 2.09ms 11.77k","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"各种网关性能测试"}],["meta",{"property":"og:description","content":"注意：以下测试结果来源于Spring Cloud Gateway作者，具体参考：https://github.com/spencergibb/spring-cloud-gateway-bench Proxy Avg Latency Avg Req/Sec/Thread gateway 6.61ms 3.24k linkered 7.62ms 2.82k zuul 12.56ms 2.09k none 2.09ms 11.77k"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2019-10-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"各种网关性能测试\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-23T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Terminal 1 (simple webserver)","slug":"terminal-1-simple-webserver","link":"#terminal-1-simple-webserver","children":[]},{"level":2,"title":"Terminal 2 (zuul)","slug":"terminal-2-zuul","link":"#terminal-2-zuul","children":[]},{"level":2,"title":"Terminal 3 (gateway)","slug":"terminal-3-gateway","link":"#terminal-3-gateway","children":[]},{"level":2,"title":"Terminal 4 (linkerd)","slug":"terminal-4-linkerd","link":"#terminal-4-linkerd","children":[]},{"level":2,"title":"Terminal N (wrk)","slug":"terminal-n-wrk","link":"#terminal-n-wrk","children":[{"level":3,"title":"install wrk","slug":"install-wrk","link":"#install-wrk","children":[]},{"level":3,"title":"Gateway bench (8082)","slug":"gateway-bench-8082","link":"#gateway-bench-8082","children":[]},{"level":3,"title":"zuul bench (8081)","slug":"zuul-bench-8081","link":"#zuul-bench-8081","children":[]},{"level":3,"title":"linkerd bench (4140)","slug":"linkerd-bench-4140","link":"#linkerd-bench-4140","children":[]},{"level":3,"title":"no proxy bench (8000)","slug":"no-proxy-bench-8000","link":"#no-proxy-bench-8000","children":[]}]},{"level":2,"title":"简单总结","slug":"简单总结","link":"#简单总结","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1672737620000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":479},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":3.76,"words":1127},"filePathRelative":"software/unclassified/各种网关性能测试.md","localizedDate":"2019年10月23日","excerpt":"<blockquote>\\n<p>注意：以下测试结果来源于Spring Cloud Gateway作者，具体参考：<a href=\\"https://github.com/spencergibb/spring-cloud-gateway-bench\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/spencergibb/spring-cloud-gateway-bench</a></p>\\n</blockquote>\\n<br>\\n<table>\\n<thead>\\n<tr>\\n<th>Proxy</th>\\n<th>Avg Latency</th>\\n<th>Avg Req/Sec/Thread</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>gateway</td>\\n<td>6.61ms</td>\\n<td>3.24k</td>\\n</tr>\\n<tr>\\n<td>linkered</td>\\n<td>7.62ms</td>\\n<td>2.82k</td>\\n</tr>\\n<tr>\\n<td>zuul</td>\\n<td>12.56ms</td>\\n<td>2.09k</td>\\n</tr>\\n<tr>\\n<td>none</td>\\n<td>2.09ms</td>\\n<td>11.77k</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{},"autoDesc":true}');export{e as data};
