<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';


class sendMailMiddleware extends Middleware{

   public function handle(Request $request){
    
      try{

         $code = rand(100000, 999999);

         $mail = new PHPMailer(true);
         $mail->isSMTP();
         $mail->Host = 'smtp.gmail.com';
         $mail->Port = 465;
         $mail->SMTPAuth = true;
         $mail->Username = 'verifyuks@gmail.com';
         $mail->Password = 'lkgaddamkqmefcmv';
         $mail->SMTPSecure = 'ssl';
         $mail->setFrom($mail->Username);

         $inputEmail = $request->input('email');

         $mail->addAddress($inputEmail, 'JoeUser');
         $mail->Subject = 'Verification code';   
         $mail->Body = $code;

         $mail->send();
         session_start();

         $_SESSION['email'] = $inputEmail;
         $_SESSION['code'] = $mail->Body;
         header("Location: http://uk/app/html/inputsSend.php?email=" . urlencode($inputEmail) . "&success=Пароль+надіслано+на+вашу+пошту" );
         exit(); 

     } catch (Exception $e){
      header("Location: http://uk/app/html/inputsSend.php?email=" . urlencode($inputEmail) . "&error=Неправильний+формат+пошти" );
      exit();
     }
   }
}