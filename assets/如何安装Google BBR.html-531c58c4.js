const e=JSON.parse(`{"key":"v-6404e754","path":"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html","title":"如何安装Google BBR","lang":"zh-CN","frontmatter":{"title":"如何安装Google BBR","date":"2023-11-09T00:00:00.000Z","tag":["BBR"],"description":"BBR 是google发布一个网络拥塞算法，相比其他算法而言其性能更高，能更好的利用网络带宽。 前提条件 CentOS 7.x sudo 权限 步骤一：升级内核 查看当前内核 uname -r 会有类似下面的输出 3.10.0-514.2.2.el7.x86_64 可以看到内核版本是3.10.0 安装 ELRepo sudo rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org sudo rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm 安装高版本内核 sudo yum --enablerepo=elrepo-kernel install kernel-ml -y 安装完成后查看安装结果 rpm -qa | grep kernel 如果安装成功，上面命令会输出 kernel-ml-x.x.x-1.el7.elrepo.x86_64 ，类似下面样子 kernel-ml-4.9.0-1.el7.elrepo.x86_64 kernel-3.10.0-514.el7.x86_64 kernel-tools-libs-3.10.0-514.2.2.el7.x86_64 kernel-tools-3.10.0-514.2.2.el7.x86_64 kernel-3.10.0-514.2.2.el7.x86_64 启用新的内核，启用前查看grub2启动项 sudo egrep ^menuentry /etc/grub2.cfg | cut -f 2 -d \\\\' 会有类似下面的输出 CentOS Linux 7 Rescue a0cbf86a6ef1416a8812657bb4f2b860 (4.9.0-1.el7.elrepo.x86_64) CentOS Linux (4.9.0-1.el7.elrepo.x86_64) 7 (Core) CentOS Linux (3.10.0-514.2.2.el7.x86_64) 7 (Core) CentOS Linux (3.10.0-514.el7.x86_64) 7 (Core) CentOS Linux (0-rescue-bf94f46c6bd04792a6a42c91bae645f7) 7 (Core) 从上往下，从0开始往下数，我们要启用的内核位置是1，于是执行 sudo grub2-set-default 1 重启系统 reboot 重启后查看系统内核 uname -r 会有类似下面的输出 4.9.0-1.el7.elrepo.x86_64","head":[["link",{"rel":"canonical","href":"https://justsoso.fun/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"}],["meta",{"property":"og:url","content":"https://justsoso.fun/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"}],["meta",{"property":"og:site_name","content":"技术加油站"}],["meta",{"property":"og:title","content":"如何安装Google BBR"}],["meta",{"property":"og:description","content":"BBR 是google发布一个网络拥塞算法，相比其他算法而言其性能更高，能更好的利用网络带宽。 前提条件 CentOS 7.x sudo 权限 步骤一：升级内核 查看当前内核 uname -r 会有类似下面的输出 3.10.0-514.2.2.el7.x86_64 可以看到内核版本是3.10.0 安装 ELRepo sudo rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org sudo rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm 安装高版本内核 sudo yum --enablerepo=elrepo-kernel install kernel-ml -y 安装完成后查看安装结果 rpm -qa | grep kernel 如果安装成功，上面命令会输出 kernel-ml-x.x.x-1.el7.elrepo.x86_64 ，类似下面样子 kernel-ml-4.9.0-1.el7.elrepo.x86_64 kernel-3.10.0-514.el7.x86_64 kernel-tools-libs-3.10.0-514.2.2.el7.x86_64 kernel-tools-3.10.0-514.2.2.el7.x86_64 kernel-3.10.0-514.2.2.el7.x86_64 启用新的内核，启用前查看grub2启动项 sudo egrep ^menuentry /etc/grub2.cfg | cut -f 2 -d \\\\' 会有类似下面的输出 CentOS Linux 7 Rescue a0cbf86a6ef1416a8812657bb4f2b860 (4.9.0-1.el7.elrepo.x86_64) CentOS Linux (4.9.0-1.el7.elrepo.x86_64) 7 (Core) CentOS Linux (3.10.0-514.2.2.el7.x86_64) 7 (Core) CentOS Linux (3.10.0-514.el7.x86_64) 7 (Core) CentOS Linux (0-rescue-bf94f46c6bd04792a6a42c91bae645f7) 7 (Core) 从上往下，从0开始往下数，我们要启用的内核位置是1，于是执行 sudo grub2-set-default 1 重启系统 reboot 重启后查看系统内核 uname -r 会有类似下面的输出 4.9.0-1.el7.elrepo.x86_64"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-16T00:39:52.000Z"}],["meta",{"property":"article:tag","content":"BBR"}],["meta",{"property":"article:published_time","content":"2023-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-16T00:39:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何安装Google BBR\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-16T00:39:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":2,"title":"步骤一：升级内核","slug":"步骤一-升级内核","link":"#步骤一-升级内核","children":[]},{"level":2,"title":"步骤二：启用BBR","slug":"步骤二-启用bbr","link":"#步骤二-启用bbr","children":[]},{"level":2,"title":"步骤三","slug":"步骤三","link":"#步骤三","children":[]},{"level":2,"title":"系统推荐","slug":"系统推荐","link":"#系统推荐","children":[]}],"git":{"createdTime":1699522217000,"updatedTime":1739666392000,"contributors":[{"name":"rocky-peng","email":"rocky.peng@qq.com","commits":457}]},"readingTime":{"minutes":2.77,"words":832},"filePathRelative":"other/如何安装Google BBR.md","localizedDate":"2023年11月9日","excerpt":"<p>BBR 是google发布一个网络拥塞算法，相比其他算法而言其性能更高，能更好的利用网络带宽。</p>\\n<h2> 前提条件</h2>\\n<ul>\\n<li>CentOS 7.x</li>\\n<li>sudo 权限</li>\\n</ul>\\n<h2> 步骤一：升级内核</h2>\\n<ol>\\n<li>\\n<p>查看当前内核</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>uname -r\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>会有类似下面的输出</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token number\\">3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514.2</span>.<span class=\\"token number\\">2</span>.el7.x86_64\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>可以看到内核版本是3.10.0</p>\\n</li>\\n<li>\\n<p>安装 ELRepo</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>sudo rpm --import https<span class=\\"token operator\\">:</span><span class=\\"token comment\\">//www.elrepo.org/RPM-GPG-KEY-elrepo.org</span>\\n\\nsudo rpm -Uvh http<span class=\\"token operator\\">:</span><span class=\\"token comment\\">//www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>安装高版本内核</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>sudo yum --enablerepo=elrepo-kernel install kernel-ml -y\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>安装完成后查看安装结果</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>rpm -qa | grep kernel\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如果安装成功，上面命令会输出 <code>kernel-ml-x.x.x-1.el7.elrepo.x86_64</code> ，类似下面样子</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>kernel-ml<span class=\\"token number\\">-4.9</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-1</span>.el7.elrepo.x86_64\\n\\nkernel<span class=\\"token number\\">-3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514</span>.el7.x86_64\\n\\nkernel-tools-libs<span class=\\"token number\\">-3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514.2</span>.<span class=\\"token number\\">2</span>.el7.x86_64\\n\\nkernel-tools<span class=\\"token number\\">-3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514.2</span>.<span class=\\"token number\\">2</span>.el7.x86_64\\n\\nkernel<span class=\\"token number\\">-3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514.2</span>.<span class=\\"token number\\">2</span>.el7.x86_64\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>启用新的内核，启用前查看grub2启动项</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>sudo egrep ^menuentry /etc/grub2.cfg | cut -f <span class=\\"token number\\">2</span> -d \\\\'\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>会有类似下面的输出</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>CentOS Linux <span class=\\"token number\\">7</span> Rescue a0cbf86a6ef1416a8812657bb4f2b860 (<span class=\\"token number\\">4.9</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-1</span>.el7.elrepo.x86_64)\\n\\nCentOS Linux (<span class=\\"token number\\">4.9</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-1</span>.el7.elrepo.x86_64) <span class=\\"token number\\">7</span> (Core)\\n\\nCentOS Linux (<span class=\\"token number\\">3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514.2</span>.<span class=\\"token number\\">2</span>.el7.x86_64) <span class=\\"token number\\">7</span> (Core)\\n\\nCentOS Linux (<span class=\\"token number\\">3.10</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-514</span>.el7.x86_64) <span class=\\"token number\\">7</span> (Core)\\n\\nCentOS Linux (<span class=\\"token number\\">0</span>-rescue-bf94f46c6bd04792a6a42c91bae645f7) <span class=\\"token number\\">7</span> (Core)\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>从上往下，从0开始往下数，我们要启用的内核位置是1，于是执行</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>sudo grub2-set-default <span class=\\"token number\\">1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>重启系统</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>reboot\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>重启后查看系统内核</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code>uname -r\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>会有类似下面的输出</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token number\\">4.9</span>.<span class=\\"token number\\">0</span><span class=\\"token number\\">-1</span>.el7.elrepo.x86_64\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ol>","copyright":{},"autoDesc":true}`);export{e as data};
