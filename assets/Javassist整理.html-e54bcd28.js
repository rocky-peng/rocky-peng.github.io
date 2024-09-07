import{_ as E,$ as o,a0 as r,a1 as l,a3 as s,a4 as t,a5 as i,a2 as e,w as c}from"./framework-58787b1c.js";const n={},u=i('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：傻子才相信读书无用，聪明人都是，劝告别人读书无用。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=867c6483-ada8-4824-82e7-ea0ddb08dfcc",alt:"",loading:"lazy"})])],-1);function _(f,m){const a=c("RouterLink");return o(),r("div",null,[u,l("ul",null,[l("li",null,[s(a,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:t(()=>[e("synchronized原理深度剖析")]),_:1})]),l("li",null,[s(a,{to:"/other/Spring%20RetryTemplate.html"},{default:t(()=>[e("Spring RetryTemplate")]),_:1})]),l("li",null,[s(a,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:t(()=>[e("ShadowsockServer")]),_:1})]),l("li",null,[s(a,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:t(()=>[e("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[s(a,{to:"/software/docker/Docker%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[e("Docker笔记")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:t(()=>[e("简易版配置中心&初探原理")]),_:1})]),l("li",null,[s(a,{to:"/software/java-basic/AQS%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[e("AQS源码解读")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[e("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[s(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:t(()=>[e("vuepress-theme-hope 添加谷歌广告")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84%E6%8C%87%E5%AE%9A%E5%AD%97%E7%AC%A6%E4%B8%B2.html"},{default:t(()=>[e("批量替换文件名中的指定字符串")]),_:1})]),l("li",null,[s(a,{to:"/other/Docker%E9%9A%90%E5%B0%84%E7%9A%84%E7%AB%AF%E5%8F%A3%E5%A4%96%E7%BD%91%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE.html"},{default:t(()=>[e("Docker隐射的端口外网不能访问")]),_:1})]),l("li",null,[s(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:t(()=>[e("杂记")]),_:1})])]),B,d,A,h])}const C=E(n,[["render",_],["__file","Javassist整理.html.vue"]]);export{C as default};
