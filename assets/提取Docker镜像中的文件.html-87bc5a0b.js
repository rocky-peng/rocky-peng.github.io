import{_ as o,$ as s,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-b3a0f150.js";const c={},E=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),u=a("hr",null,null,-1),B=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：你若帮了一急需用钱的朋友，他一定会记得你，在他下次急需用钱的时候。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=97ead86a-ae91-440e-a4d9-0341b2ede4e3",alt:"",loading:"lazy"})])],-1);function f(_,A){const t=d("RouterLink");return s(),r("div",null,[E,a("ul",null,[a("li",null,[n(t,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[e("微博关注关系如何实现")]),_:1})]),a("li",null,[n(t,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("MySQL高可用")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[e("测试两台服务器间的网速")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:l(()=>[e("IO相关")]),_:1})]),a("li",null,[n(t,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[e("Hadoop 一")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[e("如何安装Google BBR")]),_:1})]),a("li",null,[n(t,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[e("ShadowsockServer")]),_:1})]),a("li",null,[n(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[e("Redis高可用")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[e("index方法压力测试记录")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[e("SpringCloud总体认识")]),_:1})])]),p,u,B,h])}const x=o(c,[["render",f],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
