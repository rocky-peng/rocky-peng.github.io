import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as E,a2 as e,w as i}from"./framework-052411f2.js";const d={},u=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),c=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：小时候从三阶楼梯跳下去，就能获得快乐，现在要从八楼。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2e2c20ee-6387-42cc-ad63-a9a70c92d111",alt:"",loading:"lazy"})])],-1);function A(B,f){const t=i("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Git笔记")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:l(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),a("li",null,[n(t,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[e("PostgreSQL定时备份")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[e("随记")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[e("Markdown Mermaid画图实例")]),_:1})]),a("li",null,[n(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:l(()=>[e("Sublime Text 格式化JSON")]),_:1})]),a("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[e("Paxos算法")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[e("简易版配置中心&初探原理")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("推荐几个适用小工具")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[e("Markdown软件比对")]),_:1})]),a("li",null,[n(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[n(t,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[e("GitHub Workflow突然报错")]),_:1})])]),c,p,h,_])}const k=s(d,[["render",A],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
