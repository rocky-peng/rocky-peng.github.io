import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as E,w as s}from"./framework-b3a0f150.js";const u={},c=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),m=E(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),A={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),B=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),f=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：都说努力能变得更好，变不变得更好我不知道，说说还是可以的。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Eyeglasses reflecting computer code on a monitor, ideal for technology and programming themes.",loading:"lazy"})])],-1);function v(b,x){const i=s("ExternalLinkIcon"),a=s("RouterLink");return r(),d("div",null,[c,e("ol",null,[e("li",null,[m,e("blockquote",null,[e("p",null,[e("a",A,[t("https://segmentfault.com/q/1010000002590371"),l(i)])])])])]),h,B,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[t("MySQL杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[t("InnoDB存储引擎")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:n(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("表单重复提交解决方案")]),_:1})]),e("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[t("Linux dev shm目录")]),_:1})])]),p,_,f,g])}const w=o(u,[["render",v],["__file","Git笔记.html.vue"]]);export{w as default};
