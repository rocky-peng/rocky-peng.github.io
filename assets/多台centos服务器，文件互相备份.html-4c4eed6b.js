import{_ as n,$ as o,a0 as r,a1 as e,a3 as t,a4 as s,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const h={},c=i(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),p=e("hr",null,null,-1),_=e("hr",null,null,-1),m=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：我们的故事，始于我的打扰，终于我的多余。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7919d105-5d87-48a2-ba9b-b514ddd65022",alt:"",loading:"lazy"})])],-1);function b(E,A){const l=d("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[t(l,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:s(()=>[a("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("弱引用示例")]),_:1})]),e("li",null,[t(l,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:s(()=>[a("数组转树形结构只需两步")]),_:1})]),e("li",null,[t(l,{to:"/other/Cornell%20Notes%20System.html"},{default:s(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[t(l,{to:"/software/maccms/MAC%20CMS.html"},{default:s(()=>[a("MAC CMS")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("数据同步方案")]),_:1})]),e("li",null,[t(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:s(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[a("AQS源码解读")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:s(()=>[a("MySQL索引")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(l,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:s(()=>[a("Hbase 总览")]),_:1})])]),u,p,_,m])}const v=n(h,[["render",b],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{v as default};
