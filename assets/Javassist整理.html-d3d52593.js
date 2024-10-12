import{_ as o,$ as E,a0 as r,a1 as l,a3 as e,a4 as s,a5 as n,a2 as t,w as i}from"./framework-16d560c6.js";const u={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：万事开头难，开了头更难。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0e79fc4b-4795-4146-84c8-323d93c80f11",alt:"",loading:"lazy"})])],-1);function A(f,m){const a=i("RouterLink");return E(),r("div",null,[c,l("ul",null,[l("li",null,[e(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:s(()=>[t("记一次内存泄漏")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[t("Docker进行资源隔离")]),_:1})]),l("li",null,[e(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:s(()=>[t("微博关注关系如何实现")]),_:1})]),l("li",null,[e(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[t("提取Docker镜像中的文件")]),_:1})]),l("li",null,[e(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:s(()=>[t("Censys搜索引擎学习")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[t("分库分表")]),_:1})]),l("li",null,[e(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:s(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[t("MySQL索引")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(a,{to:"/software/raft/sofajraft.html"},{default:s(()=>[t("sofajraft")]),_:1})])]),B,d,h,_])}const p=o(u,[["render",A],["__file","Javassist整理.html.vue"]]);export{p as default};
