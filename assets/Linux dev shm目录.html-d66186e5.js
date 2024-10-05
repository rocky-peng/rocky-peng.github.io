import{_ as s,$ as E,a0 as r,a1 as l,a2 as e,a3 as t,a4 as n,a5 as u,w as i}from"./framework-827a3556.js";const d={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),p={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},B=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),g=l("hr",null,null,-1),F=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：书店看到一本书，《解决你人生50%的问题》，然后我买了两本。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7097f269-3f58-41c8-88ec-02c2a978d041",alt:"",loading:"lazy"})])],-1);function b(y,w){const a=i("ExternalLinkIcon"),o=i("RouterLink");return E(),r("div",null,[c,h,l("ol",null,[_,l("li",null,[l("p",null,[e("扩展阅读："),l("a",p,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(a)])])])]),B,f,l("ul",null,[l("li",null,[t(o,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[e("Oh My ZSH")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[e("各种网关性能测试")]),_:1})]),l("li",null,[t(o,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:n(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[t(o,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[t(o,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("MySQL高可用")]),_:1})]),l("li",null,[t(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:n(()=>[e("数组转树形结构只需两步")]),_:1})]),l("li",null,[t(o,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[e("Censys搜索引擎学习")]),_:1})]),l("li",null,[t(o,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[e("提取Docker镜像中的文件")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:n(()=>[e("线上FullGC频繁的排查")]),_:1})]),l("li",null,[t(o,{to:"/software/unclassified/gperftools.html"},{default:n(()=>[e("gperftools")]),_:1})]),l("li",null,[t(o,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[t(o,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[e("PostgreSQL高可用")]),_:1})])]),A,m,g,F])}const D=s(d,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{D as default};
