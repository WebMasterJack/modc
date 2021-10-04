<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlightResource;
use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FlightController extends Controller
{
    public function getFightsByDate($from, $to, $date)
    {
        $flights = Flight::whereHas('airportFrom', function ($query) use ($from) {
            $query->where('iata', $from);
        })->whereHas('airportTo', function ($query) use ($to) {
            $query->where('iata', $to);
        })->get();

        $flights = $flights->filter(function ($flight) use ($date) {
            return $flight->availabilityByDate($date);
        });

        $flights = $flights->map(function ($flight) use ($date) {
            $flight->setDate($date);

            return $flight;
        });

        return $flights;
    }

    public function search(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'from' => 'required|exists:airports,iata',
            'to' => 'required|exists:airports,iata',
            'date1' => 'required|date_format:Y-m-d',
            'date2' => 'date_format:Y-m-d',
            'passengers' => 'required|int|between:1,8',
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => [
                    "code" => 422,
                    "message" => "Validation error",
                    "errors" => $validator->errors(),
                ]
            ], 422);
        }

        $flights = $this->getFightsByDate($request->from, $request->to, $request->date1);

        $flightsBack = [];
        if($request->has('date2')) {
            $flightsBack = $this->getFightsByDate($request->to, $request->from, $request->date2);
        }

        return response()->json([
            'data' => [
                'flights_to' => FlightResource::collection($flights),
                'flights_back' => FlightResource::collection($flightsBack),
            ],
        ]);
    }
}
