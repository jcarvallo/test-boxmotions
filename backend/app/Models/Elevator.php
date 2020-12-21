<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Elevator extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'elevators';
    protected $fillable = [
        'name',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function sequences()
    {
        return $this->hasMany('App\Sequence','elevator_id');
    }

}
