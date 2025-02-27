const e=JSON.parse('{"key":"v-6a3a9a0c","path":"/software/raft/sofajraft.html","title":"SofaRaft","lang":"zh-CN","frontmatter":{"title":"SofaRaft","date":"2022-03-04T00:00:00.000Z","description":"是java语音针对raft协议的实现 解决的问题： 集群状态下的共识问题 leader的选举问题 同一时刻，最多只有一个leader，leader来负责处理读写请求 cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态 leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/raft/sofajraft.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/raft/sofajraft.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"SofaRaft"}],["meta",{"property":"og:description","content":"是java语音针对raft协议的实现 解决的问题： 集群状态下的共识问题 leader的选举问题 同一时刻，最多只有一个leader，leader来负责处理读写请求 cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态 leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2022-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SofaRaft\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1672147309000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":479},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"software/raft/sofajraft.md","localizedDate":"2022年3月4日","excerpt":"<p>是java语音针对raft协议的实现</p>\\n<p>解决的问题：</p>\\n<ol>\\n<li>\\n<p>集群状态下的共识问题</p>\\n</li>\\n<li>\\n<p>leader的选举问题</p>\\n</li>\\n<li>\\n<p>同一时刻，最多只有一个leader，leader来负责处理读写请求</p>\\n</li>\\n<li>\\n<p>cap理论中，raft满足的是cp，也就是一致性和容忍性，在leader选举过程中，整个集群是不可用状态</p>\\n</li>\\n<li>\\n<p>leader接收到请求后，先进行WAL（Write Ahead Log），并等待多数节点完成日志的同步后，才会执行状态机的apply操作</p>\\n</li>\\n</ol>","copyright":{},"autoDesc":true}');export{e as data};
