import{_ as a,$ as E,a0 as i,a1 as l,a3 as s,a4 as o,a5 as n,a2 as t,w as r}from"./framework-b3a0f150.js";const u={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),B=l("hr",null,null,-1),d=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：不要出门抢双黄连，抢不到，还要浪费一个口罩。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"From below of illuminated sign with bright Chinese hieroglyphs hanging outside building at night",loading:"lazy"})])],-1);function _(m,C){const e=r("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[s(e,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:o(()=>[t("JetBrains IDE 全破解")]),_:1})]),l("li",null,[s(e,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[s(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:o(()=>[t("提取Docker镜像中的文件")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[s(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[s(e,{to:"/other/Cornell%20Notes%20System.html"},{default:o(()=>[t("Cornell Notes System")]),_:1})]),l("li",null,[s(e,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:o(()=>[t("Centos离线安装Docker")]),_:1})]),l("li",null,[s(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[s(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:o(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[t("RocketMQ")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("表单重复提交解决方案")]),_:1})])]),A,h,B,d])}const p=a(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{p as default};
