<?php

require 'vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;
if (file_get_contents('php://input')) {
  $data = json_decode(file_get_contents('php://input'), true);
  $items = $data['items'];
  $mysql = new mysqli('localhost', 'root', 'test', 'uk-bd');
  for ($i = 0; $i < count($items); $i += 3) {
    if (isset($items[$i]) && isset($items[$i+1]) && isset($items[$i+2])) {
      $id_product = $items[$i];
      $price = $items[$i+1];
      $sum = $items[$i+2];

      $mysql->query("INSERT INTO product (id_product, price, sum) VALUES ('$id_product', '$price', '$sum')");
    }
  }
  $response = array(
    'status' => 'success',
    'message' => 'Данные успешно получены',
    'items' => $items
  );
  echo json_encode($response);
}




if(isset($_FILES['image'])){
  $tmpName = $_FILES['image']['tmp_name'];

  $imgRandName = rand(111111, 999999);
  $filename = "img/$imgRandName.jpg";

  $image = Image::make($tmpName);
  $image->save($filename);
  $pathImg = "C:/xampp/htdocs/dashboard/test/$filename";

  $mysql = new mysqli('localhost', 'root', 'test', 'uk-bd');
  $mysql->query("INSERT INTO photo_path (path) VALUES ('$pathImg')");
  $mysql->close();
}
?>