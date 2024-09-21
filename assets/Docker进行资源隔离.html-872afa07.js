import{_ as l,$ as a,a0 as d,a1 as e,a3 as s,a4 as t,a5 as r,a2 as i,w as o}from"./framework-b2dfbc05.js";const c={},u=r(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>其实docker命令已经给我们使用文档了，不必进行网上搜索。</p><p>比如执行：docker run --help 可以看到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>➜  ~ docker run --help                                                                                 

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
      --gpus gpu-request               GPU devices to add to the container (&#39;all&#39; to pass all GPUs)
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
      --memory-swap bytes              Swap limit equal to memory plus swap: &#39;-1&#39; to enable unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to 100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network network                Connect a container to a network
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host&#39;s OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --platform string                Set platform if server is multi-platform capable
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container&#39;s port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --read-only                      Mount the container&#39;s root filesystem as read only
      --restart string                 Restart policy to apply when a container exits (default &quot;no&quot;)
      --rm                             Automatically remove the container when it exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process (default true)
      --stop-signal string             Signal to stop a container (default &quot;SIGTERM&quot;)
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format: &lt;name|uid&gt;[:&lt;group|gid&gt;])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>咱们这里主要用到两个参数 --cpus 和 --memory</p><h3 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> cpu</h3><ol><li><p>--cpus decimal : 指定一个容器可以使用多少可用cpu资源，如果是4核cpu，可以设置为1.5，那么该容器最多只能使用1.5核的cpu资源，如果没有设置--cpuset-cpus，那么可以使用的1.5核可以是任意一个核心的资源</p></li><li><p>--cpuset-cpus：为容器指定可以使用的cpu核心是哪个，如果cpu是4和，那么按照编号0-3区分每一个核心，此参数设置为0,1即表示可以使用cpu的第一个和第二个核心。<strong>本人测试下来好像没用，可能是用法不对</strong></p></li></ol><h3 id="内存" tabindex="-1"><a class="header-anchor" href="#内存" aria-hidden="true">#</a> 内存</h3><ol><li><p>--memory bytes : 为容器指定最多可以使用多少内存</p></li><li><p>--memory-swap bytes ：为容器指定最多可以使用多少swap空间，此选项必须要在使用了--memory参数的前提下才能使用，如果没有设置--memory参数，那么这个参数不会生效 <img src="https://cdn.justdopay.com/xiaoshujiang/1629082455833.png" alt="enter description here" loading="lazy"></p></li><li><p>--memory-swappiness int ：设置容器使用swap的倾向性有多大，0-100。</p></li><li><p>--oom-kill-disable：禁用OOM Killer</p></li></ol><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>先pull一个镜像，这个镜像可以允许测试任务，并可以指定是io型还是cpu型任务。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull lorel/docker-stress-ng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082463599.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h3 id="限制cpu测试" tabindex="-1"><a class="header-anchor" href="#限制cpu测试" aria-hidden="true">#</a> 限制CPU测试</h3><h4 id="不限制cpu" tabindex="-1"><a class="header-anchor" href="#不限制cpu" aria-hidden="true">#</a> 不限制CPU</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>➜  ~ docker run -it --rm lorel/docker-stress-ng:latest  --cpu 8
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 8 cpu


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
7df53644fd9a        stress              202.30%             36.11MiB / 1.945GiB   1.81%               976B / 0B           0B / 0B             9


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过docker stats可以看到cpu已经达到了200% （本人用的mac，限制了docker容器最大cpu是2核）</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629082467513.png" alt="enter description here" tabindex="0" loading="lazy"><figcaption>enter description here</figcaption></figure><h4 id="限制cpu" tabindex="-1"><a class="header-anchor" href="#限制cpu" aria-hidden="true">#</a> 限制cpu</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>➜  ~ docker container run  --cpus=0.5 -it --rm lorel/docker-stress-ng:latest  --cpu 8 
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 8 cpu


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
6244647a3f97        zen_euclid          52.43%              36.22MiB / 1.945GiB   1.82%               836B / 0B           0B / 0B             9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到cpu的使用率降下来了，这里虽然超过了50%，但不会超很多</p><h3 id="限制内存测试" tabindex="-1"><a class="header-anchor" href="#限制内存测试" aria-hidden="true">#</a> 限制内存测试</h3><h4 id="不限制内存" tabindex="-1"><a class="header-anchor" href="#不限制内存" aria-hidden="true">#</a> 不限制内存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>➜  ~ docker container run -it --rm  lorel/docker-stress-ng:latest  --vm 2 --vm-bytes 999m            
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 2 vm


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
5b040326f896        stress              89.88%              1.801GiB / 1.945GiB   92.59%              836B / 0B           0B / 0B             5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到内存达到了尽2G。</p><h4 id="限制内存" tabindex="-1"><a class="header-anchor" href="#限制内存" aria-hidden="true">#</a> 限制内存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>➜  ~ docker container run -it --rm --memory 500m  lorel/docker-stress-ng:latest  --vm 2 --vm-bytes 999m
stress-ng: info: [1] defaulting to a 86400 second run per stressor
stress-ng: info: [1] dispatching hogs: 2 vm


docker stats
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT   MEM %               NET I/O             BLOCK I/O           PIDS
7e8457ed992c        stress              202.51%             497.9MiB / 500MiB   99.58%              836B / 0B           0B / 0B             5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到内存降到了500m内</p><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,30),v=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1),m=e("hr",null,null,-1),p=e("hr",null,null,-1),b=e("ul",null,[e("li",null,[e("strong",null,"随机毒鸡汤"),i("：向上的路其实并不拥挤，拥挤的是，大家都选择安逸！ "),e("br"),e("br"),e("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=06aadc73-9ee8-47db-bbb6-20c46eb447ec",alt:"",loading:"lazy"})])],-1);function h(g,f){const n=o("RouterLink");return a(),d("div",null,[u,e("ul",null,[e("li",null,[s(n,{to:"/software/unclassified/MyBatis.html"},{default:t(()=>[i("MyBatis")]),_:1})]),e("li",null,[s(n,{to:"/software/middleware/mysql/MySQL%E6%9D%82%E9%A1%B9.html"},{default:t(()=>[i("MySQL杂项")]),_:1})]),e("li",null,[s(n,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:t(()=>[i("Git合并多个提交并push到远程仓库")]),_:1})]),e("li",null,[s(n,{to:"/software/spring/Spring%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%85%B3%E9%94%AE%E7%82%B9.html"},{default:t(()=>[i("Spring框架源码关键点")]),_:1})]),e("li",null,[s(n,{to:"/other/Hadoop%20%E4%B8%80.html"},{default:t(()=>[i("Hadoop 一")]),_:1})]),e("li",null,[s(n,{to:"/software/unclassified/linux_no_space_left_on_device.html"},{default:t(()=>[i("linux_no_space_left_on_device")]),_:1})]),e("li",null,[s(n,{to:"/software/unclassified/index%E6%96%B9%E6%B3%95%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E8%AE%B0%E5%BD%95.html"},{default:t(()=>[i("index方法压力测试记录")]),_:1})]),e("li",null,[s(n,{to:"/other/%E6%8E%A8%E8%8D%90%E5%87%A0%E4%B8%AA%E9%80%82%E7%94%A8%E5%B0%8F%E5%B7%A5%E5%85%B7.html"},{default:t(()=>[i("推荐几个适用小工具")]),_:1})]),e("li",null,[s(n,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:t(()=>[i("异地多活")]),_:1})]),e("li",null,[s(n,{to:"/intro.html"},{default:t(()=>[i("intro")]),_:1})]),e("li",null,[s(n,{to:"/software/middleware/es/ESRally%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%AD%A5%E9%AA%A4.html"},{default:t(()=>[i("ESRally性能测试步骤")]),_:1})]),e("li",null,[s(n,{to:"/software/raft/raft%E5%8D%8F%E8%AE%AE.html"},{default:t(()=>[i("raft协议")]),_:1})])]),v,m,p,b])}const B=l(c,[["render",h],["__file","Docker进行资源隔离.html.vue"]]);export{B as default};
