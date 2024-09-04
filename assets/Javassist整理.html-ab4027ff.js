import{_ as o,$ as i,a0 as r,a1 as l,a3 as t,a4 as e,a5 as n,a2 as s,w as c}from"./framework-3895bb24.js";const E={},u=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',4),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),_=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),s("：你吃过最甜的是糖，吃过最苦的，是她的喜糖。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=89d92642-89c9-4d60-a232-10821c1b6221",alt:"",loading:"lazy"})])],-1);function h(p,m){const a=c("RouterLink");return i(),r("div",null,[u,l("ul",null,[l("li",null,[t(a,{to:"/software/unclassified/MyBatis.html"},{default:e(()=>[s("MyBatis")]),_:1})]),l("li",null,[t(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:e(()=>[s("Btrace入门")]),_:1})]),l("li",null,[t(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:e(()=>[s("Spring框架源码关键点")]),_:1})]),l("li",null,[t(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:e(()=>[s("MongoDB高可用")]),_:1})]),l("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:e(()=>[s("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[t(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:e(()=>[s("SQL优化")]),_:1})]),l("li",null,[t(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:e(()=>[s("Docker跨主机通信方案")]),_:1})]),l("li",null,[t(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:e(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),d,A,_,B])}const f=o(E,[["render",h],["__file","Javassist整理.html.vue"]]);export{f as default};
