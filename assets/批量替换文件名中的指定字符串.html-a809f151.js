import{_ as n,$ as o,a0 as r,a1 as e,a3 as t,a4 as l,a5 as d,a2 as a,w as i}from"./framework-b3a0f150.js";const c={},u=d('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),E=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：多希望我的脂肪，能像朋友一样，不知不觉就没了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5d6dfa49-b6f4-4e29-8c08-677fe2848c9e",alt:"",loading:"lazy"})])],-1);function f(k,m){const s=i("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[t(s,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[a("Redis笔记")]),_:1})]),e("li",null,[t(s,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:l(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[t(s,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[a("常见问题")]),_:1})]),e("li",null,[t(s,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[t(s,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[a("kafka")]),_:1})]),e("li",null,[t(s,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:l(()=>[a("ShadowsockServer")]),_:1})]),e("li",null,[t(s,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[t(s,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[a("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[t(s,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[t(s,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[a("Arthas使用记录")]),_:1})]),e("li",null,[t(s,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[a("RocketMQ")]),_:1})]),e("li",null,[t(s,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:l(()=>[a("随机图片在线接口")]),_:1})])]),p,h,E,_])}const B=n(c,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{B as default};
