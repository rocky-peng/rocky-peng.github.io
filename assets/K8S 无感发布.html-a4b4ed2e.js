const t=JSON.parse('{"key":"v-143cfb6e","path":"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html","title":"K8S 无感发布","lang":"zh-CN","frontmatter":{"title":"K8S 无感发布","date":"2024-01-10T00:00:00.000Z","tag":["k8s","无感发布"],"category":["k8s"],"description":"背景 问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。 问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的 核心问题： k8s如何知道pod可以对外提供服务了 pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"K8S 无感发布"}],["meta",{"property":"og:description","content":"背景 问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。 问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的 核心问题： k8s如何知道pod可以对外提供服务了 pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-10T11:17:07.000Z"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:tag","content":"无感发布"}],["meta",{"property":"article:published_time","content":"2024-01-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-10T11:17:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"K8S 无感发布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-10T11:17:07.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1704885427000,"updatedTime":1704885427000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":343},"filePathRelative":"other/K8S 无感发布.md","localizedDate":"2024年1月10日","excerpt":"<h2> 背景</h2>\\n<p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p>\\n<p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p>\\n<p>核心问题：</p>\\n<ol>\\n<li>k8s如何知道pod可以对外提供服务了</li>\\n<li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li>\\n</ol>","copyright":{},"autoDesc":true}');export{t as data};
