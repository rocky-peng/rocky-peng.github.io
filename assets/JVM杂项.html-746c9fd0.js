const e=JSON.parse('{"key":"v-9df8a60c","path":"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html","title":"JVM杂项","lang":"zh-CN","frontmatter":{"title":"JVM杂项","date":"2017-03-16T00:00:00.000Z","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"JVM杂项"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2017-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM杂项\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"对象空间分配机制","slug":"对象空间分配机制","link":"#对象空间分配机制","children":[]},{"level":2,"title":"可达性分析原理：三色标记","slug":"可达性分析原理-三色标记","link":"#可达性分析原理-三色标记","children":[]},{"level":2,"title":"垃圾回收算法","slug":"垃圾回收算法","link":"#垃圾回收算法","children":[]},{"level":2,"title":"空间分配担保机制","slug":"空间分配担保机制","link":"#空间分配担保机制","children":[]},{"level":2,"title":"如何避免FullGC","slug":"如何避免fullgc","link":"#如何避免fullgc","children":[]},{"level":2,"title":"GC三个算法","slug":"gc三个算法","link":"#gc三个算法","children":[]},{"level":2,"title":"ZGC","slug":"zgc","link":"#zgc","children":[]},{"level":2,"title":"如何查看已启动的jvm实例使用的何种垃圾收集器","slug":"如何查看已启动的jvm实例使用的何种垃圾收集器","link":"#如何查看已启动的jvm实例使用的何种垃圾收集器","children":[]},{"level":2,"title":"查看默认垃圾收集器","slug":"查看默认垃圾收集器","link":"#查看默认垃圾收集器","children":[]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":2,"title":"逃逸分析","slug":"逃逸分析","link":"#逃逸分析","children":[]},{"level":2,"title":"什么情况下会触发FullGC","slug":"什么情况下会触发fullgc","link":"#什么情况下会触发fullgc","children":[]},{"level":2,"title":"谈谈你对面向对象的理解？","slug":"谈谈你对面向对象的理解","link":"#谈谈你对面向对象的理解","children":[]},{"level":2,"title":"内存泄漏和内存溢出的区别？","slug":"内存泄漏和内存溢出的区别","link":"#内存泄漏和内存溢出的区别","children":[]},{"level":2,"title":"ThreadLocal","slug":"threadlocal","link":"#threadlocal","children":[{"level":3,"title":"ThreadLocal 为什么会内存泄漏","slug":"threadlocal-为什么会内存泄漏","link":"#threadlocal-为什么会内存泄漏","children":[]},{"level":3,"title":"InheritableThreadLocal","slug":"inheritablethreadlocal","link":"#inheritablethreadlocal","children":[]},{"level":3,"title":"TransmittableThreadLocal","slug":"transmittablethreadlocal","link":"#transmittablethreadlocal","children":[]}]},{"level":2,"title":"发现OOM的时候怎么处理？","slug":"发现oom的时候怎么处理","link":"#发现oom的时候怎么处理","children":[]},{"level":2,"title":"jvm各个内存区域空间不足的时候报的异常信息：","slug":"jvm各个内存区域空间不足的时候报的异常信息","link":"#jvm各个内存区域空间不足的时候报的异常信息","children":[]},{"level":2,"title":"哪些情况下回进行初始化操作？","slug":"哪些情况下回进行初始化操作","link":"#哪些情况下回进行初始化操作","children":[]},{"level":2,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[]},{"level":2,"title":"JAVA的内存模型","slug":"java的内存模型","link":"#java的内存模型","children":[]},{"level":2,"title":"Java里的四种引用","slug":"java里的四种引用","link":"#java里的四种引用","children":[]},{"level":2,"title":"哪些对象可以作为gc roots","slug":"哪些对象可以作为gc-roots","link":"#哪些对象可以作为gc-roots","children":[]}],"git":{"createdTime":1671976155000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":17.44,"words":5232},"filePathRelative":"software/jvm/JVM杂项.md","localizedDate":"2017年3月16日","excerpt":"<p>线上JVM必须设置-XX:+HeapDumpOnOutOfMemory -Xloggc:gc_file_path -XX:HeapDumpPath=dump_path.hprof</p>\\n<h2> 对象空间分配机制</h2>\\n<ol>\\n<li>优先在Eden区进行分配</li>\\n<li>大对象直接进入老年代</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>假设大对象最后会晋升老年代，而新生代是基于复制算法来回收垃圾的，由两个Survivor区域配合完成复制算法，\\n如果新生代中出现大对象且能屡次躲过GC，那这个对象就会在两个Survivor区域中来回复制，直至最后升入老年代，\\n而大对象在内存里来回复制移动，就会消耗更多的时间。\\n\\n假设大对象最后不会晋升老年代，新生代空间是有限的，在新生代里的对象大部分都是朝生夕死的，\\n如果让一个大对象占据了新生代空间，那么相比起正常的对象被分配在新生代，大对象无疑会让新生代GC提早发生，\\n因为内存空间会更快不够用，如果这个大对象因为业务原因，并不会马上被GC回收，那么这个对象就会进入到Survivor区域，\\n默认情况下，Survivor区域本来就不会被分配的很大，那此时被大对象占据了大部分空间，很可能会导致之后的新生代GC后，\\n存活下来的对象，Survivor区域空间不够放不下，导致大部分对象进入老年代，这就加快了老年代GC发生的时间，\\n而老年代GC对系统性能的负面影响则远远大于新生代GC了。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{}}');export{e as data};
