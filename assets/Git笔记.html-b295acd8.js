import{_ as s,$ as o,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as n}from"./framework-16d560c6.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),h=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),m={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),B=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：当别人向你提出意见时，一定要认真记下来，对你有意见的都有谁。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=8d651800-41ab-4090-b5ad-ab55805e6dfe",alt:"",loading:"lazy"})])],-1);function x(v,A){const r=n("ExternalLinkIcon"),a=n("RouterLink");return o(),d("div",null,[E,e("ol",null,[e("li",null,[h,e("blockquote",null,[e("p",null,[e("a",m,[t("https://segmentfault.com/q/1010000002590371"),l(r)])])])])]),p,B,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:i(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:i(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:i(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[l(a,{to:"/other/Spring%20RetryTemplate.html"},{default:i(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:i(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[t("Paxos算法")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:i(()=>[t("SQL优化")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:i(()=>[t("BBR加速")]),_:1})])]),_,f,g,b])}const k=s(c,[["render",x],["__file","Git笔记.html.vue"]]);export{k as default};
