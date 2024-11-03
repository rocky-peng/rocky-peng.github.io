import{_ as E,$ as r,a0 as h,a1 as t,a2 as e,a3 as l,a4 as n,a5 as s,w as o}from"./framework-16d560c6.js";const d={},u=s('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),c={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},B=t("p",null,"欢迎各位大佬吐槽",-1),_=t("br",null,null,-1),A=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),p=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),f=t("hr",null,null,-1),g=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：从今天开始我不会再洗头，因为我要在跨年的时候，为你下一场雪。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=90f6a2db-483c-4b98-a675-d6cf3439f49c",alt:"",loading:"lazy"})])],-1);function b(F,x){const i=o("ExternalLinkIcon"),a=o("RouterLink");return r(),h("div",null,[u,t("p",null,[e("github: "),t("a",c,[e("https://github.com/rocky-peng/PasteImageToMarkdown"),l(i)])]),B,_,A,t("ul",null,[t("li",null,[l(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[e("微博关注关系如何实现")]),_:1})]),t("li",null,[l(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:n(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),t("li",null,[l(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[e("Spring框架源码关键点")]),_:1})]),t("li",null,[l(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("MongoDB高可用")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),t("li",null,[l(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("数据同步方案")]),_:1})]),t("li",null,[l(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),t("li",null,[l(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[e("简易版配置中心&初探原理")]),_:1})]),t("li",null,[l(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("Java语言完成notion笔记备份")]),_:1})]),t("li",null,[l(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("Nginx的双向认证配置")]),_:1})]),t("li",null,[l(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:n(()=>[e("MySQL数据迁移到PGSQL")]),_:1})]),t("li",null,[l(a,{to:"/software/linux/Linux.html"},{default:n(()=>[e("Linux")]),_:1})])]),p,f,g,m])}const D=E(d,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{D as default};
