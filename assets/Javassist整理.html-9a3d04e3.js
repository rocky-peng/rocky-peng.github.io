import{_ as o,$ as i,a0 as n,a1 as l,a3 as s,a4 as e,a5 as E,a2 as t,w as r}from"./framework-6821ba0c.js";const u={},c=E('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),B=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：乞丐并不会妒忌百万富翁，但是他肯定会妒忌，收入更高的乞丐。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=a3747733-5a35-456d-a808-2731d6f9c9da",alt:"",loading:"lazy"})])],-1);function f(A,m){const a=r("RouterLink");return i(),n("div",null,[c,l("ul",null,[l("li",null,[s(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:e(()=>[t("synchronized原理深度剖析")]),_:1})]),l("li",null,[s(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:e(()=>[t("来个JVM冷知识")]),_:1})]),l("li",null,[s(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:e(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[s(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:e(()=>[t("IO相关")]),_:1})]),l("li",null,[s(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[t("Redis高可用")]),_:1})]),l("li",null,[s(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:e(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/gperftools.html"},{default:e(()=>[t("gperftools")]),_:1})]),l("li",null,[s(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:e(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[s(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:e(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),l("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:e(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[s(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:e(()=>[t("RocketMQ")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:e(()=>[t("批量替换文件名中的指定字符串")]),_:1})])]),d,h,B,_])}const C=o(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{C as default};
