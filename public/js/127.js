(function () {
    var validDomain = 'blog.koxiuqiu.cn'; // 你的域名
    var redirectUrl = 'https://blog.koxiuqiu.cn'; // 重定向链接
    var hostname = document.location.hostname;

    function createWatermark(text) {
        var watermarkDiv = document.createElement('div');
        watermarkDiv.style.pointerEvents = 'none';
        watermarkDiv.style.position = 'fixed';
        watermarkDiv.style.top = '0';
        watermarkDiv.style.left = '0';
        watermarkDiv.style.width = '100%';
        watermarkDiv.style.height = '100%';
        watermarkDiv.style.zIndex = '9999';
        watermarkDiv.style.opacity = '0.1';
        watermarkDiv.style.background = 'transparent';
        watermarkDiv.style.overflow = 'hidden';
        watermarkDiv.style.display = 'flex';
        watermarkDiv.style.justifyContent = 'center';
        watermarkDiv.style.alignItems = 'center';
        watermarkDiv.style.flexWrap = 'wrap';

        var watermarkText = document.createElement('div');
        watermarkText.innerText = text;
        watermarkText.style.color = 'black';
        watermarkText.style.fontSize = '30px';
        watermarkText.style.transform = 'rotate(-30deg)';
        watermarkText.style.whiteSpace = 'nowrap';
        watermarkText.style.margin = '20px';

        for (var i = 0; i < 100; i++) {
            watermarkDiv.appendChild(watermarkText.cloneNode(true));
        }

        document.body.appendChild(watermarkDiv);
    }

    if (hostname !== validDomain) {
        createWatermark(validDomain); // 给页面加上前边设置的域名为水印
        var userResponse = confirm("提示：您访问的域名可能不是朽丘秋雨博客的最新且正版域名，确定后自动跳转正常域名，如有虚假镜像网站随时留言域名联系博主！(目前:blog.koxiuqiu.cn)");
        if (userResponse) {
            window.location.replace(redirectUrl);
        }
    }
})();

