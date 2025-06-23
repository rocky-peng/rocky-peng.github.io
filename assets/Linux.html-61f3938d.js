import{_ as d,$ as a,a0 as t,a1 as e,a3 as l,a4 as s,a5 as r,a2 as n,w as u}from"./framework-f719d9e2.js";const v={},c=r(`<h1 id="linux安装字体" tabindex="-1"><a class="header-anchor" href="#linux安装字体" aria-hidden="true">#</a> linux安装字体</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. yum install -y fontconfig mkfontscale
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,14),m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),o=e("hr",null,null,-1),b=e("hr",null,null,-1),h=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),n("：本想成为大哥的女人，没想到却活成了，女人中的大哥。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Picturesque view of vibrant houses stacked on a hill in Riomaggiore, Liguria, Italy.",loading:"lazy"})])],-1);function E(A,f){const i=u("RouterLink");return a(),t("div",null,[c,e("ul",null,[e("li",null,[l(i,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:s(()=>[n("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(i,{to:"/other/%E5%85%8D%E8%B4%B9https%E8%AF%81%E4%B9%A6%E3%80%81%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F.html"},{default:s(()=>[n("免费https证书、自动续期")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:s(()=>[n("Oh My ZSH")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[n("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[l(i,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:s(()=>[n("synchronized原理深度剖析")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:s(()=>[n("Btrace入门")]),_:1})]),e("li",null,[l(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:s(()=>[n("随记")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:s(()=>[n("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[l(i,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[n("Spring RetryTemplate")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[n("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[l(i,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[n("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(i,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[n("Hbase 总览")]),_:1})])]),m,o,b,h])}const x=d(v,[["render",E],["__file","Linux.html.vue"]]);export{x as default};
