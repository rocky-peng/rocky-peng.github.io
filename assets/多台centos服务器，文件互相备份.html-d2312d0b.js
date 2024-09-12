import{_ as n,$ as r,a0 as i,a1 as e,a3 as t,a4 as s,a5 as o,a2 as a,w as d}from"./framework-052411f2.js";const c={},u=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),f=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：每一个想要学习的念头，都有可能是未来的你，在向你求救。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=a8b62fde-be80-476d-8245-d9495eb74977",alt:"",loading:"lazy"})])],-1);function E(m,b){const l=d("RouterLink");return r(),i("div",null,[u,e("ul",null,[e("li",null,[t(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[t(l,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[a("K8S 无感发布")]),_:1})]),e("li",null,[t(l,{to:"/other/Spring%20RetryTemplate.html"},{default:s(()=>[a("Spring RetryTemplate")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[a("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:s(()=>[a("Javassist整理")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[a("AQS源码解读")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[a("CountDownLatch源码解读")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("ES杂项")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:s(()=>[a("分布式事务Seata")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:s(()=>[a("分布式问题")]),_:1})]),e("li",null,[t(l,{to:"/software/raft/sofajraft.html"},{default:s(()=>[a("sofajraft")]),_:1})]),e("li",null,[t(l,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[a("raft协议")]),_:1})])]),h,p,_,f])}const v=n(c,[["render",E],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{v as default};
