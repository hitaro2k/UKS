<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products; 
class ProductController extends Controller
{
    public function store($id)
    {
        $product = Products::where('code', $id)->first();
        $price = $product->price;

        $exchange = Products::first()->value('exchange');   

        $sum = $exchange / $price;
        
        return view('pages.product')->with('product', $product)->with('price', $sum);
    }
}