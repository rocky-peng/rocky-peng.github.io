import{_ as c,$ as d,a0 as o,a1 as n,a2 as s,a3 as a,a4 as i,a5 as l,w as r}from"./framework-8c4427da.js";const p={},u=l('<h2 id="后端常用技术" tabindex="-1"><a class="header-anchor" href="#后端常用技术" aria-hidden="true">#</a> 后端常用技术</h2><ol><li><p>支付 支付宝、微信</p></li><li><p>日志收集</p><ul><li><p>日志json化</p></li><li><p>ELK</p></li></ul></li><li><p>环境配置</p></li><li><p>代码发布平台jenkins</p></li></ol><h2 id="如何快速迭代app" tabindex="-1"><a class="header-anchor" href="#如何快速迭代app" aria-hidden="true">#</a> 如何快速迭代app：</h2><ol><li>native + flutter</li><li></li></ol><h2 id="app常见功能" tabindex="-1"><a class="header-anchor" href="#app常见功能" aria-hidden="true">#</a> App常见功能：</h2><ol><li><p>IM 融云（付费）、小米（全免费）</p></li><li><p>支付 支付宝、微信</p></li><li><p>推送 个推、极光</p></li><li><p>地图 高德、腾讯、百度</p></li><li><p>各种社交账号分享、登陆</p></li><li><p>统计 友盟、小米、</p></li><li><p>拍照、录像</p></li></ol><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2>',7),v={href:"https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"期望类似效果：使用命令行打包测试、正式环境的包，并能指定版本，同时打包的apk文件名带有版本号。",-1),b=l(`<li><p>使用jenkins集成打包，并上传蒲公英</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#shell命令：</span>

<span class="token comment">#!/usr/bin/env bash</span>
<span class="token assign-left variable">versionCode</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%y<span class="token variable">\`</span></span>
<span class="token assign-left variable">versionName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%y.%m.%d<span class="token variable">\`</span></span>

<span class="token comment"># 正式包和测试包，版本19.2.14 ：  gradle clean assemble -PVERSION_CODE=19  -PVERSION_NAME=19.2.14</span>
<span class="token comment"># 正式包， 版本19.2.13  ： gradle clean assembleRelease -PVERSION_CODE=19  -PVERSION_NAME=19.2.13</span>
<span class="token comment"># 测试包， 版本19.2.15  ： gradle clean assembleDebug -PVERSION_CODE=19  -PVERSION_NAME=19.2.15</span>

<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token assign-left variable">gradlebin</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> gradle<span class="token variable">\`</span></span>
<span class="token comment">#echo &#39;gradle命令：&#39;\${gradlebin}</span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token variable">\${gradlebin}</span><span class="token string">&#39; clean assemble -PVERSION_CODE=&#39;</span><span class="token variable">\${versionCode}</span><span class="token string">&#39;  -PVERSION_NAME=&#39;</span><span class="token variable">\${versionName}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;执行打包命令：&#39;</span><span class="token variable">\${cmd}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token variable">\${cmd}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;打包成功&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h={href:"https://www.pgyer.com/doc/view/jenkins",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h2><ol><li>清空所有commit记录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>说明：例如将代码提交到git仓库，将一些敏感信息提交，所以需要删除提交记录以彻底清除提交信息，以得到一个干净的仓库且代码不变

<span class="token number">1</span>.Checkout
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> latest_branch

<span class="token number">2</span>. Add all the files
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token number">3</span>. Commit the changes
<span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&quot;commit message&quot;</span>

<span class="token number">4</span>. Delete the branch
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> master

<span class="token number">5</span>.Rename the current branch to master
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master

<span class="token number">6</span>.Finally, force update your repository
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin master

大功告成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建新的git仓库</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Existing folder

<span class="token builtin class-name">cd</span> existing_folder
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@gitlab.com:leyongtech/laijiandu-api-bak.git
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

Existing Git repository

<span class="token builtin class-name">cd</span> existing_repo
<span class="token function">git</span> remote <span class="token function">rename</span> origin old-origin
<span class="token function">git</span> remote <span class="token function">add</span> origin git@gitlab.com:leyongtech/laijiandu-api-bak.git
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--all</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻墙" tabindex="-1"><a class="header-anchor" href="#翻墙" aria-hidden="true">#</a> 翻墙</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>各种系统的shadowsocks客户端:

https://shadowsocks.org/en/download/clients.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh工具" tabindex="-1"><a class="header-anchor" href="#ssh工具" aria-hidden="true">#</a> ssh工具</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>juicessh:

官网：
https://juicessh.com/

安卓：
https://play.google.com/store/apps/details?id=com.sonelli.juicessh


terminus:

安卓：
https://play.google.com/store/apps/details?id=com.server.auditor.ssh.client


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,11),k=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),E=n("hr",null,null,-1),f=n("hr",null,null,-1),_=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：看武打片能减肥，因为里面经常说，你快受（瘦）死吧。 "),n("br"),n("br"),n("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function B(A,x){const t=r("ExternalLinkIcon"),e=r("RouterLink");return d(),o("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[s("使用gradle配置正式环境、测试环境的变量 "),n("a",v,[s("https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016"),a(t)])]),m]),b,n("li",null,[n("p",null,[s("配置蒲公英，进行上传 "),n("a",h,[s("https://www.pgyer.com/doc/view/jenkins"),a(t)])])])]),g,n("ul",null,[n("li",null,[a(e,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[s("MAT工具")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:i(()=>[s("各种网关性能测试")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[s("测试两台服务器间的网速")]),_:1})]),n("li",null,[a(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[s("是时候使用MapStruct替代BeanUtils了")]),_:1})]),n("li",null,[a(e,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:i(()=>[s("PGSQL GIN索引“失效”")]),_:1})]),n("li",null,[a(e,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[s("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[s("index方法压力测试记录")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:i(()=>[s("简易版配置中心&初探原理")]),_:1})]),n("li",null,[a(e,{to:"/other/JetBrains-License-Server.html"},{default:i(()=>[s("JetBrains-License-Server")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:i(()=>[s("分布式事务Seata")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[s("表单重复提交解决方案")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:i(()=>[s("杂记")]),_:1})])]),k,E,f,_])}const D=c(p,[["render",B],["__file","前后端常用技术.html.vue"]]);export{D as default};
