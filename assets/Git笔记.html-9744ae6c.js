import{_ as r,$ as o,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as s}from"./framework-827a3556.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),h=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),m={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),g=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：上班后你会发现，不是别人比你傻，而是别人比你会装傻。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=90b3c483-d757-4046-9e31-69d5f2d9218c",alt:"",loading:"lazy"})])],-1);function x(b,A){const n=s("ExternalLinkIcon"),a=s("RouterLink");return o(),d("div",null,[E,e("ol",null,[e("li",null,[h,e("blockquote",null,[e("p",null,[e("a",m,[t("https://segmentfault.com/q/1010000002590371"),l(n)])])])])]),p,_,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:i(()=>[t("记一次内存泄漏")]),_:1})]),e("li",null,[l(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("MySQL高可用")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:i(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("Redis高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[t("index方法压力测试记录")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[t("Javassist整理")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/gperftools.html"},{default:i(()=>[t("gperftools")]),_:1})]),e("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:i(()=>[t("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[t("K8S常用命令")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[t("杂记")]),_:1})])]),f,B,g,v])}const k=r(c,[["render",x],["__file","Git笔记.html.vue"]]);export{k as default};
