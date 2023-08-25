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
      <div class="form-wrapper">
        <form action="" class="form-data">
          <p class="title">Особисті дані</p>
          <div class="input-wrapper"><input type="text" placeholder = "Ім'я"></div>
          <div class="input-wrapper"><input type="text" placeholder = "По батькові"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Прізвище"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Пошта"></div>

          <button type="submit">Зберегти</button>
        </form>
      </div>
        
      <div class="form-wrapper">
        <form action="" class="form-password">
          <p class="title">Зміна пароля</p>
          <div class="input-wrapper"><input type="text" placeholder = "Новий пароль"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Підтвердіть новий пароль"></div>

          <button type="submit">Зберегти</button>
        </form>
      </div>
     
      <div class="form-wrapper">
      <form method="post" action="{{ route('profile.destroy') }}" class="p-6"> 
        <p class="title">Видалити аккаунт</p>
            @csrf
            @method('delete')
                <x-danger-button class="ml-3">
                    {{ __('Delete Account') }}
                </x-danger-button>
        </form>
      </div>
      
  </div>
  

</body>
</html>