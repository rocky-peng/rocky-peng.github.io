import{_ as i,$ as t,a0 as o,a1 as s,a3 as a,a4 as l,a5 as r,a2 as n,w as c}from"./framework-eaf397e6.js";const d={},p=r(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,8),u=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),v=s("hr",null,null,-1),b=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：混到现在，拿得起放得下的，只有筷子。 "),s("br"),s("br"),s("img",{src:"https://images.pexels.com/photos/19727180/pexels-photo-19727180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Serene winter scene of a snowy chalet nestled in a forest, Megève, Auvergne-Rhône-Alpes.",loading:"lazy"})])],-1);function h(E,A){const e=c("RouterLink");return t(),o("div",null,[p,s("ul",null,[s("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9https%E8%AF%81%E4%B9%A6%E3%80%81%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F.html"},{default:l(()=>[n("免费https证书、自动续期")]),_:1})]),s("li",null,[a(e,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[n("Git合并多个提交并push到远程仓库")]),_:1})]),s("li",null,[a(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[n("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),s("li",null,[a(e,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:l(()=>[n("微博关注关系如何实现")]),_:1})]),s("li",null,[a(e,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[n("测试两台服务器间的网速")]),_:1})]),s("li",null,[a(e,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:l(()=>[n("如何安装Google BBR")]),_:1})]),s("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:l(()=>[n("ShadowsockServerUpdatePort")]),_:1})]),s("li",null,[a(e,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:l(()=>[n("linux_no_space_left_on_device")]),_:1})]),s("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[n("ShadowsockServer配置")]),_:1})]),s("li",null,[a(e,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:l(()=>[n("前后端常用技术")]),_:1})]),s("li",null,[a(e,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:l(()=>[n("vuepress-theme-hope 添加谷歌广告")]),_:1})]),s("li",null,[a(e,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:l(()=>[n("CentOS7下Docker端口映射后防火墙失效")]),_:1})])]),u,v,b,m])}const _=i(d,[["render",h],["__file","Oh My ZSH.html.vue"]]);export{_ as default};
