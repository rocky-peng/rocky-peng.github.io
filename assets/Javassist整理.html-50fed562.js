import{_ as o,$ as E,a0 as i,a1 as l,a3 as s,a4 as a,a5 as n,a2 as t,w as r}from"./framework-b3a0f150.js";const u={},B=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：等你长大成年就会发现，你不再是个傻孩子了，你是个傻子。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2fdb9346-483d-450a-a010-b4a743a813a3",alt:"",loading:"lazy"})])],-1);function _(f,m){const e=r("RouterLink");return E(),i("div",null,[B,l("ul",null,[l("li",null,[s(e,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[t("记一次内存泄漏")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[s(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[t("微博关注关系如何实现")]),_:1})]),l("li",null,[s(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[s(e,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:a(()=>[t("ShadowsockServer")]),_:1})]),l("li",null,[s(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[t("Redis高可用")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[s(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[s(e,{to:"/intro.html"},{default:a(()=>[t("intro")]),_:1})]),l("li",null,[s(e,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:a(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[s(e,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:a(()=>[t("SpringCloud总体认识")]),_:1})])]),c,d,A,h])}const C=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{C as default};
