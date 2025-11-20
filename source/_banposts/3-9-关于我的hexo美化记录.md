---
title: 博客魔改笔记记录
abbrlink: 2024/8/23/1
date: 2024/8/23 2:00:00
updated: 2024/8/23 2:00:00
tags:
- 记录
- hexo
- 魔改记录
categories:
- 学习笔记
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/08/28/011252.webp
businesscard: true
---

# 前提

我的博客框架是基于静态博客[Hexo](https://hexo.io/zh-cn/)程序，一个非常简洁强大的博客框架

![image-20240822165001947](https://koimg.cn-sy1.rains3.com/2024/08/22/437948.webp)

主题使用的是[ 🦋 A Hexo Theme: Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)，基于最新版本使用

> （实际上旧版本更好点，很多教程基于旧版本所以导致我很多都不适配）

# 正文

实际上，洪哥已经专门的去整合过了，但是有的教程链接没法打开，或有些教程有的萌新是真的没法看懂(大多数都是技能树没点齐全导致自己没头脑)

{% link 从零开始 | Butterfly主题美化教程 , 这个网站是通过一些基础的教程可以让你入门Butterfly魔改，也就是定制你自己的Butterfly主题 , https://butterfly.zhheo.com/create.html %}

列出我使用的美化文章，方便使用后续更新修改，仅供记录

## 右键美化

{% link butterfly博客自定义右键菜单升级版 | Ariasakaの小窝 , 参考了Dorakika的原版右键菜单，并在此基础上进行了一些改进 , https://blog.yaria.top/posts/11eb4aac/#%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9 %}

![311d89838830a29b7f16fbef476d6cea](https://koimg.cn-sy1.rains3.com/2024/08/22/285941.webp)

![image-20240822220835019](https://koimg.cn-sy1.rains3.com/2024/08/22/899640.webp)

不多做补充，文章写的十分详细，包块需要在什么文件添加什么代码/操作

## 页脚翻页时钟计时

{% link 页脚翻页时钟计时 | Akilarの糖果屋 , `Butterfly`主题`v3.4.0`及其以后版本基本已经实现完全去jquery化，而本帖有使用到jquery，不想再次引入js的可以考虑使用站内的原生JS计时器, https://akilar.top/posts/192af77f/ %}

![image-20240822221256615](https://koimg.cn-sy1.rains3.com/2024/08/22/343566.webp)

## 添加侧边栏电子钟

{% link 给butterfly添加侧边栏电子钟 | 安知鱼 , `Butterfly`主题`v3.4.0`及其以后版本基本已经实现完全去jquery化，而本帖有使用到jquery，不想再次引入js的可以考虑使用站内的原生JS计时器, https://blog.anheyu.com/posts/fc18.html %}

{% link 添加侧边栏电子钟 | Akilarの糖果屋 , 插件与安知鱼的配置冲突，自行选择, https://akilar.top/posts/4e39cf4a/ %}

后续可以通过配置文件进行开关，本站是已经弃用了这个模块

![56db3eeabbfe300019950bbbfbf44631](https://koimg.cn-sy1.rains3.com/2024/08/22/212842.webp)

## 外挂标签

{% link 外挂标签| Akilarの糖果屋 , 如有使用了本站的外挂标签插件的读者，请确保自己的配置内容为最新, https://akilar.top/posts/615e2dec/ %}

什么是外挂标签？简单说就是用于各种模块组件，例如：

![image-20240822225746794](https://koimg.cn-sy1.rains3.com/2024/08/22/387787.webp)

![image-20240823013546259](https://koimg.cn-sy1.rains3.com/2024/08/23/311317.webp)

## 动态分类条

{% link 动态分类条 | 张洪Heo , Butterfly魔改：动态分类条，可以根据页面变化而改变的分类列表展示方式, https://blog.zhheo.com/p/bc61964d.html %}

这里我修改了洪哥的代码才实现的适配，不做修改可能会导致下边没用空隙贴着文章，或有字体显示不平均，大家可以自行修改即可，不懂多问问

![image-20240823014222952](https://koimg.cn-sy1.rains3.com/2024/08/23/115223.webp)

## 首页置顶文章

{% link 轮播手动置顶文章 | Akilarの糖果屋 , 本项目是对冰卡诺老师写的[教程：基于Butterfly主题的轮播手动置顶文章](https://zfe.space/post/11009.html)进行重构，精简了部分样式。适配pjax, https://akilar.top/posts/8e1264d1/ %}

![image-20240823015057958](https://koimg.cn-sy1.rains3.com/2024/08/23/530450.webp)

## 文章个性名片

{% link 给博客添加个性名片 | Akilarの糖果屋 , 给文章加一个储蓄卡样式的个性名片 , https://akilar.top/posts/5ff2da64/ %}

![image-20240823015419587](https://koimg.cn-sy1.rains3.com/2024/08/23/943133.webp)

![image-20240823015409454](https://koimg.cn-sy1.rains3.com/2024/08/23/915373.webp)

注意，糖果屋店长教程默认名片显示在版权信息上方，如果想像我这样调整至下方，就要把`/themes/butterfly/layout/post.pug` 文件，把店长要添加的代码调至这个地方即可

![image-20240823020005547](https://koimg.cn-sy1.rains3.com/2024/08/23/575198.webp)

## 分类条及外链卡片

要是觉得店长的外联卡片不好看，可以尝试一下柳哥的

{% link 魔改笔记七：分类条及外链卡片 | LiuShen's Blog , 由于本次魔改修改了主题内部文件，一定要注意提前备份！一定要注意提前备份！一定要注意提前备份！如果没有魔改基础建议紧跟教程 , https://blog.liushen.fun/posts/a64defb4/ %}

![image-20240823022131032](https://koimg.cn-sy1.rains3.com/2024/08/23/838208.webp)

## 末尾

目前截止至2024/8/23的修改美化了，如果有你需要的也可以做个参考，后面有空在考虑继续修改
