import{_ as l,$ as o,a0 as r,a1 as a,a3 as e,a4 as t,a5 as i,a2 as n,w as c}from"./framework-b3a0f150.js";const p={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),h=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),n("：上了那么多年班从没请过假，我怕公司发现，有没有我都一样。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=bfa20b2a-44ba-42b6-98cc-ac1bdf95d0de",alt:"",loading:"lazy"})])],-1);function f(A,k){const s=c("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[e(s,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:t(()=>[n("RSA 加密解密多语言实现方案")]),_:1})]),a("li",null,[e(s,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[n("各种网关性能测试")]),_:1})]),a("li",null,[e(s,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:t(()=>[n("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[e(s,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:t(()=>[n("Markdown Mermaid画图实例")]),_:1})]),a("li",null,[e(s,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:t(()=>[n("PGSQL GIN索引“失效”")]),_:1})]),a("li",null,[e(s,{to:"/software/maccms/MAC%20CMS.html"},{default:t(()=>[n("MAC CMS")]),_:1})]),a("li",null,[e(s,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:t(()=>[n("数据同步方案")]),_:1})]),a("li",null,[e(s,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:t(()=>[n("Centos离线安装Docker")]),_:1})]),a("li",null,[e(s,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:t(()=>[n("Spring Boot升级到2 6 x踩的坑")]),_:1})]),a("li",null,[e(s,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:t(()=>[n("GitHub Workflow突然报错")]),_:1})]),a("li",null,[e(s,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[n("BBR加速")]),_:1})]),a("li",null,[e(s,{to:"/software/linux/Linux.html"},{default:t(()=>[n("Linux")]),_:1})])]),d,E,h,_])}const m=l(p,[["render",f],["__file","Nginx的双向认证配置.html.vue"]]);export{m as default};
