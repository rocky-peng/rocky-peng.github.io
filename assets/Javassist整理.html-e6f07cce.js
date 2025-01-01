import{_ as o,$ as i,a0 as n,a1 as l,a3 as e,a4 as a,a5 as r,a2 as t,w as u}from"./framework-b3a0f150.js";const E={},c=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),_=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：别那么大声跟我说话，我小时候被狗吓到过。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=1130da0d-8f6f-47c0-8957-55937fc883eb",alt:"",loading:"lazy"})])],-1);function f(m,C){const s=u("RouterLink");return i(),n("div",null,[c,l("ul",null,[l("li",null,[e(s,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[t("NGINX")]),_:1})]),l("li",null,[e(s,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:a(()=>[t("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[e(s,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:a(()=>[t("PostgreSQL定时备份")]),_:1})]),l("li",null,[e(s,{to:"/other/Sublime%20Text%20%E6%A0%BC%E5%BC%8F%E5%8C%96JSON.html"},{default:a(()=>[t("Sublime Text 格式化JSON")]),_:1})]),l("li",null,[e(s,{to:"/software/jvm/JVM%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"},{default:a(()=>[t("JVM异常处理")]),_:1})]),l("li",null,[e(s,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:a(()=>[t("Centos离线安装Docker")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:a(()=>[t("制作KVM ES镜像文件")]),_:1})]),l("li",null,[e(s,{to:"/other/PGSQL%E7%9A%84json%E5%92%8C%20jsonb%20%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:a(()=>[t("PGSQL的json和 jsonb 读写性能测试")]),_:1})]),l("li",null,[e(s,{to:"/intro.html"},{default:a(()=>[t("intro")]),_:1})]),l("li",null,[e(s,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:a(()=>[t("PostgreSQL JSON类型字段常用操作")]),_:1})]),l("li",null,[e(s,{to:"/software/linux/Linux.html"},{default:a(()=>[t("Linux")]),_:1})]),l("li",null,[e(s,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:a(()=>[t("BBR加速")]),_:1})])]),d,B,_,h])}const A=o(E,[["render",f],["__file","Javassist整理.html.vue"]]);export{A as default};
