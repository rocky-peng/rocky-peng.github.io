import{_ as s,$ as l,a0 as r,a1 as a,a3 as n,a4 as o,a5 as i,a2 as e,w as d}from"./framework-827a3556.js";const c={},E=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),u=a("hr",null,null,-1),h=a("hr",null,null,-1),f=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：只要你成为一个废物，就没有人能利用你！ "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b10075c9-a73a-4ff2-88d5-5d3fd8c243dd",alt:"",loading:"lazy"})])],-1);function B(A,_){const t=d("RouterLink");return l(),r("div",null,[E,a("ul",null,[a("li",null,[n(t,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[e("JVM垃圾收集器")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[n(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[e("Hadoop 一")]),_:1})]),a("li",null,[n(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("AQS源码解读")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[e("SQL优化")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:o(()=>[e("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),a("li",null,[n(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),p,u,h,f])}const x=s(c,[["render",B],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
