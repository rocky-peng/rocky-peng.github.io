import{_ as n,$ as o,a0 as E,a1 as a,a3 as t,a4 as s,a5 as r,a2 as e,w as d}from"./framework-b3a0f150.js";const i={},u=r('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),c=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),B=a("hr",null,null,-1),p=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：经常性失落，间接性崩溃，习惯性治愈。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9d85be8f-9934-48e3-a14e-ccb13d71a8dd",alt:"",loading:"lazy"})])],-1);function h(A,f){const l=d("RouterLink");return o(),E("div",null,[u,a("ul",null,[a("li",null,[t(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:s(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[e("kafka")]),_:1})]),a("li",null,[t(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[e("IO相关")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[e("分库分表")]),_:1})]),a("li",null,[t(l,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:s(()=>[e("SQL优化")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[e("ES杂项")]),_:1})]),a("li",null,[t(l,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("ESRally性能测试步骤")]),_:1})]),a("li",null,[t(l,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:s(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),a("li",null,[t(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),a("li",null,[t(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[e("GitHub Workflow突然报错")]),_:1})])]),c,B,p,_])}const k=n(i,[["render",h],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
