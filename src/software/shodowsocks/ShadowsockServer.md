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
- **随机毒鸡汤**：手机的寿命是人类的1/20，请放下身边的杂事，好好陪陪它！
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=dongman&uuid=1a205052-189a-443c-8618-587dc258fbad)
