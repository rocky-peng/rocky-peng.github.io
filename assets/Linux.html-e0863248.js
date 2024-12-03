import{_ as s,$ as a,a0 as t,a1 as e,a3 as l,a4 as d,a5 as r,a2 as n,w as u}from"./framework-b3a0f150.js";const c={},v=r(`<h1 id="linux安装字体" tabindex="-1"><a class="header-anchor" href="#linux安装字体" aria-hidden="true">#</a> linux安装字体</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. yum install -y fontconfig mkfontscale
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),o=e("hr",null,null,-1),b=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：我不是穷人，我只是个价格敏感型消费者。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=884295a8-aa6c-4294-b590-09c34ac0c1cd",alt:"",loading:"lazy"})])],-1);function E(B,f){const i=u("RouterLink");return a(),t("div",null,[v,e("ul",null,[e("li",null,[l(i,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:d(()=>[n("Git笔记")]),_:1})]),e("li",null,[l(i,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:d(()=>[n("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[l(i,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:d(()=>[n("JDK命令行工具")]),_:1})]),e("li",null,[l(i,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:d(()=>[n("提取Docker镜像中的文件")]),_:1})]),e("li",null,[l(i,{to:"/other/Censys%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%AD%A6%E4%B9%A0.html"},{default:d(()=>[n("Censys搜索引擎学习")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:d(()=>[n("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[l(i,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:d(()=>[n("Redis高可用")]),_:1})]),e("li",null,[l(i,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:d(()=>[n("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(i,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:d(()=>[n("JVM杂项")]),_:1})]),e("li",null,[l(i,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:d(()=>[n("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[l(i,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:d(()=>[n("Mermaid示例")]),_:1})]),e("li",null,[l(i,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:d(()=>[n("Hbase 总览")]),_:1})])]),m,o,b,h])}const p=s(c,[["render",E],["__file","Linux.html.vue"]]);export{p as default};
