import{_ as n,$ as o,a0 as d,a1 as e,a3 as t,a4 as r,a2 as l,a5 as i,w as u}from"./framework-052411f2.js";const E={},h=e("p",null,"先列个大纲：",-1),s=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：美貌会消逝，但蠢是永恒的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4b782866-b83e-46dc-a1d7-3c29c6163e52",alt:"",loading:"lazy"})])],-1);function b(x,p){const a=u("RouterLink");return o(),d("div",null,[h,s,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:r(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:r(()=>[l("KVM方式集群部署ES")]),_:1})]),e("li",null,[t(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:r(()=>[l("K8S 无感发布")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mq/kafka.html"},{default:r(()=>[l("kafka")]),_:1})]),e("li",null,[t(a,{to:"/software/maccms/MAC%20CMS.html"},{default:r(()=>[l("MAC CMS")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:r(()=>[l("InnoDB存储引擎")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:r(()=>[l("推荐几个适用小工具")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:r(()=>[l("MySQL三大日志")]),_:1})]),e("li",null,[t(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:r(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:r(()=>[l("前后端常用技术")]),_:1})]),e("li",null,[t(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:r(()=>[l("MySQL数据迁移到PGSQL")]),_:1})])]),f,B,A,m])}const g=n(E,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{g as default};
