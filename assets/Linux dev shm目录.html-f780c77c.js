import{_ as s,$ as r,a0 as E,a1 as l,a2 as e,a3 as t,a4 as o,a5 as d,w as a}from"./framework-b3a0f150.js";const u={},h=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),c=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),p=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),_={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},f=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),A=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：今天天气很好，在房间里宅久了，准备去客厅散散心。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7c281373-ed78-4a3d-af60-777f5b5809db",alt:"",loading:"lazy"})])],-1);function w(y,D){const i=a("ExternalLinkIcon"),n=a("RouterLink");return r(),E("div",null,[h,c,l("ol",null,[p,l("li",null,[l("p",null,[e("扩展阅读："),l("a",_,[e("https://www.jianshu.com/p/0dc2dae0fa46"),t(i)])])])]),f,m,l("ul",null,[l("li",null,[t(n,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[e("JVM垃圾收集器")]),_:1})]),l("li",null,[t(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[t(n,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:o(()=>[e("数组转树形结构只需两步")]),_:1})]),l("li",null,[t(n,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:o(()=>[e("Censys搜索引擎学习")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:o(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:o(()=>[e("SQL优化")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[e("ES杂项")]),_:1})]),l("li",null,[t(n,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:o(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),l("li",null,[t(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:o(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[t(n,{to:"/software/raft/sofajraft.html"},{default:o(()=>[e("sofajraft")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:o(()=>[e("表单重复提交解决方案")]),_:1})]),l("li",null,[t(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[e("Hbase 总览")]),_:1})])]),B,A,g,b])}const x=s(u,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{x as default};
