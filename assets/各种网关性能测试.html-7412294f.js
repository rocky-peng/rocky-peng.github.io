import{_ as e,$ as l,a0 as r,a1 as a,a2 as n,a4 as t,a3 as i,w as c}from"./framework-6dd3436e.js";const d={},p={href:"https://github.com/spencergibb/spring-cloud-gateway-bench",target:"_blank",rel:"noopener noreferrer"},o=i(`<br><table><thead><tr><th>Proxy</th><th>Avg Latency</th><th>Avg Req/Sec/Thread</th></tr></thead><tbody><tr><td>gateway</td><td>6.61ms</td><td>3.24k</td></tr><tr><td>linkered</td><td>7.62ms</td><td>2.82k</td></tr><tr><td>zuul</td><td>12.56ms</td><td>2.09k</td></tr><tr><td>none</td><td>2.09ms</td><td>11.77k</td></tr></tbody></table><h2 id="terminal-1-simple-webserver" tabindex="-1"><a class="header-anchor" href="#terminal-1-simple-webserver" aria-hidden="true">#</a> Terminal 1 (simple webserver)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> static
./webserver <span class="token comment"># or ./webserver.darwin-amd64 on a mac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terminal-2-zuul" tabindex="-1"><a class="header-anchor" href="#terminal-2-zuul" aria-hidden="true">#</a> Terminal 2 (zuul)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> zuul
./mvnw clean package
<span class="token function">java</span> <span class="token parameter variable">-jar</span> target/zuul-0.0.1-SNAPSHOT.jar 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terminal-3-gateway" tabindex="-1"><a class="header-anchor" href="#terminal-3-gateway" aria-hidden="true">#</a> Terminal 3 (gateway)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> gateway
./mvnw clean package
<span class="token function">java</span> <span class="token parameter variable">-jar</span> target/gateway-0.0.1-SNAPSHOT.jar 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terminal-4-linkerd" tabindex="-1"><a class="header-anchor" href="#terminal-4-linkerd" aria-hidden="true">#</a> Terminal 4 (linkerd)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> linkerd
<span class="token function">java</span> <span class="token parameter variable">-jar</span> linkerd-1.3.4.jar linkerd.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terminal-n-wrk" tabindex="-1"><a class="header-anchor" href="#terminal-n-wrk" aria-hidden="true">#</a> Terminal N (wrk)</h2><h3 id="install-wrk" tabindex="-1"><a class="header-anchor" href="#install-wrk" aria-hidden="true">#</a> install <code>wrk</code></h3><p>Ubuntu: <code>sudo apt install wrk</code></p><p>Mac: <code>brew install wrk</code></p><p>NOTE: run each one multiple times to warm up jvm</p><h3 id="gateway-bench-8082" tabindex="-1"><a class="header-anchor" href="#gateway-bench-8082" aria-hidden="true">#</a> Gateway bench (8082)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ wrk <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> <span class="token parameter variable">-d</span> 30s http://localhost:8082/hello.txt
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:8082/hello.txt
  <span class="token number">10</span> threads and <span class="token number">200</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     <span class="token number">6</span>.61ms    <span class="token number">4</span>.71ms  <span class="token number">49</span>.59ms   <span class="token number">69.36</span>%
    Req/Sec     <span class="token number">3</span>.24k   <span class="token number">278.42</span>     <span class="token number">9</span>.02k    <span class="token number">75.89</span>%
  <span class="token number">969489</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.10s, <span class="token number">175</span>.67MB <span class="token builtin class-name">read</span>
Requests/sec:  <span class="token number">32213.38</span>
Transfer/sec:      <span class="token number">5</span>.84MB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zuul-bench-8081" tabindex="-1"><a class="header-anchor" href="#zuul-bench-8081" aria-hidden="true">#</a> zuul bench (8081)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~% wrk <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> <span class="token parameter variable">-d</span> 30s http://localhost:8081/hello.txt
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:8081/hello.txt
  <span class="token number">10</span> threads and <span class="token number">200</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    <span class="token number">12</span>.56ms   <span class="token number">13</span>.35ms <span class="token number">195</span>.11ms   <span class="token number">86.33</span>%
    Req/Sec     <span class="token number">2</span>.09k   <span class="token number">215.10</span>     <span class="token number">4</span>.28k    <span class="token number">71.81</span>%
  <span class="token number">625781</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.09s, <span class="token number">123</span>.05MB <span class="token builtin class-name">read</span>
Requests/sec:  <span class="token number">20800.13</span>
Transfer/sec:      <span class="token number">4</span>.09MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkerd-bench-4140" tabindex="-1"><a class="header-anchor" href="#linkerd-bench-4140" aria-hidden="true">#</a> linkerd bench (4140)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~% wrk <span class="token parameter variable">-H</span> <span class="token string">&quot;Host: web&quot;</span> <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> <span class="token parameter variable">-d</span> 30s http://localhost:4140/hello.txt
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:4140/hello.txt
  <span class="token number">10</span> threads and <span class="token number">200</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     <span class="token number">7</span>.62ms    <span class="token number">5</span>.45ms  <span class="token number">53</span>.51ms   <span class="token number">69.82</span>%
    Req/Sec     <span class="token number">2</span>.82k   <span class="token number">184.58</span>     <span class="token number">4</span>.11k    <span class="token number">72.17</span>%
  <span class="token number">843418</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.07s, <span class="token number">186</span>.61MB <span class="token builtin class-name">read</span>
Requests/sec:  <span class="token number">28050.76</span>
Transfer/sec:      <span class="token number">6</span>.21MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="no-proxy-bench-8000" tabindex="-1"><a class="header-anchor" href="#no-proxy-bench-8000" aria-hidden="true">#</a> no proxy bench (8000)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~% wrk <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token number">200</span> <span class="token parameter variable">-d</span> 30s http://localhost:8000/hello.txt
Running 30s <span class="token builtin class-name">test</span> @ http://localhost:8000/hello.txt
  <span class="token number">10</span> threads and <span class="token number">200</span> connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     <span class="token number">2</span>.09ms    <span class="token number">2</span>.07ms  <span class="token number">28</span>.37ms   <span class="token number">85.89</span>%
    Req/Sec    <span class="token number">11</span>.77k     <span class="token number">2</span>.07k   <span class="token number">45</span>.46k    <span class="token number">70.97</span>%
  <span class="token number">3516807</span> requests <span class="token keyword">in</span> <span class="token number">30</span>.10s, <span class="token number">637</span>.24MB <span class="token builtin class-name">read</span>
Requests/sec: <span class="token number">116841.15</span>
Transfer/sec:     <span class="token number">21</span>.17MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="简单总结" tabindex="-1"><a class="header-anchor" href="#简单总结" aria-hidden="true">#</a> 简单总结</h2><ol><li><p>多种网关中Nginx的性能无疑是最好的，无论是淘宝的Tengine的功能增强，还是OpenResty的模块增强，都是对Nginx优化。不过从定位来说，我比较倾向于把它定位为传统的只是承载请求转发的工具，对于我们开发的技术栈没那么友好。另外，OpenResty有一个lua-resty-mysql模块，可做mysql的网关，我们没用过，不知道性能如何。</p></li><li><p>zuul和gateway，都是可以无缝对接spring cloud，结合服务发现，对服务层来说可以做到屏蔽机器资源（ip或内外网域名等），服务对机器无依赖性。它们的定位是融合在微服务的网关，承载着对微服务增强的功能。对于二次开发的易用性来说，两者对我们开发上手都比较容易。</p></li><li><p>zuul和gateway对比，根据测试情况，gateway的性能还是比zuul好很多的。另外，gateway的也有很多zuul没有的功能，比如支持http2、websocket，根据域名转发等。对于做服务转发，而不是数据库转发这种高性能要求，性能上和Nginx差距不大。</p></li><li><p>linkerd则是服务网格的概念了，linkerd的原理是系统代理请求，对服务是无侵入性的，有比较成熟的监控管理界面。gateway的官方测试是，gateway性能比linkerd好很多，但是在我的虚拟机上测试，两者差不多。linkerd结合docker和k8s使用，对机器资源的抽象就更上一层。linkerd更像是应用程序或者说微服务间的 TCP/IP，网络监控、限流、熔断对服务层来说是透明无感的。</p></li></ol><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：人生没有跨不过去的坎，因为如果跨不过去，你的人生就没了。 <br><br><img src="https://tuapi.eees.cc/api.php?category=dongman&amp;type=302&amp;uuid=6d3e6fcb-e28c-4a1f-94a5-8de9cadffcf4" alt="" loading="lazy"></li></ul>`,30);function u(b,m){const s=c("ExternalLinkIcon");return l(),r("div",null,[a("blockquote",null,[a("p",null,[n("注意：以下测试结果来源于Spring Cloud Gateway作者，具体参考："),a("a",p,[n("https://github.com/spencergibb/spring-cloud-gateway-bench"),t(s)])])]),o])}const v=e(d,[["render",u],["__file","各种网关性能测试.html.vue"]]);export{v as default};
