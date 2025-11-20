---
title: 使用cdnfly自建CDN
abbrlink: 2024/04/05/13
date: 2024/04/05 16:14:00
updated: 2024/04/05 16:14:00
tags:
- CDN
- 教程
categories:
- 建站教程
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/861861.webp
businesscard: true
---

## 使用cdnfly5.1.11自建CDN并配置云端

### 一、建立云端授权站

![20240405153102765-截屏2024-01-27-10.51.36](https://imgse.koxiuqiu.cn/i/2024/04/05/qlj2ca.png)

#### 1、需要绑定：

```
auth.cdnfly.cn

monitor.cdnfly.cn

cdnfly.cn
```

#### 2、创建授权域名

然后再创建一个你要用的授权的域名，就是到时候要下载，这个就是下载源

#### 2、修改伪静态nginx伪静态：

![20240405153136643-截屏2024-01-27-10.44.06](https://imgse.koxiuqiu.cn/i/2024/04/05/qlm3t2.png)

> 小白提示：不懂就两个站都设置

```
location / {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php/$1  last;   break;
    }
}
```

### 二、配置脚本网站

#### 1、创建脚本网站

#### 2、上传源文件

[使用cdnfly5.1.11自建CDN并配置云端](https://ipv4wp.axzzz.top:9503/s/AO9fw)

两个压缩包都解压到站点目录，然后下一步编辑

> 小白提示：两个站都解压两个压缩包，然后都修改配置文件(下面的配置文件)

#### 2、修改配置文件CdnSysTemv4

修改目录的CdnSysTemv4文件，找到授权域名把授权域名改成你授权站的域名

## 修改主端hosts文件

修改主控的hosts文件，将 auth.cdnfly.cn、monitor.cdnfly.cn cdnfly.cn 这3个域名指向刚才的自建云端服务器IP

```
plaintext
vim /etc/hosts
#添加以下内容，记得替换为你自己搭建的IP
<你的自建云端ip> auth.cdnfly.cn monitor.cdnfly.cn cdnfly.cn
```

测试hosts是否生效

```
plaintext
ping auth.cdnfly.cn
ping monitor.cdnfly.cn
ping cdnfly.cn
```

如果返回的是你自建的ip就代表修改正确

## 主控相关SSH脚本

主控服务器配置要求最低2-8（搭建测试也可以用2-2）

### CdnSysTem一键全自动安装主控脚本

```
yum -y install wget;wget http://绑定的域名/CdnSysTemv4;sh CdnSysTemv4
```

成功例图

![](https://imgse.koxiuqiu.cn/i/2024/12/14/r3biq1.png)

![image-20241214201949829](https://koimg.cn-sy1.rains3.com/2024/12/14/272753.webp)

使用脚本安装有版本号，且访问这个授权站，会有一个仿宝塔的违规访问的禁止页面就是对的（白屏的话，只要下载安装脚本没问题就不管了），然后最后安装大片黄色的代码基本上就是成功部署了，等待安装就行（SSH软件不一定会显示颜色的，可以看下方评论区的补充）

管理员账号和密码： admin/cdnfly

普通用户账号和密码： jason/cdnfly

### 一键取消主控域名限制脚本

```
yum -y install wget;wget http://绑定的域名/umdnv4;sh umdnv4
```

### 一键拉起主控授权制脚本

```
yum -y install wget;wget http://绑定的域名/Authv4;sh Authv4
```

## 节点相关SSH脚本

节点服务器配置要求最低2-2

如果你节点服务器防御低你可以屏蔽境外IP

### 节点一键禁止境外IP访问脚本:

```
yum -y install wget;wget http://绑定的域名/ChinaNodeFirewallRulesV8;sh ChinaNodeFirewallRulesV8 主控IP 主控(Elasticsearch)IP
```

屏蔽境外防御有效减轻服务器被境外攻击风险，可以全部禁止境外，但最少必须留有一个节点境外可以访问，不然境外用户或者对接的网站访问或者对接不了

### 一键检测节点带宽大小脚本

```
yum -y install wget;wget http://绑定的域名/kvmv4;sh kvmv4
```