import{_ as t,$ as o,a0 as r,a1 as s,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-b3a0f150.js";const u={},c=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),p=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),m=s("hr",null,null,-1),v=s("hr",null,null,-1),b=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),e("：等你以后老了走不动了，我每天用轮椅推你去广场上，让你看着我和别的老头跳舞。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=0b6c306b-b1f5-402f-80b4-75871a8304b2",alt:"",loading:"lazy"})])],-1);function h(E,k){const a=d("RouterLink");return o(),r("div",null,[c,s("ul",null,[s("li",null,[n(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[e("Redis笔记")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[e("MySQL常用命令")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:l(()=>[e("KVM 虚拟机安装")]),_:1})]),s("li",null,[n(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),s("li",null,[n(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[e("JVM参数设置")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[e("Markdown Mermaid画图实例")]),_:1})]),s("li",null,[n(a,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[e("Cornell Notes System")]),_:1})]),s("li",null,[n(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[e("Hadoop 一")]),_:1})]),s("li",null,[n(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),s("li",null,[n(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:l(()=>[e("Git Merge 、Rebase")]),_:1})]),s("li",null,[n(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[e("ReentrantLock源码解读")]),_:1})]),s("li",null,[n(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[e("Mermaid示例")]),_:1})])]),p,m,v,b])}const _=t(u,[["render",h],["__file","ShadowsockServer.html.vue"]]);export{_ as default};
