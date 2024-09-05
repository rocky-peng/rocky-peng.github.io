import{_ as n,$ as i,a0 as r,a1 as e,a3 as s,a4 as t,a5 as o,a2 as a,w as d}from"./framework-b7a22294.js";const u={},c=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),A=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：天气就跟女人一样善变，天气预报就跟男人一样，不靠谱。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=c9112e2b-650f-46e5-a4a3-b875ca19257e",alt:"",loading:"lazy"})])],-1);function p(_,f){const l=d("RouterLink");return i(),r("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:t(()=>[a("记一次内存泄漏")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/MyBatis.html"},{default:t(()=>[a("MyBatis")]),_:1})]),e("li",null,[s(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:t(()=>[a("Docker进行资源隔离")]),_:1})]),e("li",null,[s(l,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[a("MySQL高可用")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:t(()=>[a("测试两台服务器间的网速")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:t(()=>[a("分库分表")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[a("AQS源码解读")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:t(()=>[a("Javassist整理")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:t(()=>[a("MySQL索引")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:t(()=>[a("Markdown软件比对")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[s(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:t(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})])]),h,E,A,B])}const b=n(u,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
