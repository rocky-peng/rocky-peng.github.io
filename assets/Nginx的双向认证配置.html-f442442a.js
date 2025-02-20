import{_ as l,$ as o,a0 as r,a1 as a,a3 as e,a4 as t,a5 as i,a2 as s,w as p}from"./framework-b3a0f150.js";const c={},E=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),d=a("hr",null,null,-1),h=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：考试最崩溃的是看到一道题，模糊的记得老师讲过，但清晰的记得我没听。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=96dfff0f-c34a-40dc-847e-b8d47c65e872",alt:"",loading:"lazy"})])],-1);function _(f,A){const n=p("RouterLink");return o(),r("div",null,[E,a("ul",null,[a("li",null,[e(n,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:t(()=>[s("记一次内存泄漏")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[s("JVM垃圾收集器")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[s("各种网关性能测试")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[s("数组转树形结构只需两步")]),_:1})]),a("li",null,[e(n,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:t(()=>[s("是时候使用MapStruct替代BeanUtils了")]),_:1})]),a("li",null,[e(n,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:t(()=>[s("如何安装Google BBR")]),_:1})]),a("li",null,[e(n,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:t(()=>[s("常用队列")]),_:1})]),a("li",null,[e(n,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:t(()=>[s("MyBatis xml特殊字符处理")]),_:1})]),a("li",null,[e(n,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:t(()=>[s("MySQL三大日志")]),_:1})]),a("li",null,[e(n,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[s("JVM杂项")]),_:1})]),a("li",null,[e(n,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[s("Git历史记录修改用户名和邮箱")]),_:1})]),a("li",null,[e(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:t(()=>[s("杂记")]),_:1})])]),u,d,h,B])}const k=l(c,[["render",_],["__file","Nginx的双向认证配置.html.vue"]]);export{k as default};
