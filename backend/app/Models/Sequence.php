<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sequence extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'sequences';
    protected $fillable = [
        'elevator_id',
        'floor_id',
        'origin',
        'destiny',
        'times_call',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

   
}
