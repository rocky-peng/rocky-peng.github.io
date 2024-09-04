import{_ as o,$ as n,a0 as i,a1 as e,a3 as t,a4 as r,a2 as l,a5 as d,w as h}from"./framework-b6ede5bc.js";const s={},u=e("p",null,"先列个大纲：",-1),E=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：欢迎来到2019，恭喜你进入了新的，扎心的一年。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b8c053b6-1ecd-4741-a02f-93e1c55ba7a3",alt:"",loading:"lazy"})])],-1);function p(x,b){const a=h("RouterLink");return n(),i("div",null,[u,E,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:r(()=>[l("Btrace入门")]),_:1})]),e("li",null,[t(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:r(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[l("MySQL高可用")]),_:1})]),e("li",null,[t(a,{to:"/other/Spring%20RetryTemplate.html"},{default:r(()=>[l("Spring RetryTemplate")]),_:1})]),e("li",null,[t(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:r(()=>[l("istio基础知识")]),_:1})]),e("li",null,[t(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[l("Redis高可用")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:r(()=>[l("分库分表")]),_:1})]),e("li",null,[t(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:r(()=>[l("Paxos算法")]),_:1})]),e("li",null,[t(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:r(()=>[l("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[t(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:r(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[t(a,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:r(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:r(()=>[l("ESRally性能测试步骤")]),_:1})])]),A,f,B,m])}const g=o(s,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{g as default};
