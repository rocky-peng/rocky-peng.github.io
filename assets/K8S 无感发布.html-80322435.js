import{_ as r,$ as i,a0 as s,a1 as l,a3 as o,a4 as a,a5 as d,a2 as e,w as n}from"./framework-16d560c6.js";const u={},E=d('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),c=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：世界这么大 我想去看看。钱包那么小 你能走多远？ "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=efd9106a-42be-47f7-86f2-8bf730c4eb94",alt:"",loading:"lazy"})])],-1);function A(_,f){const t=n("RouterLink");return i(),s("div",null,[E,l("ul",null,[l("li",null,[o(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[e("记一次内存泄漏")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:a(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[e("MAT工具")]),_:1})]),l("li",null,[o(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[o(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:a(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[o(t,{to:"/other/Cornell%20Notes%20System.html"},{default:a(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[e("kafka")]),_:1})]),l("li",null,[o(t,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("Redis高可用")]),_:1})]),l("li",null,[o(t,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[o(t,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[e("MySQL索引")]),_:1})]),l("li",null,[o(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:a(()=>[e("Git Merge 、Rebase")]),_:1})]),l("li",null,[o(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})])]),h,B,c,p])}const b=r(u,[["render",A],["__file","K8S 无感发布.html.vue"]]);export{b as default};
