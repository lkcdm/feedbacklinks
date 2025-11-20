function link(args) {
    args = args.join(' ').split(',');
    let title = args[0];
    let sitename = args[1];
    let link = args[2];

    // 定义不同域名对应的头像URL
    const avatarUrls = {
        'koxiuqiu.cn': 'https://koxiuqiu.cn/img/favicon.png',        
        'github.com': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/github.webp',
        'csdn.net': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/csdn.webp',
        'gitee.com': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/gitee.webp',
        'zhihu.com': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/zhihu.webp',
        'baidu.com': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/baidu.webp',
        'qiudcdn.cn': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/qiudn.png',
    // 友联
        'yoghurtlee.com': 'https://r2.2776655.xyz/chlorine-coder.webp',
        'zhheo.com': 'https://bu.dusays.com/2022/12/28/63ac2812183aa.png',
        'yaria.top': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/yaria.png',
        'akilar.top': 'https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg',
        'anheyu.com': 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/download.png',
        'liushen.fun': 'https://blog.liushen.fun/info/avatar.ico',
        'bsgun.cn': 'https://oss-cdn.bsgun.cn/logo/avatar.256.png',
    };
    
    // 定义白名单域名
    const whitelistDomains = [
        'koxiuqiu.cn', 'qiudcdn.cn', 'yoghurtlee.com', 'zhheo.com', 'yaria.top', 'akilar.top', 'anheyu.com', 'liushen.fun', 'qiudcdn.cn', 'bsgun.cn'
    ];

    // 获取URL的根域名
    function getRootDomain(url) {
        const hostname = new URL(url).hostname;
        const domainParts = hostname.split('.').reverse();
        if (domainParts.length > 1) {
            return domainParts[1] + '.' + domainParts[0];
        }
        return hostname;
    }

    // 根据URL获取对应的头像URL
    function getAvatarUrl(url) {
        const rootDomain = getRootDomain(url);
        for (const domain in avatarUrls) {
            if (domain.endsWith(rootDomain)) {
                return avatarUrls[domain];
            }
        }
        return 'https://cdn.koxiuqiu.cn/koxiuqiu/img/link/link.webp';  // 默认头像URL
    }

    // 检查是否在白名单中
    function isWhitelisted(url) {
        const rootDomain = getRootDomain(url);
        for (const domain of whitelistDomains) {
            if (rootDomain.endsWith(domain)) {
                return true;
            }
        }
        return false;
    }

    // 获取对应的头像URL
    let imgUrl = getAvatarUrl(link);

    // 判断并生成提示信息
    // 判断并生成提示信息
    let tipMessage = isWhitelisted(link)
        ? "✅来自本站|博友,本站可确保其安全性,不排除DNS挟持记得反馈"
        : "❎引用站外地址，不保证站点的可用性和安全性";

    return `<div class='liushen-tag-link'><a class="tag-Link" target="_blank" href="${link}">
    <div class="tag-link-tips">${tipMessage}</div>
    <div class="tag-link-bottom">
        <div class="tag-link-left" style="background-image: url(${imgUrl});"></div>
        <div class="tag-link-right">
            <div class="tag-link-title">${title}</div>
            <div class="tag-link-sitename">${sitename}</div>
        </div>
        <i class="fa-solid fa-angle-right"></i>
    </div>
    </a></div>`;
}

hexo.extend.tag.register('link', link, { ends: false });