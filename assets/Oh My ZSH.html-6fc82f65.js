import{_ as i,$ as t,a0 as r,a1 as s,a3 as e,a4 as l,a5 as o,a2 as n,w as c}from"./framework-16d560c6.js";const d={},u=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),p=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),v=s("hr",null,null,-1),b=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：我是一条酸菜鱼，又酸又菜，还多余。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=6c397200-3c11-4bae-99f9-f31e4b41c45a",alt:"",loading:"lazy"})])],-1);function h(E,k){const a=c("RouterLink");return t(),r("div",null,[u,s("ul",null,[s("li",null,[e(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:l(()=>[n("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[n("Cordova+Umi项目搭建步骤")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[n("MySQL杂项")]),_:1})]),s("li",null,[e(a,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[n("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),s("li",null,[e(a,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[n("你真的会拼接字符串吗？")]),_:1})]),s("li",null,[e(a,{to:"/other/Spring%20RetryTemplate.html"},{default:l(()=>[n("Spring RetryTemplate")]),_:1})]),s("li",null,[e(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[n("Redis高可用")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[n("MySQL索引")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[n("简易版配置中心&初探原理")]),_:1})]),s("li",null,[e(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[n("CountDownLatch源码解读")]),_:1})]),s("li",null,[e(a,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[n("JVM杂项")]),_:1})]),s("li",null,[e(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[n("GitHub Workflow突然报错")]),_:1})])]),p,v,b,m])}const f=i(d,[["render",h],["__file","Oh My ZSH.html.vue"]]);export{f as default};
