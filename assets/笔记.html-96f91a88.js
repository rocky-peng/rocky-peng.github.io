import{_ as o,$ as p,a0 as l,a1 as n,a2 as a,a4 as t,a3 as e,w as u}from"./framework-6dd3436e.js";const c={},r=e(`<h3 id="禁止调试的方法" tabindex="-1"><a class="header-anchor" href="#禁止调试的方法" aria-hidden="true">#</a> 禁止调试的方法：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 这个js用来判断是否开起了调试面板（可先执行 npm install devtools-detector -g ，然后把相关代码拷贝到某个地方进行引用。)
// github: https://github.com/AepKill/devtools-detector 
&lt;script src=&quot;/node_modules/devtools-detector/lib/devtools-detector.js&quot;&gt;&lt;/script&gt;


// 自定义开起调试面板后的动作，下面的代码效果是：当检测到开起调试面板后，把网页的html清空，然后死循环，结果会导致cpu和风扇狂转
&lt;script&gt;
  var a = false;
  devtoolsDetector.addListener(function(isOpen) {
       a = isOpen;
       if(isOpen){
            document.body.innerHTML = &quot;出问题了&quot;;
            setTimeout(function(){ 
                while(a){
                    document.body.innerHTML = &quot;出问题了&quot;;
                } 
            }, 1500);
       }
  });
  devtoolsDetector.launch();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可解析官网链接的地址" tabindex="-1"><a class="header-anchor" href="#可解析官网链接的地址" aria-hidden="true">#</a> 可解析官网链接的地址</h3>`,3),i={href:"https://www.1717yun.com/jx/ty.php?url=",target:"_blank",rel:"noopener noreferrer"},k={href:"https://jx.yaohuaxuan.com/?url=",target:"_blank",rel:"noopener noreferrer"},d={href:"https://jsap.attakids.com/?url=",target:"_blank",rel:"noopener noreferrer"},m={href:"http://t2.kiss688.com:887/Li4.php?url=",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"反倒链方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#反倒链方法","aria-hidden":"true"},"#"),a(" 反倒链方法")],-1),q={href:"http://www.a.com",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.b.com",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//生成iframe的base64编码，建议加上 rel=&quot;noreferrer&quot; 属性
function iframeBase64() {
    var iframeHtml = &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+MacPlayer.Parse + MacPlayer.PlayUrl+&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">marginwidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">marginheight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>allowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mozallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mozallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">webkitallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webkitallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noreferrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>&#39;;
    return window.btoa(iframeHtml);
}

var iframeBase64 = &#39;data:text/html;base64,&#39; + iframeBase64();

//这个iframe是放到A网页中的，这个iframe的src是一个base64,base64的内容又是一个iframe。建议加上 rel=&quot;noreferrer&quot; 属性
MacPlayer.Html = &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>+iframeBase64+&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">marginwidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">marginheight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>allowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mozallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mozallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">webkitallowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webkitallowfullscreen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>noreferrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>&#39;;
MacPlayer.Show();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br><br><br></p><hr><hr><ul><li><strong>随机毒鸡汤</strong>：我的未来是个梦，但遗憾的是，我TM失眠了。 <br><br><img src="https://api.btstu.cn/sjbz/?m_lx=suiji&amp;uuid=1e2bcda4-f119-4496-9e5d-48ed20beb1ac" alt="" loading="lazy"></li></ul>`,5);function f(w,g){const s=u("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[n("a",i,[a("https://www.1717yun.com/jx/ty.php?url="),t(s)]),a(" 这个也可以 "),n("a",k,[a("https://jx.yaohuaxuan.com/?url="),t(s)]),a(" 这个可以 "),n("a",d,[a("https://jsap.attakids.com/?url="),t(s)]),a(" 这个可以 "),n("a",m,[a("http://t2.kiss688.com:887/Li4.php?url="),t(s)]),a(" 这个也可以")]),v,n("p",null,[a("原理：就是消除请求中的 referer 头部信息 方法：iframe+base64 场景：A: "),n("a",q,[a("http://www.a.com"),t(s)]),a(" ，B: "),n("a",b,[a("http://www.b.com"),t(s)]),a(" ，在a网页引用了b网页，这个是就会触发b网页的倒链机制，导致b不能正常访问。 但是直接在浏览器访问b网页又可以。 具体步骤：看代码")]),h])}const x=o(c,[["render",f],["__file","笔记.html.vue"]]);export{x as default};
