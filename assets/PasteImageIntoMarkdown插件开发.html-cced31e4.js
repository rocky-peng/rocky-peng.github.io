import{_ as i,$ as s,a0 as E,a1 as e,a2 as t,a3 as a,a4 as o,a5 as d,w as n}from"./framework-b3a0f150.js";const h={},c=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),u={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"欢迎各位大佬吐槽",-1),_=e("br",null,null,-1),A=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),f=e("hr",null,null,-1),g=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：淡泊名利说的好听，没有名利，哪有淡泊。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=74a181e5-ce0f-4a82-86ae-932002400b16",alt:"",loading:"lazy"})])],-1);function b(k,w){const r=n("ExternalLinkIcon"),l=n("RouterLink");return s(),E("div",null,[c,e("p",null,[t("github: "),e("a",u,[t("https://github.com/rocky-peng/PasteImageToMarkdown"),a(r)])]),B,_,A,e("ul",null,[e("li",null,[a(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[a(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[t("数组转树形结构只需两步")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[t("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[a(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[t("Hadoop 一")]),_:1})]),e("li",null,[a(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("数据同步方案")]),_:1})]),e("li",null,[a(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[t("Paxos算法")]),_:1})]),e("li",null,[a(l,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("推荐几个适用小工具")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[t("异地多活")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("CountDownLatch源码解读")]),_:1})]),e("li",null,[a(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})])]),m,p,f,g])}const I=i(h,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{I as default};
