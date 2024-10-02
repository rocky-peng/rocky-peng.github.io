import{_ as s,$ as o,a0 as i,a1 as e,a3 as t,a4 as n,a5 as r,a2 as a,w as d}from"./framework-326c7dc0.js";const E={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：书总有人替你背，题总有人替你做，你喜欢的学校总有人替你去。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7471798e-330c-467b-8fc5-83bb0ec5a277",alt:"",loading:"lazy"})])],-1);function A(_,m){const l=d("RouterLink");return o(),i("div",null,[c,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[a("MyBatis")]),_:1})]),e("li",null,[t(l,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[t(l,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:n(()=>[a("Docker进行资源隔离")]),_:1})]),e("li",null,[t(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(l,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[a("MongoDB高可用")]),_:1})]),e("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:n(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:n(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[a("JVM杂项")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[a("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[t(l,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[a("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[t(l,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:n(()=>[a("WebSocket SpringBoot Demo")]),_:1})]),e("li",null,[t(l,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[a("Hbase 总览")]),_:1})])]),u,h,B,p])}const f=s(E,[["render",A],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{f as default};
