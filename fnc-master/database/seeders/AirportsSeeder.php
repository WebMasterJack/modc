<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('airports')->insertOrIgnore([
            [ 'id' => 1, 'city' => 'Kazan', 'name' => 'Kazan', 'iata' => 'KZN', ],
            [ 'id' => 2, 'city' => 'Moscow', 'name' => 'Sheremetyevo', 'iata' => 'SVO', ],
            [ 'id' => 3, 'city' => 'St Petersburg', 'name' => 'Pulkovo', 'iata' => 'LED', ],
            [ 'id' => 4, 'city' => 'Sochi', 'name' => 'Sochi', 'iata' => 'AER', ],
        ]);
    }
}
