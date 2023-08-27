@include('fast.header')

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
                    src="./app/img/shopping-cart.svg"
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
              <button class="total-price__button-buy">Оформить заказ</button>
            </div>
        </div>
        
        <div class="wrapper wow animate__animated animate__fadeInLeft">
           
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
    

    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>

@include('fast.footer')