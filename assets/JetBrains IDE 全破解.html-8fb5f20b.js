import{_ as s,$ as c,a0 as r,a1 as t,a2 as e,a3 as l,a4 as i,a5 as d,w as a}from"./framework-b3a0f150.js";const p={},g=t("p",null,"由于公开的licence server越来越不好了，所以这里出一篇破解教程。",-1),u=t("p",null,"本教程理论上支持所有jetbrains ide，但我只实验过intellij idea，其他ide请自行测试。",-1),h=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-5fe6678e1738bfce34d852f1f28e420d.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),f=t("h2",{id:"正文",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),e(" 正文")],-1),_=t("p",null,"我这里采用的版本是：2023.2.5 ，其他版本请自行测试。",-1),m=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-fcb4afbc1ea47432c99ec5721e827ddf.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),E={href:"https://3.jetbra.in/",target:"_blank",rel:"noopener noreferrer"},b=t("figure",null,[t("img",{src:"https://cdn.justdopay.com/notion/md5-526331b671da62e8b9c46678b892e7e3.png",alt:"image.png",tabindex:"0",loading:"lazy"}),t("figcaption",null,"image.png")],-1),A=d('<li><p>点击上面online的任意一个网址，这里选择第一个，打开后如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-fc524ac5bdab72a1ac8a77a1f40eec8d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>点击顶部的 jetbra.zip 进行下载，解压，解压后目录大体这样：</p><figure><img src="https://cdn.justdopay.com/notion/md5-f342a626b00698e83af2e67286f70ede.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>打开scripts文件夹：</p><figure><img src="https://cdn.justdopay.com/notion/md5-31dcac66baa36d655253347394879539.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>根据自身操作系统选择执行的脚本。先执行uninstall然后install。 执行前关闭ide，windows系统建议管理员执行uninstall-all-users.vbs和install-all-users.vbs。执行过程中安全软件可能会警告，需要放行。建议临时关闭安全软件，比如360。 执行后需要等待一段时间，直到有 done 弹窗弹出说明脚本执行完成。</p></li><li><p>脚本执行完成后，返回网站，点击需要破解的软件下方复制licence，如图：</p><figure><img src="https://cdn.justdopay.com/notion/md5-026c71ed9ce13f7463c4a41235c56428.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>把复制的licence 复制到软件即可完成破解。（别忘记第8步小惊喜）</p></li><li><p>把网页向下翻，还提供了各种付费插件的激活码，仍然使用对应方法激活就可以了。</p></li>',7),B=t("br",null,null,-1),y=t("h2",{id:"系统推荐",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),e(" 系统推荐")],-1),x=t("p",null,[t("br"),t("br"),t("br"),t("br"),t("br"),t("br")],-1),F=t("hr",null,null,-1),j=t("hr",null,null,-1),S=t("ul",null,[t("li",null,[t("strong",null,"随机毒鸡汤"),e("：一物降一物，钱能降万物。 "),t("br"),t("br"),t("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d1e5d0f2-350c-4ff1-a64b-5ccf5b212ba8",alt:"",loading:"lazy"})])],-1);function T(v,k){const o=a("ExternalLinkIcon"),n=a("RouterLink");return c(),r("div",null,[g,u,h,f,_,m,t("ol",null,[t("li",null,[t("p",null,[e("打开 "),t("a",E,[e("https://3.jetbra.in/"),l(o)]),e("，这是一个网站列表，等待其检测完成后，随意选择一个可以使用的网站，点击进入，界面如下：（若浏览器报告不安全请放行，如果实在不放心可以用沙箱打开）")]),b]),A]),B,y,t("ul",null,[t("li",null,[l(n,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[e("Notion笔记定时备份")]),_:1})]),t("li",null,[l(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:i(()=>[e("CloudFlare 客户端证书的使用")]),_:1})]),t("li",null,[l(n,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:i(()=>[e("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),t("li",null,[l(n,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[e("MySQL高可用")]),_:1})]),t("li",null,[l(n,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:i(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),t("li",null,[l(n,{to:"/other/Spring%20RetryTemplate.html"},{default:i(()=>[e("Spring RetryTemplate")]),_:1})]),t("li",null,[l(n,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[e("istio基础知识")]),_:1})]),t("li",null,[l(n,{to:"/other/%E9%AB%98%E5%8F%AF%E7%94%A8%E9%80%9A%E7%94%A8%E6%96%B9%E6%A1%88.html"},{default:i(()=>[e("高可用通用方案")]),_:1})]),t("li",null,[l(n,{to:"/software/unclassified/gperftools.html"},{default:i(()=>[e("gperftools")]),_:1})]),t("li",null,[l(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[e("Arthas使用记录")]),_:1})]),t("li",null,[l(n,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:i(()=>[e("Git Merge 、Rebase")]),_:1})]),t("li",null,[l(n,{to:"/other/MyBatis%20xml%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%E5%A4%84%E7%90%86.html"},{default:i(()=>[e("MyBatis xml特殊字符处理")]),_:1})])]),x,F,j,S])}const N=s(p,[["render",T],["__file","JetBrains IDE 全破解.html.vue"]]);export{N as default};
