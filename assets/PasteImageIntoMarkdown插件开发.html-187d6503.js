import{_ as i,$ as s,a0 as d,a1 as e,a2 as t,a3 as a,a4 as o,a5 as h,w as n}from"./framework-b3a0f150.js";const c={},u=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),E={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"欢迎各位大佬吐槽",-1),f=e("br",null,null,-1),m=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),g=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：太阳别再晒黑我了，晒黑爸爸妈妈的头发吧。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b6472e97-b346-4d14-a62f-b58ed50fd505",alt:"",loading:"lazy"})])],-1);function b(k,w){const r=n("ExternalLinkIcon"),l=n("RouterLink");return s(),d("div",null,[u,e("p",null,[t("github: "),e("a",E,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),a(r)])]),_,f,m,e("ul",null,[e("li",null,[a(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[a(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:o(()=>[t("常见问题")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[t("KVM 虚拟机安装")]),_:1})]),e("li",null,[a(l,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[t("JetBrains IDE 全破解")]),_:1})]),e("li",null,[a(l,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[t("Cornell Notes System")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[t("IO相关")]),_:1})]),e("li",null,[a(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[a(l,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:o(()=>[t("JVM异常处理")]),_:1})]),e("li",null,[a(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[t("RocketMQ")]),_:1})])]),p,B,g,A])}const I=i(c,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{I as default};
