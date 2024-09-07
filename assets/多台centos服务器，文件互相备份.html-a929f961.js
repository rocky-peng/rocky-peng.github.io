import{_ as n,$ as i,a0 as o,a1 as e,a3 as s,a4 as t,a5 as r,a2 as a,w as d}from"./framework-58787b1c.js";const c={},u=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),p=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：目前最大的烦恼就是，经济实力跟不上审美能力。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4bd28e8a-f3e2-4897-88ae-03367f7d0cf6",alt:"",loading:"lazy"})])],-1);function m(A,f){const l=d("RouterLink");return i(),o("div",null,[u,e("ul",null,[e("li",null,[s(l,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[s(l,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:t(()=>[a("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mq/kafka.html"},{default:t(()=>[a("kafka")]),_:1})]),e("li",null,[s(l,{to:"/software/maccms/MAC%20CMS.html"},{default:t(()=>[a("MAC CMS")]),_:1})]),e("li",null,[s(l,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[a("Docker笔记")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:t(()=>[a("Javassist整理")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[a("异地多活")]),_:1})]),e("li",null,[s(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[a("Git Merge 、Rebase")]),_:1})]),e("li",null,[s(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[s(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:t(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:t(()=>[a("分布式问题")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:t(()=>[a("表单重复提交解决方案")]),_:1})])]),h,E,p,_])}const b=n(c,[["render",m],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
