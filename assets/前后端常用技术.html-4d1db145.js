import{_ as c,$ as o,a0 as d,a1 as n,a2 as s,a3 as a,a4 as i,a5 as l,w as r}from"./framework-b3a0f150.js";const p={},u=l('<h2 id="后端常用技术" tabindex="-1"><a class="header-anchor" href="#后端常用技术" aria-hidden="true">#</a> 后端常用技术</h2><ol><li><p>支付 支付宝、微信</p></li><li><p>日志收集</p><ul><li><p>日志json化</p></li><li><p>ELK</p></li></ul></li><li><p>环境配置</p></li><li><p>代码发布平台jenkins</p></li></ol><h2 id="如何快速迭代app" tabindex="-1"><a class="header-anchor" href="#如何快速迭代app" aria-hidden="true">#</a> 如何快速迭代app：</h2><ol><li>native + flutter</li><li></li></ol><h2 id="app常见功能" tabindex="-1"><a class="header-anchor" href="#app常见功能" aria-hidden="true">#</a> App常见功能：</h2><ol><li><p>IM 融云（付费）、小米（全免费）</p></li><li><p>支付 支付宝、微信</p></li><li><p>推送 个推、极光</p></li><li><p>地图 高德、腾讯、百度</p></li><li><p>各种社交账号分享、登陆</p></li><li><p>统计 友盟、小米、</p></li><li><p>拍照、录像</p></li></ol><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2>',7),v={href:"https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"期望类似效果：使用命令行打包测试、正式环境的包，并能指定版本，同时打包的apk文件名带有版本号。",-1),b=l(`<li><p>使用jenkins集成打包，并上传蒲公英</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#shell命令：</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h={href:"https://www.pgyer.com/doc/view/jenkins",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h2><ol><li>清空所有commit记录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>说明：例如将代码提交到git仓库，将一些敏感信息提交，所以需要删除提交记录以彻底清除提交信息，以得到一个干净的仓库且代码不变

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,11),g=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),E=n("hr",null,null,-1),f=n("hr",null,null,-1),_=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：美妙的歌声可以超越众人，劣质的歌声可以超度众人。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=208c4036-5cc3-474d-8da2-f1045e427f32",alt:"",loading:"lazy"})])],-1);function A(B,x){const t=r("ExternalLinkIcon"),e=r("RouterLink");return o(),d("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[s("使用gradle配置正式环境、测试环境的变量 "),n("a",v,[s("https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016"),a(t)])]),m]),b,n("li",null,[n("p",null,[s("配置蒲公英，进行上传 "),n("a",h,[s("https://www.pgyer.com/doc/view/jenkins"),a(t)])])])]),k,n("ul",null,[n("li",null,[a(e,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:i(()=>[s("synchronized原理深度剖析")]),_:1})]),n("li",null,[a(e,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[s("Git合并多个提交并push到远程仓库")]),_:1})]),n("li",null,[a(e,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[s("PostgreSQL定时备份")]),_:1})]),n("li",null,[a(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:i(()=>[s("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),n("li",null,[a(e,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:i(()=>[s("K8S 无感发布")]),_:1})]),n("li",null,[a(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:i(()=>[s("你真的会拼接字符串吗？")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:i(()=>[s("MySQL锁、事务、隔离级别")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:i(()=>[s("Flutter开发需要涉及的知识点大纲")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:i(()=>[s("简易版配置中心&初探原理")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:i(()=>[s("SQL优化")]),_:1})]),n("li",null,[a(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:i(()=>[s("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),n("li",null,[a(e,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:i(()=>[s("WebSocket SpringBoot Demo")]),_:1})])]),g,E,f,_])}const S=c(p,[["render",A],["__file","前后端常用技术.html.vue"]]);export{S as default};
