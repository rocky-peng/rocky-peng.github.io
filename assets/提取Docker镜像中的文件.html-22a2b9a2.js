import{_ as s,$ as o,a0 as r,a1 as e,a3 as n,a4 as l,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const c={},p=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),h=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：不需要解释，理解你的人不需要，不理解你的人不配要。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=49061652-dbfd-43a5-b0b5-3e7b7e4bd6ec",alt:"",loading:"lazy"})])],-1);function B(m,_){const t=d("RouterLink");return o(),r("div",null,[p,e("ul",null,[e("li",null,[n(t,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:l(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[n(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[a("微博关注关系如何实现")]),_:1})]),e("li",null,[n(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:l(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[a("Paxos算法")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[a("MySQL索引")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[n(t,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[a("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[a("ES杂项")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[a("Markdown软件比对")]),_:1})]),e("li",null,[n(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[n(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[a("SpringCloud总体认识")]),_:1})])]),u,E,h,f])}const g=s(c,[["render",B],["__file","提取Docker镜像中的文件.html.vue"]]);export{g as default};
