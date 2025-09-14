import{_ as i,$ as t,a0 as r,a1 as s,a3 as e,a4 as l,a5 as o,a2 as n,w as c}from"./framework-6347c55a.js";const d={},u=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>

yum <span class="token function">install</span> <span class="token function">zsh</span>

<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>

centos7修改主机名
<span class="token function">vim</span> /etc/hostname        重启

----

centos6修改主机名
<span class="token function">vim</span> /etc/sysconfig/network  
添加一行：
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>您的主机名


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改" tabindex="-1"><a class="header-anchor" href="#更改" aria-hidden="true">#</a> 更改</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.oh-my-zsh/themes

<span class="token builtin class-name">echo</span> <span class="token variable">$ZSH_THEME</span>          //输出 <span class="token builtin class-name">:</span> robbyrussell

<span class="token function">cp</span> robbyrussell.zsh-theme myrobbyrussell.zsh-theme

<span class="token function">vim</span> myrobbyrussell.zsh-theme

// 修改PROMPT的值为：
<span class="token assign-left variable">PROMPT</span><span class="token operator">=</span><span class="token string">&#39;%{$fg[green]%}%m@%{$fg[magenta]%}%(?..%?%1v)%n:%{$reset_color%}%{$fg[cyan]%}%~# &#39;</span>

保存退出

修改~/.zshrc文件中ZSH_THEME的值myrobbyrussell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="安装jdk" tabindex="-1"><a class="header-anchor" href="#安装jdk" aria-hidden="true">#</a> 安装JDK</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改 ~/.zshrc文件，在末尾处添加：

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_8_HOME</span><span class="token operator">=</span>/jdk1.8.0_181

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">jdk8</span><span class="token operator">=</span><span class="token string">&#39;export JAVA_HOME=$JAVA_8_HOME&#39;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_8_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JAVA_HOME</span>/jre/lib

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>

保存退出，执行：

<span class="token builtin class-name">source</span> ~/.zshrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),v=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),p=s("hr",null,null,-1),m=s("hr",null,null,-1),b=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：你就是个黄焖鸡，又黄又闷又垃圾。 "),s("br"),s("br"),s("img",{src:"https://images.pexels.com/photos/19727174/pexels-photo-19727174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Tranquil winter scene of snow-covered trees in Megève, France amidst the Alps.",loading:"lazy"})])],-1);function h(E,k){const a=c("RouterLink");return t(),r("div",null,[u,s("ul",null,[s("li",null,[e(a,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[n("Notion笔记定时备份")]),_:1})]),s("li",null,[e(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[n("MySQL高可用")]),_:1})]),s("li",null,[e(a,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[n("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),s("li",null,[e(a,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[n("如何安装Google BBR")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:l(()=>[n("线上FullGC频繁的排查")]),_:1})]),s("li",null,[e(a,{to:"/other/JDK8%20G1%20%E5%A0%86%E5%86%85%E5%AD%98%E5%B1%85%E7%84%B6%E4%B8%8D%E9%87%8A%E6%94%BE.html"},{default:l(()=>[n("JDK8 G1 堆内存居然不释放")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:l(()=>[n("分库分表")]),_:1})]),s("li",null,[e(a,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[n("JVM异常处理")]),_:1})]),s("li",null,[e(a,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[n("JetBrains-License-Server")]),_:1})]),s("li",null,[e(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[n("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),s("li",null,[e(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:l(()=>[n("WebSocket SpringBoot Demo")]),_:1})]),s("li",null,[e(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[n("Linux dev shm目录")]),_:1})])]),v,p,m,b])}const _=i(d,[["render",h],["__file","Oh My ZSH.html.vue"]]);export{_ as default};
