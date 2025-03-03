import{_ as o,$ as l,a0 as r,a1 as a,a3 as e,a4 as t,a5 as i,a2 as s,w as c}from"./framework-b3a0f150.js";const p={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),E=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：醒醒，你这不是丧而是，没有钱和性生活的正常表现。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/7928388/pexels-photo-7928388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Vibrant pink lotus bud with green leaves, showcasing the beauty of nature.",loading:"lazy"})])],-1);function k(f,m){const n=c("RouterLink");return l(),r("div",null,[u,a("ul",null,[a("li",null,[e(n,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:t(()=>[s("常见问题")]),_:1})]),a("li",null,[e(n,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:t(()=>[s("Docker进行资源隔离")]),_:1})]),a("li",null,[e(n,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:t(()=>[s("随记")]),_:1})]),a("li",null,[e(n,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("MongoDB高可用")]),_:1})]),a("li",null,[e(n,{to:"/software/maccms/MAC%20CMS.html"},{default:t(()=>[s("MAC CMS")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:t(()=>[s("Javassist整理")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[s("简易版配置中心&初探原理")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:t(()=>[s("MySQL索引")]),_:1})]),a("li",null,[e(n,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[s("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[e(n,{to:"/intro.html"},{default:t(()=>[s("intro")]),_:1})]),a("li",null,[e(n,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:t(()=>[s("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:t(()=>[s("杂记")]),_:1})])]),d,h,E,_])}const x=o(p,[["render",k],["__file","Nginx的双向认证配置.html.vue"]]);export{x as default};
