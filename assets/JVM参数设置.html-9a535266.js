const a=JSON.parse('{"key":"v-359893ac","path":"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html","title":"JVM参数设置","lang":"zh-CN","frontmatter":{"title":"JVM参数设置","date":"2017-03-14T00:00:00.000Z","description":"生产环境下 jvm 参数建议加上下面的这些参数： jdk &lt; 8: -server -Xms&lt;heap size&gt;[g|m|k] -Xmx&lt;heap size&gt;[g|m|k] -XX:PermSize=&lt;perm gen size&gt;[g|m|k] -XX:MaxPermSize=&lt;perm gen size&gt;[g|m|k] -Xmn&lt;young size&gt;[g|m|k] -XX:SurvivorRatio=&lt;ratio&gt; -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=&lt;percent&gt; -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:\\"&lt;path to log&gt;\\" -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -Dsun.net.inetaddr.ttl=&lt;TTL in seconds&gt; -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=&lt;path to dump&gt;`date`.hprof jdk &gt;=8: -server -Xms&lt;heap size&gt;[g|m|k] -Xmx&lt;heap size&gt;[g|m|k] -XX:MaxMetaspaceSize=&lt;metaspace size&gt;[g|m|k] -Xmn&lt;young size&gt;[g|m|k] -XX:SurvivorRatio=&lt;ratio&gt; -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=&lt;percent&gt; -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:\\"&lt;path to log&gt;\\" -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -Dsun.net.inetaddr.ttl=&lt;TTL in seconds&gt; -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=&lt;path to dump&gt;`date`.hprof","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"JVM参数设置"}],["meta",{"property":"og:description","content":"生产环境下 jvm 参数建议加上下面的这些参数： jdk &lt; 8: -server -Xms&lt;heap size&gt;[g|m|k] -Xmx&lt;heap size&gt;[g|m|k] -XX:PermSize=&lt;perm gen size&gt;[g|m|k] -XX:MaxPermSize=&lt;perm gen size&gt;[g|m|k] -Xmn&lt;young size&gt;[g|m|k] -XX:SurvivorRatio=&lt;ratio&gt; -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=&lt;percent&gt; -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:\\"&lt;path to log&gt;\\" -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -Dsun.net.inetaddr.ttl=&lt;TTL in seconds&gt; -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=&lt;path to dump&gt;`date`.hprof jdk &gt;=8: -server -Xms&lt;heap size&gt;[g|m|k] -Xmx&lt;heap size&gt;[g|m|k] -XX:MaxMetaspaceSize=&lt;metaspace size&gt;[g|m|k] -Xmn&lt;young size&gt;[g|m|k] -XX:SurvivorRatio=&lt;ratio&gt; -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=&lt;percent&gt; -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+PrintGCDateStamps -verbose:gc -XX:+PrintGCDetails -Xloggc:\\"&lt;path to log&gt;\\" -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -Dsun.net.inetaddr.ttl=&lt;TTL in seconds&gt; -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=&lt;path to dump&gt;`date`.hprof"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-07T00:38:35.000Z"}],["meta",{"property":"article:published_time","content":"2017-03-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-07T00:38:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM参数设置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-03-14T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-07T00:38:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JIT","slug":"jit","link":"#jit","children":[]},{"level":2,"title":"杂项","slug":"杂项","link":"#杂项","children":[]},{"level":2,"title":"其他参数","slug":"其他参数","link":"#其他参数","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976155000,"updatedTime":1741307915000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":501},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":8.93,"words":2679},"filePathRelative":"software/jvm/JVM参数设置.md","localizedDate":"2017年3月14日","excerpt":"<p>生产环境下 jvm 参数建议加上下面的这些参数：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>jdk <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">8</span>:\\n\\n<span class=\\"token parameter variable\\">-server</span>\\n-Xms<span class=\\"token operator\\">&lt;</span>heap size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span> -Xmx<span class=\\"token operator\\">&lt;</span>heap size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token parameter variable\\">-XX:PermSize</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>perm gen size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span> <span class=\\"token parameter variable\\">-XX:MaxPermSize</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>perm gen size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n-Xmn<span class=\\"token operator\\">&lt;</span>young size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token parameter variable\\">-XX:SurvivorRatio</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>ratio<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+UseConcMarkSweepGC</span> <span class=\\"token parameter variable\\">-XX:+CMSParallelRemarkEnabled</span>\\n<span class=\\"token parameter variable\\">-XX:+UseCMSInitiatingOccupancyOnly</span> <span class=\\"token parameter variable\\">-XX:CMSInitiatingOccupancyFraction</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>percent<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+ScavengeBeforeFullGC</span> <span class=\\"token parameter variable\\">-XX:+CMSScavengeBeforeRemark</span>\\n<span class=\\"token parameter variable\\">-XX:+PrintGCDateStamps</span> <span class=\\"token parameter variable\\">-verbose:gc</span> <span class=\\"token parameter variable\\">-XX:+PrintGCDetails</span> -Xloggc:<span class=\\"token string\\">\\"&lt;path to log&gt;\\"</span>\\n<span class=\\"token parameter variable\\">-XX:+UseGCLogFileRotation</span> <span class=\\"token parameter variable\\">-XX:NumberOfGCLogFiles</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span> <span class=\\"token parameter variable\\">-XX:GCLogFileSize</span><span class=\\"token operator\\">=</span>100M\\n<span class=\\"token parameter variable\\">-Dsun.net.inetaddr.ttl</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>TTL <span class=\\"token keyword\\">in</span> seconds<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+HeapDumpOnOutOfMemoryError</span> <span class=\\"token parameter variable\\">-XX:HeapDumpPath</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>path to dump<span class=\\"token operator\\">&gt;</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token function\\">date</span><span class=\\"token variable\\">`</span></span>.hprof\\n\\njdk <span class=\\"token operator\\">&gt;=</span><span class=\\"token number\\">8</span>:\\n\\n<span class=\\"token parameter variable\\">-server</span>\\n-Xms<span class=\\"token operator\\">&lt;</span>heap size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span> -Xmx<span class=\\"token operator\\">&lt;</span>heap size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token parameter variable\\">-XX:MaxMetaspaceSize</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>metaspace size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n-Xmn<span class=\\"token operator\\">&lt;</span>young size<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">[</span>g<span class=\\"token operator\\">|</span>m<span class=\\"token operator\\">|</span>k<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token parameter variable\\">-XX:SurvivorRatio</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>ratio<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+UseConcMarkSweepGC</span> <span class=\\"token parameter variable\\">-XX:+CMSParallelRemarkEnabled</span>\\n<span class=\\"token parameter variable\\">-XX:+UseCMSInitiatingOccupancyOnly</span> <span class=\\"token parameter variable\\">-XX:CMSInitiatingOccupancyFraction</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>percent<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+ScavengeBeforeFullGC</span> <span class=\\"token parameter variable\\">-XX:+CMSScavengeBeforeRemark</span>\\n<span class=\\"token parameter variable\\">-XX:+PrintGCDateStamps</span> <span class=\\"token parameter variable\\">-verbose:gc</span> <span class=\\"token parameter variable\\">-XX:+PrintGCDetails</span> -Xloggc:<span class=\\"token string\\">\\"&lt;path to log&gt;\\"</span>\\n<span class=\\"token parameter variable\\">-XX:+UseGCLogFileRotation</span> <span class=\\"token parameter variable\\">-XX:NumberOfGCLogFiles</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">10</span> <span class=\\"token parameter variable\\">-XX:GCLogFileSize</span><span class=\\"token operator\\">=</span>100M\\n<span class=\\"token parameter variable\\">-Dsun.net.inetaddr.ttl</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>TTL <span class=\\"token keyword\\">in</span> seconds<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token parameter variable\\">-XX:+HeapDumpOnOutOfMemoryError</span> <span class=\\"token parameter variable\\">-XX:HeapDumpPath</span><span class=\\"token operator\\">=</span><span class=\\"token operator\\">&lt;</span>path to dump<span class=\\"token operator\\">&gt;</span><span class=\\"token variable\\"><span class=\\"token variable\\">`</span><span class=\\"token function\\">date</span><span class=\\"token variable\\">`</span></span>.hprof\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
