<?php
// 后台密码验证（原有逻辑，无修改）
define('ADMIN_PWD', 'admin123'); // 请修改为自定义复杂密码
session_start();
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['admin_login']);
    header('Location: admin.php');
    exit;
}
if (!isset($_SESSION['admin_login']) && $_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['pwd'] === ADMIN_PWD) {
    $_SESSION['admin_login'] = true;
    header('Location: admin.php');
    exit;
}
// 未登录显示登录界面（原有逻辑，无修改）
if (!isset($_SESSION['admin_login'])) {
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>反馈管理后台 - 登录</title>
    <style>
        body {
            background: linear-gradient(135deg, #1a202c, #2d3748);
            color: #e2e8f0;
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .login-box {
            background: rgba(30, 41, 59, 0.8);
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(79, 209, 197, 0.2);
            border: 1px solid rgba(79, 209, 197, 0.3);
            padding: 40px;
            width: 100%;
            max-width: 400px;
        }
        .login-box h2 {
            text-align: center;
            color: #0ea5e9;
            margin-bottom: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #94a3b8;
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
        .btn {
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
        .btn:hover {
            background: #0ea5e9;
            box-shadow: 0 0 15px rgba(79, 209, 197, 0.5);
        }
        .error {
            color: #ef4444;
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>后台管理登录</h2>
        <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['pwd'] !== ADMIN_PWD): ?>
            <div class="error">密码错误，请重新输入</div>
        <?php endif; ?>
        <form method="post">
            <div class="form-group">
                <label for="pwd">管理密码</label>
                <input type="password" class="form-control" id="pwd" name="pwd" required placeholder="请输入后台密码">
            </div>
            <button type="submit" class="btn">登录</button>
        </form>
    </div>
</body>
</html>
<?php
    exit;
}

// 已登录读取数据（原有逻辑，无修改）
define('DATA_FILE', __DIR__ . '/data/feedbacks.txt');
$data = [];
if (file_exists(DATA_FILE)) {
    $lines = file(DATA_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $item = json_decode($line, true);
        if (is_array($item)) $data[] = $item;
    }
}
usort($data, function($a, $b) {
    return strtotime($b['create_time']) - strtotime($a['create_time']);
});
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>反馈管理后台 - 所有记录（支持删改）</title>
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
            padding: 20px;
        }
        .container {
            max-width: 1200px;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(79, 209, 197, 0.5);
        }
        .header h1 {
            font-size: 22px;
            font-weight: 600;
            color: #fff;
        }
        .logout {
            color: #fff;
            text-decoration: none;
            padding: 8px 15px;
            background: rgba(0,0,0,0.3);
            border-radius: 6px;
            transition: all 0.3s;
        }
        .logout:hover {
            background: rgba(0,0,0,0.5);
        }
        .content {
            padding: 30px;
        }
        .feedback-item {
            padding: 20px;
            border-bottom: 1px solid rgba(79, 209, 197, 0.2);
            border-radius: 6px;
            margin-bottom: 20px;
            background: rgba(15, 23, 42, 0.5);
        }
        .feedback-item:last-child {
            border-bottom: none;
        }
        .feedback-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
            color: #94a3b8;
        }
        .meta-item {
            display: flex;
            align-items: center;
        }
        .meta-item label {
            font-weight: 600;
            color: #0ea5e9;
            margin-right: 8px;
        }
        .meta-item .email {
            color: #38bdf8;
        }
        .meta-item .status {
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 14px;
        }
        .status-processing {
            background: rgba(234, 179, 8, 0.2);
            color: #fbbf24;
        }
        .status-handled {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
        }
        .status-unneeded {
            background: rgba(156, 163, 175, 0.2);
            color: #9ca3af;
        }
        .feedback-link {
            margin: 10px 0;
        }
        .feedback-link a {
            color: #38bdf8;
            text-decoration: none;
            word-break: break-all;
        }
        .feedback-link a:hover {
            text-decoration: underline;
        }
        .feedback-reason {
            line-height: 1.6;
            margin: 15px 0;
            white-space: pre-line;
        }
        .feedback-img {
            margin: 15px 0;
        }
        .feedback-img img {
            max-width: 400px;
            max-height: 300px;
            border-radius: 6px;
            border: 1px solid rgba(79, 209, 197, 0.3);
        }
        .btn-group {
            margin-top: 15px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .btn {
            padding: 8px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
        }
        .btn-handled {
            background: #22c55e;
            color: #fff;
        }
        .btn-handled:hover {
            background: #16a34a;
            box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
        }
        .btn-unneeded {
            background: #9ca3af;
            color: #fff;
        }
        .btn-unneeded:hover {
            background: #6b7280;
            box-shadow: 0 0 10px rgba(156, 163, 175, 0.4);
        }
        .btn-edit {
            background: #0ea5e9;
            color: #fff;
        }
        .btn-edit:hover {
            background: #0284c7;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        }
        .btn-delete {
            background: #ef4444;
            color: #fff;
        }
        .btn-delete:hover {
            background: #dc2626;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.4);
        }
        .no-data {
            text-align: center;
            padding: 50px;
            color: #94a3b8;
            font-size: 18px;
        }
        /* 新增：编辑弹窗样式（科技感，与整体风格统一） */
        .edit-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            padding: 20px;
        }
        .edit-modal.show {
            display: flex;
        }
        .modal-box {
            width: 100%;
            max-width: 600px;
            background: rgba(30, 41, 59, 0.95);
            border-radius: 12px;
            border: 1px solid rgba(79, 209, 197, 0.5);
            padding: 30px;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(79, 209, 197, 0.2);
            padding-bottom: 10px;
        }
        .modal-header h3 {
            color: #0ea5e9;
            font-size: 20px;
        }
        .modal-close {
            background: transparent;
            border: none;
            color: #94a3b8;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.3s;
        }
        .modal-close:hover {
            color: #ef4444;
        }
        .modal-form .form-group {
            margin-bottom: 15px;
        }
        .modal-form label {
            display: block;
            margin-bottom: 6px;
            color: #94a3b8;
            font-size: 14px;
        }
        .modal-form .form-control {
            width: 100%;
            padding: 10px 12px;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(79, 209, 197, 0.3);
            border-radius: 6px;
            color: #e2e8f0;
            font-size: 14px;
        }
        .modal-form .form-control:focus {
            outline: none;
            border-color: #0ea5e9;
            box-shadow: 0 0 8px rgba(14, 165, 233, 0.4);
        }
        .modal-form textarea.form-control {
            min-height: 80px;
            resize: vertical;
        }
        .modal-btn-group {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        .modal-btn {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
        }
        @media (max-width: 768px) {
            .content {
                padding: 20px;
            }
            .feedback-img img {
                max-width: 100%;
            }
            .feedback-meta {
                flex-direction: column;
                gap: 10px;
                align-items: flex-start;
            }
            .btn-group {
                flex-direction: column;
            }
            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>反馈管理后台 - 所有记录（共<?php echo count($data); ?>条）</h1>
            <a href="admin.php?action=logout" class="logout">安全登出</a>
        </div>
        <div class="content">
            <?php if (empty($data)): ?>
                <div class="no-data">暂无反馈记录</div>
            <?php else: ?>
                <?php foreach ($data as $item): ?>
                    <div class="feedback-item" id="fb_<?php echo $item['id']; ?>">
                        <div class="feedback-meta">
                            <div class="meta-item">
                                <label>ID：</label>
                                <span><?php echo $item['id']; ?></span>
                            </div>
                            <div class="meta-item">
                                <label>姓名：</label>
                                <span><?php echo stripslashes($item['name']); ?></span>
                            </div>
                            <div class="meta-item">
                                <label>邮箱：</label>
                                <span class="email"><?php echo stripslashes($item['email']); ?></span>
                            </div>
                            <div class="meta-item">
                                <label>提交时间：</label>
                                <span><?php echo $item['create_time']; ?></span>
                            </div>
                            <div class="meta-item">
                                <label>状态：</label>
                                <span class="status <?php echo $item['status']; ?>">
                                    <?php echo $item['status'] === 'processing' ? '正在处理' : ($item['status'] === 'handled' ? '已处理' : '无需处理'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="feedback-link">
                            <label>反馈链接：</label>
                            <a href="<?php echo stripslashes($item['link']); ?>" target="_blank"><?php echo stripslashes($item['link']); ?></a>
                        </div>
                        <div class="feedback-reason">
                            <label style="color: #0ea5e9; font-weight: 600;">反馈原因：</label>
                            <?php echo stripslashes($item['reason']); ?>
                        </div>
                        <?php if (!empty($item['img_url'])): ?>
                            <div class="feedback-img">
                                <label style="color: #0ea5e9; font-weight: 600;">截图：</label>
                                <br>
                                <img src="<?php echo stripslashes($item['img_url']); ?>" alt="反馈截图">
                            </div>
                        <?php endif; ?>
                        <!-- 新增：编辑、删除按钮 + 原有状态按钮，整合按钮组 -->
                        <div class="btn-group">
                            <button class="btn btn-edit" onclick="openEditModal('<?php echo $item['id']; ?>', '<?php echo stripslashes($item['name']); ?>', '<?php echo stripslashes($item['email']); ?>', '<?php echo stripslashes($item['link']); ?>', '<?php echo str_replace("\n", "\\n", stripslashes($item['reason'])); ?>', '<?php echo stripslashes($item['img_url']); ?>')">编辑反馈</button>
                            <button class="btn btn-delete" onclick="deleteFeedback('<?php echo $item['id']; ?>')">删除反馈</button>
                            <?php if ($item['status'] === 'processing'): ?>
                                <button class="btn btn-handled" onclick="updateStatus('<?php echo $item['id']; ?>', 'handled')">标记为已处理</button>
                                <button class="btn btn-unneeded" onclick="updateStatus('<?php echo $item['id']; ?>', 'unneeded')">标记为无需处理</button>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>

    <!-- 新增：编辑反馈弹窗（默认隐藏，点击编辑按钮显示） -->
    <div class="edit-modal" id="editModal">
        <div class="modal-box">
            <div class="modal-header">
                <h3>编辑反馈记录</h3>
                <button class="modal-close" onclick="closeEditModal()">&times;</button>
            </div>
            <form class="modal-form" id="editForm">
                <input type="hidden" name="id" id="editFbId">
                <input type="hidden" name="action" value="edit">
                <div class="form-group">
                    <label for="editName">姓名 *</label>
                    <input type="text" class="form-control" id="editName" name="name" required>
                </div>
                <div class="form-group">
                    <label for="editEmail">联系邮箱 *</label>
                    <input type="email" class="form-control" id="editEmail" name="email" required>
                </div>
                <div class="form-group">
                    <label for="editLink">反馈链接 *</label>
                    <input type="url" class="form-control" id="editLink" name="link" required>
                </div>
                <div class="form-group">
                    <label for="editReason">反馈原因 *</label>
                    <textarea class="form-control" id="editReason" name="reason" required></textarea>
                </div>
                <div class="form-group">
                    <label for="editImgUrl">截图URL（选填）</label>
                    <input type="url" class="form-control" id="editImgUrl" name="img_url">
                </div>
                <div class="modal-btn-group">
                    <button type="button" class="modal-btn btn-unneeded" onclick="closeEditModal()">取消</button>
                    <button type="submit" class="modal-btn btn-edit">保存修改</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // 原有：更新处理状态（无修改）
        function updateStatus(fbId, status) {
            if (!confirm(status === 'handled' ? '确定标记为已处理？' : '确定标记为无需处理？')) {
                return;
            }
            fetch('update_status.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `id=${fbId}&status=${status}`
            })
            .then(res => res.json())
            .then(data => {
                data.code === 200 ? (alert('状态更新成功'), window.location.reload()) : alert('更新失败：' + data.msg);
            }).catch(err => {
                alert('更新失败，请稍后重试');
                console.error(err);
            });
        }

        // 新增：打开编辑弹窗，赋值原有数据
        function openEditModal(id, name, email, link, reason, imgUrl) {
            document.getElementById('editFbId').value = id;
            document.getElementById('editName').value = name;
            document.getElementById('editEmail').value = email;
            document.getElementById('editLink').value = link;
            document.getElementById('editReason').value = reason.replace(/\\n/g, '\n');
            document.getElementById('editImgUrl').value = imgUrl;
            document.getElementById('editModal').classList.add('show');
            // 点击弹窗外层关闭
            document.getElementById('editModal').onclick = function(e) {
                if (e.target === this) closeEditModal();
            }
        }

        // 新增：关闭编辑弹窗
        function closeEditModal() {
            document.getElementById('editModal').classList.remove('show');
            document.getElementById('editForm').reset();
        }

        // 新增：提交编辑表单
        document.getElementById('editForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            fetch('edit_feedback.php', {
                method: 'POST',
                body: new URLSearchParams(formData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    alert(data.msg);
                    closeEditModal();
                    window.location.reload(); // 刷新页面显示修改后数据
                } else {
                    alert('修改失败：' + data.msg);
                }
            }).catch(err => {
                alert('修改失败，请稍后重试');
                console.error(err);
            });
        });

        // 新增：删除反馈（二次确认）
        function deleteFeedback(fbId) {
            if (!confirm('⚠️ 警告：此操作将永久删除该反馈记录，无法恢复！\n确定要删除吗？')) {
                return;
            }
            fetch('edit_feedback.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `action=delete&id=${fbId}`
            })
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    alert(data.msg);
                    window.location.reload(); // 刷新页面移除删除的记录
                } else {
                    alert('删除失败：' + data.msg);
                }
            }).catch(err => {
                alert('删除失败，请稍后重试');
                console.error(err);
            });
        }
    </script>
</body>
</html>