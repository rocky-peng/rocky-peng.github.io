const s=JSON.parse('{"key":"v-58caf453","path":"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html","title":"Javassist整理","lang":"zh-CN","frontmatter":{"title":"Javassist整理","date":"2017-01-03T00:00:00.000Z","description":"ClassPool.get(classFullName) 执行成功的条件 满足一条即可 classFullName对应的class是由ClassPool创建的 执行的时候存在对应的class二进制文件 因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。 CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。 由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"码海拾光"}],["meta",{"property":"og:title","content":"Javassist整理"}],["meta",{"property":"og:description","content":"ClassPool.get(classFullName) 执行成功的条件 满足一条即可 classFullName对应的class是由ClassPool创建的 执行的时候存在对应的class二进制文件 因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。 CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。 由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2017-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Javassist整理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1672234484000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":479},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":1.82,"words":547},"filePathRelative":"software/unclassified/Javassist整理.md","localizedDate":"2017年1月3日","excerpt":"<ol>\\n<li>\\n<p>ClassPool.get(classFullName) 执行成功的条件\\n满足一条即可</p>\\n<ul>\\n<li>classFullName对应的class是由ClassPool创建的</li>\\n<li>执行的时候存在对应的class二进制文件</li>\\n</ul>\\n<p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p>\\n</li>\\n<li>\\n<p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p>\\n</li>\\n<li>\\n<p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p>\\n</li>\\n<li></li>\\n</ol>","copyright":{},"autoDesc":true}');export{s as data};
