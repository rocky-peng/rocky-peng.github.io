import{_ as n,$ as o,a0 as i,a1 as e,a3 as t,a4 as s,a5 as r,a2 as a,w as h}from"./framework-b3a0f150.js";const d={},E=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),c=e("hr",null,null,-1),B=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：冬天就是好，穷的时候，还有西北风喝。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function _(A,m){const l=h("RouterLink");return o(),i("div",null,[E,e("ul",null,[e("li",null,[t(l,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:s(()=>[a("常见问题")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:s(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:s(()=>[a("弱引用示例")]),_:1})]),e("li",null,[t(l,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[a("JDK命令行工具")]),_:1})]),e("li",null,[t(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[a("如何安装Google BBR")]),_:1})]),e("li",null,[t(l,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[a("Paxos算法")]),_:1})]),e("li",null,[t(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:s(()=>[a("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[t(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[a("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:s(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(l,{to:"/intro.html"},{default:s(()=>[a("intro")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[a("杂记")]),_:1})]),e("li",null,[t(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[a("https和http混用解决办法")]),_:1})])]),u,c,B,p])}const f=n(d,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{f as default};
