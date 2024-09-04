import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as i,a2 as a,w as d}from"./framework-3895bb24.js";const c={},E=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：骗别人我不行，骗自己我还是可以的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=48967978-5420-4d1b-813c-7c250d4b16ea",alt:"",loading:"lazy"})])],-1);function B(f,k){const t=d("RouterLink");return o(),r("div",null,[E,e("ul",null,[e("li",null,[s(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:n(()=>[a("记一次内存泄漏")]),_:1})]),e("li",null,[s(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[s(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[a("测试两台服务器间的网速")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[a("index方法压力测试记录")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[a("gperftools")]),_:1})]),e("li",null,[s(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("ReentrantLock源码解读")]),_:1})]),e("li",null,[s(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[a("Mermaid示例")]),_:1})]),e("li",null,[s(t,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[a("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[s(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[a("K8S常用命令")]),_:1})])]),u,p,_,h])}const A=l(c,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{A as default};
