import{_ as i,$ as t,a0 as a,a3 as n}from"./framework-6dd3436e.js";const e={},d=n(`<p>先看看现在的本地仓库和远程仓库情况：上图为本地仓库，下图为远程仓库</p><figure><img src="https://cdn.justdopay.com/notion/md5-f9060536e094b18a62218a8d0d4f0c94.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-cbf5e6b07ee1551e5025180f7043f46f.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p><strong>现在的需求是，需要把C、D、E三个提交合并为一个提交</strong></p><h2 id="方法一-idea-交互界面完成" tabindex="-1"><a class="header-anchor" href="#方法一-idea-交互界面完成" aria-hidden="true">#</a> 方法一：idea 交互界面完成</h2><ol><li>选中C，右键，点击“interactively rebase from here”</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-597a68bf8ac98aabbe2e490b03106611.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>选中C、D、E（你想要合并的提交），然后点击Squash，点击后会让你输入新的提交信息，如图：</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-032f33d7fc848e4aa2a2f7d17d261855.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-8177691b185787f9978679011a81a949.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-038fbd2452cb33c39bc01d24a199a832.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>点击Start Rebasing。完成后可以在本地看到提交记录已经合并，如图：</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-861da70d2bff8bc6db4caa509c813675.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>push到远程仓库，注意需要点击force push</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-847cc507ddbe3005d2a937340b903bd4.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>操作完成，查看远程仓库的提交，如下图：</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-83ba53599905eeb2f5b952c85003f073.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><h2 id="方法二-git命令完成" tabindex="-1"><a class="header-anchor" href="#方法二-git命令完成" aria-hidden="true">#</a> 方法二：git命令完成</h2><ol><li>执行 git rebase -i 7d78433312cd651fe811c4c0bb02230203c91b28</li></ol><p>-i 后面就是 C 前一个提交的版本号（C这个提交的版本号应该也行，没试过），执行后出现下图的界面，也就是vi编辑界面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -i 后面就是 C 前一个提交的版本号，本文例子里就是B这个提交的版本号</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> dede351fabfaeb41520f59dddf44e632977f39a2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/notion/md5-c62636074ba34efe80fc156c0175c7ab.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>把 D 和 E 两个提交前面的 pick 更改为 squash，然后输入wq保存，进入编辑提交信息的界面，如下图：（至于squash的含义，在注释中有说明）</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-47abe3455fb152654d35fb5348f5f918.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-747882ae1fff4d7fde09b50d2fd6d6d0.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>编辑新的提交信息，然后输入wq保存，比如：</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-6680560b2a5755021e8bbc97095e7b16.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>保存后，本地的提交记录已经合并完成，如图：</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-53154bb64b09c3815391b007b9a94df1.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ol><li>push到远程仓库，注意需要<strong>强推</strong></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>查看远程仓库提交</li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-2dbf01966804dc519dfebff958aa863e.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：不给别人添麻烦，就是我对这个社会，最大的贡献。 <br><br><img src="https://api.btstu.cn/sjbz/?lx=dongman&amp;uuid=e7869c7b-dff2-4a75-9204-d6419e920f48" alt="" loading="lazy"></li></ul>`,37),o=[d];function l(c,s){return t(),a("div",null,o)}const f=i(e,[["render",l],["__file","Git合并多个提交并push到远程仓库.html.vue"]]);export{f as default};
