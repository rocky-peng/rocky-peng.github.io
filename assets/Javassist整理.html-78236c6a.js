import{_ as o,$ as E,a0 as r,a1 as l,a3 as e,a4 as s,a5 as i,a2 as a,w as n}from"./framework-b3a0f150.js";const u={},A=i('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),c=l("hr",null,null,-1),B=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),a("：跟好朋友好到什么程度？就是他进传销，发展的第一个下线就是我。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b2db6943-a0d9-43fa-b03b-01c26e4141fc",alt:"",loading:"lazy"})])],-1);function _(m,f){const t=n("RouterLink");return E(),r("div",null,[A,l("ul",null,[l("li",null,[e(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[e(t,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:s(()=>[a("MySQL常用命令")]),_:1})]),l("li",null,[e(t,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:s(()=>[a("JVM垃圾收集器")]),_:1})]),l("li",null,[e(t,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[a("来个JVM冷知识")]),_:1})]),l("li",null,[e(t,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:s(()=>[a("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[e(t,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[a("MAC CMS")]),_:1})]),l("li",null,[e(t,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("高可用通用方案")]),_:1})]),l("li",null,[e(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(t,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[a("推荐几个适用小工具")]),_:1})]),l("li",null,[e(t,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[a("AQS源码解读")]),_:1})]),l("li",null,[e(t,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[a("ShadowsockServer配置")]),_:1})]),l("li",null,[e(t,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[a("ESRally性能测试步骤")]),_:1})])]),d,c,B,h])}const p=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{p as default};
