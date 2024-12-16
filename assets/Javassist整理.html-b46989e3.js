import{_ as E,$ as o,a0 as i,a1 as l,a3 as a,a4 as t,a5 as B,a2 as s,w as n}from"./framework-b3a0f150.js";const r={},u=B('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),d=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),s("：做好万全的准备，就是为了当机会来临时，你可以巧妙地避开它。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4e726769-19b7-4fe1-abfc-7ef8860f7398",alt:"",loading:"lazy"})])],-1);function h(_,m){const e=n("RouterLink");return o(),i("div",null,[u,l("ul",null,[l("li",null,[a(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:t(()=>[s("KVM 虚拟机安装")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[s("各种网关性能测试")]),_:1})]),l("li",null,[a(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("MySQL高可用")]),_:1})]),l("li",null,[a(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[s("JDK命令行工具")]),_:1})]),l("li",null,[a(e,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:t(()=>[s("Censys搜索引擎学习")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:t(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[s("index方法压力测试记录")]),_:1})]),l("li",null,[a(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[s("Arthas使用记录")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[s("gperftools")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:t(()=>[s("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[a(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:t(()=>[s("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[s("BBR加速")]),_:1})])]),c,A,d,f])}const p=E(r,[["render",h],["__file","Javassist整理.html.vue"]]);export{p as default};
