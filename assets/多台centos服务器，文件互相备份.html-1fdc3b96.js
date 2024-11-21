import{_ as n,$ as i,a0 as r,a1 as e,a3 as s,a4 as t,a5 as o,a2 as a,w as d}from"./framework-6821ba0c.js";const u={},c=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),f=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：仗义每从屠狗辈，负心多是读书人。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=22c99178-f754-416e-9c78-477547d2610d",alt:"",loading:"lazy"})])],-1);function _(m,A){const l=d("RouterLink");return i(),r("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:t(()=>[a("记一次内存泄漏")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:t(()=>[a("KVM 虚拟机安装")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:t(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:t(()=>[a("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:t(()=>[a("常用队列")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[s(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:t(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[a("SQL优化")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[a("ESRally性能测试步骤")]),_:1})]),e("li",null,[s(l,{to:"/software/raft/sofajraft.html"},{default:t(()=>[a("sofajraft")]),_:1})]),e("li",null,[s(l,{to:"/software/linux/Linux.html"},{default:t(()=>[a("Linux")]),_:1})])]),E,h,f,p])}const b=n(u,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
