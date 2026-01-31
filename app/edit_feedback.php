<?php
// 1. 权限验证：仅允许已登录的后台访问
session_start();
define('ADMIN_PWD', 'admin123'); // 与admin.php保持一致的后台密码
if (!isset($_SESSION['admin_login'])) {
    http_response_code(403);
    echo json_encode(['code' => 403, 'msg' => '未授权访问，禁止操作']);
    exit;
}

// 2. 仅允许POST请求
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['code' => 400, 'msg' => '仅支持POST请求']);
    exit;
}

// 3. 定义数据文件路径（与原有文件一致，兼容历史数据）
define('DATA_FILE', __DIR__ . '/data/feedbacks.txt');
if (!file_exists(DATA_FILE)) {
    echo json_encode(['code' => 500, 'msg' => '数据文件不存在，暂无反馈记录']);
    exit;
}

// 4. 安全过滤函数（与save_feedback.php一致，保证数据一致性）
function safeFilter($str) {
    if (is_string($str)) {
        $str = trim($str);
        $str = htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
        $str = addslashes($str);
        $str = strip_tags($str);
    }
    return $str;
}

// 5. 接收核心参数：操作类型（edit/delete）、反馈ID
$action = trim($_POST['action'] ?? '');
$fbId = trim($_POST['id'] ?? '');
if (empty($action) || empty($fbId) || !in_array($action, ['edit', 'delete'])) {
    echo json_encode(['code' => 400, 'msg' => '参数错误，操作类型无效']);
    exit;
}

// 6. 读取原有数据
$lines = file(DATA_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$newLines = [];
$found = false; // 标记是否找到对应ID的反馈

// ====================== 操作1：删除反馈 ======================
if ($action === 'delete') {
    foreach ($lines as $line) {
        $item = json_decode($line, true);
        if (is_array($item) && $item['id'] === $fbId) {
            $found = true;
            continue; // 跳过该条数据，实现删除
        }
        $newLines[] = $line; // 保留其他数据
    }
    if (!$found) {
        echo json_encode(['code' => 404, 'msg' => '反馈记录不存在，删除失败']);
        exit;
    }
    // 重新写入文件（覆盖原有数据，完成删除）
    file_put_contents(DATA_FILE, implode(PHP_EOL, $newLines) . PHP_EOL);
    echo json_encode(['code' => 200, 'msg' => '反馈记录删除成功']);
    exit;
}

// ====================== 操作2：编辑修改反馈 ======================
if ($action === 'edit') {
    // 接收并过滤修改后的参数（与前台表单字段一致，可选字段做非空判断）
    $name = safeFilter($_POST['name'] ?? '');
    $email = safeFilter($_POST['email'] ?? '');
    $link = safeFilter($_POST['link'] ?? '');
    $reason = safeFilter($_POST['reason'] ?? '');
    $img_url = safeFilter($_POST['img_url'] ?? '');

    // 数据校验（与save_feedback.php一致，保证修改后数据有效）
    $errors = [];
    if (empty($name)) $errors[] = '姓名不能为空';
    if (empty($email) || !filter_var(stripslashes($email), FILTER_VALIDATE_EMAIL)) $errors[] = '请输入有效的邮箱';
    if (empty($link) || !filter_var(stripslashes($link), FILTER_VALIDATE_URL)) $errors[] = '请输入有效的反馈链接';
    if (empty($reason)) $errors[] = '反馈原因不能为空';
    if (!empty($img_url) && !filter_var(stripslashes($img_url), FILTER_VALIDATE_URL)) $errors[] = '请输入有效的截图URL';
    
    if (!empty($errors)) {
        echo json_encode(['code' => 400, 'msg' => implode('，', $errors)]);
        exit;
    }

    // 遍历数据并修改对应记录
    foreach ($lines as $line) {
        $item = json_decode($line, true);
        if (is_array($item) && $item['id'] === $fbId) {
            $found = true;
            // 更新字段（保留原有创建时间、状态，仅修改内容）
            $item['name'] = $name;
            $item['email'] = $email;
            $item['link'] = $link;
            $item['reason'] = $reason;
            $item['img_url'] = $img_url;
            $newLines[] = json_encode($item, JSON_UNESCAPED_UNICODE);
        } else {
            $newLines[] = $line; // 保留其他数据
        }
    }

    if (!$found) {
        echo json_encode(['code' => 404, 'msg' => '反馈记录不存在，修改失败']);
        exit;
    }

    // 重新写入文件（完成修改）
    file_put_contents(DATA_FILE, implode(PHP_EOL, $newLines) . PHP_EOL);
    echo json_encode(['code' => 200, 'msg' => '反馈记录修改成功，页面即将刷新']);
    exit;
}

// 非法操作兜底
echo json_encode(['code' => 500, 'msg' => '服务器内部错误，操作失败']);
exit;
?>