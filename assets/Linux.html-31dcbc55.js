import{_ as s,$ as a,a0 as t,a1 as e,a3 as l,a4 as d,a5 as r,a2 as n,w as u}from"./framework-58787b1c.js";const c={},v=r(`<h1 id="linux安装字体" tabindex="-1"><a class="header-anchor" href="#linux安装字体" aria-hidden="true">#</a> linux安装字体</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. yum install -y fontconfig mkfontscale
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),o=e("hr",null,null,-1),b=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：明明是游手好闲，就别妄称自己是文艺青年。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=71e1191e-91c8-41d1-947e-259e6380dade",alt:"",loading:"lazy"})])],-1);function E(f,A){const i=u("RouterLink");return a(),t("div",null,[v,e("ul",null,[e("li",null,[l(i,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:d(()=>[n("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:d(()=>[n("Git笔记")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:d(()=>[n("记一次内存泄漏")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:d(()=>[n("MAT工具")]),_:1})]),e("li",null,[l(i,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:d(()=>[n("Redis笔记")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/NGINX.html"},{default:d(()=>[n("NGINX")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:d(()=>[n("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:d(()=>[n("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[l(i,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:d(()=>[n("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[l(i,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:d(()=>[n("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[l(i,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:d(()=>[n("GitHub Workflow突然报错")]),_:1})]),e("li",null,[l(i,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:d(()=>[n("WebSocket SpringBoot Demo")]),_:1})])]),m,o,b,h])}const x=s(c,[["render",E],["__file","Linux.html.vue"]]);export{x as default};
