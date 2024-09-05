import{_ as o,$ as r,a0 as i,a1 as l,a3 as e,a4 as s,a5 as n,a2 as t,w as u}from"./framework-b6ede5bc.js";const E={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),d=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),B=l("hr",null,null,-1),f=l("hr",null,null,-1),h=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：如果运气不好，不妨试试勇气。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=cac7be4d-0103-4a5e-988f-5b2bbb880fc9",alt:"",loading:"lazy"})])],-1);function _(A,m){const a=u("RouterLink");return r(),i("div",null,[c,l("ul",null,[l("li",null,[e(a,{to:"/other/MySQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MySQL高可用")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:s(()=>[t("是时候使用MapStruct替代BeanUtils了")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:s(()=>[t("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:s(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:s(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),l("li",null,[e(a,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[t("ShadowsockServer配置")]),_:1})]),l("li",null,[e(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:s(()=>[t("Git Merge 、Rebase")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/ReentrantLock%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:s(()=>[t("ReentrantLock源码解读")]),_:1})]),l("li",null,[e(a,{to:"/software/raft/sofajraft.html"},{default:s(()=>[t("sofajraft")]),_:1})]),l("li",null,[e(a,{to:"/other/GitHub%20Workflow%E7%AA%81%E7%84%B6%E6%8A%A5%E9%94%99.html"},{default:s(()=>[t("GitHub Workflow突然报错")]),_:1})]),l("li",null,[e(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:s(()=>[t("WebSocket SpringBoot Demo")]),_:1})]),l("li",null,[e(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:s(()=>[t("raft协议")]),_:1})])]),d,B,f,h])}const b=o(E,[["render",_],["__file","Javassist整理.html.vue"]]);export{b as default};
