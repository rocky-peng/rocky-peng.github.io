import{_ as s,$ as o,a0 as r,a1 as e,a3 as n,a4 as l,a5 as i,a2 as a,w as c}from"./framework-58787b1c.js";const d={},p=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),f=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：职业不分高低贵贱，但是工资分啊。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=75595a76-be93-40c0-bfe3-80845f647f6a",alt:"",loading:"lazy"})])],-1);function _(m,g){const t=c("RouterLink");return o(),r("div",null,[p,e("ul",null,[e("li",null,[n(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[a("NGINX")]),_:1})]),e("li",null,[n(t,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[a("Spring RetryTemplate")]),_:1})]),e("li",null,[n(t,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[n(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[a("JVM异常处理")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[n(t,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[n(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[a("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[n(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:l(()=>[a("Docker跨主机通信方案")]),_:1})]),e("li",null,[n(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[n(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[a("PostgreSQL高可用")]),_:1})]),e("li",null,[n(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[a("raft协议")]),_:1})])]),u,E,f,h])}const B=s(d,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{B as default};
