import{_ as E,$ as r,a0 as i,a1 as l,a3 as o,a4 as a,a5 as n,a2 as t,w as s}from"./framework-b3a0f150.js";const d={},B=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),h=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：像我这么单纯的人，做不来这么有心机的数学题。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0ae6358f-95c9-47e3-9bdd-340ff84eca01",alt:"",loading:"lazy"})])],-1);function c(_,f){const e=s("RouterLink");return r(),i("div",null,[B,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),l("li",null,[o(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[o(e,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("乱七八糟的笔记")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[o(e,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[t("Cornell Notes System")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[o(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:a(()=>[t("SQL优化")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mq/RocketMQ.html"},{default:a(()=>[t("RocketMQ")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),u,A,h,p])}const C=E(d,[["render",c],["__file","K8S 无感发布.html.vue"]]);export{C as default};
