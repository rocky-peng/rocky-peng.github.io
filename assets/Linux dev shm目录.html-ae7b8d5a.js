const e=JSON.parse('{"key":"v-30ecb64e","path":"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html","title":"Linux dev shm目录","lang":"zh-CN","frontmatter":{"title":"Linux dev shm目录","date":"2023-11-13T00:00:00.000Z","tag":["linux"],"category":["linux"],"head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"Linux dev shm目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-30T16:55:27.000Z"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2023-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-30T16:55:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux dev shm目录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-30T16:55:27.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1699874102000,"updatedTime":1701363327000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":4},{"name":"rocky","email":"rocky.peng@qq.com","commits":1}]},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"other/Linux dev shm目录.md","localizedDate":"2023年11月13日","excerpt":"<ul>\\n<li>dev: 代表device</li>\\n<li>shm: 代表shared memory</li>\\n</ul>\\n<figure><img src=\\"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png\\" alt=\\"Untitled\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Untitled</figcaption></figure>\\n<ol>\\n<li>\\n<p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p>\\n</li>\\n<li>\\n<p>其空间默认是总内存的一半</p>\\n</li>\\n<li>\\n<p>读写这个目录下的文件其实就是在读写内存。</p>\\n<ol>\\n<li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li>\\n</ol>\\n<figure><img src=\\"https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png\\" alt=\\"Untitled\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>Untitled</figcaption></figure>\\n</li>\\n<li>\\n<p>读写改目录文件性能是非常高的，实际就是读写内存</p>\\n</li>\\n<li>\\n<p>如果这个目录下没有任何文件，则不会占用内存。</p>\\n</li>\\n<li>\\n<p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p>\\n</li>\\n<li>\\n<p>具有临时性，重启、卸载这个目录都会丢失数据</p>\\n</li>\\n<li>\\n<p>扩展阅读：<a href=\\"https://www.jianshu.com/p/0dc2dae0fa46\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.jianshu.com/p/0dc2dae0fa46</a></p>\\n</li>\\n</ol>","copyright":{}}');export{e as data};
