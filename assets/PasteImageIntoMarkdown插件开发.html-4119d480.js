import{_ as i,$ as E,a0 as s,a1 as t,a2 as a,a3 as e,a4 as o,a5 as h,w as n}from"./framework-58787b1c.js";const d={},c=h('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>由于这段时间需要经常使用markdown写一些文档， 本来之前用过其他软件，但是总有点不是那么顺手。于是开始尝试使用idea写，写完后可以很方便的提交到仓库。 于是找了半天找到了插件叫Paste Image Into Markdown. 但这个插件只能支持吧图片保存到一个相对路径， 于是接着网上搜索，也找到一个能把图片上传到七牛云的，但貌似很久没维护现在已经不能用了，于是干脆自己动手了。</p><p>写完后我找到了Paste Image Into Markdown插件的github仓库，本想提交上去，但提交上去后，仓库作者迟迟即不 接受也不拒绝，回复我说那个仓库是他的一个爱好，让我耐心等，于是干脆自己上传了。</p><h2 id="功能增强" tabindex="-1"><a class="header-anchor" href="#功能增强" aria-hidden="true">#</a> 功能增强</h2><p>在那个仓库的基础上我进行了一些功能修改，主要有以下几点：</p><ol><li>支持把图片上传到七牛云（原仓库不支持）</li><li>支持把图片保存到工程相对路径（原仓库也有，做了一些修改）</li><li>支持一次性粘贴多张磁盘图片，包括gif图片（原仓库支持粘贴单张磁盘图片样，但有bug）</li><li>把设置选项统一集成在了idea的设置里</li></ol><p>下面有时间要做的是支持：</p><ol><li>阿里云存储</li><li>腾讯云存储</li></ol><h2 id="插件名称" tabindex="-1"><a class="header-anchor" href="#插件名称" aria-hidden="true">#</a> 插件名称</h2><p>新的插件名称和原插件名称一幕一样，只是没有空格(😂)，叫：PasteImageIntoMarkdown</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080060089.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件仓库" tabindex="-1"><a class="header-anchor" href="#插件仓库" aria-hidden="true">#</a> 插件仓库</h2>',12),u={href:"https://github.com/rocky-peng/PasteImageToMarkdown/",target:"_blank",rel:"noopener noreferrer"},B=t("p",null,"欢迎各位大佬吐槽",-1),A=t("br",null,null,-1),_=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),a(" 系统推荐")],-1),p=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),g=t("hr",null,null,-1),f=t("hr",null,null,-1),m=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),a("：马上就要当学长了，可是学的不行，长得也不行。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e5a5909c-c004-4c41-94d9-8b0a5a9b9523",alt:"",loading:"lazy"})])],-1);function b(F,C){const r=n("ExternalLinkIcon"),l=n("RouterLink");return E(),s("div",null,[c,t("p",null,[a("github: "),t("a",u,[a("https://github.com/rocky-peng/PasteImageToMarkdown"),e(r)])]),B,A,_,t("ul",null,[t("li",null,[e(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[a("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),t("li",null,[e(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[e(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:o(()=>[a("Spring框架源码关键点")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:o(()=>[a("常用队列")]),_:1})]),t("li",null,[e(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[a("Docker笔记")]),_:1})]),t("li",null,[e(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[a("Paxos算法")]),_:1})]),t("li",null,[e(l,{to:"/software/unclassified/gperftools.html"},{default:o(()=>[a("gperftools")]),_:1})]),t("li",null,[e(l,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),t("li",null,[e(l,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:o(()=>[a("MySQL三大日志")]),_:1})]),t("li",null,[e(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),t("li",null,[e(l,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[a("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[e(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:o(()=>[a("MySQL数据迁移到PGSQL")]),_:1})])]),p,g,f,m])}const w=i(d,[["render",b],["__file","PasteImageIntoMarkdown插件开发.html.vue"]]);export{w as default};
