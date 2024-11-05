import{_ as n,$ as i,a0 as r,a1 as e,a3 as t,a4 as s,a5 as o,a2 as a,w as d}from"./framework-16d560c6.js";const E={},c=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：现在想要出国玩的，只剩下这一国了——天国。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b5fbede6-80b5-4e3f-b9a9-4394613ac99d",alt:"",loading:"lazy"})])],-1);function p(m,f){const l=d("RouterLink");return i(),r("div",null,[c,e("ul",null,[e("li",null,[t(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[a("Docker进行资源隔离")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:s(()=>[a("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("数据同步方案")]),_:1})]),e("li",null,[t(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("高可用通用方案")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[a("常用队列")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[a("异地多活")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:s(()=>[a("Javassist整理")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("制作KVM ES镜像文件")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("JVM杂项")]),_:1})]),e("li",null,[t(l,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("Mermaid示例")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:s(()=>[a("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[a("PostgreSQL高可用")]),_:1})])]),u,h,B,_])}const b=n(E,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
