import{_ as n,$ as o,a0 as r,a1 as e,a3 as t,a4 as l,a5 as i,a2 as a,w as c}from"./framework-b3a0f150.js";const d={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),h=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：坚持半途而废，也是坚持。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c6a8fd9f-85ce-4adc-bef3-acf9b35ce7a1",alt:"",loading:"lazy"})])],-1);function m(f,A){const s=c("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[t(s,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[a("Oh My ZSH")]),_:1})]),e("li",null,[t(s,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:l(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[t(s,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:l(()=>[a("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(s,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[a("高可用通用方案")]),_:1})]),e("li",null,[t(s,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[a("Paxos算法")]),_:1})]),e("li",null,[t(s,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[a("Javassist整理")]),_:1})]),e("li",null,[t(s,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[t(s,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:l(()=>[a("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[t(s,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:l(()=>[a("MySQL三大日志")]),_:1})]),e("li",null,[t(s,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:l(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(s,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[t(s,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[a("WebSocket SpringBoot Demo")]),_:1})])]),p,E,h,_])}const k=n(d,[["render",m],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
