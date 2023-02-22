---
title: HTTP1 0 vs HTTP1 1 vs WebSocket
date: 2023-02-15
tag:
- http
- websocket
---

## http1.0

1. 一问一答（客户端问，服务端答）
2. 一次连接只能完成一次一问一答
3. 短连接

## http1.1

1. 一问一答（客户端问，服务端答）
2. 一次连接可以实现多次问答
3. 长连接

## http1.0 vs http1.1

两个最大区别就是一个短连接，一个长连接
短连接就是一次tcp连接只能完成一次问答
长连接就是一次tcp连接可以完成多次问答

## websocket

1. 非问答模式，服务端可以主动发送消息
2. 属于长连接

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：小时候总骗爸妈我没钱了，现在总骗爸妈，没事我还有钱。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=af373d97-636e-426b-a4a2-cfd46b4def27)
