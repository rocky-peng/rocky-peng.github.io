import{_ as d,$ as a,a0 as t,a1 as e,a3 as s,a4 as l,a5 as r,a2 as n,w as v}from"./framework-f719d9e2.js";const c={},u=r(`<h1 id="linux安装字体" tabindex="-1"><a class="header-anchor" href="#linux安装字体" aria-hidden="true">#</a> linux安装字体</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. yum install -y fontconfig mkfontscale
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),o=e("hr",null,null,-1),b=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：戴口罩挺好，不用假装微笑了。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/33045650/pexels-photo-33045650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Black and white silhouette of a father and child walking down a cobblestone street in Istanbul.",loading:"lazy"})])],-1);function E(f,B){const i=v("RouterLink");return a(),t("div",null,[u,e("ul",null,[e("li",null,[s(i,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[n("记一次内存泄漏")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:l(()=>[n("MySQL常用命令")]),_:1})]),e("li",null,[s(i,{to:"/other/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E5%88%B6%E4%BD%9CCookie%E3%80%81Local%E3%80%81Session%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%87%BA%E6%8F%92%E4%BB%B6.html"},{default:l(()=>[n("手把手教你制作Cookie、Local、Session数据导出插件")]),_:1})]),e("li",null,[s(i,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:l(()=>[n("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[s(i,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:l(()=>[n("K8S 无感发布")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:l(()=>[n("KVM方式集群部署ES")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:l(()=>[n("Javassist整理")]),_:1})]),e("li",null,[s(i,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:l(()=>[n("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[s(i,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:l(()=>[n("JVM异常处理")]),_:1})]),e("li",null,[s(i,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:l(()=>[n("ShadowsockServer配置")]),_:1})]),e("li",null,[s(i,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:l(()=>[n("MySQL三大日志")]),_:1})]),e("li",null,[s(i,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:l(()=>[n("ReentrantLock源码解读")]),_:1})])]),m,o,b,h])}const p=d(c,[["render",E],["__file","Linux.html.vue"]]);export{p as default};
