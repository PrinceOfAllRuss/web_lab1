<?php
session_start();
// session_destroy();
// var_dump($_GET);
$x = $_GET['x'];
$y = $_GET['y'];
$r = $_GET['r'];
$condition = false;
$conditionStr = 'false';
date_default_timezone_set("Europe/Moscow");
$timeNow = date('H:i:s', time());
$start = microtime(true);
$end = '0';

if ($x >= 0 && $y >= 0) { //1 четверть
	if ($x <= $r / 2 && $y <= $r) $condition = true;
} elseif ($x <= 0 && $y >= 0) { //2 четверть
	if ($x >= -$r && $y <= $r) {
		if (pow($x, 2) + pow($y, 2) <= pow($r, 2)) $condition = true;
	}
} elseif ($x >= 0 && $y <= 0) { //4 четветь
	if ($x <= $r / 2 && $y >= -$r) {
		if ($x == 0) {
			$condition = true;
		} elseif ((-$r - $y) / -$x >= 2) $condition = true;
	}
}

$arr = array(
	'x' => $x, 'y' => $y, 'r' => $r, 'condition' => $condition,
	'work_time' => sprintf('%.6f', microtime(true) - $start), 'time' => $timeNow
);

if (!isset($_SESSION['number_of_requests'])) {
	$_SESSION['number_of_requests'] = 0;
}
$numberOfRequests = $_SESSION['number_of_requests'];
$_SESSION['request_number_' . strval($numberOfRequests)] = $arr;
$_SESSION['number_of_requests'] = $numberOfRequests + 1;

echo json_encode($_SESSION);
