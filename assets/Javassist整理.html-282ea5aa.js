import{_ as o,$ as E,a0 as i,a1 as l,a3 as e,a4 as s,a5 as r,a2 as t,w as n}from"./framework-58787b1c.js";const u={},d=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),h=l("hr",null,null,-1),B=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：我不主动，不是你不重要，而是我不知道我重不重要。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d3830bc6-3464-498c-96a8-483204925fdb",alt:"",loading:"lazy"})])],-1);function _(m,f){const a=n("RouterLink");return E(),i("div",null,[d,l("ul",null,[l("li",null,[e(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:s(()=>[t("JVM参数设置")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[t("kafka")]),_:1})]),l("li",null,[e(a,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[e(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("Redis高可用")]),_:1})]),l("li",null,[e(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[t("Arthas使用记录")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[t("MySQL三大日志")]),_:1})]),l("li",null,[e(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[e(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("Nginx的双向认证配置")]),_:1})]),l("li",null,[e(a,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:s(()=>[t("SpringCloud总体认识")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[t("ESRally性能测试步骤")]),_:1})])]),A,c,h,B])}const C=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{C as default};
