import{_ as s,$ as o,a0 as i,a1 as l,a3 as a,a4 as e,a5 as r,a2 as t,w as u}from"./framework-b3a0f150.js";const B={},n=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),d=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：其实刑法是一本职业选择书，不仅来钱快，入狱也超迅速。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=41cbc284-3217-423e-98b4-9c3284fe0fce",alt:"",loading:"lazy"})])],-1);function h(f,m){const E=u("RouterLink");return o(),i("div",null,[n,l("ul",null,[l("li",null,[a(E,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:e(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[a(E,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:e(()=>[t("istio基础知识")]),_:1})]),l("li",null,[a(E,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:e(()=>[t("Paxos算法")]),_:1})]),l("li",null,[a(E,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:e(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[a(E,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:e(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[a(E,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:e(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(E,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:e(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[a(E,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:e(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[a(E,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:e(()=>[t("ES杂项")]),_:1})]),l("li",null,[a(E,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:e(()=>[t("Git历史记录修改用户名和邮箱")]),_:1})]),l("li",null,[a(E,{to:"/software/middleware/mq/RocketMQ.html"},{default:e(()=>[t("RocketMQ")]),_:1})]),l("li",null,[a(E,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:e(()=>[t("raft协议")]),_:1})])]),A,c,d,_])}const F=s(B,[["render",h],["__file","Javassist整理.html.vue"]]);export{F as default};
