import{_ as o,$ as i,a0 as r,a1 as l,a3 as a,a4 as s,a5 as n,a2 as t,w as u}from"./framework-b3a0f150.js";const E={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),B=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：色令智昏绝对是个褒义词，你不光要受色令，还要有智可昏。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1226afeb-0093-4fc3-9a26-78fd81b760c6",alt:"",loading:"lazy"})])],-1);function A(m,f){const e=u("RouterLink");return i(),r("div",null,[c,l("ul",null,[l("li",null,[a(e,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[t("MyBatis")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[t("MySQL常用命令")]),_:1})]),l("li",null,[a(e,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:s(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:s(()=>[t("Btrace入门")]),_:1})]),l("li",null,[a(e,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),l("li",null,[a(e,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[t("istio基础知识")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[t("MySQL索引")]),_:1})]),l("li",null,[a(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:s(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[a(e,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[t("JetBrains-License-Server")]),_:1})]),l("li",null,[a(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[t("JVM杂项")]),_:1})]),l("li",null,[a(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("Nginx的双向认证配置")]),_:1})])]),d,h,B,_])}const C=o(E,[["render",A],["__file","Javassist整理.html.vue"]]);export{C as default};
