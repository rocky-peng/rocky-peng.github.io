import{_ as r,$ as n,a0 as i,a1 as e,a3 as t,a4 as o,a2 as l,a5 as d,w as E}from"./framework-58787b1c.js";const u={},h=e("p",null,"先列个大纲：",-1),c=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),s=e("p",null,"这里可以参考另外一篇博文：",-1),A=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：做人当如咸鸭蛋，闲的冒泡，富的流油。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=f149bee3-ad6e-4dfe-a320-5ee4e598587c",alt:"",loading:"lazy"})])],-1);function x(C,b){const a=E("RouterLink");return n(),i("div",null,[h,c,s,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),A,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Git笔记")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("MAT工具")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[t(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Docker笔记")]),_:1})]),e("li",null,[t(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),e("li",null,[t(a,{to:"/intro.html"},{default:o(()=>[l("intro")]),_:1})]),e("li",null,[t(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:o(()=>[l("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[t(a,{to:"/software/linux/Linux.html"},{default:o(()=>[l("Linux")]),_:1})])]),_,f,B,m])}const D=r(u,[["render",x],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{D as default};
