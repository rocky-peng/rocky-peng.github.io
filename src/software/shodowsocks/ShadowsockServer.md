---
title: Shadowsock Server搭建
date: 2020-05-06
---


```shell


#!/usr/bin/env bash
echo $1

sshpass -p "yourpassword" ssh root@$1 << EOF

yum install python-setuptools && easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo '{"server":"0.0.0.0","server_port":12345,"local_address": "127.0.0.1","local_port":1080,"password":"yourpassword", "timeout":1200,"method":"aes-256-cfb","fast_open": true,"workers":3}' >> /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF



docker pull oddrationale/docker-shadowsocks
docker run -d -p 12345:12345 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 12345 -k yourpassword -m aes-256-cfb
```
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：世界上最动听的话，不是我爱你，而是你的肿瘤是良性的！
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=e7fe7f0f-5c1f-4a4b-a8d2-204fc61569d8)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：所谓进退两难，抬头有抬头纹，低头有双下巴。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=ec03a77b-5e81-4264-9d26-92e119e2f7e9)
