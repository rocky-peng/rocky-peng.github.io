import{_ as i,$ as s,a0 as d,a1 as e,a2 as t,a3 as a,a4 as o,a5 as h,w as n}from"./framework-b3a0f150.js";const c={},u=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),_={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"欢迎各位大佬吐槽",-1),f=e("br",null,null,-1),p=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),B=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：喜欢的东西太贵了，我一咬牙，决定不喜欢了。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e7e063ce-1ecf-443c-9906-3e44c109438f",alt:"",loading:"lazy"})])],-1);function A(k,w){const r=n("ExternalLinkIcon"),l=n("RouterLink");return s(),d("div",null,[u,e("p",null,[t("github: "),e("a",_,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),a(r)])]),E,f,p,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[a(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mq/kafka.html"},{default:o(()=>[t("kafka")]),_:1})]),e("li",null,[a(l,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:o(()=>[t("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[a(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("数据同步方案")]),_:1})]),e("li",null,[a(l,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[t("MAC CMS")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:o(()=>[t("分库分表")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[t("gperftools")]),_:1})]),e("li",null,[a(l,{to:"/other/JetBrains-License-Server.html"},{default:o(()=>[t("JetBrains-License-Server")]),_:1})]),e("li",null,[a(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("JVM杂项")]),_:1})]),e("li",null,[a(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:o(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[a(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[t("MySQL数据迁移到PGSQL")]),_:1})])]),m,g,B,b])}const M=i(c,[["render",A],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{M as default};
