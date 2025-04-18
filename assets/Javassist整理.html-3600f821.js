import{_ as E,$ as o,a0 as i,a1 as l,a3 as a,a4 as e,a5 as r,a2 as t,w as n}from"./framework-b3a0f150.js";const B={},u=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),d=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：没有人关心你飞得多高，倒是有一群人，等着看你摔得多惨。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/31653131/pexels-photo-31653131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Close-up of a flavorful Japanese curry served with white rice, showcasing vibrant spices.",loading:"lazy"})])],-1);function h(_,m){const s=n("RouterLink");return o(),i("div",null,[u,l("ul",null,[l("li",null,[a(s,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:e(()=>[t("MySQL杂项")]),_:1})]),l("li",null,[a(s,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:e(()=>[t("Btrace入门")]),_:1})]),l("li",null,[a(s,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:e(()=>[t("各种网关性能测试")]),_:1})]),l("li",null,[a(s,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:e(()=>[t("Spring框架源码关键点")]),_:1})]),l("li",null,[a(s,{to:"/software/unclassified/NGINX.html"},{default:e(()=>[t("NGINX")]),_:1})]),l("li",null,[a(s,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:e(()=>[t("微博关注关系如何实现")]),_:1})]),l("li",null,[a(s,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:e(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[a(s,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:e(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[a(s,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[a(s,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:e(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[a(s,{to:"/intro.html"},{default:e(()=>[t("intro")]),_:1})]),l("li",null,[a(s,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:e(()=>[t("raft协议")]),_:1})])]),c,A,d,f])}const C=E(B,[["render",h],["__file","Javassist整理.html.vue"]]);export{C as default};
