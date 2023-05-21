<?php
require 'data.php';
$part1 = $data['checkedFormItems'];
$parts = explode(',', $part1); 

$receivedData = isset($data['receivedData']) ? $data['receivedData'] : null;


$id_product = $parts[0];
$price = $parts[1];
$sum = $parts[2];

$mysql = new mysqli('localhost', 'root', 'root', 'uk-bd');
$stmt = $mysql->prepare('INSERT INTO uk (id_product, price, sum, received_data) VALUES (?, ?, ?, ?)');
$stmt->bind_param('iids', $id_product, $price, $sum, $receivedData);
$stmt->execute();
$stmt->close();

$mysql->close();

?>