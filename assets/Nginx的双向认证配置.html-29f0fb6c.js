import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as s,w as p}from"./framework-b3a0f150.js";const c={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),d=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),E=a("hr",null,null,-1),h=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：别总想着，把今天的事情拖到明天，后天大后天都是好日子啊。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/7928388/pexels-photo-7928388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Vibrant pink lotus bud with green leaves, showcasing the beauty of nature.",loading:"lazy"})])],-1);function _(A,k){const e=p("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[s("Notion笔记定时备份")]),_:1})]),a("li",null,[n(e,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:t(()=>[s("常见问题")]),_:1})]),a("li",null,[n(e,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:t(()=>[s("Git合并多个提交并push到远程仓库")]),_:1})]),a("li",null,[n(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("MySQL高可用")]),_:1})]),a("li",null,[n(e,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[s("数组转树形结构只需两步")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:t(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),a("li",null,[n(e,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[s("Arthas使用记录")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[s("gperftools")]),_:1})]),a("li",null,[n(e,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[s("ES杂项")]),_:1})]),a("li",null,[n(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:t(()=>[s("Docker隐射的端口外网不能访问")]),_:1})]),a("li",null,[n(e,{to:"/software/linux/Linux.html"},{default:t(()=>[s("Linux")]),_:1})]),a("li",null,[n(e,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[s("Hbase 总览")]),_:1})])]),d,E,h,B])}const m=l(c,[["render",_],["__file","Nginx的双向认证配置.html.vue"]]);export{m as default};
