import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as e,w as p}from"./framework-b3a0f150.js";const c={},d=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),E=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：别想着天上掉馅饼，你根本接不住。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/7928388/pexels-photo-7928388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Vibrant pink lotus bud with green leaves, showcasing the beauty of nature.",loading:"lazy"})])],-1);function A(m,k){const s=p("RouterLink");return o(),r("div",null,[d,a("ul",null,[a("li",null,[n(s,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[e("Redis笔记")]),_:1})]),a("li",null,[n(s,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[e("数组转树形结构只需两步")]),_:1})]),a("li",null,[n(s,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:t(()=>[e("提取Docker镜像中的文件")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:t(()=>[e("线上FullGC频繁的排查")]),_:1})]),a("li",null,[n(s,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:t(()=>[e("高可用通用方案")]),_:1})]),a("li",null,[n(s,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[e("Docker笔记")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[e("InnoDB存储引擎")]),_:1})]),a("li",null,[n(s,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[e("Git Merge 、Rebase")]),_:1})]),a("li",null,[n(s,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[e("Mermaid示例")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[e("ESRally性能测试步骤")]),_:1})]),a("li",null,[n(s,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:t(()=>[e("https和http混用解决办法")]),_:1})])]),u,h,E,_])}const f=l(c,[["render",A],["__file","Nginx的双向认证配置.html.vue"]]);export{f as default};
