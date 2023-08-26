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
      <form method="post" action="{{ route('profile.update') }}" class="form-data">
        @csrf
        @method('patch')
          <p class="title">Особисті дані</p>
          <div class="input-wrapper"><input type="text" name="name" value="{{ $user->name }}"></div>
          <div class="input-wrapper"><input type="text" name="surname" value="{{ $user->surname }}"</div>
          <div class="input-wrapper"><input type="text" name="patronymic" value="{{ $user->patronymic }}"</div>
          <div class="input-wrapper"><input type="text" name="email" value="{{ $user->email }}"</div>
          <x-input-error class="mt-2" :messages="$errors->get('email')" />
          @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                <div>
                    <p class="text-sm mt-2 text-gray-800 dark:text-gray-200">
                        {{ __('Your email address is unverified.') }}

                        <button form="send-verification" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                            {{ __('Click here to re-send the verification email.') }}
                        </button>
                    </p>

                    @if (session('status') === 'verification-link-sent')
                        <p class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                            {{ __('A new verification link has been sent to your email address.') }}
                        </p>
                    @endif
                </div>
            @endif

          <button class = "btn-data-sumb"  type="submit">Зберегти</button>
        </form>
        @if (session('status') === 'profile-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class=""
                >{{ __('Дані успіно збережені.') }}</p>
            @endif
      </div>
        
      <div class="form-wrapper">
        <form action="" class="form-password">
          <p class="title">Зміна пароля</p>
          <div class="input-wrapper"><input type="text" placeholder = "Новий пароль"></div>
          <div class="input-wrapper"><input type="text" placeholder = "Підтвердіть новий пароль"></div>

          <button class = "btn-pass-sumb" type="submit">Зберегти</button>
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