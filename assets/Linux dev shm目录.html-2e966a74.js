import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as n,a5 as u,w as i}from"./framework-b3a0f150.js";const c={},E=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),h=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},m=l("br",null,null,-1),p=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),b=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：承诺就像放屁，当时惊天动地，过后苍白无力。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b26fb06a-8b9a-4831-aade-c08a484d4263",alt:"",loading:"lazy"})])],-1);function w(k,v){const o=i("ExternalLinkIcon"),a=i("RouterLink");return d(),r("div",null,[E,_,l("ol",null,[h,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(o)])])])]),m,p,l("ul",null,[l("li",null,[e(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:n(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Redis笔记")]),_:1})]),l("li",null,[e(a,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:n(()=>[t("JetBrains IDE 全破解")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:n(()=>[t("数组转树形结构只需两步")]),_:1})]),l("li",null,[e(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:n(()=>[t("kafka")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:n(()=>[t("IO相关")]),_:1})]),l("li",null,[e(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[t("istio基础知识")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[t("SQL优化")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),l("li",null,[e(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[t("Docker隐射的端口外网不能访问")]),_:1})])]),B,A,b,g])}const D=s(c,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{D as default};
