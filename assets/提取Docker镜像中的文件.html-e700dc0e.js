import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-b3a0f150.js";const c={},u=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),f=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：如果倒退16年，我一定会去复读，不为成绩只为今生错过你。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4492dd90-9812-4396-8f56-9476f27e0b2a",alt:"",loading:"lazy"})])],-1);function _(m,B){const t=d("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[e("MySQL常用命令")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("常见问题")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[e("Spring框架源码关键点")]),_:1})]),a("li",null,[n(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("MongoDB高可用")]),_:1})]),a("li",null,[n(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:l(()=>[e("Sublime Text 格式化JSON")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("高可用通用方案")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:l(()=>[e("常用队列")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:l(()=>[e("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[e("SpringCloud总体认识")]),_:1})]),a("li",null,[n(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[e("raft协议")]),_:1})]),a("li",null,[n(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[e("Linux dev shm目录")]),_:1})])]),p,E,f,h])}const A=s(c,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{A as default};
