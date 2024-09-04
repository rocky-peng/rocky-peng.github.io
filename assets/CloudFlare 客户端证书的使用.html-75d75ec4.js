import{_ as d,$ as o,a0 as n,a1 as e,a3 as t,a4 as r,a2 as l,a5 as i,w as s}from"./framework-b6ede5bc.js";const E={},u=e("p",null,"先列个大纲：",-1),h=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),m=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：经常性失落，间接性崩溃，习惯性治愈。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eec10e0a-850f-4e52-8748-c7875b7673ac",alt:"",loading:"lazy"})])],-1);function p(S,x){const a=s("RouterLink");return o(),n("div",null,[u,h,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("MySQL杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:r(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:r(()=>[l("Redis笔记")]),_:1})]),e("li",null,[t(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:r(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:r(()=>[l("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[t(a,{to:"/other/Cornell%20Notes%20System.html"},{default:r(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:r(()=>[l("简易版配置中心&初探原理")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("JVM杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:r(()=>[l("MySQL三大日志")]),_:1})]),e("li",null,[t(a,{to:"/other/JetBrains-License-Server.html"},{default:r(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("ES杂项")]),_:1})]),e("li",null,[t(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:r(()=>[l("K8S常用命令")]),_:1})])]),f,B,m,A])}const w=d(E,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{w as default};
