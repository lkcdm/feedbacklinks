<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>朽秋秋雨链接反馈</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif;
        }
        body {
            background: linear-gradient(135deg, #1a202c, #2d3748);
            color: #e2e8f0;
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: rgba(30, 41, 59, 0.8);
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(79, 209, 197, 0.2);
            border: 1px solid rgba(79, 209, 197, 0.3);
            overflow: hidden;
        }
        .header {
            padding: 20px;
            background: linear-gradient(90deg, #2563eb, #0ea5e9);
            text-align: center;
            border-bottom: 1px solid rgba(79, 209, 197, 0.5);
        }
        .header h1 {
            font-size: 24px;
            color: #fff;
            font-weight: 600;
        }
        .btn-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 20px;
            border-bottom: 1px solid rgba(79, 209, 197, 0.2);
        }
        .btn {
            padding: 10px 30px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s;
            color: #fff;
        }
        .btn-submit {
            background: #2563eb;
        }
        .btn-submit:hover {
            background: #0ea5e9;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        }
        .btn-board {
            background: #0ea5e9;
        }
        .btn-board:hover {
            background: #2563eb;
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
        }
        .content {
            padding: 30px;
            display: none;
        }
        .content.active {
            display: block;
        }
        /* 提交表单样式 */
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #94a3b8;
            font-weight: 600;
        }
        .form-control {
            width: 100%;
            padding: 12px 15px;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(79, 209, 197, 0.3);
            border-radius: 6px;
            color: #e2e8f0;
            font-size: 16px;
        }
        .form-control:focus {
            outline: none;
            border-color: #0ea5e9;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        }
        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }
        .submit-btn {
            width: 100%;
            padding: 12px;
            background: #2563eb;
            color: #fff;
            border: none;
            border-radius: 6px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s;
        }
        .submit-btn:hover {
            background: #0ea5e9;
            box-shadow: 0 0 15px rgba(79, 209, 197, 0.5);
        }
        /* 公示板核心样式（重点优化） */
        .board-content {
            padding: 10px;
        }
        .feedback-item {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid rgba(79, 209, 197, 0.3);
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        /* 反馈头部（紧凑排版） */
        .feedback-header {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 15px;
            align-items: center;
            padding-bottom: 10px;
            border-bottom: 1px dashed rgba(79, 209, 197, 0.4);
        }
        .feedback-name {
            color: #0ea5e9;
            font-weight: 600;
            font-size: 16px;
        }
        .feedback-status {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .status-processing {
            background: rgba(234, 179, 8, 0.2);
            color: #fbbf24;
            border: 1px dashed #fbbf24;
        }
        .status-handled {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            border: 1px dashed #22c55e;
        }
        .status-unneeded {
            background: rgba(156, 163, 175, 0.2);
            color: #9ca3af;
            border: 1px dashed #9ca3af;
        }
        .feedback-time {
            color: #94a3b8;
            font-size: 12px;
        }
        /* 反馈内容项（虚线框+紧凑间距） */
        .feedback-content-item {
            border: 1px dashed rgba(79, 209, 197, 0.5);
            border-radius: 6px;
            padding: 10px 12px;
            margin-bottom: 10px; /* 缩小项之间的间距 */
            background: rgba(20, 33, 61, 0.5);
        }
        .feedback-content-item:last-child {
            margin-bottom: 0; /* 最后一项取消间距 */
        }
        .item-label {
            color: #94a3b8;
            font-size: 14px;
            margin-right: 8px;
            font-weight: 600;
        }
        .feedback-link a {
            color: #38bdf8;
            text-decoration: none;
            word-break: break-all;
            font-size: 14px;
        }
        .feedback-link a:hover {
            text-decoration: underline;
            color: #0ea5e9;
        }
        .feedback-reason {
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-line;
            color: #e2e8f0;
        }
        /* 图片预览+放大功能 */
        .feedback-img {
            position: relative;
        }
        .img-preview {
            max-width: 200px; /* 默认缩小预览图 */
            max-height: 180px;
            border-radius: 6px;
            border: 1px solid rgba(79, 209, 197, 0.5);
            cursor: zoom-in;
            transition: all 0.3s;
        }
        .img-preview:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.5);
        }
        /* 图片放大遮罩层 */
        .img-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 9999;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .img-modal img {
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            border: 2px solid #0ea5e9;
        }
        .img-modal-close {
            position: absolute;
            top: 20px;
            right: 30px;
            color: #fff;
            font-size: 30px;
            cursor: pointer;
            transition: all 0.3s;
        }
        .img-modal-close:hover {
            color: #ef4444;
            transform: scale(1.1);
        }
        .no-data {
            text-align: center;
            padding: 40px;
            color: #94a3b8;
            font-size: 16px;
        }
        /* 提示框样式 */
        .alert {
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            display: none;
        }
        .alert-success {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .alert-error {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }
        @media (max-width: 768px) {
            .btn-group {
                flex-direction: column;
            }
            .btn {
                width: 100%;
            }
            .feedback-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
            .img-preview {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>朽秋秋雨链接反馈</h1>
        </div>
        <div class="btn-group">
            <button class="btn btn-submit" onclick="showTab('submit')">提交反馈</button>
            <button class="btn btn-board" onclick="showTab('board')">处理公示板</button>
        </div>

        <!-- 提交反馈表单 -->
        <div class="content active" id="submit-content">
            <div class="alert" id="submit-alert"></div>
            <form id="feedback-form">
                <div class="form-group">
                    <label for="name">姓名 *</label>
                    <input type="text" class="form-control" id="name" name="name" required placeholder="请输入您的姓名">
                </div>
                <div class="form-group">
                    <label for="email">联系邮箱 *</label>
                    <input type="email" class="form-control" id="email" name="email" required placeholder="请输入您的邮箱，方便回复">
                </div>
                <div class="form-group">
                    <label for="link">反馈链接 *</label>
                    <input type="url" class="form-control" id="link" name="link" required placeholder="请输入反馈相关的链接（如网页、商品链接等）">
                </div>
                <div class="form-group">
                    <label for="reason">反馈原因 *</label>
                    <textarea class="form-control" id="reason" name="reason" required placeholder="请详细描述您的反馈原因，换行请按Enter"></textarea>
                </div>
                <div class="form-group">
                    <label for="img_url">截图URL（选填）</label>
                    <input type="url" class="form-control" id="img_url" name="img_url" placeholder="请输入截图的在线URL（如阿里云OSS、腾讯云COS链接）">
                </div>
                <button type="submit" class="submit-btn">提交反馈</button>
            </form>
        </div>
        <!-- 公示板内容 -->
        <div class="content" id="board-content">
            <div class="board-content" id="feedback-list">
                加载中...
            </div>
        </div>
    </div>
    <br>
<!-- 仅添加居中容器，其他保留原样 -->
<div style="text-align: center; width: 100%;">
  获取本页面源码：返回博客搜索【链接反馈】
</div>
    <!-- 图片放大遮罩层 -->
    <div class="img-modal" id="imgModal" onclick="closeImgModal()">
        <span class="img-modal-close" id="imgModalClose">&times;</span>
        <img id="modalImg" src="" alt="放大预览">
    </div>

    <script>
        // 切换标签页
        function showTab(tab) {
            document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
            if (tab === 'submit') {
                document.getElementById('submit-content').classList.add('active');
            } else if (tab === 'board') {
                document.getElementById('board-content').classList.add('active');
                loadBoardData();
            }
        }

        // 加载公示板数据
        function loadBoardData() {
            const feedbackList = document.getElementById('feedback-list');
            feedbackList.innerHTML = '加载中...';
            
            fetch('save_feedback.php?action=get_board')
                .then(res => {
                    if (!res.ok) throw new Error('服务器响应异常');
                    return res.json();
                })
                .then(result => {
                    if (result.code === 200) {
                        renderBoard(result.data);
                    } else {
                        feedbackList.innerHTML = `<div class="no-data">数据加载失败：${result.msg}</div>`;
                    }
                })
                .catch(err => {
                    console.error('加载失败：', err);
                    feedbackList.innerHTML = '<div class="no-data">数据加载失败，请稍后重试</div>';
                });
        }

        // 渲染公示板数据（优化样式+图片放大）
        function renderBoard(data) {
            const feedbackList = document.getElementById('feedback-list');
            
            if (data.length === 0) {
                feedbackList.innerHTML = '<div class="no-data">暂无反馈记录</div>';
                return;
            }

            let html = '';
            data.forEach((item, index) => {
                const statusText = item.status === 'processing' ? '正在处理' : (item.status === 'handled' ? '已处理' : '无需处理');
                const statusClass = item.status === 'processing' ? 'status-processing' : (item.status === 'handled' ? 'status-handled' : 'status-unneeded');
                
                // 每个内容项用虚线框包裹，缩小间距
                html += `
                    <div class="feedback-item" data-id="${item.id}">
                        <div class="feedback-header">
                            <span class="feedback-name">反馈人：${item.name}</span>
                            <span class="feedback-status ${statusClass}">${statusText}</span>
                            <span class="feedback-time">提交时间：${item.create_time}</span>
                        </div>
                        <!-- 反馈链接（虚线框） -->
                        <div class="feedback-content-item feedback-link">
                            <span class="item-label">反馈链接：</span>
                            <a href="${item.link}" target="_blank">${item.link}</a>
                        </div>
                        <!-- 反馈原因（虚线框） -->
                        <div class="feedback-content-item feedback-reason">
                            <span class="item-label">反馈原因：</span>
                            ${item.reason.replace(/\n/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;')}
                        </div>
                        <!-- 截图预览（虚线框） -->
                        ${item.img_url ? `
                            <div class="feedback-content-item feedback-img">
                                <span class="item-label">截图预览：</span><br>
                                <img src="${item.img_url}" alt="反馈截图" class="img-preview" 
                                     onclick="openImgModal('${item.img_url}'); event.stopPropagation()">
                            </div>
                        ` : ''}
                    </div>
                `;
            });

            feedbackList.innerHTML = html;
        }

        // 打开图片放大弹窗
        function openImgModal(imgUrl) {
            const modal = document.getElementById('imgModal');
            const modalImg = document.getElementById('modalImg');
            modalImg.src = imgUrl;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // 禁止背景滚动
        }

        // 关闭图片放大弹窗
        function closeImgModal() {
            const modal = document.getElementById('imgModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 恢复滚动
        }

        // 点击关闭按钮关闭弹窗
        document.getElementById('imgModalClose').addEventListener('click', function(e) {
            e.stopPropagation();
            closeImgModal();
        });

        // 提交反馈表单
        document.getElementById('feedback-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const alertBox = document.getElementById('submit-alert');
            alertBox.style.display = 'none';

            const formData = new FormData(this);
            fetch('save_feedback.php', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                alertBox.className = data.code === 200 ? 'alert alert-success' : 'alert alert-error';
                alertBox.textContent = data.msg;
                alertBox.style.display = 'block';
                if (data.code === 200) this.reset();
            })
            .catch(err => {
                alertBox.className = 'alert alert-error';
                alertBox.textContent = '提交失败，请稍后重试';
                alertBox.style.display = 'block';
            });
        });

        // 页面加载默认显示提交反馈
        window.onload = () => showTab('submit');
    </script>
</body>
</html>