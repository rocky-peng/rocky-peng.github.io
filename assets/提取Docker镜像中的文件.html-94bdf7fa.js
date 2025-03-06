import{_ as o,$ as s,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as t,w as d}from"./framework-b3a0f150.js";const c={},p=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.top/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.top/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),E=a("hr",null,null,-1),f=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),t("：我们都史无前例的有默契，突然你不理我我也不理你。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/30968027/pexels-photo-30968027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Illuminated Chinatown gate in Yokohama, Japan, showcasing traditional Asian architecture at dusk.",loading:"lazy"})])],-1);function _(m,g){const e=d("RouterLink");return s(),r("div",null,[p,a("ul",null,[a("li",null,[n(e,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[t("记一次内存泄漏")]),_:1})]),a("li",null,[n(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[n(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[t("MySQL高可用")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[t("NGINX")]),_:1})]),a("li",null,[n(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[t("JDK命令行工具")]),_:1})]),a("li",null,[n(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[t("如何安装Google BBR")]),_:1})]),a("li",null,[n(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[t("Paxos算法")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:l(()=>[t("MySQL三大日志")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:l(()=>[t("分布式事务Seata")]),_:1})]),a("li",null,[n(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:l(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),a("li",null,[n(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[n(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:l(()=>[t("Hbase 总览")]),_:1})])]),u,h,E,f])}const A=o(c,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{A as default};
