import{_ as r,$ as i,a0 as d,a1 as t,a3 as o,a4 as a,a5 as s,a2 as l,w as n}from"./framework-16d560c6.js";const E={},u=s('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),p=t("hr",null,null,-1),c=t("hr",null,null,-1),A=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),l("：世间很多事随着时间流逝，终究会变好的，比如你的胖终会变成好胖。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=bba57b96-0d20-4ab5-840f-bd86b8697a8c",alt:"",loading:"lazy"})])],-1);function _(B,f){const e=n("RouterLink");return i(),d("div",null,[u,t("ul",null,[t("li",null,[o(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[l("Git笔记")]),_:1})]),t("li",null,[o(e,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[l("记一次内存泄漏")]),_:1})]),t("li",null,[o(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:a(()=>[l("JVM垃圾收集器")]),_:1})]),t("li",null,[o(e,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[l("来个JVM冷知识")]),_:1})]),t("li",null,[o(e,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[l("Spring RetryTemplate")]),_:1})]),t("li",null,[o(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:a(()=>[l("你真的会拼接字符串吗？")]),_:1})]),t("li",null,[o(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[l("ShadowsockServerUpdatePort")]),_:1})]),t("li",null,[o(e,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[l("Centos离线安装Docker")]),_:1})]),t("li",null,[o(e,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[l("JVM异常处理")]),_:1})]),t("li",null,[o(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[l("AQS源码解读")]),_:1})]),t("li",null,[o(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[l("GitHub Workflow突然报错")]),_:1})]),t("li",null,[o(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[l("随机图片在线接口")]),_:1})])]),h,p,c,A])}const b=r(E,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{b as default};
