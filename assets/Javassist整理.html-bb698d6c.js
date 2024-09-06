import{_ as o,$ as n,a0 as i,a1 as l,a3 as e,a4 as s,a5 as E,a2 as a,w as r}from"./framework-58787b1c.js";const B={},u=E('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),_=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),a("：只要你想要而只要我有，不管什么，老子都不会给你。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=9715a9b5-ac66-4b55-96ba-0a22551181ac",alt:"",loading:"lazy"})])],-1);function f(m,A){const t=r("RouterLink");return n(),i("div",null,[u,l("ul",null,[l("li",null,[e(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("Notion笔记定时备份")]),_:1})]),l("li",null,[e(t,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[a("Docker进行资源隔离")]),_:1})]),l("li",null,[e(t,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("弱引用示例")]),_:1})]),l("li",null,[e(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[a("分库分表")]),_:1})]),l("li",null,[e(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[a("Paxos算法")]),_:1})]),l("li",null,[e(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(t,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:s(()=>[a("JVM异常处理")]),_:1})]),l("li",null,[e(t,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[a("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[e(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[e(t,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[a("JetBrains-License-Server")]),_:1})]),l("li",null,[e(t,{to:"/intro.html"},{default:s(()=>[a("intro")]),_:1})]),l("li",null,[e(t,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[a("BBR加速")]),_:1})])]),c,d,_,h])}const p=o(B,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
