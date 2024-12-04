import{_ as o,$ as E,a0 as i,a1 as l,a3 as t,a4 as a,a5 as r,a2 as s,w as n}from"./framework-b3a0f150.js";const u={},B=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),s("：单身至今的原因是，熟人不好下手，生人不好开口。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=45d65ccb-e946-4aa0-a22a-64ab36b7ad0d",alt:"",loading:"lazy"})])],-1);function A(f,C){const e=n("RouterLink");return E(),i("div",null,[B,l("ul",null,[l("li",null,[t(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[s("Git笔记")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/MyBatis.html"},{default:a(()=>[s("MyBatis")]),_:1})]),l("li",null,[t(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[s("Redis笔记")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[s("Btrace入门")]),_:1})]),l("li",null,[t(e,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:a(()=>[s("Censys搜索引擎学习")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[s("乱七八糟的笔记")]),_:1})]),l("li",null,[t(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[s("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[t(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:a(()=>[s("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[t(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[s("ShadowsockServer配置")]),_:1})]),l("li",null,[t(e,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[s("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[t(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[s("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[t(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:a(()=>[s("Hbase 总览")]),_:1})])]),c,d,h,_])}const p=o(u,[["render",A],["__file","Javassist整理.html.vue"]]);export{p as default};
