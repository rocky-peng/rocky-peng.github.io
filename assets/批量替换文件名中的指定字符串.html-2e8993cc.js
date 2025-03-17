import{_ as n,$ as o,a0 as r,a1 as e,a3 as l,a4 as s,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const c={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),E=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：在最美好的年华，没有遇到爱情，只遇到了疫情。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/16143144/pexels-photo-16143144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Serene view of the Summer Palace with its historical architecture reflecting in the lake at sunset.",loading:"lazy"})])],-1);function m(f,k){const t=d("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[l(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("PostgreSQL定时备份")]),_:1})]),e("li",null,[l(t,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[a("kafka")]),_:1})]),e("li",null,[l(t,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("数据同步方案")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[a("线上FullGC频繁的排查")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:s(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[l(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[l(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("JVM杂项")]),_:1})]),e("li",null,[l(t,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:s(()=>[a("MyBatis xml特殊字符处理")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:s(()=>[a("RocketMQ")]),_:1})]),e("li",null,[l(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[a("Nginx的双向认证配置")]),_:1})]),e("li",null,[l(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:s(()=>[a("SpringCloud总体认识")]),_:1})])]),p,h,E,_])}const w=n(c,[["render",m],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{w as default};
