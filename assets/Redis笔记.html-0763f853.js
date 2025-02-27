const e=JSON.parse('{"key":"v-3e7c5ace","path":"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html","title":"Redis笔记","lang":"zh-CN","frontmatter":{"title":"Redis笔记","date":"2022-08-05T00:00:00.000Z","description":"什么redis那么快 基于内存，内存的访问速度是磁盘的上千倍； 基于 Reactor 模式设计开发了一套高效的事件处理模型，主要是单线程事件循环和 IO 多路复用（Redis 线程模式后面会详细介绍到）； 内置了多种优化过后的数据结构实现，性能非常高。 比如字符串并没有采用c原生字符串结构，而是采用了名为SDS的简单动态字符串结构，获取字符串长度的时间复杂度为O(1)，而c语言里的字符串获取字符串长度需要O(n)","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Redis笔记"}],["meta",{"property":"og:description","content":"什么redis那么快 基于内存，内存的访问速度是磁盘的上千倍； 基于 Reactor 模式设计开发了一套高效的事件处理模型，主要是单线程事件循环和 IO 多路复用（Redis 线程模式后面会详细介绍到）； 内置了多种优化过后的数据结构实现，性能非常高。 比如字符串并没有采用c原生字符串结构，而是采用了名为SDS的简单动态字符串结构，获取字符串长度的时间复杂度为O(1)，而c语言里的字符串获取字符串长度需要O(n)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2022-08-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-05T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么redis那么快","slug":"什么redis那么快","link":"#什么redis那么快","children":[]},{"level":2,"title":"redis与 memcached的区别","slug":"redis与-memcached的区别","link":"#redis与-memcached的区别","children":[]},{"level":2,"title":"5中常见数据结构","slug":"_5中常见数据结构","link":"#_5中常见数据结构","children":[]},{"level":2,"title":"3中不常用数据结构","slug":"_3中不常用数据结构","link":"#_3中不常用数据结构","children":[]},{"level":2,"title":"string与hash","slug":"string与hash","link":"#string与hash","children":[]},{"level":2,"title":"redis的线程","slug":"redis的线程","link":"#redis的线程","children":[]},{"level":2,"title":"redis刚开始为啥采用单线程？","slug":"redis刚开始为啥采用单线程","link":"#redis刚开始为啥采用单线程","children":[]},{"level":2,"title":"redis6.0为何又引入了多线程","slug":"redis6-0为何又引入了多线程","link":"#redis6-0为何又引入了多线程","children":[]},{"level":2,"title":"redis的线程模型","slug":"redis的线程模型","link":"#redis的线程模型","children":[]},{"level":2,"title":"为啥要设置过期时间","slug":"为啥要设置过期时间","link":"#为啥要设置过期时间","children":[]},{"level":2,"title":"redis是如何判断某个key是否过期的？","slug":"redis是如何判断某个key是否过期的","link":"#redis是如何判断某个key是否过期的","children":[]},{"level":2,"title":"如何删除过期数据的？","slug":"如何删除过期数据的","link":"#如何删除过期数据的","children":[]},{"level":2,"title":"Redis内存淘汰策略","slug":"redis内存淘汰策略","link":"#redis内存淘汰策略","children":[]},{"level":2,"title":"持久化机制","slug":"持久化机制","link":"#持久化机制","children":[]},{"level":2,"title":"aof重写","slug":"aof重写","link":"#aof重写","children":[]},{"level":2,"title":"混合持久化","slug":"混合持久化","link":"#混合持久化","children":[]},{"level":2,"title":"redis事务","slug":"redis事务","link":"#redis事务","children":[]},{"level":2,"title":"redis优化技巧（使用技巧）","slug":"redis优化技巧-使用技巧","link":"#redis优化技巧-使用技巧","children":[]},{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[]},{"level":2,"title":"缓存雪崩","slug":"缓存雪崩","link":"#缓存雪崩","children":[]},{"level":2,"title":"缓存和数据库一致性","slug":"缓存和数据库一致性","link":"#缓存和数据库一致性","children":[{"level":3,"title":"允许非严格一致性","slug":"允许非严格一致性","link":"#允许非严格一致性","children":[]},{"level":3,"title":"严格一致性","slug":"严格一致性","link":"#严格一致性","children":[]}]},{"level":2,"title":"redis 高可用方案","slug":"redis-高可用方案","link":"#redis-高可用方案","children":[]},{"level":2,"title":"保证高可用","slug":"保证高可用","link":"#保证高可用","children":[]},{"level":2,"title":"redis分布式锁","slug":"redis分布式锁","link":"#redis分布式锁","children":[]},{"level":2,"title":"redis限流器","slug":"redis限流器","link":"#redis限流器","children":[]},{"level":2,"title":"一致性hash","slug":"一致性hash","link":"#一致性hash","children":[]},{"level":2,"title":"限流算法","slug":"限流算法","link":"#限流算法","children":[{"level":3,"title":"漏桶与令牌桶","slug":"漏桶与令牌桶","link":"#漏桶与令牌桶","children":[]}]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":480},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":17.57,"words":5270},"filePathRelative":"software/middleware/redis/Redis笔记.md","localizedDate":"2022年8月5日","excerpt":"<h2> 什么redis那么快</h2>\\n<ol>\\n<li>基于内存，内存的访问速度是磁盘的上千倍；</li>\\n<li>基于 Reactor 模式设计开发了一套高效的事件处理模型，主要是单线程事件循环和 IO 多路复用（Redis 线程模式后面会详细介绍到）；</li>\\n<li>内置了多种优化过后的数据结构实现，性能非常高。</li>\\n</ol>\\n<blockquote>\\n<p>比如字符串并没有采用c原生字符串结构，而是采用了名为SDS的简单动态字符串结构，获取字符串长度的时间复杂度为O(1)，而c语言里的字符串获取字符串长度需要O(n)</p>\\n</blockquote>\\n<figure><img src=\\"https://cdn.justdopay.top/pasteimageintomarkdown/2022-09-13/513534661325800.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","copyright":{},"autoDesc":true}');export{e as data};
