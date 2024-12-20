import{_ as s,$ as c,a0 as d,a1 as e,a2 as l,a3 as t,a4 as i,a5 as r,w as a}from"./framework-b3a0f150.js";const u={},p=e("p",null,"由于公开的licence server越来越不好了，所以这里出一篇破解教程。",-1),E=e("p",null,"本教程理论上支持所有jetbrains ide，但我只实验过intellij idea，其他ide请自行测试。",-1),g=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-5fe6678e1738bfce34d852f1f28e420d.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),f=e("h2",{id:"正文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),l(" 正文")],-1),_=e("p",null,"我这里采用的版本是：2023.2.5 ，其他版本请自行测试。",-1),h=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-fcb4afbc1ea47432c99ec5721e827ddf.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),m={href:"https://3.jetbra.in/",target:"_blank",rel:"noopener noreferrer"},B=e("figure",null,[e("img",{src:"https://cdn.justdopay.com/notion/md5-526331b671da62e8b9c46678b892e7e3.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),A=r('<li><p>点击上面online的任意一个网址，这里选择第一个，打开后如下：</p><figure><img src="https://cdn.justdopay.com/notion/md5-fc524ac5bdab72a1ac8a77a1f40eec8d.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>点击顶部的 jetbra.zip 进行下载，解压，解压后目录大体这样：</p><figure><img src="https://cdn.justdopay.com/notion/md5-f342a626b00698e83af2e67286f70ede.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>打开scripts文件夹：</p><figure><img src="https://cdn.justdopay.com/notion/md5-31dcac66baa36d655253347394879539.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>根据自身操作系统选择执行的脚本。先执行uninstall然后install。 执行前关闭ide，windows系统建议管理员执行uninstall-all-users.vbs和install-all-users.vbs。执行过程中安全软件可能会警告，需要放行。建议临时关闭安全软件，比如360。 执行后需要等待一段时间，直到有 done 弹窗弹出说明脚本执行完成。</p></li><li><p>脚本执行完成后，返回网站，点击需要破解的软件下方复制licence，如图：</p><figure><img src="https://cdn.justdopay.com/notion/md5-026c71ed9ce13f7463c4a41235c56428.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></li><li><p>把复制的licence 复制到软件即可完成破解。（别忘记第8步小惊喜）</p></li><li><p>把网页向下翻，还提供了各种付费插件的激活码，仍然使用对应方法激活就可以了。</p></li>',7),b=e("br",null,null,-1),y=e("h2",{id:"系统推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统推荐","aria-hidden":"true"},"#"),l(" 系统推荐")],-1),x=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),F=e("hr",null,null,-1),D=e("hr",null,null,-1),j=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：乖别担心，恋爱都轮不到你，肺炎怎么会轮到你？ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=07f696f7-40d7-45d8-bcb3-9871457676ee",alt:"",loading:"lazy"})])],-1);function C(k,w){const o=a("ExternalLinkIcon"),n=a("RouterLink");return c(),d("div",null,[p,E,g,f,_,h,e("ol",null,[e("li",null,[e("p",null,[l("打开 "),e("a",m,[l("https://3.jetbra.in/"),t(o)]),l("，这是一个网站列表，等待其检测完成后，随意选择一个可以使用的网站，点击进入，界面如下：（若浏览器报告不安全请放行，如果实在不放心可以用沙箱打开）")]),B]),A]),b,y,e("ul",null,[e("li",null,[t(n,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:i(()=>[l("MySQL常用命令")]),_:1})]),e("li",null,[t(n,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:i(()=>[l("CloudFlare 客户端证书的使用")]),_:1})]),e("li",null,[t(n,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[l("MySQL高可用")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:i(()=>[l("正则表达式匹配第几个符号问题")]),_:1})]),e("li",null,[t(n,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:i(()=>[l("Centos离线安装Docker")]),_:1})]),e("li",null,[t(n,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:i(()=>[l("Arthas使用记录")]),_:1})]),e("li",null,[t(n,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:i(()=>[l("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[t(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[l("ES杂项")]),_:1})]),e("li",null,[t(n,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:i(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[t(n,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:i(()=>[l("分布式问题")]),_:1})]),e("li",null,[t(n,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:i(()=>[l("Hbase 总览")]),_:1})]),e("li",null,[t(n,{to:"/software/linux/Linux.html"},{default:i(()=>[l("Linux")]),_:1})])]),x,F,D,j])}const z=s(u,[["render",C],["__file","JetBrains IDE 全破解.html.vue"]]);export{z as default};
