import{_ as o,$ as l,a0 as r,a1 as a,a3 as s,a4 as n,a5 as i,a2 as e,w as d}from"./framework-58787b1c.js";const c={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：回想这辈子，当过最大的官，也就是QQ群管理员了。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9489eb58-a373-4db6-b968-3a8462e717da",alt:"",loading:"lazy"})])],-1);function B(k,f){const t=d("RouterLink");return l(),r("div",null,[u,a("ul",null,[a("li",null,[s(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Notion笔记定时备份")]),_:1})]),a("li",null,[s(t,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),a("li",null,[s(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[e("Docker进行资源隔离")]),_:1})]),a("li",null,[s(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[s(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),a("li",null,[s(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[s(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[e("简易版配置中心&初探原理")]),_:1})]),a("li",null,[s(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("ShadowsockServer配置")]),_:1})]),a("li",null,[s(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[e("Git Merge 、Rebase")]),_:1})]),a("li",null,[s(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[e("Markdown软件比对")]),_:1})]),a("li",null,[s(t,{to:"/software/linux/Linux.html"},{default:n(()=>[e("Linux")]),_:1})]),a("li",null,[s(t,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[e("Hbase 总览")]),_:1})])]),p,E,h,_])}const m=o(c,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{m as default};
