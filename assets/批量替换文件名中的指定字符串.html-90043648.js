import{_ as s,$ as o,a0 as r,a1 as a,a3 as l,a4 as n,a5 as E,a2 as e,w as i}from"./framework-b3a0f150.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：吃什么减肥最快？吃苦！ "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7678e140-8302-4b75-9ead-ee618faaa35b",alt:"",loading:"lazy"})])],-1);function B(A,f){const t=i("RouterLink");return o(),r("div",null,[c,a("ul",null,[a("li",null,[l(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[e("常见问题")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),a("li",null,[l(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:n(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[l(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[e("制作KVM ES镜像文件")]),_:1})]),a("li",null,[l(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[e("Markdown软件比对")]),_:1})]),a("li",null,[l(t,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),a("li",null,[l(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:n(()=>[e("ESRally性能测试步骤")]),_:1})]),a("li",null,[l(t,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),a("li",null,[l(t,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),a("li",null,[l(t,{to:"/software/linux/Linux.html"},{default:n(()=>[e("Linux")]),_:1})])]),u,p,h,_])}const k=s(d,[["render",B],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
