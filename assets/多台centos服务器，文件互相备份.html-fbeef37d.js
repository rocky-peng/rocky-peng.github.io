import{_ as n,$ as o,a0 as r,a1 as e,a3 as s,a4 as t,a5 as i,a2 as a,w as d}from"./framework-b3a0f150.js";const E={},c=i(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),B=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：在家上网课这些天，上帝给我安排了个神位，叫走神。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=b79b7d20-8b81-4e7b-9002-34e805407d59",alt:"",loading:"lazy"})])],-1);function p(A,m){const l=d("RouterLink");return o(),r("div",null,[c,e("ul",null,[e("li",null,[s(l,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:t(()=>[a("KVM方式集群部署ES")]),_:1})]),e("li",null,[s(l,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:t(()=>[a("提取Docker镜像中的文件")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:t(()=>[a("ShadowsockServer")]),_:1})]),e("li",null,[s(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:t(()=>[a("数据同步方案")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:t(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[a("简易版配置中心&初探原理")]),_:1})]),e("li",null,[s(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:t(()=>[a("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[s(l,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[a("JVM杂项")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:t(()=>[a("MySQL三大日志")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:t(()=>[a("ShadowsockServer配置")]),_:1})]),e("li",null,[s(l,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:t(()=>[a("前端axios下载csv文件乱码")]),_:1})])]),u,h,B,_])}const b=n(E,[["render",p],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
