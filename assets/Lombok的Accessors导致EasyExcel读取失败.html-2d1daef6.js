const n=JSON.parse('{"key":"v-4dc6afd1","path":"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html","title":"Lombok的Accessors导致EasyExcel读取失败","lang":"zh-CN","frontmatter":{"title":"Lombok的Accessors导致EasyExcel读取失败","date":"2023-07-19T00:00:00.000Z","category":["Lombok"],"tag":["Lombok","easyexcel"],"description":"相关代码 @Data public class XXXXStoreDTO { @ExcelIgnore private String aaaa; @ExcelProperty(value = \\"*门店编码\\",index = 0) private String storeNo; @ExcelProperty(\\"门店名称\\") private String storeName; @ExcelIgnore private String bbbb; } @Override public List&lt;XXXXStoreDTO &gt; getStore(String filePath) throws IOException { URL url = new URL(filePath); InputStream inputStream = new BufferedInputStream(url.openStream()); List&lt;CampaignStoreDTO&gt; allList = new ArrayList&lt;&gt;(); EasyExcel.read(inputStream, XXXXStoreDTO .class, new PageReadListener&lt;XXXXStoreDTO &gt;(dataList -&gt; { allList.addAll(dataList); })).sheet().headRowNumber(1).doRead(); return allList; } 当XXXXStoreDTO类上没有添加@Accessors(chain = true)注解后不能正常读取数据， 没有细究原因，记录下坑","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Lombok的Accessors导致EasyExcel读取失败"}],["meta",{"property":"og:description","content":"相关代码 @Data public class XXXXStoreDTO { @ExcelIgnore private String aaaa; @ExcelProperty(value = \\"*门店编码\\",index = 0) private String storeNo; @ExcelProperty(\\"门店名称\\") private String storeName; @ExcelIgnore private String bbbb; } @Override public List&lt;XXXXStoreDTO &gt; getStore(String filePath) throws IOException { URL url = new URL(filePath); InputStream inputStream = new BufferedInputStream(url.openStream()); List&lt;CampaignStoreDTO&gt; allList = new ArrayList&lt;&gt;(); EasyExcel.read(inputStream, XXXXStoreDTO .class, new PageReadListener&lt;XXXXStoreDTO &gt;(dataList -&gt; { allList.addAll(dataList); })).sheet().headRowNumber(1).doRead(); return allList; } 当XXXXStoreDTO类上没有添加@Accessors(chain = true)注解后不能正常读取数据， 没有细究原因，记录下坑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-05T07:06:18.000Z"}],["meta",{"property":"article:tag","content":"Lombok"}],["meta",{"property":"article:tag","content":"easyexcel"}],["meta",{"property":"article:published_time","content":"2023-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T07:06:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lombok的Accessors导致EasyExcel读取失败\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-05T07:06:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"相关代码","slug":"相关代码","link":"#相关代码","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1689739085000,"updatedTime":1730790378000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":255}]},"readingTime":{"minutes":1.41,"words":423},"filePathRelative":"other/Lombok的Accessors导致EasyExcel读取失败.md","localizedDate":"2023年7月19日","excerpt":"<h2> 相关代码</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Data</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">XXXXStoreDTO</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token annotation punctuation\\">@ExcelIgnore</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> aaaa<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@ExcelProperty</span><span class=\\"token punctuation\\">(</span>value <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"*门店编码\\"</span><span class=\\"token punctuation\\">,</span>index <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> storeNo<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@ExcelProperty</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"门店名称\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> storeName<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token annotation punctuation\\">@ExcelIgnore</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> bbbb<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">XXXXStoreDTO</span> <span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">getStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> filePath<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">URL</span> url <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">URL</span><span class=\\"token punctuation\\">(</span>filePath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">InputStream</span> inputStream <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">BufferedInputStream</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">openStream</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">CampaignStoreDTO</span><span class=\\"token punctuation\\">&gt;</span></span> allList <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayList</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">EasyExcel</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">read</span><span class=\\"token punctuation\\">(</span>inputStream<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">XXXXStoreDTO</span> <span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">PageReadListener</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">XXXXStoreDTO</span> <span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span>dataList <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        allList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addAll</span><span class=\\"token punctuation\\">(</span>dataList<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sheet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">headRowNumber</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">doRead</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> allList<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n当<span class=\\"token class-name\\">XXXXStoreDTO</span>类上没有添加<span class=\\"token annotation punctuation\\">@Accessors</span><span class=\\"token punctuation\\">(</span>chain <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span>注解后不能正常读取数据，\\n没有细究原因，记录下坑\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
