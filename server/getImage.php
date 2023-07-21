<?php

require '../vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

if(isset($_POST['submit'])){
  if(!empty($_FILES['file']['tmp_name'])){
      $pdo = new PDO('mysql:host=localhost;dbname=uks-bd', 'root', '');
      $rand = rand(1000, 9999);

      $imgData = file_get_contents($_FILES['file']['tmp_name']);

      $stmt = $pdo->prepare("INSERT INTO getImage (image, rand) VALUES (:img, :rand)");
      $stmt->bindParam(':img', $imgData, PDO::PARAM_LOB); 
      $stmt->bindParam(':rand', $rand);
      $stmt->execute();

      $stmt = $pdo->prepare('SELECT image FROM getImage WHERE rand = :rand');
      $stmt->bindParam(':rand', $rand);
      $stmt->execute();

      $result = $stmt->fetch(PDO::FETCH_OBJ);

      if($result){
          $imageData = $result->image;

          $image = Image::make($imageData);

          $randPathName = rand('9999', 99999);
          $pathToImage = "C:/OSPanel/domains/UK/image/$randPathName.jpg";

          $image->save($pathToImage);
          $stmt = $pdo->prepare("INSERT INTO sec_table (path, rand) VALUES (:path, :rand) ");
          $stmt->bindParam(':path', $pathToImage);
          $stmt->bindParam(':rand', $rand);
          $stmt->execute();
      }
  }
}
?>