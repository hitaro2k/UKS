<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\OrderdProduct;

class ArrayController extends Controller
{
    public function processArray(Request $request)
    {
        $dataArray = $request->input('data'); 
        
        $id_product = $dataArray['items'][0];     // string
        $price = $dataArray['items'][1];          // string or null
        $count = $dataArray['items'][2];          // integer
        $something = $dataArray['items'][3];      // string
        
        OrderdProduct::create([
            'id_product' => $id_product,
            'price' => $price,
            'count' => $count,
            'something' => $something
        ]);

        return response()->json(['message' => $dataArray]);
    }
}

