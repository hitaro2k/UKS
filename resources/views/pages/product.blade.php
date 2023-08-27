@include('fast.header')

@if($product != null)
  <!-- если есть товар -->
  <div class="content-wrapper__product">
      <div class="product" data-id = {{$product->code}}>
        <p class="product-title">{{$product->name}}</p>
        <p class="title-code">{{$product->code}}</p>
        <p class="title-author">{{$product->maker}}</p>
        <p class="title-count">{{$product->count}}</p>
        <p  class="product-price__grn">{{$product->price}}</p>
        <button class="product-btn" data><img data src="../img/shopping-cart.svg" alt="" class="product-image"></button>
      </div>

      <div class="content-analogue">
        <h3 class="title">Аналоги</h3>
          <p class="title-analogue">{{$product->analogue}}</p>
        
        </div>
        
      </div>
      
  </div>
@else
  <!-- Если не существует, нужно выдать прям тут ответ, в хтмл, типа такого нету -->
@endif

@include('fast.footer')