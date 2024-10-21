import{_ as o,$ as E,a0 as n,a1 as e,a3 as t,a4 as r,a2 as l,a5 as d,w as i}from"./framework-16d560c6.js";const h={},u=e("p",null,"先列个大纲：",-1),s=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),c=e("p",null,"这里可以参考另外一篇博文：",-1),A=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),f=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：为什么在学校，一上课就想睡觉？因为学校是梦开始的地方。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=3ff4804b-72a9-475b-9e3b-744936c28a9b",alt:"",loading:"lazy"})])],-1);function b(D,C){const a=i("RouterLink");return E(),n("div",null,[u,s,c,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:r(()=>[l("Nginx的双向认证配置")]),_:1})]),A,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:r(()=>[l("Btrace入门")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:r(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[t(a,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:r(()=>[l("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[t(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:r(()=>[l("istio基础知识")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:r(()=>[l("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:r(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:r(()=>[l("ReentrantLock源码解读")]),_:1})]),e("li",null,[t(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:r(()=>[l("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:r(()=>[l("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[t(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:r(()=>[l("Docker跨主机通信方案")]),_:1})]),e("li",null,[t(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:r(()=>[l("Mermaid示例")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:r(()=>[l("杂记")]),_:1})])]),B,_,f,m])}const p=o(h,[["render",b],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{p as default};
