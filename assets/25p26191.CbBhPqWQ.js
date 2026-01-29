import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Ddtyk9Kn.js";import"./chunks/@vueuse/motion.9_vusbAC.js";import{e as g,u as h,a as b}from"./chunks/vue-router.D8U3j-oO.js";import{aa as k,ak as s,ag as e,af as n,ai as l,O as f,ab as w,a1 as v}from"./framework.DDvvbER2.js";import"./app.DZ4NsGGa.js";import"./chunks/dayjs.BdcnXKr1.js";import"./chunks/vue-i18n.BpMi3P6z.js";import"./chunks/pinia.PxAi84jE.js";import"./chunks/nprogress.OendXNeX.js";/* empty css                    */import"./YunComment.vue_vue_type_style_index_0_lang.CZ1Lh2rx.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DnvbDU6J.js";import"./post.BB7LsbEO.js";const x=g("/posts/25p26191",async p=>JSON.parse('{"title":"给Hexo和留言添加跳转中间页","description":"","frontmatter":{"title":"给Hexo和留言添加跳转中间页","date":"2026-1-9","updated":"2026-1-9","categories":"博客开发","cover":"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20260109193732597.webp","excerpt":"现在经常看着有博友不少因为留言的问题被请去喝茶谈心的，连忙转头看看自己的，发现也有不少奇怪的链接，以前也没注意这方面问题，靠自己一点点审查的话很麻烦，就打算弄一个中间页提示。首先在网上找了一下，发现修改的都是hexo文章和构建页面的跳转中间页，而且有的实现起来有些麻烦，当然是指对于不懂的人来说，有很多专业术语或者是技术层面的代沟的","tags":["教程","hexo"]},"headers":[],"relativePath":"pages/posts/25p26191.md","lastUpdated":null}'),{lazy:(p,i)=>p.name===i.name}),_={__name:"25p26191",setup(p,{expose:i}){const{data:t}=x(),o=b(),r=h(),c=Object.assign(r.meta.frontmatter||{},t.value?.frontmatter||{});return o.currentRoute.value.data=t.value,v("valaxy:frontmatter",c),globalThis.$frontmatter=c,i({frontmatter:{title:"给Hexo和留言添加跳转中间页",date:"2026-1-9",updated:"2026-1-9",categories:"博客开发",cover:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20260109193732597.webp",excerpt:"现在经常看着有博友不少因为留言的问题被请去喝茶谈心的，连忙转头看看自己的，发现也有不少奇怪的链接，以前也没注意这方面问题，靠自己一点点审查的话很麻烦，就打算弄一个中间页提示。首先在网上找了一下，发现修改的都是hexo文章和构建页面的跳转中间页，而且有的实现起来有些麻烦，当然是指对于不懂的人来说，有很多专业术语或者是技术层面的代沟的",tags:["教程","hexo"]}}),(a,u)=>{const d=m;return w(),k(d,{frontmatter:f(c)},{"main-content-md":s(()=>[...u[0]||(u[0]=[n("p",null,"安然无恙，各位；",-1),n("h1",{id:"前言",tabindex:"-1"},[l("前言 "),n("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),n("p",null,"新年快乐！2026年的第一笔~",-1),n("p",null,"这段时间难得的一个五天假期，就打算折腾下自己的小站，改动最多的就是安全方面的事情了，由于个人的想法比较多，过度敏感，对这方面做的比较离谱。",-1),n("p",null,"现在经常看着有博友不少因为留言的问题被请去喝茶谈心的，连忙转头看看自己的，发现也有不少奇怪的链接，以前也没注意这方面问题，靠自己一点点审查的话很麻烦，就打算弄一个中间页提示。首先在网上找了一下，发现修改的都是hexo文章和构建页面的跳转中间页，而且有的实现起来有些麻烦，当然是指对于不懂的人来说，有很多专业术语或者是技术层面的代购的“对牛弹琴”， 当然，可能没什么实际作用，大家当个乐子看看就行。",-1),n("h2",{id:"插件",tabindex:"-1"},[l("插件 "),n("a",{class:"header-anchor",href:"#插件","aria-label":'Permalink to "插件"'},"​")],-1),n("p",null,[l("不过还是有一个不错的插件实现的："),n("a",{href:"https://blog.liushen.fun/posts/1dfd1f41/",target:"_blank",rel:"noreferrer"},"安全跳转页面·插件版 | LiuShen’s Blog"),l(" 柳哥在很早之前就弄了一个插件一键完成的。")],-1),n("blockquote",null,[n("p",null,"效果如下：支持白昼黑夜主题、")],-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20260109175850005.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,[n("strong",null,"liushen"),l("的实现方法就不是简单的使用外挂JS进行实现，因为检测的内容是直接对HTML内容进行检测，并不会经过JavaScript，于是liushen就开发了这么一个插件："),n("a",{href:"https://github.com/willow-god/hexo-safego",target:"_blank",rel:"noreferrer"},"hexo-safego")],-1),n("p",null,"插件功能",-1),n("ul",null,[n("li",null,"外部链接跳转：将外部链接替换为自定义的跳转页面，可以自定义文件名称，增加安全性。"),n("li",null,"灵活配置：支持多个容器，使用css选择器进行选择、支持白名单域名和生效页面路径的配置。"),n("li",null,"Base64 编码：可选将外链链接编码为Base64加密，在跳转时再使用js转为正常网站地址，增强安全性能。"),n("li",null,"调试模式：调试模式输出详细信息，便于开发和调试。"),n("li",null,"自定义页面：支持设置标题、副标题、头像、暗黑模式，如果有前端基础，还可以自己定义跳转页面进行美化。")],-1),n("h2",{id:"留言",tabindex:"-1"},[l("留言 "),n("a",{class:"header-anchor",href:"#留言","aria-label":'Permalink to "留言"'},"​")],-1),n("p",null,[l("但是，柳哥的插件只是支持hexo构建的页面，对于twikoo等外嵌的留言系统来说是没作用的，在探索了一下变量，参考了"),n("a",{href:"https://koobai.com/",target:"_blank",rel:"noreferrer"},"空白Koobai"),l("和"),n("a",{href:"https://www.iamlm.com/",target:"_blank",rel:"noreferrer"},"老麦笔记"),l("的文章终于造出了一堆史山代码。")],-1),n("p",null,[l("期间出现了名字跳转或内容跳转失效，如果使用有问题或者其他系统自行看F12看，这个问题的本质是"),n("strong",null,"昵称链接的 DOM 选择器不匹配"),l(" + "),n("strong",null,"异步加载的昵称链接未被脚本捕获"),l("，其他系统我没尝试过各位可以自行测试。")],-1),n("p",null,[l("用鼠标点击评论区的昵称，或者"),n("code",null,"Ctrl+Shift+C"),l("，此时开发者工具会定位到昵称对应的 HTML 代码；查看昵称链接的 HTML 结构，示例如下（你需要看自己的）:")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,'<a href="https://koxiuqiu.cn" target="_blank" rel="noopener noreferrer" class="tk-nick tk-nick-link"><strong>朽丘秋雨</strong></a>')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,"可放心食用，一键CV复制粘贴即用！",-1),n("hr",null,null,-1),n("p",null,"实现如下：",-1),n("p",null,[l("前往"),n("code",null,"/source"),l("目录创捷一个"),n("code",null,"html"),l("文件，命名："),n("code",null,"link.html"),l("，当然你可以自己改：")],-1),n("p",null,[l("PS： 小提示 如果发现"),n("code",null,"hexo g"),l(" 构建"),n("code",null,"public"),l("目录不存在，可以自己再复制一份过去到"),n("code",null,"public"),l("也可以，不使用"),n("code",null,"hexo clean"),l("就不用操作了，我个人的习惯就是直接"),n("code",null,"hexo g&d"),l("两件套了，"),n("code",null,"clean"),l("除非改样式一般不用。")],-1),n("blockquote",null,[n("p",null,"样式参考的是柳哥的(其实一模一样的样式)，还是挺喜欢柳哥的样式审美的。")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"<!DOCTYPE html>")]),l(`
`),n("span",{class:"line"},[n("span",null,'<html lang="zh">')]),l(`
`),n("span",{class:"line"},[n("span",null,"<head>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <meta http-equiv="X-UA-Compatible" content="IE=edge">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <link rel="icon" href="/xiaoke.png" type="image/x-icon">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <meta name="robots" content="noindex, nofollow"/>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    <title>😃页面加载中，请稍候...</title>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <style type="text/css">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        body {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            overflow: hidden;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 100vh;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 100vw;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin: 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            padding: 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            transition: background 0.3s ease-in-out;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .container {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: flex;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            align-items: center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            justify-content: center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 100%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 100%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin: 0;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            flex-direction: column;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .avatar-placeholder, .avatar {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 100px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 100px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border-radius: 50%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-bottom: 15px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: block;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .avatar {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: none;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .description {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-weight: 600;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .subtitle {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 15px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-bottom: 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #C4C4C4;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .loading {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text-align: center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            padding: 30px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border-radius: 25px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            animation: fadein 2s;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 450px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            max-width: 80%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            transition: all 0.3s ease-in-out;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        @keyframes fadein {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            from { opacity: 0 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            to { opacity: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .content {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-bottom: 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .url-text {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-bottom: 10px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 16px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            letter-spacing: 1px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .jump-url {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            position: relative;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: block;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-top: 5px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-bottom: 25px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            padding: 15px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border-radius: 18px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 25px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            white-space: nowrap;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            overflow: hidden;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text-overflow: ellipsis;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .copy-btn-container {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            position: absolute;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: flex;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            align-items: center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            right: 10px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            top: 50%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            transform: translateY(-50%);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 100%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 63px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            flex-direction: row-reverse;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .copy-btn {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 40px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 40px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border-radius: 12px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: 1px solid #a4a4a4;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            transition: all 0.3s ease-in-out;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            cursor: pointer;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .copy-btn-container svg {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 25px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 25px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            fill: #888;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .countdown-text {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-top: 12px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 12px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .button-container {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: flex;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            justify-content: center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            gap: 20%;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            margin-top: 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            padding: 10px 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border-radius: 16px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: none;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            cursor: pointer;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            font-size: 16px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 120px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            height: 40px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .cancel-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: black;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        .confirm-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: white;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        /* 白天模式 */")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: linear-gradient(135deg, #E9E9E9, #FFFFFF);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .loading {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: 1px solid #ccc;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: rgba(255,255,255,0.7);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(0,0,0,0.1);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .loading:hover {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(0,0,0,0.2);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .url-text {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #333;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .jump-url {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: 1px solid #ccc;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #F7F9FE;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #333;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .copy-btn-container {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: linear-gradient(to left, #F7F9FE 75%,transparent 100%);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .copy-btn {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #F7F9FE;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .copy-btn:hover {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(100,100,100,0.2);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .countdown-text {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #515151;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .cancel-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #a6e3e9;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.light .confirm-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #3fc1c9;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        /* 黑夜模式 */")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: linear-gradient(135deg, #364f6b, #222831);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .loading {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: 1px solid #777;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: #393e46;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #EFEFEF;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(100,100,100,0.1);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .loading:hover {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(100,100,100,0.2);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .description {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #F3F3F3;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .url-text, body.dark .countdown-text {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #EFEFEF;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .jump-url {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            border: 1px solid #777;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #333;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #EFEFEF;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .copy-btn-container {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background: linear-gradient(to left, #333 75%,transparent 100%);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .copy-btn {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #222831;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .copy-btn:hover {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            box-shadow: 0 16px 32px rgba(100,100,100,0.2);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .cancel-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #872C2C;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #FFF;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        body.dark .confirm-button {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            background-color: #28566F;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            color: #FFF;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </style>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <script type="text/javascript">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 适配Stellar主题的日夜模式")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function detectStellarTheme() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const body = document.body;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const theme = localStorage.getItem('theme');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                body.classList.add('dark');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                body.classList.remove('light');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                body.classList.add('light');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                body.classList.remove('dark');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 获取URL参数")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function GetQueryString(name) {")]),l(`
`),n("span",{class:"line"},[n("span",null,'            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");')]),l(`
`),n("span",{class:"line"},[n("span",null,"            var r = window.location.search.substr(1).match(reg);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            return r ? decodeURIComponent(r[2]) : null; // 改用decodeURIComponent，兼容URL编码的参数")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 安全解码URL参数（优化容错性）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function decodeSafeUrlParam(paramStr) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            try {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                // 修复base64替换逻辑，添加补全等号的处理")]),l(`
`),n("span",{class:"line"},[n("span",null,"                const base64 = paramStr.replace(/-/g, '+').replace(/_/g, '/');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                // 补全base64缺失的等号")]),l(`
`),n("span",{class:"line"},[n("span",null,"                const paddedBase64 = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                const decodedBinary = atob(paddedBase64);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                const decoded = decodeURIComponent(Array.from(decodedBinary).map(c => ")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)")]),l(`
`),n("span",{class:"line"},[n("span",null,"                ).join(''));")]),l(`
`),n("span",{class:"line"},[n("span",null,"                return decoded;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            } catch (e) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                console.warn('URL解码失败，使用原始值:', e);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                return paramStr;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 跳转逻辑")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let jump_url = GetQueryString('url');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 解码处理")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (jump_url) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            jump_url = decodeSafeUrlParam(jump_url);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 修复核心：正确创建正则表达式对象，添加i忽略大小写")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const UrlReg = new RegExp('^((http|https|thunder|qqdl|ed2k|Flashget|qbrowser|ftp|rtsp|mms)://)', 'i');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 验证URL合法性")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (!jump_url || !UrlReg.test(jump_url)) { // 改用test方法更高效")]),l(`
`),n("span",{class:"line"},[n("span",null,"            document.title = '参数错误，正在返回首页...';")]),l(`
`),n("span",{class:"line"},[n("span",null,"            jump_url = location.origin;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 手动跳转函数（仅修改此处，从新建窗口改为当前窗口）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function jump() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            location.href = jump_url; // 当前窗口直接跳转")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 关闭/返回逻辑")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function closeWindow() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            function isWeChat() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                return /MicroMessenger/i.test(navigator.userAgent);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            function isQQ() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                return /QQ/i.test(navigator.userAgent) && !/MicroMessenger/i.test(navigator.userAgent);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"            if (isWeChat()) {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                if (typeof WeixinJSBridge !== "undefined") {')]),l(`
`),n("span",{class:"line"},[n("span",null,"                    WeixinJSBridge.call('closeWindow');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    document.addEventListener('WeixinJSBridgeReady', function () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                        WeixinJSBridge.call('closeWindow');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    }, { once: true });")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    setTimeout(() => fallbackBack(), 500);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            } else if (isQQ()) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                try {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                    if (typeof mqq !== "undefined" && mqq.ui && mqq.ui.closeWebView) {')]),l(`
`),n("span",{class:"line"},[n("span",null,"                        mqq.ui.closeWebView();")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                        fallbackBack();")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"                } catch (e) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    fallbackBack();")]),l(`
`),n("span",{class:"line"},[n("span",null,"                }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                fallbackBack();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 返回兜底函数")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function fallbackBack() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            if (window.history.length <= 1) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                window.location.href = location.origin;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                window.history.back();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 复制链接功能")]),l(`
`),n("span",{class:"line"},[n("span",null,"        function copyToClipboard() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const urlText = document.getElementById('jump-url-text').textContent;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 改用Clipboard API，替代过时的execCommand")]),l(`
`),n("span",{class:"line"},[n("span",null,"            navigator.clipboard.writeText(urlText).then(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                alert('链接已复制到剪贴板！');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }).catch(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                // 降级方案")]),l(`
`),n("span",{class:"line"},[n("span",null,"                const tempInput = document.createElement('input');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                tempInput.value = urlText;")]),l(`
`),n("span",{class:"line"},[n("span",null,"                document.body.appendChild(tempInput);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                tempInput.select();")]),l(`
`),n("span",{class:"line"},[n("span",null,"                document.execCommand('copy');")]),l(`
`),n("span",{class:"line"},[n("span",null,"                document.body.removeChild(tempInput);")]),l(`
`),n("span",{class:"line"},[n("span",null,"                alert('链接已复制到剪贴板！');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 加载头像")]),l(`
`),n("span",{class:"line"},[n("span",null,"        async function loadAvatar() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const avatarImg = document.querySelector('.avatar');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const placeholder = document.querySelector('.avatar-placeholder');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const img = new Image();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            img.src = '/xiaoke.png';")]),l(`
`),n("span",{class:"line"},[n("span",null,"            img.onload = function () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                avatarImg.src = img.src;")]),l(`
`),n("span",{class:"line"},[n("span",null,"                avatarImg.style.display = 'block';")]),l(`
`),n("span",{class:"line"},[n("span",null,"                placeholder.style.display = 'none';")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            img.onerror = function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                placeholder.style.display = 'none'; // 加载失败隐藏占位符")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 页面初始化")]),l(`
`),n("span",{class:"line"},[n("span",null,"        window.addEventListener('load', function () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            detectStellarTheme();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            loadAvatar();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 显示目标链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const jumpUrlElement = document.getElementById('jump-url-text');")]),l(`
`),n("span",{class:"line"},[n("span",null,"            jumpUrlElement.textContent = jump_url;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 更新提示文本")]),l(`
`),n("span",{class:"line"},[n("span",null,"            const countdownText = document.querySelector('.countdown-text');")]),l(`
`),n("span",{class:"line"},[n("span",null,'            countdownText.textContent = "💡请自行确认链接安全性，手动点击跳转";')]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 监听主题切换")]),l(`
`),n("span",{class:"line"},[n("span",null,"            window.addEventListener('storage', (e) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                if (e.key === 'theme') detectStellarTheme();")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <\/script>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</head>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<body>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <div class="container">')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <div class="avatar-placeholder"></div>')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <img src="" alt="头像" class="avatar">')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <div class="description">朽丘秋雨</div>')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <div class="subtitle">安全提示</div>')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <div class="loading">')]),l(`
`),n("span",{class:"line"},[n("span",null,'            <div class="content">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                <div class="url-text">您即将离开本站，跳转到：</div>')]),l(`
`),n("span",{class:"line"},[n("span",null,'                <div class="jump-url" id="jump-url">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                    <span id="jump-url-text"></span>')]),l(`
`),n("span",{class:"line"},[n("span",null,'                    <div class="copy-btn-container">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                        <button class="copy-btn" onclick="copyToClipboard()">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                                <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/>')]),l(`
`),n("span",{class:"line"},[n("span",null,"                            </svg>")]),l(`
`),n("span",{class:"line"},[n("span",null,"                        </button>")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,"                </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,"            </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,'            <div class="countdown-text">⚡请自行确认链接安全性，手动点击跳转</div>')]),l(`
`),n("span",{class:"line"},[n("span",null,'            <div class="button-container">')]),l(`
`),n("span",{class:"line"},[n("span",null,'                <button class="button cancel-button" onclick="closeWindow()">取消跳转</button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'                <button class="button confirm-button" onclick="jump()">立即跳转</button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"            </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,"        </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </div>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</body>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</html>")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[l("在"),n("code",null,"source/js"),l(" (没有js文件夹自行创捷) 创捷一个"),n("code",null,"redirect.js"),l("和"),n("code",null,"redirect-1.js"),l("文件，分别复制一下代码：")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"(function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var siteDomain = window.location.hostname; // 自动获取本站域名，无需手动改")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var redirectPage = '/link.html'; // 中间页路径")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 核心函数：判断是否为外部链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function isExternalLink(url) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (!url || !url.startsWith('http')) return false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 排除mailto/tel等非网页链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (url.startsWith('mailto:') || url.startsWith('tel:')) return false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 排除本站链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var linkHost = new URL(url).hostname.replace(/^www\\./, '');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var siteHost = siteDomain.replace(/^www\\./, '');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return linkHost !== siteHost;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 核心函数：替换链接跳转")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function replaceLinkHref(link) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var originalHref = link.getAttribute('href');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (isExternalLink(originalHref)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 保留原链接的target属性（比如_blank）")]),l(`
`),n("span",{class:"line"},[n("span",null,"            var target = link.getAttribute('target') || '_self';")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 核心：替换为中间页跳转")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.setAttribute('href', redirectPage + '?url=' + encodeURIComponent(originalHref));")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 修复：如果原链接是新窗口打开，保持行为")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.setAttribute('target', target);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            // 移除可能的onclick冲突")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.onclick = null;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 核心函数：处理Twikoo评论区链接（解决异步加载问题）")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function handleTwikooLinks() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // Stellar主题下Twikoo的实际选择器（必对！）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var twikooLinkSelectors = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            '.tk-content a',"),n("span",null," // 评论内容里的链接（Stellar+Twikoo默认类名）")]),l(`
`),n("span",{class:"line"},[n("span",null,"            '.tk-nick a'"),n("span",null,"      // 留言人昵称链接（Stellar+Twikoo默认类名）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 遍历并替换链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"        twikooLinkSelectors.forEach(function(selector) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            var links = document.querySelectorAll(selector);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            links.forEach(function(link) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                replaceLinkHref(link);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 核心：页面加载后执行 + 监听Twikoo异步加载")]),l(`
`),n("span",{class:"line"},[n("span",null,"    window.onload = function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 初始加载的评论链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"        handleTwikooLinks();")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 监听Twikoo评论区DOM变化（解决异步加载无效问题）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var twikooContainer = document.getElementById('twikoo');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (twikooContainer) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            var observer = new MutationObserver(function(mutations) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                mutations.forEach(function(mutation) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    if (mutation.addedNodes.length > 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                        handleTwikooLinks(); // 新评论加载后重新处理链接")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"                });")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"            observer.observe(twikooContainer, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                childList: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                subtree: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        // 兼容Twikoo官方回调（双重保障）")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (window.twikoo) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            twikoo.init({")]),l(`
`),n("span",{class:"line"},[n("span",null,"                onCommentLoaded: handleTwikooLinks")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    };")]),l(`
`),n("span",{class:"line"},[n("span",null,"})();")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"(function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var siteDomain = window.location.hostname;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    var redirectPage = '/link.html';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function isExternalLink(url) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (!url || !url.startsWith('http')) return false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (url.startsWith('mailto:') || url.startsWith('tel:')) return false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var linkHost = new URL(url).hostname.replace(/^www\\./, '');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var siteHost = siteDomain.replace(/^www\\./, '');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return linkHost !== siteHost;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function replaceLinkHref(link) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var originalHref = link.getAttribute('href');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (originalHref.includes(redirectPage + '?url=')) return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (isExternalLink(originalHref)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            var target = link.getAttribute('target') || '_self';")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.setAttribute('href', redirectPage + '?url=' + encodeURIComponent(originalHref));")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.setAttribute('target', target);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            link.onclick = null;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function handleTwikooLinks() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var nicknameSelector = '.tk-nick';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var twikooLinkSelectors = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            nicknameSelector,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            '.tk-content a'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        twikooLinkSelectors.forEach(function(selector) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            var links = document.querySelectorAll(selector);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            links.forEach(function(link) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                replaceLinkHref(link);")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    function initObserver() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var twikooContainer = document.getElementById('twikoo');")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (!twikooContainer) return;")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        var observer = new MutationObserver(function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            handleTwikooLinks();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        observer.observe(twikooContainer, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            childList: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            subtree: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"    window.addEventListener('load', function() {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        handleTwikooLinks();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        initObserver();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    });")]),l(`
`),n("span",{class:"line"},[n("span",null,"})();")])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("p",null,[l("最后引入JS样式，"),n("code",null,"_config.stellar.yml"),l("找到"),n("code",null,"inject"),l("引用就行，这里是我主题所以配置文件是这个名字，根据自己的博客主题找到主题配置引用就行：")],-1),n("div",{class:"language-"},[n("button",{title:"Copy code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"inject:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  head:")]),l(`
`),n("span",{class:"line"},[n("span",null,'    - <link rel="stylesheet" href="...">')]),l(`
`),n("span",{class:"line"},[n("span",null,"  script:")]),l(`
`),n("span",{class:"line"},[n("span",null,"    - ...")]),l(`
`),n("span",{class:"line"},[n("span",null,'    - <script src="/js/redirect.js"><\/script> #twikoo跳转中间页')]),l(`
`),n("span",{class:"line"},[n("span",null,'    - <script src="/js/redirect-1.js"><\/script> #twikoo跳转中间页')])])]),n("button",{class:"code-block-unfold-btn"})],-1),n("hr",null,null,-1),n("h1",{id:"杂记",tabindex:"-1"},[l("杂记 "),n("a",{class:"header-anchor",href:"#杂记","aria-label":'Permalink to "杂记"'},"​")],-1),n("p",null,"后续又调整修复了中间页的BUG，如跳转链接会本站、显示错误…",-1),n("figure",null,[n("img",{src:"https://koxiuqiu-1321010956.cos.ap-guangzhou.myqcloud.com/img/20260109183120083.png",alt:"",loading:"lazy",decoding:"async",class:"lazy"})],-1),n("p",null,"当然，首先twikoo本身来说不是hexo本身的功能，其实这玩意更多只是给访客一个提示，我能做的就是该提示提示了，有问题把链接留言下来我给他处理了就好！",-1),n("p",null,"欢迎交流，写这类的文比较生疏，有什么缺漏问题可以提出。",-1)])]),"main-header":s(()=>[e(a.$slots,"main-header")]),"main-header-after":s(()=>[e(a.$slots,"main-header-after")]),"main-nav":s(()=>[e(a.$slots,"main-nav")]),"main-content-before":s(()=>[e(a.$slots,"main-content-before")]),"main-content":s(()=>[e(a.$slots,"main-content")]),"main-content-after":s(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":s(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":s(()=>[e(a.$slots,"main-nav-after")]),comment:s(()=>[e(a.$slots,"comment")]),footer:s(()=>[e(a.$slots,"footer")]),aside:s(()=>[e(a.$slots,"aside")]),"aside-custom":s(()=>[e(a.$slots,"aside-custom")]),default:s(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{_ as default,x as usePageData};
