---
title: 利用CDN和CF实现全球加速
abbrlink: 2024/06/13/1718249721361
date: 2024/06/13 01:23:00
updated: 2024/06/13 01:23:00
tags:
- CDN
- 教程
- Cloudflare
categories:
- 学习笔记
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/399543.webp
businesscard: true
---

挺久没更新了，小水一下

往往我们需要使用CDN进行网站加速、防护，但是很多CDN是对标一个地区进行优化，例如亚太CDN，那么对于北美等其他地域则是优化不太友好，同时遇到攻击如果屏蔽海外，也可能会出现一些问题，**然后就利用使用双CDN加速，国内用户走国内CDN加速，国外用户走CloudflareCDN加速**

![image|690x378](https://imgse.koxiuqiu.cn/i/2024/07/07/s6uktj.png)


> **Cloudflare** ： 毫无疑问，这家CDN提供商是地表最强的，他们提供免费CDN、免备案CDN和高防御CDN服务。在国内，他们秒杀一线厂商

> **国内资本CDN** ：主流的CDN提供商主要专注于优化国内线路，提供按量、按次、按时段等不同收费方式。除了基础CDN服务外，还提供各种额外收费项目。优点在于提供快速可靠的服务

# 添加境外解析

一句概括，如果你已经配置了站点，下滑找到Cloudflare 名称服务器，记录NS值、然后前往你的域名运营商添加记录。

![image|690x291](https://imgse.koxiuqiu.cn/i/2024/07/07/s750zr.png)


> 你猜猜我为什么要放语言在旁边

记录类型选**NS** ，主机记录填写博客前缀如：**www** ，解析线路选**境外** ，记录值填写**上一步记下的NS值** ，确认无误后点击**确认** 即可。

![image|690x291](https://imgse.koxiuqiu.cn/i/2024/07/07/s77qnh.png)


回到Cloudflare的**DNS** 页面，添加一个**A记录** ，同样输入博客名前缀**www** ，IP地址填写**主机地址** ，代理状态的小云朵一定要**点亮为橙色** ，至此博客国外访问加速已经设置完毕。

![image|690x66](https://imgse.koxiuqiu.cn/i/2024/07/07/s7alzx.png)


# 添加默认解析

顾名思义，就是正常的去添加你的CDN，解析线路选择默认即可，首先在你的CDN添加好站点

![image|690x299](https://imgse.koxiuqiu.cn/i/2024/07/07/s7zy1w.png)


设置好防御策略，然后前往域名添加CNAME解析即可

![image|690x30](https://imgse.koxiuqiu.cn/i/2024/07/07/s8266e.png)