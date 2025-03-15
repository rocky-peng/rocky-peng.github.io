import{_ as a,$ as r,a0 as s,a1 as l,a3 as e,a4 as E,a5 as n,a2 as t,w as i}from"./framework-b3a0f150.js";const d={},B=n('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>问题一： 比如现在k8s有个deployment，有3个pod。此时有个请求在pod A中进行处理，假设需要耗时5分钟。在这个5分钟内，执行了k8s的滚动发布，并开始销毁这个pod。 这个场景下，如果不做一些额外配置，那么pod A的这个请求应该会处理异常。</p><p>问题二： 滚动发布的时候，k8s刚启动了一个pod，但这个pod可能需要等一段时间才能真正对外提供服务。但k8s此时开始转发请求到这个pod了，这种情况下，请求是不能成功处理的</p><p>核心问题：</p><ol><li>k8s如何知道pod可以对外提供服务了</li><li>pod如何知道k8s要销毁这个pod了，pod里的应用程序知道后就能自己进行shutdown</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>其实主要利用k8s pod的两个东西：</p><ol><li>就绪探针</li><li>preStop</li></ol><p>如果pod中运行的是spring boot项目，那么就可以结合spring-actuator来完成。</p><ul><li>就绪探针就配置 /actuator/health，或者自定义一个url</li><li>preStop就配置/actuator/shutdown</li></ul><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',12),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),A=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：有些人一旦道了歉，还没等对方原谅他，他已经率先原谅了自己。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/31078811/pexels-photo-31078811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Colorful flowers surround a green windmill on a cloudy day in Gwangju, South Korea.",loading:"lazy"})])],-1);function c(_,f){const o=i("RouterLink");return r(),s("div",null,[B,l("ul",null,[l("li",null,[e(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:E(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[e(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:E(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[e(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:E(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:E(()=>[t("乱七八糟的笔记")]),_:1})]),l("li",null,[e(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:E(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:E(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[e(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:E(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(o,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:E(()=>[t("Arthas使用记录")]),_:1})]),l("li",null,[e(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:E(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[e(o,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:E(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[e(o,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:E(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[e(o,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:E(()=>[t("Linux dev shm目录")]),_:1})])]),u,h,A,p])}const C=a(d,[["render",c],["__file","K8S 无感发布.html.vue"]]);export{C as default};
