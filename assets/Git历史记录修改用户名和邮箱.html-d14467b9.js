import{_ as l,$ as o,a0 as i,a1 as n,a3 as e,a4 as t,a5 as r,a2 as s,w as p}from"./framework-b6ede5bc.js";const c={},d=r(`<ol><li><p>进入仓库目录，执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),u=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),E=n("hr",null,null,-1),m=n("hr",null,null,-1),v=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：以我的资历和文凭，将来这个城市的大街，都归我扫。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=2b416f6a-a252-4991-a1f2-69c60dee9b96",alt:"",loading:"lazy"})])],-1);function _(k,b){const a=p("RouterLink");return o(),i("div",null,[d,n("ul",null,[n("li",null,[e(a,{to:"/software/spring/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html"},{default:t(()=>[s("常见问题")]),_:1})]),n("li",null,[e(a,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[s("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),n("li",null,[e(a,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:t(()=>[s("数组转树形结构只需两步")]),_:1})]),n("li",null,[e(a,{to:"/other/%E6%98%AF%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8MapStruct%E6%9B%BF%E4%BB%A3BeanUtils%E4%BA%86.html"},{default:t(()=>[s("是时候使用MapStruct替代BeanUtils了")]),_:1})]),n("li",null,[e(a,{to:"/software/maccms/MAC%20CMS.html"},{default:t(()=>[s("MAC CMS")]),_:1})]),n("li",null,[e(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:t(()=>[s("分库分表")]),_:1})]),n("li",null,[e(a,{to:"/other/%E9%98%BF%E6%96%AF%E9%A1%BF%E5%8F%91%E5%88%B0%E4%BB%98.html"},{default:t(()=>[s("阿斯顿发到付")]),_:1})]),n("li",null,[e(a,{to:"/software/unclassified/Flutter%E5%BC%80%E5%8F%91%E9%9C%80%E8%A6%81%E6%B6%89%E5%8F%8A%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.html"},{default:t(()=>[s("Flutter开发需要涉及的知识点大纲")]),_:1})]),n("li",null,[e(a,{to:"/other/Java%E8%AF%AD%E8%A8%80%E5%AE%8C%E6%88%90notion%E7%AC%94%E8%AE%B0%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[s("Java语言完成notion笔记备份")]),_:1})]),n("li",null,[e(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:t(()=>[s("SQL优化")]),_:1})]),n("li",null,[e(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:t(()=>[s("raft协议")]),_:1})]),n("li",null,[e(a,{to:"/other/WebSocket%20SpringBoot%20Demo.html"},{default:t(()=>[s("WebSocket SpringBoot Demo")]),_:1})])]),u,E,m,v])}const f=l(c,[["render",_],["__file","Git历史记录修改用户名和邮箱.html.vue"]]);export{f as default};
