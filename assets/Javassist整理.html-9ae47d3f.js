import{_ as o,$ as i,a0 as n,a1 as l,a3 as e,a4 as s,a5 as r,a2 as t,w as E}from"./framework-b3a0f150.js";const u={},d=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),A=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：每人一句，你说的对，世界会少很多纷争。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"From below of illuminated sign with bright Chinese hieroglyphs hanging outside building at night",loading:"lazy"})])],-1);function m(f,B){const a=E("RouterLink");return i(),n("div",null,[d,l("ul",null,[l("li",null,[e(a,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Notion笔记定时备份")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[t("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/NGINX.html"},{default:s(()=>[t("NGINX")]),_:1})]),l("li",null,[e(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[e(a,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[t("Cornell Notes System")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("数据同步方案")]),_:1})]),l("li",null,[e(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[t("异地多活")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:s(()=>[t("Centos离线安装Docker")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:s(()=>[t("Java面试基础")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[t("ESRally性能测试步骤")]),_:1})]),l("li",null,[e(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[t("raft协议")]),_:1})])]),h,c,A,_])}const p=o(u,[["render",m],["__file","Javassist整理.html.vue"]]);export{p as default};
