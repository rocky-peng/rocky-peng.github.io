import{_ as t,$ as o,a0 as r,a1 as a,a2 as e,a4 as i,a3 as l,w as s}from"./framework-24d1f903.js";const d={},c=l('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),h={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},_=a("p",null,"欢迎各位大佬吐槽",-1),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),p=a("hr",null,null,-1),g=a("hr",null,null,-1),b=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：在最美好的年华，没有遇到爱情，只遇到了疫情。 "),a("br"),a("br"),a("img",{src:"https://api.btstu.cn/sjbz/?lx=dongman&uuid=5af8c641-4ebe-45ab-89f7-c1a2d221e9cd",alt:"",loading:"lazy"})])],-1);function m(f,k){const n=s("ExternalLinkIcon");return o(),r("div",null,[c,a("p",null,[e("github: "),a("a",h,[e("https://github.com/rocky-peng/PasteImageToMarkdown"),i(n)])]),_,u,p,g,b])}const x=t(d,[["render",m],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{x as default};
