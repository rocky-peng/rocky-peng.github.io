import{_ as r,$ as s,a0 as d,a1 as l,a3 as o,a4 as a,a5 as n,a2 as t,w as i}from"./framework-b6ede5bc.js";const E={},u=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),B=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：这世上一半的冷漠，都可能是因为近视。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=f4dfc177-8a57-4d9e-a0ae-9b65d496abe3",alt:"",loading:"lazy"})])],-1);function _(f,A){const e=i("RouterLink");return s(),d("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:a(()=>[t("Docker进行资源隔离")]),_:1})]),l("li",null,[o(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:a(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[t("IO相关")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[t("如何安装Google BBR")]),_:1})]),l("li",null,[o(e,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[o(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:a(()=>[t("你真的会拼接字符串吗？")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[o(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[t("raft协议")]),_:1})])]),h,c,B,p])}const b=r(E,[["render",_],["__file","K8S 无感发布.html.vue"]]);export{b as default};
