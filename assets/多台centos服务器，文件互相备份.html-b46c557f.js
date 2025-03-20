import{_ as n,$ as o,a0 as i,a1 as e,a3 as t,a4 as s,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const u={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),A=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：2019年第一天，说出你的新年愿望，那就一定不会实现。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function m(p,_){const l=d("RouterLink");return o(),i("div",null,[c,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[t(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:s(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("提取Docker镜像中的文件")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[a("kafka")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[a("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[t(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[a("istio基础知识")]),_:1})]),e("li",null,[t(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[a("Docker笔记")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[a("Flutter开发需要涉及的知识点大纲")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[a("分布式事务Seata")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mq/RocketMQ.html"},{default:s(()=>[a("RocketMQ")]),_:1})]),e("li",null,[t(l,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[a("GitHub Workflow突然报错")]),_:1})])]),E,h,A,B])}const b=n(u,[["render",m],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
