<?php

   $name = $_POST['name'];
   $patronymic = $_POST['patronymic'];
   $surname = $_POST['surname'];
   $phone = $_POST['phone'];
   $dDepartment = $_POST['delivery-department'];
   $dSolo = $_POST['delivery-solo'];
   $userId = $_POST['user-id'];
   $status = '1';

   if (isset($name, $surname, $phone)) {

      try {
         if (empty($dDepartment)) {
            $dSolo = 1;
         }

         $pdo = new PDO('mysql:host=localhost;dbname=uks-bd', 'root', '');
         $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

         $stmt = $pdo->prepare("INSERT INTO personal_data (name, patronymic, surname, phone, deliveryDepartment, deliverySolo, user_id)
                                VALUES                    (:name, :patronymic, :surname, :phone, :dDepartment, :dSolo, :userId)");

         $stmt->bindParam(':name', $name);
         $stmt->bindParam(':patronymic', $patronymic);
         $stmt->bindParam(':surname', $surname);
         $stmt->bindParam(':phone', $phone);
         $stmt->bindParam(':dDepartment', $dDepartment);
         $stmt->bindParam(':dSolo', $dSolo);
         $stmt->bindParam(':userId', $userId);

         $stmt->execute();
         echo "Дані успішно додані до бази даних.";
      } catch (PDOException $e) {
         echo "Помилка: " . $e->getMessage();
      }
   }
?>