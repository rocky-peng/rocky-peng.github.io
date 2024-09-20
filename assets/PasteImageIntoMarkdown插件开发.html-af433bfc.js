import{_ as r,$ as s,a0 as d,a1 as t,a2 as a,a3 as e,a4 as o,a5 as h,w as n}from"./framework-7f25d394.js";const u={},c=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),E={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},f=t("p",null,"欢迎各位大佬吐槽",-1),_=t("br",null,null,-1),m=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),A=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),g=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：每所大学都有一种树，叫高数，树上挂了很多人。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=79f67de3-f947-41b0-bf37-9664e06c6a9f",alt:"",loading:"lazy"})])],-1);function b(w,k){const i=n("ExternalLinkIcon"),l=n("RouterLink");return s(),d("div",null,[c,t("p",null,[a("github: "),t("a",E,[a("https://github.com/rocky-peng/PasteImageToMarkdown"),e(i)])]),f,_,m,t("ul",null,[t("li",null,[e(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[a("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),t("li",null,[e(l,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[a("来个JVM冷知识")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:o(()=>[a("Btrace入门")]),_:1})]),t("li",null,[e(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[a("数组转树形结构只需两步")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[a("kafka")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[a("正则表达式匹配第几个符号问题")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[a("异地多活")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[a("ES杂项")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[a("SQL优化")]),_:1})]),t("li",null,[e(l,{to:"/intro.html"},{default:o(()=>[a("intro")]),_:1})]),t("li",null,[e(l,{to:"/software/raft/sofajraft.html"},{default:o(()=>[a("sofajraft")]),_:1})])]),A,p,g,B])}const x=r(u,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{x as default};
