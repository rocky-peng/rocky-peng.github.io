import{_ as i,$ as t,a0 as r,a1 as s,a3 as e,a4 as l,a5 as c,a2 as n,w as o}from"./framework-b3a0f150.js";const d={},u=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),p=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),v=s("hr",null,null,-1),b=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：这么多年没掉入桃色陷阱，靠的就是两个字，没钱。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=ab30f965-49ed-47e7-9983-045668c5519d",alt:"",loading:"lazy"})])],-1);function h(E,A){const a=o("RouterLink");return t(),r("div",null,[u,s("ul",null,[s("li",null,[e(a,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[n("你真的会拼接字符串吗？")]),_:1})]),s("li",null,[e(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:l(()=>[n("Centos离线安装Docker")]),_:1})]),s("li",null,[e(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:l(()=>[n("Arthas使用记录")]),_:1})]),s("li",null,[e(a,{to:"/other/JetBrains-License-Server.html"},{default:l(()=>[n("JetBrains-License-Server")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:l(()=>[n("SQL优化")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:l(()=>[n("批量替换文件名中的指定字符串")]),_:1})]),s("li",null,[e(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[n("Mermaid示例")]),_:1})]),s("li",null,[e(a,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:l(()=>[n("SpringCloud总体认识")]),_:1})]),s("li",null,[e(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:l(()=>[n("vuepress-theme-hope 添加谷歌广告")]),_:1})]),s("li",null,[e(a,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:l(()=>[n("PostgreSQL JSON类型字段常用操作")]),_:1})]),s("li",null,[e(a,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:l(()=>[n("https和http混用解决办法")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[n("表单重复提交解决方案")]),_:1})])]),p,v,b,m])}const B=i(d,[["render",h],["__file","Oh My ZSH.html.vue"]]);export{B as default};
