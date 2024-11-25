import{_ as e,$ as o,a0 as i,a1 as l,a3 as s,a4 as E,a5 as r,a2 as t,w as n}from"./framework-6821ba0c.js";const B={},u=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：平时骂你就算了，非要等我打你，才知道我文武双全。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=20ebdd49-3eb4-4123-a68e-d66d76b63ba7",alt:"",loading:"lazy"})])],-1);function _(f,m){const a=n("RouterLink");return o(),i("div",null,[u,l("ul",null,[l("li",null,[s(a,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:E(()=>[t("微博关注关系如何实现")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:E(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:E(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:E(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:E(()=>[t("线上FullGC频繁的排查")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:E(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[s(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:E(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[s(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:E(()=>[t("Nginx的双向认证配置")]),_:1})]),l("li",null,[s(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:E(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[s(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:E(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),l("li",null,[s(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:E(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[s(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:E(()=>[t("raft协议")]),_:1})])]),c,d,A,h])}const p=e(B,[["render",_],["__file","Javassist整理.html.vue"]]);export{p as default};
