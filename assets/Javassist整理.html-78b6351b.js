import{_ as o,$ as E,a0 as i,a1 as l,a3 as a,a4 as s,a5 as u,a2 as t,w as r}from"./framework-b3a0f150.js";const n={},c=u('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),h=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：铁打的身子，磁铁打的床。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=31f3354f-98cf-4b4b-b25c-d3f782392cf3",alt:"",loading:"lazy"})])],-1);function _(f,C){const e=r("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[a(e,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:s(()=>[t("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[a(e,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("数据同步方案")]),_:1})]),l("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[a(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:s(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[a(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[a(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:s(()=>[t("Linux")]),_:1})]),l("li",null,[a(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[t("Hbase 总览")]),_:1})])]),A,d,h,B])}const b=o(n,[["render",_],["__file","Javassist整理.html.vue"]]);export{b as default};
