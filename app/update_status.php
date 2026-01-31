<?php
// 禁止未授权访问（仅允许后台请求）
session_start();
define('ADMIN_PWD', 'admin123');
if (!isset($_SESSION['admin_login'])) {
    http_response_code(403);
    echo json_encode(['code' => 403, 'msg' => '未授权访问']);
    exit;
}

// 仅允许POST请求
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['code' => 400, 'msg' => '仅支持POST请求']);
    exit;
}

// 接收并验证参数
$id = trim($_POST['id'] ?? '');
$status = trim($_POST['status'] ?? '');
// 允许的状态值
$allowStatus = ['handled', 'unneeded'];
if (empty($id) || !in_array($status, $allowStatus)) {
    echo json_encode(['code' => 400, 'msg' => '参数错误']);
    exit;
}

// 定义数据文件路径
define('DATA_FILE', __DIR__ . '/data/feedbacks.txt');
if (!file_exists(DATA_FILE)) {
    echo json_encode(['code' => 500, 'msg' => '数据文件不存在']);
    exit;
}

// 读取并修改数据
$lines = file(DATA_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$updated = false;
$newLines = [];
foreach ($lines as $line) {
    $item = json_decode($line, true);
    if (is_array($item) && $item['id'] === $id) {
        $item['status'] = $status;
        $updated = true;
    }
    $newLines[] = json_encode($item, JSON_UNESCAPED_UNICODE);
}

// 未找到对应ID
if (!$updated) {
    echo json_encode(['code' => 404, 'msg' => '反馈记录不存在']);
    exit;
}

// 重新写入文件
$fp = fopen(DATA_FILE, 'w');
foreach ($newLines as $line) {
    fwrite($fp, $line . PHP_EOL);
}
fclose($fp);

// 返回成功结果
echo json_encode(['code' => 200, 'msg' => '状态更新成功']);
exit;
?>