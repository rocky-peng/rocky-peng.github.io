import{_ as o,$ as E,a0 as i,a1 as l,a3 as a,a4 as s,a5 as r,a2 as t,w as n}from"./framework-b3a0f150.js";const u={},A=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：一个嗯，一个哦，毁了我想对你说的所有话。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/31427558/pexels-photo-31427558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Traditional Chinese pagoda with intricate architecture in Dali, Yunnan, China under a bright sky.",loading:"lazy"})])],-1);function _(m,C){const e=n("RouterLink");return E(),i("div",null,[A,l("ul",null,[l("li",null,[a(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[t("Redis笔记")]),_:1})]),l("li",null,[a(e,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:s(()=>[t("Censys搜索引擎学习")]),_:1})]),l("li",null,[a(e,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[t("常用队列")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:s(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[t("分库分表")]),_:1})]),l("li",null,[a(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[a(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[a(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[a(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:s(()=>[t("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[a(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("Docker跨主机通信方案")]),_:1})])]),c,d,h,B])}const p=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{p as default};
