<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../style/normalize.css">
    <link rel="stylesheet" href="../style/dist/form.css">
    <link rel="stylesheet" href="../style/dist/style.css">
</head>
<body>
    <div class="wrapper">
    <form action="/app/server/personalData.php" method="POST" class="form" id="form">
      <div class="personal-info">
        <div class="personal-info__title">
          <h2 class="title">Персональнi дані</h2>
        </div>

        <div class="personal-info__client">
          <div class="info-input__wrapper">
            <input placeholder="Імя" type="text" class="info-input" name="name" id="name" value = "{{$user->name}}" />
          </div>
          <div class="info-input__wrapper">
            <input placeholder="По-батькові" type="text" class="info-input" name="patronymic"  id="patronymic" value = "{{$user->patronymic}}" />
          </div>
          <div class="info-input__wrapper">
            <input placeholder="Прізвище" type="text" class="info-input" name="surname"  id="surname" value = "{{$user->surname}}"/>
          </div>
          <div class="info-input__wrapper">
            <input name="phone" placeholder="Номер телефону" type="text" class="info-input" id="phone"  value = "{{$user->patronymic}}"/>
          </div>
         

          <div class="post-office">
            <div class="post-office__office">
              <div class="info-input__wrapper" id="info-input__post-office">
                <input
                  id="delivery-department"
                  name="delivery-department" 
                  placeholder="Номер відділу"
                  type="text"
                  class="info-input"
                />
              </div>
            </div>

            <div class="post-office__self">

              <div
                class="info-input__wrapper"
                id="info-input__post-office-self"
              >
                <input
                 id="delivery-solo"
                  name="delivery-solo"
                  placeholder="Самовивіз(вулиця Симиренка, 16А, Київ, 03134)"
                  type="text"
                  class="info-input"
                />
               
              </div>
              <p class="accept-solo">Введіть 1 якщо вибераете самовивіз</p>
            </div>
          </div>
          <input type="text" name="user-id" value="" id="unique-value" style="display: none;">
          <div class="accept-input">

          </div>
        </div>

        <div class="personal-info__payment">
            <div class="info__container">
              <div class="payment__info">
                <h3 class="payment__title">Метод платежу</h3>


                <div class="checkbox-container">
                  <label for="checkbox1" class="custom-checkbox" id="bank-payment"  data-id="1">
                    <input type="checkbox" id="checkbox1" class="hidden-checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <span class="checkbox-label">Карта/Крипта</span>
                </div>
                <div class="checkbox-container">
                  <label for="checkbox2" class="custom-checkbox" id="overlay-payment" data-id="2">
                    <input type="checkbox" id="checkbox2" class="hidden-checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <span class="checkbox-label">Накладений платіж</span>
                </div>
                

                <div class="bank-payment" data-pay="1">
                  <div class="payment__bank__method">
                    <div class="payment__item" id="privat-wrapper">
                      <img class="payment__item-img" src="../img/Privat24_Logo.png" alt="" id="privat">
                      <div class="card-number privat-number ">
                        <p class="payment__text privat__num text-to-copy" data-id="1">5168 7559 0616 6828</p>
                        <button class="copy-button" id="copy-privat">
                          <img src="../img/copy_icon.png" alt="" class="copy-img" data-target="1">
                        </button>
                      </div>
                      
                    </div>
                    <div class="payment__item"  id="mono-wrapper">
                      <img class="payment__item-img" src="../img/monobank.png" alt="" id="mono">
                      <div class="card-number monobank-number">
                        <p class="payment__text mono__num text-to-copy" data-id="2">5163 7559 0616 6828</p>
                        <button class="copy-button" id="copy-mono">
                          <img src="../img/copy_icon.png" alt="" class="copy-img" data-target="2">
                        </button>
                      </div>
                     
                    </div>
                  </div>
                  <div class="crypto__method">
                    <div class="payment__item" id="tether-wrapper">
                        <img class="payment__item-img" src="../img/tether.png" alt="" id="tether">
                        <div class="payment__net tether-number" >
                          <p class="payment__text">
                              Tron(TRC20): <span style="font-size: 0px;" data-id="3">TNNYGid4dQmuQXqTmpW3b9Hv7qLfcqyuKJ</span> 
                          </p>
                          <button class="copy-button">
                            <img src="../img/copy_icon.png" alt="" class="copy-img" data-target="3">
                          </button>
                        </div>
                    </div>
                  </div>
                </div>

                <div class="overlay-payment" data-pay="2">
                  <p class="title">+2% до суми до сплати</p>
                </div>
               
            </div>
            </div>
        </div>
      </div>

      <div class="block__product">
        <div class="block__product-title">
          <h1 class="title">Товари</h1>
        </div>
        <div class="block__product-item"></div>
        <div class="block__product-price"></div>
      </div>

    </form>
    </div>
   
</body>
<script type="module" src="../js/modules/forms/forms.js"></script>
</html>