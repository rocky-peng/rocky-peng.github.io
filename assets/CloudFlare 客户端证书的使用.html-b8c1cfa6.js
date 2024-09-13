import{_ as o,$ as r,a0 as n,a1 as e,a3 as t,a4 as E,a2 as l,a5 as d,w as i}from"./framework-052411f2.js";const u={},A=e("p",null,"先列个大纲：",-1),s=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),h=e("p",null,"这里可以参考另外一篇博文：",-1),c=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),f=e("hr",null,null,-1),_=e("hr",null,null,-1),F=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：都说时间是一把杀猪刀，在你这儿，时间就是猪饲料。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=99c296ef-da58-4038-9b67-66c17b798988",alt:"",loading:"lazy"})])],-1);function b(m,C){const a=i("RouterLink");return r(),n("div",null,[A,s,h,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[l("Nginx的双向认证配置")]),_:1})]),c,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:E(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:E(()=>[l("MAT工具")]),_:1})]),e("li",null,[t(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:E(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:E(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[t(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[l("Redis高可用")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:E(()=>[l("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:E(()=>[l("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:E(()=>[l("Java面试基础")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:E(()=>[l("ReentrantLock源码解读")]),_:1})]),e("li",null,[t(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:E(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[t(a,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:E(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),e("li",null,[t(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:E(()=>[l("Hbase 总览")]),_:1})])]),B,f,_,F])}const x=o(u,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{x as default};
