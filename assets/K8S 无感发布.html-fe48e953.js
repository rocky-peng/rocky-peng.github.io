import{_ as r,$ as s,a0 as i,a1 as l,a3 as o,a4 as a,a5 as d,a2 as t,w as E}from"./framework-16d560c6.js";const n={},u=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),B=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：朋友失败你难过，朋友成功，你更难过。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=61d76889-7481-4a43-a511-81e04e808fb7",alt:"",loading:"lazy"})])],-1);function _(A,f){const e=E("RouterLink");return s(),i("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[t("MyBatis")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[t("MySQL常用命令")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Redis笔记")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[t("synchronized原理深度剖析")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[o(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[o(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:a(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[o(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:a(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[o(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[t("Mermaid示例")]),_:1})]),l("li",null,[o(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[o(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[t("K8S常用命令")]),_:1})])]),h,c,B,p])}const b=r(n,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{b as default};
