import{_ as s,$ as d,a0 as c,a1 as t,a2 as e,a3 as l,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const u={},p=t("p",null,"由于公开的licence server越来越不好了，所以这里出一篇破解教程。",-1),g=t("p",null,"本教程理论上支持所有jetbrains ide，但我只实验过intellij idea，其他ide请自行测试。",-1),f=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-5fe6678e1738bfce34d852f1f28e420d.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),m=t("h2",{id:"正文",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),e(" 正文")],-1),h=t("p",null,"我这里采用的版本是：2023.2.5 ，其他版本请自行测试。",-1),_=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-fcb4afbc1ea47432c99ec5721e827ddf.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),E={href:"https://3.jetbra.in/",target:"_blank",rel:"noopener noreferrer"},b=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-526331b671da62e8b9c46678b892e7e3.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),B=r('<li><p>点击上面online的任意一个网址，这里选择第一个，打开后如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-fc524ac5bdab72a1ac8a77a1f40eec8d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>点击顶部的 jetbra.zip 进行下载，解压，解压后目录大体这样：</p><figure><img src="https://cdn.justdopay.com/notion/md5-f342a626b00698e83af2e67286f70ede.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>打开scripts文件夹：</p><figure><img src="https://cdn.justdopay.com/notion/md5-31dcac66baa36d655253347394879539.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>根据自身操作系统选择执行的脚本。先执行uninstall然后install。 执行前关闭ide，windows系统建议管理员执行uninstall-all-users.vbs和install-all-users.vbs。执行过程中安全软件可能会警告，需要放行。建议临时关闭安全软件，比如360。 执行后需要等待一段时间，直到有 done 弹窗弹出说明脚本执行完成。</p></li><li><p>脚本执行完成后，返回网站，点击需要破解的软件下方复制licence，如图：</p><figure><img src="https://cdn.justdopay.com/notion/md5-026c71ed9ce13f7463c4a41235c56428.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>把复制的licence 复制到软件即可完成破解。（别忘记第8步小惊喜）</p></li><li><p>把网页向下翻，还提供了各种付费插件的激活码，仍然使用对应方法激活就可以了。</p></li>',7),A=t("br",null,null,-1),y=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),j=t("hr",null,null,-1),w=t("hr",null,null,-1),C=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：他们说网络很假，我笑了，好像现实很真一样。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d1d48b88-264f-4628-aa88-1dba7d9f65f8",alt:"",loading:"lazy"})])],-1);function k(v,z){const o=a("ExternalLinkIcon"),i=a("RouterLink");return d(),c("div",null,[p,g,f,m,h,_,t("ol",null,[t("li",null,[t("p",null,[e("打开 "),t("a",E,[e("https://3.jetbra.in/"),l(o)]),e("，这是一个网站列表，等待其检测完成后，随意选择一个可以使用的网站，点击进入，界面如下：（若浏览器报告不安全请放行，如果实在不放心可以用沙箱打开）")]),b]),B]),A,y,t("ul",null,[t("li",null,[l(i,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:n(()=>[e("Oh My ZSH")]),_:1})]),t("li",null,[l(i,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[e("Redis笔记")]),_:1})]),t("li",null,[l(i,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:n(()=>[e("JDK命令行工具")]),_:1})]),t("li",null,[l(i,{to:"/other/Cornell%20Notes%20System.html"},{default:n(()=>[e("Cornell Notes System")]),_:1})]),t("li",null,[l(i,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:n(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(i,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[e("istio基础知识")]),_:1})]),t("li",null,[l(i,{to:"/software/maccms/MAC%20CMS.html"},{default:n(()=>[e("MAC CMS")]),_:1})]),t("li",null,[l(i,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),t("li",null,[l(i,{to:"/software/unclassified/Javassist%E6%95%B4%E7%90%86.html"},{default:n(()=>[e("Javassist整理")]),_:1})]),t("li",null,[l(i,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:n(()=>[e("SQL优化")]),_:1})]),t("li",null,[l(i,{to:"/software/linux/Linux.html"},{default:n(()=>[e("Linux")]),_:1})]),t("li",null,[l(i,{to:"/other/https%E5%92%8Chttp%E6%B7%B7%E7%94%A8%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"},{default:n(()=>[e("https和http混用解决办法")]),_:1})])]),x,j,w,C])}const F=s(u,[["render",k],["__file","JetBrains IDE 全破解.html.vue"]]);export{F as default};
