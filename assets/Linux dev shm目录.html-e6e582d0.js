import{_ as s,$ as E,a0 as r,a1 as l,a2 as t,a3 as e,a4 as i,a5 as u,w as a}from"./framework-b3a0f150.js";const d={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),A=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.top/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),_={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},B=l("br",null,null,-1),p=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：真的会有人等着你，等着看你笑话。 "),l("br"),l("br"),l("img",{src:"https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Picturesque view of vibrant houses stacked on a hill in Riomaggiore, Liguria, Italy.",loading:"lazy"})])],-1);function x(F,w){const n=a("ExternalLinkIcon"),o=a("RouterLink");return E(),r("div",null,[c,h,l("ol",null,[A,l("li",null,[l("p",null,[t("扩展阅读："),l("a",_,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(n)])])])]),B,p,l("ul",null,[l("li",null,[e(o,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:i(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/MyBatis.html"},{default:i(()=>[t("MyBatis")]),_:1})]),l("li",null,[e(o,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:i(()=>[t("JVM垃圾收集器")]),_:1})]),l("li",null,[e(o,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:i(()=>[t("随记")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:i(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[e(o,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Docker笔记")]),_:1})]),l("li",null,[e(o,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[t("Paxos算法")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[t("Javassist整理")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(o,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:i(()=>[t("Git Merge 、Rebase")]),_:1})]),l("li",null,[e(o,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:i(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[e(o,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:i(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),f,m,g,b])}const k=s(d,[["render",x],["__file","Linux dev shm目录.html.vue"]]);export{k as default};
