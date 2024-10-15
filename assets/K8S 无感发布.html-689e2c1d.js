import{_ as r,$ as i,a0 as s,a1 as l,a3 as o,a4 as a,a5 as d,a2 as t,w as E}from"./framework-16d560c6.js";const n={},u=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),c=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：最烦别人问我工资多少，瞧不起我的方法有很多，为什么偏偏选这一种？ "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=baea403f-6844-47c0-ad2f-6f6f8fbb21dc",alt:"",loading:"lazy"})])],-1);function _(f,A){const e=E("RouterLink");return i(),s("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[t("NGINX")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:a(()=>[t("JVM参数设置")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:a(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[o(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("Redis高可用")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:a(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[o(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[t("Paxos算法")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[t("MySQL索引")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[t("异地多活")]),_:1})]),l("li",null,[o(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("Docker跨主机通信方案")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[o(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("PostgreSQL高可用")]),_:1})])]),h,B,c,p])}const b=r(n,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{b as default};
