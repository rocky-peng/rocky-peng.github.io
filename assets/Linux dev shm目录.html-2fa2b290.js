import{_ as s,$ as d,a0 as r,a1 as l,a2 as t,a3 as e,a4 as a,a5 as E,w as n}from"./framework-b3a0f150.js";const u={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),h=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=E('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),f={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},p=l("br",null,null,-1),m=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),A=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),g=l("hr",null,null,-1),w=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：因为不够幸运所以要努力，也因为不够幸运，所以努力都只是白费。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=c8decff7-e814-4398-b7ec-fbe3371307cc",alt:"",loading:"lazy"})])],-1);function b(k,D){const i=n("ExternalLinkIcon"),o=n("RouterLink");return d(),r("div",null,[c,h,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",f,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(i)])])])]),p,m,l("ul",null,[l("li",null,[e(o,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:a(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),l("li",null,[e(o,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:a(()=>[t("Redis笔记")]),_:1})]),l("li",null,[e(o,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("JDK命令行工具")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:a(()=>[t("数组转树形结构只需两步")]),_:1})]),l("li",null,[e(o,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[t("kafka")]),_:1})]),l("li",null,[e(o,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:a(()=>[t("istio基础知识")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:a(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/gperftools.html"},{default:a(()=>[t("gperftools")]),_:1})]),l("li",null,[e(o,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:a(()=>[t("推荐几个适用小工具")]),_:1})]),l("li",null,[e(o,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(o,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:a(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[e(o,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:a(()=>[t("Docker隐射的端口外网不能访问")]),_:1})])]),A,B,g,w])}const x=s(u,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{x as default};
