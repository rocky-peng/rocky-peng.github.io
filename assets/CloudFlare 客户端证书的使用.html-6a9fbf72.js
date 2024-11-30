import{_ as o,$ as E,a0 as n,a1 as e,a3 as t,a4 as r,a2 as l,a5 as d,w as i}from"./framework-b3a0f150.js";const u={},h=e("p",null,"先列个大纲：",-1),s=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),A=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),f=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：所谓的丧，不过是闲到发慌。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=69c279dc-adf7-44c7-948a-c981d61e24dc",alt:"",loading:"lazy"})])],-1);function p(C,D){const a=i("RouterLink");return E(),n("div",null,[h,s,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),A,e("ul",null,[e("li",null,[t(a,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:r(()=>[l("常见问题")]),_:1})]),e("li",null,[t(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:r(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:r(()=>[l("Centos离线安装Docker")]),_:1})]),e("li",null,[t(a,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:r(()=>[l("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:r(()=>[l("异地多活")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:r(()=>[l("推荐几个适用小工具")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("JVM杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("ES杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:r(()=>[l("前后端常用技术")]),_:1})]),e("li",null,[t(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:r(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:r(()=>[l("Linux dev shm目录")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:r(()=>[l("BBR加速")]),_:1})])]),B,_,f,m])}const g=o(u,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{g as default};
