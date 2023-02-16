---
title: WebSocket SpringBoot Demo
date: 2023-02-15
---

## pom.xml

```xml
<dependencies>
        <!--  web-->
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
      </dependency>

      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-websocket</artifactId>
      </dependency>
  </dependencies>
```

## 配置类

```java
@EnableWebSocket // [1]
@Configuration
public class WebSocketConfig implements WebSocketConfigurer {

    @Resource
    private WebSocketHandler defaultHandler;

    @Resource
    private DefaultInterceptor defaultInterceptor;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(defaultHandler, "ws")
                .addInterceptors(defaultInterceptor)
                .setAllowedOrigins("*");
    }

    @Bean
    public ServerEndpointExporter serverEndPointExporter() {
        return new ServerEndpointExporter();
    }
}
```

## 处理器

```java
@Component
public class DefaultHandler implements WebSocketHandler {
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        for (int i = 0; i < 100; i++) {
            session.sendMessage(new TextMessage("test-" + i + "-" + Thread.currentThread().getName() + "-" + Thread.currentThread().getId()));
            TimeUnit.SECONDS.sleep(1);
        }
    }
    
    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {

    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}
```

## 拦截器

```java
@Component
public class DefaultInterceptor implements HandshakeInterceptor {
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        // TODO
        return true; // [1]
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {

    }
}
```

## 前端测试

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>

    <script type="text/javascript">
        function WebSocketTest()
        {
            if ("WebSocket" in window)
            {
                console.log("您的浏览器支持 WebSocket!");

                // 打开一个 web socket
                var ws = new WebSocket("ws://localhost:49998/ws?a=av&b=bv");

                ws.onopen = function()
                {
                    // Web Socket 已连接上，使用 send() 方法发送数据
                    //             ws.send("发送数据");
                    console.log("与服务器建立连接成功！")
                };

                ws.onmessage = function (evt)
                {
                    var received_msg = evt.data;
                    console.log("接收数据：" + received_msg)
                };

                ws.onclose = function()
                {
                    // 关闭 websocket
                    alert("连接已关闭...");
                };
            }

            else
            {
                // 浏览器不支持 WebSocket
                alert("您的浏览器不支持 WebSocket!");
            }
        }
    </script>

</head>
<body>

<div id="sse">
    <a href="javascript:WebSocketTest()">运行 WebSocket</a>
</div>

</body>
</html>
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：总会把最坏的脾气，留给最在乎你的人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=61c8f23e-e4f5-4f0d-bd80-ac474e053852)
