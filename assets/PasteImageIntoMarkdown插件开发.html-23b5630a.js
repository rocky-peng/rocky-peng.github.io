import{_ as i,$ as s,a0 as d,a1 as e,a2 as a,a3 as t,a4 as o,a5 as h,w as r}from"./framework-3895bb24.js";const c={},u=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),_={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"欢迎各位大佬吐槽",-1),p=e("br",null,null,-1),f=e("br",null,null,-1),m=e("li",null,"[PGSQL GIN索引“失效”](../../other/PGSQL GIN索引“失效”.md)",-1),g=e("li",null,"[不重启 JVM，如何替换掉已经加载的类？](../java-basic/不重启 JVM，如何替换掉已经加载的类？.md)",-1),b={href:"http://xn--yfrq2b7zsrkndid5y6d.md",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),k=e("hr",null,null,-1),I=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：只要坚持不走出舒适圈，你就能一直舒适下去。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=6ca62258-8a9c-4f19-9db2-eb0092b6e6d2",alt:"",loading:"lazy"})])],-1);function w(x,y){const l=r("ExternalLinkIcon"),n=r("RouterLink");return s(),d("div",null,[u,e("p",null,[a("github: "),e("a",_,[a("https://github.com/rocky-peng/PasteImageToMarkdown"),t(l)])]),E,p,f,a(" ## 系统推荐 "),e("ul",null,[e("li",null,[t(n,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[a("synchronized原理深度剖析")]),_:1})]),m,e("li",null,[t(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[a("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[t(n,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[a("常用队列")]),_:1})]),g,e("li",null,[t(n,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[a("ReentrantLock源码解读")]),_:1})]),e("li",null,[a("[vuepress-theme-hope 添加谷歌广告](../../other/vuepress-theme-hope "),e("a",b,[a("添加谷歌广告.md"),t(l)]),a(")")]),e("li",null,[t(n,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:o(()=>[a("随机图片在线接口")]),_:1})])]),A,B,k,I])}const C=i(c,[["render",w],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{C as default};
