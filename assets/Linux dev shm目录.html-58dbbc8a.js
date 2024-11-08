import{_ as E,$ as s,a0 as u,a1 as l,a2 as t,a3 as e,a4 as i,a5 as d,w as a}from"./framework-16d560c6.js";const r={},c=l("ul",null,[l("li",null,"dev: 代表device"),l("li",null,"shm: 代表shared memory")],-1),B=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-8a837ef1f42f1753a4d90dd06174eb04.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),_=d('<li><p>这个目录是用内存虚拟出来的一个目录，文件系统是tmpfs.</p></li><li><p>其空间默认是总内存的一半</p></li><li><p>读写这个目录下的文件其实就是在读写内存。</p><ol><li>可以实验下，先查询现有的内存空间，然后往这个目录写入一个1g的文件，再查看内存空间。再删除</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-e5e2006be7231387da07d1a12431e8ac.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure></li><li><p>读写改目录文件性能是非常高的，实际就是读写内存</p></li><li><p>如果这个目录下没有任何文件，则不会占用内存。</p></li><li><p>如果这个目录下有一个100m文件，那么这100m对应的内存是不会被系统回收的</p></li><li><p>具有临时性，重启、卸载这个目录都会丢失数据</p></li>',7),h={href:"https://www.jianshu.com/p/0dc2dae0fa46",target:"_blank",rel:"noopener noreferrer"},A=l("br",null,null,-1),f=l("h2",{id:"系统推荐",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),p=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),m=l("hr",null,null,-1),F=l("hr",null,null,-1),g=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：借别人钱就总是会抬不起头，所以我到现在，都不敢见马云。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=88ea66f2-97a0-46f0-ac60-574d7ce5f6a4",alt:"",loading:"lazy"})])],-1);function b(x,w){const o=a("ExternalLinkIcon"),n=a("RouterLink");return s(),u("div",null,[c,B,l("ol",null,[_,l("li",null,[l("p",null,[t("扩展阅读："),l("a",h,[t("https://www.jianshu.com/p/0dc2dae0fa46"),e(o)])])])]),A,f,l("ul",null,[l("li",null,[e(n,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:i(()=>[t("Oh My ZSH")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[t("Btrace入门")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[t("测试两台服务器间的网速")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:i(()=>[t("linux_no_space_left_on_device")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[t("AQS源码解读")]),_:1})]),l("li",null,[e(n,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:i(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[e(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:i(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[e(n,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:i(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),l("li",null,[e(n,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[t("K8S常用命令")]),_:1})]),l("li",null,[e(n,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[t("表单重复提交解决方案")]),_:1})]),l("li",null,[e(n,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("PostgreSQL高可用")]),_:1})]),l("li",null,[e(n,{to:"/software/linux/Linux.html"},{default:i(()=>[t("Linux")]),_:1})])]),p,m,F,g])}const D=E(r,[["render",b],["__file","Linux dev shm目录.html.vue"]]);export{D as default};
