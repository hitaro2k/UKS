<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products; 
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    public function store($id)
    {
        $product = Products::where('code', $id)->first();

        if(Auth::check()){
            session()->put('previous_route', Route::currentRouteName());
        }
        
        return view('pages.product')->with('product', $product)->with('id', $id);
    }
}