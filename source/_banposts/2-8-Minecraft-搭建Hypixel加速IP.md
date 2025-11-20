---
title: Minecraft-搭建Hypixel加速IP
abbrlink: 2024/06/27/1719475599760
date: 2024/06/27 16:14:00
updated: 2024/06/27 16:14:00
tags:
- CDN
- 教程
categories:
- 技艺驳杂
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/037744.webp
businesscard: true
---

众所周知，Hypixel是世界上最大的MC服务器社区之一，具有丰富的自创小游戏，但是由于服务器的主机在海外，导致大陆裸连1000ms+

![image|379x212](https://imgse.koxiuqiu.cn/i/2024/07/07/scmeuz.png)


那么这时候就可以使用加速器或者加速IP，就可以做到低延迟连接服务器（大约200ms左右）网上也有很多公益的加速IP，但是有的时候由于是公益的会不稳定（被攻击什么的），很多人用或者是其他原因，这时候就可以自己自建一个加速IP来进行使用！

> 说下自建这个加速节点成本问题，可能还不如买个加速器或者直接用加速IP，我是自己有服务器是运营网站的可以顺便，就省下了我加速器的钱同时方便，所以这个值不值得做因人而异，用不着以个人角度去评价我（是我去做，我去自建）值不值得去做

# 准备工作

* 一台用于加速的服务器
* ssh 推荐：XTerminal
* 系统镜像CentOS7

由于是搭建加速IP，如果想给很多人使用可以选择大带宽，如果自己一个人那可以自行随意选择
![image|690x252](https://imgse.koxiuqiu.cn/i/2024/07/07/sd2wi5.png)
然后选择你要的系统，能弄NG然后反代就行，可以选择预安装就不用自己去麻烦装宝塔了
![image|690x228](https://imgse.koxiuqiu.cn/i/2024/07/07/sd5b7t.png)

# 反代方案(荐)

如果不懂，可以直接安装Nginx，在Nginx最下配置添加反代

```
{
   server
   {
      #HypixelProxy
       listen 25565;
       proxy_pass mc.hypixel.net:25565;
   }
} 
```

记得给服务器解析个域名，要不然IP连接Hypixel会提示你用域名连（立例子，只是演示，不懂上网查）

![image|690x42](https://imgse.koxiuqiu.cn/i/2024/07/07/sd86fi.png)

## 开始工作

安装宝塔，不详细教程了[宝塔面板 - 简单好用的Linux/Windows服务器运维管理面板 (bt.cn)](https://www.bt.cn/new/index.html)

然后安装完毕下载Nginx，不需要其他的，就一个Nginx

![image|690x391](https://imgse.koxiuqiu.cn/i/2024/07/07/sdclry.png)


然后可以把HTTP部分全部删除在添加上面代码即可，要是没法保存我就给一个懒人配置

```
user  www www;
worker_processes auto;
error_log  /www/wwwlogs/nginx_error.log  crit;
pid        /www/server/nginx/logs/nginx.pid;
worker_rlimit_nofile 51200;

events
    {
        use epoll;
        worker_connections 51200;
        multi_accept on;
    }

stream {    
   server {
       listen 25565;
       proxy_pass mc.hypixel.net:25565;
   }
} 
```

然后记得重启

![image|567x303](https://imgse.koxiuqiu.cn/i/2024/07/07/sdezf5.png)


然后添加域名解析，例子我的服务器IP是154.44.8.83，那就是如图添加

![image|687x56](https://imgse.koxiuqiu.cn/i/2024/07/07/sdphw9.png)

如果是雨云的域名也是同理，主机名第一个，记录值类型`SRV`，默认线路，然后复制粘贴记录值`5 0 25565 IP`

![image|569x181](https://imgse.koxiuqiu.cn/i/2024/07/07/sdrsk4.png)


# 脚本方案

准备好服务器，检查你的服务器运营商是否开放25565端口，很多默认的都全开，如果是腾讯的则可能需自行开放

## 连接SSH

连接后执行脚本**安装.NET**

```
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
sudo yum install dotnet-runtime-3.1
```

如有：Y/N选择项目，输入Y然后回车即可

![image|491x76](https://imgse.koxiuqiu.cn/i/2024/07/07/sdtjne.png)


## 开放端口

要是没开放端口可以尝试以下脚本开放

### **防火墙放行**

```
firewall-cmd --state  #  查看防火墙运行状态，放行端口必须开启防火墙
systemctl start firewalld.service  #  开启防火墙
systemctl stop firewalld.service   #  关闭防火墙
```

### **放行25565端口**

```
firewall-cmd --zone=public --add-port=25565/tcp --permanent
```

### **重载防火墙**

```
firewall-cmd --reload
```

## 上传脚本

[v2脚本.zip - Axzzz云盘](https://ipv4wp.axzzz.top:9503/s/9qxT9)

![image|512x84](https://imgse.koxiuqiu.cn/i/2024/07/07/sdzxvc.png)


解压后依次上传脚本文件，随意选择一个目录，如果是XTerminal可以直接上传，如果是宝塔等其他的另说

![image|688x482](https://imgse.koxiuqiu.cn/i/2024/07/07/secbbf.png)


> 为什么不直接上传压缩包服务器解压？你猜呢

## 使用脚本

确保你的目录正确，比如图中是root你可以执行 `cd /root` 来切换到root目录
然后输入 `dotnet ./MinecraftProxy2.dll`

![image|522x67](https://imgse.koxiuqiu.cn/i/2024/07/07/seeaej.png)


然后输入`mc.hypixel.net`

> 如果想加速其他服务器也可以选择其他的

然后后面的`port:` `local port:` 都输入`25565`

![image|429x96](https://imgse.koxiuqiu.cn/i/2024/07/07/skyciv.png)


然后耐心等待即可，期间不要关闭终端避免出现问题

# 其他

对于搭建加速IP还有其他有效办法，也有比这更好的选择，可以自行选择自己合适的部署方法即可，不用纠结本文
或者是，自己去用公益的一些加速IP'，正如我上面所说的：
![image|690x92](https://imgse.koxiuqiu.cn/i/2024/07/07/sm22li.png)

或者是很多个伙伴一起分担，一起用也不错

这里使用的是雨云的美国服务器搭建，延迟表现200ms左右，博主觉得刚刚好手感适合自己，根据自己的需求选择服务器即可，即便是就物理延迟

如果你是广东一带的华南用户，你可以选择一台香港的服务器。

如果你是除了华南以外地区的用户，你可以选择一台美国的服务器