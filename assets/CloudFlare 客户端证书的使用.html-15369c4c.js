import{_ as r,$ as n,a0 as d,a1 as e,a3 as t,a4 as o,a2 as l,a5 as i,w as s}from"./framework-b6ede5bc.js";const u={},E=e("p",null,"先列个大纲：",-1),h=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),f=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),A=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：底线是什么，就算是喜欢的人触犯，也能下狠手。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=eb6b2349-cb73-47bb-850b-5392825d7464",alt:"",loading:"lazy"})])],-1);function b(x,p){const a=s("RouterLink");return n(),d("div",null,[E,h,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),f,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:o(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[t(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[l("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[l("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:o(()=>[l("Javassist整理")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[l("JVM杂项")]),_:1})]),e("li",null,[t(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:o(()=>[l("分布式问题")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:o(()=>[l("杂记")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:o(()=>[l("BBR加速")]),_:1})]),e("li",null,[t(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[l("Linux dev shm目录")]),_:1})])]),_,B,A,m])}const v=r(u,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{v as default};
