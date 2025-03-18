import{_ as s,$ as d,a0 as r,a1 as e,a2 as t,a3 as l,a4 as a,a5 as c,w as i}from"./framework-b3a0f150.js";const p={},E=e("p",null,"由于公开的licence server越来越不好了，所以这里出一篇破解教程。",-1),u=e("p",null,"本教程理论上支持所有jetbrains ide，但我只实验过intellij idea，其他ide请自行测试。",-1),g=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/notion/md5-5fe6678e1738bfce34d852f1f28e420d.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),f=e("h2",{id:"正文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),t(" 正文")],-1),h=e("p",null,"我这里采用的版本是：2023.2.5 ，其他版本请自行测试。",-1),m=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/notion/md5-fcb4afbc1ea47432c99ec5721e827ddf.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),_={href:"https://3.jetbra.in/",target:"_blank",rel:"noopener noreferrer"},B=e("figure",null,[e("img",{src:"https://cdn.justdopay.top/notion/md5-526331b671da62e8b9c46678b892e7e3.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),A=c('<li><p>点击上面online的任意一个网址，这里选择第一个，打开后如下：</p><figure><img src="https://cdn.justdopay.top/notion/md5-fc524ac5bdab72a1ac8a77a1f40eec8d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>点击顶部的 jetbra.zip 进行下载，解压，解压后目录大体这样：</p><figure><img src="https://cdn.justdopay.top/notion/md5-f342a626b00698e83af2e67286f70ede.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>打开scripts文件夹：</p><figure><img src="https://cdn.justdopay.top/notion/md5-31dcac66baa36d655253347394879539.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>根据自身操作系统选择执行的脚本。先执行uninstall然后install。 执行前关闭ide，windows系统建议管理员执行uninstall-all-users.vbs和install-all-users.vbs。执行过程中安全软件可能会警告，需要放行。建议临时关闭安全软件，比如360。 执行后需要等待一段时间，直到有 done 弹窗弹出说明脚本执行完成。</p></li><li><p>脚本执行完成后，返回网站，点击需要破解的软件下方复制licence，如图：</p><figure><img src="https://cdn.justdopay.top/notion/md5-026c71ed9ce13f7463c4a41235c56428.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>把复制的licence 复制到软件即可完成破解。（别忘记第8步小惊喜）</p></li><li><p>把网页向下翻，还提供了各种付费插件的激活码，仍然使用对应方法激活就可以了。</p></li>',7),b=e("br",null,null,-1),y=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),t(" 系统推荐")],-1),F=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),w=e("hr",null,null,-1),x=e("hr",null,null,-1),k=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：上班后你会发现，不是别人比你傻，而是别人比你会装傻。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Eyeglasses reflecting computer code on a monitor, ideal for technology and programming themes.",loading:"lazy"})])],-1);function j(C,S){const o=i("ExternalLinkIcon"),n=i("RouterLink");return d(),r("div",null,[E,u,g,f,h,m,e("ol",null,[e("li",null,[e("p",null,[t("打开 "),e("a",_,[t("https://3.jetbra.in/"),l(o)]),t("，这是一个网站列表，等待其检测完成后，随意选择一个可以使用的网站，点击进入，界面如下：（若浏览器报告不安全请放行，如果实在不放心可以用沙箱打开）")]),B]),A]),b,y,e("ul",null,[e("li",null,[l(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:a(()=>[t("MySQL常用命令")]),_:1})]),e("li",null,[l(n,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:a(()=>[t("Btrace入门")]),_:1})]),e("li",null,[l(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:a(()=>[t("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[l(n,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[t("Spring RetryTemplate")]),_:1})]),e("li",null,[l(n,{to:"/software/middleware/mq/kafka.html"},{default:a(()=>[t("kafka")]),_:1})]),e("li",null,[l(n,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:a(()=>[t("常用队列")]),_:1})]),e("li",null,[l(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[t("index方法压力测试记录")]),_:1})]),e("li",null,[l(n,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:a(()=>[t("ShadowsockServer配置")]),_:1})]),e("li",null,[l(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:a(()=>[t("Markdown软件比对")]),_:1})]),e("li",null,[l(n,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:a(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[l(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:a(()=>[t("分布式问题")]),_:1})]),e("li",null,[l(n,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:a(()=>[t("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),F,w,x,k])}const L=s(p,[["render",j],["__file","JetBrains IDE 全破解.html.vue"]]);export{L as default};
