import{_ as r,$ as n,a0 as i,a1 as e,a3 as t,a4 as o,a2 as l,a5 as d,w as s}from"./framework-b3a0f150.js";const u={},h=e("p",null,"先列个大纲：",-1),c=e("h2",{id:"抛开cloudflare配置nginx的双向认证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#抛开cloudflare配置nginx的双向认证","aria-hidden":"true"},"#"),l(" 抛开cloudflare配置nginx的双向认证")],-1),E=e("p",null,"这里可以参考另外一篇博文：",-1),_=d('<h2 id="在cloudflare中生成服务端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成服务端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成服务端证书（也可以用自己的）</h2><h2 id="在cloudflare中生成客户端证书-也可以用自己的" tabindex="-1"><a class="header-anchor" href="#在cloudflare中生成客户端证书-也可以用自己的" aria-hidden="true">#</a> 在cloudflare中生成客户端证书（也可以用自己的）</h2><h2 id="在源服务器中配置双向认证" tabindex="-1"><a class="header-anchor" href="#在源服务器中配置双向认证" aria-hidden="true">#</a> 在源服务器中配置双向认证</h2><p>这里以nginx为列</p><h2 id="在cloudflare中配置哪些域名需要使用双向认证-最关键一步" tabindex="-1"><a class="header-anchor" href="#在cloudflare中配置哪些域名需要使用双向认证-最关键一步" aria-hidden="true">#</a> 在cloudflare中配置哪些域名需要使用双向认证（最关键一步）</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',7),f=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),m=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),l("：长得帅的踢键子都帅，长得丑的，打高尔夫都像在铲屎。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/31416984/pexels-photo-31416984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Modern interior of an art gallery in Tokyo, Japan, showcasing stunning architectural design.",loading:"lazy"})])],-1);function A(x,b){const a=s("RouterLink");return n(),i("div",null,[h,c,E,e("p",null,[t(a,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:o(()=>[l("Nginx的双向认证配置")]),_:1})]),_,e("ul",null,[e("li",null,[t(a,{to:"/software/unclassified/Oh%20My%20ZSH.html"},{default:o(()=>[l("Oh My ZSH")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html"},{default:o(()=>[l("JVM垃圾收集器")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JVM%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE.html"},{default:o(()=>[l("JVM参数设置")]),_:1})]),e("li",null,[t(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[l("JDK命令行工具")]),_:1})]),e("li",null,[t(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:o(()=>[l("是时候使用MapStruct替代BeanUtils了")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[l("Markdown Mermaid画图实例")]),_:1})]),e("li",null,[t(a,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:o(()=>[l("Hadoop 一")]),_:1})]),e("li",null,[t(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:o(()=>[l("IO相关")]),_:1})]),e("li",null,[t(a,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:o(()=>[l("Sublime Text 格式化JSON")]),_:1})]),e("li",null,[t(a,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[l("linux_no_space_left_on_device")]),_:1})]),e("li",null,[t(a,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:o(()=>[l("Spring Boot升级到2 6 x踩的坑")]),_:1})]),e("li",null,[t(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[l("Lombok的Accessors导致EasyExcel读取失败")]),_:1})])]),f,B,m,p])}const w=r(u,[["render",A],["__file","CloudFlare 客户端证书的使用.html.vue"]]);export{w as default};
