import{_ as r,$ as s,a0 as E,a1 as e,a2 as t,a3 as l,a4 as n,a5 as c,w as o}from"./framework-16d560c6.js";const h={},d=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),u=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),_={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),p=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),A=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),B=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),m=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：别看平时他对你漠不关心，其实背后，说了你好多坏话。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4c4607f1-d258-433d-bf77-9531b6c77af3",alt:"",loading:"lazy"})])],-1);function x(F,k){const i=o("ExternalLinkIcon"),a=o("RouterLink");return s(),E("div",null,[d,e("ul",null,[u,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",_,[t("https://iperf.fr/iperf-download.php#fedora"),l(i)]),t(" 我这里下载的是"),f,p])]),A,e("ul",null,[e("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:n(()=>[t("KVM 虚拟机安装")]),_:1})]),e("li",null,[l(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[t("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("提取Docker镜像中的文件")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:n(()=>[t("线上FullGC频繁的排查")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:n(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("推荐几个适用小工具")]),_:1})]),e("li",null,[l(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("分布式问题")]),_:1})]),e("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[t("Linux dev shm目录")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("表单重复提交解决方案")]),_:1})])]),B,g,m,b])}const y=r(h,[["render",x],["__file","测试两台服务器间的网速.html.vue"]]);export{y as default};
