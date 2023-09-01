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

    $orderProduct = OrderdProduct::where('user-id', $request->userID)->get();

    try{
        
    }catch(Excepition $e){

    }
    

    $codes = $orderProduct->pluck('id_product'); 
    PersonalData::create([
        'name' => $request->name,
        'surname' => $request->surname,
        'patronymic' => $request->patronymic,
        'phone' => $request->phone,
        'department' => $request->department,
        'pickup' => $request->solo,
        'user-id' => 'lox',
    ]);     

    return redirect('/nahui');
   }
}
