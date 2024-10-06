const n=JSON.parse('{"key":"v-1dccd9e7","path":"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html","title":"getPath vs getAbsolutePath vs getCanonicalPath","lang":"zh-CN","frontmatter":{"description":"getPath vs getAbsolutePath vs getCanonicalPath getPath 以构造路径作为返回值 getAbsolutePath 以绝对路径作为返回值 getCanonicalPath 以绝对路径作为返回值（如果路径包含.或..会进行处理） public static void main(String[] args){ \\t File file1 = new File(\\".\\\\\\\\xxx.txt\\"); File file2 = new File(\\"D:\\\\\\\\aaa\\\\\\\\xxx.txt\\"); System.out.println(file1.getPath()); System.out.println(file1.getAbsolutePath()); \\t System.out.println(file1.getCanonicalPath()); System.out.println(\\"------------------------\\"); System.out.println(file2.getPath()); System.out.println(file2.getAbsolutePath()); \\t System.out.println(file2.getCanonicalPath()); } 输出如下内容： .\\\\xxx.txt D:\\\\aaa\\\\.\\\\xxx.txt D:\\\\aaa\\\\xxx.txt ------------------------ D:\\\\aaa\\\\xxx.txt D:\\\\aaa\\\\xxx.txt D:\\\\aaa\\\\xxx.txt","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"getPath vs getAbsolutePath vs getCanonicalPath"}],["meta",{"property":"og:description","content":"getPath vs getAbsolutePath vs getCanonicalPath getPath 以构造路径作为返回值 getAbsolutePath 以绝对路径作为返回值 getCanonicalPath 以绝对路径作为返回值（如果路径包含.或..会进行处理） public static void main(String[] args){ \\t File file1 = new File(\\".\\\\\\\\xxx.txt\\"); File file2 = new File(\\"D:\\\\\\\\aaa\\\\\\\\xxx.txt\\"); System.out.println(file1.getPath()); System.out.println(file1.getAbsolutePath()); \\t System.out.println(file1.getCanonicalPath()); System.out.println(\\"------------------------\\"); System.out.println(file2.getPath()); System.out.println(file2.getAbsolutePath()); \\t System.out.println(file2.getCanonicalPath()); } 输出如下内容： .\\\\xxx.txt D:\\\\aaa\\\\.\\\\xxx.txt D:\\\\aaa\\\\xxx.txt ------------------------ D:\\\\aaa\\\\xxx.txt D:\\\\aaa\\\\xxx.txt D:\\\\aaa\\\\xxx.txt"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T07:03:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-06T07:03:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"getPath vs getAbsolutePath vs getCanonicalPath\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T07:03:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1677056836000,"updatedTime":1728198232000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":194}]},"readingTime":{"minutes":1.8,"words":539},"filePathRelative":"other/getPath vs getAbsolutePath vs getCanonicalPath.md","localizedDate":"2023年2月22日","excerpt":"<h1> getPath vs getAbsolutePath vs getCanonicalPath</h1>\\n<ol>\\n<li>\\n<p>getPath</p>\\n<p>以构造路径作为返回值</p>\\n</li>\\n<li>\\n<p>getAbsolutePath</p>\\n<p>以绝对路径作为返回值</p>\\n</li>\\n<li>\\n<p>getCanonicalPath</p>\\n<p>以绝对路径作为返回值（如果路径包含.或..会进行处理）</p>\\n</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t  <span class=\\"token class-name\\">File</span> file1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">File</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\".\\\\\\\\xxx.txt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">File</span> file2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">File</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"D:\\\\\\\\aaa\\\\\\\\xxx.txt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getPath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAbsolutePath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getCanonicalPath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"------------------------\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getPath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getAbsolutePath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>file2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getCanonicalPath</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n \\n输出如下内容：\\n\\n<span class=\\"token punctuation\\">.</span>\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n<span class=\\"token class-name\\">D</span><span class=\\"token operator\\">:</span>\\\\aaa\\\\<span class=\\"token punctuation\\">.</span>\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n<span class=\\"token class-name\\">D</span><span class=\\"token operator\\">:</span>\\\\aaa\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n<span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span><span class=\\"token operator\\">--</span>\\n<span class=\\"token class-name\\">D</span><span class=\\"token operator\\">:</span>\\\\aaa\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n<span class=\\"token class-name\\">D</span><span class=\\"token operator\\">:</span>\\\\aaa\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n<span class=\\"token class-name\\">D</span><span class=\\"token operator\\">:</span>\\\\aaa\\\\xxx<span class=\\"token punctuation\\">.</span>txt\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
