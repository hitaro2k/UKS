<?php

if (file_get_contents('php://input')) {
  $data = json_decode(file_get_contents('php://input'), true);
  $items = $data['items'];

  $pdo = new PDO('mysql:host=localhost;dbname=uks-bd', 'root', '');

  $user_id = end($items);

  for ($i = 0; $i < count($items); $i += 3) {
    if (isset($items[$i]) && isset($items[$i+1]) && isset($items[$i+2])) {
      $id_product = $items[$i];
      $price = $items[$i+1];
      $sum = $items[$i+2];


      $stmt = $pdo->prepare("INSERT INTO order_product (id_product, price, sum, user_id) VALUES (:id, :price,  :sum, :user_id)");

      $stmt->bindParam(':id', $id_product);
      $stmt->bindParam(':price', $price);
      $stmt->bindParam(':sum', $sum);
      $stmt->bindParam(':user_id', $user_id);

      $stmt->execute();
    }
  }

}

// if (file_get_contents('php://input')) {
//   $data = json_decode(file_get_contents('php://input'), true);
//   $items = $data['items'];
//   $mysqli = new mysqli('localhost', 'root', '', 'uks-bd');
//   $stmt = $mysqli->prepare("INSERT INTO product (id_product, price, sum ,  `user-id`) VALUES (?, ?, ?)");
  
//   if ($stmt) {
//     for ($i = 0; $i < count($items); $i += 3) {
//       if (isset($items[$i]) && isset($items[$i+1]) && isset($items[$i+2])) {
//         $id_product = $items[$i];
//         $price = $items[$i+1];
//         $sum = $items[$i+2];

//         $stmt->bind_param("sss", $id_product, $price, $sum);
//         $stmt->execute();
//       }
//     }

//     $stmt->close();
//     $mysqli->close();
    
//     $response = array(
//       'status' => 'success',
//       'message' => 'Данные успешно получены',
//       'items' => $items
//     );
//     echo json_encode($response);
//   } else {
//     $response = array(
//       'status' => 'error',
//       'message' => 'Ошибка подготовки запроса'
//     );
//     echo json_encode($response);
//   }
// }


?>