const e=JSON.parse(`{"key":"v-f89139a4","path":"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html","title":"JVM异常处理","lang":"zh-CN","frontmatter":{"title":"JVM异常处理","date":"2017-03-15T00:00:00.000Z","description":"top -p pid 看到某个进程占用的物理内存，以及创建的线程数，也可以通过Shift+f命令对指定列进行排序，从而找到异常线程的pid。然后可以通过jstack pid | grep 命令找到这个线程在做的事，从而进行排查。 ps axu | grep -E 'pid|USER' 通过这个方式也能看到某个进程占用的物理内存，结果和top命令是匹配的。 -Xms300m -Xmx300m 同时设置了这两个参数并不代表jvm一启动就会向os申请300m的内存（是指不会立即占用300m内存）。同理，-XX:MaxPermSize=300m -XX: PermSize=300m也是一样的，也不会立即占用300m内存。 具体当前jvm instance占用了多少内存（这里值堆内内存），可以通过jmap -heap pid查看。 jmap -heap pid 这个命令能查看当前jvm各个堆区域使用情况，把各个区域使用空间累加便得到当前jvm程序占用了多少内存。注意是堆内内存，这个命令是不能看到jvm对堆外内存的使用情况的。比如：","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"JVM异常处理"}],["meta",{"property":"og:description","content":"top -p pid 看到某个进程占用的物理内存，以及创建的线程数，也可以通过Shift+f命令对指定列进行排序，从而找到异常线程的pid。然后可以通过jstack pid | grep 命令找到这个线程在做的事，从而进行排查。 ps axu | grep -E 'pid|USER' 通过这个方式也能看到某个进程占用的物理内存，结果和top命令是匹配的。 -Xms300m -Xmx300m 同时设置了这两个参数并不代表jvm一启动就会向os申请300m的内存（是指不会立即占用300m内存）。同理，-XX:MaxPermSize=300m -XX: PermSize=300m也是一样的，也不会立即占用300m内存。 具体当前jvm instance占用了多少内存（这里值堆内内存），可以通过jmap -heap pid查看。 jmap -heap pid 这个命令能查看当前jvm各个堆区域使用情况，把各个区域使用空间累加便得到当前jvm程序占用了多少内存。注意是堆内内存，这个命令是不能看到jvm对堆外内存的使用情况的。比如："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2017-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM异常处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976155000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":479},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":4.91,"words":1474},"filePathRelative":"software/jvm/JVM异常处理.md","localizedDate":"2017年3月15日","excerpt":"<ol>\\n<li>\\n<p>top -p pid\\n看到某个进程占用的物理内存，以及创建的线程数，也可以通过Shift+f命令对指定列进行排序，从而找到异常线程的pid。然后可以通过jstack pid | grep 命令找到这个线程在做的事，从而进行排查。</p>\\n</li>\\n<li>\\n<p>ps axu | grep -E 'pid|USER'\\n通过这个方式也能看到某个进程占用的物理内存，结果和top命令是匹配的。</p>\\n</li>\\n<li>\\n<p>-Xms300m -Xmx300m\\n同时设置了这两个参数并不代表jvm一启动就会向os申请300m的内存（是指不会立即占用300m内存）。同理，-XX:MaxPermSize=300m -XX: PermSize=300m也是一样的，也不会立即占用300m内存。\\n具体当前jvm instance占用了多少内存（这里值堆内内存），可以通过jmap -heap pid查看。</p>\\n</li>\\n<li>\\n<p>jmap -heap pid\\n这个命令能查看当前jvm各个堆区域使用情况，把各个区域使用空间累加便得到当前jvm程序占用了多少内存。注意是堆内内存，这个命令是不能看到jvm对堆外内存的使用情况的。比如：</p>\\n</li>\\n</ol>","copyright":{},"autoDesc":true}`);export{e as data};
