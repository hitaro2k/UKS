<?php
require 'data.php';
$part1 = $data['checkedFormItems'];
$parts = explode(',', $part1); 

$id_product = $parts[0];
$price = $parts[1];
$sum = $parts[2];

$mysql = new mysqli('localhost', 'root', 'root', 'uk-bd');
$mysql->query('INSERT INTO uk (id_product, price, sum) VALUES($id_product, $price, $sum)');
$mysql->close();

