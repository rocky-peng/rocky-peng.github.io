import{_ as r,$ as s,a0 as i,a1 as l,a3 as o,a4 as a,a5 as E,a2 as t,w as n}from"./framework-b3a0f150.js";const d={},u=E('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),c=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：所有的焦虑不安，都源于你的实力，配不上你的野心。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/9212718/pexels-photo-9212718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Aerial shot of a solitary figure on a vast snowy field in Harbin, China, capturing winter's stark beauty.",loading:"lazy"})])],-1);function A(_,f){const e=n("RouterLink");return s(),i("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Git笔记")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("各种网关性能测试")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[o(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:a(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[o(e,{to:"/software/maccms/MAC%20CMS.html"},{default:a(()=>[t("MAC CMS")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[o(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:a(()=>[t("Mermaid示例")]),_:1})]),l("li",null,[o(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("Docker跨主机通信方案")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[o(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})])]),h,B,c,p])}const S=r(d,[["render",A],["__file","K8S 无感发布.html.vue"]]);export{S as default};
