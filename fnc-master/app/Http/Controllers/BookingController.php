<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookingInfoResource;
use App\Http\Resources\PassengerResource;
use App\Models\Booking;
use App\Models\Passengers;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BookingController extends Controller
{
    public function booking(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'flight_from' => 'required',
            'flight_from.id' => 'required|exists:flights,id',
            'flight_from.date' => 'required|date_format:Y-m-d',
            'flight_back.id' => 'required_with:flight_back|exists:flights,id',
            'flight_back.date' => 'required_with:flight_back|date_format:Y-m-d',
            'passengers' => 'required|array|between:1,8',
            'passengers.*.first_name' => 'required',
            'passengers.*.last_name' => 'required',
            'passengers.*.birth_date' => 'required|date_format:Y-m-d',
            'passengers.*.document_number' => 'required|numeric|digits:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => [
                    'code' => 422,
                    'message' => 'Validation error',
                    'errors' => $validator->errors(),
                ],
            ], 422);
        }

        $bookingData = [
            'flight_from' => $request->flight_from['id'],
            'date_from' => $request->flight_from['date'],
            'code' => Str::upper(Str::random(5)),
        ];

        if ($request->has('flight_back')) {
            $bookingData['flight_back'] = $request->flight_back['id'];
            $bookingData['date_back'] = $request->flight_back['date'];
        }

        $booking = Booking::create($bookingData);

        $booking->passengers()->createMany($request->passengers);

        return response()->json([
            'data' => [
                'code' => $booking->code,
            ],
        ], 201);
    }

    public function info(Booking $booking)
    {
        $booking->flightFrom->setDate($booking->date_from);
        if($booking->flightBack) {
            $booking->flightBack->setDate($booking->date_back);
        }

        return new BookingInfoResource($booking);
    }

    public function getOccupiedPlaces($flight_id, $date)
    {
        $occupied = [];

        $passengersFrom = Passengers::whereHas('booking', function ($query) use ($flight_id, $date) {
            $query->where([
                'flight_from' => $flight_id,
                'date_from' => $date,
            ]);
        })->get();

        $passengersFrom->map(function ($passenger) use (&$occupied) {
            if($passenger->place_from) {
                $occupied []= [
                    'passenger_id' => $passenger->id,
                    'place' => $passenger->place_from,
                ];
            }
        });

        $passengersTo = Passengers::whereHas('booking', function ($query) use ($flight_id, $date) {
            $query->where([
                'flight_back' => $flight_id,
                'date_back' => $date,
            ]);
        })->get();

        $passengersTo->map(function ($passenger) use (&$occupied) {
            if($passenger->place_back) {
                $occupied []= [
                    'passenger_id' => $passenger->id,
                    'place' => $passenger->place_back,
                ];
            }
        });

        return $occupied;
    }

    public function flight(Booking $booking)
    {
        return response()->json([
            'data' => [
                'occupied_from' => $this->getOccupiedPlaces($booking->flight_from, $booking->date_from),
                'occupied_back' => $booking->flightBack ? $this->getOccupiedPlaces($booking->flight_back, $booking->date_back) : [],
            ],
        ]);
    }

    public function seat(Booking $booking, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'passenger' => 'required|exists:passengers,id',
            'seat' => [
                'required',
                'regex:/^(1|2|3|4|5|6|7|8|9|10|11|12)([A-D])$/'
            ],
            'type' => 'required|in:from,back',
        ]);

        if($validator->fails()) {
            return response()->json([
                'error' => [
                    'code' => 422,
                    'message' => 'Validation error',
                    'errors' => $validator->errors(),
                ],
            ], 422);
        }

        $passenger = Passengers::find($request->passenger);

        if($passenger->booking_id != $booking->id) {
            return response()->json([
                'error' => [
                    'code' => 403,
                    'message' => 'Passenger does not apply to booking',
                ],
            ], 403);
        }

        if($request->type === 'from') {
            $occupiedPlaces = $this->getOccupiedPlaces($booking->flight_from, $booking->date_from);
        } else {
            $occupiedPlaces = $this->getOccupiedPlaces($booking->flight_back, $booking->date_back);
        }

        if(in_array($request->seat, Arr::pluck($occupiedPlaces, 'place'))) {
            return response()->json([
                'error' => [
                    'code' => 422,
                    'message' => 'Seat is occupied',
                ],
            ], 422);
        }

        if($request->type === 'from') {
            $passenger->place_from = $request->seat;
        } else {
            $passenger->place_back = $request->seat;
        }
        $passenger->save();

        return response()->json([
            'data' => new PassengerResource($passenger),
        ]);
    }
}
