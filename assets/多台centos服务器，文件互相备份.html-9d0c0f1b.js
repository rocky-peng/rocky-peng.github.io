import{_ as s,$ as i,a0 as r,a1 as e,a3 as t,a4 as n,a5 as o,a2 as a,w as d}from"./framework-16d560c6.js";const E={},h=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),B=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：感情是互补的，只要你一直对他好，他就永远不会把你当回事儿。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c45a7805-96eb-45ac-8b45-c78cc264cdf3",alt:"",loading:"lazy"})])],-1);function _(A,m){const l=d("RouterLink");return i(),r("div",null,[h,e("ul",null,[e("li",null,[t(l,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[a("来个JVM冷知识")]),_:1})]),e("li",null,[t(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:n(()=>[a("微博关注关系如何实现")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:n(()=>[a("JVM参数设置")]),_:1})]),e("li",null,[t(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[a("K8S 无感发布")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[a("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[t(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[a("Git Merge 、Rebase")]),_:1})]),e("li",null,[t(l,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:n(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("ReentrantLock源码解读")]),_:1})]),e("li",null,[t(l,{to:"/intro.html"},{default:n(()=>[a("intro")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[a("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:n(()=>[a("Linux dev shm目录")]),_:1})])]),u,c,B,p])}const f=s(E,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{f as default};
