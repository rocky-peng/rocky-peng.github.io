import{_ as r,$ as o,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as u,w as i}from"./framework-b3a0f150.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),m=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),h={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),p=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：她化了妆，也没有你化成灰好看。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f25bb2dc-07a2-4dde-8a62-72e7929f961a",alt:"",loading:"lazy"})])],-1);function A(v,x){const s=i("ExternalLinkIcon"),a=i("RouterLink");return o(),d("div",null,[E,e("ol",null,[e("li",null,[m,e("blockquote",null,[e("p",null,[e("a",h,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),_,p,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:n(()=>[t("记一次内存泄漏")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("PostgreSQL定时备份")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[t("简易版配置中心&初探原理")]),_:1})]),e("li",null,[l(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(a,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[t("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[t("BBR加速")]),_:1})])]),B,f,g,b])}const k=r(c,[["render",A],["__file","Git笔记.html.vue"]]);export{k as default};
