---
title: 搭建好用聊天系统附加APP
abbrlink: 2024/06/03/1717385392235
date: 2024/06/03 12:23:00
updated: 2024/06/03 12:23:00
tags:
- 宝塔
- 教程
- 雨云
- 服务器
categories:
- 建站教程
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/458714.webp
businesscard: true
---

# 前言废话

之前我写了一篇关于搭建在线聊天室站点的教程，但是那套源码存在一些问题，比如数据库的配置可能会让一些新手遇到困难，整体系统的体验也不够理想。另外，我意识到教程写得不够全面，没有提供管理员账户等重要信息。此外，由于我资源网站暂时关闭，所以我决定重新发布一篇全新的教程，并对之前的问题进行改进。

**朽丘博客：貌似在HEXO站，没迁移文章到HALO**

**雨云论坛：**[搭建在线聊天室网站 - 教程分享 / 云服务器 RCS - 雨云论坛 (rainyun.com)](https://forum.rainyun.com/t/topic/7139/19)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/j6azia.png)

这次使用的源码是：**DuckChat（鸭信） – 一款简单好用的聊天系统**

> DuckChat 是一套完整的私有即时通讯（instant message）解决方案，含服务器端程序、客户端（含iOS、Android、PC等）程序。通过DuckChat，站点管理员可以快速的在自己服务器上搭建起一套私有的即时通讯服务，用户可以使用客户端连接至此服务器进行信息交互。
>
> 但是不知道怎么没人维护了，官网也没了。不过还能再github上看到项目

# 前提准备

首先，简单描述一下需要的材料：

- 源码程序

- 一台服务器
- 一个域名
- 一个SSL证书

# 开始流程

清楚需要的东西后，就可以着手开始操作了，和往常一样的写法，从头到尾教程

## 获取源码

这里放出Axzzz云盘链接，有的人进不去github，也不会魔法上网

[【点击获取源码】](https://ipv4wp.axzzz.top:9503/s/N54Tk)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/k7snwc.png)

## 获取服务器

这里可以自由选择，如果你最求低成本，那么可以了解一下阿里和腾讯云的一些新用户活动：

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/05/26/xhuz2w.png)

[云服务器最新特惠_爆款产品新老同享续费同价-阿里云 (aliyun.com)](https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=zt7luvq9)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/05/26/xj09sj.png)

[云产品免费体验馆_云产品免费试用_个人云产品试用-腾讯云 (tencent.com)](https://curl.qcloud.com/rphGPeZk)

以及一些其他的厂家：

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/05/26/xknk1k.png)

**这里为了方便测试，使用的雨云的试用机器**

我这里懒的，毕竟不是正式环境就选最高配试用来操作，你可以自己根据需求选择不够再自己升级，系统选择Centos7

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/km546h.png)

然后等待按照系统创建成功即可！

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/kp3yqo.png)

## SSL证书/域名

前面几篇文章我已经复述很多次了，我不再废话水字数重复，详细阅读以下：

- 域名：[[真|保姆级\]搭建MineBBS同款 | 朽丘博 (koxiuqiu.cn)](https://koxiuqiu.cn/2024/05/27/1716722508619#注册域名)
- 证书：[[真|保姆级\]搭建MineBBS同款 | 朽丘博 (koxiuqiu.cn)](https://koxiuqiu.cn/2024/05/27/1716722508619#ssl证书)

## 安装宝塔面板

进入SSH，执行宝塔面板安装脚本：（耐心等待）

[宝塔面板下载，免费全能的服务器运维软件 (bt.cn)](https://www.bt.cn/new/download.html)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/kts6m1.png)

安装完了进入面板，安装部署好以下环境：

- PHP版本>=7(不支持7.3)
- nginx
- mysql5.x

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lllbt4.png)

访问直接强制进入即可，自签证书是这样的

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lngvmi.png)

然后登录，可能会卡一段时间再首页，别动等它一键预装出来直接一键选第一个预装选择正确版本安装即可

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lnz8fd.png)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lpeqk0.png)

## 创建站点

这里使用雨云的二级域名，如果你要套cdn也可以套[快速入手QiuDN | 朽丘博 (koxiuqiu.cn)](https://koxiuqiu.cn/2024/06/03/qiucdn)或者是用自己域名，当然，雨云二级域名什么时候被墙都不知道，因为用的人多难免有几个恼T搞事情

[域名服务 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/domain/list/free)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/ly7cve.png)

出现安装了但是显示没安装就刷新即可，宝塔老毛病

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lysuhz.png)

点击进入网站目录

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/lzy9g9.png)

删了，然后上传源码文件双击解压

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m0lvjs.png)

然后找到此目录，把“**src**”里的文件复制到网站根目录即可

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m1e5xs.png)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m1y5ij.png)

然后直接访问域名就行（byd发现雨云二级用不了我干脆随便弄了域名A了过去）

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m4c8mo.png)

然后符合环境继续下一步就行，到了创建数据库之后你可以自己选择数据库类型，这里为了方便就直接sqlite数据库了

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m5exy9.png)

初始化完毕就可以进入后台了

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m6j3k9.png)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/m78utp.png)

## 一些问题

PHP版本>=7(不支持7.3)，不然安装会出问题。

如果不能发图片，需要把网站目录权限修改为777

支持ssl，可以在宝塔面板申请ssl证书，强制301后就会自动开启。

支持Android

> 可悲的是官网没了貌似，软件也找不到，感兴趣的可以去互联网寻找一下

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/mabqmt.png)

![img](https://i1.wp.com/imgse.koxiuqiu.cn/i/2024/06/03/malzv0.png)