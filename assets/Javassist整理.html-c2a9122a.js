import{_ as o,$ as E,a0 as i,a1 as l,a3 as e,a4 as s,a5 as n,a2 as t,w as r}from"./framework-b3a0f150.js";const u={},c=n('<ol><li><p>ClassPool.get(classFullName) 执行成功的条件 满足一条即可</p><ul><li>classFullName对应的class是由ClassPool创建的</li><li>执行的时候存在对应的class二进制文件</li></ul><p>因此，如果classFullName代表的是由其他二进制框架动态生成的Class对象，那么get方法是会抛出异常的。</p></li><li><p>CtClass对象是一个class文件的抽象，它封装了一个class文件的数据结构。因此要构造出这样的数据结构，要么是从头构造（makeClass），要么读取一个class文件。所以这也印证了第一点。</p></li><li><p>由于ClassPool需要保留所有的CtClass对象，所以如果当CtClass数量很大的时候，ClassPool可能会占用很大的内存，所以如果已知某些CtCalass对象不会再被使用，可以调用其detach方法从ClassPool中移除</p></li><li></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',3),B=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),d=l("hr",null,null,-1),A=l("hr",null,null,-1),_=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),t("：都说男人有钱就变坏，TMD我都当了，三十多年的好人了！ "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=78224d69-1272-41c3-a831-9b70524b6c03",alt:"",loading:"lazy"})])],-1);function f(h,m){const a=r("RouterLink");return E(),i("div",null,[c,l("ul",null,[l("li",null,[e(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:s(()=>[t("MAT工具")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:s(()=>[t("Docker进行资源隔离")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:s(()=>[t("KVM方式集群部署ES")]),_:1})]),l("li",null,[e(a,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("MongoDB高可用")]),_:1})]),l("li",null,[e(a,{to:"/other/%E6%8F%90%E5%8F%96Docker%E9%95%9C%E5%83%8F%E4%B8%AD%E7%9A%84%E6%96%87%E4%BB%B6.html"},{default:s(()=>[t("提取Docker镜像中的文件")]),_:1})]),l("li",null,[e(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:s(()=>[t("Redis高可用")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[t("PasteImageIntoMarkdown插件开发")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:s(()=>[t("批量修改git历史记录中的用户名和邮箱")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:s(()=>[t("Flutter开发需要涉及的知识点大纲")]),_:1})]),l("li",null,[e(a,{to:"/software/java-basic/Java%E9%9D%A2%E8%AF%95%E5%9F%BA%E7%A1%80.html"},{default:s(()=>[t("Java面试基础")]),_:1})]),l("li",null,[e(a,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:s(()=>[t("Docker跨主机通信方案")]),_:1})]),l("li",null,[e(a,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:s(()=>[t("杂记")]),_:1})])]),B,d,A,_])}const C=o(u,[["render",f],["__file","Javassist整理.html.vue"]]);export{C as default};
