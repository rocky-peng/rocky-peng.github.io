import{_ as l,$ as o,a0 as i,a1 as s,a3 as e,a4 as t,a5 as r,a2 as n,w as p}from"./framework-349591b1.js";const c={},d=r(`<ol><li><p>进入仓库目录，执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),u=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),m=s("hr",null,null,-1),v=s("hr",null,null,-1),E=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：那些说要陪你一辈子的人，现在应该，都不在你身边了吧。 "),s("br"),s("br"),s("img",{src:"https://images.pexels.com/photos/32118818/pexels-photo-32118818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"",loading:"lazy"})])],-1);function _(k,b){const a=p("RouterLink");return o(),i("div",null,[d,s("ul",null,[s("li",null,[e(a,{to:"/software/unclassified/MAT%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[n("MAT工具")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/Btrace%E5%85%A5%E9%97%A8.html"},{default:t(()=>[n("Btrace入门")]),_:1})]),s("li",null,[e(a,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:t(()=>[n("Spring框架源码关键点")]),_:1})]),s("li",null,[e(a,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:t(()=>[n("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),s("li",null,[e(a,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[n("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:t(()=>[n("乱七八糟的笔记")]),_:1})]),s("li",null,[e(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:t(()=>[n("IO相关")]),_:1})]),s("li",null,[e(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:t(()=>[n("istio基础知识")]),_:1})]),s("li",null,[e(a,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:t(()=>[n("Paxos算法")]),_:1})]),s("li",null,[e(a,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:t(()=>[n("InnoDB存储引擎")]),_:1})]),s("li",null,[e(a,{to:"/other/JetBrains-License-Server.html"},{default:t(()=>[n("JetBrains-License-Server")]),_:1})]),s("li",null,[e(a,{to:"/software/raft/sofajraft.html"},{default:t(()=>[n("sofajraft")]),_:1})])]),u,m,v,E])}const g=l(c,[["render",_],["__file","Git历史记录修改用户名和邮箱.html.vue"]]);export{g as default};
