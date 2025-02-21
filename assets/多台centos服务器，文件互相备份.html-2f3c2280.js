import{_ as n,$ as i,a0 as o,a1 as e,a3 as s,a4 as t,a5 as r,a2 as l,w as d}from"./framework-b3a0f150.js";const u={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),_=e("hr",null,null,-1),p=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：你得有足够的实力，你的原则和底线，才会被人尊重。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2d042de8-fcad-4464-a6b7-d1905924bdc8",alt:"",loading:"lazy"})])],-1);function f(B,m){const a=d("RouterLink");return i(),o("div",null,[c,e("ul",null,[e("li",null,[s(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[l("MAT工具")]),_:1})]),e("li",null,[s(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[l("Git笔记")]),_:1})]),e("li",null,[s(a,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:t(()=>[l("来个JVM冷知识")]),_:1})]),e("li",null,[s(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:t(()=>[l("分库分表")]),_:1})]),e("li",null,[s(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:t(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[s(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:t(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[s(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:t(()=>[l("制作KVM ES镜像文件")]),_:1})]),e("li",null,[s(a,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:t(()=>[l("Javassist整理")]),_:1})]),e("li",null,[s(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[s(a,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:t(()=>[l("SpringCloud总体认识")]),_:1})]),e("li",null,[s(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:t(()=>[l("GitHub Workflow突然报错")]),_:1})]),e("li",null,[s(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[l("PostgreSQL高可用")]),_:1})])]),h,_,p,E])}const b=n(u,[["render",f],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
