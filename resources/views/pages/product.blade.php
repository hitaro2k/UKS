

@if($product != null)
{{$product->Производитель}}<br>
{{$product->Код}}<br>
{{$product->Описание}}<br>
{{$product->Наличие}}
@else
 Прошу идите нахуй
@endif



@isset($error)
@endisset
