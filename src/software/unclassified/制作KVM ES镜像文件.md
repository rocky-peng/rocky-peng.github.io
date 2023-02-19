---
title: 制作KVM ES镜像文件
date: 2019-10-23
---

安装KVM，创建centos虚拟机的步骤，参考：https://note.youdao.com/ynoteshare1/index.html?id=d641f8e6125142a0c2f19a9b416534ac&type=note?auto 

1. 进入centos服务器，上传es的安装文件到服务器并解压到/usr/share/elasticsearch目录，然后已root用户执行下面步骤：

```shell
adduser elastic

echo "* soft nofile 125536" >> /etc/security/limits.conf
echo "* hard nofile 125536" >> /etc/security/limits.conf
echo "* soft nproc  8096" >> /etc/security/limits.conf
echo "* hard nproc  8096" >> /etc/security/limits.conf


echo "vm.max_map_count=522144" >> /etc/sysctl.conf
sysctl -p

chown -R elastic:elastic /usr/share/elasticsearch

```

如果需要开启 bootstrap.memory_lock: true，则还需要执行：
```shell
echo "* hard memlock unlimited" >> /etc/security/limits.conf 
echo "* soft memlock unlimited" >> /etc/security/limits.conf 
```


修改jvm.options文件


已elastic用户修改es的配置文件，然后执行 bin/elasticsearch -d



## 编写自启动脚本
1. vi /usr/lib/systemd/system/elasticsearch.service
```shell
[Unit]
Description=elasticsearch service
  
[Service]
User=elastic
ExecStart=/usr/share/elasticsearch/bin/elasticsearch
  
[Install]
WantedBy=multi-user.target
```

2. systemctl enable elasticsearch

3. systemctl start elasticsearch 


## Docker部署
由于需要sshd服务，所以我们没有直接使用es7.4.1的docker镜像，而是使用的一个centos的docker镜像

然后同样执行上面的步骤，然后启动docker


```shell
docker network create -d macvlan  --subnet=172.26.43.0/24 --gateway=172.26.43.129 -o parent=bond0 mynet   

docker run -itd -e TZ="Asia/Shanghai" --name es172_26_43_136 -h es172_26_43_136 --restart=always --network=mynet --ip 172.26.43.136 --cpus=15 --memory=27g --memory-swap=27g --ulimit memlock=-1:-1 --privileged -e ES_JAVA_OPTS="-Xms13g -Xmx13g" -v /opt/es/es-172.26.43.136/elasticsearch-7.4.1:/usr/share/elasticsearch -v /opt/es/es-172.26.43.136/backups:/opt/csbit/backups csbit-elasticsearch /usr/sbin/init
```

注意：这里虽然限制了cpus为15，但是进入到容器内部执行lscpu仍然会显示40个（和宿主机一样的）
<br/><br/><br/><br/><br/><br/>
---
---
- **随机毒鸡汤**：开心追剧时忽想起作业没写，可恨，现在只能焦虑地追剧了。
<br/><br/>
![](http://api.btstu.cn/sjbz/?lx=dongman&uuid=0ecd9819-5fc3-4383-ba60-9a6bc1c7b69c)
