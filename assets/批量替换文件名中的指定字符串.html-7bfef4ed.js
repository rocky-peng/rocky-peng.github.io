import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as E,a2 as t,w as i}from"./framework-b3a0f150.js";const c={},u=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),h=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),t("：明天就要见对方家长了，好忐忑啊，毕竟是我先打的他们家小孩。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=5a8c0aaf-5c27-4819-8d9b-e53260a38205",alt:"",loading:"lazy"})])],-1);function _(B,f){const e=i("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:l(()=>[t("KVM 虚拟机安装")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/NGINX.html"},{default:l(()=>[t("NGINX")]),_:1})]),a("li",null,[n(e,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[t("Spring RetryTemplate")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[t("乱七八糟的笔记")]),_:1})]),a("li",null,[n(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[t("Paxos算法")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:l(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[t("CountDownLatch源码解读")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[t("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),a("li",null,[n(e,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[n(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[t("SpringCloud总体认识")]),_:1})]),a("li",null,[n(e,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:l(()=>[t("https和http混用解决办法")]),_:1})])]),d,p,h,A])}const k=s(c,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
