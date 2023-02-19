---
title: ShadowsockServer配置
date: 2020-07-06
---

# 临时用vpn的办法：
# 腾讯云->竞价实例->中国香港->流量计费(100M) ，两三个小时才几毛钱


## 部署

```

sshpass -p "yourpassword" ssh root@$1 << EOF

yum install python-setuptools && easy_install pip

pip install shadowsocks

sudo mkdir /etc/shadowsocks

echo '{"server":"0.0.0.0","server_port":12345,"local_address": "127.0.0.1","local_port":1080,"password":"yourpassword", "timeout":1200,"method":"aes-256-cfb","fast_open": true,"workers":3}' >> /etc/shadowsocks/shadowsocks.json

ssserver -c /etc/shadowsocks/shadowsocks.json -d restart
EOF

```

## 修改端口
# vim /etc/shadowsocks/shadowsocks.json

# ssserver -c /etc/shadowsocks/shadowsocks.json -d restart

<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你是谁不重要，重要的是，你闯进我生活想干啥？
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=c22b4e7d-7721-4e8f-a131-5f7d957916e2)
