const e=JSON.parse('{"key":"v-17fa8300","path":"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html","title":"Arthas使用记录","lang":"zh-CN","frontmatter":{"date":"2023-02-10T00:00:00.000Z","title":"Arthas使用记录","description":"思考如下问题： 现在有个接口在开发环境非常快，但线上环境就是慢（假设已经知道了就是代码问题，如何定位具体问题） 我明明改了代码了，为啥子测试环境感觉没生效？ 运维又说更新了代码了，怎么如何确认 排查问题的时候，想知道某个方法的入参、出参，但是代码里又买有打印相关日志，怎么搞？ 让运维修改了某个配置的值，但运维部署后，始终感觉有问题，感觉没有更改一样，又没有相关日志，怎么确认？ vmtool 这个命令可以获取指定类的实例对象，拿到实例对象后还能执行实例方法等。通过help查看使用方法","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Arthas使用记录"}],["meta",{"property":"og:description","content":"思考如下问题： 现在有个接口在开发环境非常快，但线上环境就是慢（假设已经知道了就是代码问题，如何定位具体问题） 我明明改了代码了，为啥子测试环境感觉没生效？ 运维又说更新了代码了，怎么如何确认 排查问题的时候，想知道某个方法的入参、出参，但是代码里又买有打印相关日志，怎么搞？ 让运维修改了某个配置的值，但运维部署后，始终感觉有问题，感觉没有更改一样，又没有相关日志，怎么确认？ vmtool 这个命令可以获取指定类的实例对象，拿到实例对象后还能执行实例方法等。通过help查看使用方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2023-02-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Arthas使用记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-10T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"vmtool","slug":"vmtool","link":"#vmtool","children":[{"level":3,"title":"调用方法时创建对象","slug":"调用方法时创建对象","link":"#调用方法时创建对象","children":[]}]},{"level":2,"title":"ognl","slug":"ognl","link":"#ognl","children":[{"level":3,"title":"获取静态属性值","slug":"获取静态属性值","link":"#获取静态属性值","children":[]},{"level":3,"title":"获取普通属性值","slug":"获取普通属性值","link":"#获取普通属性值","children":[]},{"level":3,"title":"调用静态方法","slug":"调用静态方法","link":"#调用静态方法","children":[]},{"level":3,"title":"调用实例方法","slug":"调用实例方法","link":"#调用实例方法","children":[]},{"level":3,"title":"ognl扩展阅读","slug":"ognl扩展阅读","link":"#ognl扩展阅读","children":[]}]},{"level":2,"title":"Watch","slug":"watch","link":"#watch","children":[]},{"level":2,"title":"Trace","slug":"trace","link":"#trace","children":[{"level":3,"title":"案例一","slug":"案例一","link":"#案例一","children":[]},{"level":3,"title":"案例二","slug":"案例二","link":"#案例二","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"一键离线安装","slug":"一键离线安装","link":"#一键离线安装","children":[]},{"level":3,"title":"查看启用端口","slug":"查看启用端口","link":"#查看启用端口","children":[]},{"level":3,"title":"查看数据库连接","slug":"查看数据库连接","link":"#查看数据库连接","children":[]},{"level":3,"title":"查看contextPath","slug":"查看contextpath","link":"#查看contextpath","children":[]}]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1676018963000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":502},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":41},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"other/Arthas使用记录.md","localizedDate":"2023年2月10日","excerpt":"<p>思考如下问题：</p>\\n<ol>\\n<li>现在有个接口在开发环境非常快，但线上环境就是慢（假设已经知道了就是代码问题，如何定位具体问题）</li>\\n<li>我明明改了代码了，为啥子测试环境感觉没生效？ 运维又说更新了代码了，怎么如何确认</li>\\n<li>排查问题的时候，想知道某个方法的入参、出参，但是代码里又买有打印相关日志，怎么搞？</li>\\n<li>让运维修改了某个配置的值，但运维部署后，始终感觉有问题，感觉没有更改一样，又没有相关日志，怎么确认？</li>\\n</ol>\\n<h2> vmtool</h2>\\n<p>这个命令可以获取指定类的实例对象，拿到实例对象后还能执行实例方法等。通过help查看使用方法</p>","copyright":{},"autoDesc":true}');export{e as data};
