import{_ as o,$ as E,a0 as i,a1 as l,a3 as a,a4 as s,a5 as r,a2 as t,w as n}from"./framework-b3a0f150.js";const u={},B=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),A=l("hr",null,null,-1),d=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：二十几年人生，离女生最近一次，应该是小学同桌。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/31427558/pexels-photo-31427558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Traditional Chinese pagoda with intricate architecture in Dali, Yunnan, China under a bright sky.",loading:"lazy"})])],-1);function _(m,C){const e=n("RouterLink");return E(),i("div",null,[B,l("ul",null,[l("li",null,[a(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[a(e,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[a(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[a(e,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[t("Spring RetryTemplate")]),_:1})]),l("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:s(()=>[t("ShadowsockServer")]),_:1})]),l("li",null,[a(e,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("数据同步方案")]),_:1})]),l("li",null,[a(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:s(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[a(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[t("Git Merge 、Rebase")]),_:1})]),l("li",null,[a(e,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[t("JetBrains-License-Server")]),_:1})]),l("li",null,[a(e,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("Nginx的双向认证配置")]),_:1})]),l("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:s(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[a(e,{to:"/intro.html"},{default:s(()=>[t("intro")]),_:1})])]),c,h,A,d])}const f=o(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{f as default};
