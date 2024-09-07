import{_ as o,$ as d,a0 as r,a1 as e,a2 as t,a3 as l,a4 as n,a5 as u,w as s}from"./framework-58787b1c.js";const c={},h=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),_=u(`<p>在github上fork别人的项目后，如何进行同步？</p><ol><li><p>检查是否配置目标远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只显示了自己的远程仓库地址，则需要执行第二步</p></li><li><p>添加远程仓库地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add upstream 目标远程仓库地址（就是原项目地址）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>upstream 可以自定义，比如也可以写base</p></li><li><p>拉取原项目远程仓库的提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行merge动作,将远程提交合并到本地仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有冲突，命令行方式有点繁琐，这种情况我更倾向于图形界面操作。</p></li><li><p>根据自己情况决定是否提交到自己的远程仓库</p></li></ol>`,2),m={href:"https://segmentfault.com/q/1010000002590371",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),E=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),v=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：跟你在一起，苦一点我也愿意，苦很多就算了吧。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=53dcaed4-340b-4bac-9e67-f849b94937ad",alt:"",loading:"lazy"})])],-1);function b(x,B){const i=s("ExternalLinkIcon"),a=s("RouterLink");return d(),r("div",null,[h,e("ol",null,[e("li",null,[_,e("blockquote",null,[e("p",null,[e("a",m,[t("https://segmentfault.com/q/1010000002590371"),l(i)])])])])]),p,E,e("ul",null,[e("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[t("MySQL杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[l(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[t("Hadoop 一")]),_:1})]),e("li",null,[l(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:n(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:n(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:n(()=>[t("MySQL索引")]),_:1})])]),f,g,v,A])}const k=o(c,[["render",b],["__file","Git笔记.html.vue"]]);export{k as default};
