---
title: 搭建MineBBS同款
abbrlink: 2024/05/27/1716722508619
date: 2024/05/27 01:23:00
updated: 2024/05/27 01:23:00
tags:
- 宝塔
- 教程
- 雨云
- 服务器
categories:
- 建站教程
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/749768.webp
businesscard: true
---

# 阅读须知

出现用词错误等可以留言，我会修改，例如我有时候会把`CTRL`打成`CRTL` 同时我也不是特别专业的人，我只是把自己的经历写了出来，不要把我和某些大神/GPT进行比较！

阅读期间请合理利用搜索引擎：

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/1sz0hi.jpg)

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/1t5rvu.jpg)

本文有大量图片。阅读时候可以缓慢查阅，图片储存是我自己的公益图床项目，最近用户突增服务器带宽压力上升导致影响速度，后续会进行优化

**发现图片失效及时留言！**

本教程为特保姆级教程，一步到位，详细介绍建站的全部过程以及各种注意事项，如果需要请耐心阅读！！！

> 本文为本人第一章最详细文章

# 成果预览

> 有的人可能买了官方的什么什么的，因为官方貌似有两样式，这里请劳烦大神们不要再此问关于：如何把侧栏改成顶栏或者顶栏改成侧栏，就是下图的导航，他给你弄好了你不用非要研究咋改的，改什么代码要自己改代码的；这么厉害就自己去开发一个程序或者二改，而不是在这问无意义的事情！
>
> ![img](https://imgse.koxiuqiu.cn/i/2024/05/26/vx51c9.png)
>
> ![img](https://imgse.koxiuqiu.cn/i/2024/05/26/vxbs4d.png)

## 论坛首页

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/vt93m5.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/w0847o.png)

## 用户中心

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/x6xw8m.png)

## 注册账户

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/x73iy2.png)

## 发布主题

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/x7ixcy.png)

## 后台演示

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/10zhy9z.png)

## 演示站点

[notlifebbs - 简洁社区 (notlifemc.top)](https://forum.notlifemc.top)

# 开始准备

首先，简单描述一下需要的材料：

- 源码程序
- 源码主题
- 源码汉化
- 一台服务器
- 一个域名
- 一个SSL证书
- CDN防护

## 获取源码

这里我使用的是Axzzz云盘，[Axzzz云盘 | Axzzz Cloud](https://tiao.axzzz.top/)

> **支持直链下载·分享文件·支持Webdav,永不限速,自费运营**

获取源码全部文件：[XenForo - Axzzz云盘](https://ipv4wp.axzzz.top:9503/s/adgUy)

依次下载后，放在一个文件夹方便使用；

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/xff8dt.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/xg2zwd.png)

## 选择服务器

这里可以自由选择，如果你最求低成本，那么可以了解一下阿里和腾讯云的一些新用户活动：

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/xhuz2w.png)

[云服务器最新特惠_爆款产品新老同享续费同价-阿里云 (aliyun.com)](https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=zt7luvq9)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/xj09sj.png)

[云产品免费体验馆_云产品免费试用_个人云产品试用-腾讯云 (tencent.com)](https://curl.qcloud.com/rphGPeZk)

以及一些其他的厂家：

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/xknk1k.png)

[雨云 - 新一代云服务提供商 (rainyun.com)](https://www.rainyun.com/vip5r_)

**以雨云服务器供应商为例子**

注册账号，登录，进入[购买云服务器 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/rcs/buy)选择配置

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/112yfhw.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/11359qv.png)

选好配置之后，可以先进行试用后再决定是否续费，不过，是试用续费是不支持7天无理由退款的，得是直接正价购入！

> 实际上也不清楚试用是否支持续费，或者是积分产品，因为我没有这样操作过只是看到有用户说明反馈此事！

## 注册域名

首先，先前往[域名服务 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/domain/list/registration)选择你想要的一个域名，例如mcbbsnet，亦或者是指定要什么后缀，后缀例子下翻可以看得见

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/116lfw6.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/116p7mj.png)

填入好实名信息，后面可以通过我的模板管理

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/1175pr4.png)

全部完事之后就可以下方直接注册，记得看账号有没有足够的余额噢

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/117u9cq.png)

耐心等待域名批下来，雨云目前域名对接的是西部的域名，成本价注册

## SSL证书

准备好域名之后，就得准备一个SSL证书，这可以让你的网站加密处理信息，更安全的同时启用了https访问[SSL 证书中心 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/ssl/list/free-ssl)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/1191pnv.png)

如果你是雨云注册的域名可以直接自动解析验证，也就是说不用理会他，就签发证书了，如果你是其他平台注册的域名则是需要DNS验证，填入你域名然后申请会给你解析，前往域名解析控制台添加解析即可验证，验证完成签发了就可以删除解析

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/11a9lyg.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/11atl6p.png)

添加完成后立即验证即可，等待签发就可以，如果没刷新你可以查看一下你证书列表，说不定就有了只是卡了[SSL 证书中心 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/ssl/list/ssl-order)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/11bswtz.png)

# 部署面板

常见的面板相信都有所耳闻，1P面板，BT宝塔面板

[1Panel - 现代化、开源的 Linux 服务器运维管理面板](https://1panel.cn/)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/121gfpf.png)

[宝塔面板 - 简单好用的Linux/Windows服务器运维管理面板 (bt.cn)](https://www.bt.cn/new/index.html)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/1227wvl.png)

> 本教程基于宝塔运维面板为基础

**Centos安装脚本**

```
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

**Ubuntu/Deepin安装脚本**

```
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```

**Debian安装脚本**

```
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh ed8484bec
```

**万能安装脚本**

```
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```

**国产龙芯架构安装脚本（其他CPU请勿使用）**

```
wget -O install_panel.sh https://download.bt.cn/install/0/loongarch64/loongarch64_install_panel.sh && bash install_panel.sh ed8484bec
```

## SSH链接服务器

这里使用的SSH软件是[Xterminal - 更好用的开发工具，但不止于(SSH/控制台/More)](https://www.xterminal.cn/)界面好看，小白入手快，无需基础

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/123temk.png)

下载后安装完成，打开软件，把弹窗全关了，直接看右上角的加号添加服务器（可能提示你设置什么什么密码，设置就是了不影响后面操作）

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/124xyy4.png)

进入[我的云服务器 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/rcs/list)找到你服务器，点击管理进入管理面板，然后下翻找到服务器信息，点击复制然后回到SSH软件CTRL+V粘贴即可

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/127ed6d.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/127l05h.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/129a69h.png)

然后CTRL+V粘贴上面的一键安装宝塔面板的脚本，直接安装，有提示Y/N输入y然后回车就确认安装，如果一下子脚本中断或者下载太慢了可以直接系统重装重新开始就行，这是最暴力解决方式

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12ak737.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12az2j5.png)

等待安装完成！先进行下一步准备操作

# 接入CDN防护

前往：[为博客站点提供免费CDN | 朽丘博 (koxiuqiu.cn)](https://koxiuqiu.cn/2024/04/06/qiudn) 就可以免费申请CDN使用，永久免费！官网是：[QiuDN-丘盾防护CDN系统 (qiudcdn.cn)](https://qiudcdn.cn/) 用公益套餐即可！![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12dc1th.gif)

然后注册账号，申请好免费服务开始添加站点！

## 添加站点

点击我的站点，进入站点管理界面

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12eq4r8.png)

然后点击添加新增，输入信息

> 这里简单说明域名主域和二级域名，如果你想要类似于abc.域名.com，那么到时候添加的域名解析将会是把主机名的@直接解析改成abc主机名如果到时候要访问的域名是直接域名.com则是主机名输入@即可，www同理

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12fpmf5.png)

然后前往证书管理添加证书，前往[SSL 证书中心 | 雨云 (rainyun.com)](https://app.rainyun.com/apps/ssl/list/ssl-order)复制粘贴证书直接确认即可

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12i5ouk.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12j9rl3.png)

回到我的站点，然后点击编辑进入站点管理，下翻进行配置https

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12kgqov.png)

然后进入安全配置，可以按照下图配置，或者看CDN公告，如果你的服务器性能不是很强大可以把数值小，一般50足以

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12lbbrj.png)

回到基本配置，把记录值复制下来，前往雨云域名添加解析，如果是其他平台的域名也是同理

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12ly9b8.png)

可以看到我的主机名是forum，那么到时候访问的域名就是forum.你的域名.后缀，例如我的forum.notlifemc.top，然后TTL选择600(十分钟)

> 这里域名要保证和CDN控制台一样，例如我的forum.notlifemc.top那么CDN控制台的域名就是forum.notlifemc.top![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12o6ubw.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12mgm0b.png)

自此，CDN套加速以及防御就解决了（防止泄漏源站IP，不要A记录，A记录你的IP差不多就要换了详细说明保护IP教程前往：[使用CDN后如何保护源站不泄露 | 朽丘博 (koxiuqiu.cn)](https://koxiuqiu.cn/2024/05/12/1715500241877)）

# 配置宝塔

回到SSH软件，这时候可以看见宝塔已经部署完毕了，这时候我们可以进行二次配置，我们输入bt回车即可

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12r83jp.png)

用户名就是相当于你登录软件啊游戏啊的账号，密码就是密码（

可以自己设置，然后输入`bt 28` 或者是`bt `然后输入`28`回车可以改入口，比如上上面的图片给的入口是（切记访问外网）外网面板地址: `https://154.44.25.181:26700/4b9f4eba`，我们就可以改`/4b9f4eba`这个数据，比如`/bt12wawa`，那么到时候访问面板就是`https://154.44.25.181:26700/bt12wawa`

如图访问即可，然后输入信息

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12u369u.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12ukpju.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12urhjc.png)

进入后需要绑定宝塔账号，直接注册一个然后回到面板绑定就行，切记，宝塔官网不是你的宝塔！不要再问这种拿着宝塔官网问我”我的宝塔呢怎么管理“的问题了！

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12vqvi5.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12vtgne.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12vxxfb.png)

进入后可能会卡着，等待一下即可，他会弹出一键部署环境，耐心等！

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12wc0lr.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/26/12y4m72.png)

等待安装即可！

## 创建站点

一图概括，点击网站，添加，输入域名，选择PHP版本7.2，确认创建

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/ct5r1.png)

点击目录进入网站目录，然后把源码上传

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/dfxty.png)

直接把文件拖进去就行

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/eajyf.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/ege5m.png)

然后右键解压`xenforo-2.2.2.zip`，然后再直接右键解压`UI.X.zip`主题文件

主题；然后进入`/upload`目录，把文件剪切，之后复制到网站目录

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/fmq01.png)

[![img](https://imgse.koxiuqiu.cn/i/2024/05/27/gcst3.png)](https://imgse.koxiuqiu.cn/i/2024/05/27/gcst3.png)

取消勾选就是覆盖，然后验证，确认

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/gpvrw.png)

然后访问域名，进行安装即可！

解压发现`xenforo-2.2.2.zip` 也是这样的安装上面也是一样的操作

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/js2q7.png)

## 安装程序

访问域名会自动跳转安装页面，点击按钮就可以进行安装了

[![img](https://imgse.koxiuqiu.cn/i/2024/05/27/mpved.png)](https://imgse.koxiuqiu.cn/i/2024/05/27/mpved.png)

> 假设上面报错图片，就是`proc_open` 、`popen`
>
> 会出现报错，那是需要解除禁用需要的PHP函数，前往管理添加即可，如图：
>
> ![img](https://imgse.koxiuqiu.cn/i/2024/05/27/naoql.png)

如网站没有正常刷新，请重启php服务，再次重试即可成功！点击按键下一步

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/o3zo5.png)

## 设置数据库

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/qejmo.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/ptzpv.png)

然后下一步安装就行，安装过程比较漫长，请耐心等待。一直按按钮到最后

## 设置管理员

即可进入到管理后台

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/r2q95.png)

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/rfaog.png)

# 对Xenforo进行汉化

进入后台，登录后，后台设置在：Appearance=>language

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/td39t.png)我这里汉化了就不多重新操作，放图给大伙对照

右上角点击这个，然后进行导入

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/ulku6.png)

然后选好文件，直接导入，记得选择跳过选项

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/v54z3.png)

然后就导入成功了，如果没使用可以选中后把默认和使用都调整中文，把英文删了，发现后台没汉化可以退出登录重新登录后台即可！

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/w7y4z.png)

然后就慢慢进行配置吧！这是缓慢的进度！

# 使用主题

先导入插件，按照导入主题`UI.X.zip` 一样，上传解压剪切覆盖，然后前往插件看看是否成功使用

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/xft7k.png)

然后点击风格模板，导入模板

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/xnbam.png)

把主题文件在电脑解压，进入主题文件夹找到文件后导入！

![img](https://imgse.koxiuqiu.cn/i/2024/05/27/yqn1z.png)

然后耐心等待即可，成功后按照语言一样选中然后默认勾选，可以把默认主题删了

# 结语

自此，程序部署完成，不多说上面，如果需要补充留言，有错误或者用词，英文错误可以指出，我会加以修改，而不是吐槽