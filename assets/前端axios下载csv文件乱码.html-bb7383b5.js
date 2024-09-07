const n=JSON.parse('{"key":"v-428108c1","path":"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html","title":"前端axios下载csv文件乱码","lang":"zh-CN","frontmatter":{"title":"前端axios下载csv文件乱码","date":"2023-08-31T00:00:00.000Z","tag":["csv乱码","axios 乱码"],"description":"问题 现在有个后端下载csv文件的接口，在浏览器地址栏直接请求这个接口，下载的文件用office的excel打开不乱码（wps也能正常显示），但通过页面点击按钮来下载，保存的文件用office的excel打开就乱码（wps还是能正常显示）。 后端代码大概这样： /** * * @param response * @param checkResultFileUrl 这个文件要求是gkb编码 * @throws IOException */ @Override public void downloadCheckResult(HttpServletResponse response, String checkResultFileUrl) throws IOException { response.setCharacterEncoding(\\"GBK\\"); response.addHeader(\\"Content-Disposition\\", \\"attachment; filename=checkResult.csv\\"); response.addHeader(\\"Content-Type\\", \\"text/csv\\"); ServletOutputStream outputStream = response.getOutputStream(); InputStream is = fileStorageService.getFileInputStream(checkResultFileUrl); byte[] bytes = IOUtils.readFully(is, is.available()); outputStream.write(bytes); outputStream.flush(); outputStream.close(); }","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"前端axios下载csv文件乱码"}],["meta",{"property":"og:description","content":"问题 现在有个后端下载csv文件的接口，在浏览器地址栏直接请求这个接口，下载的文件用office的excel打开不乱码（wps也能正常显示），但通过页面点击按钮来下载，保存的文件用office的excel打开就乱码（wps还是能正常显示）。 后端代码大概这样： /** * * @param response * @param checkResultFileUrl 这个文件要求是gkb编码 * @throws IOException */ @Override public void downloadCheckResult(HttpServletResponse response, String checkResultFileUrl) throws IOException { response.setCharacterEncoding(\\"GBK\\"); response.addHeader(\\"Content-Disposition\\", \\"attachment; filename=checkResult.csv\\"); response.addHeader(\\"Content-Type\\", \\"text/csv\\"); ServletOutputStream outputStream = response.getOutputStream(); InputStream is = fileStorageService.getFileInputStream(checkResultFileUrl); byte[] bytes = IOUtils.readFully(is, is.available()); outputStream.write(bytes); outputStream.flush(); outputStream.close(); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-07T14:12:45.000Z"}],["meta",{"property":"article:tag","content":"csv乱码"}],["meta",{"property":"article:tag","content":"axios 乱码"}],["meta",{"property":"article:published_time","content":"2023-08-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-07T14:12:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端axios下载csv文件乱码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-07T14:12:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1693480464000,"updatedTime":1725718365000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":87},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":1.9,"words":571},"filePathRelative":"other/前端axios下载csv文件乱码.md","localizedDate":"2023年8月31日","excerpt":"<h2> 问题</h2>\\n<p>现在有个后端下载csv文件的接口，在浏览器地址栏直接请求这个接口，下载的文件用office的excel打开不乱码（wps也能正常显示），但通过页面点击按钮来下载，保存的文件用office的excel打开就乱码（wps还是能正常显示）。</p>\\n<p>后端代码大概这样：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**\\n *\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">response</span>\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token parameter\\">checkResultFileUrl</span> 这个文件要求是gkb编码\\n * <span class=\\"token keyword\\">@throws</span> <span class=\\"token reference\\"><span class=\\"token class-name\\">IOException</span></span>\\n */</span>\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">downloadCheckResult</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">String</span> checkResultFileUrl<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n    response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setCharacterEncoding</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"GBK\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Content-Disposition\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"attachment; filename=checkResult.csv\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Content-Type\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"text/csv\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">ServletOutputStream</span> outputStream <span class=\\"token operator\\">=</span> response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getOutputStream</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">InputStream</span> is <span class=\\"token operator\\">=</span> fileStorageService<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getFileInputStream</span><span class=\\"token punctuation\\">(</span>checkResultFileUrl<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">byte</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> bytes <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">IOUtils</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readFully</span><span class=\\"token punctuation\\">(</span>is<span class=\\"token punctuation\\">,</span> is<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">available</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    outputStream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span>bytes<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    outputStream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">flush</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    outputStream<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
