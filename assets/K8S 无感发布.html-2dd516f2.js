import{_ as E,$ as n,a0 as r,a1 as t,a3 as a,a4 as e,a5 as i,a2 as l,w as B}from"./framework-b3a0f150.js";const d={},s=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),A=t("hr",null,null,-1),h=t("hr",null,null,-1),c=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：平时看书是因为有求知欲，考前看书是因为有求生欲。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=dc7a0c10-34a8-4d30-830b-4ab7018c2afd",alt:"",loading:"lazy"})])],-1);function p(_,f){const o=B("RouterLink");return n(),r("div",null,[s,t("ul",null,[t("li",null,[a(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:e(()=>[l("Git合并多个提交并push到远程仓库")]),_:1})]),t("li",null,[a(o,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:e(()=>[l("Docker进行资源隔离")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:e(()=>[l("各种网关性能测试")]),_:1})]),t("li",null,[a(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:e(()=>[l("随记")]),_:1})]),t("li",null,[a(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[l("MongoDB高可用")]),_:1})]),t("li",null,[a(o,{to:"/software/middleware/mq/kafka.html"},{default:e(()=>[l("kafka")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:e(()=>[l("多台centos服务器，文件互相备份")]),_:1})]),t("li",null,[a(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[l("CountDownLatch源码解读")]),_:1})]),t("li",null,[a(o,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:e(()=>[l("Markdown软件比对")]),_:1})]),t("li",null,[a(o,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:e(()=>[l("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),t("li",null,[a(o,{to:"/intro.html"},{default:e(()=>[l("intro")]),_:1})]),t("li",null,[a(o,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:e(()=>[l("raft协议")]),_:1})])]),u,A,h,c])}const F=E(d,[["render",p],["__file","K8S 无感发布.html.vue"]]);export{F as default};
