import{_ as s,$ as l,a0 as r,a1 as e,a3 as n,a4 as o,a5 as i,a2 as a,w as c}from"./framework-7f25d394.js";const d={},u=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),h=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：我的发际线，有后移症。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e6deccb7-299a-4ceb-b48d-1c3ce60cb5fe",alt:"",loading:"lazy"})])],-1);function A(B,_){const t=c("RouterLink");return l(),r("div",null,[u,e("ul",null,[e("li",null,[n(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[n(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[n(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[a("Docker进行资源隔离")]),_:1})]),e("li",null,[n(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[a("IO相关")]),_:1})]),e("li",null,[n(t,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[a("MAC CMS")]),_:1})]),e("li",null,[n(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("Docker笔记")]),_:1})]),e("li",null,[n(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[a("AQS源码解读")]),_:1})]),e("li",null,[n(t,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[a("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[n(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[n(t,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[a("表单重复提交解决方案")]),_:1})]),e("li",null,[n(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[a("PostgreSQL高可用")]),_:1})]),e("li",null,[n(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[a("Linux dev shm目录")]),_:1})])]),p,E,h,f])}const x=s(d,[["render",A],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
