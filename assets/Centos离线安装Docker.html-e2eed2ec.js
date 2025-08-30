import{_ as d,$ as r,a0 as o,a1 as e,a2 as n,a3 as i,a4 as l,a5 as c,w as t}from"./framework-5e03f5af.js";const u={},v=e("h2",{id:"下载离线安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载离线安装包","aria-hidden":"true"},"#"),n(" 下载离线安装包")],-1),m={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>这里选择了 docker-19.03.12.tgz</p><h2 id="禁用selinux" tabindex="-1"><a class="header-anchor" href="#禁用selinux" aria-hidden="true">#</a> 禁用SELinux</h2><p>如果不禁用的话，本人遇到过如下问题：在开启防火墙的情况下，执行systemctl start docker 卡死。 关闭防火墙后，上面的命令就能正常启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config   

编辑上面的文件把SELINUX设置为disabled，重启后生效，如果不重启可以通过命令临时生效:  setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf 离线安装包

mv docker/* /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑开机启动脚本" tabindex="-1"><a class="header-anchor" href="#编辑开机启动脚本" aria-hidden="true">#</a> 编辑开机启动脚本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/systemd/system/docker.service

粘贴下面的内容：

[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
    
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
    
[Install]
WantedBy=multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动Docker</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//赋予执行权限
chmod +x /etc/systemd/system/docker.service

//设置开启启动
systemctl enable docker

//启动docker
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),p=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：如果你经常觉得不开心，恭喜你，你已进入成年人的标准状态。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/33656275/pexels-photo-33656275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Free stock photo of break out, breakout, city snap",loading:"lazy"})])],-1);function A(_,k){const a=t("ExternalLinkIcon"),s=t("RouterLink");return r(),o("div",null,[v,e("p",null,[n("下载地址： "),e("a",m,[n("https://download.docker.com/linux/static/stable/x86_64/"),i(a)])]),b,e("ul",null,[e("li",null,[i(s,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[n("Notion笔记定时备份")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:l(()=>[n("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[i(s,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[n("MySQL高可用")]),_:1})]),e("li",null,[i(s,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:l(()=>[n("JVM参数设置")]),_:1})]),e("li",null,[i(s,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:l(()=>[n("数组转树形结构只需两步")]),_:1})]),e("li",null,[i(s,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[n("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[i(s,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[n("MongoDB高可用")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:l(()=>[n("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[n("Javassist整理")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:l(()=>[n("MySQL索引")]),_:1})]),e("li",null,[i(s,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:l(()=>[n("Java面试基础")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[n("表单重复提交解决方案")]),_:1})])]),h,E,p,f])}const g=d(u,[["render",A],["__file","Centos离线安装Docker.html.vue"]]);export{g as default};
