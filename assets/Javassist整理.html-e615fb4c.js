import{_ as o,$ as E,a0 as i,a1 as l,a3 as e,a4 as s,a5 as n,a2 as t,w as r}from"./framework-b3a0f150.js";const u={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),d=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：两巴掌打在脸上，印出的却是翅膀的形状。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=59e96b66-3cc1-449e-880c-4b5d6732e323",alt:"",loading:"lazy"})])],-1);function _(f,m){const a=r("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[e(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[t("来个JVM冷知识")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[t("弱引用示例")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(a,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[t("如何安装Google BBR")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[e(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("PostgreSQL高可用")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[t("BBR加速")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[t("杂记")]),_:1})])]),B,A,d,h])}const C=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{C as default};
