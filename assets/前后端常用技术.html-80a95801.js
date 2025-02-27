import{_ as c,$ as d,a0 as o,a1 as n,a2 as s,a3 as a,a4 as i,a5 as l,w as r}from"./framework-b3a0f150.js";const p={},u=l('<h2 id="后端常用技术" tabindex="-1"><a class="header-anchor" href="#后端常用技术" aria-hidden="true">#</a> 后端常用技术</h2><ol><li><p>支付 支付宝、微信</p></li><li><p>日志收集</p><ul><li><p>日志json化</p></li><li><p>ELK</p></li></ul></li><li><p>环境配置</p></li><li><p>代码发布平台jenkins</p></li></ol><h2 id="如何快速迭代app" tabindex="-1"><a class="header-anchor" href="#如何快速迭代app" aria-hidden="true">#</a> 如何快速迭代app：</h2><ol><li>native + flutter</li><li></li></ol><h2 id="app常见功能" tabindex="-1"><a class="header-anchor" href="#app常见功能" aria-hidden="true">#</a> App常见功能：</h2><ol><li><p>IM 融云（付费）、小米（全免费）</p></li><li><p>支付 支付宝、微信</p></li><li><p>推送 个推、极光</p></li><li><p>地图 高德、腾讯、百度</p></li><li><p>各种社交账号分享、登陆</p></li><li><p>统计 友盟、小米、</p></li><li><p>拍照、录像</p></li></ol><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2>',7),v={href:"https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"期望类似效果：使用命令行打包测试、正式环境的包，并能指定版本，同时打包的apk文件名带有版本号。",-1),b=l(`<li><p>使用jenkins集成打包，并上传蒲公英</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#shell命令：</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h={href:"https://www.pgyer.com/doc/view/jenkins",target:"_blank",rel:"noopener noreferrer"},E=l(`<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h2><ol><li>清空所有commit记录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>说明：例如将代码提交到git仓库，将一些敏感信息提交，所以需要删除提交记录以彻底清除提交信息，以得到一个干净的仓库且代码不变

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,11),k=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),g=n("hr",null,null,-1),f=n("hr",null,null,-1),B=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：钥匙圈是非常实用的小工具，它可以让你，一次把所有钥匙都丢光。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d0fbf1d2-9dfa-43c8-b47b-358c8df78da9",alt:"",loading:"lazy"})])],-1);function A(_,x){const t=r("ExternalLinkIcon"),e=r("RouterLink");return d(),o("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[s("使用gradle配置正式环境、测试环境的变量 "),n("a",v,[s("https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016"),a(t)])]),m]),b,n("li",null,[n("p",null,[s("配置蒲公英，进行上传 "),n("a",h,[s("https://www.pgyer.com/doc/view/jenkins"),a(t)])])])]),E,n("ul",null,[n("li",null,[a(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[s("微博关注关系如何实现")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:i(()=>[s("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),n("li",null,[a(e,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:i(()=>[s("Paxos算法")]),_:1})]),n("li",null,[a(e,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[s("Docker笔记")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:i(()=>[s("Javassist整理")]),_:1})]),n("li",null,[a(e,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[s("AQS源码解读")]),_:1})]),n("li",null,[a(e,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:i(()=>[s("前端axios下载csv文件乱码")]),_:1})]),n("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:i(()=>[s("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:i(()=>[s("分布式问题")]),_:1})]),n("li",null,[a(e,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:i(()=>[s("Docker跨主机通信方案")]),_:1})]),n("li",null,[a(e,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:i(()=>[s("Docker隐射的端口外网不能访问")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:i(()=>[s("表单重复提交解决方案")]),_:1})])]),k,g,f,B])}const w=c(p,[["render",A],["__file","前后端常用技术.html.vue"]]);export{w as default};
