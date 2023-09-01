<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderdProduct;

class GetProductController extends Controller
{
    public function get(Request $request)
    {
        $data = $request->input('data');
        $items = $data['items'];

        $userId = end($items); 
        $email = array_slice($items, -2, 1)[0];

        for ($i = 0; $i < count($items); $i += 4) {
            $group = array_slice($items, $i, 4);

            if (count($group) === 4) {

                $name = $group[0];
                $code = $group[1];
                $price = $group[2];
                $count = $group[3];

                OrderdProduct::create([
                    'name' => $name,
                    'code' => $code,
                    'price' => $price,
                    'count' => $count,
                    'email' => $email,
                    'user-id' => $userId,
                    'status' => null
                ]);
            }
        }

        // return response()->json(['message' => $items]);
    }
}
