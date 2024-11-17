import{_ as n,$ as o,a0 as r,a1 as e,a3 as s,a4 as t,a5 as i,a2 as a,w as d}from"./framework-6821ba0c.js";const c={},E=i(`<h2 id="背景与目标" tabindex="-1"><a class="header-anchor" href="#背景与目标" aria-hidden="true">#</a> 背景与目标</h2><p>现在有一天服务器A，这台服务器上存放有一些备份文件，为了安全想把这些文件再备份到另外一台服务器B上。 如果服务器A上产生了新的备份文件，能自动同步到服务器B</p><p>达到上面的目的，总体就是两个软件：</p><ol><li>rsync （需要在A B两台上都装上，我的centos系统自带了，按照命令：yum install rsync）</li><li>inotify-tools （需要在A上安装）</li></ol><h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
ssh-copy-id 服务器B的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中途会要求输入服务器b的登陆密码 这一步是为了在服务器A上能免密码登陆服务器B</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>在服务器A上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>epel <span class="token function">install</span> inotify-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,13),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),p=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：表达有很多种，不表达也是其中一种。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=125bc5f5-9740-4a9a-bc08-7bb13a3282a0",alt:"",loading:"lazy"})])],-1);function B(m,A){const l=d("RouterLink");return o(),r("div",null,[E,e("ul",null,[e("li",null,[s(l,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:t(()=>[a("JVM垃圾收集器")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/NGINX.html"},{default:t(()=>[a("NGINX")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:t(()=>[a("IO相关")]),_:1})]),e("li",null,[s(l,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:t(()=>[a("ShadowsockServerUpdatePort")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[a("InnoDB存储引擎")]),_:1})]),e("li",null,[s(l,{to:"/software/unclassified/gperftools.html"},{default:t(()=>[a("gperftools")]),_:1})]),e("li",null,[s(l,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:t(()=>[a("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[s(l,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:t(()=>[a("分布式事务Seata")]),_:1})]),e("li",null,[s(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:t(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[s(l,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[a("vuepress-theme-hope使用心得")]),_:1})]),e("li",null,[s(l,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:t(()=>[a("Java面试基础")]),_:1})]),e("li",null,[s(l,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:t(()=>[a("Git历史记录修改用户名和邮箱")]),_:1})])]),u,h,p,_])}const b=n(c,[["render",B],["__file","多台centos服务器，文件互相备份.html.vue"]]);export{b as default};
