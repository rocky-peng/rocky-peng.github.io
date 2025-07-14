import{_ as d,$ as r,a0 as o,a1 as e,a2 as n,a3 as i,a4 as l,a5 as c,w as t}from"./framework-f719d9e2.js";const u={},v=e("h2",{id:"下载离线安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载离线安装包","aria-hidden":"true"},"#"),n(" 下载离线安装包")],-1),m={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},h=c(`<p>这里选择了 docker-19.03.12.tgz</p><h2 id="禁用selinux" tabindex="-1"><a class="header-anchor" href="#禁用selinux" aria-hidden="true">#</a> 禁用SELinux</h2><p>如果不禁用的话，本人遇到过如下问题：在开启防火墙的情况下，执行systemctl start docker 卡死。 关闭防火墙后，上面的命令就能正常启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config   

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),E=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：别对我说永远，我活不到那个点。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/32964491/pexels-photo-32964491.png?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Olympic Sports Center Subway Station in Beijing, China，中国北京奥林匹克地铁站，中國北京奧林匹克地鐵站",loading:"lazy"})])],-1);function _(x,k){const a=t("ExternalLinkIcon"),s=t("RouterLink");return r(),o("div",null,[v,e("p",null,[n("下载地址： "),e("a",m,[n("https://download.docker.com/linux/static/stable/x86_64/"),i(a)])]),h,e("ul",null,[e("li",null,[i(s,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:l(()=>[n("Oh My ZSH")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[n("MySQL常用命令")]),_:1})]),e("li",null,[i(s,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:l(()=>[n("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[i(s,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:l(()=>[n("随记")]),_:1})]),e("li",null,[i(s,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:l(()=>[n("Censys搜索引擎学习")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mq/kafka.html"},{default:l(()=>[n("kafka")]),_:1})]),e("li",null,[i(s,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:l(()=>[n("Hadoop 一")]),_:1})]),e("li",null,[i(s,{to:"/other/JDK8%20G1%20%E5%A0%86%E5%86%85%E5%AD%98%E5%B1%85%E7%84%B6%E4%B8%8D%E9%87%8A%E6%94%BE.html"},{default:l(()=>[n("JDK8 G1 堆内存居然不释放")]),_:1})]),e("li",null,[i(s,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:l(()=>[n("Mermaid示例")]),_:1})]),e("li",null,[i(s,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[n("Linux dev shm目录")]),_:1})]),e("li",null,[i(s,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:l(()=>[n("raft协议")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:l(()=>[n("表单重复提交解决方案")]),_:1})])]),b,p,E,f])}const y=d(u,[["render",_],["__file","Centos离线安装Docker.html.vue"]]);export{y as default};
