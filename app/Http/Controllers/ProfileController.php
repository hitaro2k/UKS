<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use App\Models\OrderdProduct;
use App\Models\Products;
class ProfileController extends Controller
{
     public function edit(Request $request): View
     {
         return view('pages.profile.edit', [
             'user' => $request->user(),
         ]);
     }

    public function editL(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    public function store(Request $request): View
    {       
        $user = Auth::user();
    
        $userProducts = OrderdProduct::where('email', $user->email)->get();
    
        $UserEmail = OrderdProduct::where('email', $user->email)->get();
    
        $OrderdProductStatus  = $UserEmail->filter(function ($orderdProduct) {
            return $orderdProduct->status === 'in the process';
        });
    
        $codes = $OrderdProductStatus->pluck('code'); 
    
        $products = Products::whereIn('code', $codes)->get(); 
    
        return view('pages.profile.main', [
            'user' => $request->user(),
            'products' => $OrderdProductStatus
        ]);
    }
    

    public function test(Request $request): View
    {   
        $user = Auth::user();
        
        return view('pages.form', [
            'user' => $request->user(),
        ]);
    } 

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $surname = $request->input('surname');

        $user = $request->user();

        if($surname === $user->surname){
            Auth::logout();

            $user->delete();

            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return Redirect::to('/');
        }else{
            return redirect()->back()->with('surname-status', 'error');
        }

        dd('nelox');
        
    }
}