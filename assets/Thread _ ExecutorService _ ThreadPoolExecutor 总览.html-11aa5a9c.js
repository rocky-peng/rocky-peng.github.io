const n=JSON.parse('{"key":"v-78596eb0","path":"/software/java-basic/Thread%20_%20ExecutorService%20_%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html","title":"Thread & ExecutorService & ThreadPoolExecutor 总览","lang":"zh-CN","frontmatter":{"title":"Thread & ExecutorService & ThreadPoolExecutor 总览","date":"2017-03-11T00:00:00.000Z","description":"ExecutorService 类方法 shutdown 允许已经提交的任务（尚未开始执行和已经开始执行的）继续执行 shutdownNow 尚未开始执行的任务不再执行，同时尝试终止正在执行的任务（调用线程的Thread.interrupt方法） 无论是shutdown 还是shutdownNow，两个的执行都会阻止新的任务提交 一个ExecutorService一旦termination，表明没有正在执行的任务，没有等待执行的任务，也不会有新的任务可以被提交。 如果一个ExecutorService不再使用，应该调用shutdown方法来回收资源。 submit方法（三个重载方法） 返回的Future对象可以用来取消任务和等待任务执行完成 最终内部都调用了execute(runnable)方法来提交任务， 如果传递进来的是callable对象，则会通过适配器模式转换为runnable对象，最后传递给execute方法。 invokeAny和invokeAll方法 用户批量执行任务， invokeAny：会阻塞当前线程，直到某个任务完成。并返回这个任务相关的Future对象 invokeAll：会阻塞当前线程，直到所有任务完成。 两阶段shutdown 先执行shutdown方法 调用awaitTermination方法 再调用shutdownNow方法 void shutdownAndAwaitTermination(ExecutorService pool) { pool.shutdown(); // Disable new tasks from being submitted try { // Wait a while for existing tasks to terminate if (!pool.awaitTermination(60, TimeUnit.SECONDS)) { pool.shutdownNow(); // Cancel currently executing tasks // Wait a while for tasks to respond to being cancelled if (!pool.awaitTermination(60, TimeUnit.SECONDS)) System.err.println(\\"Pool did not terminate\\"); } } catch (InterruptedException ie) { // (Re-)Cancel if current thread also interrupted pool.shutdownNow(); // Preserve interrupt status Thread.currentThread().interrupt(); } } isShutdown和isTerminated分别对应于两个状态：关闭状态，终结状态","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/java-basic/Thread%20_%20ExecutorService%20_%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/java-basic/Thread%20_%20ExecutorService%20_%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Thread & ExecutorService & ThreadPoolExecutor 总览"}],["meta",{"property":"og:description","content":"ExecutorService 类方法 shutdown 允许已经提交的任务（尚未开始执行和已经开始执行的）继续执行 shutdownNow 尚未开始执行的任务不再执行，同时尝试终止正在执行的任务（调用线程的Thread.interrupt方法） 无论是shutdown 还是shutdownNow，两个的执行都会阻止新的任务提交 一个ExecutorService一旦termination，表明没有正在执行的任务，没有等待执行的任务，也不会有新的任务可以被提交。 如果一个ExecutorService不再使用，应该调用shutdown方法来回收资源。 submit方法（三个重载方法） 返回的Future对象可以用来取消任务和等待任务执行完成 最终内部都调用了execute(runnable)方法来提交任务， 如果传递进来的是callable对象，则会通过适配器模式转换为runnable对象，最后传递给execute方法。 invokeAny和invokeAll方法 用户批量执行任务， invokeAny：会阻塞当前线程，直到某个任务完成。并返回这个任务相关的Future对象 invokeAll：会阻塞当前线程，直到所有任务完成。 两阶段shutdown 先执行shutdown方法 调用awaitTermination方法 再调用shutdownNow方法 void shutdownAndAwaitTermination(ExecutorService pool) { pool.shutdown(); // Disable new tasks from being submitted try { // Wait a while for existing tasks to terminate if (!pool.awaitTermination(60, TimeUnit.SECONDS)) { pool.shutdownNow(); // Cancel currently executing tasks // Wait a while for tasks to respond to being cancelled if (!pool.awaitTermination(60, TimeUnit.SECONDS)) System.err.println(\\"Pool did not terminate\\"); } } catch (InterruptedException ie) { // (Re-)Cancel if current thread also interrupted pool.shutdownNow(); // Preserve interrupt status Thread.currentThread().interrupt(); } } isShutdown和isTerminated分别对应于两个状态：关闭状态，终结状态"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-06T00:38:28.000Z"}],["meta",{"property":"article:published_time","content":"2017-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-06T00:38:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Thread & ExecutorService & ThreadPoolExecutor 总览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-06T00:38:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ExecutorService","slug":"executorservice","link":"#executorservice","children":[{"level":3,"title":"类方法","slug":"类方法","link":"#类方法","children":[]}]},{"level":2,"title":"Thread","slug":"thread","link":"#thread","children":[]},{"level":2,"title":"ThreadPoolExecutor","slug":"threadpoolexecutor","link":"#threadpoolexecutor","children":[{"level":3,"title":"core pool size  及 max pool size","slug":"core-pool-size-及-max-pool-size","link":"#core-pool-size-及-max-pool-size","children":[]},{"level":3,"title":"keep alive time","slug":"keep-alive-time","link":"#keep-alive-time","children":[]},{"level":3,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[]},{"level":3,"title":"拒绝执行策略","slug":"拒绝执行策略","link":"#拒绝执行策略","children":[]},{"level":3,"title":"Finalization","slug":"finalization","link":"#finalization","children":[]}]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976155000,"updatedTime":1741221508000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":499},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":11.1,"words":3329},"filePathRelative":"software/java-basic/Thread & ExecutorService & ThreadPoolExecutor 总览.md","localizedDate":"2017年3月11日","excerpt":"<h2> ExecutorService</h2>\\n<h3> 类方法</h3>\\n<figure><img src=\\"https://cdn.justdopay.top/xiaoshujiang/1629079158424.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ol>\\n<li>\\n<p>shutdown\\n允许已经提交的任务（尚未开始执行和已经开始执行的）继续执行</p>\\n</li>\\n<li>\\n<p>shutdownNow\\n尚未开始执行的任务不再执行，同时尝试终止正在执行的任务（调用线程的Thread.interrupt方法）</p>\\n</li>\\n<li>\\n<p>无论是shutdown 还是shutdownNow，两个的执行都会阻止新的任务提交</p>\\n</li>\\n<li>\\n<p>一个ExecutorService一旦termination，表明没有正在执行的任务，没有等待执行的任务，也不会有新的任务可以被提交。</p>\\n</li>\\n<li>\\n<p>如果一个ExecutorService不再使用，应该调用shutdown方法来回收资源。</p>\\n</li>\\n<li>\\n<p>submit方法（三个重载方法）</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>返回的<span class=\\"token class-name\\">Future</span>对象可以用来取消任务和等待任务执行完成\\n\\n最终内部都调用了<span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span>runnable<span class=\\"token punctuation\\">)</span>方法来提交任务，\\n如果传递进来的是callable对象，则会通过适配器模式转换为runnable对象，最后传递给execute方法。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>invokeAny和invokeAll方法</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>用户批量执行任务，\\ninvokeAny：会阻塞当前线程，直到某个任务完成。并返回这个任务相关的<span class=\\"token class-name\\">Future</span>对象\\ninvokeAll：会阻塞当前线程，直到所有任务完成。\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>两阶段shutdown</p>\\n<ol>\\n<li>先执行shutdown方法</li>\\n<li>调用awaitTermination方法</li>\\n<li>再调用shutdownNow方法</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">void</span> <span class=\\"token function\\">shutdownAndAwaitTermination</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ExecutorService</span> pool<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n   pool<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shutdown</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Disable new tasks from being submitted</span>\\n   <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token comment\\">// Wait a while for existing tasks to terminate</span>\\n     <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>pool<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">awaitTermination</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">TimeUnit</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">SECONDS</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n       pool<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shutdownNow</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Cancel currently executing tasks</span>\\n       <span class=\\"token comment\\">// Wait a while for tasks to respond to being cancelled</span>\\n       <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>pool<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">awaitTermination</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">60</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">TimeUnit</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">SECONDS</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n           <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>err<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Pool did not terminate\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n     <span class=\\"token punctuation\\">}</span>\\n   <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">InterruptedException</span> ie<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token comment\\">// (Re-)Cancel if current thread also interrupted</span>\\n     pool<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shutdownNow</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n     <span class=\\"token comment\\">// Preserve interrupt status</span>\\n     <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">currentThread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">interrupt</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n   <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>isShutdown和isTerminated分别对应于两个状态：关闭状态，终结状态</p>\\n</li>\\n</ol>","copyright":{},"autoDesc":true}');export{n as data};
