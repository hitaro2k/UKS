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
        
          <div class="panel-wrapper">
          <div class="panel-header">
            <nav class="nav">
              <ul class="list">
                <li class="list-item" data-item ="1">
                  Персональні дані
                  <span class = "span-header" data-item ="1" style="display: flex;"></span>
                </li>
                <li class="list-item" data-item ="2">Замовлення
                <span class = "span-header" data-item ="2"></span>
                </li>
                <li class="list-item" data-item ="3">Історія замовлень
                <span class = "span-header" data-item ="3"></span>
                </li>
              </ul>
            </nav>
          </div>

          <div class="panel__user-data panel"data-item = "1">
            <div class="profile-content">
            <div class="panel__user-data__personal-info">
                <h4 class="title">ДАНІ</h4>
                <p class="title-name__top">Ім'я</p>
                <p class="title-name">{{$user->name}}</p>
                <p class="title-name__top">Прізвище</p>
                <p class="title-patronymic">{{$user->patronymic}}</p>
                <p class="title-name__top">По батькові</p>
                <p class="title-surname">{{$user->surname}}</p>
                <p class="title-name__top">Телефон</p>
                <p class="title-phone">{{ $user->phone }}</p>
            </div>
            <div class="panel__user-data__media-info">
                <h4 class="title">ДАНІ ДЛЯ ВХОДУ В АКАУНТ</h4>
                <div class="media-info__mail">
                    <h4 class="title">Пошта</h4>
                    <div class="media-info__mail-inner">
                      <h4 class="title" id = "user-mail">{{$user->email}}</h4>
                    </div>
                </div>
                <div class="media-info__password">
                    <h4 class="title">Пароль</h4>
                    <div class="media-info__pass-inner">
                      <p class="title-pass">*********</p>
                    </div>
                </div>
                <div class="media-info__company">
                    <h4 class="title">Назва компанії</h4>
                    <div class="media-info__pass-inner">
                      <p class="title-pass">{{$user->company}}</p>
                    </div>
                </div>
            </div>
            </div>
        

            <div class="button-profile">
                @auth
                  <form method="POST" class ="title" action="{{ route('logout') }}">
                      @csrf

                      <x-responsive-nav-link :href="route('logout')"
                              onclick="event.preventDefault();
                                          this.closest('form').submit();">
                          {{ __('Log Out') }}
                      </x-responsive-nav-link>
                  </form> 
              @endauth
                <a href="{{ Route('profile.edit') }}" ><button class="reset-profile">Змінити профіль</button></a>
            </div>
          </div>
      <div class="panel-order panel"  data-item = "2" style="display: none;">
        <table>
          <tr>
            <th>Представник</th>
            <th>Назва</th>
            <th>Код</th>
            <th>Кількість</th>
            <th>Сума</th>
            <th>Дата оформлення</th>
            <th>Час доставки</th>
            <th>Місто</th>
            <th>Статус</th>
          </tr>
          <tr class = "item-order">
            <td><img src="./img/UK.svg" alt="" class="img"></td>
            <td>Амотизатор</td>
            <td>34ARWV32</td>
            <td>2</td>
            <td>200$</td>
            <td>21.08.2023</td>
            <td>3-14дн</td>
            <td>г.Киев</td>
            <td>В оброботке</td>
          </tr>
        </table>  
      </div> 

      <div class="panel-order__history panel" style="display: none;" data-item = "3">
        <table>
            <tr>
              <th>Представник</th>
              <th>Назва</th>
              <th>Код</th>
              <th>Кількість</th>
              <th>Сума</th>
              <th>Дата оформлення</th>
              <th>Час доставки</th>
              <th>Місто</th>
              <th>Статус</th>
            </tr>

            <tr class = "item-order">
              <td><img src="./img/UK.svg" alt="" class="img"></td>
              <td>Амотизатор</td>
              <td>34ARWV32</td>
              <td>2</td>
              <td>200$</td>
              <td>21.08.2023</td>
              <td>3-14дн</td>
              <td>г.Киев</td>
              <td>В оброботке</td>
            </tr>
            <tr class = "item-order">
              <td><img src="./img/UK.svg" alt="" class="img"></td>
              <td>Амотизатор</td>
              <td>34ARWV32</td>
              <td>2</td>
              <td>200$</td>
              <td>21.08.2023</td>
              <td>3-14дн</td>
              <td>г.Киев</td>
              <td>В оброботке</td>
            </tr>
            <tr class = "item-order">
              <td><img src="./img/UK.svg" alt="" class="img"></td>
              <td>Амотизатор</td>
              <td>34ARWV32</td>
              <td>2</td>
              <td>200$</td>
              <td>21.08.2023</td>
              <td>3-14дн</td>
              <td>г.Киев</td>
              <td>В оброботке</td>
            </tr>
          </table>  
      </div>
      </div>
        

      
       
        
        <div id="message"></div>
        
        <div class="cart-menu">
          <button class="close-item" id="close-cart">Закрити</button>
          <div class="items">
            <div class="isclear">
              <div class="icons">
                <img
                  class="icons-image"
                  src="./img/shopping-cart.svg"
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
@include('fast.footer')
