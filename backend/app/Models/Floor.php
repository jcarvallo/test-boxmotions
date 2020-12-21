<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'floors';
    protected $fillable = [
        'name',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function sequences()
    {
        return $this->hasMany('App\Sequence');
    }
}
