import{_ as s,$ as n,a0 as r,a1 as l,a3 as e,a4 as o,a5 as i,a2 as t,w as c}from"./framework-b3a0f150.js";const u={},h=i('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),E=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),_=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：可有可无的东西，一律可无。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=adca7faa-3a74-491b-a522-bf42afea4bcf",alt:"",loading:"lazy"})])],-1);function f(m,A){const a=c("RouterLink");return n(),r("div",null,[h,l("ul",null,[l("li",null,[e(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:o(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("MySQL杂项")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[t("Docker进行资源隔离")]),_:1})]),l("li",null,[e(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[t("ShadowsockServer")]),_:1})]),l("li",null,[e(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:o(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[e(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:o(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[t("Centos离线安装Docker")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[e(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:o(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),E,d,_,B])}const p=s(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
