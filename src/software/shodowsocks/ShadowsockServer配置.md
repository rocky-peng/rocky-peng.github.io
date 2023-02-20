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
- **随机毒鸡汤**：学校教学楼放镜子，是为了让你知道，人丑就要多读书。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=e41c9407-fe3f-4fef-8ceb-c8258f3f3fe6)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你不是独自前行的猛虎，你只是一只，被同类抛弃的牛羊。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=e9532fa8-5946-4151-830b-ee5b1d97f2ee)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：你为什么这么努力？因为再不努力，就要回家继承家产了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?m_lx=suiji&uuid=90167516-d71b-4ac2-8e55-5837fc7824f0)
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：穷人和普通人都叫啃老，富人叫继承家业！
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=m_meizi&uuid=da399342-f176-4955-9992-ead30f22516b)
