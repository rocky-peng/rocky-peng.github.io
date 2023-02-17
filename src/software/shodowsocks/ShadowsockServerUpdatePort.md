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
- **随机毒鸡汤**：时间是最好的老师，但遗憾的是，最后它把所有学生都弄死了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=2f6dd76d-5d14-41c7-87ae-db63b02d3152)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：不要太秀，后起之秀很多。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=fe1071fb-3ee2-4f13-911a-675d3b7461c6)
