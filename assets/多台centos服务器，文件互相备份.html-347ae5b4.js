import{_ as n,$ as r,a0 as i,a1 as e,a3 as t,a4 as s,a5 as o,a2 as a,w as d}from"./framework-7f25d394.js";const c={},h=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),B=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：我可以划船没有桨，我可以扬帆没有方向，因为我这一生全靠浪。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=d23feea2-f6a3-48f9-8c31-461692917a36",alt:"",loading:"lazy"})])],-1);function _(A,m){const l=d("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[t(l,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:s(()=>[a("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("提取Docker镜像中的文件")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[a("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[a("kafka")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[a("乱七八糟的笔记")]),_:1})]),e("li",null,[t(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[t(l,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[a("Arthas使用记录")]),_:1})]),e("li",null,[t(l,{to:"/other/JetBrains-License-Server.html"},{default:s(()=>[a("JetBrains-License-Server")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(l,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:s(()=>[a("Docker隐射的端口外网不能访问")]),_:1})]),e("li",null,[t(l,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:s(()=>[a("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:s(()=>[a("BBR加速")]),_:1})])]),u,E,B,p])}const b=n(c,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
