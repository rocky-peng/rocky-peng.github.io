import{_ as o,$ as l,a0 as r,a1 as a,a3 as s,a4 as t,a5 as i,a2 as e,w as c}from"./framework-b3a0f150.js";const p={},d=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：网上我们用着假名说真话，现实我们用着真名说假话。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=0707d319-1692-42bf-9f94-8a14cacf812c",alt:"",loading:"lazy"})])],-1);function k(f,B){const n=c("RouterLink");return l(),r("div",null,[d,a("ul",null,[a("li",null,[s(n,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[e("JVM垃圾收集器")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:t(()=>[e("Btrace入门")]),_:1})]),a("li",null,[s(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:t(()=>[e("Docker进行资源隔离")]),_:1})]),a("li",null,[s(n,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:t(()=>[e("JetBrains IDE 全破解")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mq/kafka.html"},{default:t(()=>[e("kafka")]),_:1})]),a("li",null,[s(n,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:t(()=>[e("Centos离线安装Docker")]),_:1})]),a("li",null,[s(n,{to:"/other/JetBrains-License-Server.html"},{default:t(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:t(()=>[e("Markdown软件比对")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:t(()=>[e("RocketMQ")]),_:1})]),a("li",null,[s(n,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[e("Git历史记录修改用户名和邮箱")]),_:1})]),a("li",null,[s(n,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:t(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[e("BBR加速")]),_:1})])]),u,E,h,_])}const A=o(p,[["render",k],["__file","Nginx的双向认证配置.html.vue"]]);export{A as default};
