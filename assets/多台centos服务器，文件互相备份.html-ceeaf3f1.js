import{_ as n,$ as i,a0 as r,a1 as e,a3 as t,a4 as s,a5 as o,a2 as a,w as d}from"./framework-b3a0f150.js";const h={},u=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),E=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：找对象还是眼光高点好，你总得为，没有人喜欢你找个借口吧。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d3b6827b-90aa-4f14-84d6-32b9d013a2b4",alt:"",loading:"lazy"})])],-1);function B(m,b){const l=d("RouterLink");return i(),r("div",null,[u,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[a("MyBatis")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[a("Redis笔记")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("MySQL杂项")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:s(()=>[a("数组转树形结构只需两步")]),_:1})]),e("li",null,[t(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("提取Docker镜像中的文件")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[t(l,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[a("https和http混用解决办法")]),_:1})]),e("li",null,[t(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:s(()=>[a("Linux dev shm目录")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[a("杂记")]),_:1})])]),c,p,E,_])}const v=n(h,[["render",B],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{v as default};
