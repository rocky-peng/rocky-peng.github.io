import{_ as a,$ as E,a0 as i,a1 as l,a3 as o,a4 as s,a5 as n,a2 as t,w as r}from"./framework-b3a0f150.js";const B={},u=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),h=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),c=l("hr",null,null,-1),d=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：头上长了一蘑菇，摘下来熬汤喝结果中毒了，医生说我是好菇毒。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"From below of illuminated sign with bright Chinese hieroglyphs hanging outside building at night",loading:"lazy"})])],-1);function _(C,m){const e=r("RouterLink");return E(),i("div",null,[u,l("ul",null,[l("li",null,[o(e,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:s(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[o(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[o(e,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[t("kafka")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[t("index方法压力测试记录")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[o(e,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:s(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[o(e,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:s(()=>[t("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),l("li",null,[o(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[o(e,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:s(()=>[t("随机图片在线接口")]),_:1})]),l("li",null,[o(e,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[t("K8S常用命令")]),_:1})]),l("li",null,[o(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[t("WebSocket SpringBoot Demo")]),_:1})]),l("li",null,[o(e,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[t("https和http混用解决办法")]),_:1})])]),h,A,c,d])}const p=a(B,[["render",_],["__file","Javassist整理.html.vue"]]);export{p as default};
