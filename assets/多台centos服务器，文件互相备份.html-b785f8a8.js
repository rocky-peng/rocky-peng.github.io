import{_ as n,$ as o,a0 as r,a1 as e,a3 as t,a4 as s,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const h={},E=i(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),u=e("hr",null,null,-1),p=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：当熬夜成为了习惯，其实已经不是熬夜，是生物钟感知性延迟。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function B(_,m){const l=d("RouterLink");return o(),r("div",null,[E,e("ul",null,[e("li",null,[t(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:s(()=>[a("synchronized原理深度剖析")]),_:1})]),e("li",null,[t(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[a("Docker进行资源隔离")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("PostgreSQL定时备份")]),_:1})]),e("li",null,[t(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[a("MongoDB高可用")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E7%BA%BF%E4%B8%8AFullGC%E9%A2%91%E7%B9%81%E7%9A%84%E6%8E%92%E6%9F%A5.html"},{default:s(()=>[a("线上FullGC频繁的排查")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[a("MySQL三大日志")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("JVM杂项")]),_:1})]),e("li",null,[t(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[a("Git Merge 、Rebase")]),_:1})]),e("li",null,[t(l,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[a("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:s(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[t(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[a("https和http混用解决办法")]),_:1})])]),c,u,p,A])}const f=n(h,[["render",B],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{f as default};
