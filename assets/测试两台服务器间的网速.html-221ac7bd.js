import{_ as i,$ as s,a0 as d,a1 as e,a2 as t,a3 as a,a4 as n,a5 as c,w as o}from"./framework-16d560c6.js";const h={},u=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),f=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),_={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),E=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),m=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),A=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：不是烂泥扶不上墙，而是泥不想上墙。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=38d18f68-1dbf-4464-97a0-76335e0401e5",alt:"",loading:"lazy"})])],-1);function w(x,k){const r=o("ExternalLinkIcon"),l=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[f,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",_,[t("https://iperf.fr/iperf-download.php#fedora"),a(r)]),t(" 我这里下载的是"),p,E])]),m,e("ul",null,[e("li",null,[a(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:n(()=>[t("记一次内存泄漏")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Redis笔记")]),_:1})]),e("li",null,[a(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),e("li",null,[a(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[a(l,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[t("MAC CMS")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:n(()=>[t("InnoDB存储引擎")]),_:1})]),e("li",null,[a(l,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:n(()=>[t("JVM异常处理")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("ReentrantLock源码解读")]),_:1})]),e("li",null,[a(l,{to:"/intro.html"},{default:n(()=>[t("intro")]),_:1})]),e("li",null,[a(l,{to:"/software/raft/sofajraft.html"},{default:n(()=>[t("sofajraft")]),_:1})])]),B,g,A,b])}const y=i(h,[["render",w],["__file","测试两台服务器间的网速.html.vue"]]);export{y as default};
