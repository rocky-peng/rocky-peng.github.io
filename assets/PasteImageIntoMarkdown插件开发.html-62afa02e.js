import{_ as r,$ as s,a0 as d,a1 as e,a2 as t,a3 as a,a4 as n,a5 as h,w as o}from"./framework-827a3556.js";const u={},c=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),E={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"欢迎各位大佬吐槽",-1),B=e("br",null,null,-1),f=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你过得好我替你高兴，你过得不好，我替全世界高兴。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=dd9e24c2-d889-44f8-9dee-00415521087b",alt:"",loading:"lazy"})])],-1);function A(k,w){const i=o("ExternalLinkIcon"),l=o("RouterLink");return s(),d("div",null,[c,e("p",null,[t("github: "),e("a",E,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),a(i)])]),_,B,f,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("MAT工具")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[t("弱引用示例")]),_:1})]),e("li",null,[a(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[t("微博关注关系如何实现")]),_:1})]),e("li",null,[a(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:n(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[a(l,{to:"/other/Spring%20RetryTemplate.html"},{default:n(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[a(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[t("Javassist整理")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[a(l,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("分布式问题")]),_:1})]),e("li",null,[a(l,{to:"/intro.html"},{default:n(()=>[t("intro")]),_:1})])]),p,m,g,b])}const T=r(u,[["render",A],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{T as default};
