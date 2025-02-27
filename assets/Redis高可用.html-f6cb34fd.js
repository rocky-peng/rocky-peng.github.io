const e=JSON.parse('{"key":"v-f5049cc4","path":"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html","title":"Redis高可用","lang":"zh-CN","frontmatter":{"title":"Redis高可用","data":"2023-02-24T00:00:00.000Z","category":["NoSQL","高可用"],"tag":["Redis","哨兵模式","Redis Cluster"],"description":"持久化 RDB AOF AOF重写 cow机制(copy on write) 从7.0.0开始，aof文件分为base file和增量file. Untitled","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Redis高可用"}],["meta",{"property":"og:description","content":"持久化 RDB AOF AOF重写 cow机制(copy on write) 从7.0.0开始，aof文件分为base file和增量file. Untitled"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:tag","content":"哨兵模式"}],["meta",{"property":"article:tag","content":"Redis Cluster"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis高可用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"持久化","slug":"持久化","link":"#持久化","children":[{"level":3,"title":"RDB","slug":"rdb","link":"#rdb","children":[]},{"level":3,"title":"AOF","slug":"aof","link":"#aof","children":[]},{"level":3,"title":"AOF重写","slug":"aof重写","link":"#aof重写","children":[]}]},{"level":2,"title":"主从架构","slug":"主从架构","link":"#主从架构","children":[]},{"level":2,"title":"哨兵模式","slug":"哨兵模式","link":"#哨兵模式","children":[{"level":3,"title":"为什么哨兵节点至少为3个","slug":"为什么哨兵节点至少为3个","link":"#为什么哨兵节点至少为3个","children":[]},{"level":3,"title":"经典的 3 节点哨兵集群","slug":"经典的-3-节点哨兵集群","link":"#经典的-3-节点哨兵集群","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"主观宕机","slug":"主观宕机","link":"#主观宕机","children":[]},{"level":3,"title":"客观宕机","slug":"客观宕机","link":"#客观宕机","children":[]},{"level":3,"title":"哨兵自动发现机制","slug":"哨兵自动发现机制","link":"#哨兵自动发现机制","children":[]},{"level":3,"title":"主备切换大致过程","slug":"主备切换大致过程","link":"#主备切换大致过程","children":[]},{"level":3,"title":"版本号","slug":"版本号","link":"#版本号","children":[]}]},{"level":2,"title":"Redis Cluster","slug":"redis-cluster","link":"#redis-cluster","children":[{"level":3,"title":"JedisCluster客户端工作过程","slug":"jediscluster客户端工作过程","link":"#jediscluster客户端工作过程","children":[]},{"level":3,"title":"主备切换大致过程","slug":"主备切换大致过程-1","link":"#主备切换大致过程-1","children":[]}]},{"level":2,"title":"Twemproxy","slug":"twemproxy","link":"#twemproxy","children":[]},{"level":2,"title":"Codis（基本废弃了）","slug":"codis-基本废弃了","link":"#codis-基本废弃了","children":[]},{"level":2,"title":"题外话","slug":"题外话","link":"#题外话","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1677056836000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":484},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":9.5,"words":2849},"filePathRelative":"other/Redis高可用.md","localizedDate":"2023年2月22日","excerpt":"<h2> 持久化</h2>\\n<h3> RDB</h3>\\n<h3> AOF</h3>\\n<h3> AOF重写</h3>\\n<ol>\\n<li>cow机制(copy on write)</li>\\n<li>从7.0.0开始，aof文件分为base file和增量file.</li>\\n</ol>\\n<figure><img src=\\"https://cdn.justdopay.top/notion/md5-f37f0cf7d53e518ed4c2762308ecac43.png\\" alt=\\"Untitled\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Untitled</figcaption></figure>","copyright":{},"autoDesc":true}');export{e as data};
