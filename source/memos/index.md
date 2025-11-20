---
title: 日常说说
aside: false
---
<style>
h1 {
    display: none;
}
div#page {
	background: none !important;
    box-shadow: none;
    padding: 0;
    border: none;
}
</style>
<style>
/* 卡片初始化 */
.talk_item {
    width: calc(33.333% - 6px);
    background: #ffffff;
    border: 1px solid #e0e3ed;
    box-shadow: var(--card-box-shadow);
    transition: all .3s ease-in-out;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 9px;
    margin-right: 9px;
}
.talk_item:hover {
    box-shadow: var(--card-hover-box-shadow);
}

/* 夜间模式下的样式 */
[data-theme="dark"] span.talk_tag {
  background-color: #666666;
}

[data-theme=dark] .talk_item {
    background: rgb(44,44,44);
}

@media (max-width: 900px) {
    .talk_item {
      width: calc(50% - 5px); /* 在小屏幕上改为两列 */
    }
  }
  @media (max-width: 450px) {
    .talk_item {
      width: calc(100%); /* 在非常小的屏幕上改为一列 */
    }
  }

/* 卡片初始化结束 */

#talk{
    position: relative;
    width: 100%;
    box-sizing: border-box;
}

#talk .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#talk .loading img {
    width: 200px;
}

.avatar {
    margin: 0 !important;
    width: 50px;
    height: 50px;
    border-radius: 10px;
}


.talk_bottom,
.talk_meta {
    display: flex;
    align-items: center;
    line-height: 1.5;
    
}

.talk_meta {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px dashed grey; /* 添加灰色虚线边框 */
}

.talk_bottom {
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px dashed grey; /* 添加灰色虚线边框 */
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
span.talk_nick {
    color: #6dbdc3;
    font-size: 1.2rem;
}
svg.is-badge.icon {
    width: 15px;
    margin-left: 5px;
    padding-top: 3px;
}
span.talk_date {
    opacity: .6;
}

.talk_content {
    line-height: 1.5;
    margin-top: 10px;
    white-space: pre-wrap;
    line-height: 1.5;
}
.zone_imgbox {
    display: flex;
    flex-wrap: wrap;
    --w: calc(25% - 8px);
    gap: 10px;
    margin-top: 5px;
}
.zone_imgbox a {
    display: block;
    border-radius: 12px;
    width: var(--w);
    aspect-ratio: 1/1;
    position: relative;
}

.zone_imgbox a:first-child {
    width: 100%;
    aspect-ratio: 1.8;
}

.zone_imgbox img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    object-fit: cover;
}
/* 底部 */

.talk_bottom {
    opacity: .9;
}
.talk_bottom .icon {
    float: right;
    transition: all .3s;
}

.talk_bottom .icon:hover {
    color: #49b1f5;
}

span.talk_tag{
    font-size: 14px;
    background-color: #f0f0f0;
    border-radius: 12px;
    padding: 3px 15px 3px 10px;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

span.talk_tag:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.talk_content>a {
    margin: 0 3px;
    color: #ff7d73 !important;
}
.talk_content>a:hover{
    text-decoration: none !important;
    color: #ff5143 !important
}

/* 提醒 */

.limit {
    transition: all .3s ease-in-out;
    color: rgba(76, 73, 72, 0.6);
}

[data-theme=dark] .limit {
    color: rgba(255, 255, 255, 0.5);
}

.limit {
    display: none;
    text-align: center;
    margin-top: 20px;
    color: var(--font-color);
}
@media screen and (max-width: 900px) {
    .zone_imgbox {
        --w: calc(33% - 5px);
    }
    #talk{
        margin: 10px 3px 0
    }
    #post-comment{
        margin: 0 3px
    }
}

@media screen and (max-width: 768px) {
    .zone_imgbox {
        gap: 6px;
    }
    .zone_imgbox {
        --w: calc(50% - 3px);
    }
    span.talk_date {
        font-size: 14px;
    }
}
</style>

<div id="talk">
<div class='loading'><img src="/img/loading.svg" alt="加载中..."></div>
</div>

<div class="limit">- 只展示最近114511条说说 -</div>
<script>
function waterfall(a){function b(a,b){var c=window.getComputedStyle(b);return parseFloat(c["margin"+a])||0}function c(a){return a+"px"}function d(a){return parseFloat(a.style.top)}function e(a){return parseFloat(a.style.left)}function f(a){return a.clientWidth}function g(a){return a.clientHeight}function h(a){return d(a)+g(a)+b("Bottom",a)}function i(a){return e(a)+f(a)+b("Right",a)}function j(a){a=a.sort(function(a,b){return h(a)===h(b)?e(b)-e(a):h(b)-h(a)})}function k(b){f(a)!=t&&(b.target.removeEventListener(b.type,arguments.callee),waterfall(a))}"string"==typeof a&&(a=document.querySelector(a));var l=[].map.call(a.children,function(a){return a.style.position="absolute",a});a.style.position="relative";var m=[];l.length&&(l[0].style.top="0px",l[0].style.left=c(b("Left",l[0])),m.push(l[0]));for(var n=1;n<l.length;n++){var o=l[n-1],p=l[n],q=i(o)+f(p)<=f(a);if(!q)break;p.style.top=o.style.top,p.style.left=c(i(o)+b("Left",p)),m.push(p)}for(;n<l.length;n++){j(m);var p=l[n],r=m.pop();p.style.top=c(h(r)+b("Top",p)),p.style.left=c(e(r)),m.push(p)}j(m);var s=m[0];a.style.height=c(h(s)+b("Bottom",s));var t=f(a);window.addEventListener?window.addEventListener("resize",k):document.body.onresize=k}
if(1) {
    let url = 'https://memo.koxiuqiu.cn' // https://s.dusays.com, 103
    fetch(url + '/api/v1/memo?creatorId=1&tag=说说&limit=114511').then(res => res.json()).then(data => {
        let items = [],
            html = '',
            icon = '<svg viewBox="0 0 512 512"xmlns="http://www.w3.org/2000/svg"class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"fill="#1da1f2"></path></svg>';
        data.forEach(item => { items.push(Format(item)) });
        if (items.length == 30) document.querySelector('.limit').style.display = 'block';
        items.forEach(item => {
            html += `<div class="talk_item"><div class="talk_meta"><img class="no-lightbox nolazyload avatar" src="https://cdn.koxiuqiu.cn/koxiuqiu/img/favicon.webp"><div class="info"><span class="talk_nick">klcdm${icon}</span><span class="talk_date">${item.date}</span></div></div><div class="talk_content">${item.content}</div><div class="talk_bottom"><div><span class="talk_tag">🏷️${item.tag}</span></div><a href="javascript:;"onclick="goComment('${item.text.split('\n')[0]}')"><span class="icon"><i class="fa-solid fa-message fa-fw"></i></span></a></div></div>` // 注意修改头像链接和名称
        })
        document.getElementById('talk').innerHTML = html;
        waterfall('#talk');
    })
    // 页面评论
    function goComment(e) {
        var n = document.querySelector(".el-textarea__inner")
        n.value = `> ${e}\n\n`;
        n.focus();
        var goCommentMessage = document.createElement('div');
        goCommentMessage.textContent = '已选中，不删除空格显示效果更佳哦！';
        goCommentMessage.style.position = 'fixed';
        goCommentMessage.style.top = '50%';
        goCommentMessage.style.left = '50%';
        goCommentMessage.style.transform = 'translate(-50%, -50%)';
        goCommentMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        goCommentMessage.style.color = '#fff';
        goCommentMessage.style.padding = '10px 20px';
        goCommentMessage.style.borderRadius = '5px';
        goCommentMessage.style.zIndex = '9999';
        document.body.appendChild(goCommentMessage);
        setTimeout(function(){
            document.body.removeChild(goCommentMessage);
       }, 2000);
    }
    // 页面内容格式化
    function Format(item) {
        let date = getTime(new Date(item.createdTs * 1000).toString()),
            content = item.content,
            tag = item.content.match(/\{((?!bilibili).)*?\}/g),
            bilibili = content.match(/\{\s*bilibili (.*?)\}/g),
            imgs = content.match(/!\[.*\]\(.*?\)/g), 
            text = ''
        if (imgs) imgs = imgs.map(item => { return item.replace(/!\[.*\]\((.*?)\)/, '$1') })
        if (bilibili) bilibili = bilibili.map(item => { return item.replace(/\{\s*bilibili (.*?)\}/, '$1') })
        if (item.resourceList.length) {
            if (!imgs) imgs = []
            item.resourceList.forEach(t => {
                if (t.externalLink) imgs.push(t.externalLink)
                else imgs.push(`${url}/o/r/${t.id}/${t.publicId}/${t.filename}`)
            })
        }
        text = content.replace(/#(.*?)\s/g, '').replace(/\!?\[(.*?)\]\((.*?)\)/g, '').replace(/\{(.*?)\}/g, '')
        content = text.replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2">@$1</a>`).replace(/- \[ \]/g, '⚪').replace(/- \[x\]/g, '⚫');
        if (imgs) {
            content += `<div class="zone_imgbox">`
            imgs.forEach(e => content += `<a href="${e}" data-fancybox="gallery" class="fancybox" data-thumb="${e}"><img class="nolazyload" src="${e}"></a>`
            )
            content += '</div>'
        }
        if (bilibili) {
            content += `<div style='margin-top: 10px; margin-bottom: 10px'>`
            bilibili.forEach(e => {
                content += `<div style='position: relative; padding: 30% 45%; margin-bottom: 10px'><iframe style='position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 12px;' src="https://player.bilibili.com/player.html?autoplay=0&bvid=${e}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>`
                text += ` [B站视频]`
            })
            content += '</div>'
        }
        return {
            content: content,
            tag: tag ? tag[0].replace(/\{(.*?)\}/,'$1') : '无标签',
            date: date,
            text: text.replace(/\[(.*?)\]\((.*?)\)/g, '[链接]' + `${imgs?'[图片]':''}`)
        }
    }
    // 页面时间格式化
    function getTime(time) {
        let d = new Date(time),
            ls = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
        for (let i = 0; i < ls.length; i++) {
            ls[i] = ls[i] <= 9 ? '0' + ls[i] : ls[i] + ''
        }
        if (new Date().getFullYear() == ls[0]) return ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
        else return ls[0] + '年' + ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
    }
}
</script>