import{_ as i,$ as t,a0 as r,a1 as s,a3 as e,a4 as l,a5 as o,a2 as n,w as c}from"./framework-4ae679b7.js";const d={},u=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),p=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),v=s("hr",null,null,-1),m=s("hr",null,null,-1),b=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：为什么都是后浪，有些人活成了榜样，大概是他家有前浪吧。 "),s("br"),s("br"),s("img",{src:"https://images.pexels.com/photos/19727174/pexels-photo-19727174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Tranquil winter scene of snow-covered trees in Megève, France amidst the Alps.",loading:"lazy"})])],-1);function h(E,k){const a=c("RouterLink");return t(),r("div",null,[u,s("ul",null,[s("li",null,[e(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:l(()=>[n("KVM 虚拟机安装")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[n("Redis笔记")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[n("MySQL常用命令")]),_:1})]),s("li",null,[e(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[n("JDK命令行工具")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:l(()=>[n("Markdown Mermaid画图实例")]),_:1})]),s("li",null,[e(a,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[n("Censys搜索引擎学习")]),_:1})]),s("li",null,[e(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[n("MongoDB高可用")]),_:1})]),s("li",null,[e(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:l(()=>[n("提取Docker镜像中的文件")]),_:1})]),s("li",null,[e(a,{to:"/other/Cornell%20Notes%20System.html"},{default:l(()=>[n("Cornell Notes System")]),_:1})]),s("li",null,[e(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[n("Mermaid示例")]),_:1})]),s("li",null,[e(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[n("K8S常用命令")]),_:1})]),s("li",null,[e(a,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[n("Linux dev shm目录")]),_:1})])]),p,v,m,b])}const _=i(d,[["render",h],["__file","Oh My ZSH.html.vue"]]);export{_ as default};
