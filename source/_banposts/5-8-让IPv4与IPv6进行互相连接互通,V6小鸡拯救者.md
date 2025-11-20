---
title: 让IPv4与IPv6进行互相连接互通,V6小鸡拯救者
abbrlink: 2024/12y14d1
date: 2024/12/14 12:00:00
updated: 2024/12/14 12:00:00
tags:
- 记录
- 教程
- IPv4
- IPv6
- 服务器
- Linux
categories:
- 学习笔记
copyright: true
toc_number: false
cover: https://koimg.cn-sy1.rains3.com/2024/12/14/867680.webp
businesscard: true
---

IPv4 和 IPv6 是两种不同的互联网协议版本，它们之间不直接兼容。因此，一个使用 IPv4 的设备无法直接访问仅支持 IPv6的站点，同理，一个使用 IPv6 的设备无法直接访问仅支持 IPv4的站点。而当我们想将请求从IPv4地址发送到IPv6地址时，由于IPv4和IPv6过渡不兼容而无法实现。为了解决此问题，需要通过一些技术才能实现IPv4和IPv6互通。这些技术包括：双栈技术、隧道和转换三种技术。

**以下列出可行方案**

# WARP好处

> 记录：让纯v6/v4的小鸡互通支持

- 支持 chatGPT，解锁奈飞流媒体
- 避免 Google 验证码或是使用 Google 学术搜索
- 可调用 IPv4 接口，使青龙和V2P等项目能正常运行
- 由于可以双向转输数据，能做对方VPS的跳板和探针，替代 HE tunnelbroker
- 能让 IPv6 only VPS 上做的节点支持 Telegram
- IPv6 建的节点能在只支持 IPv4 的 PassWall、ShadowSocksR Plus+ 上使用

## warp 运行脚本

首次运行

```plaintext
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh [option] [lisence/url/token]
```

再次运行

```plaintext
warp [option] [lisence]
```

| [option] 变量1 变量2 | 具体动作说明                                                 |
| -------------------- | ------------------------------------------------------------ |
| h                    | 帮助                                                         |
| 4                    | 原无论任何状态 -> WARP IPv4                                  |
| 4 lisence name       | 把 WARP+ Lisence 和设备名添加进去，如 `bash menu.sh 4 N5670ljg-sS9jD334-6o6g4M9F Goodluck` |
| 6                    | 原无论任何状态 -> WARP IPv6                                  |
| d                    | 原无论任何状态 -> WARP 双栈                                  |
| o                    | WARP 开关，脚本主动判断当前状态，自动开或关                  |
| u                    | 卸载 WARP                                                    |
| n                    | 断网时，用于刷WARP网络 (WARP bug)                            |
| b                    | 升级内核、开启BBR及DD                                        |
| a                    | 免费 WARP 账户升级 WARP+                                     |
| a lisence            | 在上面基础上把 WARP+ Lisence 添加进去，如 `bash menu.sh a N5670ljg-sS9jD334-6o6g4M9F` |
| p                    | 刷 Warp+ 流量                                                |
| c                    | 安装 WARP Linux Client，开启 Socks5 代理模式                 |
| l                    | 安装 WARP Linux Client，开启 WARP 模式                       |
| c lisence            | 在上面基础上把 WARP+ Lisence 添加进去，如 `bash menu.sh c N5670ljg-sS9jD334-6o6g4M9F` |
| r                    | WARP Linux Client 开关                                       |
| v                    | 同步脚本至最新版本                                           |
| i                    | 更换 WARP IP                                                 |
| e                    | 安装 iptables + dnsmasq + ipset 分流流媒体方案               |
| w                    | 安装 WireProxy 解决方案                                      |
| y                    | WireProxy 开关                                               |
| k                    | 切换 wireguard 内核 / wireguard-go-reserved                  |
| g                    | 切换 warp 全局 / 非全局 或首次以 非全局 模式安装             |
| s                    | s 4/6/d，切换优先级 warp IPv4 / IPv6 / 默认                  |
| 其他或空值           | 菜单界面                                                     |

举例：想为 IPv4 的甲骨文添加 Warp 双栈，首次运行

```plaintext
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh d
```

刷日本 Netflix  运行

```plaintext
warp i jp
```

## warp-go 运行脚本

首次运行

```plaintext
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/warp-go.sh && bash warp-go.sh [option] [lisence]
```

再次运行

```shell
warp-go [option] [lisence]
```

| [option] 变量1 变量2 | 具体动作说明                                                 |
| -------------------- | ------------------------------------------------------------ |
| h                    | 帮助                                                         |
| 4                    | 原无论任何状态 -> WARP IPv4                                  |
| 4 lisence name       | 把 WARP+ Lisence 和设备名添加进去，如 `bash wire-go 4 N5670ljg-sS9jD334-6o6g4M9F Goodluck` |
| 6                    | 原无论任何状态 -> WARP IPv6                                  |
| d                    | 原无论任何状态 -> WARP 双栈                                  |
| o                    | warp-go 开关，脚本主动判断当前状态，自动开或关               |
| u                    | 卸载 warp-go                                                 |
| a                    | 免费 WARP 账户升级 WARP+                                     |
| a lisence name       | 在上面基础上把 WARP+ Lisence 和设备名添加进去，如 `bash menu.sh a N5670ljg-sS9jD334-6o6g4M9F Goodluck` |
| v                    | 同步脚本至最新版本                                           |
| 其他或空值           | 菜单界面                                                     |

## Cloudflare api

Cli-API 使用指南，浏览器带参数访问，或者使用 `curl` 命令可以执行 Warp API 请求，

| run 参数   | 作用描述                            | 参数                                                      | 示例                                                         |
| ---------- | ----------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
|            | 使用指南                            |                                                           | `https://www.warpapi.us.kg/`                                 |
| `register` | 注册新设备                          | `team_token（可选）`, `format（可选）`                    | `https://www.warpapi.us.kg/?run=register&team_token=<Your-Team-Token>&format=<json|yaml|client|wireguard|warp-go||clash|xray|sing-box|qrencode>` |
| `device`   | 获取特定设备的详细信息              | `device_id`, `token`                                      | `https://www.warpapi.us.kg/?run=device&device_id=<Your-Device-ID>&token=<Your-Token>` |
| `app`      | 获取客户端配置                      | `token`                                                   | `https://www.warpapi.us.kg/?run=app&token=<Your-Token>`      |
| `bind`     | 将设备绑定到帐户                    | `device_id`, `token`                                      | `https://www.warpapi.us.kg/?run=bind&device_id=<Your-Device-ID>&token=<Your-Token>` |
| `name`     | 设置设备名称                        | `device_id`, `token`, `device_name`                       | `https://www.warpapi.us.kg/?run=name&device_id=<Your-Device-ID>&token=<Your-Token>&device_name=<Your-Device-Name>` |
| `license`  | 设置设备许可证                      | `device_id`, `token`, `license`                           | `https://www.warpapi.us.kg/?run=license&device_id=<Your-Device-ID>&token=<Your-Token>&license=<Your-License>` |
| `unbind`   | 从帐户中取消绑定设备                | `device_id`, `token`                                      | `https://www.warpapi.us.kg/?run=unbind&device_id=<Your-Device-ID>&token=<Your-Token>` |
| `cancel`   | 取消设备注册                        | `device_id`, `token`                                      | `https://www.warpapi.us.kg/?run=cancel&device_id=<Your-Device-ID>&token=<Your-Token>` |
| `id`       | Client ID 与 Reserved 转换          | `convert`                                                 | `https://www.warpapi.us.kg/?run=id&convert=<4-char-string|Numbers1,Numbers2,Numbers3>` |
| `token`    | 获取 Zero Trust token               | `organization`, `email`, `code`                           | step1: `https://www.warpapi.us.kg/?organization=<Your-Organization>&email=<Your-Email>`  step2: `https://www.warpapi.us.kg/?organization=<Your-Organization>&A=<A-Value>&S=<S-Value>&N=<N-Value>&code=<Your-Code>` |
| `pluskey`  | 生成指定数量的 1923PB Warp+ license | `num（可选，默认:1，最大:6）`, `maxretry（可选，默认:3）` | `https://www.warpapi.us.kg/?run=pluskey&num=2&maxretry=5`    |
| `key`      | 生成一对 WireGuard 公私钥           | `format（可选）`                                          | `https://www.warpapi.us.kg/?run=key&format=<json|yaml>`      |
| `sum`      | 获取总计和 24 小时运行计数          |                                                           | `https://www.warpapi.us.kg/?run=sum`                         |

Shell-API 运行脚本

```plaintext
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/api.sh && bash api.sh [option]
```

| [option] 变量 | 具体动作说明                                                 |
| ------------- | ------------------------------------------------------------ |
| -h/--help     | 帮助                                                         |
| -f/--file     | 保存账户注册信息的文件，支持官方api，client，wgcf 和 warp-go ，不填则手动输入 device id 和 api token |
| -r/--register | 注册账户                                                     |
| -t/--token    | -r 注册时，使用 team token 注册，快速获取: https://web--public--warp-team-api--coia-mfs4.code.run |
| -d/--device   | 获取账户注册信息，包括 plus 流量等                           |
| -a/--app      | 获取 app 信息                                                |
| -b/--bind     | 获取绑定设备信息，包括子设备                                 |
| -n/--name     | 修改设备名称                                                 |
| -l/--license  | 修改 license                                                 |
| -u/--unbind   | 解绑设备                                                     |
| -c/--cancle   | 注销账户                                                     |
| -i/--id       | 显示 cliend id 与 reserved                                   |

## 刷 Netflix 解锁 WARP IP 的方法

- 可以用另一个通过 WARP 解锁流媒体的一键脚本: [【刷 WARP IP】 - 为 WARP 解锁流媒体而生](https://github.com/fscarmen/unlock_warp)
- 以刷 香港 hk 为例， 运行 `warp i`。建议在 screen， nohup 下后台运行
- 如果长时间仍然未刷出解锁IP，可以查查 CloudFlare 当地是否在维护调路由：https://www.cloudflarestatus.com/

## WARP socks5 或 interface 分流模板及解锁 chatGPT 的方法

<details>
    <summary> 指定网站分流到 socks5 的 xray 配置模板 (适用于 WARP Client Proxy 和 WireProxy)（点击即可展开或收起）</summary>
<br>
<p data-sourcepos="388:1-389:146">本地 socks5<a>://127.0.0.1:40000</a>
并安装 <a rel="nofollow noreferrer noopener" href="https://github.com/mack-a/v2ray-agent" data-sourcepos="389:11-389:73" target="_blank">mack-a 八合一脚本</a> 为例。编辑  <code data-sourcepos="389:95-389:143">/etc/v2ray-agent/xray/conf/10_ipv4_outbounds.json</code></p>
<div class="gl-relative markdown-code-block js-markdown-code">
<pre class="code highlight js-syntax-highlight language-plaintext white" data-sourcepos="391:1-452:3" id="code-61"><code><span lang="plaintext" class="line" id="LC1">{</span>
<span lang="plaintext" class="line" id="LC2">    "outbounds":[</span>
<span lang="plaintext" class="line" id="LC3">        {</span>
<span lang="plaintext" class="line" id="LC4">            "protocol":"freedom"</span>
<span lang="plaintext" class="line" id="LC5">        },</span>
<span lang="plaintext" class="line" id="LC6">        {</span>
<span lang="plaintext" class="line" id="LC7">            "tag":"warp",</span>
<span lang="plaintext" class="line" id="LC8">            "protocol":"socks",</span>
<span lang="plaintext" class="line" id="LC9">            "settings":{</span>
<span lang="plaintext" class="line" id="LC10">                "servers":[</span>
<span lang="plaintext" class="line" id="LC11">                    {</span>
<span lang="plaintext" class="line" id="LC12">                        "address":"127.0.0.1",</span>
<span lang="plaintext" class="line" id="LC13">                        "port":40000 // 填写你的 socks5 端口</span>
<span lang="plaintext" class="line" id="LC14">                    }</span>
<span lang="plaintext" class="line" id="LC15">                ]</span>
<span lang="plaintext" class="line" id="LC16">            }</span>
<span lang="plaintext" class="line" id="LC17">        },</span>
<span lang="plaintext" class="line" id="LC18">        {</span>
<span lang="plaintext" class="line" id="LC19">            "tag":"WARP-socks5-v4",</span>
<span lang="plaintext" class="line" id="LC20">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC21">            "settings":{</span>
<span lang="plaintext" class="line" id="LC22">                "domainStrategy":"UseIPv4"</span>
<span lang="plaintext" class="line" id="LC23">            },</span>
<span lang="plaintext" class="line" id="LC24">            "proxySettings":{</span>
<span lang="plaintext" class="line" id="LC25">                "tag":"warp"</span>
<span lang="plaintext" class="line" id="LC26">            }</span>
<span lang="plaintext" class="line" id="LC27">        },</span>
<span lang="plaintext" class="line" id="LC28">        {</span>
<span lang="plaintext" class="line" id="LC29">            "tag":"WARP-socks5-v6",</span>
<span lang="plaintext" class="line" id="LC30">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC31">            "settings":{</span>
<span lang="plaintext" class="line" id="LC32">                "domainStrategy":"UseIPv6"</span>
<span lang="plaintext" class="line" id="LC33">            },</span>
<span lang="plaintext" class="line" id="LC34">            "proxySettings":{</span>
<span lang="plaintext" class="line" id="LC35">                "tag":"warp"</span>
<span lang="plaintext" class="line" id="LC36">            }</span>
<span lang="plaintext" class="line" id="LC37">        }</span>
<span lang="plaintext" class="line" id="LC38">    ],</span>
<span lang="plaintext" class="line" id="LC39">    "routing":{</span>
<span lang="plaintext" class="line" id="LC40">        "rules":[</span>
<span lang="plaintext" class="line" id="LC41">            {</span>
<span lang="plaintext" class="line" id="LC42">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC43">                "domain":[</span>
<span lang="plaintext" class="line" id="LC44">                    "geosite:openai",</span>
<span lang="plaintext" class="line" id="LC45">                    "ip.gs"</span>
<span lang="plaintext" class="line" id="LC46">                ],</span>
<span lang="plaintext" class="line" id="LC47">                "outboundTag":"WARP-socks5-v4"</span>
<span lang="plaintext" class="line" id="LC48">            },</span>
<span lang="plaintext" class="line" id="LC49">            {</span>
<span lang="plaintext" class="line" id="LC50">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC51">                "domain":[</span>
<span lang="plaintext" class="line" id="LC52">                    "geosite:google",</span>
<span lang="plaintext" class="line" id="LC53">                    "geosite:netflix",</span>
<span lang="plaintext" class="line" id="LC54">                    "p3terx.com"</span>
<span lang="plaintext" class="line" id="LC55">                ],</span>
<span lang="plaintext" class="line" id="LC56">                "outboundTag":"WARP-socks5-v6"</span>
<span lang="plaintext" class="line" id="LC57">            }</span>
<span lang="plaintext" class="line" id="LC58">        ]</span>
<span lang="plaintext" class="line" id="LC59">    }</span>
<span lang="plaintext" class="line" id="LC60">}</span></code></pre>
<copy-code><button type="button" class="btn btn-default btn-md gl-button btn-icon has-tooltip" data-title="复制到剪贴板" aria-label="复制到剪贴板" data-clipboard-target="pre#code-61"><svg><use xlink:href="/assets/icons-8791a66659d025e0a4c801978c79a1fbd82db1d27d85f044a35728ea7cf0ae80.svg#copy-to-clipboard"></use></svg></button></copy-code>
</div>
</details>

<details>
    <summary> 指定网站分流到 "interface" 的 xray 配置模板（适用于 WARP Client Warp 和 warp / warp-go 非全局）（点击即可展开或收起）</summary>
<br>
<div class="gl-relative markdown-code-block js-markdown-code">
<pre class="code highlight js-syntax-highlight language-plaintext white" data-sourcepos="459:1-515:3" id="code-62"><code><span lang="plaintext" class="line" id="LC1">{</span>
<span lang="plaintext" class="line" id="LC2">    "outbounds":[</span>
<span lang="plaintext" class="line" id="LC3">        {</span>
<span lang="plaintext" class="line" id="LC4">            "protocol":"freedom"</span>
<span lang="plaintext" class="line" id="LC5">        },</span>
<span lang="plaintext" class="line" id="LC6">        {</span>
<span lang="plaintext" class="line" id="LC7">            "tag":"WARP-interface-v4",</span>
<span lang="plaintext" class="line" id="LC8">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC9">            "settings":{</span>
<span lang="plaintext" class="line" id="LC10">                "domainStrategy":"UseIPv4"</span>
<span lang="plaintext" class="line" id="LC11">            },</span>
<span lang="plaintext" class="line" id="LC12">            "streamSettings":{</span>
<span lang="plaintext" class="line" id="LC13">                "sockopt":{</span>
<span lang="plaintext" class="line" id="LC14">                    "interface":"CloudflareWARP", // warp 非全局模式填 warp; Client 的 Proxy 模式填 CloudflareWARP; warp-go 填 WARP</span>
<span lang="plaintext" class="line" id="LC15">                    "tcpFastOpen":true</span>
<span lang="plaintext" class="line" id="LC16">                }</span>
<span lang="plaintext" class="line" id="LC17">            }</span>
<span lang="plaintext" class="line" id="LC18">        },</span>
<span lang="plaintext" class="line" id="LC19">        {</span>
<span lang="plaintext" class="line" id="LC20">            "tag":"WARP-interface-v6",</span>
<span lang="plaintext" class="line" id="LC21">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC22">            "settings":{</span>
<span lang="plaintext" class="line" id="LC23">                "domainStrategy":"UseIPv6"</span>
<span lang="plaintext" class="line" id="LC24">            },</span>
<span lang="plaintext" class="line" id="LC25">            "streamSettings":{</span>
<span lang="plaintext" class="line" id="LC26">                "sockopt":{</span>
<span lang="plaintext" class="line" id="LC27">                    "interface":"CloudflareWARP",</span>
<span lang="plaintext" class="line" id="LC28">                    "tcpFastOpen":true</span>
<span lang="plaintext" class="line" id="LC29">                }</span>
<span lang="plaintext" class="line" id="LC30">            }</span>
<span lang="plaintext" class="line" id="LC31">        }</span>
<span lang="plaintext" class="line" id="LC32">    ],</span>
<span lang="plaintext" class="line" id="LC33">    "routing":{</span>
<span lang="plaintext" class="line" id="LC34">        "domainStrategy":"AsIs",</span>
<span lang="plaintext" class="line" id="LC35">        "rules":[</span>
<span lang="plaintext" class="line" id="LC36">            {</span>
<span lang="plaintext" class="line" id="LC37">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC38">                "domain":[</span>
<span lang="plaintext" class="line" id="LC39">                    "geosite:google",</span>
<span lang="plaintext" class="line" id="LC40">                    "geosite:openai",</span>
<span lang="plaintext" class="line" id="LC41">                    "ip.gs"</span>
<span lang="plaintext" class="line" id="LC42">                ],</span>
<span lang="plaintext" class="line" id="LC43">                "outboundTag":"WARP-interface-v4"</span>
<span lang="plaintext" class="line" id="LC44">            },</span>
<span lang="plaintext" class="line" id="LC45">            {</span>
<span lang="plaintext" class="line" id="LC46">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC47">                "domain":[</span>
<span lang="plaintext" class="line" id="LC48">                    "geosite:netflix",</span>
<span lang="plaintext" class="line" id="LC49">                    "p3terx.com"</span>
<span lang="plaintext" class="line" id="LC50">                ],</span>
<span lang="plaintext" class="line" id="LC51">                "outboundTag":"WARP-interface-v6"</span>
<span lang="plaintext" class="line" id="LC52">            }</span>
<span lang="plaintext" class="line" id="LC53">        ]</span>
<span lang="plaintext" class="line" id="LC54">    }</span>
<span lang="plaintext" class="line" id="LC55">}</span></code></pre>
<copy-code><button type="button" class="btn btn-default btn-md gl-button btn-icon has-tooltip" data-title="复制到剪贴板" aria-label="复制到剪贴板" data-clipboard-target="pre#code-62"><svg><use xlink:href="/assets/icons-8791a66659d025e0a4c801978c79a1fbd82db1d27d85f044a35728ea7cf0ae80.svg#copy-to-clipboard"></use></svg></button></copy-code>
</div>
</details>

<details>
    <summary> 通过 WARP 解锁 chatGPT 的方法（点击即可展开或收起）</summary>
<br>
<p data-sourcepos="522:1-522:204">思路是使用已经注册的 warp 做链式代理的设置，此解决方法是最轻便的，用户只要有 xray 即可。具体做法是修改 xray 配置文件的 outbound 和 routing，模板如下</p>
<div class="gl-relative markdown-code-block js-markdown-code">
<pre class="code highlight js-syntax-highlight language-plaintext white" data-sourcepos="523:1-596:3" id="code-63"><code><span lang="plaintext" class="line" id="LC1">{</span>
<span lang="plaintext" class="line" id="LC2">    "outbounds":[</span>
<span lang="plaintext" class="line" id="LC3">        {</span>
<span lang="plaintext" class="line" id="LC4">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC5">            "tag": "direct"</span>
<span lang="plaintext" class="line" id="LC6">        },</span>
<span lang="plaintext" class="line" id="LC7">        {</span>
<span lang="plaintext" class="line" id="LC8">            "protocol":"wireguard",</span>
<span lang="plaintext" class="line" id="LC9">            "settings":{</span>
<span lang="plaintext" class="line" id="LC10">                "secretKey":"YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=", // 粘贴你的 "private_key" 值</span>
<span lang="plaintext" class="line" id="LC11">                "address":[</span>
<span lang="plaintext" class="line" id="LC12">                    "172.16.0.2/32",</span>
<span lang="plaintext" class="line" id="LC13">                    "2606:4700:110:8a36:df92:102a:9602:fa18/128"</span>
<span lang="plaintext" class="line" id="LC14">                ],</span>
<span lang="plaintext" class="line" id="LC15">                "peers":[</span>
<span lang="plaintext" class="line" id="LC16">                    {</span>
<span lang="plaintext" class="line" id="LC17">                        "publicKey":"bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=",</span>
<span lang="plaintext" class="line" id="LC18">                        "allowedIPs":[</span>
<span lang="plaintext" class="line" id="LC19">                            "0.0.0.0/0",</span>
<span lang="plaintext" class="line" id="LC20">                            "::/0"</span>
<span lang="plaintext" class="line" id="LC21">                        ],</span>
<span lang="plaintext" class="line" id="LC22">                        "endpoint":"engage.cloudflareclient.com:2408" // 或填写 162.159.193.10:2408 或 [2606:4700:d0::a29f:c001]:2408</span>
<span lang="plaintext" class="line" id="LC23">                    }</span>
<span lang="plaintext" class="line" id="LC24">                ],</span>
<span lang="plaintext" class="line" id="LC25">                "reserved":[78, 135, 76], // 粘贴你的 "reserved" 值</span>
<span lang="plaintext" class="line" id="LC26">                "mtu":1280</span>
<span lang="plaintext" class="line" id="LC27">            },</span>
<span lang="plaintext" class="line" id="LC28">            "tag":"wireguard"</span>
<span lang="plaintext" class="line" id="LC29">        },</span>
<span lang="plaintext" class="line" id="LC30">        {</span>
<span lang="plaintext" class="line" id="LC31">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC32">            "settings":{</span>
<span lang="plaintext" class="line" id="LC33">                "domainStrategy":"UseIPv4"</span>
<span lang="plaintext" class="line" id="LC34">            },</span>
<span lang="plaintext" class="line" id="LC35">            "proxySettings":{</span>
<span lang="plaintext" class="line" id="LC36">                "tag":"wireguard"</span>
<span lang="plaintext" class="line" id="LC37">            },</span>
<span lang="plaintext" class="line" id="LC38">            "tag":"warp-IPv4"</span>
<span lang="plaintext" class="line" id="LC39">        },</span>
<span lang="plaintext" class="line" id="LC40">        {</span>
<span lang="plaintext" class="line" id="LC41">            "protocol":"freedom",</span>
<span lang="plaintext" class="line" id="LC42">            "settings":{</span>
<span lang="plaintext" class="line" id="LC43">                "domainStrategy":"UseIPv6"</span>
<span lang="plaintext" class="line" id="LC44">            },</span>
<span lang="plaintext" class="line" id="LC45">            "proxySettings":{</span>
<span lang="plaintext" class="line" id="LC46">                "tag":"wireguard"</span>
<span lang="plaintext" class="line" id="LC47">            },</span>
<span lang="plaintext" class="line" id="LC48">            "tag":"warp-IPv6"</span>
<span lang="plaintext" class="line" id="LC49">        }</span>
<span lang="plaintext" class="line" id="LC50">    ],</span>
<span lang="plaintext" class="line" id="LC51">    "routing":{</span>
<span lang="plaintext" class="line" id="LC52">        "domainStrategy":"AsIs",</span>
<span lang="plaintext" class="line" id="LC53">        "rules":[</span>
<span lang="plaintext" class="line" id="LC54">            {</span>
<span lang="plaintext" class="line" id="LC55">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC56">                "domain":[</span>
<span lang="plaintext" class="line" id="LC57">                    "geosite:openai",</span>
<span lang="plaintext" class="line" id="LC58">                    "ip.gs"</span>
<span lang="plaintext" class="line" id="LC59">                ],</span>
<span lang="plaintext" class="line" id="LC60">                "outboundTag":"warp-IPv4"</span>
<span lang="plaintext" class="line" id="LC61">            },</span>
<span lang="plaintext" class="line" id="LC62">            {</span>
<span lang="plaintext" class="line" id="LC63">                "type":"field",</span>
<span lang="plaintext" class="line" id="LC64">                "domain":[</span>
<span lang="plaintext" class="line" id="LC65">                    "geosite:netflix",</span>
<span lang="plaintext" class="line" id="LC66">                    "p3terx.com"</span>
<span lang="plaintext" class="line" id="LC67">                ],</span>
<span lang="plaintext" class="line" id="LC68">                "outboundTag":"warp-IPv6"</span>
<span lang="plaintext" class="line" id="LC69">            }</span>
<span lang="plaintext" class="line" id="LC70">        ]</span>
<span lang="plaintext" class="line" id="LC71">    }</span>
<span lang="plaintext" class="line" id="LC72">}</span></code></pre>
<copy-code><button type="button" class="btn btn-default btn-md gl-button btn-icon has-tooltip" data-title="复制到剪贴板" aria-label="复制到剪贴板" data-clipboard-target="pre#code-63"><svg><use xlink:href="/assets/icons-8791a66659d025e0a4c801978c79a1fbd82db1d27d85f044a35728ea7cf0ae80.svg#copy-to-clipboard"></use></svg></button></copy-code>
</div>
</details>

## WARP+ License 及 ID 获取

以下是使用WARP和Team后 Argo 2.0 的官方介绍:[Argo 2.0: Smart Routing Learns New Tricks](https://blog.cloudflare.com/argo-v2/)

引用Luminous大神原话：实际测试WARP+在访问非CF的网站速度上和免费版没有差异，只有在访问CloudFlare的站点时付费版会通过Argo类似的技术通过与目标较近的数据中心前往源站，而免费版是仅限于连接地前往源站，仅此而已。

## WARP原理

WARP是CloudFlare提供的一项基于WireGuard的网络流量安全及加速服务，能够让你通过连接到CloudFlare的边缘节点实现隐私保护及链路优化。

其连接入口为双栈（IPv4/IPv6均可），且连接后能够获取到由CF提供基于NAT的IPv4和IPv6地址，因此我们的单栈服务器可以尝试连接到WARP来获取额外的网络连通性支持。这样我们就可以让仅具有IPv6的服务器访问IPv4，也能让仅具有IPv4的服务器获得IPv6的访问能力。

- 为仅IPv6服务器添加IPv4

原理如图，IPv4的流量均被WARP网卡接管，实现了让IPv4的流量通过WARP访问外部网络。 [![img](https://user-content.gitlab-static.net/ebc3fe70379270422dbba8408c69bae5c1de253e/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353430342d31333839643032322d653563352d346562382d393635352d6639663036356533633932652e706e67)](https://user-content.gitlab-static.net/ebc3fe70379270422dbba8408c69bae5c1de253e/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353430342d31333839643032322d653563352d346562382d393635352d6639663036356533633932652e706e67)

- 为仅IPv4服务器添加IPv6

原理如图，IPv6的流量均被WARP网卡接管，实现了让IPv6的流量通过WARP访问外部网络。 [![img](https://user-content.gitlab-static.net/86794b74adb908ae1692354cbf8323589954e2e1/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353431342d30313332316230622d383837652d343364362d616436382d6137346462323063666538342e706e67)](https://user-content.gitlab-static.net/86794b74adb908ae1692354cbf8323589954e2e1/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353431342d30313332316230622d383837652d343364362d616436382d6137346462323063666538342e706e67)

- 双栈服务器置换网络

有时我们的服务器本身就是双栈的，但是由于种种原因我们可能并不想使用其中的某一种网络，这时也可以通过WARP接管其中的一部分网络连接隐藏自己的IP地址。至于这样做的目的，最大的意义是减少一些滥用严重机房出现验证码的概率；同时部分内容提供商将WARP的落地IP视为真实用户的原生IP对待，能够解除一些基于IP识别的封锁。 [![img](https://user-content.gitlab-static.net/6938d7a9e30b03aa50b562387880154de3582df4/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353431392d35303830356564362d323065612d343434302d393362342d3562636336663261636139622e706e67)](https://user-content.gitlab-static.net/6938d7a9e30b03aa50b562387880154de3582df4/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f36323730333334332f3133353733353431392d35303830356564362d323065612d343434302d393362342d3562636336663261636139622e706e67)

- 网络性能方面：内核集成＞内核模块＞wireguard-go

项目：[fscarmen / warp · GitLab](https://gitlab.com/fscarmen/warp)

# IPv6 隧道代理

> 让纯IPv4支持IPv6网络

使用服务：[Hurricane Electric 免费 IPv6 隧道代理](https://tunnelbroker.net/)

它会给命令，直接CVSSH
