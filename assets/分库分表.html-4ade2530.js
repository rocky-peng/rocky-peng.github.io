import{_ as a,$ as n,a0 as s,a1 as l,a3 as e,a4 as o,a2 as t,w as u}from"./framework-827a3556.js";const i={},r=l("p",null,"分表：垂直拆分和水平拆分",-1),A=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),B=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),d=l("p",null,"cat/ShardingSphere",-1),_=l("br",null,null,-1),c=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),h=l("hr",null,null,-1),m=l("hr",null,null,-1),F=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：没人嘲笑你的梦想，他们只是嘲笑你的实力。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=22e7ea61-aff1-4bef-baef-b2f3f1b21478",alt:"",loading:"lazy"})])],-1);function w(b,p){const E=u("RouterLink");return n(),s("div",null,[r,A,B,d,_,c,l("ul",null,[l("li",null,[e(E,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[e(E,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[t("JVM参数设置")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:o(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[t("线上FullGC频繁的排查")]),_:1})]),l("li",null,[e(E,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:o(()=>[t("InnoDB存储引擎")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[e(E,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:o(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[e(E,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(E,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(E,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[t("Markdown软件比对")]),_:1})]),l("li",null,[e(E,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[t("GitHub Workflow突然报错")]),_:1})])]),f,h,m,F])}const k=a(i,[["render",w],["__file","分库分表.html.vue"]]);export{k as default};
