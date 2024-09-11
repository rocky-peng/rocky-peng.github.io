import{_ as o,$ as i,a0 as E,a1 as l,a3 as e,a4 as s,a5 as r,a2 as t,w as n}from"./framework-052411f2.js";const c={},u=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：觉得你暗恋的人也在暗恋你，你知道这叫什么吗？这叫想象力。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=78b0989f-acfa-435f-9273-9dca5cb7ead6",alt:"",loading:"lazy"})])],-1);function f(m,A){const a=n("RouterLink");return i(),E("div",null,[u,l("ul",null,[l("li",null,[e(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:s(()=>[t("记一次内存泄漏")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:s(()=>[t("synchronized原理深度剖析")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[t("Docker进行资源隔离")]),_:1})]),l("li",null,[e(a,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[t("IO相关")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[e(a,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[t("MAC CMS")]),_:1})]),l("li",null,[e(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:s(()=>[t("RocketMQ")]),_:1})]),l("li",null,[e(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[t("杂记")]),_:1})]),l("li",null,[e(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[t("K8S常用命令")]),_:1})])]),B,d,h,_])}const C=o(c,[["render",f],["__file","Javassist整理.html.vue"]]);export{C as default};
