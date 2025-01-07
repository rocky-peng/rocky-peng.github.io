import{_ as o,$ as l,a0 as r,a1 as a,a3 as n,a4 as s,a5 as i,a2 as e,w as E}from"./framework-b3a0f150.js";const c={},d=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：人與人之間的差距，就是被那些看不見的自律，拉開的。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=af9c0768-87d2-4e9c-a340-4fb3ec82d984",alt:"",loading:"lazy"})])],-1);function A(B,f){const t=E("RouterLink");return l(),r("div",null,[d,a("ul",null,[a("li",null,[n(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[n(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("MongoDB高可用")]),_:1})]),a("li",null,[n(t,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:s(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),a("li",null,[n(t,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:s(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[n(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("Docker笔记")]),_:1})]),a("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[e("Paxos算法")]),_:1})]),a("li",null,[n(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[e("Arthas使用记录")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[e("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[n(t,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[e("Mermaid示例")]),_:1})]),a("li",null,[n(t,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[n(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("PostgreSQL高可用")]),_:1})]),a("li",null,[n(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[e("raft协议")]),_:1})])]),u,p,h,_])}const k=o(c,[["render",A],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
