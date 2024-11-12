import{_ as r,$ as i,a0 as s,a1 as l,a3 as o,a4 as a,a5 as d,a2 as t,w as n}from"./framework-16d560c6.js";const u={},h=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),E=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),p=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：落后就要挨打，这事是真的，不信你考倒数第一回家试试。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0830a02f-4217-41fa-a5cd-777e4233f6f5",alt:"",loading:"lazy"})])],-1);function B(_,m){const e=n("RouterLink");return i(),s("div",null,[h,l("ul",null,[l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[t("MySQL常用命令")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:a(()=>[t("synchronized原理深度剖析")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[o(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("Redis高可用")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[o(e,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:a(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[o(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("ES杂项")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[o(e,{to:"/software/raft/sofajraft.html"},{default:a(()=>[t("sofajraft")]),_:1})])]),E,c,p,f])}const x=r(u,[["render",B],["__file","K8S 无感发布.html.vue"]]);export{x as default};
