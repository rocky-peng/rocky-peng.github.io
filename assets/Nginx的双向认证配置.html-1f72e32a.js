import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as e,w as p}from"./framework-b3a0f150.js";const c={},d=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),_=a("hr",null,null,-1),E=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：只要你不去做，就没有人知道你不会。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d536a00c-6b8e-409f-9d80-9219e49769f2",alt:"",loading:"lazy"})])],-1);function f(m,B){const s=p("RouterLink");return o(),r("div",null,[d,a("ul",null,[a("li",null,[n(s,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[e("MAT工具")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[e("MySQL杂项")]),_:1})]),a("li",null,[n(s,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[e("JVM垃圾收集器")]),_:1})]),a("li",null,[n(s,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[e("Redis高可用")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[e("gperftools")]),_:1})]),a("li",null,[n(s,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:t(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),a("li",null,[n(s,{to:"/other/JetBrains-License-Server.html"},{default:t(()=>[e("JetBrains-License-Server")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[e("SQL优化")]),_:1})]),a("li",null,[n(s,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[e("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(s,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[e("Mermaid示例")]),_:1})]),a("li",null,[n(s,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:t(()=>[e("Linux dev shm目录")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[e("BBR加速")]),_:1})])]),u,h,_,E])}const v=l(c,[["render",f],["__file","Nginx的双向认证配置.html.vue"]]);export{v as default};
