<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$dDepartment = $_POST['delivery-department'];
$dSolo = $_POST['delivery-solo'];

if (isset($name, $surname, $phone)) {
   $dsn = 'mysql:host=localhost;dbname=uks-bd';
   $username = 'root';
   $password = '';

   try {
      if (empty($dDepartment)) {
         $dSolo = 1;
      }      
      $pdo = new PDO($dsn, $username, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      $stmt = $pdo->prepare("INSERT INTO personal_data (`name`, surname, phone, `delivery-department`, `delivery-solo`) VALUES (:name, :surname, :phone, :dDepartment, :dSolo)");

      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':surname', $surname);
      $stmt->bindParam(':phone', $phone);
      $stmt->bindParam(':dDepartment', $dDepartment);
      $stmt->bindParam(':dSolo', $dSolo);

      $stmt->execute();
      echo "Дані успішно додані до бази даних.";
   } catch (PDOException $e) {
      echo "Помилка: " . $e->getMessage();
   }
}
?>