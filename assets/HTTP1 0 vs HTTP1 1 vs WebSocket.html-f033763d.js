import{_ as E,$ as r,a0 as i,a1 as e,a3 as a,a4 as o,a5 as s,a2 as t,w as h}from"./framework-58787b1c.js";const c={},n=s('<h2 id="http1-0" tabindex="-1"><a class="header-anchor" href="#http1-0" aria-hidden="true">#</a> http1.0</h2><ol><li>一问一答（客户端问，服务端答）</li><li>一次连接只能完成一次一问一答</li><li>短连接</li></ol><h2 id="http1-1" tabindex="-1"><a class="header-anchor" href="#http1-1" aria-hidden="true">#</a> http1.1</h2><ol><li>一问一答（客户端问，服务端答）</li><li>一次连接可以实现多次问答</li><li>长连接</li></ol><h2 id="http1-0-vs-http1-1" tabindex="-1"><a class="header-anchor" href="#http1-0-vs-http1-1" aria-hidden="true">#</a> http1.0 vs http1.1</h2><p>两个最大区别就是一个短连接，一个长连接 短连接就是一次tcp连接只能完成一次问答 长连接就是一次tcp连接可以完成多次问答</p><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> websocket</h2><ol><li>非问答模式，服务端可以主动发送消息</li><li>属于长连接</li></ol><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>',10),d=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),B=e("hr",null,null,-1),u=e("hr",null,null,-1),_=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),t("：一起比惨，痛苦减半。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=b173e071-2e25-4471-a147-054bce008c38",alt:"",loading:"lazy"})])],-1);function A(f,p){const l=h("RouterLink");return r(),i("div",null,[n,e("ul",null,[e("li",null,[a(l,{to:"/software/java-basic/synchronized%E5%8E%9F%E7%90%86%E6%B7%B1%E5%BA%A6%E5%89%96%E6%9E%90.html"},{default:o(()=>[t("synchronized原理深度剖析")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/es/ES6.2.3(3%E8%8A%82%E7%82%B9)%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB%E5%88%B0ES7.4.1(5%E8%8A%82%E7%82%B9).html"},{default:o(()=>[t("ES6.2.3(3节点)数据迁移到ES7.4.1(5节点)")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E5%BC%B1%E5%BC%95%E7%94%A8%E7%A4%BA%E4%BE%8B.html"},{default:o(()=>[t("弱引用示例")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/%E4%B9%B1%E4%B8%83%E5%85%AB%E7%B3%9F%E7%9A%84%E7%AC%94%E8%AE%B0.html"},{default:o(()=>[t("乱七八糟的笔记")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/Thread%20&%20ExecutorService%20&%20ThreadPoolExecutor%20%E6%80%BB%E8%A7%88.html"},{default:o(()=>[t("Thread & ExecutorService & ThreadPoolExecutor 总览")]),_:1})]),e("li",null,[a(l,{to:"/software/maccms/MAC%20CMS.html"},{default:o(()=>[t("MAC CMS")]),_:1})]),e("li",null,[a(l,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:o(()=>[t("数据同步方案")]),_:1})]),e("li",null,[a(l,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:o(()=>[t("linux_no_space_left_on_device")]),_:1})]),e("li",null,[a(l,{to:"/software/middleware/es/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8Edocker%E7%9A%84elk%E5%B9%B3%E5%8F%B0%E6%9D%A5%E5%88%86%E6%9E%90java%E6%97%A5%E5%BF%97.html"},{default:o(()=>[t("搭建基于docker的elk平台来分析java日志")]),_:1})]),e("li",null,[a(l,{to:"/software/java-basic/%E4%B8%8D%E9%87%8D%E5%90%AF%20JVM%EF%BC%8C%E5%A6%82%E4%BD%95%E6%9B%BF%E6%8D%A2%E6%8E%89%E5%B7%B2%E7%BB%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E7%B1%BB%EF%BC%9F.html"},{default:o(()=>[t("不重启 JVM，如何替换掉已经加载的类？")]),_:1})]),e("li",null,[a(l,{to:"/other/Lombok%E7%9A%84Accessors%E5%AF%BC%E8%87%B4EasyExcel%E8%AF%BB%E5%8F%96%E5%A4%B1%E8%B4%A5.html"},{default:o(()=>[t("Lombok的Accessors导致EasyExcel读取失败")]),_:1})]),e("li",null,[a(l,{to:"/other/PostgreSQL%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:o(()=>[t("PostgreSQL高可用")]),_:1})])]),d,B,u,_])}const m=E(c,[["render",A],["__file","HTTP1 0 vs HTTP1 1 vs WebSocket.html.vue"]]);export{m as default};
