import{_ as s,$ as o,a0 as i,a1 as a,a3 as n,a4 as l,a5 as r,a2 as e,w as d}from"./framework-b3a0f150.js";const c={},u=r(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),f=a("hr",null,null,-1),E=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：赚钱能治愈一切矫情，有钱能治愈一切自卑。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2c7632b2-2f26-4120-b263-7e7b353712de",alt:"",loading:"lazy"})])],-1);function _(m,A){const t=d("RouterLink");return o(),i("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("MAT工具")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Redis笔记")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[e("测试两台服务器间的网速")]),_:1})]),a("li",null,[n(t,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[e("MAC CMS")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:l(()=>[e("分库分表")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("推荐几个适用小工具")]),_:1})]),a("li",null,[n(t,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[n(t,{to:"/software/linux/Linux.html"},{default:l(()=>[e("Linux")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:l(()=>[e("BBR加速")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:l(()=>[e("随机图片在线接口")]),_:1})]),a("li",null,[n(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[e("raft协议")]),_:1})])]),p,f,E,h])}const B=s(c,[["render",_],["__file","提取Docker镜像中的文件.html.vue"]]);export{B as default};
