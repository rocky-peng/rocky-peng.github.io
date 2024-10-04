import{_ as s,$ as d,a0 as E,a1 as l,a2 as t,a3 as e,a4 as i,a5 as r,w as a}from"./framework-827a3556.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),p=r('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},h=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),g=l("hr",null,null,-1),w=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：别去打扰那些，每次很久都不回你消息的人，删除好友就行。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=154a841d-88bc-45de-a381-59aedb90a8c4",alt:"",loading:"lazy"})])],-1);function b(x,y){const o=a("ExternalLinkIcon"),n=a("RouterLink");return d(),E("div",null,[c,_,l("ol",null,[p,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(o)])])])]),h,m,l("ul",null,[l("li",null,[e(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:i(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[e(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:i(()=>[t("Spring框架源码关键点")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:i(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[t("kafka")]),_:1})]),l("li",null,[e(n,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:i(()=>[t("如何安装Google BBR")]),_:1})]),l("li",null,[e(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("Redis高可用")]),_:1})]),l("li",null,[e(n,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[t("istio基础知识")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:i(()=>[t("linux_no_space_left_on_device")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:i(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:i(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:i(()=>[t("ESRally性能测试步骤")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:i(()=>[t("批量替换文件名中的指定字符串")]),_:1})])]),A,B,g,w])}const F=s(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{F as default};
