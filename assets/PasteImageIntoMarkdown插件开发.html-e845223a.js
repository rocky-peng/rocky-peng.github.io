import{_ as s,$ as r,a0 as d,a1 as a,a2 as t,a3 as e,a4 as n,a5 as h,w as o}from"./framework-b3a0f150.js";const u={},E=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),c={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},f=a("p",null,"欢迎各位大佬吐槽",-1),_=a("br",null,null,-1),p=a("h2",{id:"系统推荐",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),g=a("hr",null,null,-1),m=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),t("：我们用几年的时间学会讲话，却要用一辈子的时间，学会闭嘴。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e3dafd40-0178-4ca5-987d-9f308f362aad",alt:"",loading:"lazy"})])],-1);function b(k,w){const i=o("ExternalLinkIcon"),l=o("RouterLink");return r(),d("div",null,[E,a("p",null,[t("github: "),a("a",c,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),e(i)])]),f,_,p,a("ul",null,[a("li",null,[e(l,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[t("MyBatis")]),_:1})]),a("li",null,[e(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("MAT工具")]),_:1})]),a("li",null,[e(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[e(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("常见问题")]),_:1})]),a("li",null,[e(l,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),a("li",null,[e(l,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),a("li",null,[e(l,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[t("kafka")]),_:1})]),a("li",null,[e(l,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[e(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),a("li",null,[e(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("制作KVM ES镜像文件")]),_:1})]),a("li",null,[e(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[t("简易版配置中心&初探原理")]),_:1})]),a("li",null,[e(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:n(()=>[t("Java面试基础")]),_:1})])]),A,g,m,B])}const P=s(u,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{P as default};
