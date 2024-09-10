import{_ as E,$ as r,a0 as s,a1 as l,a3 as a,a4 as o,a5 as i,a2 as e,w as d}from"./framework-58787b1c.js";const n={},u=i('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),A=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：别总想着，把今天的事情拖到明天，后天大后天都是好日子啊。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=37a9cb1d-51ea-489b-9ab1-7745af5d51a4",alt:"",loading:"lazy"})])],-1);function p(_,f){const t=d("RouterLink");return r(),s("div",null,[u,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:o(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[a(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[a(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:o(()=>[e("JVM异常处理")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:o(()=>[e("Git Merge 、Rebase")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[e("RocketMQ")]),_:1})]),l("li",null,[a(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:o(()=>[e("raft协议")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("表单重复提交解决方案")]),_:1})])]),h,c,A,B])}const b=E(n,[["render",p],["__file","K8S 无感发布.html.vue"]]);export{b as default};
