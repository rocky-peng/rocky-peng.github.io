import{_ as o,$ as i,a0 as E,a1 as l,a3 as s,a4 as a,a5 as n,a2 as t,w as u}from"./framework-b3a0f150.js";const r={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),_=l("hr",null,null,-1),B=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：支撑我走过来的，从来不是善良正直勇敢，而是虚荣嫉妒和不甘。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=bdb416cc-14cc-48fb-b974-d6dce823c028",alt:"",loading:"lazy"})])],-1);function A(f,m){const e=u("RouterLink");return i(),E("div",null,[c,l("ul",null,[l("li",null,[s(e,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Git笔记")]),_:1})]),l("li",null,[s(e,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("常见问题")]),_:1})]),l("li",null,[s(e,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:a(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),l("li",null,[s(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[t("微博关注关系如何实现")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:a(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[s(e,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("数据同步方案")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:a(()=>[t("linux_no_space_left_on_device")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:a(()=>[t("分库分表")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:a(()=>[t("异地多活")]),_:1})]),l("li",null,[s(e,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:a(()=>[t("MySQL索引")]),_:1})]),l("li",null,[s(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[s(e,{to:"/software/linux/Linux.html"},{default:a(()=>[t("Linux")]),_:1})])]),d,_,B,h])}const C=o(r,[["render",A],["__file","Javassist整理.html.vue"]]);export{C as default};
