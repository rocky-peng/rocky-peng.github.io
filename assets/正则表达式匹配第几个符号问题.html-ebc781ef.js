import{_ as n,$ as s,a0 as d,a1 as e,a3 as l,a4 as i,a5 as r,a2 as t,w as o}from"./framework-6821ba0c.js";const c={},u=r(`<h2 id="先说下需求" tabindex="-1"><a class="header-anchor" href="#先说下需求" aria-hidden="true">#</a> 先说下需求</h2><p>现在有类似下面的字符串（只列出部分，实际很多）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object_type,customer,消费者对象
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>替换后的效果： <img src="https://cdn.justdopay.com/pasteimageintomarkdown/2022-12-30/14837638492500.png" alt="" loading="lazy"></p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,21),h=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),m=e("hr",null,null,-1),p=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：我的主要成分，1%的沙雕+99%的穷。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=52bc87c5-37d0-4e25-b8e6-747d3484309d",alt:"",loading:"lazy"})])],-1);function _(v,B){const a=o("RouterLink");return s(),d("div",null,[u,e("ul",null,[e("li",null,[l(a,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:i(()=>[t("Git笔记")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/RSA%20%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E5%A4%9A%E8%AF%AD%E8%A8%80%E5%AE%9E%E7%8E%B0%E6%96%B9%E6%A1%88.html"},{default:i(()=>[t("RSA 加密解密多语言实现方案")]),_:1})]),e("li",null,[l(a,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:i(()=>[t("MySQL杂项")]),_:1})]),e("li",null,[l(a,{to:"/software/maccms/MAC%20CMS.html"},{default:i(()=>[t("MAC CMS")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[t("多台centos服务器，文件互相备份")]),_:1})]),e("li",null,[l(a,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:i(()=>[t("Centos离线安装Docker")]),_:1})]),e("li",null,[l(a,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:i(()=>[t("前端axios下载csv文件乱码")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B8%B8%E7%94%A8%E6%8A%80%E6%9C%AF.html"},{default:i(()=>[t("前后端常用技术")]),_:1})]),e("li",null,[l(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:i(()=>[t("MySQL数据迁移到PGSQL")]),_:1})]),e("li",null,[l(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:i(()=>[t("vuepress-theme-hope 添加谷歌广告")]),_:1})]),e("li",null,[l(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:i(()=>[t("PostgreSQL高可用")]),_:1})]),e("li",null,[l(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:i(()=>[t("BBR加速")]),_:1})])]),h,E,m,p])}const b=n(c,[["render",_],["__file","正则表达式匹配第几个符号问题.html.vue"]]);export{b as default};
