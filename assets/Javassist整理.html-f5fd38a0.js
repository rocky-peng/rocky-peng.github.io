import{_ as o,$ as E,a0 as n,a1 as l,a3 as s,a4 as e,a5 as i,a2 as t,w as r}from"./framework-b3a0f150.js";const u={},c=i('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),d=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：男女之间都是从，不好意思到真没意思。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9a0652cc-f4ef-42b9-bcd4-6587969790ee",alt:"",loading:"lazy"})])],-1);function f(B,C){const a=r("RouterLink");return E(),n("div",null,[c,l("ul",null,[l("li",null,[s(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:e(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),l("li",null,[s(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:e(()=>[t("MySQL杂项")]),_:1})]),l("li",null,[s(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:e(()=>[t("Spring框架源码关键点")]),_:1})]),l("li",null,[s(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:e(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[s(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:e(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[s(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:e(()=>[t("Censys搜索引擎学习")]),_:1})]),l("li",null,[s(a,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:e(()=>[t("常用队列")]),_:1})]),l("li",null,[s(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:e(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[s(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:e(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[s(a,{to:"/software/raft/sofajraft.html"},{default:e(()=>[t("sofajraft")]),_:1})]),l("li",null,[s(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:e(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:e(()=>[t("表单重复提交解决方案")]),_:1})])]),A,h,_,d])}const p=o(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
