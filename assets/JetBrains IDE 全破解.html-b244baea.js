import{_ as s,$ as d,a0 as c,a1 as e,a2 as t,a3 as l,a4 as n,a5 as r,w as a}from"./framework-b3a0f150.js";const u={},p=e("p",null,"由于公开的licence server越来越不好了，所以这里出一篇破解教程。",-1),g=e("p",null,"本教程理论上支持所有jetbrains ide，但我只实验过intellij idea，其他ide请自行测试。",-1),f=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-5fe6678e1738bfce34d852f1f28e420d.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),h=e("h2",{id:"正文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),t(" 正文")],-1),E=e("p",null,"我这里采用的版本是：2023.2.5 ，其他版本请自行测试。",-1),_=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-fcb4afbc1ea47432c99ec5721e827ddf.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),m={href:"https://3.jetbra.in/",target:"_blank",rel:"noopener noreferrer"},B=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-526331b671da62e8b9c46678b892e7e3.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),A=r('<li><p>点击上面online的任意一个网址，这里选择第一个，打开后如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-fc524ac5bdab72a1ac8a77a1f40eec8d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>点击顶部的 jetbra.zip 进行下载，解压，解压后目录大体这样：</p><figure><img src="https://cdn.justdopay.com/notion/md5-f342a626b00698e83af2e67286f70ede.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>打开scripts文件夹：</p><figure><img src="https://cdn.justdopay.com/notion/md5-31dcac66baa36d655253347394879539.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>根据自身操作系统选择执行的脚本。先执行uninstall然后install。 执行前关闭ide，windows系统建议管理员执行uninstall-all-users.vbs和install-all-users.vbs。执行过程中安全软件可能会警告，需要放行。建议临时关闭安全软件，比如360。 执行后需要等待一段时间，直到有 done 弹窗弹出说明脚本执行完成。</p></li><li><p>脚本执行完成后，返回网站，点击需要破解的软件下方复制licence，如图：</p><figure><img src="https://cdn.justdopay.com/notion/md5-026c71ed9ce13f7463c4a41235c56428.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>把复制的licence 复制到软件即可完成破解。（别忘记第8步小惊喜）</p></li><li><p>把网页向下翻，还提供了各种付费插件的激活码，仍然使用对应方法激活就可以了。</p></li>',7),b=e("br",null,null,-1),y=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),F=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),x=e("hr",null,null,-1),j=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：别揪住没用的东西不放，尤其是当这个没用的东西，就是你自己的时候。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=2667f2d9-e095-4114-aa90-463765e3308a",alt:"",loading:"lazy"})])],-1);function v(k,C){const o=a("ExternalLinkIcon"),i=a("RouterLink");return d(),c("div",null,[p,g,f,h,E,_,e("ol",null,[e("li",null,[e("p",null,[t("打开 "),e("a",m,[t("https://3.jetbra.in/"),l(o)]),t("，这是一个网站列表，等待其检测完成后，随意选择一个可以使用的网站，点击进入，界面如下：（若浏览器报告不安全请放行，如果实在不放心可以用沙箱打开）")]),B]),A]),b,y,e("ul",null,[e("li",null,[l(i,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:n(()=>[t("Git笔记")]),_:1})]),e("li",null,[l(i,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:n(()=>[t("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[l(i,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:n(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(i,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:n(()=>[t("随记")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:n(()=>[t("KVM方式集群部署ES")]),_:1})]),e("li",null,[l(i,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:n(()=>[t("ShadowsockServer")]),_:1})]),e("li",null,[l(i,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:n(()=>[t("istio基础知识")]),_:1})]),e("li",null,[l(i,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:n(()=>[t("异地多活")]),_:1})]),e("li",null,[l(i,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:n(()=>[t("MySQL三大日志")]),_:1})]),e("li",null,[l(i,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:n(()=>[t("Java面试基础")]),_:1})]),e("li",null,[l(i,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:n(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(i,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:n(()=>[t("BBR加速")]),_:1})])]),F,w,x,j])}const S=s(u,[["render",v],["__file","JetBrains IDE 全破解.html.vue"]]);export{S as default};
