<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderdProduct;

class ArrayController extends Controller
{
    public function processArray(Request $request)
    {
        $data = $request->input('data');
        $items = $data['items'];
        $userId = end($items); 
        $status = 'not';
        for ($i = 0; $i < count($items); $i += 3) {
            $group = array_slice($items, $i, 3);
            $email = array_slice($items, -2, 1)[0];
            if (count($group) === 3) {
                $id_product = $group[0];
                $price = $group[1];
                $count = $group[2];

                OrderdProduct::create([
                    'id_product' => $id_product,
                    'price' => $price,
                    'count' => $count,
                    'email' => $email,
                    'user-id' => $userId,
                    'status' => $status
                ]);
            }
        }

        return response()->json(['message' => $items]);
    }
}
