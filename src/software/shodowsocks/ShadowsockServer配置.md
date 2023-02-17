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
- **随机毒鸡汤**：你要是不丑的话，还挺好看的。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=ebf553cd-b6e0-4b9f-afe7-c1d2f21e6eba)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：小时候从三阶楼梯跳下去，就能获得快乐，现在要从八楼。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=suiji&uuid=ab66de54-33e5-4dab-beee-68de58e5e7eb)
