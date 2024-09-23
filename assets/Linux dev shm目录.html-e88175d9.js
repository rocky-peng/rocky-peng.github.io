import{_ as s,$ as u,a0 as E,a1 as l,a2 as t,a3 as e,a4 as i,a5 as d,w as o}from"./framework-3367138f.js";const r={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),_=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),f=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),B={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},h=l("br",null,null,-1),p=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),m=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：经过半年努力，终于结束上半年亏损局面，现在开始下半年的了。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9a81f5fe-a424-4c59-8d01-a8ff799dd963",alt:"",loading:"lazy"})])],-1);function w(F,x){const a=o("ExternalLinkIcon"),n=o("RouterLink");return u(),E("div",null,[c,_,l("ol",null,[f,l("li",null,[l("p",null,[t("扩展阅读："),l("a",B,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(a)])])])]),h,p,l("ul",null,[l("li",null,[e(n,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[t("MAT工具")]),_:1})]),l("li",null,[e(n,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("Notion笔记定时备份")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:i(()=>[t("各种网关性能测试")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/NGINX.html"},{default:i(()=>[t("NGINX")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[e(n,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:i(()=>[t("线上FullGC频繁的排查")]),_:1})]),l("li",null,[e(n,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Docker笔记")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:i(()=>[t("linux_no_space_left_on_device")]),_:1})]),l("li",null,[e(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:i(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[e(n,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:i(()=>[t("Mermaid示例")]),_:1})])]),m,A,g,b])}const v=s(r,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{v as default};
