import{_ as n,$ as i,a0 as o,a1 as e,a3 as s,a4 as t,a5 as r,a2 as a,w as d}from"./framework-16d560c6.js";const E={},c=r(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：很喜欢秋天，跟恋爱一样，早晚都凉。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=370459ca-0ea2-4dc3-9ceb-a5e3c0c16433",alt:"",loading:"lazy"})])],-1);function p(f,A){const l=d("RouterLink");return i(),o("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:t(()=>[a("Oh My ZSH")]),_:1})]),e("li",null,[s(l,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:t(()=>[a("JVM参数设置")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:t(()=>[a("测试两台服务器间的网速")]),_:1})]),e("li",null,[s(l,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:t(()=>[a("Hadoop 一")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:t(()=>[a("ShadowsockServer")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:t(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[a("批量修改git历史记录中的用户名和邮箱")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[a("index方法压力测试记录")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E7%B4%A2%E5%BC%95.html"},{default:t(()=>[a("MySQL索引")]),_:1})]),e("li",null,[s(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[a("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:t(()=>[a("前后端常用技术")]),_:1})]),e("li",null,[s(l,{to:"/intro.html"},{default:t(()=>[a("intro")]),_:1})])]),u,h,B,_])}const b=n(E,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
