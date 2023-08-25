<div class="popup-register" id="popup-register" >
    <div class="close-wrapper">
        <img src="/img/close.svg" alt="" class="close-popup" sty>
    </div>
   <h2 class="title">Реєстрація</h2>
   <form action="{{ route('register') }}" method="POST" class="form-register">
     @csrf
       <div class="input__wrapper">
           <input type="text" name="email" class="input" placeholder="Ваша пошта">
           <x-input-error :messages="$errors->get('email')" class="mt-2" />
       </div>
       <div class="input__wrapper">
           <input type="text" name="phone" class="input" placeholder="Ваша телефон">
           <x-input-error :messages="$errors->get('phone')" class="mt-2" />
       </div>
     
       <div class="input__wrapper">
           <input type="password" name="password" class="input" placeholder="Пароль">
           <x-input-error :messages="$errors->get('password')" class="mt-2" />
       </div>
       <div class="input__wrapper">
         <input type="text" name="name" class="input" placeholder="Ім'я">
           <x-input-error :messages="$errors->get('name')" class="mt-2" />
       </div>
       <div class="input__wrapper">
         <input type="text" name="surname" class="input" placeholder="По-батькові">
           <x-input-error :messages="$errors->get('name')" class="mt-2" />
       </div>
       <div class="input__wrapper">
         <input type="text" name="patronymic" class="input" placeholder="Прізвище">
           <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>
     <button type="submit" class="button">Зареєструватися</button>
   </form>
   <div class="enaible-account">
       <p class="title">Є обліковий запис?</p>
       <button class="button" id="auth">Авторизуватися</button>
   </div>
</div>              