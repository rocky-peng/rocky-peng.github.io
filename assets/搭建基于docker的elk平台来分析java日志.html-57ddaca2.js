import{_ as r,$ as u,a0 as o,a1 as e,a2 as i,a3 as n,a4 as l,a5 as d,w as a}from"./framework-58787b1c.js";const v={},c=d(`<h2 id="整体思路" tabindex="-1"><a class="header-anchor" href="#整体思路" aria-hidden="true">#</a> 整体思路</h2><ol><li>使用已有的elk docker镜像sebp/elk快速搭建elk平台</li><li>sebp/elk镜像中包括了elk三个服务。</li><li>在日志所在机子使用filebeat把日志传输给elk的logstash（logstash处理日志后把日志传输给es，然后kibana基于es分析数据）</li></ol><h2 id="关键问题" tabindex="-1"><a class="header-anchor" href="#关键问题" aria-hidden="true">#</a> 关键问题</h2><p>为了充分利用kibana的功能 ，要求存储在es中的数据需要json化。 那么问题来了，日志流入es的过程是：公司系统---&gt;日志文件---&gt;filebeat---&gt;logstash---&gt;es。</p><p>公司采用的日志系统是java的logback ，pattern定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%date %level [%thread] %logger{10} [%file:%line] %msg%n%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之所以后面两个换行，本意是想通过空白行来区分哪些日志是属于同一个日志事件</p><h3 id="问题如下" tabindex="-1"><a class="header-anchor" href="#问题如下" aria-hidden="true">#</a> 问题如下</h3><ol><li>这个pattern表面上是有格式的，但不属于json格式。</li><li>%msg输出的内容格式不可控，虽然公司有些日志是统一打印的，这部分拥有固定的一个格式，但还是存在部分格式不可控的日志。</li><li>异常堆栈信息默认情况下不会包含在%msg中，于是类似：log.error(&quot;业务异常&quot;,exception) 这样的语句，打印出来的日志会是这样的：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%date %level [%thread] %logger{10} [%file:%line] %msg

java的异常堆栈信息：
	at .....
	at .....
	at ....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面存在一个空白行，于是我们想要通过空白行来区分同一个日志事件的想法泡汤了。</p><h3 id="日志json化解决思路" tabindex="-1"><a class="header-anchor" href="#日志json化解决思路" aria-hidden="true">#</a> 日志json化解决思路</h3><p>根据日志的流入过程：公司系统---&gt;日志文件---&gt;filebeat---&gt;logstash---&gt;es。</p><p>我们可以在上面的任何一个环节或多个环节做文章来达到流入es的日志的json格式的目的。</p><h3 id="方案一-配置filebeat和logstash" tabindex="-1"><a class="header-anchor" href="#方案一-配置filebeat和logstash" aria-hidden="true">#</a> 方案一：配置filebeat和logstash</h3><p>不更改公司系统代码，保留原来的日志格式。在filebeat和logstash中做处理，来解决多行日志属于一个日志事件和json化的问题。</p><p>这个方案优缺点很明显： 优点：不用更改现有的代码 缺点：需要研究如何通过filebeat或者logstash来准确的区分哪些日志行是属于同一个日志的问题。区分出同一个日志事件的日志内容后，需要研究如何把日志json化。</p><p>我刚开始就是采用的这个方案，研究后得知</p><ol><li>通过配置filebeat的multiline配置，可以把多行日志纳入到一个日志事件。</li><li>通过配置logstash的filter中的grok表达式，可以把日志内容json化。</li></ol><p>于是去研究multiline如何配置，然后做实验，发现这个配置比较难理解。然后本身日志存在这样的问题：如果打印日志的时候，没有打印堆栈，则可以通过空白行来分区同一个日志内容。如果打印日志的时候打印了错误堆栈，则同一个日志事件中还会存在一个空白行。（原因在上面分析过了）还要命的是如果先后执行这样的日志打印语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log.error(&quot;error&quot;,exception);

log.info(&quot;info&quot;);

log.error(&quot;error2&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么打印出来的日志会是这样的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error

excepiton:xxxx
	at ......
	at .....
	at .......
	at ......
info

error2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，如果以空白行区分，不但会把原本属于同一个日志事件的日志分开，还会把不属于同一个日志事件的日志误认为属于同一个日志事件。</p><p>当然这个问题也可以解决，后来折腾半天发现为啥子要以空白行分割嘛，直接把分区日志事件的逻辑改为：已日期开头的日志属于新的一个日志，就完美解决这个问题了。（给自己有个白眼🙄）</p>`,25),m={href:"http://grokdebug.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://grok.elasticsearch.cn/",target:"_blank",rel:"noopener noreferrer"},g=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2018-12-21 16:00:54,774 INFO c.l.c.w.l.AccessLog [AuthAndAccessLogAop.java:191] {&quot;request&quot;:{&quot;headers&quot;:{&quot;Accept&quot;:&quot;*/*&quot;,&quot;Connection&quot;:&quot;close&quot;,&quot;User-Agent&quot;:&quot;Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)&quot;,&quot;Accept-Language&quot;:&quot;zh-cn&quot;},&quot;params&quot;:{},&quot;uri&quot;:&quot;/api/test/echo&quot;,&quot;method&quot;:&quot;GET&quot;,&quot;time&quot;:&quot;2018-12-21 16:00:54&quot;},&quot;response&quot;:{&quot;msg&quot;:&quot;success&quot;,&quot;data&quot;:[1,2,3]},&quot;checkTokenTime&quot;:0,&quot;controllerTime&quot;:2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在pattern中输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>((?&lt;datetime&gt;\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2},\\d{3}) (?&lt;level&gt;.{3,5}) (?&lt;logger&gt;.*) \\[(?&lt;file&gt;.*\\.java):(?&lt;linenum&gt;.*)\\] )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后会输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;datetime&quot;: [
    [
      &quot;2018-12-21 16:00:54,774&quot;
    ]
  ],
  &quot;level&quot;: [
    [
      &quot;INFO&quot;
    ]
  ],
  &quot;logger&quot;: [
    [
      &quot;c.l.c.w.l.AccessLog&quot;
    ]
  ],
  &quot;file&quot;: [
    [
      &quot;AuthAndAccessLogAop.java&quot;
    ]
  ],
  &quot;linenum&quot;: [
    [
      &quot;191&quot;
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子，大家应该可以很快根据输入写出自己的grok表达式。</p><p>问你题来了： 如果输入是有固定的格式，那么很容易通过grok表达式把日志json化，但是现在的情况是<strong>日志格式不统一</strong> （哭~~~）。</p><p>当然可以通过想办法把日志按照格式分类，或者统一日志格式，然后处理。但是这个办法需要需要在日志源头处改动，不满足本方案的要求。</p><p>于是鉴于公司的情况，本方案我折腾了大半天宣告失败。</p><h3 id="方案二-从日志源头处改动" tabindex="-1"><a class="header-anchor" href="#方案二-从日志源头处改动" aria-hidden="true">#</a> 方案二：从日志源头处改动</h3><p>既然选择从日志源头处改动了，那么索性直接在源头处将日志json化。不要再filebeat和logstash处做过多额外的配置。要不然绑定的太多因素，不方便控制。 这个方案的优缺点也很明显： 缺点： 1. 需要改动原系统的代码或者配置。 2. 改动后的日志阅读习惯会发送小心的改变，应为json化了嘛。 3. 已经生成的日志照顾不了 优点： 1. 改动灵活，想怎么改就怎么改， 2. 不需要额外学习filebeat和logstash的太多配置。比如multiline和grok表达式。</p><p>问题也来了：<strong>如何把java日志json化？</strong></p><p>这里直接给出我的解决方案，在这套方案前，尝试过好多种方法，最终这个方案最满意，改动也小，甚至不需要改动原来的代码，只需要对logback的配置做更改。</p><p>原来logback的patternn:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%date %level [%thread] %logger{10} [%file:%line] %msg%n%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在logback的pattern:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ &quot;date&quot;:&quot;%date&quot;, &quot;level&quot;:&quot;%level&quot;, &quot;logger&quot;:&quot;%logger{10}&quot;, &quot;file_line&quot;:&quot;%file:%line&quot;, &quot;msg&quot;:%msgext, &quot;exception&quot;:%ex }%n%n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实改动很小是不是😂，的确改动很小。之前在上家公司的时候，一个运维的同事问我可不可以打印json格式的日志，我当时想了想回答：这个怎么打呀？估计不行，比如那个异常堆栈，这个怎么搞？</p><p>现在想想，就这么简单，当时咋没想到改动pattern呀😂。</p><p>但是问题还是来了：新的pattern里有两个新的东西：<strong>%msgext</strong> 和 <strong>%ex</strong></p><p>大概能猜到分别干嘛的： %msgext ：替换了原来的 %msg ，用来处理我们打印的内容（非异常信息） %ex : 用来处理异常堆栈信息</p><p>这两个东西在哪里告诉logback呢，这这里：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;configuration&gt;
    &lt;conversionRule conversionWord=&quot;ex&quot; converterClass=&quot;com.xxxx.StackTraceConverter&quot; /&gt;
    &lt;conversionRule conversionWord=&quot;msgext&quot; converterClass=&quot;com.xxxx.MsgConverter&quot; /&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要在logback配置文件的configuration节点中加上这两个配置就可以了。 这是两个java类，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class StackTraceConverter extends ThrowableProxyConverter {
    public StackTraceConverter() {
    }

    @Override
    public String convert(ILoggingEvent event) {
		//拿到异常信息
        IThrowableProxy tp = event.getThrowableProxy();
		
		//如果没有异信息
        if (tp == null) {
			//返回字符串  ： &quot;\\&quot;\\&quot;&quot;
            return JsonUtils.serialize(&quot;&quot;);
        }
		//如果有异常信息
        String ex = super.convert(event);
		
		//json化
        return JsonUtils.serialize(ex);
    }
}

public class MsgConverter extends ClassicConverter {
    public MsgConverter() {
    }

    @Override
    public String convert(ILoggingEvent event) {
        String msg = event.getFormattedMessage();

        try {
            JsonUtils.deserialize(msg, Map.class);
            return msg;
        } catch (Exception e) {
            Map&lt;String,String&gt; map = new HashMap&lt;&gt;(1);
            map.put(&quot;value&quot;,msg);
            return JsonUtils.serialize(map);
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面用到的JsonUtils是我们自己封装了下json工具，可以替换为任何json工具类。</p><p>这样一做了调整后，打印出来的日志就是json了。有几个注意的地方：扩展的这两个convert最好都返回json格式的数据，至于为什么我也讲不明白，只是经验而谈。也许有些问题我遇到了其他人未必会遇到😜。</p><p>从源头上对日志进行了json化后，还有一个问题了：filebeat拿到一行日志后，给logstash，如果不做处理，logstash只会把这行日志当作普通文本，并不会当作json处理呀~</p><p>于是搜索： logstash 解析 json 数据。很快速得知答案：在filter里做如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter {

  json {
    source =&gt; &quot;message&quot;
    #target =&gt; &quot;doc&quot;
	
	# message字段保留的就是整个json数据，如果把下面的语句生效，则流入es的数据中，没有message这个字段。具体效果可以自行做实验
    #remove_field =&gt; [&quot;message&quot;]
  }

  # 这里是在处理日期时间，因为日志本身有时间，然后logstash会自行生成一个时间字段：@timestamp ，显然应该以日志里的时间为准。所以有如下配置：替换@timestamp字段的值为日志本身的时间。
  date {
    match =&gt; [&quot;date&quot;,&quot;yyyy-MM-dd HH:mm:ss,SSS&quot;]
    target =&gt; &quot;@timestamp&quot;
    locale =&gt; &quot;cn&quot;
    timezone =&gt; &quot;Asia/Chongqing&quot;
  }        
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此，方案二结束。接下来我们来安装elk实施日志分析。</p><h2 id="在centos7上安装docker" tabindex="-1"><a class="header-anchor" href="#在centos7上安装docker" aria-hidden="true">#</a> 在centos7上安装docker</h2>`,32),p={href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"},q=d(`<p>也可执行以下步骤：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>移除旧版本：
sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-selinux \\
                  docker-engine-selinux \\
                  docker-engine
				 
安装必要的工具：
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

添加软件源：
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

更新 yum 缓存：
sudo yum makecache fast

安装 Docker-ce：
sudo yum -y install docker-ce

国内配置镜像：
vim /etc/docker/daemon.json （这个文件也许不存在，新建一个即可）
把下面的镜像复制到daemon.json文件中
{
  &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}

启动 Docker 后台服务：
sudo systemctl start docker

测试运行 hello-world：
docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现类似下面的提示，恭喜你安装成功 <img src="https://cdn.justdopay.com/xiaoshujiang/1629081554944.jpg" alt="enter description here" loading="lazy"></p><h2 id="安装elk" tabindex="-1"><a class="header-anchor" href="#安装elk" aria-hidden="true">#</a> 安装elk</h2><p>拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull sebp/elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建es数据存放目录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /var/data/elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>已sebp/elk镜像启动容器，并命名为：myelk</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 5044:5044 -p 5601:5601 -p 9200:9200 -p 9300:9300 -v /var/data/elk:/var/lib/elasticsearch --name=myelk sebp/elk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>myelk中会启动三个服务：</p><ol><li>logstash，占用5044端口</li><li>kibana，占用5601端口</li><li>es，占用9200和9300端口。</li></ol><p>为了保留es数据，做了一个文件映射 执行后，可以看到如下反馈：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629081570160.jpg" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><p>这里附加几个docker的用法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看容器的标准输出：
docker attach --sig-proxy=false myelk

停止容器：
docker stop myelk

启动容器：
docker start myelk

查看运行中的容器：
docker ps

进入容器命令行：
docker exec -it myelk /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入容器命令行，然后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /etc/logstash/conf.d/

vim 02-beats-input.conf    # 注释掉ssl ，这个根据情况选择，我这里选择不启用ssl

vim myfilter.conf 
输入如下内容并保持

filter {
  json {
    source =&gt; &quot;message&quot;
    #target =&gt; &quot;doc&quot;
	
	# message字段保留的就是整个json数据，如果把下面的语句生效，则流入es的数据中，没有message这个字段。具体效果可以自行做实验
    #remove_field =&gt; [&quot;message&quot;]
  }

  # 这里是在处理日期时间，因为日志本身有时间，然后logstash会自行生成一个时间字段：@timestamp ，显然应该以日志里的时间为准。所以有如下配置：替换@timestamp字段的值为日志本身的时间。
  date {
    match =&gt; [&quot;date&quot;,&quot;yyyy-MM-dd HH:mm:ss,SSS&quot;]
    target =&gt; &quot;@timestamp&quot;
    locale =&gt; &quot;cn&quot;
    timezone =&gt; &quot;Asia/Chongqing&quot;
  }        
}

重启logstash：
service logstash restart
如果提示stop fail，则再试一次。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单独测试logstash" tabindex="-1"><a class="header-anchor" href="#单独测试logstash" aria-hidden="true">#</a> 单独测试logstash</h3><p>启动关闭命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动：service logstash restart 
关闭：service logstash stop 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入容器，先执行：
service logstash stop 

保证logstash已经停止

cd /opt/logstash

vim test-logstash.conf
输入以下内容：

input {
  stdin {}
}

filter {
  json {
    source =&gt; &quot;message&quot;
    #target =&gt; &quot;doc&quot;
    #remove_field =&gt; [&quot;message&quot;]
  }

  date {
    match =&gt; [&quot;date&quot;,&quot;yyyy-MM-dd HH:mm:ss,SSS&quot;]
    target =&gt; &quot;@timestamp&quot;
    locale =&gt; &quot;cn&quot;
    timezone =&gt; &quot;Asia/Chongqing&quot;
  }        

}

output {
  stdout {}
}

保存，然后执行：

bin/logstash -f test-logstash.conf

等待一会，直到看到如下字样：

The stdin plugin is now waiting for input:
[2018-12-29T07:57:25,159][INFO ][logstash.pipeline        ] Pipeline started successfully {:pipeline_id=&gt;&quot;main&quot;, :thread=&gt;&quot;#&lt;Thread:0x2d752f07 run&gt;&quot;}
[2018-12-29T07:57:25,210][INFO ][logstash.agent           ] Pipelines running {:count=&gt;1, :running_pipelines=&gt;[:main], :non_running_pipelines=&gt;[]}
[2018-12-29T07:57:25,458][INFO ][logstash.agent           ] Successfully started Logstash API endpoint {:port=&gt;9600}

然后直接在命令行输入一个json字符串，比如这里输入：

{ &quot;date&quot;:&quot;2018-12-28 18:54:04,052&quot;, &quot;level&quot;:&quot;INFO&quot;, &quot;logger&quot;:&quot;c.l.s.l.c.u.GeTuiPushUtils&quot;, &quot;file_line&quot;:&quot;GeTuiPushUtils.java:54&quot;, &quot;msg&quot;:{&quot;value&quot;:&quot;初始化个推服务成功&quot;}, &quot;exception&quot;:&quot;&quot; }

然后会输出一个字符串，大致如下：

{
    &quot;msg&quot; =&gt; { &quot;value&quot; =&gt; &quot;初始化个推服务成功&quot; },
    &quot;host&quot; =&gt; &quot;d6e142cd797d&quot;,
    &quot;level&quot; =&gt; &quot;INFO&quot;,
    &quot;exception&quot; =&gt; &quot;&quot;,
    &quot;file_line&quot; =&gt; &quot;GeTuiPushUtils.java:54&quot;,
    &quot;logger&quot; =&gt; &quot;c.l.s.l.c.u.GeTuiPushUtils&quot;,
    &quot;message&quot; =&gt; &quot;{ \\&quot;date\\&quot;:\\&quot;2018-12-28 18:54:04,052\\&quot;, \\&quot;level\\&quot;:\\&quot;INFO\\&quot;, \\&quot;logger\\&quot;:\\&quot;c.l.s.l.c.u.GeTuiPushUtils\\&quot;, \\&quot;file_line\\&quot;:\\&quot;GeTuiPushUtils.java:54\\&quot;, \\&quot;msg\\&quot;:{\\&quot;value\\&quot;:\\&quot;初始化个推服务成功\\&quot;}, \\&quot;exception\\&quot;:\\&quot;\\&quot; }&quot;,
    &quot;@version&quot; =&gt; &quot;1&quot;,
    &quot;@timestamp&quot; =&gt; 2018-12-28T10:54:04.052Z,
    &quot;date&quot; =&gt; &quot;2018-12-28 18:54:04,052&quot;
}

如果是这样的，说明配置成功。然后按住  ctrl + c 停止测试。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实到此应该就可以结束了。这里多贴一个配置，需求是：需要分环境（测试环境，生产环境）建立不同的es index。 这里直接贴上配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim 30-output.conf

output {
  if &quot;ljd-test-log&quot; in [tags] {
    elasticsearch {
      hosts =&gt; [&quot;localhost&quot;]
      manage_template =&gt; false
      index =&gt; &quot;ljd-test-log-%{+YYYY.MM.dd}&quot;
      document_type =&gt; &quot;%{[@metadata][type]}&quot;
    }
  }	
  else if &quot;ljd-prod-log&quot; in [tags] {
    elasticsearch {
      hosts =&gt; [&quot;localhost&quot;]
      manage_template =&gt; false
      index =&gt; &quot;ljd-prod-log-%{+YYYY.MM.dd}&quot;
      document_type =&gt; &quot;%{[@metadata][type]}&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此，elk服务准备好了，下一步使用filebeat搜集日志。</p><h2 id="安装filebeat" tabindex="-1"><a class="header-anchor" href="#安装filebeat" aria-hidden="true">#</a> 安装filebeat</h2><p>下面需要在日志所在的机子上安装filebeat。</p>`,27),h={href:"https://www.elastic.co/guide/en/beats/filebeat/5.4/filebeat-installation.html",target:"_blank",rel:"noopener noreferrer"},x=d(`<p>因为这里是centos 7系统，我的安装步骤是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-5.4.3-x86_64.rpm

sudo rpm -vi filebeat-5.4.3-x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好后，默认的配置文件目录为：/etc/filebeat <img src="https://cdn.justdopay.com/xiaoshujiang/1629081582950.jpg" alt="enter description here" loading="lazy"></p><p>配置文件为 filebeat.yml ，我这里做了一个备份。把原来的 filebeat.yml重命名为了filebeat.yml.bak.</p><p>然后新建了一个filebeat.yml，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filebeat:
  prospectors:
    -
      paths:
        - /var/log/laijiandu-test/*.log
      tags: [&quot;test-log&quot;]
      input_type: log
      document_type: test-log
      scan_frequency: 2s
      harvester_buffer_size: 16384
      max_bytes: 10485760
  registry_file: /var/log/registry
output:
  logstash:
    hosts: [&quot;logstashserverip:5044&quot;]
    worker: 1
    bulk_max_size: 2048
    compression_level: 3
    index: filebeat
shipper:
logging:
  files:
    rotateeverybytes: 10485760

注意：上面配置中的tags需要和logstash中的对应起来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://www.elastic.co/guide/en/beats/filebeat/5.4/filebeat-starting.html",target:"_blank",rel:"noopener noreferrer"},k=d(`<p>我这里执行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动：
sudo /etc/init.d/filebeat start 

停止：
sudo /etc/init.d/filebeat stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上步骤搞定后，就可以爽歪歪的使用 kibana了。</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629081592042.jpg" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,6),_=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),E=e("hr",null,null,-1),y=e("hr",null,null,-1),j=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),i("：白天嘈杂得不愿意醒，夜晚安静得舍不得睡。 "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=7dfc6dda-feb9-483e-b925-6663256f09ac",alt:"",loading:"lazy"})])],-1);function A(w,B){const t=a("ExternalLinkIcon"),s=a("RouterLink");return u(),o("div",null,[c,e("p",null,[i("这样更改后，通过filebeat的multiline解决了日志分割的问题。 下面需要解决日志json化的问题：关键点：grok表达式。 这个表达式的学习完全没有必要从头开始学或者系统的学习，我完全是依葫芦画瓢学习的。这里举一个非常简单的例子体验一下： 网址："),e("a",m,[i("http://grokdebug.herokuapp.com/"),n(t)]),i(" 或者 "),e("a",b,[i("http://grok.elasticsearch.cn/"),n(t)]),i(" 在input输入：")]),g,e("p",null,[i("可参照官网安装步骤："),e("a",p,[i("https://docs.docker.com/install/linux/docker-ce/centos/"),n(t)])]),q,e("p",null,[i("安装方法可以参照官网： "),e("a",h,[i("https://www.elastic.co/guide/en/beats/filebeat/5.4/filebeat-installation.html"),n(t)])]),x,e("p",null,[i("启动filebeat: 不同系统的启动方法有所不同，具体可以参照官网： "),e("a",f,[i("https://www.elastic.co/guide/en/beats/filebeat/5.4/filebeat-starting.html"),n(t)])]),k,e("ul",null,[e("li",null,[n(s,{to:"/software/unclassified/%E8%AE%B0%E4%B8%80%E6%AC%A1%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F.html"},{default:l(()=>[i("记一次内存泄漏")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/Git%E7%AC%94%E8%AE%B0.html"},{default:l(()=>[i("Git笔记")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/KVM%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%89%E8%A3%85.html"},{default:l(()=>[i("KVM 虚拟机安装")]),_:1})]),e("li",null,[n(s,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:l(()=>[i("Spring框架源码关键点")]),_:1})]),e("li",null,[n(s,{to:"/other/MongoDB%E9%AB%98%E5%8F%AF%E7%94%A8.html"},{default:l(()=>[i("MongoDB高可用")]),_:1})]),e("li",null,[n(s,{to:"/software/maccms/MAC%20CMS.html"},{default:l(()=>[i("MAC CMS")]),_:1})]),e("li",null,[n(s,{to:"/other/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.html"},{default:l(()=>[i("数据同步方案")]),_:1})]),e("li",null,[n(s,{to:"/software/unclassified/PasteImageIntoMarkdown%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html"},{default:l(()=>[i("PasteImageIntoMarkdown插件开发")]),_:1})]),e("li",null,[n(s,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:l(()=>[i("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),e("li",null,[n(s,{to:"/software/docker/Centos%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85Docker.html"},{default:l(()=>[i("Centos离线安装Docker")]),_:1})]),e("li",null,[n(s,{to:"/software/middleware/es/ES%E6%9D%82%E9%A1%B9.html"},{default:l(()=>[i("ES杂项")]),_:1})]),e("li",null,[n(s,{to:"/intro.html"},{default:l(()=>[i("intro")]),_:1})])]),_,E,y,j])}const M=r(v,[["render",A],["__file","搭建基于docker的elk平台来分析java日志.html.vue"]]);export{M as default};
