<?php

header('Content-Type: application/json');
$mysql = new mysqli('localhost', 'root', '', 'uks-bd');
$allData = $mysql->query("SELECT * FROM all_production");
$dataArray = [];
while ($row = $allData->fetch_assoc()) {
    $dataArray[] = $row;
}
echo json_encode($dataArray);

?>