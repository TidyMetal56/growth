<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settlement_Info extends Model
{
    use HasFactory;

    protected $table = 'settlement_info';
    protected $primarykey = 'id';
    protected $fillable_Sett = ['name', 'description'];
}
