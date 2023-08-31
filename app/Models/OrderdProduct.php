<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderdProduct extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['id_product', 'price', 'count', 'email', 'user-id', 'status'];
}
