import{_ as r,$ as s,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as h,w as o}from"./framework-b3a0f150.js";const c={},u=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),E=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),p={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f=e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),B=h('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),g=e("hr",null,null,-1),m=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：只要你想要而只要我有，不管什么，老子都不会给你。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=9199773d-31cb-4875-806d-45d96342b615",alt:"",loading:"lazy"})])],-1);function x(y,C){const i=o("ExternalLinkIcon"),a=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[E,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",p,[t("https://iperf.fr/iperf-download.php#fedora"),l(i)]),t(" 我这里下载的是"),_,f])]),B,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[t("Oh My ZSH")]),_:1})]),e("li",null,[l(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:n(()=>[t("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[l(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("Redis高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:n(()=>[t("分库分表")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("index方法压力测试记录")]),_:1})]),e("li",null,[l(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:n(()=>[t("Paxos算法")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:n(()=>[t("RocketMQ")]),_:1})]),e("li",null,[l(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[t("Hbase 总览")]),_:1})])]),A,g,m,b])}const D=r(c,[["render",x],["__file","测试两台服务器间的网速.html.vue"]]);export{D as default};
