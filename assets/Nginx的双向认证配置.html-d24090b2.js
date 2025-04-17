import{_ as o,$ as l,a0 as r,a1 as a,a3 as n,a4 as t,a5 as p,a2 as e,w as i}from"./framework-b3a0f150.js";const c={},u=p(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),h=a("hr",null,null,-1),E=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：人生的出场顺序很重要，不是你不够好，而是你来得不够巧。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Modern interior of an art gallery in Tokyo, Japan, showcasing stunning architectural design.",loading:"lazy"})])],-1);function _(k,m){const s=i("RouterLink");return l(),r("div",null,[u,a("ul",null,[a("li",null,[n(s,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:t(()=>[e("MySQL常用命令")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:t(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),a("li",null,[n(s,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:t(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),a("li",null,[n(s,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:t(()=>[e("是时候使用MapStruct替代BeanUtils了")]),_:1})]),a("li",null,[n(s,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:t(()=>[e("提取Docker镜像中的文件")]),_:1})]),a("li",null,[n(s,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:t(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[n(s,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[e("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[n(s,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:t(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),a("li",null,[n(s,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[e("推荐几个适用小工具")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:t(()=>[e("分布式事务Seata")]),_:1})]),a("li",null,[n(s,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[e("vuepress-theme-hope使用心得")]),_:1})]),a("li",null,[n(s,{to:"/software/linux/Linux.html"},{default:t(()=>[e("Linux")]),_:1})])]),d,h,E,B])}const f=o(c,[["render",_],["__file","Nginx的双向认证配置.html.vue"]]);export{f as default};
