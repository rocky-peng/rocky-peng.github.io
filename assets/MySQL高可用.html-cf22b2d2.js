import{_ as s,$ as d,a0 as h,a1 as l,a2 as e,a3 as t,a4 as o,a5 as i,w as r}from"./framework-58787b1c.js";const c={},u=i('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),E=l("p",null,[l("strong",null,"半同步复制")],-1),p=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),f=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),m={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},B=l("p",null,[l("strong",null,"组复制（MGR）")],-1),b=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),A=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),g={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},M=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),k=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),w=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),x=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),C=l("li",null,"K8S+MGR",-1),D=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),F={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},q={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},R=i('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),V=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),Q=l("hr",null,null,-1),j=l("hr",null,null,-1),G=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：这个夏天这么热，要是没有你的冷暴力，我该怎么活下去啊。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7c50bdc1-8a4c-47fd-88f7-12b0afabcb6c",alt:"",loading:"lazy"})])],-1);function J(N,U){const a=r("ExternalLinkIcon"),n=r("RouterLink");return d(),h("div",null,[u,l("ol",null,[_,l("li",null,[E,p,f,l("p",null,[e("扩展阅读："),l("a",m,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(a)])])]),l("li",null,[B,b,A,l("p",null,[e("扩展阅读："),l("a",g,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",y,[e("https://zhuanlan.zhihu.com/p/567939774"),t(a)])])])]),M,l("ol",null,[k,w,x,C,D,l("li",null,[l("a",F,[e("MySQL InnoDB Cluster"),t(a)])])]),l("p",null,[e("扩展阅读："),l("a",S,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",v,[e("k8s安装MySQL MGR集群"),t(a)])]),l("p",null,[e("扩展阅读："),l("a",z,[e("https://helm.sh/zh/"),t(a)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",L,[e("RadonDB"),t(a)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",q,[e("美团数据库高可用架构的演进与设想"),t(a)])]),R,l("ul",null,[l("li",null,[t(n,{to:"/other/%E6%9D%A5%E4%B8%AAJVM%E5%86%B7%E7%9F%A5%E8%AF%86.html"},{default:o(()=>[e("来个JVM冷知识")]),_:1})]),l("li",null,[t(n,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[e("弱引用示例")]),_:1})]),l("li",null,[t(n,{to:"/software/spring/Spring%20Cloud%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B2%BB%E7%90%86%E6%8A%80%E6%9C%AF%E6%A6%82%E8%A7%88%E3%80%90Finchley%20%E7%89%88%E3%80%91.html"},{default:o(()=>[e("Spring Cloud（一）：服务治理技术概览【Finchley 版】")]),_:1})]),l("li",null,[t(n,{to:"/software/jvm/JDK%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7.html"},{default:o(()=>[e("JDK命令行工具")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/KVM%E6%96%B9%E5%BC%8F%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2ES.html"},{default:o(()=>[e("KVM方式集群部署ES")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:o(()=>[e("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[t(n,{to:"/software/shodowsocks/ShadowsockServer.html"},{default:o(()=>[e("ShadowsockServer")]),_:1})]),l("li",null,[t(n,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[e("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Markdown%E8%BD%AF%E4%BB%B6%E6%AF%94%E5%AF%B9.html"},{default:o(()=>[e("Markdown软件比对")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mq/RocketMQ.html"},{default:o(()=>[e("RocketMQ")]),_:1})]),l("li",null,[t(n,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:o(()=>[e("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})]),l("li",null,[t(n,{to:"/other/Linux%20dev%20shm%E7%9B%AE%E5%BD%95.html"},{default:o(()=>[e("Linux dev shm目录")]),_:1})])]),V,Q,j,G])}const H=s(c,[["render",J],["__file","MySQL高可用.html.vue"]]);export{H as default};
