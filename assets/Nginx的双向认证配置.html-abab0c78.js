import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as s,w as p}from"./framework-b3a0f150.js";const c={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),E=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),d=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：岁月不请自来，青春不告而别。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Modern interior of an art gallery in Tokyo, Japan, showcasing stunning architectural design.",loading:"lazy"})])],-1);function B(f,m){const e=p("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[s("K8S 无感发布")]),_:1})]),a("li",null,[n(e,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:t(()=>[s("Censys搜索引擎学习")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:t(()=>[s("线上FullGC频繁的排查")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[s("批量修改git历史记录中的用户名和邮箱")]),_:1})]),a("li",null,[n(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:t(()=>[s("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),a("li",null,[n(e,{to:"/other/JetBrains-License-Server.html"},{default:t(()=>[s("JetBrains-License-Server")]),_:1})]),a("li",null,[n(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[s("Git Merge 、Rebase")]),_:1})]),a("li",null,[n(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[s("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[n(e,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[s("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[n(e,{to:"/software/raft/sofajraft.html"},{default:t(()=>[s("sofajraft")]),_:1})]),a("li",null,[n(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[s("Hbase 总览")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[s("BBR加速")]),_:1})])]),E,d,h,_])}const A=l(c,[["render",B],["__file","Nginx的双向认证配置.html.vue"]]);export{A as default};
