<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../style/dist/preloader.css">
  <link rel="stylesheet" href="../style/normalize.css">
  <link rel="stylesheet" href="../style/dist/style.css">
</head>
<body>
  <div class="form-container">
      <div class="close-wrapper">
          <img src="/img/close.svg" alt="" class="close-popup" >
      </div>
      <div class="form-wrapper">
        <form method="post" action="" class="form-data">
          <p class="title">Особисті дані</p>
          <div class="input-wrapper"><input type="text" placeholder = "Ім'я"></div>
          <div class="input-wrapper"><input type="text" placeholder = "По батькові"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Прізвище"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Пошта"></div>

          <button class = "btn-data-sumb"  type="submit">Зберегти</button>
        </form>
      </div>
        
      <div class="form-wrapper">
        <form method="post" action="" class="form-data">
          <p class="title">Зміна пароля</p>
          <div class="input-wrapper"><input type="text" placeholder = "Новий пароль"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Підтвердіть новий пароль"></div>

          <button class = "btn-pass-sumb" type="submit">Зберегти</button>
        </form>
      </div>
     
      <div class="form-wrapper">
      <form class="form-data"  method="post" action="{{ route('profile.destroy') }}" class="p-6"> 
        <p class="title">Видалити аккаунт</p>
            @csrf
            @method('delete')
                <x-danger-button class="ml-3 btn-del">
                    {{ __('Delete Account') }}
                </x-danger-button>
        </form>
      </div>
      
  </div>
  

</body>
<script src="">
  const btnSumb = document.querySelector(".btn-data-sumb")
  const btnPass = document.querySelector(".btn-pass-sumb")
  btnSumb.onclick = (e)=>{
    e.preventDefault()
  }
  btnPass.onclick = (e)=>{
    e.preventDefault()
  }
</script>
</html>