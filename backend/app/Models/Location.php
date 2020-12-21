<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $table = 'locations';
    protected $fillable = [
        'elevator_id',
        'floor_id',
        'floor'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
