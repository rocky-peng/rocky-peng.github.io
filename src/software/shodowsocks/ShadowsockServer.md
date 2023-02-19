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
- **随机毒鸡汤**：好朋友都这样，你跌倒时我会扶你一把，不过要先等我笑完。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=610cce08-e8be-40f5-a268-0474595fb60b)
