import{_ as r,$ as s,a0 as d,a1 as e,a2 as t,a3 as l,a4 as o,a5 as h,w as n}from"./framework-b3a0f150.js";const E={},c=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),u=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),p={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),_=e("img",{src:"https://cdn.justdopay.top/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),B=h('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',11),A=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),g=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：第一次做人，没经验，所以活成这个狗样子。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function x(w,F){const i=n("ExternalLinkIcon"),a=n("RouterLink");return s(),d("div",null,[c,e("ul",null,[u,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",p,[t("https://iperf.fr/iperf-download.php#fedora"),l(i)]),t(" 我这里下载的是"),f,_])]),B,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:o(()=>[t("各种网关性能测试")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:o(()=>[t("Docker进行资源隔离")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[t("弱引用示例")]),_:1})]),e("li",null,[l(a,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:o(()=>[t("随记")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:o(()=>[t("K8S 无感发布")]),_:1})]),e("li",null,[l(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[t("istio基础知识")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:o(()=>[t("线上FullGC频繁的排查")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:o(()=>[t("异地多活")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:o(()=>[t("ES杂项")]),_:1})]),e("li",null,[l(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[t("Nginx的双向认证配置")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:o(()=>[t("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[l(a,{to:"/software/raft/sofajraft.html"},{default:o(()=>[t("sofajraft")]),_:1})])]),A,m,g,b])}const D=r(E,[["render",x],["__file","测试两台服务器间的网速.html.vue"]]);export{D as default};
