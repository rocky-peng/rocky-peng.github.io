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
- **随机毒鸡汤**：猛的一看你不怎么样，仔细一看，还不如猛的一看。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=388122a9-336f-4e6a-99bd-6e3ddaa8916d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：动脑的年纪，就别动心。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=5ca550b3-19d8-4102-ba3e-23f4d1ee1690)
