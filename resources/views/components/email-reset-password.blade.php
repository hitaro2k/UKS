<div class="popup-login" style="display: none;">
   <h2 class="title">Вхід</h2>
   <form action="{{ route('password.email') }}" method="POST" class="form-login">
   @csrf
   
      <div class="input__wrapper">
            <input type="email" name="email" class="input" placeholder="Ваша пошта">
      </div>
      <x-auth-session-status class="mb-4" :status="session('status')" />
      <x-input-error :messages="$errors->get('email')" class="mt-2" />
      <button type="submit" class="button">Авторизуватися</button>
   </form>
</div>