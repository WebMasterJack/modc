<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Flight extends Model
{
    use HasFactory;

    public $date = null;

    protected $with = [ 'airportFrom', 'airportTo' ];

    public function airportFrom()
    {
        return $this->hasOne(Airport::class, 'id', 'from_id');
    }

    public function airportTo()
    {
        return $this->hasOne(Airport::class, 'id', 'to_id');
    }

    public function booking()
    {
        return $this->hasOne(Booking::class, 'id', 'booking_id');
    }

    public function availabilityByDate($date)
    {
        $occupiedCount = Passengers::whereHas('booking', function ($query) use ($date) {
            $query->where([
                'flight_from' => $this->id,
                'date_from' => $date,
            ])->orWhere([
                'flight_back' => $this->id,
                'date_back' => $date,
            ]);
        })->count();

        return 60 - $occupiedCount;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getTimeFromAttribute($value)
    {
        return Carbon::parse($value)->format('H:i');
    }

    public function getTimeToAttribute($value)
    {
        return Carbon::parse($value)->format('H:i');
    }
}
