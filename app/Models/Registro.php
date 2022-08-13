<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'username', 'email', 'city', 'phone', 'phone', 'name_company', 'birth_date', 'photo', 'updated_at', 'created_at'];
}
