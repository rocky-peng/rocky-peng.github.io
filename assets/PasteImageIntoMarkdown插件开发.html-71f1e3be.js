import{_ as r,$ as s,a0 as d,a1 as e,a2 as a,a3 as t,a4 as o,a5 as h,w as n}from"./framework-b3a0f150.js";const E={},u=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),c={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"欢迎各位大佬吐槽",-1),f=e("br",null,null,-1),B=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),A=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：既然前程四紧，那就随薪锁欲。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/6769367/pexels-photo-6769367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A couple stands barefoot and face-to-face in a studio, both wearing casual denim outfits.",loading:"lazy"})])],-1);function b(w,x){const i=n("ExternalLinkIcon"),l=n("RouterLink");return s(),d("div",null,[u,e("p",null,[a("github: "),e("a",c,[a("https://github.com/rocky-peng/PasteImageToMarkdown"),t(i)])]),_,f,B,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[a("记一次内存泄漏")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[a("测试两台服务器间的网速")]),_:1})]),e("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[t(l,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[a("SQL优化")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[a("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[a("BBR加速")]),_:1})]),e("li",null,[t(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[a("Linux dev shm目录")]),_:1})])]),m,p,A,g])}const I=r(E,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{I as default};
