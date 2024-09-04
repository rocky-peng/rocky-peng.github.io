import{_ as r,$ as d,a0 as o,a1 as e,a2 as n,a3 as i,a4 as l,a5 as c,w as t}from"./framework-b6ede5bc.js";const u={},v=e("h2",{id:"下载离线安装包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载离线安装包","aria-hidden":"true"},"#"),n(" 下载离线安装包")],-1),m={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},E=c(`<p>这里选择了 docker-19.03.12.tgz</p><h2 id="禁用selinux" tabindex="-1"><a class="header-anchor" href="#禁用selinux" aria-hidden="true">#</a> 禁用SELinux</h2><p>如果不禁用的话，本人遇到过如下问题：在开启防火墙的情况下，执行systemctl start docker 卡死。 关闭防火墙后，上面的命令就能正常启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/selinux/config   

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,12),b=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),p=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：不要再减肥了，苦了自己，又苦了体重秤。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=1156fb10-f8d5-4f38-a627-cd6a7eda8880",alt:"",loading:"lazy"})])],-1);function A(B,_){const a=t("ExternalLinkIcon"),s=t("RouterLink");return d(),o("div",null,[v,e("p",null,[n("下载地址： "),e("a",m,[n("https://download.docker.com/linux/static/stable/x86_64/"),i(a)])]),E,e("ul",null,[e("li",null,[i(s,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:l(()=>[n("常见问题")]),_:1})]),e("li",null,[i(s,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:l(()=>[n("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:l(()=>[n("Btrace入门")]),_:1})]),e("li",null,[i(s,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:l(()=>[n("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:l(()=>[n("分库分表")]),_:1})]),e("li",null,[i(s,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:l(()=>[n("InnoDB存储引擎")]),_:1})]),e("li",null,[i(s,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[n("Docker笔记")]),_:1})]),e("li",null,[i(s,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:l(()=>[n("简易版配置中心&初探原理")]),_:1})]),e("li",null,[i(s,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[n("ShadowsockServer配置")]),_:1})]),e("li",null,[i(s,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:l(()=>[n("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[i(s,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:l(()=>[n("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[i(s,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:l(()=>[n("GitHub Workflow突然报错")]),_:1})])]),b,h,p,f])}const g=r(u,[["render",A],["__file","Centos离线安装Docker.html.vue"]]);export{g as default};
