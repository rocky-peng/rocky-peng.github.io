import{_ as i,$ as s,a0 as d,a1 as e,a3 as l,a4 as n,a5 as r,a2 as a,w as o}from"./framework-b3a0f150.js";const c={},E=r(`<h2 id="先说下需求" tabindex="-1"><a class="header-anchor" href="#先说下需求" aria-hidden="true">#</a> 先说下需求</h2><p>现在有类似下面的字符串（只列出部分，实际很多）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object_type,customer,消费者对象
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换后的效果： <img src="https://cdn.justdopay.top/pasteimageintomarkdown/2022-12-30/14837638492500.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,21),u=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),h=e("hr",null,null,-1),m=e("hr",null,null,-1),B=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),a("：城市是千百万人，一起孤独生活的地方。 "),e("br"),e("br"),e("img",{src:"https://images.pexels.com/photos/7230893/pexels-photo-7230893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Two adults in a dimly lit room negotiating over a small package at a table.",loading:"lazy"})])],-1);function _(p,v){const t=o("RouterLink");return s(),d("div",null,[E,e("ul",null,[e("li",null,[l(t,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:n(()=>[a("Notion笔记定时备份")]),_:1})]),e("li",null,[l(t,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:n(()=>[a("JetBrains IDE 全破解")]),_:1})]),e("li",null,[l(t,{to:"/other/HTTP1%200%20vs%20HTTP1%201%20vs%20WebSocket.html"},{default:n(()=>[a("HTTP1 0 vs HTTP1 1 vs WebSocket")]),_:1})]),e("li",null,[l(t,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:n(()=>[a("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[l(t,{to:"/software/jvm/JVM%E6%9D%82%E9%A1%B9.html"},{default:n(()=>[a("JVM杂项")]),_:1})]),e("li",null,[l(t,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:n(()=>[a("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[l(t,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:n(()=>[a("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:n(()=>[a("前后端常用技术")]),_:1})]),e("li",null,[l(t,{to:"/other/PostgreSQL%20JSON%E7%B1%BB%E5%9E%8B%E5%AD%97%E6%AE%B5%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html"},{default:n(()=>[a("PostgreSQL JSON类型字段常用操作")]),_:1})]),e("li",null,[l(t,{to:"/software/unclassified/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98.html"},{default:n(()=>[a("分布式问题")]),_:1})]),e("li",null,[l(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:n(()=>[a("随机图片在线接口")]),_:1})]),e("li",null,[l(t,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:n(()=>[a("raft协议")]),_:1})])]),u,h,m,B])}const A=i(c,[["render",_],["__file","正则表达式匹配第几个符号问题.html.vue"]]);export{A as default};
