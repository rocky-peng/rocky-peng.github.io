import{_ as i,$ as o,a0 as d,a1 as e,a3 as n,a4 as t,a2 as a,a5 as c,w as r}from"./framework-3895bb24.js";const h={},u=c(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),p={href:"http://ZSH.md",target:"_blank",rel:"noopener noreferrer"},_={href:"http://Rebase.md",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),b=e("hr",null,null,-1),f=e("hr",null,null,-1),E=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：人一旦没钱，你将会看清世界上，丑恶善良的人。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2832fec3-0b03-49d7-a6b5-70fb9149efed",alt:"",loading:"lazy"})])],-1);function A(B,v){const l=r("RouterLink"),s=r("ExternalLinkIcon");return o(),d("div",null,[u,e("ul",null,[e("li",null,[n(l,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[a("[Oh My ZSH](Oh My "),e("a",p,[a("ZSH.md"),n(s)]),a(")")]),e("li",null,[n(l,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[a("Cordova+Umi项目搭建步骤")]),_:1})]),e("li",null,[a("[Git Merge 、Rebase](../../other/Git Merge 、"),e("a",_,[a("Rebase.md"),n(s)]),a(")")]),e("li",null,[n(l,{to:"/software/middleware/mq/RocketMQ.html"},{default:t(()=>[a("RocketMQ")]),_:1})]),e("li",null,[n(l,{to:"/software/spring/SpringCloud%E6%80%BB%E4%BD%93%E8%AE%A4%E8%AF%86.html"},{default:t(()=>[a("SpringCloud总体认识")]),_:1})]),e("li",null,[n(l,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:t(()=>[a("分布式问题")]),_:1})]),e("li",null,[n(l,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[a("Mermaid示例")]),_:1})])]),m,b,f,E])}const k=i(h,[["render",A],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{k as default};
