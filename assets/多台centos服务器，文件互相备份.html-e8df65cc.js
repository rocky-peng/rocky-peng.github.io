import{_ as n,$ as o,a0 as i,a1 as e,a3 as s,a4 as t,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const c={},u=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),E=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：懒是每个人的天性，而我把它释放到了极致。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function _(m,f){const l=d("RouterLink");return o(),i("div",null,[u,e("ul",null,[e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:t(()=>[a("MySQL常用命令")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:t(()=>[a("KVM方式集群部署ES")]),_:1})]),e("li",null,[s(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:t(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("乱七八糟的笔记")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[s(l,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[a("Redis高可用")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:t(()=>[a("制作KVM ES镜像文件")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:t(()=>[a("Markdown软件比对")]),_:1})]),e("li",null,[s(l,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:t(()=>[a("Docker跨主机通信方案")]),_:1})]),e("li",null,[s(l,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[a("Hbase 总览")]),_:1})]),e("li",null,[s(l,{to:"/software/linux/Linux.html"},{default:t(()=>[a("Linux")]),_:1})])]),h,p,E,B])}const A=n(c,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{A as default};
