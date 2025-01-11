import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as t,a5 as p,a2 as e,w as i}from"./framework-b3a0f150.js";const c={},u=p(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),h=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),d=a("hr",null,null,-1),E=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：本来我没有什么择偶标准，直到遇到了你，我才知道你这样的不行。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=f226cbc1-3f27-45d1-bc08-e18c81c6e4ed",alt:"",loading:"lazy"})])],-1);function _(m,A){const s=i("RouterLink");return o(),r("div",null,[u,a("ul",null,[a("li",null,[n(s,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:t(()=>[e("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:t(()=>[e("Oh My ZSH")]),_:1})]),a("li",null,[n(s,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:t(()=>[e("Git合并多个提交并push到远程仓库")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:t(()=>[e("Btrace入门")]),_:1})]),a("li",null,[n(s,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[n(s,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[e("JDK命令行工具")]),_:1})]),a("li",null,[n(s,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:t(()=>[e("你真的会拼接字符串吗？")]),_:1})]),a("li",null,[n(s,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[e("SQL优化")]),_:1})]),a("li",null,[n(s,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:t(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),a("li",null,[n(s,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:t(()=>[e("PostgreSQL JSON类型字段常用操作")]),_:1})]),a("li",null,[n(s,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:t(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),a("li",null,[n(s,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:t(()=>[e("WebSocket SpringBoot Demo")]),_:1})])]),h,d,E,B])}const k=l(c,[["render",_],["__file","Nginx的双向认证配置.html.vue"]]);export{k as default};
