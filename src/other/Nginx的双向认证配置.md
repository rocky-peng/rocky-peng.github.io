---
title: Nginx的双向认证配置
date: 2023-12-06
tag:
- nginx
- 双向认证
- ssl
---

没有时间详写，先列个大纲

## 生成服务端证书

## 生成客户端证书

## 配置nginx服务端证书并开启ssl

## 配置nginx客户端证书并开启验证

合下配置如下：

```jsx
ssl_certificate    /www/server/panel/vhost/cert/xxxx.com/fullchain.pem;
ssl_certificate_key    /www/server/panel/vhost/cert/xxxx.com/privkey.pem;

ssl_client_certificate /www/server/panel/vhost/cert/client.crt;
ssl_verify_client on;
```

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：我最大的缺点，就是缺点钱。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=c94994b4-12e9-4044-b6da-e0afdbaf1a38)
