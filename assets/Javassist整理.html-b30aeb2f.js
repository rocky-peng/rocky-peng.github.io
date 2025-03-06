import{_ as o,$ as E,a0 as i,a1 as l,a3 as t,a4 as e,a5 as r,a2 as a,w as n}from"./framework-b3a0f150.js";const u={},c=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),B=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),a("：以前以为别人尊重我，是因为我优秀，后来才发现是他们优秀。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"From below of illuminated sign with bright Chinese hieroglyphs hanging outside building at night",loading:"lazy"})])],-1);function f(_,m){const s=n("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[t(s,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:e(()=>[a("Git笔记")]),_:1})]),l("li",null,[t(s,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:e(()=>[a("synchronized原理深度剖析")]),_:1})]),l("li",null,[t(s,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:e(()=>[a("Btrace入门")]),_:1})]),l("li",null,[t(s,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:e(()=>[a("JVM参数设置")]),_:1})]),l("li",null,[t(s,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:e(()=>[a("微博关注关系如何实现")]),_:1})]),l("li",null,[t(s,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:e(()=>[a("JDK命令行工具")]),_:1})]),l("li",null,[t(s,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:e(()=>[a("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[t(s,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:e(()=>[a("线上FullGC频繁的排查")]),_:1})]),l("li",null,[t(s,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:e(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[t(s,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:e(()=>[a("ShadowsockServer配置")]),_:1})]),l("li",null,[t(s,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:e(()=>[a("Java面试基础")]),_:1})]),l("li",null,[t(s,{to:"/software/raft/sofajraft.html"},{default:e(()=>[a("sofajraft")]),_:1})])]),d,h,B,A])}const p=o(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
