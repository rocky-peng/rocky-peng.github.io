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
- **随机毒鸡汤**：所谓土味情话，长的好看说的都是情话，长的丑说的都是土味。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=84c05298-3328-4ecb-8d53-3640a7c8820d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：今天下决心做个废物，可没想到这行的竞争，竟如此激烈。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=ffd1835b-5d5c-46ed-b76d-0a5fb77956e5)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你以为打喷嚏是有人想你吗？那只是一个单身狗，感冒的前兆。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=250bbdbd-51d3-482d-a8d3-5c94526fb7d4)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：请相信我，我所说的每句话，都是废话！
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=5f1dfdd6-47f9-4107-bdf0-b116ca99d0d0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：有些爱情，不是让你多喝水，就是让你早点睡。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=5ac53f74-4aed-4f8f-8695-c75926c0a46d)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：看时不懂剧中人，懂时已是剧中人。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=2a19f5a6-0cfa-4398-b081-7faea30e8214)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：自己都是一个失败的人，还想教出成功的孩子吗？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=cd414c2a-a237-4d08-951f-0293574a9501)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：虽然我学得慢，但我放弃得快。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=e74172cf-1109-4a45-bcd3-92d697279db6)
