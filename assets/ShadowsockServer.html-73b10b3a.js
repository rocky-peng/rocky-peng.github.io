import{_ as e,$ as n,a0 as t,a2 as a,a4 as o,a1 as s}from"./framework-294a1fec.js";const l={},r=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,2),i=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),c=s("hr",null,null,-1),d=s("hr",null,null,-1),u=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),a("：为了变漂亮，你坚持了哪些好习惯？坚持开美颜。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=57be3c81-8a73-422e-a7c9-e23ff0fccefa",alt:"",loading:"lazy"})])],-1);function p(v,m){return n(),t("div",null,[r,a(" ## 系统推荐 - [getPath vs getAbsolutePath vs getCanonicalPath](../../other/getPath vs getAbsolutePath vs getCanonicalPath.md) - [JVM垃圾收集器](../jvm/JVM垃圾收集器.md) - [Git合并多个提交并push到远程仓库](../../other/Git合并多个提交并push到远程仓库.md) - [是时候使用MapStruct替代BeanUtils了](../../other/是时候使用MapStruct替代BeanUtils了.md) - [如何安装Google BBR](../../other/如何安装Google BBR.md) - [MySQL锁、事务、隔离级别](../middleware/mysql/MySQL锁、事务、隔离级别.md) - [分库分表](../middleware/mysql/分库分表.md) - [gperftools](../unclassified/gperftools.md) "),i,c,d,u])}const h=e(l,[["render",p],["__file","ShadowsockServer.html.vue"]]);export{h as default};
