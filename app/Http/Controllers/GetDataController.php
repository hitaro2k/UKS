<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GetDataController extends Controller
{
    public function get(Request $request)
    {
        $data = $request->json()->all();
        dd($data);
    }
}
