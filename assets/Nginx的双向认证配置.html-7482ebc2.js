import{_ as o,$ as l,a0 as r,a1 as a,a3 as s,a4 as t,a5 as i,a2 as e,w as p}from"./framework-b3a0f150.js";const c={},d=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),_=a("hr",null,null,-1),E=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：不是你哪里不好，其实你哪里都好，就是没钱这点不好。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Modern interior of an art gallery in Tokyo, Japan, showcasing stunning architectural design.",loading:"lazy"})])],-1);function m(k,f){const n=p("RouterLink");return l(),r("div",null,[d,a("ul",null,[a("li",null,[s(n,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:t(()=>[e("synchronized原理深度剖析")]),_:1})]),a("li",null,[s(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[s(n,{to:"/other/Spring%20RetryTemplate.html"},{default:t(()=>[e("Spring RetryTemplate")]),_:1})]),a("li",null,[s(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:t(()=>[e("linux_no_space_left_on_device")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:t(()=>[e("分库分表")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[e("异地多活")]),_:1})]),a("li",null,[s(n,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[e("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),a("li",null,[s(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:t(()=>[e("RocketMQ")]),_:1})]),a("li",null,[s(n,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:t(()=>[e("Java面试基础")]),_:1})]),a("li",null,[s(n,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:t(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),a("li",null,[s(n,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:t(()=>[e("Docker跨主机通信方案")]),_:1})]),a("li",null,[s(n,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[e("PostgreSQL高可用")]),_:1})])]),u,h,_,E])}const B=o(c,[["render",m],["__file","Nginx的双向认证配置.html.vue"]]);export{B as default};
