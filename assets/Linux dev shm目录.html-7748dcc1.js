import{_ as E,$ as s,a0 as r,a1 as l,a2 as t,a3 as e,a4 as n,a5 as d,w as a}from"./framework-b3a0f150.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.top/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),p=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.top/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),B={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},_=l("br",null,null,-1),A=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),f=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),g=l("hr",null,null,-1),b=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：2020年的不顺已经过去，2021年的即将开始。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=935bba10-74e6-4d44-97ad-cb96e9d7eea4",alt:"",loading:"lazy"})])],-1);function w(k,x){const i=a("ExternalLinkIcon"),o=a("RouterLink");return s(),r("div",null,[c,h,l("ol",null,[p,l("li",null,[l("p",null,[t("扩展阅读："),l("a",B,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),_,A,l("ul",null,[l("li",null,[e(o,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),l("li",null,[e(o,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[e(o,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:n(()=>[t("Spring框架源码关键点")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),l("li",null,[e(o,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[t("Hadoop 一")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("index方法压力测试记录")]),_:1})]),l("li",null,[e(o,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[e(o,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Docker笔记")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:n(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(o,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:n(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[e(o,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})])]),f,m,g,b])}const S=E(u,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{S as default};
