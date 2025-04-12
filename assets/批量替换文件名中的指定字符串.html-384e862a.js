import{_ as n,$ as o,a0 as r,a1 as a,a3 as l,a4 as t,a5 as E,a2 as e,w as i}from"./framework-b3a0f150.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：当金钱站起来说话时，所有真理都沉默了。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/16143144/pexels-photo-16143144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Serene view of the Summer Palace with its historical architecture reflecting in the lake at sunset.",loading:"lazy"})])],-1);function _(f,m){const s=i("RouterLink");return o(),r("div",null,[c,a("ul",null,[a("li",null,[l(s,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:t(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),a("li",null,[l(s,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:t(()=>[e("常见问题")]),_:1})]),a("li",null,[l(s,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:t(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),a("li",null,[l(s,{to:"/software/unclassified/NGINX.html"},{default:t(()=>[e("NGINX")]),_:1})]),a("li",null,[l(s,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:t(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[l(s,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:t(()=>[e("istio基础知识")]),_:1})]),a("li",null,[l(s,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:t(()=>[e("Paxos算法")]),_:1})]),a("li",null,[l(s,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[e("Arthas使用记录")]),_:1})]),a("li",null,[l(s,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[e("简易版配置中心&初探原理")]),_:1})]),a("li",null,[l(s,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[e("SQL优化")]),_:1})]),a("li",null,[l(s,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:t(()=>[e("前后端常用技术")]),_:1})]),a("li",null,[l(s,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[e("ESRally性能测试步骤")]),_:1})])]),u,p,h,A])}const k=n(d,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
