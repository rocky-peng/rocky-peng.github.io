import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as u,w as i}from"./framework-b3a0f150.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),h=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),m={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),g=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),f=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：不思进取的浑噩度日，那不叫活着，只能叫没死。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d2d032cb-2f52-4822-8572-cc26cc7c8afb",alt:"",loading:"lazy"})])],-1);function b(A,x){const s=i("ExternalLinkIcon"),a=i("RouterLink");return r(),d("div",null,[E,e("ol",null,[e("li",null,[h,e("blockquote",null,[e("p",null,[e("a",m,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),p,_,e("ul",null,[e("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:n(()=>[t("JetBrains IDE 全破解")]),_:1})]),e("li",null,[l(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[t("Spring框架源码关键点")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("MongoDB高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[t("SQL优化")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[t("随机图片在线接口")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:n(()=>[t("杂记")]),_:1})])]),g,B,f,v])}const C=o(c,[["render",b],["__file","Git笔记.html.vue"]]);export{C as default};
