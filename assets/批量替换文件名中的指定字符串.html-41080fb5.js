import{_ as t,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as E,a2 as a,w as i}from"./framework-b3a0f150.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),B=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：一个女孩有纹身说明什么，性格开朗还是有故事？说明你有偏见。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=5a3271c6-dfa1-49e8-9034-8f52fc8ea2af",alt:"",loading:"lazy"})])],-1);function _(A,f){const l=i("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[s(l,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[s(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[s(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[a("如何安装Google BBR")]),_:1})]),e("li",null,[s(l,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:n(()=>[a("MySQL三大日志")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[a("ES杂项")]),_:1})]),e("li",null,[s(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[s(l,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[a("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[s(l,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:n(()=>[a("SpringCloud总体认识")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[a("BBR加速")]),_:1})])]),u,p,B,h])}const k=t(d,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
