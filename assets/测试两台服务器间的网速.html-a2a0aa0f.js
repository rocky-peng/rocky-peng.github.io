import{_ as i,$ as s,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as c,w as o}from"./framework-16d560c6.js";const h={},u=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),E=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),_={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),f=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),B=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),A=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：幸亏当事者迷，不然真的看清楚事实真相，很多人是承受不来的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f9907028-dcb8-425f-bb40-1c7c47146670",alt:"",loading:"lazy"})])],-1);function x(w,y){const r=o("ExternalLinkIcon"),a=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[E,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",_,[t("https://iperf.fr/iperf-download.php#fedora"),l(r)]),t(" 我这里下载的是"),p,f])]),B,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("MAT工具")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/NGINX.html"},{default:n(()=>[t("NGINX")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[t("JDK命令行工具")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[t("K8S 无感发布")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[t("如何安装Google BBR")]),_:1})]),e("li",null,[l(a,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:n(()=>[t("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[t("高可用通用方案")]),_:1})]),e("li",null,[l(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:n(()=>[t("JVM异常处理")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/intro.html"},{default:n(()=>[t("intro")]),_:1})])]),m,A,g,b])}const F=i(h,[["render",x],["__file","测试两台服务器间的网速.html.vue"]]);export{F as default};
