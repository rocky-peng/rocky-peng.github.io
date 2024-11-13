import{_ as o,$ as i,a0 as r,a1 as l,a3 as a,a4 as s,a5 as E,a2 as e,w as n}from"./framework-16d560c6.js";const u={},c=E('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：一般长得好看的妹子，能靠撒娇解决的事，我都得靠威胁。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c20ae71b-ae93-4812-9243-6d980c25d328",alt:"",loading:"lazy"})])],-1);function f(A,C){const t=n("RouterLink");return i(),r("div",null,[c,l("ul",null,[l("li",null,[a(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[e("来个JVM冷知识")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[e("各种网关性能测试")]),_:1})]),l("li",null,[a(t,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:s(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[e("NGINX")]),_:1})]),l("li",null,[a(t,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[e("IO相关")]),_:1})]),l("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[e("Git Merge 、Rebase")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[e("ReentrantLock源码解读")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[e("杂记")]),_:1})])]),B,d,h,_])}const p=o(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
