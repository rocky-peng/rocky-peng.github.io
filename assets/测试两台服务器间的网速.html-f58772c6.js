import{_ as t,$ as n,a0 as i,a1 as e,a2 as r,a4 as o,a3 as s,w as c}from"./framework-24d1f903.js";const p={},d=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),r(" 准备工作")],-1),l=e("li",null,"服务器：两台centos服务器，这里是centos7.5.",-1),h={href:"https://iperf.fr/iperf-download.php#fedora",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),f=e("img",{src:"https://cdn.justdopay.com/xiaoshujiang/1629082588495.png",alt:"enter description here",loading:"lazy"},null,-1),u=s('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>上传rpm包到两台服务器并执行安装：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082594678.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在某台服务器A上执行：</p><p>iperf3 -s</p><p>在另外一台服务器B上执行：</p><p>iperf3 -c A的地址</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082600542.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：你早起，我晚起，我们早晚不在一起。 <br><br><img src="https://api.btstu.cn/sjbz/?m_lx=suiji&amp;uuid=9851a104-6706-439f-8a2c-b359730fc962" alt="" loading="lazy"></li></ul>',13);function g(b,m){const a=c("ExternalLinkIcon");return n(),i("div",null,[d,e("ul",null,[l,e("li",null,[r("测试工具：iperf 。 下载地址："),e("a",h,[r("https://iperf.fr/iperf-download.php#fedora"),o(a)]),r(" 我这里下载的是"),_,f])]),u])}const j=t(p,[["render",g],["__file","测试两台服务器间的网速.html.vue"]]);export{j as default};
