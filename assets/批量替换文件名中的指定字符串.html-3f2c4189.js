import{_ as n,$ as o,a0 as r,a1 as e,a3 as t,a4 as l,a5 as i,a2 as a,w as E}from"./framework-b3a0f150.js";const d={},c=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),h=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：经过多年的打拼，虽然没有什么收获，但你有债呀！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=84b622d1-f4da-44c1-a62e-d6204a62a31e",alt:"",loading:"lazy"})])],-1);function _(m,f){const s=E("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[t(s,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[t(s,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[a("Censys搜索引擎学习")]),_:1})]),e("li",null,[t(s,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[t(s,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[a("Spring RetryTemplate")]),_:1})]),e("li",null,[t(s,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[a("如何安装Google BBR")]),_:1})]),e("li",null,[t(s,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[t(s,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:l(()=>[a("Paxos算法")]),_:1})]),e("li",null,[t(s,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[t(s,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[a("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[t(s,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[t(s,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:l(()=>[a("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[t(s,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[a("分布式问题")]),_:1})])]),u,p,h,B])}const k=n(d,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
