const n=JSON.parse('{"key":"v-b52e2180","path":"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html","title":"你真的会拼接字符串吗？","lang":"zh-CN","frontmatter":{"title":"你真的会拼接字符串吗？","date":"2023-09-20T00:00:00.000Z","category":["jdk"],"tag":["字符串拼接"],"description":"直接上菜： import org.slf4j.helpers.MessageFormatter; import org.springframework.util.StopWatch; public class PQSTest { public static void main(String[] args) { StopWatch stopWatch = new StopWatch(\\"pqs\\"); stopWatch.start(\\"MessageFormatter.format\\"); for (int i = 0; i &lt; 10000000; i++) { String s = MessageFormatter.format(\\"哈哈哈 {}\\", i).getMessage(); } stopWatch.stop(); stopWatch.start(\\"String.format\\"); for (int i = 0; i &lt; 10000000; i++) { String s = String.format(\\"哈哈哈 %d\\", i); } stopWatch.stop(); stopWatch.start(\\"String add\\"); for (int i = 0; i &lt; 10000000; i++) { String s = \\"哈哈哈 \\" + i; } stopWatch.stop(); System.out.println(stopWatch.shortSummary()); System.out.println(stopWatch.prettyPrint()); } }","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"码海拾光"}],["meta",{"property":"og:title","content":"你真的会拼接字符串吗？"}],["meta",{"property":"og:description","content":"直接上菜： import org.slf4j.helpers.MessageFormatter; import org.springframework.util.StopWatch; public class PQSTest { public static void main(String[] args) { StopWatch stopWatch = new StopWatch(\\"pqs\\"); stopWatch.start(\\"MessageFormatter.format\\"); for (int i = 0; i &lt; 10000000; i++) { String s = MessageFormatter.format(\\"哈哈哈 {}\\", i).getMessage(); } stopWatch.stop(); stopWatch.start(\\"String.format\\"); for (int i = 0; i &lt; 10000000; i++) { String s = String.format(\\"哈哈哈 %d\\", i); } stopWatch.stop(); stopWatch.start(\\"String add\\"); for (int i = 0; i &lt; 10000000; i++) { String s = \\"哈哈哈 \\" + i; } stopWatch.stop(); System.out.println(stopWatch.shortSummary()); System.out.println(stopWatch.prettyPrint()); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:tag","content":"字符串拼接"}],["meta",{"property":"article:published_time","content":"2023-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你真的会拼接字符串吗？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1695179967000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":482},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"other/你真的会拼接字符串吗？.md","localizedDate":"2023年9月20日","excerpt":"<p>直接上菜：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>slf4j<span class=\\"token punctuation\\">.</span>helpers<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">MessageFormatter</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">org<span class=\\"token punctuation\\">.</span>springframework<span class=\\"token punctuation\\">.</span>util<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">StopWatch</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">PQSTest</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">StopWatch</span> stopWatch <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">StopWatch</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"pqs\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"MessageFormatter.format\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10000000</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">MessageFormatter</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"哈哈哈 {}\\"</span><span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getMessage</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"String.format\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10000000</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">format</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"哈哈哈 %d\\"</span><span class=\\"token punctuation\\">,</span> i<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"String add\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">10000000</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"哈哈哈 \\"</span> <span class=\\"token operator\\">+</span> i<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shortSummary</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>stopWatch<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">prettyPrint</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
