import{_ as o,$ as s,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as t,w as c}from"./framework-b3a0f150.js";const d={},E=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.top/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.top/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),t("：你不学，人家少一个竞争对手，人家不学——人家有钱呐。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=30738302-1cd3-48dd-8825-7c5586c7cde9",alt:"",loading:"lazy"})])],-1);function f(A,_){const e=c("RouterLink");return s(),r("div",null,[E,a("ul",null,[a("li",null,[n(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[t("NGINX")]),_:1})]),a("li",null,[n(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[n(e,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[t("ShadowsockServer")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[n(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[t("Arthas使用记录")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:l(()=>[t("Java面试基础")]),_:1})]),a("li",null,[n(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[t("GitHub Workflow突然报错")]),_:1})]),a("li",null,[n(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:l(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:l(()=>[t("杂记")]),_:1})]),a("li",null,[n(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[t("K8S常用命令")]),_:1})])]),u,p,h,B])}const m=o(d,[["render",f],["__file","提取Docker镜像中的文件.html.vue"]]);export{m as default};
