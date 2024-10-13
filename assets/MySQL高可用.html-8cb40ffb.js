import{_ as s,$ as d,a0 as h,a1 as l,a2 as e,a3 as t,a4 as a,a5 as i,w as r}from"./framework-16d560c6.js";const u={},c=i('<h2 id="单节点" tabindex="-1"><a class="header-anchor" href="#单节点" aria-hidden="true">#</a> 单节点</h2><ul><li>优点 <ol><li>结构简单，使用方便</li></ol></li><li>缺点 <ol><li>存在单点故障问题</li><li>存在读写性能问题</li><li>大数据量情况存在性能问题</li></ol></li></ul><h2 id="主从架构" tabindex="-1"><a class="header-anchor" href="#主从架构" aria-hidden="true">#</a> 主从架构</h2><ol><li>一主多从（主从架构）</li><li>多主多从（主从架构）</li></ol><p>无论是一主多从还是多主多从，可以分散读写压力，但单个节点仍然是保存的是整个数据库完整的数据，所以不能解决海量数据存储问题</p><ul><li>优点 <ol><li>一定程度上可以分散读写压力问题</li></ol></li><li>缺点 <ol><li>仍然不能解决海量数据存储问题</li><li>可能存在主从数据不一致问题（比如采用异步复制方案）</li><li>可能存在数据丢失问题</li></ol></li></ul><h3 id="主从复制方案" tabindex="-1"><a class="header-anchor" href="#主从复制方案" aria-hidden="true">#</a> 主从复制方案</h3>',7),_=l("li",null,[l("p",null,[l("strong",null,"异步复制")]),l("ol",null,[l("li",null,"存在数据延迟问题"),l("li",null,"主从数据可能丢失，导致数据不一致")]),l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-1efd3893046fbfdab9a1ceee17d792e1.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")])],-1),f=l("p",null,[l("strong",null,"半同步复制")],-1),p=l("ol",null,[l("li",null,"相比异步复制，减少了数据丢失的概率，但仍有可能出现（因为如果从库长时间没有返回ack，就会采用异步复制方案）"),l("li",null,"一定程度上解决了数据延迟问题"),l("li",null,"可以配合MHA实现mysql高可用")],-1),m=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-e47f94a245016c73ab5d9eae6575a174.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),E={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html",target:"_blank",rel:"noopener noreferrer"},B=l("p",null,[l("strong",null,"组复制（MGR）")],-1),b=l("ol",null,[l("li",null,"组内节点采用paxos共识算法通信"),l("li",null,"节点间数据强一致性"),l("li",null,"有两种模式：单主模式、多主模式"),l("li",null,"是一种高可用方案"),l("li",null,"至少3个节点（paxos算法决定）")],-1),g=l("figure",null,[l("img",{src:"https://cdn.justdopay.com/notion/md5-b5f529e88bddd2faf25caa5bf2274d69.png",alt:"Untitled",tabindex:"0",loading:"lazy"}),l("figcaption",null,"Untitled")],-1),y={href:"https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},k=l("h2",{id:"高可用架构",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#高可用架构","aria-hidden":"true"},"#"),e(" 高可用架构")],-1),x=l("li",null,"MMM （Google开发，社区不活跃，不再维护，基本不用了）",-1),M=l("li",null,"MHA + 半同步复制（还是比较成熟，但也有3、4年没有更新MHA了）",-1),w=l("li",null,"MGR （推荐mysql8.0及以上版本使用）",-1),S=l("li",null,"K8S+MGR",-1),D=l("li",null,"MySQL NDB Cluster (NDB: network database)",-1),z={href:"https://dev.mysql.com/doc/refman/8.0/en/mysql-innodb-cluster-introduction.html",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zhuanlan.zhihu.com/p/567939774",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.jiagou.com/post/45-k8s-mysql-mgr/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://helm.sh/zh/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://xie.infoq.cn/article/ac136ed04796a3cab18db6686",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tech.meituan.com/2017/06/29/database-availability-architecture.html",target:"_blank",rel:"noopener noreferrer"},G=i('<h2 id="数据分片-高可用" tabindex="-1"><a class="header-anchor" href="#数据分片-高可用" aria-hidden="true">#</a> 数据分片+高可用</h2><h2 id="异地备份" tabindex="-1"><a class="header-anchor" href="#异地备份" aria-hidden="true">#</a> 异地备份</h2><h2 id="异地多活" tabindex="-1"><a class="header-anchor" href="#异地多活" aria-hidden="true">#</a> 异地多活</h2><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',5),j=l("p",null,[l("br"),l("br"),l("br"),l("br"),l("br"),l("br")],-1),I=l("hr",null,null,-1),C=l("hr",null,null,-1),Q=l("ul",null,[l("li",null,[l("strong",null,"随机毒鸡汤"),e("：有人说我帅，我站在阳台上想了一个晚上，究竟是谁走漏的风声。 "),l("br"),l("br"),l("img",{src:"https://tuapi.eees.cc/api.php?category=fengjing&type=302&uuid=d18570c4-8b9b-4265-b8f4-c643a9716e9b",alt:"",loading:"lazy"})])],-1);function U(F,V){const o=r("ExternalLinkIcon"),n=r("RouterLink");return d(),h("div",null,[c,l("ol",null,[_,l("li",null,[f,p,m,l("p",null,[e("扩展阅读："),l("a",E,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-primary-secondary-replication.html"),t(o)])])]),l("li",null,[B,b,g,l("p",null,[e("扩展阅读："),l("a",y,[e("https://dev.mysql.com/doc/refman/8.0/en/group-replication-summary.html"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",A,[e("https://zhuanlan.zhihu.com/p/567939774"),t(o)])])])]),k,l("ol",null,[x,M,w,S,D,l("li",null,[l("a",z,[e("MySQL InnoDB Cluster"),t(o)])])]),l("p",null,[e("扩展阅读："),l("a",R,[e("MySQL 8.0.30，一个值得上车MGR的版本"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",q,[e("k8s安装MySQL MGR集群"),t(o)])]),l("p",null,[e("扩展阅读："),l("a",L,[e("https://helm.sh/zh/"),t(o)]),e(" （k8s应用市场）")]),l("p",null,[e("扩展阅读："),l("a",N,[e("RadonDB"),t(o)]),e(" （最后更新时间：2022-08-25）")]),l("p",null,[e("扩展阅读："),l("a",v,[e("美团数据库高可用架构的演进与设想"),t(o)])]),G,l("ul",null,[l("li",null,[t(n,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:a(()=>[e("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/NGINX.html"},{default:a(()=>[e("NGINX")]),_:1})]),l("li",null,[t(n,{to:"/other/%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8%E5%85%B3%E7%B3%BB%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html"},{default:a(()=>[e("微博关注关系如何实现")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/Markdown%20Mermaid%E7%94%BB%E5%9B%BE%E5%AE%9E%E4%BE%8B.html"},{default:a(()=>[e("Markdown Mermaid画图实例")]),_:1})]),l("li",null,[t(n,{to:"/other/Spring%20RetryTemplate.html"},{default:a(()=>[e("Spring RetryTemplate")]),_:1})]),l("li",null,[t(n,{to:"/other/Redis%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:a(()=>[e("Redis高可用")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:a(()=>[e("index方法压力测试记录")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/mysql/InnoDB%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.html"},{default:a(()=>[e("InnoDB存储引擎")]),_:1})]),l("li",null,[t(n,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:a(()=>[e("ES杂项")]),_:1})]),l("li",null,[t(n,{to:"/software/raft/sofajraft.html"},{default:a(()=>[e("sofajraft")]),_:1})]),l("li",null,[t(n,{to:"/software/docker/Docker%E8%B7%A8%E4%B8%BB%E6%9C%BA%E9%80%9A%E4%BF%A1%E6%96%B9%E6%A1%88.html"},{default:a(()=>[e("Docker跨主机通信方案")]),_:1})]),l("li",null,[t(n,{to:"/software/unclassified/%E6%9D%82%E8%AE%B0.html"},{default:a(()=>[e("杂记")]),_:1})])]),j,I,C,Q])}const T=s(u,[["render",U],["__file","MySQL高可用.html.vue"]]);export{T as default};
