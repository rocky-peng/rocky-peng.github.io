import{_ as o,$ as i,a0 as n,a1 as l,a3 as e,a4 as a,a5 as u,a2 as t,w as r}from"./framework-b3a0f150.js";const E={},c=u('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：首富的财产就比我多一个亿，他两千三百亿，我两千三百。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9c0e54c6-ecf1-420f-89d8-bdbe84b4e63b",alt:"",loading:"lazy"})])],-1);function f(A,m){const s=r("RouterLink");return i(),n("div",null,[c,l("ul",null,[l("li",null,[e(s,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[t("Oh My ZSH")]),_:1})]),l("li",null,[e(s,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[t("MySQL杂项")]),_:1})]),l("li",null,[e(s,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[e(s,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[e(s,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[e(s,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[t("istio基础知识")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[e(s,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:a(()=>[t("MySQL三大日志")]),_:1})]),l("li",null,[e(s,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:a(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[e(s,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("分布式问题")]),_:1})])]),d,h,_,B])}const C=o(E,[["render",f],["__file","Javassist整理.html.vue"]]);export{C as default};
