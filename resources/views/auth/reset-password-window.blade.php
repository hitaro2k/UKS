<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="/style/dist/preloader.css">
   <link rel="stylesheet" href="/style/normalize.css">
   <link rel="stylesheet" href="/style/dist/style.css">
   <link rel="icon" type="image/png" href="/img/favicon-32x32.png">
</head>
<body>
   <main class="main" >
   <header class="full-screen__header__container">
      <a class="logo-link" href="/">
         <img src="/img/UK.svg" alt="logo" class="logo-img" />
      </a> 
   </header>
     <div class="popup-container" style="display: flex;">
         <div class="popup-login" style="display: flex;">
            <h2 class="title">Вхід</h2>
            <form action="{{ route('password.store') }}" method="POST" class="form-login">
            @csrf
               <input type="hidden" name="token" value="{{ $request->route('token') }}">
               <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus autocomplete="username" />
               <div class="input__wrapper">
                     <input type="text" name="password" class="input" placeholder="Ваша пошта">
               </div>
               <div class="input__wrapper">
                     <input type="text" name="password_confirmation" class="input" placeholder="Ваша пошта">
               </div>
               <x-auth-session-status class="mb-4" :status="session('status')" />
               <x-input-error :messages="$errors->get('email')" class="mt-2" />
               <button type="submit" class="button">Авторизуватися</button>
            </form>
         </div>
     </div>
   </main>
</body>
</html>