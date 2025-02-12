import{_ as n,$ as o,a0 as r,a1 as e,a3 as s,a4 as t,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const c={},E=i(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),_=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：狗改不了吃屎，人改不了拉完回头看屎。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=e31a9726-67e5-4cce-a45a-ad03ec3faa28",alt:"",loading:"lazy"})])],-1);function m(B,f){const l=d("RouterLink");return o(),r("div",null,[E,e("ul",null,[e("li",null,[s(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[s(l,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:t(()=>[a("微博关注关系如何实现")]),_:1})]),e("li",null,[s(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:t(()=>[a("JVM参数设置")]),_:1})]),e("li",null,[s(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:t(()=>[a("随记")]),_:1})]),e("li",null,[s(l,{to:"/other/Cornell%20Notes%20System.html"},{default:t(()=>[a("Cornell Notes System")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:t(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[a("gperftools")]),_:1})]),e("li",null,[s(l,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[a("Git Merge 、Rebase")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:t(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:t(()=>[a("前后端常用技术")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E8%A1%A8%E5%8D%95%E9%87%8D%E5%A4%8D%E6%8F%90%E4%BA%A4%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html"},{default:t(()=>[a("表单重复提交解决方案")]),_:1})])]),u,h,_,p])}const b=n(c,[["render",m],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
