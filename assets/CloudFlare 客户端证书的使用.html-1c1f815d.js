import{_ as o,$ as n,a0 as r,a1 as l,a3 as t,a4 as E,a2 as e,a5 as d,w as s}from"./framework-16d560c6.js";const i={},u=l("p",null,"先列个大纲：",-1),h=l("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),e(" 抛开cloudflare配置nginx的双向认证")],-1),c=l("p",null,"这里可以参考另外一篇博文：",-1),A=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),_=l("hr",null,null,-1),B=l("hr",null,null,-1),m=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：你把所有不一定，都变成了一定不。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=640985cc-6812-4ff4-96b0-fe78e84bf550",alt:"",loading:"lazy"})])],-1);function b(C,F){const a=s("RouterLink");return n(),r("div",null,[u,h,c,l("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[e("Nginx的双向认证配置")]),_:1})]),A,l("ul",null,[l("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:E(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[t(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:E(()=>[e("弱引用示例")]),_:1})]),l("li",null,[t(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:E(()=>[e("随记")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:E(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:E(()=>[e("线上FullGC频繁的排查")]),_:1})]),l("li",null,[t(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:E(()=>[e("高可用通用方案")]),_:1})]),l("li",null,[t(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:E(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:E(()=>[e("MySQL三大日志")]),_:1})]),l("li",null,[t(a,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:E(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[t(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:E(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:E(()=>[e("分布式问题")]),_:1})]),l("li",null,[t(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:E(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),f,_,B,m])}const x=o(i,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{x as default};
