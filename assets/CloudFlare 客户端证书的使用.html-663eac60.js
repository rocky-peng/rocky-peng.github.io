import{_ as o,$ as n,a0 as d,a1 as e,a3 as t,a4 as r,a2 as l,a5 as i,w as s}from"./framework-b3a0f150.js";const u={},h=e("p",null,"先列个大纲：",-1),E=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),_=i('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),B=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：2020年的不顺已经过去，2021年的即将开始。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/6552208/pexels-photo-6552208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Dramatic aerial view of lush green mountains and a winding road under a cloudy sky.",loading:"lazy"})])],-1);function b(x,p){const a=s("RouterLink");return n(),d("div",null,[h,E,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:r(()=>[l("Redis笔记")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:r(()=>[l("KVM 虚拟机安装")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:r(()=>[l("数组转树形结构只需两步")]),_:1})]),e("li",null,[t(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:r(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:r(()=>[l("Redis高可用")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:r(()=>[l("MySQL索引")]),_:1})]),e("li",null,[t(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:r(()=>[l("Git Merge 、Rebase")]),_:1})]),e("li",null,[t(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:r(()=>[l("ES杂项")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:r(()=>[l("Markdown软件比对")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:r(()=>[l("ReentrantLock源码解读")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:r(()=>[l("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:r(()=>[l("BBR加速")]),_:1})])]),f,A,B,m])}const g=o(u,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{g as default};
