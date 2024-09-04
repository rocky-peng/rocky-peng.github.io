import{_ as r,$ as o,a0 as d,a1 as e,a2 as t,a3 as l,a4 as i,a5 as u,w as n}from"./framework-3895bb24.js";const c={},m=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),p=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),h={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},E=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),g=e("hr",null,null,-1),v=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：曾经的我你爱搭不理，现在的我，我自己都看不起。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=03c47be2-9cc0-4cb2-92ba-139ee062e5c7",alt:"",loading:"lazy"})])],-1);function x(A,B){const s=n("ExternalLinkIcon"),a=n("RouterLink");return o(),d("div",null,[m,e("ol",null,[e("li",null,[p,e("blockquote",null,[e("p",null,[e("a",h,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),E,_,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/MyBatis.html"},{default:i(()=>[t("MyBatis")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:i(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:i(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[t("kafka")]),_:1})]),e("li",null,[l(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:i(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:i(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:i(()=>[t("线上FullGC频繁的排查")]),_:1})]),e("li",null,[l(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:i(()=>[t("MySQL数据迁移到PGSQL")]),_:1})])]),f,b,g,v])}const k=r(c,[["render",x],["__file","Git笔记.html.vue"]]);export{k as default};
