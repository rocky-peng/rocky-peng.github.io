import{_ as o,$ as E,a0 as i,a1 as l,a3 as e,a4 as s,a5 as n,a2 as t,w as r}from"./framework-58787b1c.js";const u={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：谦虚使人进步，骄傲使人心情舒畅。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eb0b49da-f2ea-4696-98aa-eec6bedac6d1",alt:"",loading:"lazy"})])],-1);function h(C,f){const a=r("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[e(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[t("IO相关")]),_:1})]),l("li",null,[e(a,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[t("MAC CMS")]),_:1})]),l("li",null,[e(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[t("istio基础知识")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[t("MySQL三大日志")]),_:1})]),l("li",null,[e(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),l("li",null,[e(a,{to:"/intro.html"},{default:s(()=>[t("intro")]),_:1})]),l("li",null,[e(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[t("WebSocket SpringBoot Demo")]),_:1})])]),B,d,A,_])}const p=o(u,[["render",h],["__file","Javassist整理.html.vue"]]);export{p as default};
