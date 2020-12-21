<?php

namespace App\Http\Services;

use App\Models\Floor;

class FloorService
{
    static function getFloor()
    {
        return Floor::all();
    }

    
}
