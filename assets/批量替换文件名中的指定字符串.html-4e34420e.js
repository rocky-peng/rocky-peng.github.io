import{_ as n,$ as o,a0 as r,a1 as a,a3 as t,a4 as l,a5 as E,a2 as e,w as i}from"./framework-b3a0f150.js";const c={},u=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),B=a("hr",null,null,-1),A=a("hr",null,null,-1),p=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：一切都会变好的，比如你已经从胖，变成了好胖。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1180fbbf-9d9a-4c71-b80f-b99f28f8012b",alt:"",loading:"lazy"})])],-1);function _(f,h){const s=i("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[t(s,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("RSA 加密解密多语言实现方案")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[e("Btrace入门")]),_:1})]),a("li",null,[t(s,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),a("li",null,[t(s,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("弱引用示例")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:l(()=>[e("Flutter开发需要涉及的知识点大纲")]),_:1})]),a("li",null,[t(s,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[t(s,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[t(s,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:l(()=>[e("Java面试基础")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:l(()=>[e("分布式问题")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:l(()=>[e("BBR加速")]),_:1})]),a("li",null,[t(s,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("表单重复提交解决方案")]),_:1})])]),d,B,A,p])}const b=n(c,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{b as default};
