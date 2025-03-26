import{_ as r,$ as E,a0 as n,a1 as e,a3 as a,a4 as o,a2 as l,a5 as d,w as s}from"./framework-b3a0f150.js";const h={},i=e("p",null,"先列个大纲：",-1),u=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),B=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),f=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：晚上的我觉得自己了不起，早上的我觉得自己起不了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/6552208/pexels-photo-6552208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Dramatic aerial view of lush green mountains and a winding road under a cloudy sky.",loading:"lazy"})])],-1);function p(x,D){const t=s("RouterLink");return E(),n("div",null,[i,u,c,e("p",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),B,e("ul",null,[e("li",null,[a(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[l("Cornell Notes System")]),_:1})]),e("li",null,[a(t,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:o(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[a(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[l("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[a(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("AQS源码解读")]),_:1})]),e("li",null,[a(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[a(t,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:o(()=>[l("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[a(t,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[l("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[a(t,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[l("Git历史记录修改用户名和邮箱")]),_:1})]),e("li",null,[a(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),e("li",null,[a(t,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:o(()=>[l("https和http混用解决办法")]),_:1})]),e("li",null,[a(t,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[l("K8S常用命令")]),_:1})])]),A,_,f,m])}const b=r(h,[["render",p],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{b as default};
