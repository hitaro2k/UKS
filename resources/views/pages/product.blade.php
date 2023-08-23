@include('fast.header')

@if($product != null)
  <!-- если есть товар -->
  {{$product->Производитель}}<br>
  {{$product->Код}}<br>
  {{$product->Описание}}<br>
  {{$product->Наличие}}

@else
  <!-- Если не существует, нужно выдать прям тут ответ, в хтмл, типа такого нету -->
@endif

@include('fast.footer')