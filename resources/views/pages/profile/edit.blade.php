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
          <img src="/img/close.svg" alt="" class="close-popup" id = "close-editor">
      </div>
      <div class="form-wrapper">
      <form method="post" action="{{ route('profile.update') }}" class="form-data">
        @csrf
        @method('patch')
          <p class="title">Особисті дані</p>

          <p class="title-name__top">Ім'я</p>
          <div class="input-wrapper">
            <input type="text" name="name" value="{{ $user->name }}">
          </div>

          <p class="title-name__top">Прізвище</p>
          <div class="input-wrapper">
            <input type="text" name="surname" value="{{ $user->surname }}">
          </div>

          <p class="title-name__top">По батькові</p>
          <div class="input-wrapper">
            <input type="text" name="patronymic" value="{{ $user->patronymic }}">
          </div>

          <p class="title-name__top">Пошта</p>
          <div class="input-wrapper">  
            <input type="text" name="email" value="{{ $user->email }}">
          </div>
          @if(session('error') === 'error email')
          <div class="">гамно email</div>
          @endif
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

        <!-- password -->

      <div class="form-wrapper">
        <form method="post" action="{{ route('password.update') }}" class="form-data">
        @csrf
        @method('put')
          <p class="title">Зміна пароля</p>
          <div class="input-wrapper"><input type="text" name="password" placeholder = "Новий пароль"></div>
          <div class="input-wrapper"><input type="text" name="password_confirmation" placeholder = "Підтвердіть новий пароль"></div>

          <button class = "btn-pass-sumb" type="submit">Зберегти</button>
        </form>
      </div>

      <div class="form-wrapper" >
        <div class="form-data" >
          <p class="title">Видалити аккаунт</p>
          <button class = "btn-del">Видалити акаунт</button>
        </div>
      </div>

      <div class="form-wrapper__delete" style = "display:none;">
      <form method="post" action="{{ route('profile.destroy') }}" class="p-6 form-delete">
          @csrf
          @method('delete')
          <input type="text" name="password">

            <x-input-error :messages="$errors->userDeletion->get('password')" class="mt-2" />

            <x-secondary-button x-on:click="$dispatch('close')">
                {{ __('Cancel') }}
            </x-secondary-button>

            <x-danger-button class="ml-3">
                {{ __('Delete Account') }}
            </x-danger-button>
            <!-- если не правильно ввел фамилию в инпут -->
            @if(session('surname-status') === 'error')
              <style>
                /* тут давай стиль чтобы это окно с вводом фамилии было флекс или блок или иди нахуй */
              </style>
              <div>
                <!-- тут выводи ответ мол неправильно ввел фамилию -->
              </div>
            @endif
          </form> 
      </div>
  </div>
  

</body>
<script type = "module" src="../js/modules/profile/resetProfile.js"></script>
</html>