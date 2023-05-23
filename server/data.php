<?php
$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['checkedFormItems'])) {
  $checkedFormItems = $data['checkedFormItems'];

  $response = array(
    'status' => 'success',
    'message' => 'Данные успешно получены',
    'checkedFormItems' => $checkedFormItems
  );

  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  $response = array(
    'status' => 'error',
    'message' => 'Некорректные данные'
  );

  header('Content-Type: application/json');
  echo json_encode($response);
}

$part1 = $data['checkedFormItems'];
$parts = explode(',', $part1); 

$id_product = $parts[0];
$price = $parts[1];
$sum = $parts[2];

$mysql = new mysqli('localhost', 'root', 'test', 'uk-bd');
$mysql->query("INSERT INTO uk (id_product, price, sum) VALUES('$id_product', '$price', '$sum')");
$mysql->close();
?>