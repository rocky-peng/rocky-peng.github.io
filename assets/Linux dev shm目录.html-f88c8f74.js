import{_ as a,$ as s,a0 as d,a1 as l,a2 as t,a3 as e,a4 as o,a5 as r,w as i}from"./framework-b3a0f150.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),A=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),B=r('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),_={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},h=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),b=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：別人前途無量，我前途無亮。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8779193c-5aa9-462e-bc35-5bdb46d3c41e",alt:"",loading:"lazy"})])],-1);function w(F,x){const E=i("ExternalLinkIcon"),n=i("RouterLink");return s(),d("div",null,[c,A,l("ol",null,[B,l("li",null,[l("p",null,[t("扩展阅读："),l("a",_,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(E)])])])]),h,f,l("ul",null,[l("li",null,[e(n,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),l("li",null,[e(n,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[t("来个JVM冷知识")]),_:1})]),l("li",null,[e(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:o(()=>[t("正则表达式匹配第几个符号问题")]),_:1})]),l("li",null,[e(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("Redis高可用")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:o(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:o(()=>[t("index方法压力测试记录")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:o(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[e(n,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[t("Spring Boot升级到2 6 x踩的坑")]),_:1})]),l("li",null,[e(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[e(n,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:o(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[e(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:o(()=>[t("K8S常用命令")]),_:1})])]),p,m,b,g])}const C=a(u,[["render",w],["__file","Linux dev shm目录.html.vue"]]);export{C as default};
