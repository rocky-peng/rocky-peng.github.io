import{_ as n,$ as i,a0 as o,a1 as e,a3 as s,a4 as t,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const u={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),E=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：做一天的好人不难，难的是，做一辈子有钱人。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=19528dd7-5265-4b99-86ed-ba606f085a13",alt:"",loading:"lazy"})])],-1);function m(f,B){const l=d("RouterLink");return i(),o("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("Git笔记")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:t(()=>[a("MySQL常用命令")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("Redis笔记")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:t(()=>[a("各种网关性能测试")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/NGINX.html"},{default:t(()=>[a("NGINX")]),_:1})]),e("li",null,[s(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[a("MongoDB高可用")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:t(()=>[a("ShadowsockServer")]),_:1})]),e("li",null,[s(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:t(()=>[a("如何安装Google BBR")]),_:1})]),e("li",null,[s(l,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:t(()=>[a("JVM异常处理")]),_:1})]),e("li",null,[s(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[a("JVM杂项")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[a("ES杂项")]),_:1})]),e("li",null,[s(l,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:t(()=>[a("随机图片在线接口")]),_:1})])]),h,_,E,p])}const A=n(u,[["render",m],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{A as default};
