import{_ as s,$ as o,a0 as i,a1 as a,a3 as n,a4 as l,a5 as r,a2 as e,w as d}from"./framework-b6ede5bc.js";const c={},u=r(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),f=a("hr",null,null,-1),E=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：做梦梦到自己在考试，然后被吓醒，发现自己真的在考试。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6f6eb320-fe9b-4324-80f5-18d31a8dd6ab",alt:"",loading:"lazy"})])],-1);function _(m,B){const t=d("RouterLink");return o(),i("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[e("Oh My ZSH")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[n(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:l(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("弱引用示例")]),_:1})]),a("li",null,[n(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),a("li",null,[n(t,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:l(()=>[e("istio基础知识")]),_:1})]),a("li",null,[n(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("JVM杂项")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[e("前后端常用技术")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:l(()=>[e("BBR加速")]),_:1})]),a("li",null,[n(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[e("Linux dev shm目录")]),_:1})]),a("li",null,[n(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[e("K8S常用命令")]),_:1})]),a("li",null,[n(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[e("raft协议")]),_:1})])]),p,f,E,h])}const A=s(c,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{A as default};
