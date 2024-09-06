import{_ as o,$ as d,a0 as n,a1 as e,a3 as t,a4 as r,a2 as l,a5 as s,w as i}from"./framework-b7a22294.js";const h={},u=e("p",null,"先列个大纲：",-1),E=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),f=s('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：你承受的苦难，并不比他人多太多，痛苦主要来自敏感和脆弱。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=30bd0fbb-8007-42bc-a33e-c138f52b06d9",alt:"",loading:"lazy"})])],-1);function p(b,x){const a=i("RouterLink");return d(),n("div",null,[u,E,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),f,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:r(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:r(()=>[l("Docker进行资源隔离")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/NGINX.html"},{default:r(()=>[l("NGINX")]),_:1})]),e("li",null,[t(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:r(()=>[l("Spring框架源码关键点")]),_:1})]),e("li",null,[t(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:r(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[t(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:r(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:r(()=>[l("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:r(()=>[l("SQL优化")]),_:1})]),e("li",null,[t(a,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:r(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:r(()=>[l("分布式事务Seata")]),_:1})]),e("li",null,[t(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:r(()=>[l("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:r(()=>[l("杂记")]),_:1})])]),_,B,A,m])}const F=o(h,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{F as default};
