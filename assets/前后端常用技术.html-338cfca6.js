import{_ as o,$ as c,a0 as d,a1 as n,a2 as s,a3 as a,a4 as i,a5 as l,w as r}from"./framework-b3a0f150.js";const p={},u=l('<h2 id="后端常用技术" tabindex="-1"><a class="header-anchor" href="#后端常用技术" aria-hidden="true">#</a> 后端常用技术</h2><ol><li><p>支付 支付宝、微信</p></li><li><p>日志收集</p><ul><li><p>日志json化</p></li><li><p>ELK</p></li></ul></li><li><p>环境配置</p></li><li><p>代码发布平台jenkins</p></li></ol><h2 id="如何快速迭代app" tabindex="-1"><a class="header-anchor" href="#如何快速迭代app" aria-hidden="true">#</a> 如何快速迭代app：</h2><ol><li>native + flutter</li><li></li></ol><h2 id="app常见功能" tabindex="-1"><a class="header-anchor" href="#app常见功能" aria-hidden="true">#</a> App常见功能：</h2><ol><li><p>IM 融云（付费）、小米（全免费）</p></li><li><p>支付 支付宝、微信</p></li><li><p>推送 个推、极光</p></li><li><p>地图 高德、腾讯、百度</p></li><li><p>各种社交账号分享、登陆</p></li><li><p>统计 友盟、小米、</p></li><li><p>拍照、录像</p></li></ol><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2>',7),v={href:"https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"期望类似效果：使用命令行打包测试、正式环境的包，并能指定版本，同时打包的apk文件名带有版本号。",-1),b=l(`<li><p>使用jenkins集成打包，并上传蒲公英</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#shell命令：</span>

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,11),g=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),k=n("hr",null,null,-1),f=n("hr",null,null,-1),A=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：不要总对别人掏心掏肺，其实很多人不吃内脏。 "),n("br"),n("br"),n("img",{src:"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up shot of a person coding on a laptop, focusing on the hands and screen.",loading:"lazy"})])],-1);function _(B,x){const t=r("ExternalLinkIcon"),e=r("RouterLink");return c(),d("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[s("使用gradle配置正式环境、测试环境的变量 "),n("a",v,[s("https://blog.csdn.net/linidserggbvxdsefgh/article/details/78249016"),a(t)])]),m]),b,n("li",null,[n("p",null,[s("配置蒲公英，进行上传 "),n("a",h,[s("https://www.pgyer.com/doc/view/jenkins"),a(t)])])])]),E,n("ul",null,[n("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[s("Notion笔记定时备份")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:i(()=>[s("Cordova+Umi项目搭建步骤")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[s("MySQL杂项")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[s("kafka")]),_:1})]),n("li",null,[a(e,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:i(()=>[s("你真的会拼接字符串吗？")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/gperftools.html"},{default:i(()=>[s("gperftools")]),_:1})]),n("li",null,[a(e,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[s("Java语言完成notion笔记备份")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[s("ES杂项")]),_:1})]),n("li",null,[a(e,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:i(()=>[s("ReentrantLock源码解读")]),_:1})]),n("li",null,[a(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[s("Git历史记录修改用户名和邮箱")]),_:1})]),n("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:i(()=>[s("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})]),n("li",null,[a(e,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[s("PostgreSQL高可用")]),_:1})])]),g,k,f,A])}const w=o(p,[["render",_],["__file","前后端常用技术.html.vue"]]);export{w as default};
