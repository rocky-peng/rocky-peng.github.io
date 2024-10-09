import{_ as n,$ as i,a0 as o,a1 as e,a3 as s,a4 as t,a5 as r,a2 as a,w as d}from"./framework-827a3556.js";const u={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),_=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：每次看这些励志的句子，都能激起我，五分钟的学习斗志。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a570b9e8-e186-42d4-bf2e-d4f827e44d20",alt:"",loading:"lazy"})])],-1);function p(B,f){const l=d("RouterLink");return i(),o("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("Redis笔记")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[a("弱引用示例")]),_:1})]),e("li",null,[s(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[a("K8S 无感发布")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[s(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:t(()=>[a("Paxos算法")]),_:1})]),e("li",null,[s(l,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[a("推荐几个适用小工具")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:t(()=>[a("Javassist整理")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[a("异地多活")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[a("CountDownLatch源码解读")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[a("ES杂项")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[a("BBR加速")]),_:1})]),e("li",null,[s(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:t(()=>[a("Linux dev shm目录")]),_:1})])]),h,E,_,m])}const A=n(u,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{A as default};
