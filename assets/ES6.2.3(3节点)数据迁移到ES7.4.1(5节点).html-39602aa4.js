import{_ as p,$ as l,a0 as c,a1 as n,a3 as t,a4 as e,a5 as o,a2 as s,w as i}from"./framework-b3a0f150.js";const u={},r=o(`<h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><p>现在有一个ES集群（3节点，3个节点既是master也是data），存储的数据约460G。现在需要升级ES版本为7.4.1，新集群采用12个节点（4个master，8个data节点）</p><h2 id="演练" tabindex="-1"><a class="header-anchor" href="#演练" aria-hidden="true">#</a> 演练</h2><ol><li>由于迁移的数据量蛮大的，基本不可能采用github的elasticdump工具，也不能采用es自带的数据备份恢复功能。</li><li>允许es停机（这是很重要的一点）</li></ol><p>所以在演练中，采用下面的演练步骤</p><h3 id="搭建es6-2-3的3节点集群" tabindex="-1"><a class="header-anchor" href="#搭建es6-2-3的3节点集群" aria-hidden="true">#</a> 搭建ES6.2.3的3节点集群</h3><p>由于es6.2.3版本docker官网没有现成的镜像，所以这里采用直接安装的方式。 es的配置和线上环境保持一样，稍微修改下端口什么的（因为在一台机子上），3个节点既是master也是data节点 具体配置如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">node6.2.3-3</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token comment">#cluster.initial_master_nodes: node-172.29.130.2</span>

<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">data</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">logs</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9202</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9302</span>
<span class="token key attr-name">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;127.0.0.1:9300&quot;,&quot;127.0.0.1:9301&quot;,&quot;127.0.0.1:9302&quot;]</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">2</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#gateway.recover_after_nodes: 3</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment">#bootstrap.mlockall: true</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">node6.2.3-1</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token comment">#cluster.initial_master_nodes: node-172.29.130.2</span>

<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">data</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">logs</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>
<span class="token key attr-name">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;127.0.0.1:9300&quot;,&quot;127.0.0.1:9301&quot;,&quot;127.0.0.1:9302&quot;]</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">2</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#gateway.recover_after_nodes: 3</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment">#bootstrap.mlockall: true</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">node6.2.3-2</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token comment">#cluster.initial_master_nodes: node-172.29.130.2</span>

<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">data</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">logs</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9201</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9301</span>
<span class="token key attr-name">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;127.0.0.1:9300&quot;,&quot;127.0.0.1:9301&quot;,&quot;127.0.0.1:9302&quot;]</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">2</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#gateway.recover_after_nodes: 3</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment">#bootstrap.mlockall: true</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写入6g测试数据" tabindex="-1"><a class="header-anchor" href="#写入6g测试数据" aria-hidden="true">#</a> 写入6G测试数据</h3><p>这里采用es官方的压测工具esrally进行写入数据操作，采用的数据是esrally官方提供的geonames数据集。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>esrally <span class="token parameter variable">--pipeline</span><span class="token operator">=</span>benchmark-only --target-hosts<span class="token operator">=</span><span class="token number">127.0</span>.0.1:9200 <span class="token parameter variable">--track</span><span class="token operator">=</span>geonames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里测试默认情况不仅会测试数据写入，还有其他测试，所以可以根据自己情况修改track.json文件，删除不必要的challenge和operations</p><p>写入完成后记录集群信息：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082483325.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082490150.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082495206.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h3 id="搭建es7-4-1的5节点集群" tabindex="-1"><a class="header-anchor" href="#搭建es7-4-1的5节点集群" aria-hidden="true">#</a> 搭建ES7.4.1的5节点集群</h3><p>为了模拟真实的新集群，这里采用1个master，4个data节点的方式进行部署，同时采用docker方式。具体配置如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">master</span><span class="token punctuation">:</span>


<span class="token comment"># 这两个配置都写master节点的ip</span>
<span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;,&quot;172.18.12.6&quot;,&quot;172.18.12.7&quot;,&quot;172.18.12.8&quot;,&quot;172.18.12.9&quot;]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">master_172.18.12.2</span>

<span class="token comment"># 绑定的ip地址</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">172.18.12.2</span>

<span class="token comment"># 集群的名称</span>
<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster-new</span>

<span class="token comment">#node.attr.rack: r1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>

<span class="token comment"># 索引数据的存储路径</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/data</span>

<span class="token comment"># 日志文件的存储路径</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/logs</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
<span class="token comment"># bootstrap.memory_lock: true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># bootstrap.mlockall: true</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启跨域访问</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">data1</span><span class="token punctuation">:</span>


<span class="token comment"># 这两个配置都写master节点的ip</span>
<span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;,&quot;172.18.12.6&quot;,&quot;172.18.12.7&quot;,&quot;172.18.12.8&quot;,&quot;172.18.12.9&quot;]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">datanode_172.18.12.6</span>

<span class="token comment"># 绑定的ip地址</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">172.18.12.6</span>

<span class="token comment"># 集群的名称</span>
<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster-new</span>

<span class="token comment">#node.attr.rack: r1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 索引数据的存储路径</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/data</span>

<span class="token comment"># 日志文件的存储路径</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/logs</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
<span class="token comment"># bootstrap.memory_lock: true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># bootstrap.mlockall: true</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启跨域访问</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>


<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">data2</span><span class="token punctuation">:</span> 


<span class="token comment"># 这两个配置都写master节点的ip</span>
<span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;,&quot;172.18.12.6&quot;,&quot;172.18.12.7&quot;,&quot;172.18.12.8&quot;,&quot;172.18.12.9&quot;]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">datanode_172.18.12.7</span>

<span class="token comment"># 绑定的ip地址</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">172.18.12.7</span>

<span class="token comment"># 集群的名称</span>
<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster-new</span>

<span class="token comment">#node.attr.rack: r1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 索引数据的存储路径</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/data</span>

<span class="token comment"># 日志文件的存储路径</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/logs</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
<span class="token comment"># bootstrap.memory_lock: true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># bootstrap.mlockall: true</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启跨域访问</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">data3</span><span class="token punctuation">:</span> 


<span class="token comment"># 这两个配置都写master节点的ip</span>
<span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;,&quot;172.18.12.6&quot;,&quot;172.18.12.7&quot;,&quot;172.18.12.8&quot;,&quot;172.18.12.9&quot;]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">datanode_172.18.12.8</span>

<span class="token comment"># 绑定的ip地址</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">172.18.12.8</span>

<span class="token comment"># 集群的名称</span>
<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster-new</span>

<span class="token comment">#node.attr.rack: r1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 索引数据的存储路径</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/data</span>

<span class="token comment"># 日志文件的存储路径</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/logs</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
<span class="token comment"># bootstrap.memory_lock: true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># bootstrap.mlockall: true</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启跨域访问</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

<span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span><span class="token punctuation">=</span>

<span class="token key attr-name">data4</span><span class="token punctuation">:</span> 


<span class="token comment"># 这两个配置都写master节点的ip</span>
<span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;172.18.12.2&quot;,&quot;172.18.12.6&quot;,&quot;172.18.12.7&quot;,&quot;172.18.12.8&quot;,&quot;172.18.12.9&quot;]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">datanode_172.18.12.9</span>

<span class="token comment"># 绑定的ip地址</span>
<span class="token key attr-name">network.host</span><span class="token punctuation">:</span> <span class="token value attr-value">172.18.12.9</span>

<span class="token comment"># 集群的名称</span>
<span class="token key attr-name">cluster.name</span><span class="token punctuation">:</span> <span class="token value attr-value">es-cluster-new</span>

<span class="token comment">#node.attr.rack: r1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">false</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 索引数据的存储路径</span>
<span class="token key attr-name">path.data</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/data</span>

<span class="token comment"># 日志文件的存储路径</span>
<span class="token key attr-name">path.logs</span><span class="token punctuation">:</span> <span class="token value attr-value">/opt/es/logs</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
<span class="token comment"># bootstrap.memory_lock: true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
<span class="token key attr-name">http.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
<span class="token key attr-name">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token value attr-value">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># bootstrap.mlockall: true</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">1</span>

<span class="token comment"># 开启跨域访问</span>
<span class="token key attr-name">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token value attr-value">&quot;*&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好了后，可以先启动一下看看是否正常，先不拷贝数据，我这里之前已经测试过了。</p><p>其中一个启动命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-h</span> node172.18.12.7 <span class="token parameter variable">--name</span> node172.18.12.7 <span class="token parameter variable">--network</span><span class="token operator">=</span>mynet <span class="token parameter variable">--ip</span><span class="token operator">=</span><span class="token number">172.18</span>.12.7 <span class="token parameter variable">-v</span> ~/Desktop/es-cluster/node172.18.12.7/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token parameter variable">-v</span> ~/Desktop/es-cluster/node172.18.12.7/es:/opt/es <span class="token parameter variable">-p</span> <span class="token number">32777</span>:9200 elasticsearch:7.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082506340.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h3 id="拷贝物理文件到新集群" tabindex="-1"><a class="header-anchor" href="#拷贝物理文件到新集群" aria-hidden="true">#</a> 拷贝物理文件到新集群</h3><p>把es6.2.3的3节点数据分别拷贝到es7.4.1的3个data节点中。（为了避免cluster.uuid出现不一致，需先将新集群的data数据清空，然后先启动3个data节点，再启动master节点，观察es集群状态</p><p>再启动第4个data节点，观察es数据。然后停掉一个到多个data节点，观察es数据（es会自动重新分配数据的分配情况）</p><p>在启动一个master节点（模拟线上多个master的情况）</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082515110.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,30),d=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),v=n("hr",null,null,-1),k=n("hr",null,null,-1),m=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：世界那么大，我的父母应该去看看。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=8cde65f5-cc31-4ce0-ab7a-3a4f0d9defc0",alt:"",loading:"lazy"})])],-1);function b(h,y){const a=i("RouterLink");return l(),c("div",null,[r,n("ul",null,[n("li",null,[t(a,{to:"/other/getPath%20vs%20getAbsolutePath%20vs%20getCanonicalPath.html"},{default:e(()=>[s("getPath vs getAbsolutePath vs getCanonicalPath")]),_:1})]),n("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"},{default:e(()=>[s("MySQL常用命令")]),_:1})]),n("li",null,[t(a,{to:"/other/CloudFlare%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%AF%81%E4%B9%A6%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:e(()=>[s("CloudFlare 客户端证书的使用")]),_:1})]),n("li",null,[t(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:e(()=>[s("测试两台服务器间的网速")]),_:1})]),n("li",null,[t(a,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:e(()=>[s("乱七八糟的笔记")]),_:1})]),n("li",null,[t(a,{to:"/software/unclassified/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8C%B9%E9%85%8D%E7%AC%AC%E5%87%A0%E4%B8%AA%E7%AC%A6%E5%8F%B7%E9%97%AE%E9%A2%98.html"},{default:e(()=>[s("正则表达式匹配第几个符号问题")]),_:1})]),n("li",null,[t(a,{to:"/software/middleware/mysql/MySQL%E9%94%81%E3%80%81%E4%BA%8B%E5%8A%A1%E3%80%81%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html"},{default:e(()=>[s("MySQL锁、事务、隔离级别")]),_:1})]),n("li",null,[t(a,{to:"/software/shodowsocks/ShadowsockServerUpdatePort.html"},{default:e(()=>[s("ShadowsockServerUpdatePort")]),_:1})]),n("li",null,[t(a,{to:"/software/middleware/mysql/%E5%88%86%E5%BA%93%E5%88%86%E8%A1%A8.html"},{default:e(()=>[s("分库分表")]),_:1})]),n("li",null,[t(a,{to:"/software/middleware/mysql/SQL%E4%BC%98%E5%8C%96.html"},{default:e(()=>[s("SQL优化")]),_:1})]),n("li",null,[t(a,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:e(()=>[s("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),n("li",null,[t(a,{to:"/software/middleware/mq/RocketMQ.html"},{default:e(()=>[s("RocketMQ")]),_:1})])]),d,v,k,m])}const g=p(u,[["render",b],["__file","ES6.2.3(3节点)数据迁移到ES7.4.1(5节点).html.vue"]]);export{g as default};
