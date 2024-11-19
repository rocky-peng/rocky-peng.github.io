import{_ as s,$ as o,a0 as r,a1 as e,a3 as n,a4 as l,a5 as i,a2 as a,w as d}from"./framework-6821ba0c.js";const c={},E=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),f=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：没人嘲笑你的梦想，他们只是嘲笑你的实力。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0404088f-3192-4d08-be8c-f6116b5e9db7",alt:"",loading:"lazy"})])],-1);function B(m,A){const t=d("RouterLink");return o(),r("div",null,[E,e("ul",null,[e("li",null,[n(t,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[a("MySQL杂项")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:l(()=>[a("KVM方式集群部署ES")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[a("Paxos算法")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[a("前后端常用技术")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[a("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[n(t,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[a("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[n(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[a("Linux dev shm目录")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[a("表单重复提交解决方案")]),_:1})]),e("li",null,[n(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[a("PostgreSQL高可用")]),_:1})])]),u,p,f,h])}const x=s(c,[["render",B],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
