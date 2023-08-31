<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PersonalData;
use App\Models\OrderProduct;
class PersonalDataController extends Controller
{
   public function get(Request $request){
    $orderProduct = OrderProduct::where('user-id', $requset->userID);

   }
}
