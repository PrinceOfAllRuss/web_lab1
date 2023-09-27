<?php
session_start();
// session_destroy();

if (!isset($_SESSION['number_of_requests'])) {
	$_SESSION['number_of_requests'] = 0;
}
if (!isset($_SESSION['result'])) {
	$_SESSION['result'] = 'ok';
}

$x = $_GET['x'];
$y = $_GET['y'];
$r = $_GET['r'];

//Проверка входящих данных
$strX = (string)$x;
$strY = (string)$y;
$strR = (string)$r;

$strX = str_replace(",", ".", $strX);
$strY = str_replace(",", ".", $strY);
$strR = str_replace(",", ".", $strR);

if (!is_numeric($strX)) {
	$_SESSION['result'] = 'X не является числом';
	echo json_encode($_SESSION);
} else {
	$x = (float)$strX;
	if ($x > 3 || $x < -5) {
		$_SESSION['result'] = 'X не входит в указанный промежуток';
		echo json_encode($_SESSION);
	}
}

if (!is_numeric($strY)) {
	$_SESSION['result'] = 'Y не является числом';
	echo json_encode($_SESSION);
} else {
	$y = (float)$strY;
	if ($y > 3 || $y < -3) {
		$_SESSION['result'] = 'Y не входит в указанный промежуток';
		echo json_encode($_SESSION);
	}
}

if (!is_numeric($strR)) {
	$_SESSION['result'] = 'R не является числом';
	echo json_encode($_SESSION);
} else {
	$r = (float)$strR;
	if ($r > 3 || $r < -3) {
		$_SESSION['result'] = 'R не входит в указанный промежуток';
		echo json_encode($_SESSION);
	}
}


//Проверка попадания точки в область графика
$condition = false;
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

$numberOfRequests = $_SESSION['number_of_requests'];
$_SESSION['request_number_' . strval($numberOfRequests)] = $arr;
$_SESSION['number_of_requests'] = $numberOfRequests + 1;
$_SESSION['result'] = 'ok';

echo json_encode($_SESSION);
