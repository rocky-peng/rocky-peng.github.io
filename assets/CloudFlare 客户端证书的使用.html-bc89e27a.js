import{_ as o,$ as n,a0 as d,a1 as e,a3 as t,a4 as r,a2 as l,a5 as i,w as s}from"./framework-b3a0f150.js";const u={},E=e("p",null,"先列个大纲：",-1),h=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),f=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：生活有两大误区，一是活给别人看，二是看别人活。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=043e4669-d0bf-48b0-afa3-ae4e1e10678e",alt:"",loading:"lazy"})])],-1);function p(S,b){const a=s("RouterLink");return n(),d("div",null,[E,h,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),f,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:r(()=>[l("记一次内存泄漏")]),_:1})]),e("li",null,[t(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:r(()=>[l("Spring框架源码关键点")]),_:1})]),e("li",null,[t(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[l("MongoDB高可用")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:r(()=>[l("KVM方式集群部署ES")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:r(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[t(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:r(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:r(()=>[l("异地多活")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:r(()=>[l("AQS源码解读")]),_:1})]),e("li",null,[t(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("ShadowsockServer配置")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:r(()=>[l("MySQL三大日志")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("ES杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:r(()=>[l("RocketMQ")]),_:1})])]),_,B,A,m])}const g=o(u,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{g as default};
