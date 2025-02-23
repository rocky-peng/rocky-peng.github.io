import{_ as o,$ as n,a0 as i,a1 as e,a3 as a,a4 as r,a2 as l,a5 as d,w as E}from"./framework-b3a0f150.js";const h={},u=e("p",null,"先列个大纲：",-1),s=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),B=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),A=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：追我吧，追到我，我给你开追到会。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=45ad97f3-efe1-44c2-89ff-1885c05e36f5",alt:"",loading:"lazy"})])],-1);function m(F,x){const t=E("RouterLink");return n(),i("div",null,[u,s,c,e("p",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),B,e("ul",null,[e("li",null,[a(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:r(()=>[l("Redis笔记")]),_:1})]),e("li",null,[a(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:r(()=>[l("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:r(()=>[l("NGINX")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:r(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[a(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:r(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:r(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:r(()=>[l("如何安装Google BBR")]),_:1})]),e("li",null,[a(t,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:r(()=>[l("istio基础知识")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:r(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[a(t,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[a(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:r(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[a(t,{to:"/intro.html"},{default:r(()=>[l("intro")]),_:1})])]),_,f,A,p])}const b=o(h,[["render",m],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{b as default};
