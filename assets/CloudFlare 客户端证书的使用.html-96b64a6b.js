import{_ as o,$ as n,a0 as s,a1 as e,a3 as t,a4 as r,a2 as l,a5 as d,w as i}from"./framework-b3a0f150.js";const h={},u=e("p",null,"先列个大纲：",-1),E=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：每个人都在愤世疾俗，每个人又都在同流合污。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/31078811/pexels-photo-31078811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Colorful flowers surround a green windmill on a cloudy day in Gwangju, South Korea.",loading:"lazy"})])],-1);function p(x,g){const a=i("RouterLink");return n(),s("div",null,[u,E,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:r(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[t(a,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:r(()=>[l("常见问题")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:r(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[t(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:r(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[t(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:r(()=>[l("高可用通用方案")]),_:1})]),e("li",null,[t(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:r(()=>[l("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:r(()=>[l("Javassist整理")]),_:1})]),e("li",null,[t(a,{to:"/other/JetBrains-License-Server.html"},{default:r(()=>[l("JetBrains-License-Server")]),_:1})]),e("li",null,[t(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:r(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:r(()=>[l("Docker跨主机通信方案")]),_:1})]),e("li",null,[t(a,{to:"/intro.html"},{default:r(()=>[l("intro")]),_:1})])]),f,A,B,m])}const S=o(h,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{S as default};
