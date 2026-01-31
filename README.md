# feedbacklinks
一个由世界上最伟大的语言创建的小型链接反馈功能程序。

# 开始部署

测试环境如下：

- Nginx 1.28.0 （理论上低版本也可以）
- PHP 8.0.26（必要，低于函数有问题）

## 环境配置(1)

登录宝塔面板 → 「网站」→ 找到「自己的站点」 → 「设置」→ 「伪静态」；

粘贴下方伪静态规则 → 点击「保存」（宝塔会自动重载 Nginx，无需手动重启）。

```
# 1. 禁止外部访问data目录（无特征404响应，防止目录存在性探测）
location ^~ /data/ {
    deny all;
    return 404;
}

# 2. 核心：保护目标接口文件，仅允许本站/本地请求，屏蔽所有特征
location ~* (save_feedback|update_status|edit_feedback)\.php$ {
    # 强校验Referer，仅允许指定域名、本地回环，空Referer拒绝
    if ($http_referer !~* (feedback.koxiuqiu.cn|127.0.0.1|localhost)) {
        return 404;
    }
    # 屏蔽接口访问日志，避免泄露请求信息
    access_log off;
    log_not_found off;
}

# 3. 全局安全头（all参数确保错误页、接口响应都携带，无死角防护）
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "same-origin" always;
add_header Cache-Control "no-cache, no-store, must-revalidate" always;

# 4. 禁止访问敏感配置/备份/日志/数据库文件（覆盖更全面的敏感后缀）
location ~* (\.user.ini|\.htaccess|\.htpasswd|\.env.*|\.gitignore|\.bak|\.log|\.sql|\.tar|\.gz|\.zip)$ {
    return 404;
    access_log off;
    log_not_found off;
}

# 5. 禁止访问版本控制/开发目录（防止源码、开发配置泄露）
location ~* /(\.git|\.svn|\.idea|node_modules|vendor)/ {
    return 404;
    access_log off;
    log_not_found off;
}

# 6. 屏蔽隐藏文件（所有以.开头的文件/目录，如.git/.env）
location ~ /\. {
    return 404;
    access_log off;
    log_not_found off;
}

# 7. 屏蔽Nginx版本号（伪静态中全局生效）
server_tokens off;
```

## 环境配置(2)

修改站点独立配置文件（推荐，如`nginx/conf.d/yourdomain.conf`）

在你的站点内添加以下规则，**重启 Nginx** 后生效（`nginx -s reload`）

```
server {
    listen 80;
    # 替换为实际域名/IP，多个用空格分隔（如feedback.koxiuqiu.cn 192.168.1.100）
    server_name 你的域名/IP;
    # 替换为项目实际根目录（如/var/www/feedback-system）
    root 你的项目根目录;
    index index.php index.html index.htm;

    # 全局配置：屏蔽Nginx版本号（避免泄露服务器信息）
    server_tokens off;
    # 全局配置：禁止浏览器解析非标准MIME类型（防XSS/文件注入）
    types_hash_max_size 2048;

    # 核心防护1：禁止外部访问data目录（彻底防止反馈数据文件泄露）
    location ^~ /data/ {
        deny all;
        # 无特征响应：用404代替403，避免攻击者判断目录存在
        return 404;
    }

    # 核心防护2：强化接口文件保护（目标接口：save_feedback/update_status/edit_feedback.php）
    # 优先级高于普通PHP解析，仅允许本站/本地请求，屏蔽所有错误信息
    location ~* ^/(save_feedback|update_status|edit_feedback)\.php$ {
        # 1. Referer强校验：仅允许指定域名、本地回环请求，空Referer直接拒绝
        if ($http_referer !~* ^(https?://(你的域名/IP|127.0.0.1|localhost)(:\d+)?/|$)) {
            return 404;
        }
        # 2. 禁止直接访问PHP源文件（防源码泄露）
        try_files $uri =404;
        # 3. 屏蔽所有PHP错误/警告输出（核心：避免返回任何PHP相关信息）
        fastcgi_param PHP_VALUE "display_errors=Off; error_reporting=0";
        # 4. Nginx层面屏蔽错误日志输出（避免接口请求日志泄露敏感信息）
        error_log off;
        # 5. 禁止浏览器缓存接口响应（防止敏感数据被缓存）
        add_header Cache-Control "no-cache, no-store, must-revalidate" always;
        add_header Pragma "no-cache" always;
        add_header Expires "0" always;
        # 6. 常规PHP FastCGI解析配置（保留原有端口，如9000/9001）
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        # 传递完整FastCGI参数，避免PHP解析异常
        include fastcgi_params;
        # 屏蔽FastCGI错误响应，统一返回无特征页面
        fastcgi_intercept_errors on;
        error_page 400 403 500 502 =404;
    }

    # 常规PHP文件解析（非目标接口的普通PHP文件，保留基础防护）
    location ~ \.php$ {
        try_files $uri =404; # 防止伪静态绕过，文件不存在直接404
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        # 屏蔽PHP错误输出
        fastcgi_param PHP_VALUE "display_errors=Off";
    }

    # 核心防护3：禁止访问隐藏目录/文件（.git/.svn/.env/.htaccess等，优先级高）
    location ~ /\. {
        deny all;
        return 404;
        access_log off;
        log_not_found off;
    }

    # 核心防护4：禁止访问敏感备份/日志/配置文件
    location ~* (\.user.ini|\.htaccess|\.htpasswd|\.env.*|\.gitignore|\.bak|\.log|\.sql|\.tar|\.zip)$ {
        deny all;
        return 404;
        access_log off;
        log_not_found off;
    }

    # 全局安全头：防XSS、点击劫持、MIME嗅探、跨域等（all参数确保错误页也携带头）
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "same-origin" always; # 限制Referer传递范围
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always; # 禁用无用权限

    # 禁止访问空目录
    autoindex off;
}
```

本地临时测试（修改 nginx.conf）

若为本地测试环境（如 Windows/Linux 本地 Nginx），可直接在`nginx/conf/nginx.conf`的`http`节点内添加全局防护规则（无需单独配置站点）：

```
http {
    # 原有配置不变，新增以下规则
    # 全局禁止访问data目录
    location ^~ /data/ {
        deny all;
        return 403;
    }
    # 全局禁止直接访问txt/php接口文件（仅放行入口文件）
    location ~* ^/(save_feedback|update_status|edit_feedback)\.php$ {
        if ($http_referer !~* (localhost|127.0.0.1)) {
            return 403;
        }
    }
    location ~ \.txt$ {
        deny all;
        return 403;
    }
}
```

> 不懂的可以邮件发送你的配置，小柯会直接修改好再发回去给你！注意，复制的是宝塔面板的站点的站点配置中“配置文件”的内容！伪静态的话...CV过去的道理，不能不会吧？

## 上传源码

仓库获取：[Releases · feedbacklinks](https://github.com/lkcdm/feedbacklinks/releases)

云盘获取：[Axzzz · feedbacklinks](https://panzl.axooo.cn/s/nvx3SJ)

## 使用教程

### 部署步骤

1. 将所有文件上传到服务器的网站根目录（或子目录，如`/feedback/`）；
2. 手动创建`data`子目录，确保 PHP 可读写；
3. 无需配置数据库，程序会自动创建`data/feedbacks.txt`数据文件；
4. 访问前台：`http://你的域名/index.php`；
5. 访问后台：`http://你的域名/admin.php`，默认密码`admin123`（**务必自行修改，PHP几个文件都需要修改，开头可找到**）。

### 关键修改点

1. 后台密码：修改`admin.php`和`update_status.php`中的`define('ADMIN_PWD', 'admin123');`为自定义复杂密码；
2. 样式调整：可修改`index.php`和`admin.php`中的内嵌 CSS，调整科技感样式（如颜色、阴影、圆角等）；
3. 隐私说明：可修改`index.php`中的隐私弹窗文案，适配你的业务场景；
4. 表单验证：可在`save_feedback.php`中调整验证规则（如姓名长度、反馈原因字数限制）。

# 结语

有什么问题和建议随时可以留言或仓库开启issues进行提交，初次尝试，请保证数据安全，勿要投入大范围的生产环境服务器可另开启服务或主机空间。

> 最后更新2026.2.1 | 开发：2026.2.1