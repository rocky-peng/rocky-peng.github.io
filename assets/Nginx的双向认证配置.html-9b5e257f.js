import{_ as o,$ as l,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as e,w as c}from"./framework-b3a0f150.js";const p={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),_=a("hr",null,null,-1),E=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：我们的故事，始于我的打扰，终于我的多余。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2fc2d4e9-9153-4104-94d1-48c522566cf7",alt:"",loading:"lazy"})])],-1);function k(f,m){const s=c("RouterLink");return l(),r("div",null,[u,a("ul",null,[a("li",null,[n(s,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:t(()=>[e("Oh My ZSH")]),_:1})]),a("li",null,[n(s,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[e("JVM垃圾收集器")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:t(()=>[e("Markdown Mermaid画图实例")]),_:1})]),a("li",null,[n(s,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:t(()=>[e("ShadowsockServer")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:t(()=>[e("线上FullGC频繁的排查")]),_:1})]),a("li",null,[n(s,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:t(()=>[e("常用队列")]),_:1})]),a("li",null,[n(s,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:t(()=>[e("Paxos算法")]),_:1})]),a("li",null,[n(s,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:t(()=>[e("Centos离线安装Docker")]),_:1})]),a("li",null,[n(s,{to:"/other/JetBrains-License-Server.html"},{default:t(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[n(s,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[e("Git Merge 、Rebase")]),_:1})]),a("li",null,[n(s,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[n(s,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:t(()=>[e("Docker跨主机通信方案")]),_:1})])]),d,h,_,E])}const v=o(p,[["render",k],["__file","Nginx的双向认证配置.html.vue"]]);export{v as default};
