import{_ as d,$ as r,a0 as c,a1 as e,a2 as n,a3 as i,a4 as l,a5 as o,w as t}from"./framework-f719d9e2.js";const u={},v=e("h2",{id:"下载离线安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载离线安装包","aria-hidden":"true"},"#"),n(" 下载离线安装包")],-1),m={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},E=o(`<p>这里选择了 docker-19.03.12.tgz</p><h2 id="禁用selinux" tabindex="-1"><a class="header-anchor" href="#禁用selinux" aria-hidden="true">#</a> 禁用SELinux</h2><p>如果不禁用的话，本人遇到过如下问题：在开启防火墙的情况下，执行systemctl start docker 卡死。 关闭防火墙后，上面的命令就能正常启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config   

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：不是老歌变好听了，只是我们不再年轻了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/32845665/pexels-photo-32845665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Сотрудник на заводе НЛМК",loading:"lazy"})])],-1);function p(A,_){const a=t("ExternalLinkIcon"),s=t("RouterLink");return r(),c("div",null,[v,e("p",null,[n("下载地址： "),e("a",m,[n("https://download.docker.com/linux/static/stable/x86_64/"),i(a)])]),E,e("ul",null,[e("li",null,[i(s,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[n("记一次内存泄漏")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:l(()=>[n("MAT工具")]),_:1})]),e("li",null,[i(s,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:l(()=>[n("Docker进行资源隔离")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:l(()=>[n("测试两台服务器间的网速")]),_:1})]),e("li",null,[i(s,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:l(()=>[n("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[i(s,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:l(()=>[n("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:l(()=>[n("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:l(()=>[n("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/gperftools.html"},{default:l(()=>[n("gperftools")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[n("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[i(s,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:l(()=>[n("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[i(s,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:l(()=>[n("Linux dev shm目录")]),_:1})])]),b,h,B,f])}const x=d(u,[["render",p],["__file","Centos离线安装Docker.html.vue"]]);export{x as default};
