@include('fast.header')
<div class = "popup__set-profile" > 
            <form action="POST">
              <div class="close-wrapper">
                <img src="/img/close.svg" alt="" class="close-popup-reset" >
              </div>
              <div class="input-wrapper"><input class = "input-set" type="text" placeholder="Ім'я"></div>
              <div class="input-wrapper"><input class = "input-set" type="text" placeholder="По батькові"></div>
              <div class="input-wrapper"><input class = "input-set" type="text" placeholder="Прізвище"></div>
              <div class="input-wrapper"><input class = "input-set" type="text" placeholder="Пошта"></div>
              <div class="input-wrapper"><input class = "input-set" type="text" placeholder="Пароль"></div>

              <button class="save-btn">Зберегти</button>
            </form>
</div>
@include('fast.footer')