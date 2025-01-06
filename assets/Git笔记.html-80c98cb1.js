import{_ as i,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as s,a5 as u,w as n}from"./framework-b3a0f150.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),m=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),h={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),A=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我从不去想何时能成功，既然选择了远方，那就还远着呢。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=815610e8-18fe-4307-bd7a-baed29926023",alt:"",loading:"lazy"})])],-1);function b(v,x){const o=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[E,e("ol",null,[e("li",null,[m,e("blockquote",null,[e("p",null,[e("a",h,[t("https://segmentfault.com/q/1010000002590371"),l(o)])])])])]),p,_,e("ul",null,[e("li",null,[l(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[t("来个JVM冷知识")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[t("Paxos算法")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[t("Docker笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[l(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[t("分布式事务Seata")]),_:1})]),e("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:s(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(a,{to:"/software/raft/sofajraft.html"},{default:s(()=>[t("sofajraft")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[t("杂记")]),_:1})])]),B,f,A,g])}const k=i(c,[["render",b],["__file","Git笔记.html.vue"]]);export{k as default};
