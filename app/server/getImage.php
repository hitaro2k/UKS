<?php
require './vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

if(isset($_FILES['file'])){
  $pdo = new PDO('mysql:host=localhost;dbname=uks-bd', 'root', '');

  $imgData = $_FILES['file']['tmp_name'];
  $rand = $_POST['unique_input_value'];

  $blob = $pdo->prepare("INSERT INTO blob_file (image, user_id) VALUES (:img, :rand)");

  $blob->bindParam(':img', $imgData, PDO::PARAM_LOB); 
  $blob->bindParam(':rand', $rand);
  $blob->execute();

  $getImage = $pdo->prepare("SELECT image FROM blob_file WHERE user_id = :rand");
  $getImage->bindParam(':rand', $rand, PDO::PARAM_INT);
  $getImage->execute();

  $row = $getImage->fetch(PDO::FETCH_ASSOC);
  $blobData = $row['image'];

  if($blobData){
      $image = Image::make($blobData);

      $randPathName = rand(100000, 999999);
      $pathToImage = "C:/OSPanel/domains/UK/app/image/$randPathName.jpg";

      $image->save($pathToImage);
      $sendImage = $pdo->prepare("INSERT INTO image (path, user_id) VALUES (:path, :rand) ");
      $sendImage->bindParam(':path', $pathToImage);
      $sendImage->bindParam(':rand', $rand);
      $sendImage->execute();
  }
}