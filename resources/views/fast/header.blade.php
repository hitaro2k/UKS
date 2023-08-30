<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UK Service</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="../style/dist/preloader.css">
    <link rel="stylesheet" href="../style/normalize.css">
    <link rel="stylesheet" href="../style/dist/style.css">
    <link rel="icon" type="image/png" href="/img/favicon-32x32.png">
  
    @if(Route::is('contact'))
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    @endif
    @if(Route::is('client'))
    <link rel="stylesheet" href="../style/dist/client.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    @endif
</head>

  <body>
    <!-- <div id="preloader">
      <div class="rotating-image">
        <img src="/img/UK.svg" alt="">
      </div>
    </div> -->

    <main class="main">  
      <header class="full-screen__header__container">
        <a class="logo-link" href="/">
          <img src="../img/UK.svg" alt="logo" class="logo-img" />
        </a> 
        <nav class="menu">
          <ul class="menu__list">
            <!-- <li class="menu__list-item catalog" >
              <a href="#" class="menu__list-link">Каталог</a>
            </li> -->
            
            <li class="menu__list-item">
              <a href="/client" class="menu__list-link">Кліентам</a>
            </li>
            <li class="menu__list-item">
              <a href="{{Route('contact')}}" class="menu__list-link">Контакти</a>
            </li>
            <li class="menu__list-item">
              <a href="#" class="menu__list-link">Про нас</a>
            </li> 
          
            
           
          </ul>
        </nav>

        <div class="user-ui">
          <button class="button-search">
            <img src="../img/search-svg.svg" alt="img" />
          </button>
          <img
            class="shopping-card__link"
            src="../img/shopping-cart.svg"
            alt="img"
          />
          @auth
            @if(Route::is('profile'))
              <div class="button-profile-login" data-login>
                  <img  src="../img/3643745-human-man-people-person-profile_113435 1.png" alt="" class="profile__img">
              </div>
              
            @else
              <a href="/profile" class="button-profile" data-login >
                  <img  src="../img/3643745-human-man-people-person-profile_113435 1.png" alt="" class="profile__img">
              </a>
            @endif
          @else
              <div class="button-profile" id="unloginned">
                <img src="../img/3643745-human-man-people-person-profile_113435 1.png" alt="" class="profile__img">
              </div>
          @endauth

         
          <style>
            .button-profile{
              cursor: pointer;
            }
          </style>


        </div>  

        <div class="menu-btn">
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="search-stroke__container">
        <div class="search-stroke__input-close">
          <input
            type="text"
            placeholder="Введіть код товару"
            class="search-input"
          />
          <p class="close-search">Натисніть 2 рази щоб закрити</p>
        </div>

        <ul class="search-stroke__list"></ul>
      </div>

              
      <div id="message"></div>
      
      <div class="cart-menu">
        <button class="close-item" id="close-cart">Закрити</button>
        <div class="items">
          <div class="isclear">
            <div class="icons">
              <img
                class="icons-image"
                src="../img/shopping-cart.svg"
                alt=""
              />
            </div>
            <div class="items-text">
              <h2 class="items-title">Ваш кошик порожній</h2>
              <p class="items-subtitle">Ви ще не додали жодного товару</p>
            </div>
          </div>
          <div class="isntclear"></div>
        </div>

        <div class="total-price__wrapper">
          <p class="total-price__text">0 грн</p>
          <button type="submit" class="total-price__button-buy">Оформить заказ</button>
        </div>
      </div>

  
      <div class="menu-burger__wrapper">
        <nav>
          <ul class="menu--burger-list">
            <li class="menu--burger-item catalog" >
              <a class="menu--burger-item" href="#">Каталог</a>
            </li>
            <li class="menu--burger-item">
              <a class="menu--burger-item" href="#">Кліентам</a>
            </li>
            <li class="menu--burger-item">
              <a class="menu--burger-item" href="#">Популярне</a>
          </li>
          </ul>
        </nav>
      </div>

      
      <div class="popup-wrapper">
        <div class="popup-container" id="popup-container" >
          <x-auth-window/>
          <x-reg-window/>
          <x-email-reset-password/>
        </div>
      </div>
 

      
      

  
      
      