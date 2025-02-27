const e=JSON.parse('{"key":"v-45521734","path":"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html","title":"ES6.2.3(3节点)460G数据迁移到ES7.4.1(5节点)","lang":"zh-CN","frontmatter":{"title":"ES6.2.3(3节点)460G数据迁移到ES7.4.1(5节点)","date":"2018-05-01T00:00:00.000Z","description":"目标 现在有一个ES集群（3节点，3个节点既是master也是data），存储的数据约460G。现在需要升级ES版本为7.4.1，新集群采用12个节点（4个master，8个data节点） 演练 由于迁移的数据量蛮大的，基本不可能采用github的elasticdump工具，也不能采用es自带的数据备份恢复功能。 允许es停机（这是很重要的一点） 所以在演练中，采用下面的演练步骤 搭建ES6.2.3的3节点集群 由于es6.2.3版本docker官网没有现成的镜像，所以这里采用直接安装的方式。 es的配置和线上环境保持一样，稍微修改下端口什么的（因为在一台机子上），3个节点既是master也是data节点 具体配置如下：","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"}],["meta",{"property":"og:site_name","content":"码海拾光"}],["meta",{"property":"og:title","content":"ES6.2.3(3节点)460G数据迁移到ES7.4.1(5节点)"}],["meta",{"property":"og:description","content":"目标 现在有一个ES集群（3节点，3个节点既是master也是data），存储的数据约460G。现在需要升级ES版本为7.4.1，新集群采用12个节点（4个master，8个data节点） 演练 由于迁移的数据量蛮大的，基本不可能采用github的elasticdump工具，也不能采用es自带的数据备份恢复功能。 允许es停机（这是很重要的一点） 所以在演练中，采用下面的演练步骤 搭建ES6.2.3的3节点集群 由于es6.2.3版本docker官网没有现成的镜像，所以这里采用直接安装的方式。 es的配置和线上环境保持一样，稍微修改下端口什么的（因为在一台机子上），3个节点既是master也是data节点 具体配置如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T07:03:06.000Z"}],["meta",{"property":"article:published_time","content":"2018-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T07:03:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ES6.2.3(3节点)460G数据迁移到ES7.4.1(5节点)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-05-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T07:03:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":2,"title":"演练","slug":"演练","link":"#演练","children":[{"level":3,"title":"搭建ES6.2.3的3节点集群","slug":"搭建es6-2-3的3节点集群","link":"#搭建es6-2-3的3节点集群","children":[]},{"level":3,"title":"写入6G测试数据","slug":"写入6g测试数据","link":"#写入6g测试数据","children":[]},{"level":3,"title":"搭建ES7.4.1的5节点集群","slug":"搭建es7-4-1的5节点集群","link":"#搭建es7-4-1的5节点集群","children":[]},{"level":3,"title":"拷贝物理文件到新集群","slug":"拷贝物理文件到新集群","link":"#拷贝物理文件到新集群","children":[]}]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1671976533000,"updatedTime":1740639786000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":480},{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22}]},"readingTime":{"minutes":10.86,"words":3259},"filePathRelative":"software/middleware/es/ES6.2.3(3节点)数据迁移到ES7.4.1(5节点).md","localizedDate":"2018年5月1日","excerpt":"<h2> 目标</h2>\\n<p>现在有一个ES集群（3节点，3个节点既是master也是data），存储的数据约460G。现在需要升级ES版本为7.4.1，新集群采用12个节点（4个master，8个data节点）</p>\\n<h2> 演练</h2>\\n<ol>\\n<li>由于迁移的数据量蛮大的，基本不可能采用github的elasticdump工具，也不能采用es自带的数据备份恢复功能。</li>\\n<li>允许es停机（这是很重要的一点）</li>\\n</ol>\\n<p>所以在演练中，采用下面的演练步骤</p>\\n<h3> 搭建ES6.2.3的3节点集群</h3>\\n<p>由于es6.2.3版本docker官网没有现成的镜像，所以这里采用直接安装的方式。\\nes的配置和线上环境保持一样，稍微修改下端口什么的（因为在一台机子上），3个节点既是master也是data节点\\n具体配置如下：</p>","copyright":{},"autoDesc":true}');export{e as data};
