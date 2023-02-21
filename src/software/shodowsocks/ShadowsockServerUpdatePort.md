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
- **随机毒鸡汤**：我曾经得过精神分裂症，但现在我们已经康复了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=d4a48e51-6ec1-4899-ad31-6b10a089d5ff)
