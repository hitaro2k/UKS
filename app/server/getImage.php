<?php

require '../vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

if(isset($_POST['submit'])){
  $pdo = new PDO('mysql:host=localhost;dbname=uks-bd', 'root', '');

  $imgData = file_get_contents($_FILES['file']['tmp_name']);
  $rand = $_POST['user-id'];

  $stmt = $pdo->prepare("INSERT INTO blob_file (image, user_id) VALUES (:img, :rand)");

  $stmt->bindParam(':img', $imgData, PDO::PARAM_LOB); 
  $stmt->bindParam(':rand', $rand);
  $stmt->execute();

  $stmt = $pdo->prepare("SELECT image FROM blob_file WHERE user_id = :rand");
  $stmt->bindParam(':rand', $rand);
  $stmt->execute();

  $result = $stmt->fetch(PDO::FETCH_OBJ);

  if($result){
      $imageData = $result->image;

      $image = Image::make($imageData);

      $randPathName = rand('9999', 99999);
      $pathToImage = "C:/OSPanel/domains/UK/image/$randPathName.jpg";

      $image->save($pathToImage);
      $stmt = $pdo->prepare("INSERT INTO image (path, user_id) VALUES (:path, :rand) ");
      $stmt->bindParam(':path', $pathToImage);
      $stmt->bindParam(':rand', $rand);
      $stmt->execute();
  }
}