import{_ as E,$ as o,a0 as i,a1 as l,a3 as s,a4 as a,a5 as r,a2 as t,w as n}from"./framework-b6ede5bc.js";const u={},B=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),c=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),d=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：不是这年没年味了，而是现在过年最快乐的人，已经不是我了。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d22331eb-869d-4c42-a0e5-5ec896511a45",alt:"",loading:"lazy"})])],-1);function _(C,f){const e=n("RouterLink");return o(),i("div",null,[B,l("ul",null,[l("li",null,[s(e,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:a(()=>[t("Oh My ZSH")]),_:1})]),l("li",null,[s(e,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:a(()=>[t("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[s(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:a(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[s(e,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[t("数组转树形结构只需两步")]),_:1})]),l("li",null,[s(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:a(()=>[t("如何安装Google BBR")]),_:1})]),l("li",null,[s(e,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:a(()=>[t("IO相关")]),_:1})]),l("li",null,[s(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:a(()=>[t("ShadowsockServerUpdatePort")]),_:1})]),l("li",null,[s(e,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:a(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[s(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:a(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[s(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[s(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[t("BBR加速")]),_:1})])]),c,A,d,h])}const m=E(u,[["render",_],["__file","Javassist整理.html.vue"]]);export{m as default};
