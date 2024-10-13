import{_ as s,$ as a,a0 as r,a1 as e,a3 as l,a4 as d,a5 as t,a2 as n,w as v}from"./framework-16d560c6.js";const c={},u=t(`<h1 id="linux安装字体" tabindex="-1"><a class="header-anchor" href="#linux安装字体" aria-hidden="true">#</a> linux安装字体</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. yum install -y fontconfig mkfontscale
2. 拷贝字体文件（.ttc文件） 到 /usr/share/fonts/ 下的一个新文件夹(A) 中
3. chmod -R 755 /usr/share/fonts/A
4. cd /usr/share/fonts/A
5. mkfontscale
6. mkfontdir
7. fc-cache -fv
8. 检查是否安装成功：fc-list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="linux测速" tabindex="-1"><a class="header-anchor" href="#linux测速" aria-hidden="true">#</a> Linux测速</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py  

chmod +x speedtest-cli

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看某个目录及子目录占用的空间
du -h
ly-zuche-c1@root:/var/log# du -h
36K	    ./anaconda
536K	./nginx
64K	    ./redis
4.0K	./chrony
55M	    ./mysql
4.0K	./ppp
4.0K	./ntpstats
5.5M	./httpd
8.1M	./journal/f9d400c5e1e8c3a8209e990d887d4ac1
8.1M	./journal
26M	    ./audit
181M	./leyong
12K	    ./tuned
72M	    ./filebeat
619M	.

查看某个目录及子目录占用的空间并排序输出
du -sh * | sort -nr 
ly-zuche-c1@root:/var# du -sh * | sort -nr 
619M	log
370M	cache
158M	www
112K	spool
27G	    lib
16K	    db  
12K	    tmp
12K	    kerberos

查看某个目录占用的空间
du -sh
ly-zuche-c1@root:/var# du -sh
28G	.

查看磁盘使用情况
df -lh 
ly-zuche-c1@root:/var# df -lh
文件系统        容量  已用  可用 已用% 挂载点
/dev/vda1        50G   34G   14G   72% /
devtmpfs        1.9G     0  1.9G    0% /dev
tmpfs           1.9G   24K  1.9G    1% /dev/shm
tmpfs           1.9G  460K  1.9G    1% /run
tmpfs           1.9G     0  1.9G    0% /sys/fs/cgroup
tmpfs           380M     0  380M    0% /run/user/0



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大分割和小文件合并" tabindex="-1"><a class="header-anchor" href="#大分割和小文件合并" aria-hidden="true">#</a> 大分割和小文件合并</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大文件分割为小文件
mac/linux：
split -b 3000m 大文件
3000m 是指小文件的大小

小文件合并为大文件
mac/linux:
cat 小文件1 小文件2 &gt; 大文件

windows:
type 小文件1 小文件2 &gt; 大文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算md5" tabindex="-1"><a class="header-anchor" href="#计算md5" aria-hidden="true">#</a> 计算md5</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mac：
md5 文件名

linux:
md5sum 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间同步" tabindex="-1"><a class="header-anchor" href="#时间同步" aria-hidden="true">#</a> 时间同步</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ntpdate 时间服务器ip

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),o=e("hr",null,null,-1),b=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：可有可无的东西，一律可无。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=5de0797f-a57e-448b-991a-caac5e786b16",alt:"",loading:"lazy"})])],-1);function f(x,p){const i=v("RouterLink");return a(),r("div",null,[u,e("ul",null,[e("li",null,[l(i,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:d(()=>[n("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(i,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:d(()=>[n("MySQL杂项")]),_:1})]),e("li",null,[l(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:d(()=>[n("随记")]),_:1})]),e("li",null,[l(i,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:d(()=>[n("IO相关")]),_:1})]),e("li",null,[l(i,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:d(()=>[n("Docker笔记")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:d(()=>[n("Javassist整理")]),_:1})]),e("li",null,[l(i,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:d(()=>[n("Centos离线安装Docker")]),_:1})]),e("li",null,[l(i,{to:"/other/JetBrains-License-Server.html"},{default:d(()=>[n("JetBrains-License-Server")]),_:1})]),e("li",null,[l(i,{to:"/intro.html"},{default:d(()=>[n("intro")]),_:1})]),e("li",null,[l(i,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:d(()=>[n("ESRally性能测试步骤")]),_:1})]),e("li",null,[l(i,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:d(()=>[n("Mermaid示例")]),_:1})]),e("li",null,[l(i,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:d(()=>[n("随机图片在线接口")]),_:1})])]),m,o,b,h])}const g=s(c,[["render",f],["__file","Linux.html.vue"]]);export{g as default};
