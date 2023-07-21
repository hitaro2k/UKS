<?php

if (file_get_contents('php://input')) {
  $data = json_decode(file_get_contents('php://input'), true);
  $items = $data['items'];
  $mysql = new mysqli('localhost', 'root', '', 'uks-bd');

  for ($i = 0; $i < count($items); $i += 3) {
    if (isset($items[$i]) && isset($items[$i+1]) && isset($items[$i+2])) {
      $id_product = $items[$i];
      $price = $items[$i+1];
      $sum = $items[$i+2];
      $user_id = $items[$i+3];

      $selectNumber = $mysql->query("SELECT Наличие FROM all_production WHERE Код = '$id_product'");
      $row = $selectNumber->fetch_assoc();
      $number = $row['Наличие'];

      $quantity = $number - $sum;
      
      $mysql->query("UPDATE all_production SET Наличие = $quantity WHERE Код = '$id_product'");
      $mysql->query("INSERT INTO product (id_product, price, sum ,`user-id` ) VALUES ('$id_product', '$price', '$sum' , '$user_id')");
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