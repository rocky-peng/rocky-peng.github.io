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
- **随机毒鸡汤**：他们说网络很假，我笑了，好像现实很真一样。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=ec67e77a-49f6-4459-a0c6-c7efe39b0feb)
