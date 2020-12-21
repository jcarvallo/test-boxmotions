<?php

namespace Database\Seeders;

use App\Models\Floor;
use Illuminate\Database\Seeder;

class FloorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 4; $i++) {
            $floor = new Floor;
            if ($i === 0) {
                $floor->name = "PB";
            } else {
                $floor->name = "{$i}";
            }
            $floor->save();
        }
    }
}
