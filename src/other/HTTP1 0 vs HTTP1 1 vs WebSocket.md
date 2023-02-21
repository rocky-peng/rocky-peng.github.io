---
title: HTTP1 0 vs HTTP1 1 vs WebSocket
date: 2023-02-15
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
- **随机毒鸡汤**：命只有一条，但要命的事，可不止一件。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=1f366061-5cda-4b6b-adda-1bedbb5b8e9d)
