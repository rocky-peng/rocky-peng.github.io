import{_ as l,$ as o,a0 as r,a1 as e,a3 as s,a4 as n,a5 as E,a2 as a,w as i}from"./framework-b6ede5bc.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),B=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：男人单身叫单身狗，女的单身叫狗不理。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c2802f16-0314-47d4-a2b0-398b6765825e",alt:"",loading:"lazy"})])],-1);function _(m,f){const t=i("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[s(t,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[s(t,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[a("JVM参数设置")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[s(t,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[a("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[s(t,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[s(t,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[a("高可用通用方案")]),_:1})]),e("li",null,[s(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:n(()=>[a("Centos离线安装Docker")]),_:1})]),e("li",null,[s(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[s(t,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[s(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[s(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[a("RocketMQ")]),_:1})]),e("li",null,[s(t,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),u,p,B,h])}const k=l(d,[["render",_],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
