<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookingInfoResource;
use App\Http\Resources\UserResource;
use App\Models\Booking;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function info()
    {
        return response()->json(new UserResource(Auth::user()));
    }

    public function logout()
    {
        Auth::user()->api_token = null;
        Auth::user()->save();
    }

    public function bookings()
    {
        $bookings = Booking::whereHas('passengers', function ($query) {
            $query->where('document_number', Auth::user()->document_number);
        })->get();

        $bookings = $bookings->map(function (Booking $booking) {
            $booking->flightFrom->setDate($booking->date_from);

            if($booking->flightBack) {
                $booking->flightBack->setDate($booking->date_back);
            }

            return $booking;
        });

        return response()->json([
            'data' => [
                'items' => BookingInfoResource::collection($bookings),
            ],
        ]);
    }
}
