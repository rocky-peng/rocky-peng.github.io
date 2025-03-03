import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-b3a0f150.js";const c={},p=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.top/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.top/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),f=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：还好没有对象，不然这么冷的天，还要拿手机出来回信息。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function A(B,m){const t=d("RouterLink");return o(),r("div",null,[p,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),a("li",null,[n(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:l(()=>[e("Docker进行资源隔离")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[e("测试两台服务器间的网速")]),_:1})]),a("li",null,[n(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("MongoDB高可用")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:l(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[e("kafka")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:l(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:l(()=>[e("线上FullGC频繁的排查")]),_:1})]),a("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[e("Paxos算法")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:l(()=>[e("SQL优化")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:l(()=>[e("分布式事务Seata")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:l(()=>[e("杂记")]),_:1})])]),u,E,f,h])}const x=s(c,[["render",A],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
