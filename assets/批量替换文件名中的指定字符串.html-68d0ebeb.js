import{_ as s,$ as o,a0 as r,a1 as a,a3 as n,a4 as l,a5 as E,a2 as e,w as i}from"./framework-b3a0f150.js";const c={},d=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),_=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：人离不开姜葱蒜，人生葱葱能姜就就姜就，不能姜就就蒜了。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=1c8b1871-f718-42d5-b784-d2b10f98cc9a",alt:"",loading:"lazy"})])],-1);function h(A,f){const t=i("RouterLink");return o(),r("div",null,[d,a("ul",null,[a("li",null,[n(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[e("Notion笔记定时备份")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("常见问题")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[e("随记")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("数据同步方案")]),_:1})]),a("li",null,[n(t,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Docker笔记")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[e("推荐几个适用小工具")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[n(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:l(()=>[e("RocketMQ")]),_:1})]),a("li",null,[n(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[e("Nginx的双向认证配置")]),_:1})]),a("li",null,[n(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(t,{to:"/software/linux/Linux.html"},{default:l(()=>[e("Linux")]),_:1})])]),u,p,_,B])}const m=s(c,[["render",h],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{m as default};
