<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        $data = request()->validate([
            'name'=>'string',
            'surname'=>'string',
            'number'=>'integer',
            'coment'=>'string',
        ]);
        Order::create($data);
    }
}
