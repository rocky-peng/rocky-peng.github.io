import{_ as r,$ as i,a0 as d,a1 as s,a3 as n,a4 as t,a2 as e,a5 as c,w as l}from"./framework-3895bb24.js";const u={},p=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><br><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,5),m={href:"http://xn--yfrq2b7zsrkndid5y6d.md",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),b=s("hr",null,null,-1),h=s("hr",null,null,-1),k=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),e("：快乐分享给朋友快乐会加倍，痛苦分享给朋友，朋友会减半。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a8bed579-d915-46eb-9885-01214c4c8188",alt:"",loading:"lazy"})])],-1);function _(E,f){const a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[p,s("ul",null,[s("li",null,[n(a,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:t(()=>[e("记一次内存泄漏")]),_:1})]),s("li",null,[n(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:t(()=>[e("Censys搜索引擎学习")]),_:1})]),s("li",null,[n(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:t(()=>[e("Centos离线安装Docker")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:t(()=>[e("RocketMQ")]),_:1})]),s("li",null,[n(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:t(()=>[e("Nginx的双向认证配置")]),_:1})]),s("li",null,[e("[vuepress-theme-hope 添加谷歌广告](../../other/vuepress-theme-hope "),s("a",m,[e("添加谷歌广告.md"),n(o)]),e(")")]),s("li",null,[n(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:t(()=>[e("杂记")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[e("BBR加速")]),_:1})])]),v,b,h,k])}const w=r(u,[["render",_],["__file","ShadowsockServer.html.vue"]]);export{w as default};
