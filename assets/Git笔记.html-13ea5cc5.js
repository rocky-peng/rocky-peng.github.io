import{_ as o,$ as r,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as n}from"./framework-b3a0f150.js";const c={},E=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),m=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),A={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),p=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),f=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：傻子才相信读书无用，聪明人都是，劝告别人读书无用。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=aca19955-fe51-44dc-99f8-37e6858fb153",alt:"",loading:"lazy"})])],-1);function g(b,x){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),d("div",null,[E,e("ol",null,[e("li",null,[m,e("blockquote",null,[e("p",null,[e("a",A,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),h,p,e("ul",null,[e("li",null,[l(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:i(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:i(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[t("kafka")]),_:1})]),e("li",null,[l(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("Redis高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:i(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[t("AQS源码解读")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[t("JVM杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:i(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[t("Java面试基础")]),_:1})]),e("li",null,[l(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:i(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),_,B,f,v])}const F=o(c,[["render",g],["__file","Git笔记.html.vue"]]);export{F as default};
