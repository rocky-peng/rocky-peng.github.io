import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as c,a2 as a,w as i}from"./framework-b3a0f150.js";const E={},u=c('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),B=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：春节假期要结束了，该收收心，准备过五一了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0c125d7d-82bb-4ccc-8a36-3a660e0f91e9",alt:"",loading:"lazy"})])],-1);function _(A,f){const t=i("RouterLink");return o(),r("div",null,[u,e("ul",null,[e("li",null,[s(t,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[a("MyBatis")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[a("弱引用示例")]),_:1})]),e("li",null,[s(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[s(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[a("乱七八糟的笔记")]),_:1})]),e("li",null,[s(t,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[s(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:n(()=>[a("Paxos算法")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[s(t,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[a("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[s(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:n(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("ReentrantLock源码解读")]),_:1})]),e("li",null,[s(t,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:n(()=>[a("Docker跨主机通信方案")]),_:1})])]),d,p,B,h])}const k=l(E,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
