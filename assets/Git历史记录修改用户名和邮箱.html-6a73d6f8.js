import{_ as l,$ as o,a0 as i,a1 as s,a3 as e,a4 as t,a5 as r,a2 as n,w as p}from"./framework-58787b1c.js";const c={},d=r(`<ol><li><p>进入仓库目录，执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),u=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),E=s("hr",null,null,-1),v=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：伤害你的，不是对方的无情，而是你心存幻想的坚持。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=418b4d37-c532-4922-87df-5d850ff7a494",alt:"",loading:"lazy"})])],-1);function _(k,b){const a=p("RouterLink");return o(),i("div",null,[d,s("ul",null,[s("li",null,[e(a,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[n("Notion笔记定时备份")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:t(()=>[n("KVM 虚拟机安装")]),_:1})]),s("li",null,[e(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:t(()=>[n("Git合并多个提交并push到远程仓库")]),_:1})]),s("li",null,[e(a,{to:"/other/Nacos-Spring%20Gateway-Spring%20boot%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[n("Nacos-Spring Gateway-Spring boot无感发布")]),_:1})]),s("li",null,[e(a,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[n("JDK命令行工具")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:t(()=>[n("KVM方式集群部署ES")]),_:1})]),s("li",null,[e(a,{to:"/software/java-basic/IO%E7%9B%B8%E5%85%B3.html"},{default:t(()=>[n("IO相关")]),_:1})]),s("li",null,[e(a,{to:"/other/Arthas%E4%BD%BF%E7%94%A8%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[n("Arthas使用记录")]),_:1})]),s("li",null,[e(a,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[n("Mermaid示例")]),_:1})]),s("li",null,[e(a,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:t(()=>[n("raft协议")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/BBR%E5%8A%A0%E9%80%9F.html"},{default:t(()=>[n("BBR加速")]),_:1})]),s("li",null,[e(a,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[n("PostgreSQL高可用")]),_:1})])]),u,E,v,m])}const A=l(c,[["render",_],["__file","Git历史记录修改用户名和邮箱.html.vue"]]);export{A as default};
