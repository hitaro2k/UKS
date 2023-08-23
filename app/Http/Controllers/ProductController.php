<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products; 
class ProductController extends Controller
{
    public function store($id)
    {
        $product = Products::where('Код', $id)->first();
        return view('pages.product')->with('product', $product);
    }
}
