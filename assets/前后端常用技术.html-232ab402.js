import{_ as c,$ as d,a0 as o,a1 as n,a2 as s,a3 as a,a4 as i,a5 as l,w as r}from"./framework-16d560c6.js";const p={},u=l('<h2 id="后端常用技术" tabindex="-1"><a class="header-anchor" href="#后端常用技术" aria-hidden="true">#</a> 后端常用技术</h2><ol><li><p>支付 支付宝、微信</p></li><li><p>日志收集</p><ul><li><p>日志json化</p></li><li><p>ELK</p></li></ul></li><li><p>环境配置</p></li><li><p>代码发布平台jenkins</p></li></ol><h2 id="如何快速迭代app" tabindex="-1"><a class="header-anchor" href="#如何快速迭代app" aria-hidden="true">#</a> 如何快速迭代app：</h2><ol><li>native + flutter</li><li></li></ol><h2 id="app常见功能" tabindex="-1"><a class="header-anchor" href="#app常见功能" aria-hidden="true">#</a> App常见功能：</h2><ol><li><p>IM 融云（付费）、小米（全免费）</p></li><li><p>支付 支付宝、微信</p></li><li><p>推送 个推、极光</p></li><li><p>地图 高德、腾讯、百度</p></li><li><p>各种社交账号分享、登陆</p></li><li><p>统计 友盟、小米、</p></li><li><p>拍照、录像</p></li></ol><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2>',7),v={href:"https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"期望类似效果：使用命令行打包测试、正式环境的包，并能指定版本，同时打包的apk文件名带有版本号。",-1),b=l(`<li><p>使用jenkins集成打包，并上传蒲公英</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#shell命令：</span>

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,11),E=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),g=n("hr",null,null,-1),f=n("hr",null,null,-1),_=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：在外面混的再好，在你妈眼里，也就是个玩手机的。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=4f918b38-cac3-4b92-8021-73d84667a759",alt:"",loading:"lazy"})])],-1);function B(A,x){const t=r("ExternalLinkIcon"),e=r("RouterLink");return d(),o("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[s("使用gradle配置正式环境、测试环境的变量 "),n("a",v,[s("https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016"),a(t)])]),m]),b,n("li",null,[n("p",null,[s("配置蒲公英，进行上传 "),n("a",h,[s("https://www.pgyer.com/doc/view/jenkins"),a(t)])])])]),k,n("ul",null,[n("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[s("Notion笔记定时备份")]),_:1})]),n("li",null,[a(e,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:i(()=>[s("JVM垃圾收集器")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:i(()=>[s("KVM 虚拟机安装")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:i(()=>[s("Btrace入门")]),_:1})]),n("li",null,[a(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:i(()=>[s("微博关注关系如何实现")]),_:1})]),n("li",null,[a(e,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:i(()=>[s("JDK命令行工具")]),_:1})]),n("li",null,[a(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:i(()=>[s("提取Docker镜像中的文件")]),_:1})]),n("li",null,[a(e,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:i(()=>[s("是时候使用MapStruct替代BeanUtils了")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[s("kafka")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[s("批量修改git历史记录中的用户名和邮箱")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:i(()=>[s("搭建基于docker的elk平台来分析java日志")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:i(()=>[s("linux_no_space_left_on_device")]),_:1})])]),E,g,f,_])}const D=c(p,[["render",B],["__file","前后端常用技术.html.vue"]]);export{D as default};
