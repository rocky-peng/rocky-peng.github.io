import{_ as s,$ as i,a0 as o,a1 as e,a3 as n,a4 as t,a5 as r,a2 as a,w as d}from"./framework-3367138f.js";const E={},u=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：解不开的心结，就把它系成蝴蝶结叭。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e3de07dc-346b-4eb3-9df2-6727943fc81f",alt:"",loading:"lazy"})])],-1);function _(m,f){const l=d("RouterLink");return i(),o("div",null,[u,e("ul",null,[e("li",null,[n(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:t(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[n(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:t(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[n(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:t(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[n(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:t(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[n(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("Docker笔记")]),_:1})]),e("li",null,[n(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[n(l,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:t(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[n(l,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:t(()=>[a("Centos离线安装Docker")]),_:1})]),e("li",null,[n(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[n(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[a("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[n(l,{to:"/software/linux/Linux.html"},{default:t(()=>[a("Linux")]),_:1})]),e("li",null,[n(l,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:t(()=>[a("Linux dev shm目录")]),_:1})])]),c,h,B,p])}const b=s(E,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
