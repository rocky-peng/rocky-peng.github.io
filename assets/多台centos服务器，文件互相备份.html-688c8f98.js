const e=JSON.parse('{"key":"v-7bddb48b","path":"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html","title":"多台centos服务器，文件互相备份","lang":"zh-CN","frontmatter":{"title":"多台centos服务器，文件互相备份","date":"2022-02-14T00:00:00.000Z","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"多台centos服务器，文件互相备份"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-22T09:07:16.000Z"}],["meta",{"property":"article:published_time","content":"2022-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-22T09:07:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多台centos服务器，文件互相备份\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-22T09:07:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景与目标","slug":"背景与目标","link":"#背景与目标","children":[]},{"level":2,"title":"第一步","slug":"第一步","link":"#第一步","children":[]},{"level":2,"title":"第二步","slug":"第二步","link":"#第二步","children":[]}],"git":{"createdTime":1672234484000,"updatedTime":1677056836000,"contributors":[{"name":"rocky.peng","email":"rocky.peng@qq.com","commits":22},{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"software/unclassified/多台centos服务器，文件互相备份.md","localizedDate":"2022年2月14日","excerpt":"<h2> 背景与目标</h2>\\n<p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。\\n如果服务器A上产生了新的备份文件，能自动同步到服务器B</p>\\n<p>达到上面的目的，总体就是两个软件：</p>\\n<ol>\\n<li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li>\\n<li>inotify-tools （需要在A上安装）</li>\\n</ol>\\n<h2> 第一步</h2>\\n<p>在服务器A上执行</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>ssh-keygen\\nssh-copy-id 服务器B的IP地址\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{}}');export{e as data};
