import{_ as i,$ as s,a0 as c,a1 as e,a2 as t,a3 as n,a4 as o,a5 as d,w as a}from"./framework-3895bb24.js";const h={},p=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),t(" 准备工作")],-1),_=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),u={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},E=e("br",null,null,-1),f=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),g=d('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><br>',11),B=e("li",null,"[Spring Cloud（一）：服务治理技术概览【Finchley 版】](../spring/Spring Cloud（一）：服务治理技术概览【Finchley 版】.md)",-1),m={href:"http://System.md",target:"_blank",rel:"noopener noreferrer"},A={href:"http://BBR.md",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),x=e("hr",null,null,-1),y=e("hr",null,null,-1),k=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：你无法叫醒一个装睡的人，但关空调可以。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6622aac5-160e-421f-ae66-023cc0e7bfa0",alt:"",loading:"lazy"})])],-1);function C(F,w){const l=a("ExternalLinkIcon"),r=a("RouterLink");return s(),c("div",null,[p,e("ul",null,[_,e("li",null,[t("测试工具：iperf 。 下载地址："),e("a",u,[t("https://iperf.fr/iperf-download.php#fedora"),n(l)]),t(" 我这里下载的是"),E,f])]),g,t(" ## 系统推荐 "),e("ul",null,[e("li",null,[n(r,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:o(()=>[t("记一次内存泄漏")]),_:1})]),B,e("li",null,[t("[Cornell Notes System](../../other/Cornell Notes "),e("a",m,[t("System.md"),n(l)]),t(")")]),e("li",null,[t("[如何安装Google BBR](../../other/如何安装Google "),e("a",A,[t("BBR.md"),n(l)]),t(")")]),e("li",null,[n(r,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:o(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[n(r,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:o(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[n(r,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("Docker跨主机通信方案")]),_:1})]),e("li",null,[n(r,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})])]),b,x,y,k])}const D=i(h,[["render",C],["__file","测试两台服务器间的网速.html.vue"]]);export{D as default};
