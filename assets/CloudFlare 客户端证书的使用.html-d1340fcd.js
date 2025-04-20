import{_ as o,$ as n,a0 as s,a1 as e,a3 as a,a4 as r,a2 as l,a5 as h,w as d}from"./framework-b3a0f150.js";const i={},u=e("p",null,"先列个大纲：",-1),E=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=h('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),p=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：如果多年以后你未嫁我未娶，那么咱俩，也真够完犊子的了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Modern interior of an art gallery in Tokyo, Japan, showcasing stunning architectural design.",loading:"lazy"})])],-1);function B(g,x){const t=d("RouterLink");return n(),s("div",null,[u,E,c,e("p",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[a(t,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:r(()=>[l("常见问题")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%9C%A8%E6%B2%A1%E6%9C%89%20telnet%20%E5%92%8C%20nc%20%E7%9A%84%E4%B8%96%E7%95%8C%E9%87%8C%EF%BC%8C%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E5%9C%B0%E5%88%A4%E6%96%AD%E7%AB%AF%E5%8F%A3%E6%98%AF%E5%90%A6%E9%80%9A%EF%BC%9F.html"},{default:r(()=>[l("在没有 telnet 和 nc 的世界里，如何优雅地判断端口是否通？")]),_:1})]),e("li",null,[a(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:r(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(t,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:r(()=>[l("K8S 无感发布")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:r(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:r(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:r(()=>[l("Paxos算法")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:r(()=>[l("简易版配置中心&初探原理")]),_:1})]),e("li",null,[a(t,{to:"/other/JetBrains-License-Server.html"},{default:r(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:r(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(t,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[l("PostgreSQL高可用")]),_:1})]),e("li",null,[a(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:r(()=>[l("raft协议")]),_:1})])]),f,A,p,m])}const b=o(i,[["render",B],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{b as default};
