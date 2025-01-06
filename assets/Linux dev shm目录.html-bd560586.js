import{_ as r,$ as s,a0 as d,a1 as l,a2 as e,a3 as t,a4 as n,a5 as c,w as a}from"./framework-b3a0f150.js";const u={},h=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),E=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=c('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),B=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),m=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),S=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：只要你多财多亿，凭亿近人，还怕找不到女朋友吗？ "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=defa58e9-ca2a-47ce-a952-01df9f410678",alt:"",loading:"lazy"})])],-1);function w(k,D){const i=a("ExternalLinkIcon"),o=a("RouterLink");return s(),d("div",null,[h,E,l("ol",null,[_,l("li",null,[l("p",null,[e("扩展阅读："),l("a",f,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(i)])])])]),p,B,l("ul",null,[l("li",null,[t(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("MAT工具")]),_:1})]),l("li",null,[t(o,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[e("微博关注关系如何实现")]),_:1})]),l("li",null,[t(o,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[e("PostgreSQL定时备份")]),_:1})]),l("li",null,[t(o,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[t(o,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[e("PGSQL GIN索引“失效”")]),_:1})]),l("li",null,[t(o,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[e("ShadowsockServer")]),_:1})]),l("li",null,[t(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[e("ShadowsockServer配置")]),_:1})]),l("li",null,[t(o,{to:"/other/JetBrains-License-Server.html"},{default:n(()=>[e("JetBrains-License-Server")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[e("RocketMQ")]),_:1})]),l("li",null,[t(o,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[t(o,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})])]),m,A,g,S])}const L=r(u,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{L as default};
