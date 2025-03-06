import{_ as n,$ as a,a0 as E,a1 as l,a3 as o,a4 as s,a2 as t,w as i}from"./framework-b3a0f150.js";const r={},u=l("p",null,"分表：垂直拆分和水平拆分",-1),_=l("p",null,"分库：垂直拆分（一个库有A-Z 26张表，可以分到两个库：A-K，K-Z）",-1),h=l("p",null,"需要注意的一点是：分表仅仅是解决了单一表数据过大的问题，但由于表的数据还是在同一台机器上，其实对于提升MySQL并发能力没有什么意义，所以 水平拆分最好分库 。",-1),c=l("p",null,"cat/ShardingSphere",-1),d=l("br",null,null,-1),B=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),f=l("hr",null,null,-1),p=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：你现在不珍惜我，那我告诉你过了这村，我在下一个村等你。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A person trading stocks using a smartphone, showcasing financial data on mobile and laptop screens.",loading:"lazy"})])],-1);function b(D,M){const e=i("RouterLink");return a(),E("div",null,[u,_,h,c,d,B,l("ul",null,[l("li",null,[o(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:s(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[o(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[o(e,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:s(()=>[t("随记")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:s(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[o(e,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[t("MAC CMS")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:s(()=>[t("简易版配置中心&初探原理")]),_:1})]),l("li",null,[o(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:s(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[o(e,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[t("JVM杂项")]),_:1})]),l("li",null,[o(e,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[o(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[o(e,{to:"/intro.html"},{default:s(()=>[t("intro")]),_:1})]),l("li",null,[o(e,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[t("杂记")]),_:1})])]),A,m,f,p])}const F=n(r,[["render",b],["__file","分库分表.html.vue"]]);export{F as default};
