import{_ as s,$ as o,a0 as i,a1 as e,a3 as t,a4 as n,a5 as r,a2 as a,w as d}from"./framework-b3a0f150.js";const u={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),p=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：只有在车站大排长龙时，才能真正意识到，自己是龙的传人。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4fc9ec44-5a00-4831-8074-d78677d09e7e",alt:"",loading:"lazy"})])],-1);function B(f,m){const l=d("RouterLink");return o(),i("div",null,[c,e("ul",null,[e("li",null,[t(l,{to:"/software/unclassified/MyBatis.html"},{default:n(()=>[a("MyBatis")]),_:1})]),e("li",null,[t(l,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:n(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),e("li",null,[t(l,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:n(()=>[a("如何安装Google BBR")]),_:1})]),e("li",null,[t(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:n(()=>[a("数据同步方案")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:n(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[t(l,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:n(()=>[a("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[t(l,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:n(()=>[a("CountDownLatch源码解读")]),_:1})]),e("li",null,[t(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[a("前后端常用技术")]),_:1})]),e("li",null,[t(l,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[a("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[t(l,{to:"/software/raft/sofajraft.html"},{default:n(()=>[a("sofajraft")]),_:1})]),e("li",null,[t(l,{to:"/intro.html"},{default:n(()=>[a("intro")]),_:1})]),e("li",null,[t(l,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[a("随机图片在线接口")]),_:1})])]),h,E,p,_])}const b=s(u,[["render",B],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
