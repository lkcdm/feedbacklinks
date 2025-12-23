import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang.C9Jkuu0S.js";import"./chunks/@vueuse/motion.9_vusbAC.js";import{e as m,u as h,a as y}from"./chunks/vue-router.9GlibbkL.js";import{aa as x,ak as a,ag as e,af as n,ai as l,O as b,ab as f,a1 as z}from"./framework.DDvvbER2.js";import"./app.CdIYVeNc.js";import"./chunks/dayjs.BdcnXKr1.js";import"./chunks/vue-i18n.BpMi3P6z.js";import"./chunks/pinia.PxAi84jE.js";import"./chunks/nprogress.OendXNeX.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.g2_HuaqA.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DnvbDU6J.js";import"./post.COtQKwra.js";const k=m("/posts/a10migration",async p=>JSON.parse('{"title":"MC服务器开服全解-特保姆","description":"","frontmatter":{"title":"MC服务器开服全解-特保姆","date":"2024-06-29","updated":"2024-06-29","categories":"学习笔记","cover":"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628154435161.webp","excerpt":"本文所述内容具有依赖性，可能因软硬条件不同而与预期有所差异，故请以实际为准，仅供参考。使用 CDN，一般都是出于加速和安全防护的目的，但是经常一些有意无意的配置导致源站 IP 暴露，致使 CDN 防护失效，本文将探讨如何更好地保护源站 IP 安全。下面简单描述一下常见的一些扫源站的法子，不过不局限于这些，这是博主已知的范围","tags":["服务器","我的世界","教程"]},"headers":[],"relativePath":"pages/posts/a10migration.md","lastUpdated":null}'),{lazy:(p,i)=>p.name===i.name}),N={__name:"a10migration",setup(p,{expose:i}){const{data:u}=k(),r=y(),t=h(),c=Object.assign(t.meta.frontmatter||{},u.value?.frontmatter||{});return r.currentRoute.value.data=u.value,z("valaxy:frontmatter",c),globalThis.$frontmatter=c,i({frontmatter:{title:"MC服务器开服全解-特保姆",date:"2024-06-29",updated:"2024-06-29",categories:"学习笔记",cover:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628154435161.webp",excerpt:"本文所述内容具有依赖性，可能因软硬条件不同而与预期有所差异，故请以实际为准，仅供参考。使用 CDN，一般都是出于加速和安全防护的目的，但是经常一些有意无意的配置导致源站 IP 暴露，致使 CDN 防护失效，本文将探讨如何更好地保护源站 IP 安全。下面简单描述一下常见的一些扫源站的法子，不过不局限于这些，这是博主已知的范围",tags:["服务器","我的世界","教程"]}}),(s,o)=>{const g=d;return f(),x(g,{frontmatter:b(c)},{"main-content-md":a(()=>[...o[0]||(o[0]=[n("blockquote",null,[n("p",null,"本系列为持续更新内容，如果发现有需要补充或者错误直接留言，各平台都会进行更新修复内容")],-1),n("p",null,"本文可能有亿点长，如果有写错的可以反馈一下我我去实施更新，同时也会后面挑时间去完善，这里会标注更新时间",-1),n("p",null,[n("strong",null,"最后一次更新时间为：2025|6|28|15:30 - 目前字数约：8k")],-1),n("h1",{id:"服务器选择",tabindex:"-1"},[l("服务器选择 "),n("a",{class:"header-anchor",href:"#服务器选择","aria-label":'Permalink to "服务器选择"'},"​")],-1),n("p",null,"会以萌新简单易懂的角度去说明独立IP以及NAT的区别，并且说明各自的好处以及注意事项，和不可用的环境以及问题所在",-1),n("h2",{id:"独立公网ip",tabindex:"-1"},[l("独立公网IP "),n("a",{class:"header-anchor",href:"#独立公网ip","aria-label":'Permalink to "独立公网IP"'},"​")],-1),n("p",null,"顾名思义，独立IP地址即为服务器开通单独IP，可以直接用IP进行公网访问：例如：222.187.238.202",-1),n("p",null,[l("独立IP的话，通常外面的人使用 "),n("code",null,"您的服务器IP:服务端口"),l(" 就可以访问到")],-1),n("p",null,"IP地址是由32位(bit)字组成，分成4组，每组为0-255之间的数字，比如说：222.187.238.202 就是一个IP地址。每台机器都需要一个IP来连接到Internet上进行通讯。虽然有上百亿个IP可以使用， 但是毕竟是有限的（大厂）",-1),n("p",null,"那么有什么用呢？",-1),n("p",null,"用于我的世界服务器，他可以让你直接不用去单独分配端口，用什么端口就用什么，例如我的世界服务器默认的端口是25565，所以你就可以直接连接服务器的地址就是IP:25565",-1),n("p",null,"并且独立IP，在国内也可以享有一些高防IP，用于防御DDOS攻击等",-1),n("h2",{id:"nat模式",tabindex:"-1"},[l("NAT模式 "),n("a",{class:"header-anchor",href:"#nat模式","aria-label":'Permalink to "NAT模式"'},"​")],-1),n("p",null,"NAT模式就是你的服务器处于同一网络IP环境下，属于共享IP，多人的去用一个IP，这种共享IP有一个坏处就是，有一个人遭受攻击等问题，就会波联到一群人，而且端口不能自定义，内网和外网的端口不是一致的，这个IP的外网端口被他人创建使用的话你就不能再次创建使用，例如我开放内网25565，外网端口是11451，如果11451已经被创建了你就不能使用只能创建11452或者其他的端口",-1),n("p",null,"对于共享IP，我们需要设定一条NAT规则，这样就可以让外部的链接可以访问本地服务器上的服务。",-1),n("blockquote",null,[n("p",null,"如果不懂，可以跳过，不需要完全理解后续也会图文操作")],-1),n("h1",{id:"系统的选择",tabindex:"-1"},[l("系统的选择 "),n("a",{class:"header-anchor",href:"#系统的选择","aria-label":'Permalink to "系统的选择"'},"​")],-1),n("p",null,[l("以我懂的方面来说，我的世界服务器支持Windows以及Linux系统，个人推荐萌新可以去选择Windows系统，相对于Linux更简单，当然，Linux也可以直接使用一键部署面板系统来进行网页操作，甚至是"),n("s",null,"Docker"),l("容器（被和谐）")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628154711220.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h1",{id:"服务器核心",tabindex:"-1"},[l("服务器核心 "),n("a",{class:"header-anchor",href:"#服务器核心","aria-label":'Permalink to "服务器核心"'},"​")],-1),n("p",null,"服务器核心分为很多种",-1),n("h2",{id:"原版服核心",tabindex:"-1"},[l("原版服核心 "),n("a",{class:"header-anchor",href:"#原版服核心","aria-label":'Permalink to "原版服核心"'},"​")],-1),n("p",null,"1、官方原版服核心：",-1),n("blockquote",null,[n("p",null,"最原始的服务器核心，不能加任何元素附属，比如插件模组这些")],-1),n("h2",{id:"插件服核心",tabindex:"-1"},[l("插件服核心 "),n("a",{class:"header-anchor",href:"#插件服核心","aria-label":'Permalink to "插件服核心"'},"​")],-1),n("p",null,"1、Spigot核心：",-1),n("p",null,[n("a",{href:"https://getbukkit.org/download/spigot/",target:"_blank",rel:"noreferrer"},"https://getbukkit.org/download/spigot/")],-1),n("p",null,"2、Paper核心【优化】:",-1),n("p",null,[n("a",{href:"https://papermc.io/downloads/paper/",target:"_blank",rel:"noreferrer"},"https://papermc.io/downloads/paper/")],-1),n("p",null,"3、Akarin核心【多线程】：",-1),n("p",null,[n("a",{href:"https://github.com/Akarin-project/Akarin/",target:"_blank",rel:"noreferrer"},"https://github.com/Akarin-project/Akarin/")],-1),n("blockquote",null,[n("p",null,"可以加插件等扩展，如果想做小游戏或者有趣的原版生存服务器可以尝试")],-1),n("h2",{id:"模组服核心",tabindex:"-1"},[l("模组服核心 "),n("a",{class:"header-anchor",href:"#模组服核心","aria-label":'Permalink to "模组服核心"'},"​")],-1),n("p",null,"1、Fabric核心：",-1),n("p",null,[n("a",{href:"https://fabricmc.net/",target:"_blank",rel:"noreferrer"},"https://fabricmc.net/")],-1),n("p",null,"2、Forge核心：",-1),n("p",null,[n("a",{href:"https://files.minecraftforge.net/net/minecraftforge/forge/",target:"_blank",rel:"noreferrer"},"https://files.minecraftforge.net/net/minecraftforge/forge/")],-1),n("blockquote",null,[n("p",null,"可以加模组等扩展，不过对于服务器性能有一定要求")],-1),n("h2",{id:"插件模组服核心",tabindex:"-1"},[l("插件模组服核心 "),n("a",{class:"header-anchor",href:"#插件模组服核心","aria-label":'Permalink to "插件模组服核心"'},"​")],-1),n("p",null,"1、Mohist核心：",-1),n("p",null,[n("a",{href:"https://mohistmc.com/",target:"_blank",rel:"noreferrer"},"https://mohistmc.com/")],-1),n("p",null,"2、CatServer核心：",-1),n("p",null,[n("a",{href:"https://github.com/Luohuayu/CatServer/tree/1.12.2",target:"_blank",rel:"noreferrer"},"https://github.com/Luohuayu/CatServer/tree/1.12.2")],-1),n("blockquote",null,[n("p",null,"插件模组都可以加，对于服务器性能相对较高，同时混合端BUG也可能比其他的多")],-1),n("h2",{id:"基岩服核心",tabindex:"-1"},[l("基岩服核心 "),n("a",{class:"header-anchor",href:"#基岩服核心","aria-label":'Permalink to "基岩服核心"'},"​")],-1),n("p",null,"1、Bedrock Server核心【原版】：",-1),n("p",null,[n("a",{href:"https://www.minebbs.com/bds/",target:"_blank",rel:"noreferrer"},"https://www.minebbs.com/bds/")],-1),n("p",null,"2、LiteLoaderBDS核心【插件】：",-1),n("p",null,[n("a",{href:"https://github.com/LiteLDev/LiteLoaderBDS/releases",target:"_blank",rel:"noreferrer"},"https://github.com/LiteLDev/LiteLoaderBDS/releases")],-1),n("p",null,"3、NukkitX核心",-1),n("p",null,[n("a",{href:"https://cloudburstmc.org/articles/",target:"_blank",rel:"noreferrer"},"https://cloudburstmc.org/articles/")],-1),n("blockquote",null,[n("p",null,"基岩端的一些服务器核心，")],-1),n("h2",{id:"服务器核心下载",tabindex:"-1"},[l("服务器核心下载 "),n("a",{class:"header-anchor",href:"#服务器核心下载","aria-label":'Permalink to "服务器核心下载"'},"​")],-1),n("p",null,[n("a",{href:"https://www.fastmirror.net/#/home",target:"_blank",rel:"noreferrer"},"https://www.fastmirror.net/#/home")],-1),n("p",null,[n("a",{href:"https://mcres.cn/",target:"_blank",rel:"noreferrer"},"灵依资源站 | 一个网站下载所有MC开服资源 (mcres.cn)")],-1),n("p",null,"大致也可以分为",-1),n("ul",null,[n("li",null,"原版端"),n("li",null,"插件端"),n("li",null,"Mod端"),n("li",null,"混合端"),n("li",null,"代理端"),n("li",null,"…")],-1),n("h1",{id:"开始实操",tabindex:"-1"},[l("开始实操 "),n("a",{class:"header-anchor",href:"#开始实操","aria-label":'Permalink to "开始实操"'},"​")],-1),n("p",null,"废话也不多说了，直接开始实操，如果有什么需要前面补充的可以留言给我我会进行更新修补",-1),n("h2",{id:"准备服务器",tabindex:"-1"},[l("准备服务器 "),n("a",{class:"header-anchor",href:"#准备服务器","aria-label":'Permalink to "准备服务器"'},"​")],-1),n("p",null,"开我的世界服务器，服务器CPU自然是单核性能高更好，目前有6款CPU型号去选择，一般5900X是比较普遍性的一个选择，无论是混合服务器还是插件服务器都有相对不错的表现但是需求不高玩个生存或者小插件其实可以选择Gold 6146或者E5 2666v3",-1),n("p",null,"关于配置选择，类似生电服务器多人服务器，则是可以选择内存拉高点,期间发现TPS降低则是配置不够，或者是你加了奇怪的东西导致优化差劲",-1),n("blockquote",null,[n("p",null,"什么是TPS？它是指Minecraft中的每秒刻数，MC服务器表现不错的情况下是20-19TPS，如果18TPS也可以接受，但是低于18的话你可能要考虑升级服务器配置或者是优化服务端")],-1),n("p",null,"对于独立公网和NAT的选择，下面的写作都会写两个视角去说明，不用担心",-1),n("h2",{id:"连接服务器windows",tabindex:"-1"},[l("连接服务器Windows "),n("a",{class:"header-anchor",href:"#连接服务器windows","aria-label":'Permalink to "连接服务器Windows"'},"​")],-1),n("p",null,"两种方案",-1),n("h3",{id:"指令打开",tabindex:"-1"},[l("指令打开 "),n("a",{class:"header-anchor",href:"#指令打开","aria-label":'Permalink to "指令打开"'},"​")],-1),n("p",null,[l("win键+R打开运行窗口，输入"),n("code",null,"mstsc")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628154852090.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628154902955.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h3",{id:"搜索打开",tabindex:"-1"},[l("搜索打开 "),n("a",{class:"header-anchor",href:"#搜索打开","aria-label":'Permalink to "搜索打开"'},"​")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155035810.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h3",{id:"nat模式-1",tabindex:"-1"},[l("NAT模式 "),n("a",{class:"header-anchor",href:"#nat模式-1","aria-label":'Permalink to "NAT模式"'},"​")],-1),n("p",null,"进入服务器管理面板，右边就有一个NAT的控制台，Windows远程控制端口一般是3389，如果没有开放就创建一个就行，内网端口填3389外网端口一般自己会生成",-1),n("h3",{id:"独立公网ip模式",tabindex:"-1"},[l("独立公网IP模式 "),n("a",{class:"header-anchor",href:"#独立公网ip模式","aria-label":'Permalink to "独立公网IP模式"'},"​")],-1),n("p",null,"直接输入IP，不用NAT这么麻烦，一般默认防火墙全开端口全开放（腾讯云阿里云要去开安全组）",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155239469.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h2",{id:"连接服务器linux",tabindex:"-1"},[l("连接服务器Linux "),n("a",{class:"header-anchor",href:"#连接服务器linux","aria-label":'Permalink to "连接服务器Linux"'},"​")],-1),n("p",null,"可以下载SSH连接工具连接，这里推荐Xterminal",-1),n("p",null,[n("a",{href:"https://www.xterminal.cn/",target:"_blank",rel:"noreferrer"},"https://www.xterminal.cn/")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155308407.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"这里注意端口，如果是独立公网直接输入IP忽视就行，默认一般22，如果是NAT则是需要自行开放22端口，如图",-1),n("p",null,"然后连接端口就改成对应的外网端口",-1),n("blockquote",null,[n("p",null,"下面开始创建MC服务器")],-1),n("h1",{id:"windows篇-部署mc服",tabindex:"-1"},[l("Windows篇-部署MC服 "),n("a",{class:"header-anchor",href:"#windows篇-部署mc服","aria-label":'Permalink to "Windows篇-部署MC服"'},"​")],-1),n("h2",{id:"java篇",tabindex:"-1"},[l("JAVA篇 "),n("a",{class:"header-anchor",href:"#java篇","aria-label":'Permalink to "JAVA篇"'},"​")],-1),n("p",null,"对于JAVA，我的世界服务器主要吃单核性能（高版本以及对多核进行处理并且有核心进行优化），所以说可以选择一些高U配置服务器",-1),n("h3",{id:"主要",tabindex:"-1"},[l("主要 "),n("a",{class:"header-anchor",href:"#主要","aria-label":'Permalink to "主要"'},"​")],-1),n("h4",{id:"下载核心",tabindex:"-1"},[l("下载核心 "),n("a",{class:"header-anchor",href:"#下载核心","aria-label":'Permalink to "下载核心"'},"​")],-1),n("p",null,"先写一下主要的开启部署流程，这里先准备下素材",-1),n("ul",null,[n("li",null,"服务器jar核心"),n("li",null,"Java环境"),n("li",null,"启动脚本"),n("li",null,"基本配置")],-1),n("p",null,"这里下载你要的版本，我自己有1.12.2版本的核心就不用最新版本了看你要玩什么版本（不在详细说明官方核心，官方核心写完脚本启动就直接玩了）",-1),n("p",null,[n("a",{href:"https://mohistmc.com/",target:"_blank",rel:"noreferrer"},"https://mohistmc.com/")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155407300.png",alt:"|566pxx147px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155415017.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155423464.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155430773.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("等待下载完成，这里下载完了就把核心改名成"),n("code",null,"server.jar"),l(" 你也可以不改直接用")],-1),n("p",null,"然后按照正常复制文本一样，直接复制到服务器（当然你服务器上游览器下载也没问题）",-1),n("h4",{id:"编写脚本",tabindex:"-1"},[l("编写脚本 "),n("a",{class:"header-anchor",href:"#编写脚本","aria-label":'Permalink to "编写脚本"'},"​")],-1),n("p",null,"然后创建一个文件夹，把jar核心文件丢进去，然后创建一个文本，把他改成你要的名字.bat，改成bat后缀",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155532730.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155543290.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"如果你没后缀这个显示就开一下显示",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155606063.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后编写一个简单的启动脚本",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155614784.png",alt:"|566pxx70px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"@ECHO OFF")]),l(`
`),n("span",{class:"line"},[n("span",null,'"C:\\Program Files\\Java\\dragonwell_8\\bin\\java.exe" -Xmx4G -Xms4G -jar server.jar')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"%0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"脚本解析：",-1),n("ul",null,[n("li",null,'"C:\\Program Files\\Java\\dragonwell_8\\bin\\java.exe"')],-1),n("blockquote",null,[n("p",null,"Java版本的选择根据你MC服务器核心的版本，这里演示后面换成了1.12.2MC服务器版本，所以说用的是Java8")],-1),n("blockquote",null,[n("p",null,"从1.12（17w13a）开始，运行Minecraft的最低要求是Java 8。"),n("p",null,"从1.17（21w19a）开始，运行Minecraft的最低要求是Java 16。"),n("p",null,"从1.18（1.18-pre2）开始，运行Minecraft的最低要求是Java 17。"),n("p",null,"从1.20.5（24w14a）开始，运行Minecraft的最低要求是Java 21，且操作系统要求为64位。")],-1),n("ul",null,[n("li",null,"-Xmx4G -Xms4G")],-1),n("p",null,"最大内存和最小内存，看你服务器配置有多少，一般一样就行，不过MC服务器10G就差不多够用了生电服另说",-1),n("ul",null,[n("li",null,"-jar server.jar")],-1),n("p",null,"jar核心文件的名字，这里要填写完整",-1),n("ul",null,[n("li",null,"%0")],-1),n("p",null,"循环脚本，你可以理解服务器出错或者关闭后自动开启服务器，可不加",-1),n("p",null,"双击启动等待下载服务器文件完全",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155730425.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"出现同意协议直接输入true就行",-1),n("blockquote",null,[n("p",null,[l("或者是关闭窗口修改协议文件false修改成true，有的是修改文件，文件叫："),n("strong",null,"eula.txt")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155739770.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155753438.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"当出现help提示就说明服务器已经开启完毕了，我这个核心汉化了，有的核心是英文不过道理一样都是看到help就是开启完毕",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155820550.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h4",{id:"连接服务器",tabindex:"-1"},[l("连接服务器 "),n("a",{class:"header-anchor",href:"#连接服务器","aria-label":'Permalink to "连接服务器"'},"​")],-1),n("p",null,"服务器管理控制台，添加一个端口，内网端口MC默认是25565",-1),n("p",null,"然后回到客户端，CTRL+V粘贴地址即可",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155911123.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155918240.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h4",{id:"服务器配置",tabindex:"-1"},[l("服务器配置 "),n("a",{class:"header-anchor",href:"#服务器配置","aria-label":'Permalink to "服务器配置"'},"​")],-1),n("p",null,[l("找到"),n("code",null,"server.properties"),l(" 文件，右键编辑或者n++打开（现在推荐N - - ）")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628155927389.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"这里就放出简单的翻译",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#设置监听服务器的端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"generator-settings=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#用于自定义超平坦世界的生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"force-gamemode=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家加入服务器时强制变成默认游戏模式")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"allow-nether=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否开启地狱世界(关闭后删除将不会生成地狱世界)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enforce-whitelist=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#在服务器上强制执行白名单。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"gamemode=survival")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置玩家的游戏模式")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"broadcast-console-to-ops=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#*给op发送控制台信息?")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-query=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否开启GameSpy4协议服务器监听器，用于获取服务器信息，建议不要修改")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"player-idle-timeout=0")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#当进入AFK模式,在规定时间内T出服务器,设置成0为不T出服务器")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"difficulty=easy")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置游戏的难度（peaceful(0)=和平，easy(1)=简单，normal(2)=普通，hard(3)=困难）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"broadcast-rcon-to-ops=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#*允许远程连接控制台给op发送信息?")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-monsters=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否生成怪物")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"op-permission-level=4")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设定OP的权限等级")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#1 - OP可以无视重生点保护")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#2 - OP可以使用 /clear、/gamemode、/tp 等等命令，可编辑命令方块")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#3 - OP可以使用 /ban、/deop、/kick 以及 /op 命令")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#4 - OP可以使用 /stop 命令")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"pvp=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否可以PVP")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"snooper-enabled=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#一旦启用，将允许服务端定期发送统计数据到http://snoop.minecraft.net 7.")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-type=default")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#确定地图所生成的类型")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#DEFAULT - 标准世界")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#FLAT - 超平坦世界")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#LARGEBIOMES - 预设世界，但所有生态系都更大（仅快照12w19a，或正式版1.3之后可用）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#AMPLIFIED - 预设世界，但世界生成高度提高（仅快照13w36a，或正式版1.7.2之后可用）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#CUSTOMIZED - 自快照14w21b以来，服务器也支持自定义地形。使用方法是在generator-settings贴上代码`")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"hardcore=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#极限模式（启用后，玩家死后会被服务器封禁）。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-command-block=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否启用命令方块")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"network-compression-threshold=256")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#默认会允许n-1字节的数据包正常发送, 如果数据包为 n 字节或更大时会进行压缩。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"所以，更低的数值会使得更多的数据包被压缩，但是如果被压缩的数据包字节太小将会得不偿失。")]),l(`
`),n("span",{class:"line"},[n("span",null,"#-1 - 永久禁用数据包压缩")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#0 - 压缩全部数据包")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#(建议在64-1500)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-players=20")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#最大玩家数")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#在ops.ym中设置你要突破人数限制的OP下的bypassesPlayerLimit选项为true即可（默认值为false）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#这意味着OP不需要在服务器人满时等待玩家离开再加入，")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-world-size=29999984")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置世界边界的最大半径值，单位为方块。通过成功执行的命令能把世界边界设置得更大，")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#但不会超过这里设置的最大方块限制。如果设置的 max-world-size 超过默认值的大小，那将不会起任何效果。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#例如：")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置 max-world-size 为 1000 将会有 2000x2000 的地图边界。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置 max-world-size 为 4000 将会有 8000x8000 的地图边界。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#自定义世界边界指令/worldborder在1.8加入")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"resource-pack-sha1=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#资源包的SHA-1值，必须为小写十六进制")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function-permission-level=2")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#用于控制函数拥有的权限等级。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"rcon.port=25575")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置远程访问的端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-port=25565")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置服务器的IPv4端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-ip=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#将服务器与一个特定IP绑定。建议留空")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#留空，或是填入你想让服务器绑定的域名。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-npcs=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#决定是否生成村民")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"allow-flight=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#允许玩家在安装添加飞行功能的mod前提下在生存模式下飞行。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-name=world")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#主世界名称")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"view-distance=10")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置服务端传送给客户端的区块量 (范围3-15)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#减小此数值可有效缓解卡顿")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"resource-pack=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#可输入指向一个资源包的URI。玩家可选择是否使用该资源包")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-animals=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#动物是否可以生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"white-list=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#服务器的白名单，OP无须加入白名单")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"rcon.password=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#远程访问密码")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"generate-structures=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#定义是否在生成世界时生成结构（如村庄）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"online-mode=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#线上模式是否开启 (即正版模式)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-build-height=256")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家在游戏中能够建造的最大高度")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-seed=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#世界种子")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"prevent-proxy-connections=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#如果开启服务器发送的和Mojang的验证服务器的ISP/AS不一样将会被踢出")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#开启后禁止使用VPN(虚拟专用网络或代理)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"use-native-transport=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否使用针对Linux平台的数据包收发优化，此选项仅会在Linux平台下生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"motd=A Minecraft Server")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家客户端的多人游戏服务器列表中显示的服务器信息，显示于名称下方。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#中文需转码")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#(部分服务端不需要转码也可以直接使用)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#彩色符号不是&而是转码后的§ \\u00A7 (同上)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-rcon=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否允许远程访问服务器控制台。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h4",{id:"基础指令",tabindex:"-1"},[l("基础指令 "),n("a",{class:"header-anchor",href:"#基础指令","aria-label":'Permalink to "基础指令"'},"​")],-1),n("p",null,[n("strong",null,"op 玩家ID - 给予玩家管理员")],-1),n("p",null,[n("strong",null,"stop - 关闭服务器")],-1),n("h3",{id:"如何使用域名连接",tabindex:"-1"},[l("如何使用域名连接？ "),n("a",{class:"header-anchor",href:"#如何使用域名连接","aria-label":'Permalink to "如何使用域名连接？"'},"​")],-1),n("p",null,[l("首先你得注册一个域名；"),n("a",{href:"https://buy.cloud.tencent.com/domain",target:"_blank",rel:"noreferrer"},"域名注册购买_域名注册选购 - 腾讯云")],-1),n("p",null,[n("code",null,"_minecraft._tcp.mc"),l(" 最后面的MC就是最前，这里是mc，那么就是mc.你的域名")],-1),n("p",null,[n("code",null,"5 0 25565 154.44.8.83."),l(" 中"),n("code",null,"154.44.8.83"),l(" 是服务器IP，如果你是独立公网直接填写即可，25565则是端口，如果是NAT，拿雨云举例子就是这样输入："),n("code",null,"5 0 外网端口 x.rainplay.cn"),l(" 其中，x.rainplay.cn就是雨云开放的NAT端口域名，看你服务器给的是什么，有的是h.rainplay.cn什么什么的")],-1),n("p",null,"然后记录类型选择SRV，保存确认解析即可，600TTL则是等待10分种DNS刷新",-1),n("blockquote",null,[n("p",null,[l("这里我的域名是notlifemc.top，那么就是连接是"),n("code",null,"mc.notlifemc.top")])],-1),n("h3",{id:"插件篇",tabindex:"-1"},[l("插件篇 "),n("a",{class:"header-anchor",href:"#插件篇","aria-label":'Permalink to "插件篇"'},"​")],-1),n("p",null,"上面已经详细说明了如何开启服务器，那么就简单说明一下关于插件方面的一些知识",-1),n("blockquote",null,[n("p",null,"需要服务器核心支持添加插件")],-1),n("h4",{id:"插件文件夹",tabindex:"-1"},[l("插件文件夹 "),n("a",{class:"header-anchor",href:"#插件文件夹","aria-label":'Permalink to "插件文件夹"'},"​")],-1),n("p",null,[l("首先在根目录找到"),n("code",null,"plugins"),l(" 文件夹，打开，这里就是放插件的地方，我们尝试丢一个插件jar文件进去，这里找了一个清理掉落物的插件")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160039117.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后回到启动脚本，这时候发现他加载插件了",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160049432.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"再输入stop指令关闭，这时候就可以发现他多了一个对应文件名字的文件夹(没有说明插件不能加载或者错误插件)",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160058572.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("打开它就可以找到一个"),n("code",null,"config.yml"),l(" 的文件，依旧右键n++打开")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160107778.png",alt:"|566pxx198px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"这时候就可以进行插件配置了",-1),n("blockquote",null,[n("p",null,[l("也有的插件免配置所以说不生成文件夹，看你的插件的配置手册如何去进一步配置，大差不差都是"),n("code",null,"config.yml"),l(" 文件夹，也有插件是需要配置其他文件")])],-1),n("p",null,[l("例如语言配置文件"),n("code",null,"lang.yml"),l("：")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160120244.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h3",{id:"模组篇",tabindex:"-1"},[l("模组篇 "),n("a",{class:"header-anchor",href:"#模组篇","aria-label":'Permalink to "模组篇"'},"​")],-1),n("p",null,[l("模组就是MOD，在服务器根目录找到"),n("code",null,"mods"),l("文件夹，安装正常给客户端加mod即可；")],-1),n("blockquote",null,[n("p",null,"需要服务器核心支持添加MOD，或者是自行给核心加Forge（新手不推荐）")],-1),n("p",null,"但是不是说什么mod都要客户端加了服务器也加，比如一些辅助和视觉类的mod服务器则不能加，轻则不加载，重则崩服，若是中文百科下载的模组则一般都有标注",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160129364.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("blockquote",null,[n("p",null,"MOD和插件一起加叫做混合服，混合服务器多少都存在bug比如说启动有一堆红字，但是如果不影响正常服务器运作，没有特殊需求可以直接忽视即可！")],-1),n("h2",{id:"基岩篇",tabindex:"-1"},[l("基岩篇 "),n("a",{class:"header-anchor",href:"#基岩篇","aria-label":'Permalink to "基岩篇"'},"​")],-1),n("p",null,"Java和基岩不同，基岩分为电脑端和手机端，是可以做到手机和电脑玩家一起游玩，只要版本号相同",-1),n("blockquote",null,[n("p",null,"纠正一个错误，很多人认为Java是电脑版而基岩是手机版，其实上不是")],-1),n("h3",{id:"nukkitx核心",tabindex:"-1"},[l("NukkitX核心 "),n("a",{class:"header-anchor",href:"#nukkitx核心","aria-label":'Permalink to "NukkitX核心"'},"​")],-1),n("p",null,"NukkitX核心的架构就十分像Java版本服务器文件架构，都是plugins和world文件夹，所以说开服方法、加插件都基本一致",-1),n("h3",{id:"bedrock-server核心【原版】",tabindex:"-1"},[l("Bedrock Server核心【原版】 "),n("a",{class:"header-anchor",href:"#bedrock-server核心【原版】","aria-label":'Permalink to "Bedrock Server核心【原版】"'},"​")],-1),n("p",null,[n("a",{href:"https://www.minebbs.com/bds/",target:"_blank",rel:"noreferrer"},"https://www.minebbs.com/bds/")],-1),n("p",null,"这里前往云盘下载整合好的服务端",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160139093.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("blockquote",null,[n("p",null,[l("也丢后面的云盘链接中了"),n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160149535.png",alt:"|50%xauto"})])],-1),n("p",null,"解压到服务器，智能解压",-1),n("p",null,[l("点击"),n("code",null,"bedrock_server.exe"),l(" 文件即可完成开服，基岩服务器默认是19132端口")],-1),n("p",null,"NAT就开放一下外网端口，然后输入IP（雨云NAT是域名）+外网端口即可，如果是独立IP则是IP正常输入你的IP，端口客户端默认帮你填写19132直接连接",-1),n("h3",{id:"liteloaderbds核心【插件】",tabindex:"-1"},[l("LiteLoaderBDS核心【插件】 "),n("a",{class:"header-anchor",href:"#liteloaderbds核心【插件】","aria-label":'Permalink to "LiteLoaderBDS核心【插件】"'},"​")],-1),n("p",null,[n("a",{href:"https://github.com/LiteLDev/LiteLoaderBDS/releases",target:"_blank",rel:"noreferrer"},"https://github.com/LiteLDev/LiteLoaderBDS/releases")],-1),n("p",null,"记得安一下VC库，不然乱码",-1),n("p",null,[n("a",{href:"https://ipv4wp.axzzz.top:9503/s/AEJFw",target:"_blank",rel:"noreferrer"},"VC_redist.x64.exe - Axzzz云盘")],-1),n("p",null,"BDS性能要求（需要根据服务器情况加以判断，此处仅供参考）： 1-2人（指的是同时在线人数）：CPU主频2.3Ghz，内存2-4GB 3-5人：CPU主频2.5Ghz，内存4-6GB 6-10人：CPU主频3Ghz（例如E5-2667v2），内存4-8GB",-1),n("blockquote",null,[n("p",null,"当初给我朋友开BDS服务器TPS就一直卡死，可能Windows运行不太好网上的人不用Windows开的可以尝试其他办法")],-1),n("p",null,[l("然后前往这个项目，下载该版本的 "),n("code",null,"levilamina-windows-x64.zip"),l(" 文件")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160211264.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后分别下载最新版本的 PeEditor.exe 和 PreLoader.dll 文件",-1),n("p",null,[n("a",{href:"https://github.com/LiteLDev/PeEditor/releases",target:"_blank",rel:"noreferrer"},"https://github.com/LiteLDev/PeEditor/releases")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160227166.png",alt:"|566pxx179px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[n("a",{href:"https://github.com/LiteLDev/PreLoader/releases",target:"_blank",rel:"noreferrer"},"https://github.com/LiteLDev/PreLoader/releases")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160305463.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("三项云盘高速下载："),n("a",{href:"https://ipv4wp.axzzz.top:9503/s/nAOIJ?path=%2F",target:"_blank",rel:"noreferrer"},"我的世界BDS扩展插件 - Axzzz云盘")],-1),n("h4",{id:"安装步骤",tabindex:"-1"},[n("strong",null,"安装步骤"),l(),n("a",{class:"header-anchor",href:"#安装步骤","aria-label":'Permalink to "**安装步骤**"'},"​")],-1),n("p",null,[n("strong",null,"复制粘贴到服务器中，先记得安装VC库安装失败则可能安装过了")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160321423.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h5",{id:"_1-解压-bds-文件",tabindex:"-1"},[n("strong",null,"1. 解压 BDS 文件"),l(),n("a",{class:"header-anchor",href:"#_1-解压-bds-文件","aria-label":'Permalink to "**1. 解压 BDS 文件**"'},"​")],-1),n("ul",null,[n("li",null,[l("将你在第二步中下载的 "),n("code",null,"bedrock-server-<version>.zip"),l(" 解压到一个新的、空的文件夹中。")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160336586.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h5",{id:"_2-移动-peeditor-和-preloader",tabindex:"-1"},[n("strong",null,"2. 移动 PEEDITOR 和 PRELOADER"),l(),n("a",{class:"header-anchor",href:"#_2-移动-peeditor-和-preloader","aria-label":'Permalink to "**2. 移动 PEEDITOR 和 PRELOADER**"'},"​")],-1),n("ul",null,[n("li",null,[l("把 "),n("code",null,"PeEditor.exe"),l(" 和 "),n("code",null,"PreLoader.dll"),l(" 移到解压后的 BDS 文件夹中。")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160346454.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("ul",null,[n("li",null,[l("确保这些文件与 "),n("code",null,"bedrock_server.exe"),l(" 在同一目录下。")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160355130.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h5",{id:"_3-添加-levilamina-文件",tabindex:"-1"},[n("strong",null,"3. 添加 LEVILAMINA 文件"),l(),n("a",{class:"header-anchor",href:"#_3-添加-levilamina-文件","aria-label":'Permalink to "**3. 添加 LEVILAMINA 文件**"'},"​")],-1),n("ul",null,[n("li",null,[l("解压你在第一步中下载的 "),n("code",null,"levilamina-windows-x64.zip"),l("。")]),n("li",null,[l("从中提取 "),n("code",null,"bin/LeviLamina.dll"),l(" 和 "),n("code",null,"bin/LeviLamina.pdb"),l(" 文件。")]),n("li",null,[l("将这些文件也移动到 BDS 文件夹中，与 "),n("code",null,"bedrock_server.exe"),l(" 放在同一目录下。")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160403955.png",alt:"|566pxx170px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("h5",{id:"_4-运行-peeditor",tabindex:"-1"},[n("strong",null,"4. 运行 PEEDITOR"),l(),n("a",{class:"header-anchor",href:"#_4-运行-peeditor","aria-label":'Permalink to "**4. 运行 PEEDITOR**"'},"​")],-1),n("ul",null,[n("li",null,[l("双击 "),n("code",null,"PeEditor.exe"),l(" 并等待其执行完毕。")])],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160413759.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("ul",null,[n("li",null,[n("p",null,[l("执行完毕后，应该在文件夹中看到一个新的 "),n("code",null,"bedrock_server_mod.exe"),l(" 文件。")])]),n("li",null,[n("p",null,[l("原来的 "),n("code",null,"bedrock_server.exe"),l(" 将被重命名为 "),n("code",null,"bedrock_server.exe.bak"),l("。")])])],-1),n("p",null,[l("完成以上步骤后，LeviLamina 就安装好了。你可以通过双击 "),n("code",null,"bedrock_server_mod.exe"),l(" 来启动服务端。")],-1),n("blockquote",null,[n("p",null,"behavior_packs&resource_packs 服务器行为包/资源包文件夹，一般不使用"),n("p",null,"definitions 服务器核心文件夹，若非必要勿动"),n("p",null,"development_xxx_packs 用于加载一些development下加载的资源包"),n("p",null,"logs log文件，包括崩服数据文件"),n("p",null,"worlds 世界文件夹")],-1),n("p",null,"然后你要什么插件就下载什么插件，插件都有使用教程",-1),n("p",null,"或者是懒人包：",-1),n("p",null,[n("a",{href:"https://www.123pan.com/s/ehVFjv-2oGKA.html",target:"_blank",rel:"noreferrer"},"https://www.123pan.com/s/ehVFjv-2oGKA.html")],-1),n("h2",{id:"面板开服",tabindex:"-1"},[l("面板开服 "),n("a",{class:"header-anchor",href:"#面板开服","aria-label":'Permalink to "面板开服"'},"​")],-1),n("p",null,"前往mcsmanager的官网，找到压缩包下载zip压缩包，复制到服务器上",-1),n("p",null,[n("a",{href:"https://docs.mcsmanager.com/zh_cn/#windows-%E5%AE%89%E8%A3%85",target:"_blank",rel:"noreferrer"},"https://docs.mcsmanager.com/zh_cn/#windows-安装")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160437079.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160444890.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"双击启动，然后点更多信息继续仍旧运行",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160454211.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后就会自动弹出两个窗口，自动部署后会自己打开一个网页，这就是面板",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160502296.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"点击首次使用，它会一步步的教你如何去部署",-1),n("h1",{id:"linux篇-部署mc服",tabindex:"-1"},[l("Linux篇-部署MC服 "),n("a",{class:"header-anchor",href:"#linux篇-部署mc服","aria-label":'Permalink to "Linux篇-部署MC服"'},"​")],-1),n("p",null,"这里依旧使用mcsmanager的提供的面板管理",-1),n("h2",{id:"一键部署面板",tabindex:"-1"},[l("一键部署面板 "),n("a",{class:"header-anchor",href:"#一键部署面板","aria-label":'Permalink to "一键部署面板"'},"​")],-1),n("p",null,[l("SSH链接，软件上面推荐"),n("a",{href:"https://www.xterminal.cn/",target:"_blank",rel:"noreferrer"},"https://www.xterminal.cn/")],-1),n("p",null,"然后开放22端口（独立公网无需，直接填写IP然后输入密码连接）",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160519528.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后创建后点击连接即可完成连接服务器",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160548974.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160556854.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"输入指令进行一键自动安装，耐心等待安装完成",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'sudo su -c "wget -qO- https://script.mcsmanager.com/setup_cn.sh | bash"')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160611980.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"重新出现#号就说明安装成功，同时终端也反馈出端口面板信息",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160750812.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"回到控制台，开放23333端口（独立IP则不需要，直接访问网站：IP:23333）",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160821101.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"完成基础的配置，创建管理员，完成！",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160830651.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"这是相关指令：",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"# 先启动面板守护进程。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 这是用于进程控制，终端管理的服务进程。")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl start mcsm-daemon.service")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 再启动面板 Web 服务。")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 这是用来实现支持网页访问和用户管理的服务。")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl start mcsm-web.service")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 重启面板命令")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl restart mcsm-daemon.service")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl restart mcsm-web.service")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"# 停止面板命令")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl stop mcsm-web.service")]),l(`
`),n("span",{class:"line"},[n("span",null,"systemctl stop mcsm-daemon.service")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("h2",{id:"java实例服务器例子-一键部署",tabindex:"-1"},[l("Java实例服务器例子-一键部署 "),n("a",{class:"header-anchor",href:"#java实例服务器例子-一键部署","aria-label":'Permalink to "Java实例服务器例子-一键部署"'},"​")],-1),n("p",null,"这里点击首次使用",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160911605.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"点击你要开的服务器类型，这里选择Java",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160921247.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后点击快速部署",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160929898.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("选择你要开的，这里选择原版的服务器 "),n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160939295.png",alt:"|100%x100%"})],-1),n("p",null,"出现初始化失败节点不存在就刷新然后点一下看看节点有没有然后重新下载",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628160950756.png",alt:"|561pxx161px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161001177.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"如果出现无法连接节点就是说端口没开放，去开放节点然后修改节点配置即可",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161010552.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161020768.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161030111.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161038546.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"如果启动提示错误，这是因为你没安装Java环境，这里简单部署下Java环境就行",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161050559.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161102679.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161112706.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"和前面的Windows方案一样，改成你的Java路径就行了",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"@ECHO OFF")]),l(`
`),n("span",{class:"line"},[n("span",null,'"C:\\Program Files\\Java\\dragonwell_8\\bin\\java.exe" -Xmx4G -Xms4G -jar server.jar')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"%0")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("blockquote",null,[n("p",null,"这只是例子，可以通过xterminalSSH上传")],-1),n("p",null,"找到你要的JAVA版本",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161152784.png",alt:"|566pxx117px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161203854.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[n("a",{href:"https://www.azul.com/downloads/",target:"_blank",rel:"noreferrer"},"https://www.azul.com/downloads/")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161219583.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("然后输入指令"),n("code",null,"yum install -y unzip"),l("安装uzip再进行解压（Centos系统）")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161230810.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[l("然后找到这个目录，安装我这里目录就是："),n("code",null,"/root/unzip_202406291904_zulu22/zulu22.30.13-ca-jdk22.0.1-linux_x64/bin/java")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161244507.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"修改后，完成启动",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161304610.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161316419.png",alt:"|562pxx167px",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161329626.png",alt:"|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"然后安装之前流程一样，控制面板开放25565端口（如果你没调配置文件的话）",-1),n("p",null,"再放一次MC配置说明",-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"#设置监听服务器的端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"generator-settings=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#用于自定义超平坦世界的生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"force-gamemode=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家加入服务器时强制变成默认游戏模式")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"allow-nether=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否开启地狱世界(关闭后删除将不会生成地狱世界)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enforce-whitelist=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#在服务器上强制执行白名单。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"gamemode=survival")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置玩家的游戏模式")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"broadcast-console-to-ops=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#*给op发送控制台信息?")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-query=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否开启GameSpy4协议服务器监听器，用于获取服务器信息，建议不要修改")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"player-idle-timeout=0")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#当进入AFK模式,在规定时间内T出服务器,设置成0为不T出服务器")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"difficulty=easy")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置游戏的难度（peaceful(0)=和平，easy(1)=简单，normal(2)=普通，hard(3)=困难）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"broadcast-rcon-to-ops=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#*允许远程连接控制台给op发送信息?")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-monsters=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否生成怪物")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"op-permission-level=4")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设定OP的权限等级")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#1 - OP可以无视重生点保护")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#2 - OP可以使用 /clear、/gamemode、/tp 等等命令，可编辑命令方块")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#3 - OP可以使用 /ban、/deop、/kick 以及 /op 命令")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#4 - OP可以使用 /stop 命令")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"pvp=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否可以PVP")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"snooper-enabled=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#一旦启用，将允许服务端定期发送统计数据到http://snoop.minecraft.net 7.")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-type=default")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#确定地图所生成的类型")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#DEFAULT - 标准世界")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#FLAT - 超平坦世界")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#LARGEBIOMES - 预设世界，但所有生态系都更大（仅快照12w19a，或正式版1.3之后可用）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#AMPLIFIED - 预设世界，但世界生成高度提高（仅快照13w36a，或正式版1.7.2之后可用）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#CUSTOMIZED - 自快照14w21b以来，服务器也支持自定义地形。使用方法是在generator-settings贴上代码`")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"hardcore=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#极限模式（启用后，玩家死后会被服务器封禁）。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-command-block=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否启用命令方块")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"network-compression-threshold=256")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#默认会允许n-1字节的数据包正常发送, 如果数据包为 n 字节或更大时会进行压缩。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"所以，更低的数值会使得更多的数据包被压缩，但是如果被压缩的数据包字节太小将会得不偿失。")]),l(`
`),n("span",{class:"line"},[n("span",null,"#-1 - 永久禁用数据包压缩")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#0 - 压缩全部数据包")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#(建议在64-1500)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-players=20")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#最大玩家数")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#在ops.ym中设置你要突破人数限制的OP下的bypassesPlayerLimit选项为true即可（默认值为false）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#这意味着OP不需要在服务器人满时等待玩家离开再加入，")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-world-size=29999984")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置世界边界的最大半径值，单位为方块。通过成功执行的命令能把世界边界设置得更大，")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#但不会超过这里设置的最大方块限制。如果设置的 max-world-size 超过默认值的大小，那将不会起任何效果。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#例如：")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置 max-world-size 为 1000 将会有 2000x2000 的地图边界。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置 max-world-size 为 4000 将会有 8000x8000 的地图边界。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#自定义世界边界指令/worldborder在1.8加入")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"resource-pack-sha1=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#资源包的SHA-1值，必须为小写十六进制")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function-permission-level=2")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#用于控制函数拥有的权限等级。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"rcon.port=25575")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置远程访问的端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-port=25565")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置服务器的IPv4端口号")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"server-ip=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#将服务器与一个特定IP绑定。建议留空")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#留空，或是填入你想让服务器绑定的域名。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-npcs=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#决定是否生成村民")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"allow-flight=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#允许玩家在安装添加飞行功能的mod前提下在生存模式下飞行。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-name=world")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#主世界名称")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"view-distance=10")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#设置服务端传送给客户端的区块量 (范围3-15)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#减小此数值可有效缓解卡顿")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"resource-pack=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#可输入指向一个资源包的URI。玩家可选择是否使用该资源包")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"spawn-animals=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#动物是否可以生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"white-list=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#服务器的白名单，OP无须加入白名单")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"rcon.password=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#远程访问密码")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"generate-structures=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#定义是否在生成世界时生成结构（如村庄）")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"online-mode=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#线上模式是否开启 (即正版模式)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"max-build-height=256")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家在游戏中能够建造的最大高度")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"level-seed=")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#世界种子")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"prevent-proxy-connections=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#如果开启服务器发送的和Mojang的验证服务器的ISP/AS不一样将会被踢出")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#开启后禁止使用VPN(虚拟专用网络或代理)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"use-native-transport=true")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否使用针对Linux平台的数据包收发优化，此选项仅会在Linux平台下生成")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"motd=A Minecraft Server")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#玩家客户端的多人游戏服务器列表中显示的服务器信息，显示于名称下方。")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#中文需转码")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#(部分服务端不需要转码也可以直接使用)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#彩色符号不是&而是转码后的§ \\u00A7 (同上)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"enable-rcon=false")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"#是否允许远程访问服务器控制台。")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("blockquote",null,[n("p",null,"本人对于这个面板以及对Linux部署服务器并不熟悉，有什么缺点还请指点")],-1),n("h1",{id:"末尾",tabindex:"-1"},[l("末尾 "),n("a",{class:"header-anchor",href:"#末尾","aria-label":'Permalink to "末尾"'},"​")],-1),n("p",null,"就先简单写到这里，如果需要补充或者请求可以留言给我，我会发布的平台全部进行更新文章，持续更新，同时有纰漏也欢迎留言反馈",-1),n("blockquote",null,[n("p",null,"后面也会抽时间来完善一下文章，本文还是有很多遗漏的细节没完善清楚，废话文学只是为了萌新懂")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20250628161358977.png",alt:"看完一定要收藏，邀顾客好评的话术_评价_xxxx_表情|100%x100%",loading:"lazy",decoding:"async",class:"lazy"})],-1)])]),"main-header":a(()=>[e(s.$slots,"main-header")]),"main-header-after":a(()=>[e(s.$slots,"main-header-after")]),"main-nav":a(()=>[e(s.$slots,"main-nav")]),"main-content-before":a(()=>[e(s.$slots,"main-content-before")]),"main-content":a(()=>[e(s.$slots,"main-content")]),"main-content-after":a(()=>[e(s.$slots,"main-content-after")]),"main-nav-before":a(()=>[e(s.$slots,"main-nav-before")]),"main-nav-after":a(()=>[e(s.$slots,"main-nav-after")]),comment:a(()=>[e(s.$slots,"comment")]),footer:a(()=>[e(s.$slots,"footer")]),aside:a(()=>[e(s.$slots,"aside")]),"aside-custom":a(()=>[e(s.$slots,"aside-custom")]),default:a(()=>[e(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{N as default,k as usePageData};
