import{_ as n,$ as o,a0 as i,a1 as e,a3 as t,a4 as s,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const h={},u=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：穷人和普通人都叫啃老，富人叫继承家业！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=cbb88bd8-98d0-468e-ae99-80816910d974",alt:"",loading:"lazy"})])],-1);function m(b,B){const l=d("RouterLink");return o(),i("div",null,[u,e("ul",null,[e("li",null,[t(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[t(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:s(()=>[a("随记")]),_:1})]),e("li",null,[t(l,{to:"/other/PGSQL%20GIN%E7%B4%A2%E5%BC%95%E2%80%9C%E5%A4%B1%E6%95%88%E2%80%9D.html"},{default:s(()=>[a("PGSQL GIN索引“失效”")]),_:1})]),e("li",null,[t(l,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[t(l,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[a("Redis高可用")]),_:1})]),e("li",null,[t(l,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:s(()=>[a("istio基础知识")]),_:1})]),e("li",null,[t(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[a("Paxos算法")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[t(l,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("Mermaid示例")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(l,{to:"/intro.html"},{default:s(()=>[a("intro")]),_:1})])]),c,p,_,E])}const A=n(h,[["render",m],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{A as default};
