import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as u,w as i}from"./framework-b3a0f150.js";const c={},m=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),h=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),E={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：高考完不要撕书，还有可能复读。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=34fb4c36-3f2e-42fc-bc66-3de058b8a08f",alt:"",loading:"lazy"})])],-1);function v(A,x){const s=i("ExternalLinkIcon"),a=i("RouterLink");return r(),d("div",null,[m,e("ol",null,[e("li",null,[h,e("blockquote",null,[e("p",null,[e("a",E,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),p,_,e("ul",null,[e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:n(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[t("来个JVM冷知识")]),_:1})]),e("li",null,[l(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("MongoDB高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[t("kafka")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(a,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:n(()=>[t("Markdown软件比对")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[t("杂记")]),_:1})]),e("li",null,[l(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),f,B,g,b])}const w=o(c,[["render",v],["__file","Git笔记.html.vue"]]);export{w as default};
