<?php

namespace App\Http\Services;

use App\Models\Sequence;

class SequenceService
{
    static function getSequences()
    {
        return Sequence::join('elevators', 'elevators.id', '=', 'sequences.elevator_id')
            ->join('floors', 'floors.id', '=', 'sequences.floor_id')
            ->select('sequences.*', 'elevators.name as elevator')
            ->orderBy('sequences.id', 'DESC')
            ->get();
    }
}
