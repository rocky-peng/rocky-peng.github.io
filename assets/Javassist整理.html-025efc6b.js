import{_ as o,$ as E,a0 as i,a1 as l,a3 as t,a4 as s,a5 as r,a2 as a,w as n}from"./framework-16d560c6.js";const c={},B=r('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),u=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),f=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),a("：高考加油！我在工地等你。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=74a69f2b-666d-4f12-94e5-a3e5ac321f57",alt:"",loading:"lazy"})])],-1);function h(A,m){const e=n("RouterLink");return E(),i("div",null,[B,l("ul",null,[l("li",null,[t(e,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:s(()=>[a("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),l("li",null,[t(e,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:s(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),l("li",null,[t(e,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[a("提取Docker镜像中的文件")]),_:1})]),l("li",null,[t(e,{to:"/software/middleware/mq/kafka.html"},{default:s(()=>[a("kafka")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:s(()=>[a("index方法压力测试记录")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[a("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[t(e,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:s(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),l("li",null,[t(e,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[a("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[t(e,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:s(()=>[a("MySQL三大日志")]),_:1})]),l("li",null,[t(e,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:s(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),l("li",null,[t(e,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[a("Git历史记录修改用户名和邮箱")]),_:1})]),l("li",null,[t(e,{to:"/software/raft/sofajraft.html"},{default:s(()=>[a("sofajraft")]),_:1})])]),u,d,f,_])}const C=o(c,[["render",h],["__file","Javassist整理.html.vue"]]);export{C as default};
