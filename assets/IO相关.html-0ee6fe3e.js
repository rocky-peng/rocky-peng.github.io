const e=JSON.parse('{"key":"v-48c01d9e","path":"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html","title":"IO相关","lang":"zh-CN","frontmatter":{"title":"IO相关","date":"2017-03-05T00:00:00.000Z","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"IO相关"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2017-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IO相关\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"5中IO模型（主要指网络io）","slug":"_5中io模型-主要指网络io","link":"#_5中io模型-主要指网络io","children":[{"level":3,"title":"阻塞IO","slug":"阻塞io","link":"#阻塞io","children":[]},{"level":3,"title":"非阻塞IO","slug":"非阻塞io","link":"#非阻塞io","children":[]},{"level":3,"title":"IO复用（也称 事件驱动IO）","slug":"io复用-也称-事件驱动io","link":"#io复用-也称-事件驱动io","children":[]},{"level":3,"title":"异步IO","slug":"异步io","link":"#异步io","children":[]},{"level":3,"title":"信号驱动IO（JAVA不支持）","slug":"信号驱动io-java不支持","link":"#信号驱动io-java不支持","children":[]},{"level":3,"title":"常见io","slug":"常见io","link":"#常见io","children":[]}]},{"level":2,"title":"Java NIO","slug":"java-nio","link":"#java-nio","children":[{"level":3,"title":"Channel","slug":"channel","link":"#channel","children":[]},{"level":3,"title":"Buffer","slug":"buffer","link":"#buffer","children":[]},{"level":3,"title":"Reactor模式","slug":"reactor模式","link":"#reactor模式","children":[]},{"level":3,"title":"SelectionKey","slug":"selectionkey","link":"#selectionkey","children":[]},{"level":3,"title":"管道（pipe）","slug":"管道-pipe","link":"#管道-pipe","children":[]},{"level":3,"title":"Select Poll EPoll的区别","slug":"select-poll-epoll的区别","link":"#select-poll-epoll的区别","children":[]},{"level":3,"title":"MappedByteBuffer和PageCache的关系？是不是就是PageCache？","slug":"mappedbytebuffer和pagecache的关系-是不是就是pagecache","link":"#mappedbytebuffer和pagecache的关系-是不是就是pagecache","children":[]},{"level":3,"title":"零拷贝","slug":"零拷贝","link":"#零拷贝","children":[]},{"level":3,"title":"内存映射","slug":"内存映射","link":"#内存映射","children":[]},{"level":3,"title":"直接缓冲","slug":"直接缓冲","link":"#直接缓冲","children":[]}]},{"level":2,"title":"Java AIO","slug":"java-aio","link":"#java-aio","children":[]}],"git":{"createdTime":1671976155000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2436},"filePathRelative":"software/java-basic/IO相关.md","localizedDate":"2017年3月5日","excerpt":"<h2> 5中IO模型（主要指网络io）</h2>\\n<p>任何网络IO都会涉及到两个阶段：\\nA.等待数据准备完成<br>\\nB.将数据从内核态拷贝到进程中。</p>\\n<p>五中IO模型的区别就在这两个阶段有所不同。</p>\\n<h3> 阻塞IO</h3>\\n<figure><img src=\\"https://cdn.justdopay.com/xiaoshujiang/1629078787440.png\\" alt=\\"enter description here\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>enter description here</figcaption></figure>","copyright":{}}');export{e as data};
