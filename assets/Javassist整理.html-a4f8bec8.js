import{_ as o,$ as i,a0 as n,a1 as l,a3 as e,a4 as a,a5 as u,a2 as t,w as r}from"./framework-b3a0f150.js";const E={},c=u('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),_=l("hr",null,null,-1),f=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：若能脱颖而出，何必苦苦相融。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"From below of illuminated sign with bright Chinese hieroglyphs hanging outside building at night",loading:"lazy"})])],-1);function m(B,p){const s=r("RouterLink");return i(),n("div",null,[c,l("ul",null,[l("li",null,[e(s,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:a(()=>[t("记一次内存泄漏")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Git笔记")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("各种网关性能测试")]),_:1})]),l("li",null,[e(s,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:a(()=>[t("提取Docker镜像中的文件")]),_:1})]),l("li",null,[e(s,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[e(s,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:a(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:a(()=>[t("线上FullGC频繁的排查")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(s,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[t("常用队列")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("分布式问题")]),_:1})]),l("li",null,[e(s,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:a(()=>[t("Linux dev shm目录")]),_:1})])]),d,h,_,f])}const A=o(E,[["render",m],["__file","Javassist整理.html.vue"]]);export{A as default};
