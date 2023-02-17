---
title: ShadowsockServerUpdatePort
date: 2020-06-06
---

#!/usr/bin/env bash

sshpass -p "yourpassword" ssh root@$1 << EOF

#yum install python-setuptools && easy_install pip
#
#pip install shadowsocks
#
#sudo mkdir /etc/shadowsocks
#
echo '{"server":"0.0.0.0","server_port":$2,"local_address": "127.0.0.1","local_port":1080,"password":"yourpassword", "timeout":1200,"method":"aes-256-cfb","fast_open": true,"workers":3}' > /etc/shadowsocks/shadowsocks.json
#
ssserver -c /etc/shadowsocks/shadowsocks.json -d restart

EOF

<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：创业只要你坚持，总有一天，会亏完的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=7a8ec90b-f35b-428d-ba88-a126403cf1e5)
