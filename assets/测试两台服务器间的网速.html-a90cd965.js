import{_ as i,$ as s,a0 as d,a1 as e,a2 as t,a3 as l,a4 as n,a5 as c,w as o}from"./framework-58787b1c.js";const h={},u=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),E=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),p={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),B=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：心甘情愿四个字，真是卑微又勇敢。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4256e4b2-25de-46ca-8cae-167e82a33504",alt:"",loading:"lazy"})])],-1);function x(k,w){const r=o("ExternalLinkIcon"),a=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[E,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",p,[t("https://iperf.fr/iperf-download.php#fedora"),l(r)]),t(" 我这里下载的是"),_,f])]),B,e("ul",null,[e("li",null,[l(a,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:n(()=>[t("常见问题")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[t("来个JVM冷知识")]),_:1})]),e("li",null,[l(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:n(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[l(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:n(()=>[t("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:n(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[t("AQS源码解读")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:n(()=>[t("制作KVM ES镜像文件")]),_:1})]),e("li",null,[l(a,{to:"/intro.html"},{default:n(()=>[t("intro")]),_:1})]),e("li",null,[l(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:n(()=>[t("GitHub Workflow突然报错")]),_:1})]),e("li",null,[l(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:n(()=>[t("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[l(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[t("Linux dev shm目录")]),_:1})])]),A,m,g,b])}const D=i(h,[["render",x],["__file","测试两台服务器间的网速.html.vue"]]);export{D as default};
