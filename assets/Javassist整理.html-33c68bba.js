import{_ as o,$ as E,a0 as i,a1 as l,a3 as a,a4 as s,a5 as n,a2 as e,w as u}from"./framework-b3a0f150.js";const r={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),_=l("hr",null,null,-1),A=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：回到梦开始的地方，这不就是上床睡觉吗？ "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=340b0706-2352-4729-9d00-f0f702e90d23",alt:"",loading:"lazy"})])],-1);function f(h,m){const t=u("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[a(t,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:s(()=>[e("Cordova+Umi项目搭建步骤")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:s(()=>[e("记一次内存泄漏")]),_:1})]),l("li",null,[a(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[e("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[a(t,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[e("MongoDB高可用")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:s(()=>[e("分库分表")]),_:1})]),l("li",null,[a(t,{to:"/software/java-basic/%E5%B8%B8%E7%94%A8%E9%98%9F%E5%88%97.html"},{default:s(()=>[e("常用队列")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:s(()=>[e("linux_no_space_left_on_device")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[a(t,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[e("Git Merge 、Rebase")]),_:1})]),l("li",null,[a(t,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:s(()=>[e("ES杂项")]),_:1})]),l("li",null,[a(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:s(()=>[e("前后端常用技术")]),_:1})]),l("li",null,[a(t,{to:"/other/%E5%85%8D%E8%B4%B9%20API%20%E6%AF%8F%E6%97%A5%E6%8F%90%E4%BE%9B%E6%91%B8%E9%B1%BC%E6%97%A5%E6%8A%A5%EF%BC%8C%E8%87%AA%E5%8A%A8%E8%BF%94%E5%9B%9E%E6%97%A0%E6%B0%B4%E5%8D%B0%E5%9B%BE%E7%89%87%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E5%B0%8F%E7%A8%8B%E5%BA%8F.html"},{default:s(()=>[e("免费 API 每日提供摸鱼日报，自动返回无水印图片，适用于公众号和小程序")]),_:1})])]),d,B,_,A])}const p=o(r,[["render",f],["__file","Javassist整理.html.vue"]]);export{p as default};
