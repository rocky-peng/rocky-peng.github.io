import{_ as l,$ as s,a0 as r,a1 as e,a3 as n,a4 as o,a5 as i,a2 as a,w as c}from"./framework-b3a0f150.js";const d={},u=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),E=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：有些人走路喜欢看手机，不是贪玩，是想掩饰一个人的尴尬。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=02bc1f0b-3ed8-4528-a017-72f244543e00",alt:"",loading:"lazy"})])],-1);function _(x,B){const t=c("RouterLink");return s(),r("div",null,[u,e("ul",null,[e("li",null,[n(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[n(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[a("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[n(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[n(t,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[a("数据同步方案")]),_:1})]),e("li",null,[n(t,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[n(t,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:o(()=>[a("Java面试基础")]),_:1})]),e("li",null,[n(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:o(()=>[a("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[n(t,{to:"/software/raft/sofajraft.html"},{default:o(()=>[a("sofajraft")]),_:1})]),e("li",null,[n(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[a("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[n(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[a("K8S常用命令")]),_:1})]),e("li",null,[n(t,{to:"/software/linux/Linux.html"},{default:o(()=>[a("Linux")]),_:1})]),e("li",null,[n(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[a("PostgreSQL高可用")]),_:1})])]),p,h,E,f])}const g=l(d,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{g as default};
