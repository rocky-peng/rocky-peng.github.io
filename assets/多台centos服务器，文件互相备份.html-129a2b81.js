import{_ as n,$ as o,a0 as i,a1 as e,a3 as t,a4 as s,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const h={},u=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),c=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),p=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：想当一个园丁，然后在你心里，种点B树。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/30906941/pexels-photo-30906941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"A close-up of a giant panda eating bamboo at the Taipei Zoo, showcasing its natural habitat.",loading:"lazy"})])],-1);function _(m,A){const l=d("RouterLink");return o(),i("div",null,[u,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/MyBatis.html"},{default:s(()=>[a("MyBatis")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[a("MAT工具")]),_:1})]),e("li",null,[t(l,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("PostgreSQL定时备份")]),_:1})]),e("li",null,[t(l,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:s(()=>[a("随记")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[a("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[t(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:s(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[t(l,{to:"/other/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%90%97%EF%BC%9F.html"},{default:s(()=>[a("你真的会拼接字符串吗？")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[a("常用队列")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[a("CountDownLatch源码解读")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:s(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:s(()=>[a("批量替换文件名中的指定字符串")]),_:1})]),e("li",null,[t(l,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:s(()=>[a("https和http混用解决办法")]),_:1})])]),c,E,p,B])}const b=n(h,[["render",_],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
