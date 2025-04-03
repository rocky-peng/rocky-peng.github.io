import{_ as r,$ as n,a0 as d,a1 as e,a3 as t,a4 as o,a2 as l,a5 as i,w as s}from"./framework-b3a0f150.js";const u={},h=e("p",null,"先列个大纲：",-1),c=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),E=e("p",null,"这里可以参考另外一篇博文：",-1),f=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：不要去追一匹马，用追马的时间种草，来年春天会有一批骏马到来。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"現代美術館",loading:"lazy"})])],-1);function x(p,w){const a=s("RouterLink");return n(),d("div",null,[h,c,E,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),f,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("MAT工具")]),_:1})]),e("li",null,[t(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:o(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/NGINX.html"},{default:o(()=>[l("NGINX")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[l("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[l("提取Docker镜像中的文件")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[l("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[t(a,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[l("MAC CMS")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[l("MySQL索引")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("CountDownLatch源码解读")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[l("Markdown软件比对")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[t(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("Mermaid示例")]),_:1})])]),B,_,A,m])}const C=r(u,[["render",x],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{C as default};
