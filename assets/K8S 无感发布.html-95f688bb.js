import{_ as E,$ as r,a0 as i,a1 as t,a3 as a,a4 as o,a5 as d,a2 as l,w as s}from"./framework-b3a0f150.js";const n={},u=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),A=t("hr",null,null,-1),c=t("hr",null,null,-1),B=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：钱不是万能的，这句话得有钱之后，才知道是不是对的。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7be2c587-301f-43af-83d1-b38ffcf647dc",alt:"",loading:"lazy"})])],-1);function p(_,f){const e=s("RouterLink");return r(),i("div",null,[u,t("ul",null,[t("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[l("Notion笔记定时备份")]),_:1})]),t("li",null,[a(e,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[l("RSA 加密解密多语言实现方案")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[l("Redis笔记")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[l("synchronized原理深度剖析")]),_:1})]),t("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:o(()=>[l("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[l("MySQL索引")]),_:1})]),t("li",null,[a(e,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[a(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[l("Git Merge 、Rebase")]),_:1})]),t("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:o(()=>[l("分布式事务Seata")]),_:1})]),t("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[a(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[l("Mermaid示例")]),_:1})]),t("li",null,[a(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[l("raft协议")]),_:1})])]),h,A,c,B])}const b=E(n,[["render",p],["__file","K8S 无感发布.html.vue"]]);export{b as default};
