import{_ as a,$ as r,a0 as n,a1 as l,a3 as o,a4 as E,a5 as s,a2 as t,w as i}from"./framework-b3a0f150.js";const u={},d=s('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),h=l("hr",null,null,-1),c=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：有什么不开心就睡一觉，没什么是睡一觉不能解决的，如果有那就再睡个回笼觉。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/31078811/pexels-photo-31078811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Colorful flowers surround a green windmill on a cloudy day in Gwangju, South Korea.",loading:"lazy"})])],-1);function p(_,f){const e=i("RouterLink");return r(),n("div",null,[d,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[t("Git笔记")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:E(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[o(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:E(()=>[t("来个JVM冷知识")]),_:1})]),l("li",null,[o(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:E(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:E(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:E(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[o(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:E(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[o(e,{to:"/other/JetBrains-License-Server.html"},{default:E(()=>[t("JetBrains-License-Server")]),_:1})]),l("li",null,[o(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[t("Nginx的双向认证配置")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:E(()=>[t("前后端常用技术")]),_:1})]),l("li",null,[o(e,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:E(()=>[t("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:E(()=>[t("ESRally性能测试步骤")]),_:1})])]),A,B,h,c])}const F=a(u,[["render",p],["__file","K8S 无感发布.html.vue"]]);export{F as default};
