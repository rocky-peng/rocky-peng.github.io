import{_ as l,$ as o,a0 as i,a1 as s,a3 as e,a4 as t,a5 as r,a2 as n,w as p}from"./framework-6347c55a.js";const c={},d=r(`<ol><li><p>进入仓库目录，执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#!/bin/sh</span>

git filter<span class="token operator">-</span>branch <span class="token operator">-</span>f <span class="token comment">--env-filter &#39;</span>

OLD_EMAIL<span class="token operator">=</span><span class="token string">&quot;旧邮箱&quot;</span>
CORRECT_NAME<span class="token operator">=</span><span class="token string">&quot;新用户名&quot;</span>
CORRECT_EMAIL<span class="token operator">=</span><span class="token string">&quot;新邮箱&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;$GIT_COMMITTER_EMAIL&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;$OLD_EMAIL&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    export GIT_COMMITTER_NAME<span class="token operator">=</span><span class="token string">&quot;$CORRECT_NAME&quot;</span>
    export GIT_COMMITTER_EMAIL<span class="token operator">=</span><span class="token string">&quot;$CORRECT_EMAIL&quot;</span>
fi
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;$GIT_AUTHOR_EMAIL&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;$OLD_EMAIL&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    export GIT_AUTHOR_NAME<span class="token operator">=</span><span class="token string">&quot;$CORRECT_NAME&quot;</span>
    export GIT_AUTHOR_EMAIL<span class="token operator">=</span><span class="token string">&quot;$CORRECT_EMAIL&quot;</span>
fi

git config <span class="token keyword">user</span><span class="token punctuation">.</span>name <span class="token string">&quot;$CORRECT_NAME&quot;</span>
git config <span class="token keyword">user</span><span class="token punctuation">.</span>email <span class="token string">&quot;$CORRECT_EMAIL&quot;</span>
&#39; <span class="token comment">--tag-name-filter cat -- --branches --tags</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>git push <span class="token comment">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果执行1的过程中出错，可以执行下面命令后重试</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>rm <span class="token operator">-</span>rf <span class="token punctuation">.</span>git<span class="token operator">/</span>refs<span class="token operator">/</span>original<span class="token operator">/</span>
git reflog expire <span class="token comment">--expire=now --all</span>

或者

git <span class="token keyword">update</span><span class="token operator">-</span>ref <span class="token operator">-</span>d refs<span class="token operator">/</span>original<span class="token operator">/</span>refs<span class="token operator">/</span>heads<span class="token operator">/</span>master

或者

git filter<span class="token operator">-</span>branch <span class="token operator">-</span>f <span class="token comment">--tree-filter -f &#39;rm -f test&#39; -- --all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),u=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),m=s("hr",null,null,-1),E=s("hr",null,null,-1),v=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：我登过最高的峰，叫早高峰。 "),s("br"),s("br"),s("img",{src:"https://images.pexels.com/photos/33996090/pexels-photo-33996090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"The Secretary's Office of the Meiling Palace in Nanjing",loading:"lazy"})])],-1);function _(k,b){const a=p("RouterLink");return o(),i("div",null,[d,s("ul",null,[s("li",null,[e(a,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[n("Notion笔记定时备份")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/redis/Redis%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[n("Redis笔记")]),_:1})]),s("li",null,[e(a,{to:"/software/docker/Docker%E8%BF%9B%E8%A1%8C%E8%B5%84%E6%BA%90%E9%9A%94%E7%A6%BB.html"},{default:t(()=>[n("Docker进行资源隔离")]),_:1})]),s("li",null,[e(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[n("PostgreSQL定时备份")]),_:1})]),s("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:t(()=>[n("是时候使用MapStruct替代BeanUtils了")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E5%88%B6%E4%BD%9CKVM%20ES%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6.html"},{default:t(()=>[n("制作KVM ES镜像文件")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[n("异地多活")]),_:1})]),s("li",null,[e(a,{to:"/software/java-basic/CountDownLatch%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB.html"},{default:t(()=>[n("CountDownLatch源码解读")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/MySQL%E4%B8%89%E5%A4%A7%E6%97%A5%E5%BF%97.html"},{default:t(()=>[n("MySQL三大日志")]),_:1})]),s("li",null,[e(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[n("Mermaid示例")]),_:1})]),s("li",null,[e(a,{to:"/other/MySQL%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0PGSQL.html"},{default:t(()=>[n("MySQL数据迁移到PGSQL")]),_:1})]),s("li",null,[e(a,{to:"/other/Hbase%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[n("Hbase 总览")]),_:1})])]),u,m,E,v])}const B=l(c,[["render",_],["__file","Git历史记录修改用户名和邮箱.html.vue"]]);export{B as default};
