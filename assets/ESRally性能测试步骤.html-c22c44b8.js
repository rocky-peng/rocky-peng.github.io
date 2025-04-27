import{_ as o,$ as c,a0 as u,a1 as n,a2 as s,a3 as a,a4 as t,a5 as l,w as i}from"./framework-8c4427da.js";const r={},d=l(`<h2 id="es7-4-1搭建" tabindex="-1"><a class="header-anchor" href="#es7-4-1搭建" aria-hidden="true">#</a> ES7.4.1搭建</h2><p>ES统一采用7.4.1版本</p><h3 id="es的docker镜像部署" tabindex="-1"><a class="header-anchor" href="#es的docker镜像部署" aria-hidden="true">#</a> ES的Docker镜像部署</h3><p>Docker的安装这里不再赘述</p><h4 id="单节点部署" tabindex="-1"><a class="header-anchor" href="#单节点部署" aria-hidden="true">#</a> 单节点部署</h4><ul><li><p>vi docker-compose-es-single-node.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">es-single-node</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">container_name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>single<span class="token punctuation">-</span>node
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> node.name=es<span class="token punctuation">-</span>single<span class="token punctuation">-</span>node
	  <span class="token punctuation">-</span> cluster.name=es<span class="token punctuation">-</span>cluster
	  <span class="token punctuation">-</span> cluster.initial_master_nodes=es<span class="token punctuation">-</span>single<span class="token punctuation">-</span>node
	  <span class="token punctuation">-</span> discovery.seed_hosts=es<span class="token punctuation">-</span>single<span class="token punctuation">-</span>node
	  <span class="token punctuation">-</span> discovery.zen.minimum_master_nodes=1
	  <span class="token punctuation">-</span> node.master=true
	  <span class="token punctuation">-</span> node.data=true
	  <span class="token punctuation">-</span> http.port=9200
	  <span class="token punctuation">-</span> transport.tcp.port=9300
	  <span class="token punctuation">-</span> http.cors.enabled=true
	  <span class="token punctuation">-</span> http.cors.allow<span class="token punctuation">-</span>origin=&quot;<span class="token important">*&quot;</span>
	  <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms128m -Xmx128m&quot;</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 9210<span class="token punctuation">:</span><span class="token number">9200</span>
	  <span class="token punctuation">-</span> 9310<span class="token punctuation">:</span><span class="token number">9300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker-compose -f docker-compose-es-single-node.yml up -d (这个步骤也可以用docker的界面管理工具portainer完成)</p></li></ul><h4 id="多节点部署" tabindex="-1"><a class="header-anchor" href="#多节点部署" aria-hidden="true">#</a> 多节点部署</h4><p>这里演示2个master2个data节点的配置，增加删除节点依葫芦画瓢即可</p><ul><li><p>vi docker-compose-2master2data.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">master01</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">container_name</span><span class="token punctuation">:</span> master01
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> node.name=master01
	  <span class="token punctuation">-</span> cluster.name=es<span class="token punctuation">-</span>cluster
	  <span class="token punctuation">-</span> cluster.initial_master_nodes=master01<span class="token punctuation">,</span>master02
	  <span class="token punctuation">-</span> discovery.seed_hosts=master01<span class="token punctuation">,</span>master02<span class="token punctuation">,</span>data01<span class="token punctuation">,</span>data02
	  <span class="token punctuation">-</span> discovery.zen.minimum_master_nodes=2
	  <span class="token punctuation">-</span> node.master=true
	  <span class="token punctuation">-</span> node.data=false
	  <span class="token punctuation">-</span> http.port=9200
	  <span class="token punctuation">-</span> transport.tcp.port=9300
	  <span class="token punctuation">-</span> http.cors.enabled=true
	  <span class="token punctuation">-</span> http.cors.allow<span class="token punctuation">-</span>origin=&quot;<span class="token important">*&quot;</span>
	  <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms128m -Xmx128m&quot;</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
	  <span class="token punctuation">-</span> 9300<span class="token punctuation">:</span><span class="token number">9300</span>
  <span class="token key atrule">master02</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">container_name</span><span class="token punctuation">:</span> master02
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> node.name=master02
	  <span class="token punctuation">-</span> cluster.name=es<span class="token punctuation">-</span>cluster
	  <span class="token punctuation">-</span> cluster.initial_master_nodes=master01<span class="token punctuation">,</span>master02
	  <span class="token punctuation">-</span> discovery.seed_hosts=master01<span class="token punctuation">,</span>master02<span class="token punctuation">,</span>data01<span class="token punctuation">,</span>data02
	  <span class="token punctuation">-</span> discovery.zen.minimum_master_nodes=2
	  <span class="token punctuation">-</span> node.master=true
	  <span class="token punctuation">-</span> node.data=false
	  <span class="token punctuation">-</span> http.port=9200
	  <span class="token punctuation">-</span> transport.tcp.port=9300
	  <span class="token punctuation">-</span> http.cors.enabled=true
	  <span class="token punctuation">-</span> http.cors.allow<span class="token punctuation">-</span>origin=&quot;<span class="token important">*&quot;</span>
	  <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms128m -Xmx128m&quot;</span>
	<span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
	  <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
		<span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
		<span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 9201<span class="token punctuation">:</span><span class="token number">9200</span>
	  <span class="token punctuation">-</span> 9301<span class="token punctuation">:</span><span class="token number">9300</span>
  <span class="token key atrule">data01</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">container_name</span><span class="token punctuation">:</span> data01
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> node.name=data01
	  <span class="token punctuation">-</span> cluster.name=es<span class="token punctuation">-</span>cluster
	  <span class="token punctuation">-</span> cluster.initial_master_nodes=master01<span class="token punctuation">,</span>master02
	  <span class="token punctuation">-</span> discovery.seed_hosts=master01<span class="token punctuation">,</span>master02<span class="token punctuation">,</span>data01<span class="token punctuation">,</span>data02
	  <span class="token punctuation">-</span> discovery.zen.minimum_master_nodes=2
	  <span class="token punctuation">-</span> node.master=false
	  <span class="token punctuation">-</span> node.data=true
	  <span class="token punctuation">-</span> http.port=9200
	  <span class="token punctuation">-</span> transport.tcp.port=9300
	  <span class="token punctuation">-</span> http.cors.enabled=true
	  <span class="token punctuation">-</span> http.cors.allow<span class="token punctuation">-</span>origin=&quot;<span class="token important">*&quot;</span>
	  <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms128m -Xmx128m&quot;</span>
	<span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
	  <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
		<span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
		<span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 9202<span class="token punctuation">:</span><span class="token number">9200</span>
	  <span class="token punctuation">-</span> 9302<span class="token punctuation">:</span><span class="token number">9300</span>
  <span class="token key atrule">data02</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> elasticsearch<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">container_name</span><span class="token punctuation">:</span> data02
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> node.name=data02
	  <span class="token punctuation">-</span> cluster.name=es<span class="token punctuation">-</span>cluster
	  <span class="token punctuation">-</span> cluster.initial_master_nodes=master01<span class="token punctuation">,</span>master02
	  <span class="token punctuation">-</span> discovery.seed_hosts=master01<span class="token punctuation">,</span>master02<span class="token punctuation">,</span>data01<span class="token punctuation">,</span>data02
	  <span class="token punctuation">-</span> discovery.zen.minimum_master_nodes=2
	  <span class="token punctuation">-</span> node.master=false
	  <span class="token punctuation">-</span> node.data=true
	  <span class="token punctuation">-</span> http.port=9200
	  <span class="token punctuation">-</span> transport.tcp.port=9300
	  <span class="token punctuation">-</span> http.cors.enabled=true
	  <span class="token punctuation">-</span> http.cors.allow<span class="token punctuation">-</span>origin=&quot;<span class="token important">*&quot;</span>
	  <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms128m -Xmx128m&quot;</span>
	<span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
	  <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
		<span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
		<span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 9203<span class="token punctuation">:</span><span class="token number">9200</span>
	  <span class="token punctuation">-</span> 9303<span class="token punctuation">:</span><span class="token number">9300</span>
  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
	<span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>7.4.1
	<span class="token key atrule">environment</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> ELASTICSEARCH_HOSTS=<span class="token punctuation">[</span><span class="token string">&quot;http://master01:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://master02:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://data01:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://data02:9200&quot;</span><span class="token punctuation">]</span>
	<span class="token key atrule">ports</span><span class="token punctuation">:</span>
	  <span class="token punctuation">-</span> 5601<span class="token punctuation">:</span><span class="token number">5601</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker-compose -f docker-compose-2master2data.yml up -d</p></li></ul><h3 id="centos部署" tabindex="-1"><a class="header-anchor" href="#centos部署" aria-hidden="true">#</a> Centos部署</h3><h4 id="单节点部署-1" tabindex="-1"><a class="header-anchor" href="#单节点部署-1" aria-hidden="true">#</a> 单节点部署</h4><ol><li>下载es7.4.1安装文件到服务器并解压到 /usr/share/elasticsearch 目录，然后已root用户执行：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft nofile 125536&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard nofile 125536&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft nproc 8096&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard nproc 8096&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft memlock unlimited&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard memlock unlimited&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf

<span class="token builtin class-name">echo</span> <span class="token string">&quot;vm.max_map_count=522144&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>

adduser elastic
<span class="token function">chown</span> <span class="token parameter variable">-R</span> elastic:elastic /usr/share/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>修改elasticsearch.yml，可参考下面的配置<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这两个配置都写master节点的ip</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.55&quot;</span><span class="token punctuation">]</span>
discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;192.168.1.55&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 节点名称,其余两个节点分别为node-ip</span>
<span class="token comment"># 节点名称以node-开头，以当前节点IP结尾</span>
node.name: master192.168.1.55

discovery.zen.minimum_master_nodes: <span class="token number">1</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
node.master: <span class="token boolean">true</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
node.data: <span class="token boolean">true</span>

<span class="token comment"># 绑定的ip地址</span>
network.host: <span class="token number">0.0</span>.0.0

<span class="token comment"># 集群的名称</span>
cluster.name: xxxxx-dssa

<span class="token comment"># 索引数据的存储路径</span>
path.data: data

<span class="token comment"># 日志文件的存储路径</span>
path.logs: logs

<span class="token comment"># 快照仓库路径</span>
path.repo: <span class="token punctuation">[</span><span class="token string">&quot;/opt/xxxxx/backups/es_repo&quot;</span>,<span class="token string">&quot;/opt/xxxxx/backups/rsyslog-audit&quot;</span>,<span class="token string">&quot;/opt/xxxxx/backups/rsyslog-firewall&quot;</span>,<span class="token string">&quot;/opt/xxxxx/backups/rsyslog-desens&quot;</span>,<span class="token string">&quot;/opt/xxxxx/backups/rsyslog-encrypt&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 正式部署需要设置为true来锁住内存。因为内存交换到磁盘对服务器性能来说是致命的，当jvm开始swapping时es的效率会降低，所以要保证它不swap</span>
bootstrap.memory_lock: <span class="token boolean">true</span>

<span class="token comment"># 设置对外服务的http端口，默认为9200</span>
http.port: <span class="token number">9200</span>

<span class="token comment"># 设置节点间交互的tcp端口,默认是9300</span>
transport.tcp.port: <span class="token number">9300</span>

<span class="token comment"># 如果没有足够大的内存，因为了elasticsearch引用文件，系统内存会大量用于系统cache（linux的内存管理机制）。</span>
<span class="token comment"># 由于系统cache释放缓慢，而导致这个过程非常长，这有可能使你的节点GC非常频繁，从而导致集群不稳定。</span>
<span class="token comment"># 建议把bootstrap.mlockall设为true</span>
<span class="token comment"># 这个参数在7.4.1无效</span>
<span class="token comment"># bootstrap.mlockall: true</span>

<span class="token comment"># 开启跨域访问</span>
http.cors.enabled: <span class="token boolean">true</span>
http.cors.allow-origin: <span class="token string">&quot;*&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>修改jvm.options，一般把Xms Xmx内存配置为可用内存的一半</li><li>尝试启动观察日志看看有没有问题<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> elastic
<span class="token builtin class-name">cd</span> /usr/share/elasticsearch
bin/elasticsearch    前台执行
bin/elasticsearch    后台执行,需要到配置的日志目录去看日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>开机启动 <ul><li>vi /usr/lib/systemd/system/elasticsearch.service 输入如下内容:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>elasticsearch <span class="token function">service</span>

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>elastic
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/share/elasticsearch/bin/elasticsearch

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>systemctl enable elasticsearch （开机启动）</li><li>systemctl restart elasticsearch (重启es)</li></ul></li></ol><h4 id="多节点部署-1" tabindex="-1"><a class="header-anchor" href="#多节点部署-1" aria-hidden="true">#</a> 多节点部署</h4><p>多节点部署和单节点部署几乎一模一样，只需要根据自身要搭建的集群节点规划修改下配置文件即可</p><p>一般修改如下几个配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;master01&quot;,&quot;master02&quot;]</span>
<span class="token key attr-name">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token value attr-value">[&quot;master01&quot;,&quot;master02&quot;,&quot;data01&quot;,&quot;data02&quot;]</span>

<span class="token key attr-name">node.name</span><span class="token punctuation">:</span> <span class="token value attr-value">节点的名字</span>

<span class="token comment"># 计算公式是这样的: master候选节点的个数/2 + 1，设置不恰当可能存在脑裂问题</span>
<span class="token key attr-name">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span> <span class="token value attr-value">2</span>

<span class="token comment"># 指定该节点是否有资格被选举成为master节点，默认是true，es是默认集群中的第一台机器为master，如果这台机挂了就会重新选举master</span>
<span class="token key attr-name">node.master</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>

<span class="token comment"># 允许该节点存储数据(默认开启)</span>
<span class="token key attr-name">node.data</span><span class="token punctuation">:</span> <span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="esrally" tabindex="-1"><a class="header-anchor" href="#esrally" aria-hidden="true">#</a> ESRally</h2>`,17),v={href:"https://esrally.readthedocs.io/en/stable/quickstart.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="esrally安装" tabindex="-1"><a class="header-anchor" href="#esrally安装" aria-hidden="true">#</a> esrally安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>直接拉取docker镜像即可：

1. 修改host文件，添加如下配置
172.16.1.201 prod.docker
172.16.1.201 dev.docker

2. 修改docker配置文件，增加如下配置：
 { &quot;insecure-registries&quot;: [&quot;prod.docker:8085&quot;, &quot;dev.docker:8085&quot;] }

3. 拉取docker esrally镜像
docker pull dev.docker:8085/elastic/rally:2.0.0

4. 执行测试
docker run --rm -i -v /opt/esrally:/opt/esrally dev.docker:8085/elastic/rally:2.0.0  --pipeline=benchmark-only --track-path=/opt/esrally --target-hosts=192.168.1.55:9200

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629084459843.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h3 id="准备es的索引模板" tabindex="-1"><a class="header-anchor" href="#准备es的索引模板" aria-hidden="true">#</a> 准备es的索引模板</h3><p>在 tfs 中已经准备了几个我们生产环境使用的es索引模板，可根据自身情况自行修改</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629363123202.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><p>由于索引模板是yml格式的，需要转换为json格式：通过修改index.sh中的相关参数并执行index.sh即可完成json转换。</p><p>index.sh完成了两个动作（可根据自身情况自行删除）： - yml转换为json - 连接es创建索引</p><h3 id="准备测试数据" tabindex="-1"><a class="header-anchor" href="#准备测试数据" aria-hidden="true">#</a> 准备测试数据</h3><p>在tfs中也已经准备好了生成测试数据的工具</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629363176507.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><p>只需要修改eslog_generator.sh中的三个参数即可根据索引模板生产测试数据</p><h3 id="编辑track-json文件" tabindex="-1"><a class="header-anchor" href="#编辑track-json文件" aria-hidden="true">#</a> 编辑track.json文件</h3><p>这个文件是esrally需要使用的，可参考：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx logs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;indices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx_audit_bigdata&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;corpora&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http_logs&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;documents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;source-file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx_audit_bigdata1200w.json.bz2&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;document-count&quot;</span><span class="token operator">:</span> <span class="token number">12000000</span><span class="token punctuation">,</span>
					<span class="token property">&quot;uncompressed-bytes&quot;</span><span class="token operator">:</span> <span class="token number">30760</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;challenges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index-test&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;schedule&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            	
              	<span class="token punctuation">{</span>
                    <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;putdata_bulk&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;operation-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bulk&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;bulk-size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;operation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;operation-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629363008361.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h3 id="执行" tabindex="-1"><a class="header-anchor" href="#执行" aria-hidden="true">#</a> 执行</h3><p>track.json文件和生成的数据文件要放在同一个目录，假设为 /opt/esrally/track，则执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>esrally race <span class="token parameter variable">--pipeline</span><span class="token operator">=</span>benchmark-only --track-path<span class="token operator">=</span>/opt/esrally/track --target-hosts<span class="token operator">=</span>esip:9200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完成会有下面的一个结果输出</p><figure><img src="https://cdn.justdopay.top/xiaoshujiang/1629084523817.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,23),k=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),b=n("hr",null,null,-1),h=n("hr",null,null,-1),g=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：书总有人替你背，题总有人替你做，你喜欢的学校总有人替你去。 "),n("br"),n("br"),n("img",{src:"https://images.pexels.com/photos/31723348/pexels-photo-31723348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",alt:"Sleek coffee bean grinder viewed from above, shot indoors in Tokyo, Japan.",loading:"lazy"})])],-1);function y(q,_){const p=i("ExternalLinkIcon"),e=i("RouterLink");return c(),u("div",null,[d,n("p",null,[s("esrally是es官方提供的对es进行性能测试的工具 官网："),n("a",v,[s("https://esrally.readthedocs.io/en/stable/quickstart.html"),a(p)])]),m,n("ul",null,[n("li",null,[a(e,{to:"/other/%E5%85%8D%E8%B4%B9https%E8%AF%81%E4%B9%A6%E3%80%81%E8%87%AA%E5%8A%A8%E7%BB%AD%E6%9C%9F.html"},{default:t(()=>[s("免费https证书、自动续期")]),_:1})]),n("li",null,[a(e,{to:"/software/unclassified/Cordova+Umi%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[s("Cordova+Umi项目搭建步骤")]),_:1})]),n("li",null,[a(e,{to:"/other/Notion%E7%AC%94%E8%AE%B0%E5%AE%9A%E6%97%B6%E5%A4%87%E4%BB%BD.html"},{default:t(()=>[s("Notion笔记定时备份")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[s("MySQL杂项")]),_:1})]),n("li",null,[a(e,{to:"/other/%E9%9A%8F%E8%AE%B0.html"},{default:t(()=>[s("随记")]),_:1})]),n("li",null,[a(e,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:t(()=>[s("Redis高可用")]),_:1})]),n("li",null,[a(e,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[s("异地多活")]),_:1})]),n("li",null,[a(e,{to:"/software/shodowsocks/ShadowsockServer%E9%85%8D%E7%BD%AE.html"},{default:t(()=>[s("ShadowsockServer配置")]),_:1})]),n("li",null,[a(e,{to:"/software/raft/sofajraft.html"},{default:t(()=>[s("sofajraft")]),_:1})]),n("li",null,[a(e,{to:"/other/Mermaid%E7%A4%BA%E4%BE%8B.html"},{default:t(()=>[s("Mermaid示例")]),_:1})]),n("li",null,[a(e,{to:"/other/CentOS7%E4%B8%8BDocker%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84%E5%90%8E%E9%98%B2%E7%81%AB%E5%A2%99%E5%A4%B1%E6%95%88.html"},{default:t(()=>[s("CentOS7下Docker端口映射后防火墙失效")]),_:1})]),n("li",null,[a(e,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:t(()=>[s("Linux dev shm目录")]),_:1})])]),k,b,h,g])}const f=o(r,[["render",y],["__file","ESRally性能测试步骤.html.vue"]]);export{f as default};
