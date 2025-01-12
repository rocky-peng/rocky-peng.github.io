import{_ as s,$ as o,a0 as E,a1 as a,a3 as l,a4 as n,a5 as r,a2 as e,w as i}from"./framework-b3a0f150.js";const c={},d=r('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),A=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),u=a("hr",null,null,-1),p=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：我不骂人，那是因为我，动手能力比较强。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=ffb9fd4c-870c-4a46-bf91-86cf8467c25a",alt:"",loading:"lazy"})])],-1);function _(f,h){const t=i("RouterLink");return o(),E("div",null,[d,a("ul",null,[a("li",null,[l(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:n(()=>[e("记一次内存泄漏")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Git笔记")]),_:1})]),a("li",null,[l(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[e("Docker进行资源隔离")]),_:1})]),a("li",null,[l(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[e("Sublime Text 格式化JSON")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:n(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[e("MySQL锁、事务、隔离级别")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:n(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[e("ES杂项")]),_:1})]),a("li",null,[l(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[l(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[l(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[e("随机图片在线接口")]),_:1})])]),A,u,p,B])}const k=s(c,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
