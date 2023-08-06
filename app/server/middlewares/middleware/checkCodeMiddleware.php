<?php

class checkCodeMiddleware extends Middleware{
   public function handle(Request $request){
      $inputCode = $request->input('code');
      session_start();
      $inputEmail = $_SESSION['email'];
      
      $code = $_SESSION['code'];
      if($inputCode == $code){
         header("Location: http://uk/info-form.html?code=$code");
      }else{
         header("Location: http://uk/app/html/inputsSend.php?input=Инпут+" . urlencode($inputCode) . "&code=Код+"  . "&error=Не+правильно". "&email=" . urlencode($inputEmail) );
      }
      
   }
}