import{_ as o,$ as e,a0 as n,a1 as i,a2 as a,a4 as r,a3 as l,w as d}from"./framework-24d1f903.js";const c={},p=l('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><p>分析：</p><ol><li>由于单节点，读写均在一个节点上进行，读写压力可能比较大</li><li>存在单点故障问题，一旦出现问题，整个服务都不用</li><li>存储的数据量也会成为一个瓶颈</li></ol><p>优点：</p><ol><li>结构简单，已部署，已维护，客户端使用起来也方便</li></ol><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><figure><img src="https://cdn.justdopay.com/notion/md5-7ab18e5340f9abb9d632acaa29767ddc.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>特点：</p><ol><li>写数据只能在master上进行</li><li>slave之间互相不能感知</li></ol><p>分析：</p><ol><li>存在主从必定存在数据复制的过程，那么逃不了要面临数据同步延迟问题，也就是数据不一致问题</li><li>如果master宕机后正好数据同步不及时，那么数据就会丢失</li><li>由于slave之间不能互相感知，并且又没有另外的类似监控角色存在，所以一旦master宕机，是没办法自动故障转移的，必须人为参与，那么SLA（就是指几个9，或者可用性）必定大打折扣</li></ol><p>从MongoDB 3.6 开始已经彻底废弃不使用了</p><h2 id="副本集架构" tabindex="-1"><a class="header-anchor" href="#副本集架构" aria-hidden="true">#</a> 副本集架构</h2><ol><li>有三种角色：Primary，Secondary，Arbiter（可选），下面可能会描述为主节点（Primary）、从节点（Secondary）</li><li>Arbiter不储存数据，只负责投票，并且是可选配置</li><li>Primary节点有且仅有一个</li><li>在某些特定场合（比如网络出现分区），Primary节点可能出现多个，但通常只有最新的primary节点能正常响应写请求</li><li>Primary会把对数据的所有改动都记录在oplog日志中</li><li>从节点会同步primary节点的oplog，然后根据oplog进行重放，从而保持与Primary数据同步</li><li>如果某个时候Primary节点不可用，那么从节点会发起选举要求自己成为主节点</li><li>在某个情况下（比如成本限制）没有条件部署多余的从节点，此时可以选择部署一个Arbiter，Arbiter只复制选举，不负责数据存储。通过这样的方式既能节约成本，又能保证高可用。比如注意观察下面的图</li><li>当主节点生产oplog的速率大于从节点复制oplog的速率，那么数据延迟会逐渐增长。当超过一个阈值后，主节点会开启流量控制。</li><li>主节点流量控制：一言蔽之就是主节点会限制应用写入数据的速度。如何限制呢？ 当主节点开启流控后，应用写入数据前需先请求一个票据（可以理解为token），主节点通过限制票据的生产速度来达到流控的目的</li><li>当从节点与主节点断开联系超过一定的时间，那么符合条件的从节点会发起选举要求自己成为主节点</li><li>副本集群在选主过程中，是不能对外提供写服务的（这是一种不可用的表现），但保留了提供读服务的能力。（用不用取决于客户端，客户端可以配置在主节点脱机时是否在从节点上执行）</li><li>默认情况下，客户端的读操作由主节点完成。但客户端可以通过配置从而让从节点来完成读操作</li><li>下面的图全部来自于mongodb官网</li><li></li></ol><figure><img src="https://cdn.justdopay.com/notion/md5-79738901ccb86d2bf9f2dc15c4d50bc0.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-6aafe4968edf1bd7b5a71787a70913a2.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-f432036a4148ea95e5863f4eb23fa333.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-98caa44cd14c49a05cc9b6c13d261132.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><figure><img src="https://cdn.justdopay.com/notion/md5-d0250def39e583c4b260257040ad55d7.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p>本质也是主从架构，只是增加了第三个角色：仲裁者（Arbiter），然后更换了角色名以及职责</p>',20),s={href:"https://www.mongodb.com/docs/manual/replication/",target:"_blank",rel:"noopener noreferrer"},g=l('<p>特点：</p><ol><li>primary节点负责读写请求的处理（客户端可以指定把读请求交给副本节点完成）</li><li>整个集群中，各个节点之间有心跳信息，也就是说从节点间能互相感知</li><li>primary节点宕机后，会从seondary节点中选择一个作为新的primay节点对外提供服务</li><li>arbiter节点不存储数据，只进行选主投票</li></ol><p>分析：</p><ol><li>通过增加仲裁者的角色以及节点间互相感知的功能，可以做到故障自动转移</li><li>仍然存在数据不一致或丢失的问题</li></ol><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：别羡慕他们，他们也会分的。 <br><br><img src="https://api.btstu.cn/sjbz/?m_lx=suiji&amp;uuid=068ffa26-ba76-4dce-b765-c94678443053" alt="" loading="lazy"></li></ul>',8);function m(f,b){const t=d("ExternalLinkIcon");return e(),n("div",null,[p,i("p",null,[a("扩展阅读："),i("a",s,[a("https://www.mongodb.com/docs/manual/replication/"),r(t)])]),g])}const u=o(c,[["render",m],["__file","MongoDB高可用.html.vue"]]);export{u as default};
