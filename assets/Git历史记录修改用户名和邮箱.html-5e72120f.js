import{_ as l,$ as o,a0 as i,a1 as s,a3 as e,a4 as t,a5 as r,a2 as n,w as p}from"./framework-b3a0f150.js";const c={},d=r(`<ol><li><p>进入仓库目录，执行</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#!/bin/sh</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,3),u=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),E=s("hr",null,null,-1),v=s("hr",null,null,-1),m=s("ul",null,[s("li",null,[s("strong",null,"随机毒鸡汤"),n("：有些人考得好点就开始得瑟，不像我，从来就考不到好成绩。 "),s("br"),s("br"),s("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=99a55f40-bcc9-4d6c-82ff-710fc4f712c2",alt:"",loading:"lazy"})])],-1);function _(k,b){const a=p("RouterLink");return o(),i("div",null,[d,s("ul",null,[s("li",null,[e(a,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[n("弱引用示例")]),_:1})]),s("li",null,[e(a,{to:"/other/JetBrains%20IDE%20%E5%85%A8%E7%A0%B4%E8%A7%A3.html"},{default:t(()=>[n("JetBrains IDE 全破解")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/NGINX.html"},{default:t(()=>[n("NGINX")]),_:1})]),s("li",null,[e(a,{to:"/other/PostgreSQL%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[n("PostgreSQL定时备份")]),_:1})]),s("li",null,[e(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:t(()=>[n("测试两台服务器间的网速")]),_:1})]),s("li",null,[e(a,{to:"/other/K8S%20%E6%97%A0%E6%84%9F%E5%8F%91%E5%B8%83.html"},{default:t(()=>[n("K8S 无感发布")]),_:1})]),s("li",null,[e(a,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:t(()=>[n("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),s("li",null,[e(a,{to:"/software/maccms/MAC%20CMS.html"},{default:t(()=>[n("MAC CMS")]),_:1})]),s("li",null,[e(a,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[n("Redis高可用")]),_:1})]),s("li",null,[e(a,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:t(()=>[n("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),s("li",null,[e(a,{to:"/other/Git%20Merge%20%E3%80%81Rebase.html"},{default:t(()=>[n("Git Merge 、Rebase")]),_:1})]),s("li",null,[e(a,{to:"/other/vuepress/vuepress-theme-hope%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97.html"},{default:t(()=>[n("vuepress-theme-hope使用心得")]),_:1})])]),u,E,v,m])}const A=l(c,[["render",_],["__file","Git历史记录修改用户名和邮箱.html.vue"]]);export{A as default};
