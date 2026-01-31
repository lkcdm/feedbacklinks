<?php
// 定义数据文件路径
define('DATA_FILE', __DIR__ . '/data/feedbacks.txt');
// 确保data目录存在
if (!is_dir(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}
// 确保数据文件存在
if (!file_exists(DATA_FILE)) {
    file_put_contents(DATA_FILE, '', LOCK_EX);
}

// 安全过滤函数
function safeFilter($str) {
    if (is_string($str)) {
        $str = trim($str);
        $str = htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
        $str = addslashes($str);
        $str = strip_tags($str);
    }
    return $str;
}

// 处理跨域
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');
// 强制返回JSON格式（核心修复：统一响应格式）
header('Content-Type: application/json; charset=utf-8');

// 1. 处理公示板数据请求（action=get_board）
if (isset($_GET['action']) && $_GET['action'] === 'get_board') {
    $data = [];
    if (file_exists(DATA_FILE)) {
        $lines = file(DATA_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $item = json_decode($line, true);
            if (is_array($item)) {
                // 修复：补充link（反馈链接）、img_url（截图URL）字段，确保前端能读取
                $data[] = [
                    'id' => $item['id'],
                    'name' => stripslashes($item['name']),
                    'link' => stripslashes($item['link']), // 关键：反馈链接字段
                    'reason' => stripslashes($item['reason']),
                    'img_url' => stripslashes($item['img_url'] ?? ''), // 关键：截图URL字段（兼容空值）
                    'create_time' => $item['create_time'],
                    'status' => $item['status'] ?? 'processing'
                ];
            }
        }
    }
    // 按提交时间倒序
    usort($data, function($a, $b) {
        return strtotime($b['create_time']) - strtotime($a['create_time']);
    });
    // 返回标准JSON
    echo json_encode([
        'code' => 200,
        'msg' => '数据加载成功',
        'data' => $data
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. 处理反馈提交（仅POST请求）
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // 修复：返回JSON而非纯文本
    echo json_encode([
        'code' => 400,
        'msg' => '非法请求，请通过正规表单提交反馈'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 验证核心参数
$name = safeFilter($_POST['name'] ?? '');
$email = safeFilter($_POST['email'] ?? '');
$link = safeFilter($_POST['link'] ?? '');
$reason = safeFilter($_POST['reason'] ?? '');
$img_url = safeFilter($_POST['img_url'] ?? '');

$errors = [];
if (empty($name)) $errors[] = '姓名不能为空';
if (empty($email) || !filter_var(stripslashes($email), FILTER_VALIDATE_EMAIL)) $errors[] = '请输入有效的邮箱';
if (empty($link) || !filter_var(stripslashes($link), FILTER_VALIDATE_URL)) $errors[] = '请输入有效的反馈链接';
if (empty($reason)) $errors[] = '反馈原因不能为空';
if (!empty($img_url) && !filter_var(stripslashes($img_url), FILTER_VALIDATE_URL)) $errors[] = '请输入有效的截图URL';

if (!empty($errors)) {
    // 修复：返回JSON格式的错误信息
    echo json_encode([
        'code' => 400,
        'msg' => implode('，', $errors)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 生成唯一ID
$fbId = uniqid('fb_', true);
// 构造反馈数据
$feedback = [
    'id' => $fbId,
    'name' => $name,
    'email' => $email,
    'link' => $link,
    'reason' => $reason,
    'img_url' => $img_url,
    'create_time' => date('Y-m-d H:i:s'),
    'status' => 'processing' // 处理状态：processing(处理中)、handled(已处理)、unneeded(无需处理)
];

// 写入数据文件（追加模式，加锁防止并发问题）
$line = json_encode($feedback, JSON_UNESCAPED_UNICODE) . PHP_EOL;
file_put_contents(DATA_FILE, $line, FILE_APPEND | LOCK_EX);

// 返回成功响应（JSON格式）
echo json_encode([
    'code' => 200,
    'msg' => '反馈提交成功，我们会尽快处理！',
    'id' => $fbId
], JSON_UNESCAPED_UNICODE);
exit;
?>