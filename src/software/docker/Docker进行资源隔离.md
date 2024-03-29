---
title: Docker进行资源隔离
date: 2019-12-24
---

## 前言

其实docker命令已经给我们使用文档了，不必进行网上搜索。

比如执行：docker run --help  可以看到

```
➜  ~ docker run --help                                                                                 

Usage:	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container

Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
      --blkio-weight-device list       Block IO weight (relative device weight) (default [])
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup for the container
      --cidfile string                 Write the container ID to the file
      --cpu-period int                 Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int                  Limit CPU CFS (Completely Fair Scheduler) quota
      --cpu-rt-period int              Limit CPU real-time period in microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime in microseconds
  -c, --cpu-shares int                 CPU shares (relative weight)
      --cpus decimal                   Number of CPUs
      --cpuset-cpus string             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string             MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                         Run container in background and print container ID
      --detach-keys string             Override the key sequence for detaching a container
      --device list                    Add a host device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit read rate (bytes per second) from a device (default [])
      --device-read-iops list          Limit read rate (IO per second) from a device (default [])
      --device-write-bps list          Limit write rate (bytes per second) to a device (default [])
      --device-write-iops list         Limit write rate (IO per second) to a device (default [])
      --disable-content-trust          Skip image verification (default true)
      --dns list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      --domainname string              Container NIS domain name
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --env-file list                  Read in a file of environment variables
      --expose list                    Expose a port or a range of ports
      --gpus gpu-request               GPU devices to add to the container ('all' to pass all GPUs)
      --group-add list                 Add additional groups to join
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check (ms|s|m|h) (default 0s)
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)
      --health-timeout duration        Maximum time to allow one check to run (ms|s|m|h) (default 0s)
      --help                           Print usage
  -h, --hostname string                Container host name
      --init                           Run an init inside the container that forwards signals and reaps processes
  -i, --interactive                    Keep STDIN open even if not attached
      --ip string                      IPv4 address (e.g., 172.30.100.104)
      --ip6 string                     IPv6 address (e.g., 2001:db8::33)
      --ipc string                     IPC mode to use
      --isolation string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, --label list                     Set meta data on a container
      --label-file list                Read in a line delimited file of labels
      --link list                      Add link to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver for the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address (e.g., 92:d0:c6:0a:29:33)
  -m, --memory bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to 100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network network                Connect a container to a network
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host's OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --platform string                Set platform if server is multi-platform capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container's port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --read-only                      Mount the container's root filesystem as read only
      --restart string                 Restart policy to apply when a container exits (default "no")
      --rm                             Automatically remove the container when it exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process (default true)
      --stop-signal string             Signal to stop a container (default "SIGTERM")
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format: <name|uid>[:<group|gid>])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container

```

咱们这里主要用到两个参数 --cpus   和 --memory 

### cpu

1. --cpus decimal :  指定一个容器可以使用多少可用cpu资源，如果是4核cpu，可以设置为1.5，那么该容器最多只能使用1.5核的cpu资源，如果没有设置--cpuset-cpus，那么可以使用的1.5核可以是任意一个核心的资源
   
2. --cpuset-cpus：为容器指定可以使用的cpu核心是哪个，如果cpu是4和，那么按照编号0-3区分每一个核心，此参数设置为0,1即表示可以使用cpu的第一个和第二个核心。**本人测试下来好像没用，可能是用法不对**

### 内存
1. --memory bytes : 为容器指定最多可以使用多少内存
   
2. --memory-swap bytes  ：为容器指定最多可以使用多少swap空间，此选项必须要在使用了--memory参数的前提下才能使用，如果没有设置--memory参数，那么这个参数不会生效
   ![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082455833.png)
   
3. --memory-swappiness int ：设置容器使用swap的倾向性有多大，0-100。

4. --oom-kill-disable：禁用OOM Killer
 

## 测试

先pull一个镜像，这个镜像可以允许测试任务，并可以指定是io型还是cpu型任务。
```
docker pull lorel/docker-stress-ng
```
![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082463599.png)

### 限制CPU测试

#### 不限制CPU
```
➜  ~ docker run -it --rm lorel/docker-stress-ng:latest  --cpu 8
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 8 cpu


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
7df53644fd9a        stress              202.30%             36.11MiB / 1.945GiB   1.81%               976B / 0B           0B / 0B             9


```

通过docker stats可以看到cpu已经达到了200% （本人用的mac，限制了docker容器最大cpu是2核）

![enter description here](https://cdn.justdopay.com/xiaoshujiang/1629082467513.png)

#### 限制cpu

```
➜  ~ docker container run  --cpus=0.5 -it --rm lorel/docker-stress-ng:latest  --cpu 8 
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 8 cpu


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
6244647a3f97        zen_euclid          52.43%              36.22MiB / 1.945GiB   1.82%               836B / 0B           0B / 0B             9

```
可以看到cpu的使用率降下来了，这里虽然超过了50%，但不会超很多

### 限制内存测试

#### 不限制内存
```
➜  ~ docker container run -it --rm  lorel/docker-stress-ng:latest  --vm 2 --vm-bytes 999m            
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 2 vm


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
5b040326f896        stress              89.88%              1.801GiB / 1.945GiB   92.59%              836B / 0B           0B / 0B             5

```

可以看到内存达到了尽2G。


#### 限制内存
```
➜  ~ docker container run -it --rm --memory 500m  lorel/docker-stress-ng:latest  --vm 2 --vm-bytes 999m
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 2 vm


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT   MEM %               NET I/O             BLOCK I/O           PIDS
7e8457ed992c        stress              202.51%             497.9MiB / 500MiB   99.58%              836B / 0B           0B / 0B             5

```

可以看到内存降到了500m内



<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：所有的焦虑不安，都源于你的实力，配不上你的野心。
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=b981420c-75e8-423a-a86a-906cdb9a12aa)
