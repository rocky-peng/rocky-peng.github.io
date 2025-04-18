import{_ as i,$ as r,a0 as d,a1 as e,a3 as l,a4 as n,a5 as s,a2 as t,w as o}from"./framework-b3a0f150.js";const c={},u=s(`<h2 id="先说下需求" tabindex="-1"><a class="header-anchor" href="#先说下需求" aria-hidden="true">#</a> 先说下需求</h2><p>现在有类似下面的字符串（只列出部分，实际很多）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object_type,customer,消费者对象
object_type,product,产品对象
object_type,organization,组织对象
object_type,employee,员工对象
object_type,other,其他
wechat_public_account,test,java
wechat_mini_program,test,vue
encrypt_method,noencrypt,不加密
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在想把第一个 , 改为 .<br> 然后想把第二个 , 改为 =</p><hr><h2 id="如果是你-你会怎么做-如果用正则-正则怎么写" tabindex="-1"><a class="header-anchor" href="#如果是你-你会怎么做-如果用正则-正则怎么写" aria-hidden="true">#</a> 如果是你，你会怎么做？ 如果用正则，正则怎么写？</h2><h2 id="我的方案" tabindex="-1"><a class="header-anchor" href="#我的方案" aria-hidden="true">#</a> 我的方案</h2><p>采用正则表达式，正则的表达式为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,(.*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.$1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 $1 就表示第一对小括号匹配到的字符串。 类似的 $2 表示第二对小括号匹配到的字符串</p><h2 id="举一反三" tabindex="-1"><a class="header-anchor" href="#举一反三" aria-hidden="true">#</a> 举一反三</h2><p>现在需求改为：把第二个逗号后的内容 和 第一个第二个逗号之间的内容 位置进行调换，正则表达式怎么写？</p><p>匹配的表达式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,(.*),(.*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>,$2,$1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换后的效果： <img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-12-30/14837638492500.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,21),E=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),m=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：解不开的心结，就把它系成蝴蝶结叭。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/7230893/pexels-photo-7230893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Two adults in a dimly lit room negotiating over a small package at a table.",loading:"lazy"})])],-1);function _(v,A){const a=o("RouterLink");return r(),d("div",null,[u,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:n(()=>[t("测试两台服务器间的网速")]),_:1})]),e("li",null,[l(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:n(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:n(()=>[t("MySQL锁、事务、隔离级别")]),_:1})]),e("li",null,[l(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:n(()=>[t("Arthas使用记录")]),_:1})]),e("li",null,[l(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[t("Java语言完成notion笔记备份")]),_:1})]),e("li",null,[l(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:n(()=>[t("Git Merge 、Rebase")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[l(a,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:n(()=>[t("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),e("li",null,[l(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:n(()=>[t("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),e("li",null,[l(a,{to:"/intro.html"},{default:n(()=>[t("intro")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:n(()=>[t("PostgreSQL高可用")]),_:1})]),e("li",null,[l(a,{to:"/other/K8S%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:n(()=>[t("K8S常用命令")]),_:1})])]),E,h,m,p])}const B=i(c,[["render",_],["__file","正则表达式匹配第几个符号问题.html.vue"]]);export{B as default};
