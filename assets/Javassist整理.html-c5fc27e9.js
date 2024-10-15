import{_ as o,$ as n,a0 as i,a1 as l,a3 as a,a4 as s,a5 as r,a2 as t,w as u}from"./framework-16d560c6.js";const E={},h=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),_=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：你俩看起来真般配，月老的垃圾分类，做的还挺到位。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=5f0b2575-d14e-4aab-8237-9477735cbd95",alt:"",loading:"lazy"})])],-1);function A(m,p){const e=u("RouterLink");return n(),i("div",null,[h,l("ul",null,[l("li",null,[a(e,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:s(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),l("li",null,[a(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[a(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[a(e,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:s(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[a(e,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[a(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[t("Git Merge 、Rebase")]),_:1})]),l("li",null,[a(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[a(e,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[a(e,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[a(e,{to:"/software/linux/Linux.html"},{default:s(()=>[t("Linux")]),_:1})]),l("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("PostgreSQL高可用")]),_:1})])]),c,d,_,B])}const g=o(E,[["render",A],["__file","Javassist整理.html.vue"]]);export{g as default};
