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
?>