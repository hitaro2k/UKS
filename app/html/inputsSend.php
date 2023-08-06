<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uk service</title>

    <link rel="stylesheet" href="../style/dist/preloader.css">
    <link rel="stylesheet" href="../style/normalize.css">
    <link rel="stylesheet" href="../style/dist/style.css">
    <link rel="icon" type="image/png" href="/img/favicon-32x32.png">

</head>
  <body> 

    <div class="verification" style="display: flex;">

    <form action="../server/middlewares/sendMailForm.php" method="POST" class="input-wrapper">
      <input class="input-verif" name="email" type="text" placeholder="Введіть пошту" value="<?php if(isset($_GET['email'])){ $email = $_GET['email']; echo urldecode($email);}?>" >
      <button class="send-code" type="submit">Получить код</button>
    </form>
      <?php
      if(isset($_GET['success'])){
        echo '<p class="sendMail-success_text">' . $_GET['success'] . '</p>';
      }
      ?>
       <?php
      if(isset($_GET['error'])){
        echo '<p class="sendMail-error__text">' . $_GET['error'] . '</p>';
      }

      ?>
    <form action="../server/middlewares/checkCodeForm.php" method="POST" class="form-wrapper">
      <div class="input-wrapper">
        <input class="input-verif" type="text" name="code" placeholder="Введіть код" id="code">
      </div>
      <?php
      if(isset($_GET['code'])){
        echo '<div class="verif-text">' . $_GET['code'] . '</div>';
      }
      $expectedCode = $_GET['code'];
      ?>
      <div class="verif-btn">
        <button class="abort-btn">Отменить заказ</button>
        <button class="acces-btn" type="submit">Подтвердить</button>
      </div>
    </form>
   
    </div>

  </body>
</html>
