<?php

namespace App\Http\Services;

use App\Models\Elevator;
use App\Models\Location;
use App\Models\Sequence;

class ElevatorService
{
    static function getElevators()
    {
        return Elevator::join('locations', 'locations.elevator_id', '=', 'elevators.id')
            ->select('elevators.*', 'locations.floor', 'locations.floor_id')
            ->get();
    }

    static function updateLocation($request, $id)
    {

        Location::where('elevator_id', $id)
            ->update(['floor_id' => $request->floor_id, 'floor' => $request->floor]);
        ElevatorService::createSequence($request, $id);
        return ElevatorService::getElevators();
    }

    static function createSequence($data,$elevator_id)
    {
        $sequence = new Sequence;
        $sequence->elevator_id= $elevator_id;
        $sequence->floor_id = $data->floor_id;
        $sequence->origin = $data->origin;
        $sequence->destiny = $data->floor;
        $sequence->times_call=$data->times_call;
        $sequence->save();
    }
}
