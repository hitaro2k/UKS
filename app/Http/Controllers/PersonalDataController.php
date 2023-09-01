<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PersonalData;
use App\Models\OrderdProduct;
use App\Models\Products;

class PersonalDataController extends Controller
{
   public function get(Request $request){

    $orderProduct = OrderdProduct::where('user-id', $request->id)->get();

    OrderdProduct::where('user-id', $request->id )->update(['status' => 'in the process']);
    
    $codes = $orderProduct->pluck('code'); 

    $ProductsCounts = Products::whereIn('code', $codes)->pluck('count'); 

    $OrderdCounts = $orderProduct->pluck('count'); 


    $sum = [];
    foreach($ProductsCounts as $key => $count){
        $sum[] = $count - $OrderdCounts[$key];
    } 
    for ($i = 0; $i < count($codes); $i++) {
        $code = $codes[$i];
        $summ = $sum[$i];
        Products::where('code', $code)->update(['count' => $summ]);
    }

    PersonalData::create([
        'name' => $request->name,
        'surname' => $request->surname,
        'patronymic' => $request->patronymic,
        'phone' => $request->phone,
        'department' => $request->department,
        'pickup' => $request->solo,
        'user-id' => $request->id,
        'TTN' => null
    ]);     

    return redirect('profile');


   }
}
