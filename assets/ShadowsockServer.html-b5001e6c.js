import{_ as t,$ as o,a0 as r,a1 as s,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-16d560c6.js";const u={},c=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

<span class="token comment">#!/usr/bin/env bash</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span>

sshpass <span class="token parameter variable">-p</span> <span class="token string">&quot;yourpassword&quot;</span> <span class="token function">ssh</span> root@<span class="token variable">$1</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF

yum install python-setuptools &amp;&amp; easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo &#39;{&quot;server&quot;:&quot;0.0.0.0&quot;,&quot;server_port&quot;:12345,&quot;local_address&quot;: &quot;127.0.0.1&quot;,&quot;local_port&quot;:1080,&quot;password&quot;:&quot;yourpassword&quot;, &quot;timeout&quot;:1200,&quot;method&quot;:&quot;aes-256-cfb&quot;,&quot;fast_open&quot;: true,&quot;workers&quot;:3}&#39; &gt;&gt; /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF</span>



<span class="token function">docker</span> pull oddrationale/docker-shadowsocks
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">12345</span>:12345 oddrationale/docker-shadowsocks <span class="token parameter variable">-s</span> <span class="token number">0.0</span>.0.0 <span class="token parameter variable">-p</span> <span class="token number">12345</span> <span class="token parameter variable">-k</span> yourpassword <span class="token parameter variable">-m</span> aes-256-cfb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),E=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),p=s("hr",null,null,-1),m=s("hr",null,null,-1),v=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),e("：只要你成为一个废物，就没有人能利用你！ "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=eb84cce5-5509-4d31-9b1f-e9cfbf461bab",alt:"",loading:"lazy"})])],-1);function b(h,B){const a=d("RouterLink");return o(),r("div",null,[c,s("ul",null,[s("li",null,[n(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[e("MySQL常用命令")]),_:1})]),s("li",null,[n(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[e("Spring框架源码关键点")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:l(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),s("li",null,[n(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:l(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),s("li",null,[n(a,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[e("Spring RetryTemplate")]),_:1})]),s("li",null,[n(a,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:l(()=>[e("高可用通用方案")]),_:1})]),s("li",null,[n(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[e("Git Merge 、Rebase")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[e("ES杂项")]),_:1})]),s("li",null,[n(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:l(()=>[e("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),s("li",null,[n(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),s("li",null,[n(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:l(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:l(()=>[e("BBR加速")]),_:1})])]),E,p,m,v])}const A=t(u,[["render",b],["__file","ShadowsockServer.html.vue"]]);export{A as default};
