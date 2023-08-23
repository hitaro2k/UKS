<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ResetPasswordController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'pages.index')->name('home');

Route::view('/client', 'pages.client')->name('client');
Route::view('/product', 'pages.product')->name('product');
Route::get('/get-api', 'ApiController')->name('get.api.all.production');
Route::get('/contact', function(){return view('pages.contact');})->name('contact');
Route::view('/test', 'auth.verify-email');
Route::get('/product/{id-product}', [ProductController::class, 'store']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'store'])->name('profile');

    Route::get('/profile/1', [ProfileController::class, 'editL'])->name('profile.edit');
    Route::patch('/profile/2', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile/3', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
