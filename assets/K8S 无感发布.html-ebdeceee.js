import{_ as r,$ as s,a0 as i,a1 as l,a3 as t,a4 as a,a5 as n,a2 as o,w as E}from"./framework-b3a0f150.js";const d={},h=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),A=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),o("：我登过最高的峰，叫早高峰。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/9212718/pexels-photo-9212718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Aerial shot of a solitary figure on a vast snowy field in Harbin, China, capturing winter's stark beauty.",loading:"lazy"})])],-1);function B(_,f){const e=E("RouterLink");return s(),i("div",null,[h,l("ul",null,[l("li",null,[t(e,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[o("MyBatis")]),_:1})]),l("li",null,[t(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[o("MySQL高可用")]),_:1})]),l("li",null,[t(e,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[o("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[t(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[o("Redis高可用")]),_:1})]),l("li",null,[t(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:a(()=>[o("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[t(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[o("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[t(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[o("ShadowsockServer配置")]),_:1})]),l("li",null,[t(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[o("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[t(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[o("Nginx的双向认证配置")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[o("分布式问题")]),_:1})]),l("li",null,[t(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:a(()=>[o("WebSocket SpringBoot Demo")]),_:1})]),l("li",null,[t(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[o("K8S常用命令")]),_:1})])]),u,c,A,p])}const k=r(d,[["render",B],["__file","K8S 无感发布.html.vue"]]);export{k as default};
