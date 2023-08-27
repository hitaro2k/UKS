<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArrayController extends Controller
{
    public function processArray(Request $request)
    {
        $dataArray = $request->input('data'); // Получение массива из запроса

        return response()->json(['message' => $dataArray]);
    }
}

