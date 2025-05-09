(function () {
    var validDomain = 'koxiuqiu.cn'; // 你的域名
    var redirectUrl = 'https://koxiuqiu.cn'; // 重定向链接
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
        var userResponse = confirm("警告：您当前浏览的页面不是正版，建议您跳转至官方(koxiuqiu.cn)进行浏览！并留言板反馈这个天杀的域名");
        if (userResponse) {
            window.location.replace(redirectUrl);
        }
    }
})();

