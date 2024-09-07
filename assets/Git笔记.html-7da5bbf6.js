import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as n}from"./framework-58787b1c.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),m=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),h={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),B=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：别人知耻而后勇，我知耻而后怂。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=bc2a4cca-cd13-4b66-bcd6-6d0419f43f51",alt:"",loading:"lazy"})])],-1);function b(x,A){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[E,e("ol",null,[e("li",null,[m,e("blockquote",null,[e("p",null,[e("a",h,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),p,_,e("ul",null,[e("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:i(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:i(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:i(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:i(()=>[t("Hadoop 一")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:i(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Docker笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[t("Javassist整理")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[t("推荐几个适用小工具")]),_:1})]),e("li",null,[l(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:i(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:i(()=>[t("分布式问题")]),_:1})])]),f,g,B,v])}const S=o(c,[["render",b],["__file","Git笔记.html.vue"]]);export{S as default};
