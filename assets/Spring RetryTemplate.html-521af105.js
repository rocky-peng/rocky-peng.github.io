const e=JSON.parse('{"key":"v-4974ea16","path":"/other/Spring%20RetryTemplate.html","title":"Spring RetryTemplate","lang":"zh-CN","frontmatter":{"title":"Spring RetryTemplate","date":"2023-10-31T00:00:00.000Z","category":["spring"],"tag":["retry"],"head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Spring%20RetryTemplate.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Spring%20RetryTemplate.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Spring RetryTemplate"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T16:55:27.000Z"}],["meta",{"property":"article:tag","content":"retry"}],["meta",{"property":"article:published_time","content":"2023-10-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-30T16:55:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring RetryTemplate\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-30T16:55:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"RetryPolicy","slug":"retrypolicy","link":"#retrypolicy","children":[]},{"level":2,"title":"BackoffPolicy","slug":"backoffpolicy","link":"#backoffpolicy","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"git":{"createdTime":1698758229000,"updatedTime":1701363327000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":2},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":2.17,"words":651},"filePathRelative":"other/Spring RetryTemplate.md","localizedDate":"2023年10月31日","excerpt":"<p>使用spring的retry框架用两种方式，一种注解方式，一种代码方式，这里主要介绍代码编程方式。</p>\\n<p>初始化RetryTemplate主要有两个参数：</p>\\n<ol>\\n<li>RetryPolicy 主要定义什么情况要进行重试以及重试次数，比如超时、满足某个表达式。</li>\\n<li>BackoffPolicy 主要定义两次重试之间的等待时间。backoff这个单词在计算机系统中有很多地方都有，代表的意思基本相同，基本都是重试直接的等待时间。<strong>它的基本思想是在遇到错误时，不是立即重试，而是等待一段时间后再尝试。这种等待的时间通常是逐渐增加的，这就是所谓的“退避”</strong></li>\\n</ol>","copyright":{}}');export{e as data};
