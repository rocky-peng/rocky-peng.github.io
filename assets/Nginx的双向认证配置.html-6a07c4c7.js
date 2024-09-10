import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as s,w as p}from"./framework-58787b1c.js";const c={},E=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),u=a("hr",null,null,-1),h=a("hr",null,null,-1),A=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：不知道，是别人的爱情来的太容易，还是自己的八字太硬。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=56f545c6-2df6-4598-af9b-56b365544e48",alt:"",loading:"lazy"})])],-1);function _(f,B){const e=p("RouterLink");return o(),r("div",null,[E,a("ul",null,[a("li",null,[n(e,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:t(()=>[s("MySQL常用命令")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[s("Redis笔记")]),_:1})]),a("li",null,[n(e,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[s("数组转树形结构只需两步")]),_:1})]),a("li",null,[n(e,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:t(()=>[s("Censys搜索引擎学习")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:t(()=>[s("正则表达式匹配第几个符号问题")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:t(()=>[s("IO相关")]),_:1})]),a("li",null,[n(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[s("ShadowsockServerUpdatePort")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[s("简易版配置中心&初探原理")]),_:1})]),a("li",null,[n(e,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:t(()=>[s("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:t(()=>[s("Markdown软件比对")]),_:1})]),a("li",null,[n(e,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:t(()=>[s("GitHub Workflow突然报错")]),_:1})]),a("li",null,[n(e,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:t(()=>[s("raft协议")]),_:1})])]),d,u,h,A])}const m=l(c,[["render",_],["__file","Nginx的双向认证配置.html.vue"]]);export{m as default};
