import{_ as a,$ as r,a0 as s,a1 as l,a2 as e,a3 as t,a4 as o,a5 as u,w as n}from"./framework-b3a0f150.js";const d={},B=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),A=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),c=u('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),h={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),_=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),m=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),f=l("hr",null,null,-1),F=l("hr",null,null,-1),C=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：撕逼的最终目的，不是说服对方，而是气死对方。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2dbe8731-106b-415c-adc1-7e868e72bb65",alt:"",loading:"lazy"})])],-1);function b(g,x){const i=n("ExternalLinkIcon"),E=n("RouterLink");return r(),s("div",null,[B,A,l("ol",null,[c,l("li",null,[l("p",null,[e("扩展阅读："),l("a",h,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(i)])])])]),p,_,l("ul",null,[l("li",null,[t(E,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[e("Notion笔记定时备份")]),_:1})]),l("li",null,[t(E,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[t(E,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:o(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),l("li",null,[t(E,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),l("li",null,[t(E,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("数据同步方案")]),_:1})]),l("li",null,[t(E,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:o(()=>[e("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),l("li",null,[t(E,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:o(()=>[e("MySQL索引")]),_:1})]),l("li",null,[t(E,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:o(()=>[e("AQS源码解读")]),_:1})]),l("li",null,[t(E,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[t(E,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[t(E,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[t(E,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:o(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),m,f,F,C])}const y=a(d,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{y as default};
