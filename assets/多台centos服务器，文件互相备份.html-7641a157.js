import{_ as n,$ as i,a0 as r,a1 as e,a3 as t,a4 as s,a5 as o,a2 as a,w as d}from"./framework-58787b1c.js";const E={},u=o(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),A=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：领导开会的时候，我们应该保持肃静，打扰别人睡觉是很不礼貌的。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=e2d5199d-488b-4f4c-84a5-1d03e91607c3",alt:"",loading:"lazy"})])],-1);function p(_,m){const l=d("RouterLink");return i(),r("div",null,[u,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[a("各种网关性能测试")]),_:1})]),e("li",null,[t(l,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:s(()=>[a("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[t(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:s(()=>[a("微博关注关系如何实现")]),_:1})]),e("li",null,[t(l,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:s(()=>[a("Spring框架源码关键点")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:s(()=>[a("IO相关")]),_:1})]),e("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[t(l,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[a("Redis高可用")]),_:1})]),e("li",null,[t(l,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("高可用通用方案")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:s(()=>[a("异地多活")]),_:1})]),e("li",null,[t(l,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[a("ES杂项")]),_:1})]),e("li",null,[t(l,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:s(()=>[a("Docker跨主机通信方案")]),_:1})])]),c,h,B,A])}const b=n(E,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
