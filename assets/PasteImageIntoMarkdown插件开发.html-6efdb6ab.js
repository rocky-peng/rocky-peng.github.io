import{_ as r,$ as s,a0 as d,a1 as e,a2 as t,a3 as a,a4 as n,a5 as E,w as o}from"./framework-58787b1c.js";const h={},u=E('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),c={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"欢迎各位大佬吐槽",-1),B=e("br",null,null,-1),f=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),A=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：钥匙圈是非常实用的小工具，它可以让你，一次把所有钥匙都丢光。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4d34825a-1e5f-4c5d-8b47-cc274db880bf",alt:"",loading:"lazy"})])],-1);function b(w,k){const i=o("ExternalLinkIcon"),l=o("RouterLink");return s(),d("div",null,[u,e("p",null,[t("github: "),e("a",c,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),a(i)])]),_,B,f,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Git笔记")]),_:1})]),e("li",null,[a(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:n(()=>[t("JVM垃圾收集器")]),_:1})]),e("li",null,[a(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[a(l,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("MySQL高可用")]),_:1})]),e("li",null,[a(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[t("JVM参数设置")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[a(l,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:n(()=>[t("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[t("SQL优化")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:n(()=>[t("分布式事务Seata")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:n(()=>[t("Java面试基础")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[t("BBR加速")]),_:1})])]),m,p,A,g])}const x=r(h,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{x as default};
