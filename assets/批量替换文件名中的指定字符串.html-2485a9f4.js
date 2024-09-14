import{_ as l,$ as o,a0 as r,a1 as a,a3 as n,a4 as s,a5 as E,a2 as e,w as i}from"./framework-7a325de9.js";const d={},c=E('<h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><p>比较通用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> ./ <span class="token parameter variable">-name</span> <span class="token string">&quot;*keyword*&quot;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> f<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$f</span> <span class="token variable">${f<span class="token operator">/</span>keyword<span class="token operator">/</span>targetword}</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令解释：找出文件名中有 keyword 字符串的文件，然后通过mv命令把 keyword替换为targetword</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',6),u=a("p",null,[a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],-1),B=a("hr",null,null,-1),p=a("hr",null,null,-1),_=a("ul",null,[a("li",null,[a("strong",null,"随机毒鸡汤"),e("：互相轻蔑却又彼此来往，这就是世上，所谓朋友的真面目。 "),a("br"),a("br"),a("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=4ab6110c-05c0-42f5-b34b-62f46278bd06",alt:"",loading:"lazy"})])],-1);function h(A,f){const t=i("RouterLink");return o(),r("div",null,[c,a("ul",null,[a("li",null,[n(t,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:s(()=>[e("Git笔记")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/%E5%90%84%E7%A7%8D%E7%BD%91%E5%85%B3%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95.html"},{default:s(()=>[e("各种网关性能测试")]),_:1})]),a("li",null,[n(t,{to:"/other/%E6%95%B0%E7%BB%84%E8%BD%AC%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84%E5%8F%AA%E9%9C%80%E4%B8%A4%E6%AD%A5.html"},{default:s(()=>[e("数组转树形结构只需两步")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:s(()=>[e("KVM方式集群部署ES")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85Google%20BBR.html"},{default:s(()=>[e("如何安装Google BBR")]),_:1})]),a("li",null,[n(t,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:s(()=>[e("PasteImageIntoMarkdown插件开发")]),_:1})]),a("li",null,[n(t,{to:"/other/Paxos%E7%AE%97%E6%B3%95.html"},{default:s(()=>[e("Paxos算法")]),_:1})]),a("li",null,[n(t,{to:"/other/Spring%20Boot%E5%8D%87%E7%BA%A7%E5%88%B02%206%20x%E8%B8%A9%E7%9A%84%E5%9D%91.html"},{default:s(()=>[e("Spring Boot升级到2 6 x踩的坑")]),_:1})]),a("li",null,[n(t,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:s(()=>[e("Centos离线安装Docker")]),_:1})]),a("li",null,[n(t,{to:"/other/%E5%89%8D%E7%AB%AFaxios%E4%B8%8B%E8%BD%BDcsv%E6%96%87%E4%BB%B6%E4%B9%B1%E7%A0%81.html"},{default:s(()=>[e("前端axios下载csv文件乱码")]),_:1})]),a("li",null,[n(t,{to:"/other/Nginx%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"},{default:s(()=>[e("Nginx的双向认证配置")]),_:1})]),a("li",null,[n(t,{to:"/other/%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87%E5%9C%A8%E7%BA%BF%E6%8E%A5%E5%8F%A3.html"},{default:s(()=>[e("随机图片在线接口")]),_:1})])]),u,B,p,_])}const k=l(d,[["render",h],["__file","批量替换文件名中的指定字符串.html.vue"]]);export{k as default};
