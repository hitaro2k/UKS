<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalData extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['name', 'surname', 'patronymic', 'phone', 'department', 'pickup'];
    
}
