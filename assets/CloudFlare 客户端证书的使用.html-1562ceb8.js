import{_ as r,$ as o,a0 as d,a1 as l,a3 as t,a4 as E,a2 as e,a5 as n,w as i}from"./framework-58787b1c.js";const s={},u=l("p",null,"先列个大纲：",-1),h=l("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),e(" 抛开cloudflare配置nginx的双向认证")],-1),c=l("p",null,"这里可以参考另外一篇博文：",-1),B=n('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),_=l("hr",null,null,-1),f=l("hr",null,null,-1),D=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：我的脑子，和蝙蝠的眼睛原理相同，有但没啥用。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b73b394c-74b2-4a96-a074-856b3c6bab58",alt:"",loading:"lazy"})])],-1);function m(b,F){const a=i("RouterLink");return o(),d("div",null,[u,h,c,l("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[e("Nginx的双向认证配置")]),_:1})]),B,l("ul",null,[l("li",null,[t(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:E(()=>[e("KVM 虚拟机安装")]),_:1})]),l("li",null,[t(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[e("Redis笔记")]),_:1})]),l("li",null,[t(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:E(()=>[e("Docker进行资源隔离")]),_:1})]),l("li",null,[t(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:E(()=>[e("随记")]),_:1})]),l("li",null,[t(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:E(()=>[e("数组转树形结构只需两步")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[e("乱七八糟的笔记")]),_:1})]),l("li",null,[t(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[e("Redis高可用")]),_:1})]),l("li",null,[t(a,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:E(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:E(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[t(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:E(()=>[e("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:E(()=>[e("Markdown软件比对")]),_:1})]),l("li",null,[t(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:E(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})])]),A,_,f,D])}const p=r(s,[["render",m],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{p as default};
