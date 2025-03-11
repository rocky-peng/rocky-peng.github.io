import{_ as s,$ as E,a0 as r,a1 as l,a2 as t,a3 as e,a4 as n,a5 as d,w as a}from"./framework-b3a0f150.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.top/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),A={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),B=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),g=l("hr",null,null,-1),D=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：一顿操作猛如虎，一看工资二千五。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Picturesque view of vibrant houses stacked on a hill in Riomaggiore, Liguria, Italy.",loading:"lazy"})])],-1);function b(v,x){const i=a("ExternalLinkIcon"),o=a("RouterLink");return E(),r("div",null,[c,h,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",A,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),p,B,l("ul",null,[l("li",null,[e(o,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:n(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[e(o,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("提取Docker镜像中的文件")]),_:1})]),l("li",null,[e(o,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),l("li",null,[e(o,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:n(()=>[t("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[e(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})]),l("li",null,[e(o,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:n(()=>[t("MyBatis xml特殊字符处理")]),_:1})]),l("li",null,[e(o,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:n(()=>[t("前端axios下载csv文件乱码")]),_:1})]),l("li",null,[e(o,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:n(()=>[t("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),l("li",null,[e(o,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:n(()=>[t("Mermaid示例")]),_:1})]),l("li",null,[e(o,{to:"/software/raft/sofajraft.html"},{default:n(()=>[t("sofajraft")]),_:1})])]),f,m,g,D])}const w=s(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{w as default};
