import{_ as t,$ as o,a0 as r,a1 as s,a3 as n,a4 as l,a5 as i,a2 as e,w as d}from"./framework-58787b1c.js";const u={},E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),c=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),p=s("hr",null,null,-1),B=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),e("：白天嘈杂得不愿意醒，夜晚安静得舍不得睡。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=608624d6-af86-4276-bba7-ab55f3a97281",alt:"",loading:"lazy"})])],-1);function v(h,b){const a=d("RouterLink");return o(),r("div",null,[E,s("ul",null,[s("li",null,[n(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),s("li",null,[n(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:l(()=>[e("Docker进行资源隔离")]),_:1})]),s("li",null,[n(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[e("Spring框架源码关键点")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[e("Markdown Mermaid画图实例")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:l(()=>[e("InnoDB存储引擎")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/gperftools.html"},{default:l(()=>[e("gperftools")]),_:1})]),s("li",null,[n(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[e("JVM异常处理")]),_:1})]),s("li",null,[n(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:l(()=>[e("异地多活")]),_:1})]),s("li",null,[n(a,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:l(()=>[e("Markdown软件比对")]),_:1})]),s("li",null,[n(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),s("li",null,[n(a,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:l(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),s("li",null,[n(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:l(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),c,p,B,m])}const k=t(u,[["render",v],["__file","ShadowsockServer.html.vue"]]);export{k as default};
