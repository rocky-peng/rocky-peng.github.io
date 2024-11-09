import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-16d560c6.js";const c={},p=i(`<p>我们知道如果通过docker cp 命令能提取docker容器中的文件，但这个需要要求一个能运行的容器。</p><p>那如果某个镜像在某些时候无法满足运行条件或其他原因导致不能运行的情况，如何提取镜像中的文件呢？</p><p>方法其实很简单</p><h2 id="将镜像转存为压缩文件" tabindex="-1"><a class="header-anchor" href="#将镜像转存为压缩文件" aria-hidden="true">#</a> 将镜像转存为压缩文件</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>docker save <span class="token operator">-</span>o aaa<span class="token punctuation">.</span>tar 镜像名

如：
docker save <span class="token operator">-</span>o aaaa<span class="token punctuation">.</span>tar harbor<span class="token punctuation">.</span>xxxxxx<span class="token punctuation">.</span>cn<span class="token operator">/</span>xxxxx<span class="token operator">-</span>dev<span class="token operator">/</span>xxxxxxxx<span class="token operator">:</span>ce191aff7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压文件" tabindex="-1"><a class="header-anchor" href="#解压文件" aria-hidden="true">#</a> 解压文件</h2><p>解压后有类似下面的文件目录</p><figure><img src="https://cdn.justdopay.com/notion/md5-bcf0ce63e0a78cde78fef2f361818497.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>其中有一个文件：manifest.json，内容大体如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-0f9f2ccd5d45c3af14393ef239032035.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>layers则代表分层信息。最后一个就是最上层的（大多数时候我们自己放入容器的文件应该在最上层，<strong>并不绝对</strong>）。</p><p>找到与最后一个对应的文件夹，继续解压里面的文件就行。（<strong>如果发现没有自己要的文件，说明文件夹不对，继续往上换成另外的文件夹再试即可</strong>）</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),h=a("hr",null,null,-1),f=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：不要觉得自己，这辈子遇不到真爱了，你下辈子也遇不到。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=cff9a51d-678b-4686-8059-a7a9a0ba3dfe",alt:"",loading:"lazy"})])],-1);function B(m,_){const t=d("RouterLink");return o(),r("div",null,[p,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[e("测试两台服务器间的网速")]),_:1})]),a("li",null,[n(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[n(t,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[e("Javassist整理")]),_:1})]),a("li",null,[n(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[e("MySQL索引")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("推荐几个适用小工具")]),_:1})]),a("li",null,[n(t,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("MyBatis xml特殊字符处理")]),_:1})]),a("li",null,[n(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("JVM杂项")]),_:1})]),a("li",null,[n(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("Mermaid示例")]),_:1})]),a("li",null,[n(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:l(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[e("SpringCloud总体认识")]),_:1})])]),u,E,h,f])}const x=s(c,[["render",B],["__file","提取Docker镜像中的文件.html.vue"]]);export{x as default};
