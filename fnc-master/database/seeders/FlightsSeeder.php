<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlightsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('flights')->insertOrIgnore([
            [ // SVO - KZN
                'from_id' => 2,
                'to_id' => 1,
                'flight_code' => 'FP2100',
                'time_from' => '08:35',
                'time_to' => '10:05',
                'cost' => 10500,
            ],
            [ // KZN - SVO
                'from_id' => 1,
                'to_id' => 2,
                'flight_code' => 'FP1200',
                'time_from' => '12:00',
                'time_to' => '13:35',
                'cost' => 9500,
            ],
            [ // SVO - LED
                'from_id' => 2,
                'to_id' => 3,
                'flight_code' => 'FP2300',
                'time_from' => '07:05',
                'time_to' => '08:20',
                'cost' => 4500,
            ],
            [ // LED - SVO
                'from_id' => 3,
                'to_id' => 2,
                'flight_code' => 'FP3200',
                'time_from' => '11:35',
                'time_to' => '12:50',
                'cost' => 5500,
            ],
            [ // SVO - AER
                'from_id' => 2,
                'to_id' => 4,
                'flight_code' => 'FP2400',
                'time_from' => '10:00',
                'time_to' => '11:20',
                'cost' => 3500,
            ],
            [ // AER - SVO
                'from_id' => 4,
                'to_id' => 2,
                'flight_code' => 'FP4200',
                'time_from' => '13:00',
                'time_to' => '14:20',
                'cost' => 4500,
            ],
            [ // LED - KZN
                'from_id' => 3,
                'to_id' => 1,
                'flight_code' => 'FP3100',
                'time_from' => '15:00',
                'time_to' => '16:50',
                'cost' => 7000,
            ],
            [ // KZN - LED
                'from_id' => 1,
                'to_id' => 3,
                'flight_code' => 'FP1300',
                'time_from' => '18:30',
                'time_to' => '20:10',
                'cost' => 7500,
            ],
            [ // LED - AER
                'from_id' => 3,
                'to_id' => 4,
                'flight_code' => 'FP3400',
                'time_from' => '18:00',
                'time_to' => '20:10',
                'cost' => 10450,
            ],
            [ // AER - LED
                'from_id' => 4,
                'to_id' => 3,
                'flight_code' => 'FP4300',
                'time_from' => '21:30',
                'time_to' => '23:10',
                'cost' => 12050,
            ],
            [ // KZN - AER
                'from_id' => 1,
                'to_id' => 4,
                'flight_code' => 'FP1400',
                'time_from' => '14:30',
                'time_to' => '16:30',
                'cost' => 15050,
            ],
            [ // AER - KZN
                'from_id' => 1,
                'to_id' => 4,
                'flight_code' => 'FP1400',
                'time_from' => '17:30',
                'time_to' => '19:30',
                'cost' => 14050,
            ],

            [ // SVO - KZN
                'from_id' => 2,
                'to_id' => 1,
                'flight_code' => 'FP2101',
                'time_from' => '12:10',
                'time_to' => '13:35',
                'cost' => 12500,
            ],
            [ // KZN - SVO
                'from_id' => 1,
                'to_id' => 2,
                'flight_code' => 'FP1201',
                'time_from' => '08:45',
                'time_to' => '10:05',
                'cost' => 10500,
            ],
            [ // SVO - LED
                'from_id' => 2,
                'to_id' => 3,
                'flight_code' => 'FP2301',
                'time_from' => '11:45',
                'time_to' => '12:50',
                'cost' => 5000,
            ],
            [ // LED - SVO
                'from_id' => 3,
                'to_id' => 2,
                'flight_code' => 'FP3201',
                'time_from' => '07:15',
                'time_to' => '08:20',
                'cost' => 6000,
            ],
            [ // SVO - AER
                'from_id' => 2,
                'to_id' => 4,
                'flight_code' => 'FP2401',
                'time_from' => '13:10',
                'time_to' => '14:20',
                'cost' => 2500,
            ],
            [ // AER - SVO
                'from_id' => 4,
                'to_id' => 2,
                'flight_code' => 'FP4201',
                'time_from' => '10:10',
                'time_to' => '11:20',
                'cost' => 3500,
            ],
            [ // LED - KZN
                'from_id' => 3,
                'to_id' => 1,
                'flight_code' => 'FP3101',
                'time_from' => '18:40',
                'time_to' => '20:10',
                'cost' => 7500,
            ],
            [ // KZN - LED
                'from_id' => 1,
                'to_id' => 3,
                'flight_code' => 'FP1301',
                'time_from' => '15:10',
                'time_to' => '16:50',
                'cost' => 6500,
            ],
            [ // LED - AER
                'from_id' => 3,
                'to_id' => 4,
                'flight_code' => 'FP3401',
                'time_from' => '21:40',
                'time_to' => '23:10',
                'cost' => 9450,
            ],
            [ // AER - LED
                'from_id' => 4,
                'to_id' => 3,
                'flight_code' => 'FP4301',
                'time_from' => '18:10',
                'time_to' => '20:10',
                'cost' => 13050,
            ],
            [ // KZN - AER
                'from_id' => 1,
                'to_id' => 4,
                'flight_code' => 'FP1401',
                'time_from' => '17:40',
                'time_to' => '19:30',
                'cost' => 13050,
            ],
            [ // AER - KZN
                'from_id' => 1,
                'to_id' => 4,
                'flight_code' => 'FP1401',
                'time_from' => '14:40',
                'time_to' => '16:30',
                'cost' => 12050,
            ],
        ]);
    }
}
