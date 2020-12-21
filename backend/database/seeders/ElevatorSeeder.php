<?php

namespace Database\Seeders;

use App\Models\Elevator;
use Illuminate\Database\Seeder;

class ElevatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 4; $i++) {
            $elevator = new Elevator;
            $elevator->name = "Ascensor {$i}";
            $elevator->save();
        }
    }
}
