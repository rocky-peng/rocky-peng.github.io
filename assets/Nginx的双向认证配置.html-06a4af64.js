import{_ as o,$ as l,a0 as r,a1 as a,a3 as n,a4 as t,a5 as i,a2 as s,w as c}from"./framework-b3a0f150.js";const p={},u=i(`<p>没有时间详写，先列个大纲</p><h2 id="生成服务端证书" tabindex="-1"><a class="header-anchor" href="#生成服务端证书" aria-hidden="true">#</a> 生成服务端证书</h2><h2 id="生成客户端证书" tabindex="-1"><a class="header-anchor" href="#生成客户端证书" aria-hidden="true">#</a> 生成客户端证书</h2><h2 id="配置nginx服务端证书并开启ssl" tabindex="-1"><a class="header-anchor" href="#配置nginx服务端证书并开启ssl" aria-hidden="true">#</a> 配置nginx服务端证书并开启ssl</h2><h2 id="配置nginx客户端证书并开启验证" tabindex="-1"><a class="header-anchor" href="#配置nginx客户端证书并开启验证" aria-hidden="true">#</a> 配置nginx客户端证书并开启验证</h2><p>合下配置如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>com<span class="token operator">/</span>privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>

ssl_client_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>panel<span class="token operator">/</span>vhost<span class="token operator">/</span>cert<span class="token operator">/</span>client<span class="token punctuation">.</span>crt<span class="token punctuation">;</span>
ssl_verify_client on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,9),E=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),d=a("hr",null,null,-1),h=a("hr",null,null,-1),B=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),s("：上海是商海北京就是背景，理想就是离乡，平民就是拼命。 "),a("br"),a("br"),a("img",{src:"https://images.pexels.com/photos/7928388/pexels-photo-7928388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Vibrant pink lotus bud with green leaves, showcasing the beauty of nature.",loading:"lazy"})])],-1);function A(_,f){const e=c("RouterLink");return l(),r("div",null,[u,a("ul",null,[a("li",null,[n(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[s("Cordova+Umi项目搭建步骤")]),_:1})]),a("li",null,[n(e,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:t(()=>[s("Docker进行资源隔离")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[s("弱引用示例")]),_:1})]),a("li",null,[n(e,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("MySQL高可用")]),_:1})]),a("li",null,[n(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[s("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:t(()=>[s("测试两台服务器间的网速")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[s("index方法压力测试记录")]),_:1})]),a("li",null,[n(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[s("多台centos服务器，文件互相备份")]),_:1})]),a("li",null,[n(e,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:t(()=>[s("MyBatis xml特殊字符处理")]),_:1})]),a("li",null,[n(e,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[s("Git Merge 、Rebase")]),_:1})]),a("li",null,[n(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[s("ReentrantLock源码解读")]),_:1})]),a("li",null,[n(e,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:t(()=>[s("PostgreSQL JSON类型字段常用操作")]),_:1})])]),E,d,h,B])}const m=o(p,[["render",A],["__file","Nginx的双向认证配置.html.vue"]]);export{m as default};
