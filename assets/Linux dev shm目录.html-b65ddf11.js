import{_ as s,$ as r,a0 as d,a1 as l,a2 as t,a3 as e,a4 as a,a5 as u,w as n}from"./framework-71a6cde6.js";const c={},E=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),b=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：苹果12不能买，因为王守义说了，十三香。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=52e5e1e5-295b-4cb6-a47a-ebc7f15dcb0c",alt:"",loading:"lazy"})])],-1);function w(x,F){const i=n("ExternalLinkIcon"),o=n("RouterLink");return r(),d("div",null,[E,h,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),p,m,l("ul",null,[l("li",null,[e(o,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:a(()=>[t("KVM 虚拟机安装")]),_:1})]),l("li",null,[e(o,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[e(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:a(()=>[t("随记")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:a(()=>[t("数据同步方案")]),_:1})]),l("li",null,[e(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:a(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(o,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[t("常用队列")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[e(o,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:a(()=>[t("CountDownLatch源码解读")]),_:1})]),l("li",null,[e(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(o,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:a(()=>[t("随机图片在线接口")]),_:1})]),l("li",null,[e(o,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:a(()=>[t("raft协议")]),_:1})]),l("li",null,[e(o,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[t("K8S常用命令")]),_:1})])]),A,B,b,g])}const k=s(c,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{k as default};
