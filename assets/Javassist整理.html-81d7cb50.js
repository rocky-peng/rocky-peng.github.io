import{_ as o,$ as i,a0 as r,a1 as l,a3 as a,a4 as s,a5 as n,a2 as e,w as u}from"./framework-58787b1c.js";const E={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),m=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：时间不会解决任何问题，只会解决我们。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a9480c4d-fbc3-498c-a468-33840cb19a61",alt:"",loading:"lazy"})])],-1);function A(f,B){const t=u("RouterLink");return i(),r("div",null,[c,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:s(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[e("MySQL常用命令")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("Redis笔记")]),_:1})]),l("li",null,[a(t,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[a(t,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[e("Cornell Notes System")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[e("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(t,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[e("Spring RetryTemplate")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[e("线上FullGC频繁的排查")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[e("分布式事务Seata")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("ESRally性能测试步骤")]),_:1})]),l("li",null,[a(t,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:s(()=>[e("Linux dev shm目录")]),_:1})])]),d,h,_,m])}const C=o(E,[["render",A],["__file","Javassist整理.html.vue"]]);export{C as default};
