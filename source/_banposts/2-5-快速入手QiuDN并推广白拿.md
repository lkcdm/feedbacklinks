---
title: 快速入手QiuDN并推广白拿
abbrlink: 2024/06/03/qiucdn
date: 2024/06/03 03:42:00
updated: 2024/06/03 03:42:00
tags:
- CDN
- 公益
- 福利
categories:
- 其他内容
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/848319.webp
description: 通过为我们宣传来获取相对的余额奖励，同时帮助我们更好的发展和升级扩展，甚至做到白拿防护加速！
swiper_index: 99
businesscard: true
---

# 先言

最近，我的项目：[QiuDN-丘盾防护CDN系统 ](https://www.qiudcdn.cn/)已经整改完毕

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/3odi7f.png)

目前节点也上满，开启了付费模式试运营，虽然添加了付费模式，但是**公益套餐依旧存在**，不过进行了一些调整；

例如：

- 流量减少至100G
- 带宽限制至15Mbps
- Websocket不可用
- 自定义端口不可用
- 子域名限制：10个
- 站点数限制：3个

***无奈之举，这是为了长久运营的策略，不过您依然可以享有公益套餐，亦或者选择付费内容，不贵，但是够用\***

> 为了让更多人所知QiuDN丘盾CDN，我们开启推介计划，同时简单教程如何的去使用QiuDN！

# 推介计划

什么是推介计划？

**通过邀请现有用户推荐新用户或客户来使用服务，从而获得奖励或优惠**

## 通过平台

在平台上发布有关于QiuDN的宣传、使用、接入教程等文章、视频等

优秀例子：[QiuDN：新手友好的公益CDN-CSDN博客](https://blog.csdn.net/xiaozhu1314520/article/details/139366128?ops_request_misc=%7B%22request%5Fid%22%3A%22171735370316800186517941%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fall.%22%7D&request_id=171735370316800186517941&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-139366128-null-null.142^v100^pc_search_result_base3&utm_term=qiudn&spm=1018.2226.3001.4187)

## 通过教程

在平台或自己博客等中编写教程中加入关于QiuDN的使用，教程等，合理插入而不能违反平台规则

模仿例子：[[真|保姆级\]搭建MineBBS同款](https://koxiuqiu.cn/2024/05/27/1716722508619)

## 其他方式

或者是其他古怪方式，后续只需证明证据即可，只要不要违规即可！

# 获取奖励

完成编写文章/视频等后，回到本文下方留下你的留言；请使用本站的**短链生成**进行回复，否则不会进行审核！

{% link 快速短链生成, https://url.notlifemc.top/home, https://imgse.koxiuqiu.cn/i/2024/07/10/7cdx72.png %}

> **禁止违规链接，上报处理！**

如何留言？

审核通过后进行给予！

```
推介计划奖励获取申请：你的链接/视频链接/图片证明/友联页面
我的注册邮箱：XXX
```

#### 📑发表文章/教程（1~30余额）

在B站、CSDN、知乎等平台发布有关的安利/教程等文章

题材包括但不限于【搭建教程】【使用评测】【免费领取】等，并图文并茂

#### 🪐网站友链（1~5余额）

在您的网站附加"本站由提供丘盾CDN加速/云存储服务"的友情链接

> 后续开放提现！

# 丘盾入手教程

进入正题，让我们着手准备实操接入CDN

## 添加站点

首先，确认你的站点是否正常运转，检查端口是否开放正确，如果正常，前往丘盾控制台注册账户：[QiuDN (qiudcdn.cn)](https://panel.qiudcdn.cn/#/register)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/49ntpe.png)

注册完成后，先获取订单/套餐，否则无法进行操作，如果是博客等非盈利可申请专属永久免费(或者开试用)：[为博客站点提供免费CDN](https://koxiuqiu.cn/2024/04/06/qiudn)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/4afu1r.png)

然后点击站点→添加站点→选择订单→填写域名→添加源站→填写服务器IP即可完成初步创建

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/52sace.png)

找到自己的站点，点击管理进入管理面板

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/53kckc.png)

找到解析值，到域名DNS服务器添加解析，如果是二级域名则是把主机名@记录换成你的二级域名前缀(例如我的就是panel)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/545rrf.png)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/55u5e0.png)

## 配置WAF

创建好站点后，同时还需要调整策略，否则你套了CDN也是照样被打穿服务器

我们点击WAF配置，进入配置，如下图进行自行调配

> 如果你的站点API被请求等特殊需求，又懒得配置，直接无脑开启人机即可完成！
>
> ![img](https://imgse.koxiuqiu.cn/i/2024/06/03/56ldnt.png)

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/59iv3c.png)

## 配置SSL/HTTPS

如果你有证书，亦或者是没有，想开启https安全访问，让网站安全

### 个人有证书

前往证书，添加即可

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/5ap151.png)

### 个人无证书

可前往站点管理面板，SSL管理直接申请

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/5b4y4n.png)

### 启用SLL|HTTPS

如图配置即可，特殊需求自行调整，如有更新保存记得点击更新保存

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/5bsbr7.png)

## 一些小问题

### 不断重定向

检查一下回源问题，假设wp出现此情况，请在源站服务器也开启SSL支持，并调整回源为HTTPS模式，更新

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/5d0kw5.png)

### 访问报错502

检查你的源站是否高载无法回源，或者是程序是多少端口并调整回源端口，例如你网站开放的是88端口则需要你调整88端口，如果是HTTPS回源方式则是调整HTTPS的回源端口

### 为什么感觉接入CDN变慢

检查你的服务器回源到CDN是否很慢，超时，并优化回源速度，比如北美服务器换成亚太服务器

### 经过itdog测速大量502/404问题

如果站点正常情况下，时不时502或个别502，可以反馈给管理员即可，如果是全部502可以进行itdog的缓慢测速进行

### 为什么cdn延迟高？

检查一下你测速是不是ping，看cdn延迟请ping而不是测速，cdn会做到全国ping全绿

### 为什么会时不时证书失效

![img](https://imgse.koxiuqiu.cn/i/2024/06/03/5g11si.png)

你的DNS服务商没有全部生效，如果你之前是没有使用CDN的情况下，耐心等待全部更新即可，DNS一般是48小时完全生效，如果你的解析TTL不是600另说

### 突然没法访问CDN控制台

你可以是被拉黑了等其他问题，使用魔法上网刷新IP或者是过一段时间访问即可！

> 更多问题欢迎反馈

> 有时候问题出自于自身请不要甩锅给CDN，同时cdn有的节点的机房遇到大量发包会丢弃，持续ping会红，这不是节点死了超时或者其他问题