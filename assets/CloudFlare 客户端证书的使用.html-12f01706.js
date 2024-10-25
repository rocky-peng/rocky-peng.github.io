import{_ as o,$ as n,a0 as d,a1 as e,a3 as t,a4 as r,a2 as l,a5 as u,w as E}from"./framework-16d560c6.js";const h={},i=e("p",null,"先列个大纲：",-1),c=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),s=e("p",null,"这里可以参考另外一篇博文：",-1),f=u('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：我从来不会脑残地，在网上晒自己买的名牌，因为我买不起。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=bf2afca6-111f-4dc2-b958-e65bf161f5ed",alt:"",loading:"lazy"})])],-1);function x(F,b){const a=E("RouterLink");return n(),d("div",null,[i,c,s,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),f,e("ul",null,[e("li",null,[t(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:r(()=>[l("JVM参数设置")]),_:1})]),e("li",null,[t(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:r(()=>[l("随记")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:r(()=>[l("提取Docker镜像中的文件")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:r(()=>[l("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[t(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:r(()=>[l("ShadowsockServer")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:r(()=>[l("线上FullGC频繁的排查")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("index方法压力测试记录")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:r(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[t(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:r(()=>[l("CountDownLatch源码解读")]),_:1})]),e("li",null,[t(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:r(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[t(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:r(()=>[l("raft协议")]),_:1})])]),_,A,B,m])}const w=o(h,[["render",x],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{w as default};
