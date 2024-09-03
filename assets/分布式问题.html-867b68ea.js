const e=JSON.parse('{"key":"v-39245e4a","path":"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html","title":"分布式问题.md","lang":"zh-CN","frontmatter":{"title":"分布式问题.md","date":"2022-07-03T00:00:00.000Z","description":"熔断 个人感觉在语音上对熔断和降级的说明有些重合，或者不容易区分 当扇出链路的某个微服务不可用或者响应太长时，熔断(或者中断)该节点微服务的调用，快速返回错误的响应信息 熔断的目的是当A服务模块中的某块程序出现故障后为了不影响其他客户端的请求而做出的及时回应。 直接看例子 最底部的熔断方法和服务主体是跑在一起的","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"分布式问题.md"}],["meta",{"property":"og:description","content":"熔断 个人感觉在语音上对熔断和降级的说明有些重合，或者不容易区分 当扇出链路的某个微服务不可用或者响应太长时，熔断(或者中断)该节点微服务的调用，快速返回错误的响应信息 熔断的目的是当A服务模块中的某块程序出现故障后为了不影响其他客户端的请求而做出的及时回应。 直接看例子 最底部的熔断方法和服务主体是跑在一起的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2022-07-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式问题.md\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"熔断","slug":"熔断","link":"#熔断","children":[]},{"level":2,"title":"降级","slug":"降级","link":"#降级","children":[]},{"level":2,"title":"阿里巴巴的sentinel框架","slug":"阿里巴巴的sentinel框架","link":"#阿里巴巴的sentinel框架","children":[]},{"level":2,"title":"网关","slug":"网关","link":"#网关","children":[{"level":3,"title":"JAVA生态的网关","slug":"java生态的网关","link":"#java生态的网关","children":[]},{"level":3,"title":"云原生网关","slug":"云原生网关","link":"#云原生网关","children":[]}]},{"level":2,"title":"Zookeeper","slug":"zookeeper","link":"#zookeeper","children":[]},{"level":2,"title":"如何设计一个高可用系统？","slug":"如何设计一个高可用系统","link":"#如何设计一个高可用系统","children":[{"level":3,"title":"存储层高可用","slug":"存储层高可用","link":"#存储层高可用","children":[]},{"level":3,"title":"各种中间件","slug":"各种中间件","link":"#各种中间件","children":[]},{"level":3,"title":"代码层(服务层)","slug":"代码层-服务层","link":"#代码层-服务层","children":[]},{"level":3,"title":"网关层","slug":"网关层","link":"#网关层","children":[]},{"level":3,"title":"操作系统层","slug":"操作系统层","link":"#操作系统层","children":[]},{"level":3,"title":"cdn和dns","slug":"cdn和dns","link":"#cdn和dns","children":[]}]}],"git":{"createdTime":1672234484000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":5.02,"words":1507},"filePathRelative":"software/unclassified/分布式问题.md","localizedDate":"2022年7月3日","excerpt":"<h2> 熔断</h2>\\n<p>个人感觉在语音上对熔断和降级的说明有些重合，或者不容易区分</p>\\n<p>当扇出链路的某个微服务不可用或者响应太长时，熔断(或者中断)该节点微服务的调用，快速返回错误的响应信息</p>\\n<p>熔断的目的是当A服务模块中的某块程序出现故障后为了不影响其他客户端的请求而做出的及时回应。</p>\\n<p>直接看例子\\n<img src=\\"https://cdn.justdopay.com/pasteimageintomarkdown/2022-09-15/666832440022300.png\\" alt=\\"\\" loading=\\"lazy\\"></p>\\n<p>最底部的熔断方法和服务主体是跑在一起的</p>","copyright":{},"autoDesc":true}');export{e as data};
