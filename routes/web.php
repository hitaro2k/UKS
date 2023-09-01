<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\GetProductController;
use App\Http\Controllers\ProfileController;

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

Route::get('/contact', function(){return view('pages.contact');})->name('contact');

Route::get('/product/{id}', [ProductController::class, 'store'])->name('product');

Route::post('/get-product', [GetProductController::class, 'get'])->name('get.product');

Route::post('/get-personal-data', [PersonalDataController::class, 'get'])->name('presonal.data');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'store'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::get('/form', [ProfileController::class, 'test'])->name('form');

    Route::get('/profile/1', [ProfileController::class, 'editL'])->name('profile.editt');
    Route::patch('/profile/update', [ProfileController::class, 'update'])->name('profile.update')->middleware('EmailCheck');
    Route::delete('/profile/delete', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/back.php';
