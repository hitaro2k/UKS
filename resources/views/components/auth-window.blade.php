<div class="popup-login" id="popup-login" >
    <div class="close-wrapper">
        <img src="/img/close.svg" alt="" class="close-popup" >
    </div>

    <h2 class="title">Вхід</h2>

    <form action="{{ route('login') }}" method="POST" class="form-login">
    @csrf
        <div class="input__wrapper">
            <input type="text" name="phone" class="input" placeholder="Ваш телефон">
        </div>
        <div class="input__wrapper">
            <input type="text" name="email" class="input" placeholder="Ваша пошта">
        </div>

        <div class="input__wrapper">
            <input type="password" name="password" class="input" placeholder="Ваш пароль">
        </div>
        <x-input-error :messages="$errors->get('email')" class="mt-2" />
        <button type="submit" class="button">Авторизуватися</button>
        <a href="" style="color: #d28711;">Забули пароль?</a>
    </form>
    
    <div class="enaible-account">
        <p class="title">Немає облікового запису?</p>
        <button class="button" id="register">Зареєструватися</button>
    </div>
</div>