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
- **随机毒鸡汤**：我对你要求不高，能跟我其他对象，和睦相处就好咯。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=6f4e3a1d-c32b-45f4-8297-1a2f2f5d6214)
