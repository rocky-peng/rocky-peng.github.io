import{_ as o,$ as r,a0 as E,a1 as e,a2 as t,a3 as l,a4 as i,a5 as d,w as n}from"./framework-58787b1c.js";const u={},c=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),B=d(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),m={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),_=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),f=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你身边肯定有这样一种人，最贪吃是她 最懒是她，最瘦还是她！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2d8bdc56-21b0-4877-9c0b-3e8b75ced59a",alt:"",loading:"lazy"})])],-1);function v(g,x){const s=n("ExternalLinkIcon"),a=n("RouterLink");return r(),E("div",null,[c,e("ol",null,[e("li",null,[B,e("blockquote",null,[e("p",null,[e("a",m,[t("https://segmentfault.com/q/1010000002590371"),l(s)])])])])]),h,_,e("ul",null,[e("li",null,[l(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:i(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Redis笔记")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:i(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:i(()=>[t("IO相关")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:i(()=>[t("JVM异常处理")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:i(()=>[t("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:i(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:i(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[l(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:i(()=>[t("GitHub Workflow突然报错")]),_:1})])]),p,A,f,b])}const C=o(u,[["render",v],["__file","Git笔记.html.vue"]]);export{C as default};
