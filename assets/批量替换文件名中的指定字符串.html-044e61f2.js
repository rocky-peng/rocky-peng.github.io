import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as s,a5 as i,a2 as e,w as d}from"./framework-16d560c6.js";const c={},u=i('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),p=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),_=a("hr",null,null,-1),h=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：职业不分高低贵贱，但是工资分啊。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=96e74e59-f9b1-4787-ac71-b9b6b95eaba2",alt:"",loading:"lazy"})])],-1);function f(A,m){const t=d("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[e("MAT工具")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("常见问题")]),_:1})]),a("li",null,[n(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:s(()=>[e("KVM方式集群部署ES")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[e("高可用通用方案")]),_:1})]),a("li",null,[n(t,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[e("MAC CMS")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/gperftools.html"},{default:s(()=>[e("gperftools")]),_:1})]),a("li",null,[n(t,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:s(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),a("li",null,[n(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:s(()=>[e("Centos离线安装Docker")]),_:1})]),a("li",null,[n(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[e("JVM杂项")]),_:1})]),a("li",null,[n(t,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:s(()=>[e("SpringCloud总体认识")]),_:1})])]),p,E,_,h])}const k=l(c,[["render",f],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
