import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as n}from"./framework-58787b1c.js";const c={},h=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),p=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),E={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),v=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你能在浪费时间中获得乐趣，就不是在浪费时间。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4088973e-c6b6-41e7-be79-2f9cb635aa2f",alt:"",loading:"lazy"})])],-1);function b(A,x){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[h,e("ol",null,[e("li",null,[p,e("blockquote",null,[e("p",null,[e("a",E,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),m,_,e("ul",null,[e("li",null,[l(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:i(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:i(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[t("Paxos算法")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[t("Java面试基础")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:i(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:i(()=>[t("SpringCloud总体认识")]),_:1})]),e("li",null,[l(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:i(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:i(()=>[t("Linux dev shm目录")]),_:1})])]),B,f,v,g])}const w=o(c,[["render",b],["__file","Git笔记.html.vue"]]);export{w as default};
